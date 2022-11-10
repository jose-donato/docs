"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[73496],{3905:(e,t,r)=>{r.d(t,{Zo:()=>l,kt:()=>f});var o=r(67294);function s(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function n(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,o)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?n(Object(r),!0).forEach((function(t){s(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):n(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,o,s=function(e,t){if(null==e)return{};var r,o,s={},n=Object.keys(e);for(o=0;o<n.length;o++)r=n[o],t.indexOf(r)>=0||(s[r]=e[r]);return s}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(o=0;o<n.length;o++)r=n[o],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(s[r]=e[r])}return s}var p=o.createContext({}),i=function(e){var t=o.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},l=function(e){var t=i(e.components);return o.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},d=o.forwardRef((function(e,t){var r=e.components,s=e.mdxType,n=e.originalType,p=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),d=i(r),f=s,m=d["".concat(p,".").concat(f)]||d[f]||u[f]||n;return r?o.createElement(m,a(a({ref:t},l),{},{components:r})):o.createElement(m,a({ref:t},l))}));function f(e,t){var r=arguments,s=t&&t.mdxType;if("string"==typeof e||s){var n=r.length,a=new Array(n);a[0]=d;var c={};for(var p in t)hasOwnProperty.call(t,p)&&(c[p]=t[p]);c.originalType=e,c.mdxType="string"==typeof e?e:s,a[1]=c;for(var i=2;i<n;i++)a[i]=r[i];return o.createElement.apply(null,a)}return o.createElement.apply(null,r)}d.displayName="MDXCreateElement"},78091:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>p,contentTitle:()=>a,default:()=>u,frontMatter:()=>n,metadata:()=>c,toc:()=>i});var o=r(87462),s=(r(67294),r(3905));const n={},a=void 0,c={unversionedId:"features/stocks/dps/spos/spos",id:"features/stocks/dps/spos/spos",title:"spos",description:"Displays a charty of Net Short Vol. vs Position over a selectable number of days. Print the raw data for closer scrutiny. Source//www.stockgrid.io/darkpools",source:"@site/terminal/features/stocks/dps/spos/spos.md",sourceDirName:"features/stocks/dps/spos",slug:"/features/stocks/dps/spos/",permalink:"/docs/terminal/features/stocks/dps/spos/",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/terminal/features/stocks/dps/spos/spos.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"sidtc",permalink:"/docs/terminal/features/stocks/dps/sidtc/"},next:{title:"volexch",permalink:"/docs/terminal/features/stocks/dps/volexch/"}},p={},i=[],l={toc:i};function u(e){let{components:t,...r}=e;return(0,s.kt)("wrapper",(0,o.Z)({},l,r,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre"},"usage: spos [-n NUM] [-r] [--export {csv,json,xlsx}] [-h]\n")),(0,s.kt)("p",null,"Displays a charty of Net Short Vol. vs Position over a selectable number of days. Print the raw data for closer scrutiny. Source: ",(0,s.kt)("a",{parentName:"p",href:"https://www.stockgrid.io/darkpools"},"https://www.stockgrid.io/darkpools")),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre"},"optional arguments:\n  -n NUM, --number NUM  Number of last open market days to show\n  -r                    Flag to print raw data instead\n  --export {csv,json,xlsx}\n                        Export dataframe data to csv,json,xlsx file\n  -h, --help            show this help message\n")),(0,s.kt)("p",null,(0,s.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/46355364/154101511-fd2d65e9-69a6-46f3-aa78-77c032c6900d.png",alt:"spos"})))}u.isMDXComponent=!0}}]);