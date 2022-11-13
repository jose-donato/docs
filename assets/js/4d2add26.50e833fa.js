"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[38796],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>f});var a=r(67294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},o=Object.keys(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var l=a.createContext({}),i=function(e){var t=a.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},p=function(e){var t=i(e.components);return a.createElement(l.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,l=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),u=i(r),f=n,d=u["".concat(l,".").concat(f)]||u[f]||m[f]||o;return r?a.createElement(d,s(s({ref:t},p),{},{components:r})):a.createElement(d,s({ref:t},p))}));function f(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,s=new Array(o);s[0]=u;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:n,s[1]=c;for(var i=2;i<o;i++)s[i]=r[i];return a.createElement.apply(null,s)}return a.createElement.apply(null,r)}u.displayName="MDXCreateElement"},40029:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>m,frontMatter:()=>o,metadata:()=>c,toc:()=>i});var a=r(87462),n=(r(67294),r(3905));const o={},s="fama_raw",c={unversionedId:"functions/stocks/qa/fama_raw",id:"functions/stocks/qa/fama_raw",title:"fama_raw",description:"stocksqafactorsmodel.getfama_raw",source:"@site/sdk/functions/stocks/qa/fama_raw.md",sourceDirName:"functions/stocks/qa",slug:"/functions/stocks/qa/fama_raw",permalink:"/docs/sdk/functions/stocks/qa/fama_raw",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"capm_information",permalink:"/docs/sdk/functions/stocks/qa/capm_information"},next:{title:"historical_5",permalink:"/docs/sdk/functions/stocks/qa/historical_5"}},l={},i=[{value:"stocks_qa_factors_model.get_fama_raw",id:"stocks_qa_factors_modelget_fama_raw",level:2},{value:"Parameters",id:"parameters",level:2},{value:"Examples",id:"examples",level:2}],p={toc:i};function m(e){let{components:t,...r}=e;return(0,n.kt)("wrapper",(0,a.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"fama_raw"},"fama_raw"),(0,n.kt)("h2",{id:"stocks_qa_factors_modelget_fama_raw"},"stocks_qa_factors_model.get_fama_raw"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-python"},"def get_stars_history(repo: str):\n")),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"https://github.com/OpenBB-finance/OpenBBTerminal/tree/main/openbb_terminal/stocks/quantitative_analysis/factors_model.py#L19"},"Source Code")),(0,n.kt)("p",null,"Description: Gets base Fama French data to calculate risk"),(0,n.kt)("h2",{id:"parameters"},"Parameters"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Name"),(0,n.kt)("th",{parentName:"tr",align:null},"Type"),(0,n.kt)("th",{parentName:"tr",align:null},"Description"),(0,n.kt)("th",{parentName:"tr",align:null},"Default"),(0,n.kt)("th",{parentName:"tr",align:null},"Optional")))),(0,n.kt)("p",null,"None"),(0,n.kt)("h2",{id:"examples"},"Examples"))}m.isMDXComponent=!0}}]);