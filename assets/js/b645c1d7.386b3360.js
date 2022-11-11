"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[97046],{3905:(e,r,t)=>{t.d(r,{Zo:()=>i,kt:()=>m});var n=t(67294);function o(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function a(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function s(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?a(Object(t),!0).forEach((function(r){o(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function c(e,r){if(null==e)return{};var t,n,o=function(e,r){if(null==e)return{};var t,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||(o[t]=e[t]);return o}(e,r);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var p=n.createContext({}),u=function(e){var r=n.useContext(p),t=r;return e&&(t="function"==typeof e?e(r):s(s({},r),e)),t},i=function(e){var r=u(e.components);return n.createElement(p.Provider,{value:r},e.children)},l={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},f=n.forwardRef((function(e,r){var t=e.components,o=e.mdxType,a=e.originalType,p=e.parentName,i=c(e,["components","mdxType","originalType","parentName"]),f=u(t),m=o,y=f["".concat(p,".").concat(m)]||f[m]||l[m]||a;return t?n.createElement(y,s(s({ref:r},i),{},{components:t})):n.createElement(y,s({ref:r},i))}));function m(e,r){var t=arguments,o=r&&r.mdxType;if("string"==typeof e||o){var a=t.length,s=new Array(a);s[0]=f;var c={};for(var p in r)hasOwnProperty.call(r,p)&&(c[p]=r[p]);c.originalType=e,c.mdxType="string"==typeof e?e:o,s[1]=c;for(var u=2;u<a;u++)s[u]=t[u];return n.createElement.apply(null,s)}return n.createElement.apply(null,t)}f.displayName="MDXCreateElement"},86270:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>p,contentTitle:()=>s,default:()=>l,frontMatter:()=>a,metadata:()=>c,toc:()=>u});var n=t(87462),o=(t(67294),t(3905));const a={},s=void 0,c={unversionedId:"features/jupyter/reports/forecast/forecast",id:"features/jupyter/reports/forecast/forecast",title:"forecast",description:"",source:"@site/terminal/features/jupyter/reports/forecast/forecast.md",sourceDirName:"features/jupyter/reports/forecast",slug:"/features/jupyter/reports/forecast/",permalink:"/docs/terminal/features/jupyter/reports/forecast/",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/terminal/features/jupyter/reports/forecast/forecast.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"etf",permalink:"/docs/terminal/features/jupyter/reports/etf/"},next:{title:"forex",permalink:"/docs/terminal/features/jupyter/reports/forex/"}},p={},u=[],i={toc:u};function l(e){let{components:r,...t}=e;return(0,o.kt)("wrapper",(0,n.Z)({},i,t,{components:r,mdxType:"MDXLayout"}),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"usage: forecast [--symbol SYMBOL] [-h]\n\nRun forecast report.\n\noptional arguments:\n  --symbol SYMBOL  symbol (default: VTI)\n  -h, --help       show this help message (default: False)\n")))}l.isMDXComponent=!0}}]);