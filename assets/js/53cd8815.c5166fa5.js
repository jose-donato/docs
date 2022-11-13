"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[59219],{3905:(t,e,r)=>{r.d(e,{Zo:()=>f,kt:()=>s});var n=r(67294);function o(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function a(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function i(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?a(Object(r),!0).forEach((function(e){o(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function l(t,e){if(null==t)return{};var r,n,o=function(t,e){if(null==t)return{};var r,n,o={},a=Object.keys(t);for(n=0;n<a.length;n++)r=a[n],e.indexOf(r)>=0||(o[r]=t[r]);return o}(t,e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);for(n=0;n<a.length;n++)r=a[n],e.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(t,r)&&(o[r]=t[r])}return o}var p=n.createContext({}),m=function(t){var e=n.useContext(p),r=e;return t&&(r="function"==typeof t?t(e):i(i({},e),t)),r},f=function(t){var e=m(t.components);return n.createElement(p.Provider,{value:e},t.children)},u={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},c=n.forwardRef((function(t,e){var r=t.components,o=t.mdxType,a=t.originalType,p=t.parentName,f=l(t,["components","mdxType","originalType","parentName"]),c=m(r),s=o,d=c["".concat(p,".").concat(s)]||c[s]||u[s]||a;return r?n.createElement(d,i(i({ref:e},f),{},{components:r})):n.createElement(d,i({ref:e},f))}));function s(t,e){var r=arguments,o=e&&e.mdxType;if("string"==typeof t||o){var a=r.length,i=new Array(a);i[0]=c;var l={};for(var p in e)hasOwnProperty.call(e,p)&&(l[p]=e[p]);l.originalType=t,l.mdxType="string"==typeof t?t:o,i[1]=l;for(var m=2;m<a;m++)i[m]=r[m];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}c.displayName="MDXCreateElement"},35028:(t,e,r)=>{r.r(e),r.d(e,{assets:()=>p,contentTitle:()=>i,default:()=>u,frontMatter:()=>a,metadata:()=>l,toc:()=>m});var n=r(87462),o=(r(67294),r(3905));const a={},i="information",l={unversionedId:"functions/portfolio/information",id:"functions/portfolio/information",title:"information",description:"portfoliomodel.getinformation_ratio",source:"@site/sdk/functions/portfolio/information.md",sourceDirName:"functions/portfolio",slug:"/functions/portfolio/information",permalink:"/docs/sdk/functions/portfolio/information",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"holdv",permalink:"/docs/sdk/functions/portfolio/holdv"},next:{title:"jensens",permalink:"/docs/sdk/functions/portfolio/jensens"}},p={},m=[{value:"portfolio_model.get_information_ratio",id:"portfolio_modelget_information_ratio",level:2},{value:"Parameters",id:"parameters",level:2},{value:"Returns",id:"returns",level:2},{value:"Examples",id:"examples",level:2}],f={toc:m};function u(t){let{components:e,...r}=t;return(0,o.kt)("wrapper",(0,n.Z)({},f,r,{components:e,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"information"},"information"),(0,o.kt)("h2",{id:"portfolio_modelget_information_ratio"},"portfolio_model.get_information_ratio"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},"def get_stars_history(repo: str):\n")),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://github.com/OpenBB-finance/OpenBBTerminal/tree/main/openbb_terminal/portfolio/portfolio_model.py#L1146"},"Source Code")),(0,o.kt)("p",null,"Description: Get information ratio"),(0,o.kt)("h2",{id:"parameters"},"Parameters"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"Name"),(0,o.kt)("th",{parentName:"tr",align:null},"Type"),(0,o.kt)("th",{parentName:"tr",align:null},"Description"),(0,o.kt)("th",{parentName:"tr",align:null},"Default"),(0,o.kt)("th",{parentName:"tr",align:null},"Optional"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"portfolio"),(0,o.kt)("td",{parentName:"tr",align:null},"Portfolio"),(0,o.kt)("td",{parentName:"tr",align:null},"Portfolio object with trades loaded"),(0,o.kt)("td",{parentName:"tr",align:null},"None"),(0,o.kt)("td",{parentName:"tr",align:null},"False")))),(0,o.kt)("h2",{id:"returns"},"Returns"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"Type"),(0,o.kt)("th",{parentName:"tr",align:null},"Description"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"pd.DataFrame"),(0,o.kt)("td",{parentName:"tr",align:null},"DataFrame of the information ratio during different time periods")))),(0,o.kt)("h2",{id:"examples"},"Examples"))}u.isMDXComponent=!0}}]);