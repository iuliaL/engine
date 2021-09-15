(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[589],{4107:function(e,t,n){"use strict";n.d(t,{Zo:function(){return c},kt:function(){return u}});var o=n(4387);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,o,i=function(e,t){if(null==e)return{};var n,o,i={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=o.createContext({}),p=function(e){var t=o.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},c=function(e){var t=p(e.components);return o.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},m=o.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),m=p(n),u=i,f=m["".concat(l,".").concat(u)]||m[u]||d[u]||a;return n?o.createElement(f,r(r({ref:t},c),{},{components:n})):o.createElement(f,r({ref:t},c))}));function u(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,r=new Array(a);r[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:i,r[1]=s;for(var p=2;p<a;p++)r[p]=n[p];return o.createElement.apply(null,r)}return o.createElement.apply(null,n)}m.displayName="MDXCreateElement"},8127:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return s},metadata:function(){return l},toc:function(){return p},default:function(){return d}});var o=n(129),i=n(7489),a=(n(4387),n(4107)),r=["components"],s={id:"accessing-state-in-components",title:"Accessing State in Components",sidebar_label:"Accessing State"},l={unversionedId:"tutorials/react/accessing-state-in-components",id:"tutorials/react/accessing-state-in-components",isDocsHomePage:!1,title:"Accessing State in Components",description:"Converting a React Component to Engine view allow accessing",source:"@site/docs/tutorials/react/accessing-state-in-components.md",sourceDirName:"tutorials/react",slug:"/tutorials/react/accessing-state-in-components",permalink:"/engine/docs/tutorials/react/accessing-state-in-components",editUrl:"https://github.com/code11/engine/edit/master/docs/docs/tutorials/react/accessing-state-in-components.md",version:"current",sidebar_label:"Accessing State",frontMatter:{id:"accessing-state-in-components",title:"Accessing State in Components",sidebar_label:"Accessing State"},sidebar:"docs",previous:{title:"State is King!",permalink:"/engine/docs/tutorials/react/state-is-king"},next:{title:"Updating State from Components",permalink:"/engine/docs/tutorials/react/updating-state-from-components"}},p=[],c={toc:p};function d(e){var t=e.components,n=(0,i.Z)(e,r);return(0,a.kt)("wrapper",(0,o.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Converting a React Component to Engine ",(0,a.kt)("a",{parentName:"p",href:"/docs/api/view"},"view")," allow accessing\ntodos from state In ",(0,a.kt)("inlineCode",{parentName:"p"},"src/App.tsx"),":"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-diff"},'import React from "react";\n+ import { view, observe } from "@c11/engine.macro";\n+\n- const App = () => (\n+ const App: view = ({ todoIds = observe.visibleTodoIds }) => (\n  <section className="todoapp">\n+     {console.log("TODOS", todoIds)}\n')),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("inlineCode",{parentName:"li"},"App")," component is labeled as a ",(0,a.kt)("inlineCode",{parentName:"li"},"view")),(0,a.kt)("li",{parentName:"ol"},"In ",(0,a.kt)("inlineCode",{parentName:"li"},"App"),"'s header, ",(0,a.kt)("inlineCode",{parentName:"li"},"observe.visibileTodoIds")," allow reading ",(0,a.kt)("inlineCode",{parentName:"li"},"State.visibileTodoIds"))),(0,a.kt)("p",null,"Todos ids from state can be seen printed in console! Engine allow observing any\npart of the state by assigning it as ",(0,a.kt)("inlineCode",{parentName:"p"},"observe.<path>")," in header of a `view."),(0,a.kt)("p",null,"Extract the ",(0,a.kt)("inlineCode",{parentName:"p"},"<Todo>")," component out of",(0,a.kt)("inlineCode",{parentName:"p"},"<App>")," to easily ",(0,a.kt)("inlineCode",{parentName:"p"},"map")," todo ids to",(0,a.kt)("inlineCode",{parentName:"p"},"Todo"),"\ncomponents, and put it in its own file. In ",(0,a.kt)("inlineCode",{parentName:"p"},"src/Todo.tsx"),", add"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx"},'import React from "react";\n\nconst Todo = ({ id }) => (\n<li>\n  <div className="view">\n    <input className="toggle" type="checkbox" />\n    <label>{id}</label>\n    <button className="destroy" />\n  </div>\n</li>\n);\n\nexport default Todo;\n')),(0,a.kt)("p",null,"Update the ",(0,a.kt)("inlineCode",{parentName:"p"},"App")," component with:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-diff"},'+ import Todo from \'./Todo\';\n...\n      <ul className="todo-list">\n-       <li>\n-         <div className="view">\n-           <input className="toggle" type="checkbox" />\n-           <label>Give life to my TODOs</label>\n-           <button className="destroy" />\n-         </div>\n-       </li>\n+       {todoIds.map((id: string) => (\n+         <Todo id={id} key={id} />\n+       ))}\n      </ul>\n')),(0,a.kt)("p",null,"As per the implementation of",(0,a.kt)("inlineCode",{parentName:"p"},"Todo"),", it is possible to see todo ids(i.e",(0,a.kt)("inlineCode",{parentName:"p"},"todo1"),",\n",(0,a.kt)("inlineCode",{parentName:"p"},"todo2"),") in browser. But it should actually show",(0,a.kt)("inlineCode",{parentName:"p"},"TodoItem.title"),", not their\nid."),(0,a.kt)("p",null,"This is where Engine differs from traditional React apps. Engine recommends that\n","[parent component should pass minimal data to its children]","(docs / best -\npractices#pass - minimal - data - to - children). Minimum amount of data needed\nto render a ",(0,a.kt)("inlineCode",{parentName:"p"},"Todo")," is its ",(0,a.kt)("inlineCode",{parentName:"p"},"id"),". Right todo can be retrieved from global state\nwith its id. Modify the ",(0,a.kt)("inlineCode",{parentName:"p"},"Todo")," component to follow the Engine way:"),(0,a.kt)("p",null,"In",(0,a.kt)("inlineCode",{parentName:"p"},"src/Todo.tsx")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-diff"},'+ import { view, observe, prop } from "@c11/engine.macro";\n+\n- const Todo = ({ id }) => (\n+ const Todo: view = ({ title = observe.todosById[prop.id].title }) => (\n<li>\n  <div className="view">\n    <input className="toggle" type="checkbox" />\n-     <label>{id}</label>\n+     <label>{title}</label>\n    <button className="destroy" />\n  </div>\n</li>\n);\n')),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("inlineCode",{parentName:"li"},"Todo")," is converted to a",(0,a.kt)("a",{parentName:"li",href:"/docs/api/view"},"view")," (by labeling it with ",(0,a.kt)("inlineCode",{parentName:"li"},"view")," macro)"),(0,a.kt)("li",{parentName:"ol"},"Assigning ",(0,a.kt)("inlineCode",{parentName:"li"},"title")," to ",(0,a.kt)("inlineCode",{parentName:"li"},"observe.todosById[prop.id].title")," in view header gives\naccess to the title of a todo from the global state")),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"/docs/api/prop"},"prop")," allow ",(0,a.kt)("a",{parentName:"p",href:"/docs/concepts/path-composition"},"composing\npaths")," for accessing data from global\nstate. ",(0,a.kt)("inlineCode",{parentName:"p"},"prop.<path>")," gives access to all the ",(0,a.kt)("a",{parentName:"p",href:"https://reactjs.org/docs/components-and-props.html"},"React\nprops")," passed to a component\nby its parent."),(0,a.kt)("p",null,"Every ",(0,a.kt)("inlineCode",{parentName:"p"},"view")," in Engine can access any data path from Engine's global state.\nTrick is getting the right thing. The input macros help achieving clever ways of\n",(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("a",{parentName:"strong",href:"/docs/concepts/path-composition"},"path composition"))," to get the\nright data into views."),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"observe.todosById[prop.id].title")," tells Engine to look-up a todo with ",(0,a.kt)("inlineCode",{parentName:"p"},"prop.id"),"\nin ",(0,a.kt)("inlineCode",{parentName:"p"},"todosById")," object of the global state, and observe its ",(0,a.kt)("inlineCode",{parentName:"p"},"title")," property. This\ngives read-only access to ",(0,a.kt)("inlineCode",{parentName:"p"},"title"),"."),(0,a.kt)("p",null,"This also ensures that the view gets re-rendered whenever ",(0,a.kt)("inlineCode",{parentName:"p"},"title")," property of\ntodo with id ",(0,a.kt)("inlineCode",{parentName:"p"},"prop.id")," changes. Any other changes that happen in the state, even\nin the todo itself will not affect the view."))}d.isMDXComponent=!0},129:function(e,t,n){"use strict";function o(){return(o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e}).apply(this,arguments)}n.d(t,{Z:function(){return o}})},7489:function(e,t,n){"use strict";function o(e,t){if(null==e)return{};var n,o,i={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(i[n]=e[n]);return i}n.d(t,{Z:function(){return o}})}}]);