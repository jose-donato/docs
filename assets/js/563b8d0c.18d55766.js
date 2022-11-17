"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[90431],{3905:(t,e,n)=>{n.d(e,{Zo:()=>u,kt:()=>d});var r=n(67294);function a(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function c(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function l(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?c(Object(n),!0).forEach((function(e){a(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function i(t,e){if(null==t)return{};var n,r,a=function(t,e){if(null==t)return{};var n,r,a={},c=Object.keys(t);for(r=0;r<c.length;r++)n=c[r],e.indexOf(n)>=0||(a[n]=t[n]);return a}(t,e);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(t);for(r=0;r<c.length;r++)n=c[r],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(a[n]=t[n])}return a}var o=r.createContext({}),p=function(t){var e=r.useContext(o),n=e;return t&&(n="function"==typeof t?t(e):l(l({},e),t)),n},u=function(t){var e=p(t.components);return r.createElement(o.Provider,{value:e},t.children)},s={inlineCode:"code",wrapper:function(t){var e=t.children;return r.createElement(r.Fragment,{},e)}},m=r.forwardRef((function(t,e){var n=t.components,a=t.mdxType,c=t.originalType,o=t.parentName,u=i(t,["components","mdxType","originalType","parentName"]),m=p(n),d=a,f=m["".concat(o,".").concat(d)]||m[d]||s[d]||c;return n?r.createElement(f,l(l({ref:e},u),{},{components:n})):r.createElement(f,l({ref:e},u))}));function d(t,e){var n=arguments,a=e&&e.mdxType;if("string"==typeof t||a){var c=n.length,l=new Array(c);l[0]=m;var i={};for(var o in e)hasOwnProperty.call(e,o)&&(i[o]=e[o]);i.originalType=t,i.mdxType="string"==typeof t?t:a,l[1]=i;for(var p=2;p<c;p++)l[p]=n[p];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},74245:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>o,contentTitle:()=>l,default:()=>s,frontMatter:()=>c,metadata:()=>i,toc:()=>p});var r=n(87462),a=(n(67294),n(3905));const c={title:"btcct",description:"OpenBB Terminal Function"},l="OnChain",i={unversionedId:"features/crypto/onchain/btcct",id:"features/crypto/onchain/btcct",title:"btcct",description:"OpenBB Terminal Function",source:"@site/content/terminal/features/crypto/onchain/btcct.md",sourceDirName:"features/crypto/onchain",slug:"/features/crypto/onchain/btcct",permalink:"/terminal/features/crypto/onchain/btcct",draft:!1,tags:[],version:"current",frontMatter:{title:"btcct",description:"OpenBB Terminal Function"},sidebar:"tutorialSidebar",previous:{title:"btccp",permalink:"/terminal/features/crypto/onchain/btccp"},next:{title:"ds",permalink:"/terminal/features/crypto/onchain/ds"}},o={},p=[{value:"btcct",id:"btcct",level:2},{value:"Description:",id:"description",level:3},{value:"Usage:",id:"usage",level:3},{value:"Parameters",id:"parameters",level:2}],u={toc:p};function s(t){let{components:e,...n}=t;return(0,a.kt)("wrapper",(0,r.Z)({},u,n,{components:e,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"onchain"},"OnChain"),(0,a.kt)("h2",{id:"btcct"},"btcct"),(0,a.kt)("h3",{id:"description"},"Description:"),(0,a.kt)("p",null,"Display BTC confirmed transactions ","[Source: https://api.blockchain.info/]"),(0,a.kt)("h3",{id:"usage"},"Usage:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},"usage: btcct [-s SINCE] [-u UNTIL]\n")),(0,a.kt)("h2",{id:"parameters"},"Parameters"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Name"),(0,a.kt)("th",{parentName:"tr",align:null},"Description"),(0,a.kt)("th",{parentName:"tr",align:null},"Default"),(0,a.kt)("th",{parentName:"tr",align:null},"Optional"),(0,a.kt)("th",{parentName:"tr",align:null},"Choices"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"since"),(0,a.kt)("td",{parentName:"tr",align:null},"Initial date. Default: 2010-01-01"),(0,a.kt)("td",{parentName:"tr",align:null},"2010-01-01"),(0,a.kt)("td",{parentName:"tr",align:null},"True"),(0,a.kt)("td",{parentName:"tr",align:null},"None")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"until"),(0,a.kt)("td",{parentName:"tr",align:null},"Final date. Default: 2022-11-16"),(0,a.kt)("td",{parentName:"tr",align:null},"2022-11-16"),(0,a.kt)("td",{parentName:"tr",align:null},"True"),(0,a.kt)("td",{parentName:"tr",align:null},"None")))),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/46355364/154067586-d80059e8-cf7b-475a-990b-cf2aec7bc646.png",alt:"btcct"})))}s.isMDXComponent=!0}}]);