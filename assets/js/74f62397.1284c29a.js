"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[77620],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>d});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=n.createContext({}),m=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):c(c({},t),e)),r},p=function(e){var t=m(e.components);return n.createElement(l.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),u=m(r),d=a,f=u["".concat(l,".").concat(d)]||u[d]||s[d]||o;return r?n.createElement(f,c(c({ref:t},p),{},{components:r})):n.createElement(f,c({ref:t},p))}));function d(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,c=new Array(o);c[0]=u;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:a,c[1]=i;for(var m=2;m<o;m++)c[m]=r[m];return n.createElement.apply(null,c)}return n.createElement.apply(null,r)}u.displayName="MDXCreateElement"},94806:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>c,default:()=>s,frontMatter:()=>o,metadata:()=>i,toc:()=>m});var n=r(87462),a=(r(67294),r(3905));const o={title:"macro_parameters",description:"OpenBB SDK Function"},c="macro_parameters",i={unversionedId:"functions/economy/macro_parameters",id:"functions/economy/macro_parameters",title:"macro_parameters",description:"OpenBB SDK Function",source:"@site/content/sdk/functions/economy/macro_parameters.md",sourceDirName:"functions/economy",slug:"/functions/economy/macro_parameters",permalink:"/sdk/functions/economy/macro_parameters",draft:!1,tags:[],version:"current",frontMatter:{title:"macro_parameters",description:"OpenBB SDK Function"},sidebar:"tutorialSidebar",previous:{title:"macro_countries",permalink:"/sdk/functions/economy/macro_countries"},next:{title:"overview",permalink:"/sdk/functions/economy/overview"}},l={},m=[{value:"openbb_terminal.economy.econdb_model.get_macro_parameters",id:"openbb_terminaleconomyecondb_modelget_macro_parameters",level:2},{value:"Parameters",id:"parameters",level:2},{value:"Returns",id:"returns",level:2},{value:"Examples",id:"examples",level:2}],p={toc:m};function s(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"macro_parameters"},"macro_parameters"),(0,a.kt)("h2",{id:"openbb_terminaleconomyecondb_modelget_macro_parameters"},"openbb_terminal.economy.econdb_model.get_macro_parameters"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python",metastring:"title='openbb_terminal/economy/econdb_model.py'",title:"'openbb_terminal/economy/econdb_model.py'"},"def get_macro_parameters() -> Dict\n")),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/OpenBB-finance/OpenBBTerminal/tree/main/openbb_terminal/economy/econdb_model.py#L632"},"Source Code")),(0,a.kt)("p",null,"Description: This function returns the available macro parameters with detail."),(0,a.kt)("h2",{id:"parameters"},"Parameters"),(0,a.kt)("p",null,"This function does not take any parameters."),(0,a.kt)("h2",{id:"returns"},"Returns"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Type"),(0,a.kt)("th",{parentName:"tr",align:null},"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Dict[str, Dict","[str, str]","]"),(0,a.kt)("td",{parentName:"tr",align:null},"A dictionary with the available macro parameters.")))),(0,a.kt)("h2",{id:"examples"},"Examples"))}s.isMDXComponent=!0}}]);