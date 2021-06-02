(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[643],{4107:function(e,t,n){"use strict";n.d(t,{Zo:function(){return s},kt:function(){return m}});var r=n(4387);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),l=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},s=function(e){var t=l(e.components);return r.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,c=e.parentName,s=p(e,["components","mdxType","originalType","parentName"]),d=l(n),m=a,g=d["".concat(c,".").concat(m)]||d[m]||u[m]||i;return n?r.createElement(g,o(o({ref:t},s),{},{components:n})):r.createElement(g,o({ref:t},s))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=d;var p={};for(var c in t)hasOwnProperty.call(t,c)&&(p[c]=t[c]);p.originalType=e,p.mdxType="string"==typeof e?e:a,o[1]=p;for(var l=2;l<i;l++)o[l]=n[l];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},2335:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return p},metadata:function(){return c},toc:function(){return l},default:function(){return u}});var r=n(129),a=n(7489),i=(n(4387),n(4107)),o=["components"],p={id:"setup",title:"Quick Start with React",sidebar_label:"Setup"},c={unversionedId:"tutorials/react/setup",id:"tutorials/react/setup",isDocsHomePage:!1,title:"Quick Start with React",description:"Although Engine itself is platform neutral, Engine's reactive features really",source:"@site/docs/tutorials/react/setup.md",sourceDirName:"tutorials/react",slug:"/tutorials/react/setup",permalink:"/engine/docs/tutorials/react/setup",editUrl:"https://github.com/code11/engine/edit/master/docs/docs/tutorials/react/setup.md",version:"current",sidebar_label:"Setup",frontMatter:{id:"setup",title:"Quick Start with React",sidebar_label:"Setup"},sidebar:"docs",previous:{title:"React",permalink:"/engine/docs/implementations/react"},next:{title:"Static UI",permalink:"/engine/docs/tutorials/react/static-ui"}},l=[{value:"Building a React Engine App",id:"building-a-react-engine-app",children:[]},{value:"Setup",id:"setup",children:[{value:"Install Engine",id:"install-engine",children:[]},{value:"Create an Engine instance",id:"create-an-engine-instance",children:[]},{value:"Add styles",id:"add-styles",children:[]},{value:"Starter Markup",id:"starter-markup",children:[]}]}],s={toc:l};function u(e){var t=e.components,n=(0,a.Z)(e,o);return(0,i.kt)("wrapper",(0,r.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Although Engine itself is platform neutral, Engine's reactive features really\nshine when building a React application."),(0,i.kt)("h2",{id:"building-a-react-engine-app"},"Building a React Engine App"),(0,i.kt)("p",null,"This tutorial builds a TodoMVC app following the specs defined at\n",(0,i.kt)("a",{parentName:"p",href:"http://todomvc.com/"},"todomvc.com"),"."),(0,i.kt)("h2",{id:"setup"},"Setup"),(0,i.kt)("p",null,"Use ",(0,i.kt)("inlineCode",{parentName:"p"},"create-react-app")," to create a vanilla react app."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sh"},"yarn create react-app engine-todos --template typescript\n")),(0,i.kt)("p",null,"Engine itself is written in Typescript, and recommends using it for creating\nReact applications using Engine."),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"yarn start")," can be used to start a vanilla react app on\n",(0,i.kt)("a",{parentName:"p",href:"http://localhost:3000"},"localhost:3000"),"."),(0,i.kt)("h3",{id:"install-engine"},"Install Engine"),(0,i.kt)("p",null,"Following command will install engine dependencies:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sh"},"yarn add @c11/engine.macro @c11/engine.react\n")),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"@c11/engine.macro")," contain the platform agnostic core of Engine, and\n",(0,i.kt)("inlineCode",{parentName:"p"},"@c11/engine.react")," contain the React bindings. Find out more about engine\npackages on ",(0,i.kt)("a",{parentName:"p",href:"/docs/packages"},"packages")," page."),(0,i.kt)("h3",{id:"create-an-engine-instance"},"Create an Engine instance"),(0,i.kt)("p",null,"First step for building an Engine app is creating an ",(0,i.kt)("inlineCode",{parentName:"p"},"Engine")," instance, and let\nit take control of the app. In the ",(0,i.kt)("inlineCode",{parentName:"p"},"src/index.tsx")," file:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-diff"},"import React from 'react';\n- import ReactDOM from 'react-dom';\n+ import { Engine } from \"@c11/engine.react\";\nimport './index.css';\nimport App from './App';\n\n- ReactDOM.render(\n-   <React.StrictMode>\n-     <App />\n-   </React.StrictMode>,\n-   document.getElementById(\"root\")\n- );\n+ const engine = new Engine({\n+   view: {\n+     element: <App />,\n+     root: \"#root\"\n+   }\n+ });\n+\n+ engine.start();\n")),(0,i.kt)("p",null,"Engine takes care of mounting the app to DOM instead of having ",(0,i.kt)("inlineCode",{parentName:"p"},"react-dom"),"."),(0,i.kt)("p",null,"This creates a valid, running Engine app."),(0,i.kt)("p",null,"Up next: some chores to set the stage for building the TodoMVC app:"),(0,i.kt)("h3",{id:"add-styles"},"Add styles"),(0,i.kt)("p",null,"To keep the focus on building the React side of things, install\n",(0,i.kt)("inlineCode",{parentName:"p"},"todomvc-app-css")," npm package with ",(0,i.kt)("inlineCode",{parentName:"p"},"yarn add todomvc-app-css"),". Update\n",(0,i.kt)("inlineCode",{parentName:"p"},"src/index.tsx")," file to use it:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-diff"},'- import "./index.css";\n+ import "todomvc-app-css/index.css";\nimport App from "./App";\n- import * as serviceWorker from "./serviceWorker";\n...\n- // If you want your app to work offline and load faster, you can change\n- // unregister() to register() below. Note this comes with some pitfalls.\n- // Learn more about service workers: https://bit.ly/CRA-PWA\n- serviceWorker.unregister();\n')),(0,i.kt)("p",null,"This step:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Imported CSS from ",(0,i.kt)("inlineCode",{parentName:"li"},"todomvc-app-css")),(0,i.kt)("li",{parentName:"ul"},"Removed ",(0,i.kt)("inlineCode",{parentName:"li"},"create-react-app"),"'s default css and service worker code. Files\ncontaining dead code can now be deleted:",(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-sh"},"rm src/index.css\nrm src/serviceWorker.ts\n")))),(0,i.kt)("h3",{id:"starter-markup"},"Starter Markup"),(0,i.kt)("p",null,"To conclude this chapter, update ",(0,i.kt)("inlineCode",{parentName:"p"},"/src/App.tsx")," and add some markup to make the\napp feel more like the TodoMVC. Replace contents of ",(0,i.kt)("inlineCode",{parentName:"p"},"/src/App.tsx")," with:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-tsx"},'import React from "react";\n\nconst App = () => (\n  <section className="todoapp">\n    <div>\n      <header className="header">\n        <h1>todos</h1>\n      </header>\n    </div>\n  </section>\n);\n\nexport default App;\n')),(0,i.kt)("p",null,"Replacing the default JSX allows removing some more code that is dead now:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sh"},"rm src/App.css\nrm public/logo*\n")),(0,i.kt)("p",null,"CSS is provided by ",(0,i.kt)("inlineCode",{parentName:"p"},"todomvc-app-css")," npm package, which mandates using correct\nCSS classes to keep the app looking right."))}u.isMDXComponent=!0},129:function(e,t,n){"use strict";function r(){return(r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}n.d(t,{Z:function(){return r}})},7489:function(e,t,n){"use strict";function r(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}n.d(t,{Z:function(){return r}})}}]);