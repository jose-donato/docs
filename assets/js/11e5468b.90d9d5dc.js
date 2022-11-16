"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[39093],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>m});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var l=n.createContext({}),i=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):c(c({},t),e)),r},p=function(e){var t=i(e.components);return n.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),f=i(r),m=o,d=f["".concat(l,".").concat(m)]||f[m]||u[m]||a;return r?n.createElement(d,c(c({ref:t},p),{},{components:r})):n.createElement(d,c({ref:t},p))}));function m(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,c=new Array(a);c[0]=f;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:o,c[1]=s;for(var i=2;i<a;i++)c[i]=r[i];return n.createElement.apply(null,c)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},50430:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>c,default:()=>u,frontMatter:()=>a,metadata:()=>s,toc:()=>i});var n=r(87462),o=(r(67294),r(3905));const a={},c=void 0,s={unversionedId:"features/stocks/options/calc/calc",id:"features/stocks/options/calc/calc",title:"calc",description:"Calculate profit or loss for given option settings.",source:"@site/content/terminal/features/stocks/options/calc/calc.md",sourceDirName:"features/stocks/options/calc",slug:"/features/stocks/options/calc/",permalink:"/docs/terminal/features/stocks/options/calc/",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/content/terminal/features/stocks/options/calc/calc.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"binom",permalink:"/docs/terminal/features/stocks/options/binom/"},next:{title:"chains",permalink:"/docs/terminal/features/stocks/options/chains/"}},l={},i=[],p={toc:i};function u(e){let{components:t,...r}=e;return(0,o.kt)("wrapper",(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"usage: calc [--put] [--sell] [-s STRIKE] [-p PREMIUM] [-m MIN] [-M MAX] [-h]\n")),(0,o.kt)("p",null,"Calculate profit or loss for given option settings."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"optional arguments:\n  --put                 Flag to calculate put option (default: False)\n  --sell                Flag to get profit chart of selling contract (default: False)\n  -s STRIKE, --strike STRIKE\n                        Option strike price (default: 10)\n  -p PREMIUM, --premium PREMIUM\n                        Premium price (default: 1)\n  -m MIN, --min MIN     Min price to look at (default: -1)\n  -M MAX, --max MAX     Max price to look at (default: -1)\n  -h, --help            show this help message (default: False)\n")),(0,o.kt)("p",null,"Example:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"2022 Feb 16, 08:45 (\u2728) /stocks/options/ $ calc -s 30 -p 6 -m 1 -M 50\n\nStrike: $30.0\nPremium: $6.0\nBreakeven price: $36.0\nMax profit: Unlimited\nMax loss: $-600.0\n")),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/46355364/154277755-a6640bee-8621-4a7d-9fc6-9c197daca0e1.png",alt:"calc"})))}u.isMDXComponent=!0}}]);