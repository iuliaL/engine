"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[348],{6164:function(e,t,n){n.d(t,{Zo:function(){return s},kt:function(){return m}});var r=n(3289);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=r.createContext({}),l=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},s=function(e){var t=l(e.components);return r.createElement(c.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,s=p(e,["components","mdxType","originalType","parentName"]),u=l(n),m=o,f=u["".concat(c,".").concat(m)]||u[m]||d[m]||a;return n?r.createElement(f,i(i({ref:t},s),{},{components:n})):r.createElement(f,i({ref:t},s))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=u;var p={};for(var c in t)hasOwnProperty.call(t,c)&&(p[c]=t[c]);p.originalType=e,p.mdxType="string"==typeof e?e:o,i[1]=p;for(var l=2;l<a;l++)i[l]=n[l];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},487:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return p},metadata:function(){return c},toc:function(){return l},default:function(){return d}});var r=n(753),o=n(1242),a=(n(3289),n(6164)),i=["components"],p={id:"prop",title:"prop",sidebar_label:"prop"},c={unversionedId:"api/prop",id:"api/prop",isDocsHomePage:!1,title:"prop",description:"Overview",source:"@site/docs/api/prop.md",sourceDirName:"api",slug:"/api/prop",permalink:"/engine/docs/api/prop",editUrl:"https://github.com/code11/engine/edit/master/docs/docs/api/prop.md",version:"current",sidebar_label:"prop",frontMatter:{id:"prop",title:"prop",sidebar_label:"prop"},sidebar:"docs",previous:{title:"update",permalink:"/engine/docs/api/update"},next:{title:"arg",permalink:"/engine/docs/api/arg"}},l=[{value:"Overview",id:"overview",children:[]},{value:"Example",id:"example",children:[]}],s={toc:l};function d(e){var t=e.components,n=(0,o.Z)(e,i);return(0,a.kt)("wrapper",(0,r.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"overview"},"Overview"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"prop")," gives access to props given to the ",(0,a.kt)("a",{parentName:"p",href:"/docs/api/view"},"view"),"s, so that they\ncan be used as data in the view, and to ",(0,a.kt)("a",{parentName:"p",href:"/docs/concepts/path-composition"},"compose\npaths")," for accessing state. ",(0,a.kt)("inlineCode",{parentName:"p"},"prop")," can also be\nused in ",(0,a.kt)("a",{parentName:"p",href:"/docs/api/producer"},"producer"),"s, in which case they pass the ",(0,a.kt)("inlineCode",{parentName:"p"},"prop"),"s\nreceived by the corresponding view."),(0,a.kt)("h2",{id:"example"},"Example"),(0,a.kt)("p",null,"For example, if a ",(0,a.kt)("inlineCode",{parentName:"p"},"TodoItem")," component accepts a single prop ",(0,a.kt)("inlineCode",{parentName:"p"},"id: string"),", and\nglobal state looks like:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},'{\n  todosById: {\n    todo1: { title: "My first todo" }\n  }\n}\n')),(0,a.kt)("p",null,"It is possible to access ",(0,a.kt)("inlineCode",{parentName:"p"},"title")," for the Todo with a given ",(0,a.kt)("inlineCode",{parentName:"p"},"id"),", by using\n",(0,a.kt)("inlineCode",{parentName:"p"},"prop.id")," as path. e.g"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx"},"const TodoItem: view = ({\n  id, // shortcut for prop.id\n  title = observe.todosById[prop.id]\n}) => { ... }\n")),(0,a.kt)("p",null,"In this example, when ",(0,a.kt)("inlineCode",{parentName:"p"},"TodoItem")," is used as ",(0,a.kt)("inlineCode",{parentName:"p"},'<TodoItem id="todo1" />')," anywhere\nin the application, it will get ",(0,a.kt)("inlineCode",{parentName:"p"},"My first todo")," as value of ",(0,a.kt)("inlineCode",{parentName:"p"},"title"),"."))}d.isMDXComponent=!0}}]);