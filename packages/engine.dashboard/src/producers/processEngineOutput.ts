import {
  OutputStructure,
  InstrumentationOutput,
} from "@c11/engine.babel-plugin-syntax";
import { OperationTypes, ValueTypes } from "@c11/engine.types";
import mergeWith from "lodash/mergeWith";
import isArray from "lodash/isArray";
import engineOutput from "../engine.output.json";

type StateSection = {
  id?: string;
  name: string;
  elements?: {
    view?: string[];
    producer?: string[];
  };
  children: {
    [k: string]: StateSection;
  };
};

//TODO: Maybe storing this in a relational form might be easier
// to handle afterwards
type StateStructure = StateSection;

type StateElements = {
  [key: string]: InstrumentationOutput;
};
function customizer(objValue, srcValue) {
  if (isArray(objValue)) {
    return objValue.concat(srcValue);
  }
}

const merge = (a, b) => mergeWith(a, b, customizer);

export const processEngineOutput: producer = ({
  _engineOutput = engineOutput,
  updateStructureData = update.structure.data,
  updateStructureElements = update.structure.elements,
  updateStructureRaw = update.structure.raw,
}) => {
  const output = _engineOutput as OutputStructure;
  // console.log('output is', output)

  updateStructureRaw.set(output);
  const elements = Object.entries(output).reduce((acc, [fileName, locals]) => {
    acc = merge(acc, locals);
    return acc;
  }, {});

  updateStructureElements.set(elements);

  const stateStructure: StateStructure = Object.entries(output).reduce(
    (acc, [fileName, locals]) => {
      const result = Object.entries(locals).reduce(
        (acc, [uid, value]) => {
          const element = value;
          if (value.params.type === OperationTypes.STRUCT) {
            const params = value.params.value;

            const result = Object.entries(params).reduce(
              (acc, [paramName, operation]) => {
                if (
                  operation.type === OperationTypes.OBSERVE ||
                  operation.type === OperationTypes.GET ||
                  operation.type === OperationTypes.UPDATE
                ) {
                  let part: StateSection["children"] = {};
                  let section: StateSection = {
                    name: "root",
                    children: part,
                  };
                  const path = Array.from(operation.path);
                  let last;
                  for (let member of path) {
                    const name: string =
                      member.type === ValueTypes.CONST &&
                      typeof member.value === "string"
                        ? member.value
                        : "[unknown]";

                    //TODO: this should be an id
                    part[name] = {
                      name: name,
                      children: {},
                    };
                    last = part[name];
                    part = part[name].children;
                  }
                  if (last) {
                    last.elements = {
                      [element.type]: [element.buildId],
                    };
                  }
                  acc = merge(acc, section);
                }
                return acc;
              },
              {
                name: "root",
                children: {},
              } as StateStructure
            );
            acc = merge(acc, result);
          } else if (value.params.type === OperationTypes.PASSTHROUGH) {
            // console.log("dealing with passthrough");
          }
          return acc;
        },
        {
          name: "root",
          children: {},
        }
      );
      acc = merge(acc, result);
      return acc;
    },
    {
      name: "root",
      children: {},
    }
  );

  updateStructureData.set(stateStructure);
};