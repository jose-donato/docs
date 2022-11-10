"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[18344],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>m});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function c(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?c(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):c(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},c=Object.keys(e);for(n=0;n<c.length;n++)r=c[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(n=0;n<c.length;n++)r=c[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var p=n.createContext({}),i=function(e){var t=n.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},u=function(e){var t=i(e.components);return n.createElement(p.Provider,{value:t},e.children)},l={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,c=e.originalType,p=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),f=i(r),m=a,d=f["".concat(p,".").concat(m)]||f[m]||l[m]||c;return r?n.createElement(d,s(s({ref:t},u),{},{components:r})):n.createElement(d,s({ref:t},u))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var c=r.length,s=new Array(c);s[0]=f;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o.mdxType="string"==typeof e?e:a,s[1]=o;for(var i=2;i<c;i++)s[i]=r[i];return n.createElement.apply(null,s)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},1099:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>p,contentTitle:()=>s,default:()=>l,frontMatter:()=>c,metadata:()=>o,toc:()=>i});var n=r(87462),a=(r(67294),r(3905));const c={},s=void 0,o={unversionedId:"features/stocks/sia/cpcs/cpcs",id:"features/stocks/sia/cpcs/cpcs",title:"cpcs",description:"Companies per Country based on Sector and Market Cap",source:"@site/terminal/features/stocks/sia/cpcs/cpcs.md",sourceDirName:"features/stocks/sia/cpcs",slug:"/features/stocks/sia/cpcs/",permalink:"/docs/terminal/features/stocks/sia/cpcs/",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/terminal/features/stocks/sia/cpcs/cpcs.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"cpci",permalink:"/docs/terminal/features/stocks/sia/cpci/"},next:{title:"cpic",permalink:"/docs/terminal/features/stocks/sia/cpic/"}},p={},i=[],u={toc:i};function l(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"usage: cpcs [-M MAX_COUNTRIES_TO_DISPLAY] [-m MIN_PCT_TO_DISPLAY_COUNTRY] [-r] [-h] [--export {csv,json,xlsx,png,jpg,pdf,svg}]\n")),(0,a.kt)("p",null,"Companies per Country based on Sector and Market Cap"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"optional arguments:\n  -M MAX_COUNTRIES_TO_DISPLAY, --max MAX_COUNTRIES_TO_DISPLAY\n                        Maximum number of countries to display (default: 15)\n  -m MIN_PCT_TO_DISPLAY_COUNTRY, --min MIN_PCT_TO_DISPLAY_COUNTRY\n                        Minimum percentage to display country (default: 0.015)\n  -r, --raw             Output all raw data (default: False)\n  -h, --help            show this help message (default: False)\n  --export {csv,json,xlsx,png,jpg,pdf,svg}\n                        Export raw data into csv, json, xlsx and figure into png, jpg, pdf, svg (default: )\n")),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/46355364/153896494-5c0c9c00-aa2a-45cb-8a93-cfaa908b35df.png",alt:"CPCS"})))}l.isMDXComponent=!0}}]);