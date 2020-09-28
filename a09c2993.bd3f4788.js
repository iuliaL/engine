(window.webpackJsonp=window.webpackJsonp||[]).push([[21],{76:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return r})),n.d(t,"metadata",(function(){return c})),n.d(t,"rightToc",(function(){return l})),n.d(t,"default",(function(){return p}));var i=n(2),o=n(6),a=(n(0),n(91)),r={id:"introduction",title:"Introduction",sidebar_label:"Introduction"},c={unversionedId:"introduction",id:"introduction",isDocsHomePage:!0,title:"Introduction",description:"What is the Code11 Engine?",source:"@site/docs/introduction.md",permalink:"/engine/docs/",editUrl:"https://github.com/code11/engine/edit/master/docs/docs/introduction.md",sidebar_label:"Introduction",sidebar:"docs",next:{title:"Usage",permalink:"/engine/docs/usage"}},l=[{value:"What is the Code<sup>11</sup> Engine?",id:"what-is-the-code11-engine",children:[]},{value:"Goals",id:"goals",children:[]},{value:"Principles",id:"principles",children:[]}],s={rightToc:l};function p(e){var t=e.components,n=Object(o.a)(e,["components"]);return Object(a.b)("wrapper",Object(i.a)({},s,n,{components:t,mdxType:"MDXLayout"}),Object(a.b)("h3",{id:"what-is-the-code11-engine"},"What is the Code",Object(a.b)("sup",null,"11")," Engine?"),Object(a.b)("p",null,"Engine is a meta-framework for creating web applications."),Object(a.b)("p",null,"The Engine keenly focuses on developer productivity. It allows creating robust\nweb applications with unprecedented simplicity."),Object(a.b)("h3",{id:"goals"},"Goals"),Object(a.b)("p",null,"Engine strives to build applications with"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"Small codebase. Less code, less bugs, more hairs still on head"),Object(a.b)("li",{parentName:"ul"},"Less work for computer. Only compute what is needed for faster applications"),Object(a.b)("li",{parentName:"ul"},"Less work for developer. Minimal API which gets out of developers way. Allows\nfocusing on business problems, not Engine problems")),Object(a.b)("h3",{id:"principles"},"Principles"),Object(a.b)("p",null,'Instead of creating perfect bricks and sticking them together into "the perfect\napplication", ',Object(a.b)("strong",{parentName:"p"},"mold your application just like you would do with clay"),". Let it\ngradually evolve over time without any friction or constraints."),Object(a.b)("p",null,"Engine is built with keeping real-world, evolving requirements in mind, and all\nthe challenges that come with it."),Object(a.b)("h4",{id:"dumb-as-brick-components"},"Dumb as brick Components"),Object(a.b)("blockquote",null,Object(a.b)("p",{parentName:"blockquote"},"A view is just another representation of some data")),Object(a.b)("p",null,"Components are bricks of an Engine view, and they should be as dumb as bricks. A\ncomponent does not do anything except:"),Object(a.b)("ol",null,Object(a.b)("li",{parentName:"ol"},"Render the view it is supposed to display"),Object(a.b)("li",{parentName:"ol"},"Change the data it is supposed to represent")),Object(a.b)("h4",{id:"evolving-data"},"Evolving Data"),Object(a.b)("blockquote",null,Object(a.b)("p",{parentName:"blockquote"},"At the core of every UI is a state")),Object(a.b)("p",null,"The clay of an application is its state. Although the core of the application,\nstate in engine is simply a plain old Javascript Object. As the requirements\nevolve, so do the state, and views and logic associated with it."),Object(a.b)("h4",{id:"reactive-computations"},"Reactive Computations"),Object(a.b)("p",null,"Dumb components, plain data, and computations capable of reacting to changes in\nthe data makes an Engine app."),Object(a.b)("p",null,"Engine apps are reactive. They start with:"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"an initial state (which can be empty as well)"),Object(a.b)("li",{parentName:"ul"},"declare dumb views that represent some part(s) of state e.g a\n",Object(a.b)("inlineCode",{parentName:"li"},"TodoListItem")," component which needs a ",Object(a.b)("inlineCode",{parentName:"li"},"TodoItem")," object from state"),Object(a.b)("li",{parentName:"ul"},"declare computations that depend on some part(s) of state, e.g a ",Object(a.b)("inlineCode",{parentName:"li"},"doneCounter"),"\nfunction which depends on all ",Object(a.b)("inlineCode",{parentName:"li"},"TodoItems")," in state to count number of done\ntodos")),Object(a.b)("p",null,"Engine takes care of updating the view and re-running the computations only when\ntheir dependencies from state change."),Object(a.b)("p",null,"This is all the plumbing needed to build an Engine app!"))}p.isMDXComponent=!0},91:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return m}));var i=n(0),o=n.n(i);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,i,o=function(e,t){if(null==e)return{};var n,i,o={},a=Object.keys(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=o.a.createContext({}),p=function(e){var t=o.a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},u=function(e){var t=p(e.components);return o.a.createElement(s.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},d=o.a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,r=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),u=p(n),d=i,m=u["".concat(r,".").concat(d)]||u[d]||b[d]||a;return n?o.a.createElement(m,c(c({ref:t},s),{},{components:n})):o.a.createElement(m,c({ref:t},s))}));function m(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,r=new Array(a);r[0]=d;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:i,r[1]=c;for(var s=2;s<a;s++)r[s]=n[s];return o.a.createElement.apply(null,r)}return o.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"}}]);