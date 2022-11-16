"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[40218],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>f});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=n.createContext({}),m=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):c(c({},t),e)),r},p=function(e){var t=m(e.components);return n.createElement(s.Provider,{value:t},e.children)},l={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),u=m(r),f=a,d=u["".concat(s,".").concat(f)]||u[f]||l[f]||o;return r?n.createElement(d,c(c({ref:t},p),{},{components:r})):n.createElement(d,c({ref:t},p))}));function f(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,c=new Array(o);c[0]=u;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:a,c[1]=i;for(var m=2;m<o;m++)c[m]=r[m];return n.createElement.apply(null,c)}return n.createElement.apply(null,r)}u.displayName="MDXCreateElement"},82835:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>c,default:()=>l,frontMatter:()=>o,metadata:()=>i,toc:()=>m});var n=r(87462),a=(r(67294),r(3905));const o={},c=void 0,i={unversionedId:"features/common/qa/capm/capm",id:"features/common/qa/capm/capm",title:"capm",description:"Provides detailed information about a stock's risk compared to the market risk.",source:"@site/content/terminal/features/common/qa/capm/capm.md",sourceDirName:"features/common/qa/capm",slug:"/features/common/qa/capm/",permalink:"/docs/terminal/features/common/qa/capm/",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/content/terminal/features/common/qa/capm/capm.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"bw",permalink:"/docs/terminal/features/common/qa/bw/"},next:{title:"cdf",permalink:"/docs/terminal/features/common/qa/cdf/"}},s={},m=[],p={toc:m};function l(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-text"},"usage: capm [-h]\n")),(0,a.kt)("p",null,"Provides detailed information about a stock's risk compared to the market risk."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"optional arguments:\n  -h, --help            show this help message (default: False)\n")),(0,a.kt)("p",null,"Example:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"2022 Feb 16, 11:01 (\u2728) /stocks/qa/ $ load tsla\n\nLoading Daily TSLA stock with starting period 2019-02-11 for analysis.\n\nDatetime: 2022 Feb 16 11:02\nTimezone: America/New_York\nCurrency: USD\nMarket:   CLOSED\n\n\n2022 Feb 16, 11:02 (\u2728) /stocks/qa/ $ capm\nBeta:                   2.02\nSystematic Risk:        23.09%\nUnsystematic Risk:      76.91%\n")))}l.isMDXComponent=!0}}]);