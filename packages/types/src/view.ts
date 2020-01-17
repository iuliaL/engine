import { ProducerData, StructOperation } from "./producer";

export type ViewFn = (data: ProducerData) => JSX.Element;

export interface RenderConfig {
  element: JSX.Element;
  root: string;
}

export interface ViewConfig {
  args: StructOperation;
  fn: ViewFn;
}

export interface RenderInstance {
  unmount: () => RenderInstance;
  mount: () => RenderInstance;
}
