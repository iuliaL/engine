(window.webpackJsonp=window.webpackJsonp||[]).push([[25],{80:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return p})),n.d(t,"rightToc",(function(){return c})),n.d(t,"default",(function(){return s}));var r=n(2),o=n(6),a=(n(0),n(99)),i={id:"prop",title:"Prop",sidebar_label:"Prop"},p={unversionedId:"api/prop",id:"api/prop",isDocsHomePage:!1,title:"Prop",description:"`ts",source:"@site/docs/api/prop.md",permalink:"/engine/docs/api/prop",editUrl:"https://github.com/code11/engine/edit/master/docs/docs/api/prop.md",sidebar_label:"Prop",sidebar:"docs",previous:{title:"Update",permalink:"/engine/docs/api/update"},next:{title:"Arg",permalink:"/engine/docs/api/arg"}},c=[{value:"Overview",id:"overview",children:[]},{value:"Example",id:"example",children:[]}],l={rightToc:c};function s(e){var t=e.components,n=Object(o.a)(e,["components"]);return Object(a.b)("wrapper",Object(r.a)({},l,n,{components:t,mdxType:"MDXLayout"}),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-ts"}),'import { Prop } from "@c11/engine.macro"\n')),Object(a.b)("h2",{id:"overview"},"Overview"),Object(a.b)("p",null,Object(a.b)("inlineCode",{parentName:"p"},"Prop")," gives access to props given to the ",Object(a.b)("a",Object(r.a)({parentName:"p"},{href:"/docs/api/view"}),"view"),"s, so that they\ncan be used as data in the view, and to ",Object(a.b)("a",Object(r.a)({parentName:"p"},{href:"/docs/concepts/path-composition"}),"compose\npaths")," for accessing state. Prop can also be\nused in ",Object(a.b)("a",Object(r.a)({parentName:"p"},{href:"/docs/api/producer"}),"producer"),"s, in which case they pass the ",Object(a.b)("inlineCode",{parentName:"p"},"Prop"),"s\nreceived by the corresponding view."),Object(a.b)("h2",{id:"example"},"Example"),Object(a.b)("p",null,"For example, if a ",Object(a.b)("inlineCode",{parentName:"p"},"TodoItem")," component accepts a single prop ",Object(a.b)("inlineCode",{parentName:"p"},"id: string"),", and\nglobal state looks like:"),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-ts"}),'{\n  todosById: {\n    todo1: { title: "My first todo" }\n  }\n}\n')),Object(a.b)("p",null,"It is possible to access ",Object(a.b)("inlineCode",{parentName:"p"},"title")," for the Todo with a given ",Object(a.b)("inlineCode",{parentName:"p"},"id"),", by using\n",Object(a.b)("inlineCode",{parentName:"p"},"Prop.id")," as path. e.g"),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-tsx"}),"const TodoItem: view = ({\n  id, // shortcut for Prop.id\n  title: Observe.todosById[Prop.id]\n}) => { ... }\n")),Object(a.b)("p",null,"In this example, when ",Object(a.b)("inlineCode",{parentName:"p"},"TodoItem")," is used as ",Object(a.b)("inlineCode",{parentName:"p"},'<TodoItem id="todo1" />')," anywhere\nin the application, it will get ",Object(a.b)("inlineCode",{parentName:"p"},"My first todo")," as value of ",Object(a.b)("inlineCode",{parentName:"p"},"title"),"."))}s.isMDXComponent=!0},99:function(e,t,n){"use strict";n.d(t,"a",(function(){return b})),n.d(t,"b",(function(){return m}));var r=n(0),o=n.n(r);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function p(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=o.a.createContext({}),s=function(e){var t=o.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):p(p({},t),e)),n},b=function(e){var t=s(e.components);return o.a.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},u=o.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,i=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),b=s(n),u=r,m=b["".concat(i,".").concat(u)]||b[u]||d[u]||a;return n?o.a.createElement(m,p(p({ref:t},l),{},{components:n})):o.a.createElement(m,p({ref:t},l))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,i=new Array(a);i[0]=u;var p={};for(var c in t)hasOwnProperty.call(t,c)&&(p[c]=t[c]);p.originalType=e,p.mdxType="string"==typeof e?e:r,i[1]=p;for(var l=2;l<a;l++)i[l]=n[l];return o.a.createElement.apply(null,i)}return o.a.createElement.apply(null,n)}u.displayName="MDXCreateElement"}}]);