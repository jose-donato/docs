"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[78501],{3905:(e,n,t)=>{t.d(n,{Zo:()=>u,kt:()=>f});var r=t(67294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function p(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var c=r.createContext({}),l=function(e){var n=r.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},u=function(e){var n=l(e.components);return r.createElement(c.Provider,{value:n},e.children)},s={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},d=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,u=p(e,["components","mdxType","originalType","parentName"]),d=l(t),f=o,m=d["".concat(c,".").concat(f)]||d[f]||s[f]||a;return t?r.createElement(m,i(i({ref:n},u),{},{components:t})):r.createElement(m,i({ref:n},u))}));function f(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var a=t.length,i=new Array(a);i[0]=d;var p={};for(var c in n)hasOwnProperty.call(n,c)&&(p[c]=n[c]);p.originalType=e,p.mdxType="string"==typeof e?e:o,i[1]=p;for(var l=2;l<a;l++)i[l]=t[l];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}d.displayName="MDXCreateElement"},17295:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>i,default:()=>s,frontMatter:()=>a,metadata:()=>p,toc:()=>l});var r=t(87462),o=(t(67294),t(3905));const a={title:"pending",description:"OpenBB Terminal Function"},i="Oanda",p={unversionedId:"features/forex/oanda/pending",id:"features/forex/oanda/pending",title:"pending",description:"OpenBB Terminal Function",source:"@site/content/terminal/features/forex/oanda/pending.md",sourceDirName:"features/forex/oanda",slug:"/features/forex/oanda/pending",permalink:"/terminal/features/forex/oanda/pending",draft:!1,tags:[],version:"current",frontMatter:{title:"pending",description:"OpenBB Terminal Function"},sidebar:"tutorialSidebar",previous:{title:"orderbook",permalink:"/terminal/features/forex/oanda/orderbook"},next:{title:"positionbook",permalink:"/terminal/features/forex/oanda/positionbook"}},c={},l=[{value:"pending",id:"pending",level:2},{value:"Description:",id:"description",level:3},{value:"Usage:",id:"usage",level:3}],u={toc:l};function s(e){let{components:n,...t}=e;return(0,o.kt)("wrapper",(0,r.Z)({},u,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"oanda"},"Oanda"),(0,o.kt)("h2",{id:"pending"},"pending"),(0,o.kt)("h3",{id:"description"},"Description:"),(0,o.kt)("p",null,"Get information about pending orders."),(0,o.kt)("h3",{id:"usage"},"Usage:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},"usage: pending\n")))}s.isMDXComponent=!0}}]);