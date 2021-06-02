(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[419],{4107:function(e,t,n){"use strict";n.d(t,{Zo:function(){return u},kt:function(){return m}});var r=n(4387);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),c=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=c(e.components);return r.createElement(s.Provider,{value:t},e.children)},l={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,u=p(e,["components","mdxType","originalType","parentName"]),d=c(n),m=a,h=d["".concat(s,".").concat(m)]||d[m]||l[m]||o;return n?r.createElement(h,i(i({ref:t},u),{},{components:n})):r.createElement(h,i({ref:t},u))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=d;var p={};for(var s in t)hasOwnProperty.call(t,s)&&(p[s]=t[s]);p.originalType=e,p.mdxType="string"==typeof e?e:a,i[1]=p;for(var c=2;c<o;c++)i[c]=n[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},8677:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return p},metadata:function(){return s},toc:function(){return c},default:function(){return l}});var r=n(129),a=n(7489),o=(n(4387),n(4107)),i=["components"],p={id:"producer",title:"producer",sidebar_label:"producer"},s={unversionedId:"api/producer",id:"api/producer",isDocsHomePage:!1,title:"producer",description:"`ts",source:"@site/docs/api/producer.md",sourceDirName:"api",slug:"/api/producer",permalink:"/engine/docs/api/producer",editUrl:"https://github.com/code11/engine/edit/master/docs/docs/api/producer.md",version:"current",sidebar_label:"producer",frontMatter:{id:"producer",title:"producer",sidebar_label:"producer"},sidebar:"docs",previous:{title:"React Module",permalink:"/engine/docs/api/react-module"},next:{title:"view",permalink:"/engine/docs/api/view"}},c=[{value:"Overview",id:"overview",children:[]},{value:"Running a producer",id:"running-a-producer",children:[]},{value:"Example",id:"example",children:[]},{value:"Example with clean-up",id:"example-with-clean-up",children:[]},{value:"Parts",id:"parts",children:[{value:"Header",id:"header",children:[]},{value:"Guards",id:"guards",children:[]},{value:"Processing",id:"processing",children:[]}]},{value:"Best practices",id:"best-practices",children:[]}],u={toc:c};function l(e){var t=e.components,n=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},'import { producer } from "@c11/engine.macro"\n')),(0,o.kt)("h2",{id:"overview"},"Overview"),(0,o.kt)("p",null,"A ",(0,o.kt)("inlineCode",{parentName:"p"},"producer")," is simply a function that gets executed when something interesting\n(a trigger) changes in state."),(0,o.kt)("p",null,"Any function can be turned into a producer by labeling it with ",(0,o.kt)("inlineCode",{parentName:"p"},"producer"),". It\nallows using Engine features to interact with the state using\n",(0,o.kt)("a",{parentName:"p",href:"/docs/api/observe"},"observe"),", ",(0,o.kt)("a",{parentName:"p",href:"/docs/api/get"},"get"),", and\n",(0,o.kt)("a",{parentName:"p",href:"/docs/api/update"},"update"),". It is also possible to use ",(0,o.kt)("a",{parentName:"p",href:"/docs/api/prop"},"prop")," in\nproducers, even though it is not possible to pass a value directly to the\nproducer. producer receives same values as the ",(0,o.kt)("a",{parentName:"p",href:"/docs/api/view"},"view")," it is\nadded to in ",(0,o.kt)("inlineCode",{parentName:"p"},"prop"),"s."),(0,o.kt)("p",null,"The syntax is straight forward:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"const producer: producer = ({ /* header */ }) => { /* body */ }\n")),(0,o.kt)("p",null,"The ",(0,o.kt)("strong",{parentName:"p"},"header")," is a regular object that uses the Engine API to declare what data\nthe producer needs at runtime."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"{\n  bar = observe.foo.bar,\n  baz = get.foo.baz\n}\n")),(0,o.kt)("p",null,"The ",(0,o.kt)("strong",{parentName:"p"},"body")," part is left entirely to the developer. It's a normal function\nbody."),(0,o.kt)("img",{src:"/static/img/producer.jpg",alt:"Producer"}),(0,o.kt)("p",null,"Additionally, the producer function can return a callback for clean-up purposes.\nThis will be called when the producer will be unmounted from the state and thus\nno longer in operation."),(0,o.kt)("h2",{id:"running-a-producer"},"Running a producer"),(0,o.kt)("p",null,"A ",(0,o.kt)("inlineCode",{parentName:"p"},"producer")," can not be called directly. Engine considers a ",(0,o.kt)("inlineCode",{parentName:"p"},"producer")," for\nexecution if it is added to a ",(0,o.kt)("a",{parentName:"p",href:"/docs/api/view"},"view"),"'s ",(0,o.kt)("inlineCode",{parentName:"p"},".producers")," array, or is\nadded to ",(0,o.kt)("inlineCode",{parentName:"p"},"Engine"),"'s global producers list. e.g ",(0,o.kt)("inlineCode",{parentName:"p"},"myProducer")," can added to a\n",(0,o.kt)("inlineCode",{parentName:"p"},"Button")," view with:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"```tsx\nButton.producers = [myProducer];\n```\n")),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"producer"),"s are executed by Engine on following occasions:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Globally added ",(0,o.kt)("inlineCode",{parentName:"li"},"producer"),"s are executed once when engine starts"),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("inlineCode",{parentName:"li"},"producer"),"s added to a ",(0,o.kt)("a",{parentName:"li",href:"/docs/api/view"},"view"),"'s ",(0,o.kt)("inlineCode",{parentName:"li"},"producers")," array are\nexecuted once every time the view is mounted"),(0,o.kt)("li",{parentName:"ol"},"A ",(0,o.kt)("inlineCode",{parentName:"li"},"producer")," is executed every time any of its ",(0,o.kt)("inlineCode",{parentName:"li"},"observe"),"d value (also\nreferred to as producer's trigger) is updated.")),(0,o.kt)("h2",{id:"example"},"Example"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"observe"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"get")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"update"),' are used in the first object argument of a\nproducer function, which is referred to as the "header" of a function. In the\nheader, Engine operators can be used to interact with state. For example'),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tsx"},"const todoCounter: producer = ({\n  todosById = observe.todosById,\n  updateCount = update.count\n}) => (\n  const count = Object.keys(todosById).length;\n\n  updateCount.set(count);\n);\n")),(0,o.kt)("h2",{id:"example-with-clean-up"},"Example with clean-up"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tsx"},"const subscriber: producer = ({\n  something = update.something\n}) => (\n  const stream = subscribeToStream(value => {\n    something.set(value)\n  })\n  return () => {\n    stream.unsubscribe()\n  }\n);\n")),(0,o.kt)("h2",{id:"parts"},"Parts"),(0,o.kt)("p",null,"Although a producer is just a function, at a conceptual level it can be broken\ninto parts with different/specific responsibilities:"),(0,o.kt)("img",{src:"/static/img/producer-parts.png",alt:"Conceptual parts of a producer"}),(0,o.kt)("h3",{id:"header"},"Header"),(0,o.kt)("p",null,"This is where you declare everything that the producer will need in the\nexecution part."),(0,o.kt)("p",null,"It can take static data, variables, ",(0,o.kt)("a",{parentName:"p",href:"/docs/api/prop"},"parent\nproperties"),", ",(0,o.kt)("a",{parentName:"p",href:"/docs/api/path"},"path operations"),", ",(0,o.kt)("a",{parentName:"p",href:"/docs/api/arg"},"argument\nreferences"),"."),(0,o.kt)("p",null,"Full example:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"const foo = 123\nconst producer: producer = ({\n  varValue = foo,\n  staticValue = 'sample text',\n  propValue = prop.value,\n  propValue2, // Same as prop.propValue2\n  updateValue = update.sample.path,\n  observeValue = observe.sample.value,\n  getValue = get.sample.otherValue,\n  refValue = arg.propValue2\n}) => { ... }\n")),(0,o.kt)("h3",{id:"guards"},"Guards"),(0,o.kt)("p",null,"Producers will be triggered by the Engine regardless of whether the data they\ndepend on is valid or not. It is the producer's responsability to decide if the\ndata is suitable for its execution needs."),(0,o.kt)("p",null,"Data from the triggers (i.e ",(0,o.kt)("inlineCode",{parentName:"p"},"observe")," operations) should be checked first, and\nthe producer should exit if its requirements aren't fulfilled."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"const producer: producer = ({\n  description = observe.description,\n  summary = update.summary\n}) => {\n  if (!description || !isString(description) ) {\n    return\n  }\n  summary.set(description.substr(0, 20))\n}\n")),(0,o.kt)("p",null,"Guards can also be used to stop effects from happening (e.g. triggering another system):"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"import axios from 'axios'\nconst producer: producer = ({\n  post = axios.post\n  trigger = observe.submit,\n  getUrl = get.url\n  getData = get.data,\n  updateData = update.data,\n  updateError = update.error\n}) => {\n  if (!trigger) {\n    return\n  }\n\n  const data = getData();\n  const url = getUrl();\n\n  if (!isValid(data) || !url) {\n  updateError.set('Invalid state');\n    return;\n  }\n\n  try {\n    const response = await post(url, data);\n\n    updateData.set(response.data);\n  } catch (err) {\n    updateError.set(err.message);\n  }\n}\n")),(0,o.kt)("h3",{id:"processing"},"Processing"),(0,o.kt)("p",null,"Producers contain the logic of an Engine app. Any process (aka domain operation)\ncan (and should) be defined as one ore more producers acting on some data.\nProcessing data can be broadly categorized into two categories based on the kind\nof results they achieve."),(0,o.kt)("h4",{id:"effects"},"Effects"),(0,o.kt)("p",null,"Producers can call other systems, interact with the environment and produces\nchanges that are not visible in the state."),(0,o.kt)("p",null,"For example making an XHR request to retrieve data, read the browser session\nstorage, interact with the DOM API or set timers."),(0,o.kt)("h4",{id:"updates"},"Updates"),(0,o.kt)("p",null,"Producers can update the current state of the Engine app. The state can only be\nchanged through the ",(0,o.kt)("inlineCode",{parentName:"p"},"update")," operation."),(0,o.kt)("p",null,"This means, ",(0,o.kt)("inlineCode",{parentName:"p"},"producer"),"s will be pushing new data to the Engine which in turn\ntrigger other producers to execute and in turn update the state."),(0,o.kt)("h4",{id:"clean-up"},"Clean-up"),(0,o.kt)("p",null,"Producers can be long running by subscribing to streams, initiating long calls, using\ntimers, etc. As such, when the ",(0,o.kt)("inlineCode",{parentName:"p"},"producer")," is unmounted from the state, it is the\n",(0,o.kt)("inlineCode",{parentName:"p"},"producer"),"'s responsability to provide a callback for clean-up purposes. See the\nexample above."),(0,o.kt)("h2",{id:"best-practices"},"Best practices"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"A ",(0,o.kt)("inlineCode",{parentName:"p"},"producer")," should perform a single, very specific job. The more specific\nthe better. It is okay to have many small producers doing one thing each.")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"All the dependencies of a producers should be passed in the header.\nThe following is encouraged to increase the testability and reusability of the producer:"),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"import axios from 'axios'\n\nconst producer: producer = ({\n  get = axios.get,\n  data = observe.data\n  ...\n}) => {\n  get({ ... })\n}\n")))))}l.isMDXComponent=!0},129:function(e,t,n){"use strict";function r(){return(r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}n.d(t,{Z:function(){return r}})},7489:function(e,t,n){"use strict";function r(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}n.d(t,{Z:function(){return r}})}}]);