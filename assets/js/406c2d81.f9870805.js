"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[34066],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>d});var a=r(67294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function c(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?c(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):c(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},c=Object.keys(e);for(a=0;a<c.length;a++)r=c[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(a=0;a<c.length;a++)r=c[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var l=a.createContext({}),s=function(e){var t=a.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},u=function(e){var t=s(e.components);return a.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},f=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,c=e.originalType,l=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),f=s(r),d=n,g=f["".concat(l,".").concat(d)]||f[d]||p[d]||c;return r?a.createElement(g,o(o({ref:t},u),{},{components:r})):a.createElement(g,o({ref:t},u))}));function d(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var c=r.length,o=new Array(c);o[0]=f;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:n,o[1]=i;for(var s=2;s<c;s++)o[s]=r[s];return a.createElement.apply(null,o)}return a.createElement.apply(null,r)}f.displayName="MDXCreateElement"},94732:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>p,frontMatter:()=>c,metadata:()=>i,toc:()=>s});var a=r(87462),n=(r(67294),r(3905));const c={},o=void 0,i={unversionedId:"features/crypto/defi/gacc/gacc",id:"features/crypto/defi/gacc/gacc",title:"gacc",description:"Displays terra blockchain account growth history. [Source//fcd.terra.dev/swagger]",source:"@site/terminal/features/crypto/defi/gacc/gacc.md",sourceDirName:"features/crypto/defi/gacc",slug:"/features/crypto/defi/gacc/",permalink:"/docs/terminal/features/crypto/defi/gacc/",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/terminal/features/crypto/defi/gacc/gacc.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"dtvl",permalink:"/docs/terminal/features/crypto/defi/dtvl/"},next:{title:"gdapps",permalink:"/docs/terminal/features/crypto/defi/gdapps/"}},l={},s=[],u={toc:s};function p(e){let{components:t,...r}=e;return(0,n.kt)("wrapper",(0,a.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"usage: gacc [-l LIMIT] [--cumulative] [-k {active,total}] [--descend] [-h] [--export {csv,json,xlsx,png,jpg,pdf,svg}]\n")),(0,n.kt)("p",null,"Displays terra blockchain account growth history. ","[Source: https://fcd.terra.dev/swagger]"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"optional arguments:\n  -l LIMIT, --limit LIMIT\n                        Number of days to show (default: 90)\n  --cumulative          Show cumulative or discrete values. For active accounts only discrete value are available (default: True)\n  -k {active,total}, --kind {active,total}\n                        Total account count or active account count. Default: total (default: total)\n  -h, --help            show this help message (default: False)\n  --export {csv,json,xlsx,png,jpg,pdf,svg}\n                        Export raw data into csv, json, xlsx and figure into png, jpg, pdf, svg (default: )\n")),(0,n.kt)("p",null,(0,n.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/46355364/154051829-8225869b-6ea8-434e-afd6-51b9c81e0ade.png",alt:"gacc"})))}p.isMDXComponent=!0}}]);