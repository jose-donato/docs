"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[58381],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>m});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var s=n.createContext({}),u=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},p=function(e){var t=u(e.components);return n.createElement(s.Provider,{value:t},e.children)},i={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),f=u(r),m=o,d=f["".concat(s,".").concat(m)]||f[m]||i[m]||a;return r?n.createElement(d,l(l({ref:t},p),{},{components:r})):n.createElement(d,l({ref:t},p))}));function m(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,l=new Array(a);l[0]=f;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:o,l[1]=c;for(var u=2;u<a;u++)l[u]=r[u];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},27671:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>i,frontMatter:()=>a,metadata:()=>c,toc:()=>u});var n=r(87462),o=(r(67294),r(3905));const a={},l=void 0,c={unversionedId:"features/forex/select/select",id:"features/forex/select/select",title:"select",description:'Select is separated in two options, "from" and "to":',source:"@site/terminal/features/forex/select/select.md",sourceDirName:"features/forex/select",slug:"/features/forex/select/",permalink:"/docs/terminal/features/forex/select/",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/terminal/features/forex/select/select.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"quote",permalink:"/docs/terminal/features/forex/quote/"},next:{title:"Introduction to Futures",permalink:"/docs/terminal/features/futures/"}},s={},u=[],p={toc:u};function i(e){let{components:t,...r}=e;return(0,o.kt)("wrapper",(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,'Select is separated in two options, "from" and "to":'),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"usage: from [-n FROM_SYMBOL] [-h]\n")),(0,o.kt)("p",null,'Select the "from" currency symbol in a forex pair'),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"optional arguments:\n  -n FROM_SYMBOL, --name FROM_SYMBOL\n                        From currency (default: None)\n  -h, --help            show this help message (default: False)\n")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"usage: to [-n TO_SYMBOL] [-h]\n")),(0,o.kt)("p",null,'Select the "to" currency symbol in a forex pair'),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"optional arguments:\n  -n TO_SYMBOL, --name TO_SYMBOL\n                        To currency (default: None)\n  -h, --help            show this help message (default: False)\n")),(0,o.kt)("p",null,"Example:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"2022 Feb 15, 04:10 (\u2728) /forex/ $ from USD\n\nSelected pair\nFrom: USD\nTo:   USD\n\n2022 Feb 15, 04:10 (\u2728) /forex/ $ to EUR\n\nSelected pair\nFrom: USD\nTo:   EUR\n")))}i.isMDXComponent=!0}}]);