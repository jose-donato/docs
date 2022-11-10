"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[41098],{3905:(e,t,r)=>{r.d(t,{Zo:()=>d,kt:()=>f});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var i=n.createContext({}),p=function(e){var t=n.useContext(i),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},d=function(e){var t=p(e.components);return n.createElement(i.Provider,{value:t},e.children)},l={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,d=c(e,["components","mdxType","originalType","parentName"]),u=p(r),f=a,x=u["".concat(i,".").concat(f)]||u[f]||l[f]||o;return r?n.createElement(x,s(s({ref:t},d),{},{components:r})):n.createElement(x,s({ref:t},d))}));function f(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,s=new Array(o);s[0]=u;var c={};for(var i in t)hasOwnProperty.call(t,i)&&(c[i]=t[i]);c.originalType=e,c.mdxType="string"==typeof e?e:a,s[1]=c;for(var p=2;p<o;p++)s[p]=r[p];return n.createElement.apply(null,s)}return n.createElement.apply(null,r)}u.displayName="MDXCreateElement"},16814:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>i,contentTitle:()=>s,default:()=>l,frontMatter:()=>o,metadata:()=>c,toc:()=>p});var n=r(87462),a=(r(67294),r(3905));const o={},s=void 0,c={unversionedId:"features/crypto/onchain/ttcp/ttcp",id:"features/crypto/onchain/ttcp/ttcp",title:"ttcp",description:"Display most traded crypto pairs on given decentralized exchange in chosen",source:"@site/terminal/features/crypto/onchain/ttcp/ttcp.md",sourceDirName:"features/crypto/onchain/ttcp",slug:"/features/crypto/onchain/ttcp/",permalink:"/docs/terminal/features/crypto/onchain/ttcp/",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/terminal/features/crypto/onchain/ttcp/ttcp.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"top",permalink:"/docs/terminal/features/crypto/onchain/top/"},next:{title:"tv",permalink:"/docs/terminal/features/crypto/onchain/tv/"}},i={},p=[],d={toc:p};function l(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"usage: ttcp [-l N]\n            [-e {1inch,afrodex,airswap,amplbitcratic,balancer,bestswap,bitox,cellswap,cofix,coinchangex,curve,ddex,dubiex,decentrex,deversifi,dodo,ethercexchange,etherblockchain,etherdelta,ethernext,ethfinex,fegex,fffswap,fordex,gudecks,gudeks,hiswap,idex,ledgerdex,mat\ncha,miniswap,mooniswap,oasis,openrelay,s.finance,sakeswap,seeddex,singularx,starbitex,sushiswap,swapx,switchdex,tacoswap,tokenjar,tokenstore,tokentrove,tokenlon,tradexone,uniswap,zeusswap,dydx,dex.blue}]\n            [-d DAYS] [-s {base,quoted,trades,tradeAmount}] [--descend] [-h]\n            [--export {csv,json,xlsx}]\n")),(0,a.kt)("p",null,"Display most traded crypto pairs on given decentralized exchange in chosen\ntime period ","[Source: https://graphql.bitquery.io/]"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"optional arguments:\n  -l N, --limit N     display N number records (default: 10)\n  -e {1inch,afrodex,airswap,amplbitcratic,balancer,bestswap,bitox,cellswap,cofix,coinchangex,curve,ddex,dubiex,decentrex,deversifi,dodo,ethercexchange,etherblockchain,etherdelta,ethernext,ethfinex,fegex,fffswap,fordex,gudecks,gudeks,hiswap,idex,ledgerdex,matcha,miniswa\np,mooniswap,oasis,openrelay,s.finance,sakeswap,seeddex,singularx,starbitex,sushiswap,swapx,switchdex,tacoswap,tokenjar,tokenstore,tokentrove,tokenlon,tradexone,uniswap,zeusswap,dydx,dex.blue}, --exchange {1inch,afrodex,airswap,amplbitcratic,balancer,bestswap,bitox,cell\nswap,cofix,coinchangex,curve,ddex,dubiex,decentrex,deversifi,dodo,ethercexchange,etherblockchain,etherdelta,ethernext,ethfinex,fegex,fffswap,fordex,gudecks,gudeks,hiswap,idex,ledgerdex,matcha,miniswap,mooniswap,oasis,openrelay,s.finance,sakeswap,seeddex,singularx,starb\nitex,sushiswap,swapx,switchdex,tacoswap,tokenjar,tokenstore,tokentrove,tokenlon,tradexone,uniswap,zeusswap,dydx,dex.blue}\n                        Decentralized exchange name. (default: Uniswap)\n  -d DAYS, --days DAYS  Number of days to display data for. (default: 30)\n  -s {base,quoted,trades,tradeAmount}, --sort {base,quoted,trades,tradeAmount}\n                        Sort by given column. (default: tradeAmount)\n  --descend             Flag to sort in descending order (lowest first)\n                        (default: False)\n  -h, --help            show this help message (default: False)\n  --export {csv,json,xlsx}\n                        Export raw data into csv, json, xlsx (default: )\n")))}l.isMDXComponent=!0}}]);