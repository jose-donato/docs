"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[77112],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>d});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=r.createContext({}),p=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=p(e.components);return r.createElement(s.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},c=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),c=p(n),d=o,f=c["".concat(s,".").concat(d)]||c[d]||m[d]||a;return n?r.createElement(f,i(i({ref:t},u),{},{components:n})):r.createElement(f,i({ref:t},u))}));function d(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=c;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:o,i[1]=l;for(var p=2;p<a;p++)i[p]=n[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}c.displayName="MDXCreateElement"},9040:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>m,frontMatter:()=>a,metadata:()=>l,toc:()=>p});var r=n(87462),o=(n(67294),n(3905));const a={title:"Requirements",sidebar_position:1},i=void 0,l={unversionedId:"getstarted/requirements",id:"getstarted/requirements",title:"Requirements",description:"Requirements",source:"@site/content/sdk/getstarted/requirements.md",sourceDirName:"getstarted",slug:"/getstarted/requirements",permalink:"/sdk/getstarted/requirements",draft:!1,tags:[],version:"current",sidebarPosition:1,frontMatter:{title:"Requirements",sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"Introduction",permalink:"/sdk/"},next:{title:"Installation",permalink:"/sdk/getstarted/installation"}},s={},p=[{value:"Requirements",id:"requirements",level:3}],u={toc:p};function m(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h3",{id:"requirements"},"Requirements"),(0,o.kt)("p",null,"Python 3.9"),(0,o.kt)("p",null,"Basic understanding of the following Python Packages -"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Pandas"),(0,o.kt)("li",{parentName:"ul"},"Numpy"),(0,o.kt)("li",{parentName:"ul"},"Matplotlib"),(0,o.kt)("li",{parentName:"ul"},"Requests"),(0,o.kt)("li",{parentName:"ul"},"JSON")),(0,o.kt)("p",null,"Computer with x specs"),(0,o.kt)("p",null,"While enough to use most functions, additional modules (already installed dependencies) must be imported in order to manipulate data, and also to display inline images. Some of the most commonly used items will be:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Datetime"),(0,o.kt)("li",{parentName:"ul"},"JSON"),(0,o.kt)("li",{parentName:"ul"},"Pandas"),(0,o.kt)("li",{parentName:"ul"},"Numpy"),(0,o.kt)("li",{parentName:"ul"},"Matplotlib"),(0,o.kt)("li",{parentName:"ul"},"Requests")),(0,o.kt)("p",null,"The first code block, within the Python script or Jupyter Notebook file, we'll expand to include these general-purpose modules."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},"import json\nimport requests\nimport pandas as pd\nimport numpy as np\nfrom datetime import datetime\nfrom matplotlib import pyplot as plt\n\nfrom openbb_terminal.sdk import openbb\n\n%matplotlib inline ##optional if using Jupyter Notebook\n")))}m.isMDXComponent=!0}}]);