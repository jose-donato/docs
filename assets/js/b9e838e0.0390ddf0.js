"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[26865],{3905:(e,t,n)=>{n.d(t,{Zo:()=>l,kt:()=>f});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var i=r.createContext({}),p=function(e){var t=r.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},l=function(e){var t=p(e.components);return r.createElement(i.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,i=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),m=p(n),f=o,d=m["".concat(i,".").concat(f)]||m[f]||u[f]||a;return n?r.createElement(d,s(s({ref:t},l),{},{components:n})):r.createElement(d,s({ref:t},l))}));function f(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,s=new Array(a);s[0]=m;var c={};for(var i in t)hasOwnProperty.call(t,i)&&(c[i]=t[i]);c.originalType=e,c.mdxType="string"==typeof e?e:o,s[1]=c;for(var p=2;p<a;p++)s[p]=n[p];return r.createElement.apply(null,s)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},15945:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>i,contentTitle:()=>s,default:()=>u,frontMatter:()=>a,metadata:()=>c,toc:()=>p});var r=n(87462),o=(n(67294),n(3905));const a={},s=void 0,c={unversionedId:"features/common/ba/snews/snews",id:"features/common/ba/snews/snews",title:"snews",description:"Display stock price and headlines sentiment using VADER model over time. [Source: Finnhub]",source:"@site/content/terminal/features/common/ba/snews/snews.md",sourceDirName:"features/common/ba/snews",slug:"/features/common/ba/snews/",permalink:"/docs/terminal/features/common/ba/snews/",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/content/terminal/features/common/ba/snews/snews.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"sentiment",permalink:"/docs/terminal/features/common/ba/sentiment/"},next:{title:"spac",permalink:"/docs/terminal/features/common/ba/spac/"}},i={},p=[],l={toc:p};function u(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,r.Z)({},l,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-text"},"usage: snews [-h] [--export {csv,json,xlsx,png,jpg,pdf,svg}]\n")),(0,o.kt)("p",null,"Display stock price and headlines sentiment using VADER model over time. ","[Source: Finnhub]"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"optional arguments:\n  -h, --help            show this help message (default: False)\n  --export {csv,json,xlsx,png,jpg,pdf,svg}\n                        Export raw data into csv, json, xlsx and figure into png, jpg, pdf, svg (default: )\n")),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/25267873/156584514-33c2cd52-4763-43cd-8a53-4118b8615450.png",alt:"snews"})))}u.isMDXComponent=!0}}]);