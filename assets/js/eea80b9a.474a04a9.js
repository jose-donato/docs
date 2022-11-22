"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[70052],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>f});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=a.createContext({}),d=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=d(e.components);return a.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),u=d(n),f=r,m=u["".concat(l,".").concat(f)]||u[f]||p[f]||o;return n?a.createElement(m,i(i({ref:t},c),{},{components:n})):a.createElement(m,i({ref:t},c))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=u;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:r,i[1]=s;for(var d=2;d<o;d++)i[d]=n[d];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},53561:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>s,default:()=>u,frontMatter:()=>i,metadata:()=>l,toc:()=>c});var a=n(87462),r=(n(67294),n(3905)),o=n(87018);const i={sidebar_position:1},s="Introduction",l={unversionedId:"index",id:"index",title:"Introduction",description:"OpenBB SDK gives you direct and programmatic access to all capabilities from",source:"@site/content/sdk/index.md",sourceDirName:".",slug:"/",permalink:"/sdk/",draft:!1,tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",next:{title:"Installation",permalink:"/sdk/getstarted/installation"}},d={},c=[{value:"Getting Started",id:"getting-started",level:3},{value:"Using OpenBB SDK",id:"using-openbb-sdk",level:3},{value:"SDK Functions",id:"sdk-functions",level:3},{value:"Showcase",id:"showcase",level:3}],p={toc:c};function u(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"introduction"},"Introduction"),(0,r.kt)("p",null,"OpenBB SDK gives you direct and programmatic access to all capabilities from\nOpenBB Terminal. You will have the necessary building blocks to create your own\nfinancial tools and applications, whether that be a visualization dashboard or a\ncustom report on Jupyter Notebook."),(0,r.kt)("p",null,"With OpenBB SDK, you can gain access to normalized financial data from dozens of\ndata providers, without having to develop your own integrations from scratch. On\ntop of financial data feeds, OpenBB SDK also provides you with a toolbox to\nperform financial analysis on a variety of asset classes, including stocks,\ncrypto, ETFs, funds, and the economy as well as portfolio optimization and\nanalysis."),(0,r.kt)("p",null,"OpenBB SDK is created and maintained by the OpenBB team together with the\ncontributions from hundreds of community members. This gives us an unrivaled\nspeed of development and the ability to maintain stable integrations with\nnumerous third-party data providers. Developing and maintaining a full-blown\ninvestment research infrastructure from the ground up takes a lot of time and\neffort. However, it does not have to be this way. By taking advantage of OpenBB\nSDK with its out-of-the-box data connectors and financial analysis toolkit, now\nyou can focus on designing and building your financial reports and applications."),(0,r.kt)("hr",null),(0,r.kt)(o.Z,{type:"sdk",title:"What is OpenBB SDK?",description:"OpenBB SDK is a Python library that provides you with a set of tools to access\nfinancial data and perform financial analysis.",mdxType:"Card"}),(0,r.kt)(o.Z,{type:"sdk",title:"Who uses it?",description:"OpenBB SDK is used by financial analysts, data scientists, and developers to\nbuild financial applications and reports.",mdxType:"Card"}),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"getting-started"},"Getting Started"),(0,r.kt)("p",null,"To know more about OpenBB SDK, you can start by reading the\n",(0,r.kt)("a",{parentName:"p",href:"/sdk/getstarted/installation"},"Installation Guide"),"."),(0,r.kt)("h3",{id:"using-openbb-sdk"},"Using OpenBB SDK"),(0,r.kt)("p",null,"To learn how to use OpenBB SDK, you can start by reading the\n",(0,r.kt)("a",{parentName:"p",href:"/sdk/guides/basics"},"Getting Started Guide"),"."),(0,r.kt)("h3",{id:"sdk-functions"},"SDK Functions"),(0,r.kt)("p",null,"SDK Reference is a complete list of all functions available in OpenBB SDK. It is\nautomatically generated and updated every time a new version of OpenBB SDK is\nreleased. It can be found ",(0,r.kt)("a",{parentName:"p",href:"/sdk/reference"},"here"),"."),(0,r.kt)("h3",{id:"showcase"},"Showcase"),(0,r.kt)("p",null,"OpenBB SDK is used by many financial analysts, data scientists, and developers\nto build financial applications and reports. Here are some examples of what you\ncan do with OpenBB SDK: ",(0,r.kt)("a",{parentName:"p",href:"/sdk/showcase"},"Showcase"),"."))}u.isMDXComponent=!0},87018:(e,t,n)=>{n.d(t,{Z:()=>o});var a=n(86010),r=n(67294);n(48334);function o(e){let{title:t,description:n,className:o="mb-8",type:i="terminal"}=e;return r.createElement("div",{style:{backgroundImage:"terminal"===i?"url('/img/terminal_bg.png')":"url('/img/sdk_bg.png')",backgroundRepeat:"no-repeat",backgroundSize:"100% 130%"},className:(0,a.Z)("shadow-sm group !no-underline text-grey-900 dark:text-white hover:text-grey-900 dark:hover:border-white hover:border-grey-900 dark:hover:!text-white relative w-full max-w-full p-8 rounded-lg border border-grey-400 bg-white dark:bg-grey-900",o)},r.createElement("p",{className:"uppercase tracking-widest font-bold text-lg"},t),r.createElement("p",{className:"text-sm dark:text-grey-300"},n),!1)}}}]);