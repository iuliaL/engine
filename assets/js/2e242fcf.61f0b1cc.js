(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[615],{4107:function(e,t,r){"use strict";r.d(t,{Zo:function(){return c},kt:function(){return v}});var n=r(4387);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function p(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=n.createContext({}),s=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},c=function(e){var t=s(e.components);return n.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,c=p(e,["components","mdxType","originalType","parentName"]),d=s(r),v=a,f=d["".concat(l,".").concat(v)]||d[v]||u[v]||i;return r?n.createElement(f,o(o({ref:t},c),{},{components:r})):n.createElement(f,o({ref:t},c))}));function v(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,o=new Array(i);o[0]=d;var p={};for(var l in t)hasOwnProperty.call(t,l)&&(p[l]=t[l]);p.originalType=e,p.mdxType="string"==typeof e?e:a,o[1]=p;for(var s=2;s<i;s++)o[s]=r[s];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},5473:function(e,t,r){"use strict";r.r(t),r.d(t,{frontMatter:function(){return p},metadata:function(){return l},toc:function(){return s},default:function(){return u}});var n=r(129),a=r(7489),i=(r(4387),r(4107)),o=["components"],p={id:"observe",title:"observe",sidebar_label:"observe"},l={unversionedId:"api/observe",id:"api/observe",isDocsHomePage:!1,title:"observe",description:"Overview",source:"@site/docs/api/observe.md",sourceDirName:"api",slug:"/api/observe",permalink:"/engine/docs/api/observe",editUrl:"https://github.com/code11/engine/edit/master/docs/docs/api/observe.md",version:"current",sidebar_label:"observe",frontMatter:{id:"observe",title:"observe",sidebar_label:"observe"},sidebar:"docs",previous:{title:"view",permalink:"/engine/docs/api/view"},next:{title:"get",permalink:"/engine/docs/api/get"}},s=[{value:"Overview",id:"overview",children:[]},{value:"API",id:"api",children:[{value:"<code>observe.&lt;path&gt;: any</code>",id:"observepath-any",children:[]}]},{value:"Example",id:"example",children:[]}],c={toc:s};function u(e){var t=e.components,r=(0,a.Z)(e,o);return(0,i.kt)("wrapper",(0,n.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"overview"},"Overview"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"observe"),' gives the ability to observe values from global state. To get a "live"\nversion of a value from Engine\'s global state, state properties can be directly\naccessed from the imported ',(0,i.kt)("inlineCode",{parentName:"p"},"observe"),"."),(0,i.kt)("p",null,"Every use of ",(0,i.kt)("inlineCode",{parentName:"p"},"observe")," in a ",(0,i.kt)("inlineCode",{parentName:"p"},"view"),"/",(0,i.kt)("inlineCode",{parentName:"p"},"producer"),"'s header can be thought of as\nadding a trigger. Whenever the ",(0,i.kt)("inlineCode",{parentName:"p"},"observe"),"d value changes in state, for whatsoever\nreason, the view or producer using this value will be re-computed."),(0,i.kt)("h2",{id:"api"},"API"),(0,i.kt)("h3",{id:"observepath-any"},(0,i.kt)("inlineCode",{parentName:"h3"},"observe.<path>: any")),(0,i.kt)("p",null,"If ",(0,i.kt)("inlineCode",{parentName:"p"},"<path>")," is a valid path to an existing property of State, ",(0,i.kt)("inlineCode",{parentName:"p"},"observe.<path>"),"\nreturns value stored at that path in State, otherwise it returns ",(0,i.kt)("inlineCode",{parentName:"p"},"undefined"),". If\nthe value is serializable (e.g a primitive Javascript type, a plain object), a\ncopy of the data is returned. However, if the value is not serializable (e.g a\nclass instance, function etc), a reference to it is returned."),(0,i.kt)("h2",{id:"example"},"Example"),(0,i.kt)("p",null,"e.g if the state looks like:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "foo": {\n    "bar": "baz"\n  }\n}\n')),(0,i.kt)("p",null,"value of ",(0,i.kt)("inlineCode",{parentName:"p"},"bar")," can be obtained by assigning ",(0,i.kt)("inlineCode",{parentName:"p"},"observe.foo.bar")," in header of the\n",(0,i.kt)("a",{parentName:"p",href:"/docs/api/view"},"view")," or ",(0,i.kt)("a",{parentName:"p",href:"/docs/api/producer"},"producer"),". For example,"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"const MyView: view = ({ barVal = observe.foo.bar }) => { ... }\n")),(0,i.kt)("p",null,"Whenever an ",(0,i.kt)("inlineCode",{parentName:"p"},"observe"),"d value in state is changed (e.g with\n",(0,i.kt)("a",{parentName:"p",href:"/docs/api/update"},"update"),"), the view or producer using it is re-triggered."))}u.isMDXComponent=!0},129:function(e,t,r){"use strict";function n(){return(n=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}r.d(t,{Z:function(){return n}})},7489:function(e,t,r){"use strict";function n(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}r.d(t,{Z:function(){return n}})}}]);