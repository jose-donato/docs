"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[13233],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>d});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var i=n.createContext({}),c=function(e){var t=n.useContext(i),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},u=function(e){var t=c(e.components);return n.createElement(i.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),f=c(r),d=a,m=f["".concat(i,".").concat(d)]||f[d]||p[d]||o;return r?n.createElement(m,s(s({ref:t},u),{},{components:r})):n.createElement(m,s({ref:t},u))}));function d(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,s=new Array(o);s[0]=f;var l={};for(var i in t)hasOwnProperty.call(t,i)&&(l[i]=t[i]);l.originalType=e,l.mdxType="string"==typeof e?e:a,s[1]=l;for(var c=2;c<o;c++)s[c]=r[c];return n.createElement.apply(null,s)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},79897:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>i,contentTitle:()=>s,default:()=>p,frontMatter:()=>o,metadata:()=>l,toc:()=>c});var n=r(87462),a=(r(67294),r(3905));const o={},s=void 0,l={unversionedId:"features/stocks/ins/load/load",id:"features/stocks/ins/load/load",title:"load",description:"See: load",source:"@site/terminal/features/stocks/ins/load/load.md",sourceDirName:"features/stocks/ins/load",slug:"/features/stocks/ins/load/",permalink:"/docs/terminal/features/stocks/ins/load/",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/terminal/features/stocks/ins/load/load.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"lit",permalink:"/docs/terminal/features/stocks/ins/lit/"},next:{title:"lpsb",permalink:"/docs/terminal/features/stocks/ins/lpsb/"}},i={},c=[],u={toc:c};function p(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"usage: load [-t S_TICKER] [-s S_START_DATE] [-i {1,5,15,30,60}] [--source {yf,av,iex}] [-p] [-h]\n")),(0,a.kt)("p",null,"See: ",(0,a.kt)("a",{parentName:"p",href:"https://openbb-finance.github.io/OpenBBTerminal/stocks/load/"},"load")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"optional arguments:\n  -t S_TICKER, --ticker S_TICKER\n                        Stock ticker (default: None)\n  -s S_START_DATE, --start S_START_DATE\n                        The starting date (format YYYY-MM-DD) of the stock (default: 2020-09-15)\n  -i {1,5,15,30,60}, --interval {1,5,15,30,60}\n                        Intraday stock minutes (default: 1440)\n  --source {yf,av,iex}  Source of historical data. (default: yf)\n  -p, --prepost         Pre/After market hours. Only works for 'yf' source, and intraday data (default: False)\n  -h, --help            show this help message (default: False)\n")))}p.isMDXComponent=!0}}]);