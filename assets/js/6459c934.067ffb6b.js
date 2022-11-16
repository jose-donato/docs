"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[46683],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>m});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function c(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?c(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):c(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},c=Object.keys(e);for(n=0;n<c.length;n++)r=c[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(n=0;n<c.length;n++)r=c[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var i=n.createContext({}),p=function(e){var t=n.useContext(i),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},u=function(e){var t=p(e.components);return n.createElement(i.Provider,{value:t},e.children)},l={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,c=e.originalType,i=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),f=p(r),m=a,d=f["".concat(i,".").concat(m)]||f[m]||l[m]||c;return r?n.createElement(d,s(s({ref:t},u),{},{components:r})):n.createElement(d,s({ref:t},u))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var c=r.length,s=new Array(c);s[0]=f;var o={};for(var i in t)hasOwnProperty.call(t,i)&&(o[i]=t[i]);o.originalType=e,o.mdxType="string"==typeof e?e:a,s[1]=o;for(var p=2;p<c;p++)s[p]=r[p];return n.createElement.apply(null,s)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},11573:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>i,contentTitle:()=>s,default:()=>l,frontMatter:()=>c,metadata:()=>o,toc:()=>p});var n=r(87462),a=(r(67294),r(3905));const c={},s=void 0,o={unversionedId:"features/stocks/sia/cpic/cpic",id:"features/stocks/sia/cpic/cpic",title:"cpic",description:"Companies per Industry based on Country and Market Cap",source:"@site/content/terminal/features/stocks/sia/cpic/cpic.md",sourceDirName:"features/stocks/sia/cpic",slug:"/features/stocks/sia/cpic/",permalink:"/docs/terminal/features/stocks/sia/cpic/",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/content/terminal/features/stocks/sia/cpic/cpic.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"cpcs",permalink:"/docs/terminal/features/stocks/sia/cpcs/"},next:{title:"cpis",permalink:"/docs/terminal/features/stocks/sia/cpis/"}},i={},p=[],u={toc:p};function l(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-text"},"usage: cpic [-M MAX_INDUSTRIES_TO_DISPLAY] [-m MIN_PCT_TO_DISPLAY_INDUSTRY] [-r] [-h] [--export {csv,json,xlsx,png,jpg,pdf,svg}]\n")),(0,a.kt)("p",null,"Companies per Industry based on Country and Market Cap"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"optional arguments:\n  -M MAX_INDUSTRIES_TO_DISPLAY, --max MAX_INDUSTRIES_TO_DISPLAY\n                        Maximum number of industries to display (default: 15)\n  -m MIN_PCT_TO_DISPLAY_INDUSTRY, --min MIN_PCT_TO_DISPLAY_INDUSTRY\n                        Minimum percentage to display industry (default: 0.015)\n  -r, --raw             Output all raw data (default: False)\n  -h, --help            show this help message (default: False)\n  --export {csv,json,xlsx,png,jpg,pdf,svg}\n                        Export raw data into csv, json, xlsx and figure into png, jpg, pdf, svg (default: )\n")),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/46355364/153896804-87ae9eb1-b252-4c8f-a089-b653920372fc.png",alt:"CPIC"})))}l.isMDXComponent=!0}}]);