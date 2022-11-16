"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[92333],{3905:(e,r,t)=>{t.d(r,{Zo:()=>c,kt:()=>m});var o=t(67294);function n(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function p(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);r&&(o=o.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,o)}return t}function a(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?p(Object(t),!0).forEach((function(r){n(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):p(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function i(e,r){if(null==e)return{};var t,o,n=function(e,r){if(null==e)return{};var t,o,n={},p=Object.keys(e);for(o=0;o<p.length;o++)t=p[o],r.indexOf(t)>=0||(n[t]=e[t]);return n}(e,r);if(Object.getOwnPropertySymbols){var p=Object.getOwnPropertySymbols(e);for(o=0;o<p.length;o++)t=p[o],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(n[t]=e[t])}return n}var l=o.createContext({}),f=function(e){var r=o.useContext(l),t=r;return e&&(t="function"==typeof e?e(r):a(a({},r),e)),t},c=function(e){var r=f(e.components);return o.createElement(l.Provider,{value:r},e.children)},s={inlineCode:"code",wrapper:function(e){var r=e.children;return o.createElement(o.Fragment,{},r)}},u=o.forwardRef((function(e,r){var t=e.components,n=e.mdxType,p=e.originalType,l=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),u=f(t),m=n,d=u["".concat(l,".").concat(m)]||u[m]||s[m]||p;return t?o.createElement(d,a(a({ref:r},c),{},{components:t})):o.createElement(d,a({ref:r},c))}));function m(e,r){var t=arguments,n=r&&r.mdxType;if("string"==typeof e||n){var p=t.length,a=new Array(p);a[0]=u;var i={};for(var l in r)hasOwnProperty.call(r,l)&&(i[l]=r[l]);i.originalType=e,i.mdxType="string"==typeof e?e:n,a[1]=i;for(var f=2;f<p;f++)a[f]=t[f];return o.createElement.apply(null,a)}return o.createElement.apply(null,t)}u.displayName="MDXCreateElement"},90602:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>l,contentTitle:()=>a,default:()=>s,frontMatter:()=>p,metadata:()=>i,toc:()=>f});var o=t(87462),n=(t(67294),t(3905));const p={},a=void 0,i={unversionedId:"features/portfolio/po/rpf/rpf",id:"features/portfolio/po/rpf/rpf",title:"rpf",description:"Remove one portfolio from saved portfolios.",source:"@site/content/terminal/features/portfolio/po/rpf/rpf.md",sourceDirName:"features/portfolio/po/rpf",slug:"/features/portfolio/po/rpf/",permalink:"/docs/terminal/features/portfolio/po/rpf/",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/content/terminal/features/portfolio/po/rpf/rpf.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"rmv",permalink:"/docs/terminal/features/portfolio/po/rmv/"},next:{title:"select",permalink:"/docs/terminal/features/portfolio/po/select/"}},l={},f=[],c={toc:f};function s(e){let{components:r,...t}=e;return(0,n.kt)("wrapper",(0,o.Z)({},c,t,{components:r,mdxType:"MDXLayout"}),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"usage: rpf [-pf PORTFOLIOS] [-h]\n")),(0,n.kt)("p",null,"Remove one portfolio from saved portfolios."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"optional arguments:\n  -pf PORTFOLIOS, --portfolios PORTFOLIOS\n                        portfolios to be removed from the saved portfolios\n  -h, --help            show this help message\n")))}s.isMDXComponent=!0}}]);