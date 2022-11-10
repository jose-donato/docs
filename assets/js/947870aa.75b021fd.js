"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[29395],{3905:(e,r,t)=>{t.d(r,{Zo:()=>p,kt:()=>f});var n=t(67294);function a(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function o(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function i(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?o(Object(t),!0).forEach((function(r){a(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function s(e,r){if(null==e)return{};var t,n,a=function(e,r){if(null==e)return{};var t,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||(a[t]=e[t]);return a}(e,r);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var c=n.createContext({}),l=function(e){var r=n.useContext(c),t=r;return e&&(t="function"==typeof e?e(r):i(i({},r),e)),t},p=function(e){var r=l(e.components);return n.createElement(c.Provider,{value:r},e.children)},u={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},d=n.forwardRef((function(e,r){var t=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),d=l(t),f=a,y=d["".concat(c,".").concat(f)]||d[f]||u[f]||o;return t?n.createElement(y,i(i({ref:r},p),{},{components:t})):n.createElement(y,i({ref:r},p))}));function f(e,r){var t=arguments,a=r&&r.mdxType;if("string"==typeof e||a){var o=t.length,i=new Array(o);i[0]=d;var s={};for(var c in r)hasOwnProperty.call(r,c)&&(s[c]=r[c]);s.originalType=e,s.mdxType="string"==typeof e?e:a,i[1]=s;for(var l=2;l<o;l++)i[l]=t[l];return n.createElement.apply(null,i)}return n.createElement.apply(null,t)}d.displayName="MDXCreateElement"},10763:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>c,contentTitle:()=>i,default:()=>u,frontMatter:()=>o,metadata:()=>s,toc:()=>l});var n=t(87462),a=(t(67294),t(3905));const o={},i=void 0,s={unversionedId:"features/crypto/defi/ayr/ayr",id:"features/crypto/defi/ayr/ayr",title:"ayr",description:"Displays the 30-day history of the Anchor Yield Reserve. An increasing yield reserve indicates that the return on collateral staked by borrowers in Anchor is greater than the yield paid to depositors. A decreasing yield reserve means yield paid to depositors is outpacing the staking returns of borrower's collateral. TLDR https://terra.engineer/]",source:"@site/terminal/features/crypto/defi/ayr/ayr.md",sourceDirName:"features/crypto/defi/ayr",slug:"/features/crypto/defi/ayr/",permalink:"/docs/terminal/features/crypto/defi/ayr/",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/terminal/features/crypto/defi/ayr/ayr.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"aterra",permalink:"/docs/terminal/features/crypto/defi/aterra/"},next:{title:"dtvl",permalink:"/docs/terminal/features/crypto/defi/dtvl/"}},c={},l=[],p={toc:l};function u(e){let{components:r,...t}=e;return(0,a.kt)("wrapper",(0,n.Z)({},p,t,{components:r,mdxType:"MDXLayout"}),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"usage: ayr [-h] [--export {csv,json,xlsx}]\n")),(0,a.kt)("p",null,"Displays the 30-day history of the Anchor Yield Reserve. An increasing yield reserve indicates that the return on collateral staked by borrowers in Anchor is greater than the yield paid to depositors. A decreasing yield reserve means yield paid to depositors is outpacing the staking returns of borrower's collateral. TLDR: Shows the address that contains UST that is paid on anchor interest earn. ","[Source: https://terra.engineer/]"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"optional arguments:\n  -h, --help            show this help message (default: False)\n  --export {csv,json,xlsx}\n                        Export raw data into csv, json, xlsx (default: )\n")),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/46355364/154049600-71d940f6-c7f3-4c50-a939-f76e539ed5cf.png",alt:"ayr"})))}u.isMDXComponent=!0}}]);