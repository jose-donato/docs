"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[65565],{3905:(e,t,r)=>{r.d(t,{Zo:()=>l,kt:()=>m});var n=r(67294);function s(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){s(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,s=function(e,t){if(null==e)return{};var r,n,s={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(s[r]=e[r]);return s}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(s[r]=e[r])}return s}var p=n.createContext({}),i=function(e){var t=n.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},l=function(e){var t=i(e.components);return n.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,s=e.mdxType,a=e.originalType,p=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),f=i(r),m=s,d=f["".concat(p,".").concat(m)]||f[m]||u[m]||a;return r?n.createElement(d,o(o({ref:t},l),{},{components:r})):n.createElement(d,o({ref:t},l))}));function m(e,t){var r=arguments,s=t&&t.mdxType;if("string"==typeof e||s){var a=r.length,o=new Array(a);o[0]=f;var c={};for(var p in t)hasOwnProperty.call(t,p)&&(c[p]=t[p]);c.originalType=e,c.mdxType="string"==typeof e?e:s,o[1]=c;for(var i=2;i<a;i++)o[i]=r[i];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},82928:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>p,contentTitle:()=>o,default:()=>u,frontMatter:()=>a,metadata:()=>c,toc:()=>i});var n=r(87462),s=(r(67294),r(3905));const a={},o=void 0,c={unversionedId:"features/stocks/fa/splits/splits",id:"features/stocks/fa/splits/splits",title:"splits",description:"Stock splits and reverse split events since IPO [Source: Yahoo Finance]",source:"@site/terminal/features/stocks/fa/splits/splits.md",sourceDirName:"features/stocks/fa/splits",slug:"/features/stocks/fa/splits/",permalink:"/docs/terminal/features/stocks/fa/splits/",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/terminal/features/stocks/fa/splits/splits.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"shrs",permalink:"/docs/terminal/features/stocks/fa/shrs/"},next:{title:"sust",permalink:"/docs/terminal/features/stocks/fa/sust/"}},p={},i=[],l={toc:i};function u(e){let{components:t,...r}=e;return(0,s.kt)("wrapper",(0,n.Z)({},l,r,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre"},"usage: splits [-h] [--export {csv,json,xlsx,png,jpg,pdf,svg}]\n")),(0,s.kt)("p",null,"Stock splits and reverse split events since IPO ","[Source: Yahoo Finance]"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre"},"optional arguments:\n  -h, --help            show this help message (default: False)\n  --export {csv,json,xlsx,png,jpg,pdf,svg}\n                        Export raw data into csv, json, xlsx and figure into png, jpg, pdf, svg (default: )\n")),(0,s.kt)("p",null,(0,s.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/25267873/156905484-61d3a27a-2428-4d80-ae01-b085c875be24.png",alt:"gnus_splits"})),(0,s.kt)("p",null,(0,s.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/25267873/156905485-0964fcbd-c47b-4288-a06c-41363a9fdc30.png",alt:"aapl_splits"})))}u.isMDXComponent=!0}}]);