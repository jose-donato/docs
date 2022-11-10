"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[37845],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>d});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function c(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?c(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):c(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},c=Object.keys(e);for(n=0;n<c.length;n++)r=c[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(n=0;n<c.length;n++)r=c[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var i=n.createContext({}),p=function(e){var t=n.useContext(i),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},u=function(e){var t=p(e.components);return n.createElement(i.Provider,{value:t},e.children)},l={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,c=e.originalType,i=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),f=p(r),d=a,m=f["".concat(i,".").concat(d)]||f[d]||l[d]||c;return r?n.createElement(m,o(o({ref:t},u),{},{components:r})):n.createElement(m,o({ref:t},u))}));function d(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var c=r.length,o=new Array(c);o[0]=f;var s={};for(var i in t)hasOwnProperty.call(t,i)&&(s[i]=t[i]);s.originalType=e,s.mdxType="string"==typeof e?e:a,o[1]=s;for(var p=2;p<c;p++)o[p]=r[p];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},6746:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>i,contentTitle:()=>o,default:()=>l,frontMatter:()=>c,metadata:()=>s,toc:()=>p});var n=r(87462),a=(r(67294),r(3905));const c={},o=void 0,s={unversionedId:"features/stocks/sia/cpci/cpci",id:"features/stocks/sia/cpci/cpci",title:"cpci",description:"Companies per Country based on Industry and Market Cap",source:"@site/terminal/features/stocks/sia/cpci/cpci.md",sourceDirName:"features/stocks/sia/cpci",slug:"/features/stocks/sia/cpci/",permalink:"/docs/terminal/features/stocks/sia/cpci/",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/terminal/features/stocks/sia/cpci/cpci.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"country",permalink:"/docs/terminal/features/stocks/sia/country/"},next:{title:"cpcs",permalink:"/docs/terminal/features/stocks/sia/cpcs/"}},i={},p=[],u={toc:p};function l(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-text"},"usage: cpci [-M MAX_COUNTRIES_TO_DISPLAY] [-m MIN_PCT_TO_DISPLAY_COUNTRY] [-r] [-h] [--export {csv,json,xlsx,png,jpg,pdf,svg}]\n")),(0,a.kt)("p",null,"Companies per Country based on Industry and Market Cap"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"optional arguments:\n  -M MAX_COUNTRIES_TO_DISPLAY, --max MAX_COUNTRIES_TO_DISPLAY\n                        Maximum number of countries to display (default: 15)\n  -m MIN_PCT_TO_DISPLAY_COUNTRY, --min MIN_PCT_TO_DISPLAY_COUNTRY\n                        Minimum percentage to display country (default: 0.015)\n  -r, --raw             Output all raw data (default: False)\n  -h, --help            show this help message (default: False)\n  --export {csv,json,xlsx,png,jpg,pdf,svg}\n                        Export raw data into csv, json, xlsx and figure into png, jpg, pdf, svg (default: )\n")),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/46355364/153896041-d66b4002-554d-47af-91d8-9a79824a6ccd.png",alt:"CPCI"})))}l.isMDXComponent=!0}}]);