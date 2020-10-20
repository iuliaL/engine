(window.webpackJsonp=window.webpackJsonp||[]).push([[34],{90:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return c})),n.d(t,"rightToc",(function(){return p})),n.d(t,"default",(function(){return s}));var r=n(2),a=n(6),o=(n(0),n(99)),i={id:"param",title:"Param",sidebar_label:"Param"},c={unversionedId:"api/param",id:"api/param",isDocsHomePage:!1,title:"Param",description:"`ts",source:"@site/docs/api/param.md",permalink:"/engine/docs/api/param",editUrl:"https://github.com/code11/engine/edit/master/docs/docs/api/param.md",sidebar_label:"Param",sidebar:"docs",previous:{title:"Arg",permalink:"/engine/docs/api/arg"},next:{title:"Wildcard",permalink:"/engine/docs/api/wildcard"}},p=[{value:"Overview",id:"overview",children:[]},{value:"Example",id:"example",children:[]}],l={rightToc:p};function s(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},l,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-ts"}),'import { Param } from "@c11/engine.macro"\n')),Object(o.b)("h2",{id:"overview"},"Overview"),Object(o.b)("p",null,Object(o.b)("inlineCode",{parentName:"p"},"Param")," allow using runtime values from the view/producer to create new paths."),Object(o.b)("p",null,"Occasionally, a ",Object(o.b)("inlineCode",{parentName:"p"},"producer")," or ",Object(o.b)("inlineCode",{parentName:"p"},"view")," need to access a path in state, which\ndepends on a value which is created in the producer itself. ",Object(o.b)("inlineCode",{parentName:"p"},"Param")," is the\n",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"/docs/concepts/path-composition"}),"path-composition")," operator to use in such\nsituations."),Object(o.b)("p",null,"For example, ",Object(o.b)("inlineCode",{parentName:"p"},"Update.*")," functions can be given an object in their second\nargument. Every key in this object can then be referred to with ",Object(o.b)("inlineCode",{parentName:"p"},"Param.<key>")," in\nthe header"),Object(o.b)("h2",{id:"example"},"Example"),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-tsx"}),"const App: view = ({\n  update = Update.items[Params.foo][Params.bar]\n}) => (\n  <input onChange={e => update(e.target.value,\n    { foo: 'state_path', bar: 'yet_another_state_path' }\n  )}>\n);\n")),Object(o.b)("p",null,"It allows moving a lot of complexity of accessing and setting of state, to the\npath structure; without needing any intermediate state in the view/producer\nitself."))}s.isMDXComponent=!0},99:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return b}));var r=n(0),a=n.n(r);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=a.a.createContext({}),s=function(e){var t=a.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},u=function(e){var t=s(e.components);return a.a.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},m=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,i=e.parentName,l=p(e,["components","mdxType","originalType","parentName"]),u=s(n),m=r,b=u["".concat(i,".").concat(m)]||u[m]||d[m]||o;return n?a.a.createElement(b,c(c({ref:t},l),{},{components:n})):a.a.createElement(b,c({ref:t},l))}));function b(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=m;var c={};for(var p in t)hasOwnProperty.call(t,p)&&(c[p]=t[p]);c.originalType=e,c.mdxType="string"==typeof e?e:r,i[1]=c;for(var l=2;l<o;l++)i[l]=n[l];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"}}]);