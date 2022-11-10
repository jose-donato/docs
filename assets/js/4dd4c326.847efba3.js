"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[90794],{3905:(e,t,r)=>{r.d(t,{Zo:()=>s,kt:()=>m});var o=r(67294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,o)}return r}function p(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,o,n=function(e,t){if(null==e)return{};var r,o,n={},a=Object.keys(e);for(o=0;o<a.length;o++)r=a[o],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)r=a[o],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var l=o.createContext({}),i=function(e){var t=o.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):p(p({},t),e)),r},s=function(e){var t=i(e.components);return o.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},f=o.forwardRef((function(e,t){var r=e.components,n=e.mdxType,a=e.originalType,l=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),f=i(r),m=n,y=f["".concat(l,".").concat(m)]||f[m]||u[m]||a;return r?o.createElement(y,p(p({ref:t},s),{},{components:r})):o.createElement(y,p({ref:t},s))}));function m(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var a=r.length,p=new Array(a);p[0]=f;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:n,p[1]=c;for(var i=2;i<a;i++)p[i]=r[i];return o.createElement.apply(null,p)}return o.createElement.apply(null,r)}f.displayName="MDXCreateElement"},79624:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>p,default:()=>u,frontMatter:()=>a,metadata:()=>c,toc:()=>i});var o=r(87462),n=(r(67294),r(3905));const a={},p=void 0,c={unversionedId:"features/crypto/tools/aprtoapy/aprtoapy",id:"features/crypto/tools/aprtoapy/aprtoapy",title:"aprtoapy",description:"usage: aprtoapy [--apr APR] [-c COMPOUNDING] [-n] [-h] [--export EXPORT]",source:"@site/terminal/features/crypto/tools/aprtoapy/aprtoapy.md",sourceDirName:"features/crypto/tools/aprtoapy",slug:"/features/crypto/tools/aprtoapy/",permalink:"/docs/terminal/features/crypto/tools/aprtoapy/",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/terminal/features/crypto/tools/aprtoapy/aprtoapy.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"tools",permalink:"/docs/terminal/features/crypto/tools/"},next:{title:"il",permalink:"/docs/terminal/features/crypto/tools/il/"}},l={},i=[],s={toc:i};function u(e){let{components:t,...r}=e;return(0,n.kt)("wrapper",(0,o.Z)({},s,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},"usage: aprtoapy [--apr APR] [-c COMPOUNDING] [-n] [-h] [--export EXPORT]")),(0,n.kt)("p",null,"Tool to calculate APY from APR value. Compounding periods, i.e., the number of times compounded per year can be defined with -c argument."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"optional arguments:\n  --apr APR             APR value in percentage to convert (default: 100)\n  -c COMPOUNDING, --compounding COMPOUNDING\n                        Number of compounded periods in a year. 12 means compounding monthly (default: 12)\n  -n, --narrative       Flag to show narra`ive instead of dataframe (default: False)\n  -h, --help            show this help message (default: False)\n  --export EXPORT       Export raw data into csv, json, xlsx (default: )\n")))}u.isMDXComponent=!0}}]);