(window.webpackJsonp=window.webpackJsonp||[]).push([[28],{83:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return i})),r.d(t,"metadata",(function(){return c})),r.d(t,"rightToc",(function(){return p})),r.d(t,"default",(function(){return s}));var n=r(2),a=r(6),o=(r(0),r(99)),i={id:"arg",title:"Arg",sidebar_label:"Arg"},c={unversionedId:"api/arg",id:"api/arg",isDocsHomePage:!1,title:"Arg",description:"`ts",source:"@site/docs/api/arg.md",permalink:"/engine/docs/api/arg",editUrl:"https://github.com/code11/engine/edit/master/docs/docs/api/arg.md",sidebar_label:"Arg",sidebar:"docs",previous:{title:"Prop",permalink:"/engine/docs/api/prop"},next:{title:"Param",permalink:"/engine/docs/api/param"}},p=[{value:"Overview",id:"overview",children:[]},{value:"Example",id:"example",children:[]}],l={rightToc:p};function s(e){var t=e.components,r=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(n.a)({},l,r,{components:t,mdxType:"MDXLayout"}),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-ts"}),'import { Arg } from "@c11/engine.macro"\n')),Object(o.b)("h2",{id:"overview"},"Overview"),Object(o.b)("p",null,Object(o.b)("inlineCode",{parentName:"p"},"Arg")," allows referring to other arguments in the header of a\n",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/api/producer"}),"producer")," or ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/api/view"}),"view"),". It makes it possible\nto treat other keys of the header object as local variables. All of the\nfollowing are valid uses of ",Object(o.b)("inlineCode",{parentName:"p"},"Arg"),":"),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-ts"}),"        const result: producer = ({\n          a1 = '123',\n          a2 = Arg.a1,            // Access previously defined argument\n          a3 = Arg.b1.b2.b3.b4    // Access nested properties of another Arg\n          a4 = Arg.a2[Arg.a1],    // Dynamically access argument properties based on other Arg\n          a5 = Arg.a3[Prop.foo],  // Dynamically access argument properties based on other Engine operators\n        }) => { }\n")),Object(o.b)("h2",{id:"example"},"Example"),Object(o.b)("p",null,"If we have a ",Object(o.b)("inlineCode",{parentName:"p"},"TodoItem")," component which accepts a single arg ",Object(o.b)("inlineCode",{parentName:"p"},"id: string"),", and\nglobal state which looks like:"),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-ts"}),'{\n  todosById: {\n    todo1: { title: "My first todo" }\n  },\n  tagsByTitle: {\n    "My first todo": ["tag1", "tag2"]\n  }\n}\n')),Object(o.b)("p",null,"It is possible to access tags for the Todo with ",Object(o.b)("inlineCode",{parentName:"p"},"id"),", by composing path using\n",Object(o.b)("inlineCode",{parentName:"p"},"Arg"),":"),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-tsx"}),"const TodoItem: view = ({\n  title: Observe.todosById[Prop.id],\n  tags: Observe.tagsByTitle[Arg.title]\n}) => { ... }\n")),Object(o.b)("p",null,"In this example, ",Object(o.b)("inlineCode",{parentName:"p"},"TodoItem")," will have access to ",Object(o.b)("inlineCode",{parentName:"p"},'tags = ["tag1", "tag2"]'),"."),Object(o.b)("p",null,Object(o.b)("inlineCode",{parentName:"p"},"Arg")," is also very useful with combined with\n",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/api/wildcard"}),"Wildcard")))}s.isMDXComponent=!0},99:function(e,t,r){"use strict";r.d(t,"a",(function(){return b})),r.d(t,"b",(function(){return m}));var n=r(0),a=r.n(n);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function p(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=a.a.createContext({}),s=function(e){var t=a.a.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):c(c({},t),e)),r},b=function(e){var t=s(e.components);return a.a.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},u=a.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,i=e.parentName,l=p(e,["components","mdxType","originalType","parentName"]),b=s(r),u=n,m=b["".concat(i,".").concat(u)]||b[u]||d[u]||o;return r?a.a.createElement(m,c(c({ref:t},l),{},{components:r})):a.a.createElement(m,c({ref:t},l))}));function m(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,i=new Array(o);i[0]=u;var c={};for(var p in t)hasOwnProperty.call(t,p)&&(c[p]=t[p]);c.originalType=e,c.mdxType="string"==typeof e?e:n,i[1]=c;for(var l=2;l<o;l++)i[l]=r[l];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,r)}u.displayName="MDXCreateElement"}}]);