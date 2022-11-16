"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[79525],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>f});var s=r(67294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);t&&(s=s.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,s)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,s,n=function(e,t){if(null==e)return{};var r,s,n={},a=Object.keys(e);for(s=0;s<a.length;s++)r=a[s],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(s=0;s<a.length;s++)r=a[s],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var l=s.createContext({}),c=function(e){var t=s.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},u=function(e){var t=c(e.components);return s.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return s.createElement(s.Fragment,{},t)}},d=s.forwardRef((function(e,t){var r=e.components,n=e.mdxType,a=e.originalType,l=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),d=c(r),f=n,m=d["".concat(l,".").concat(f)]||d[f]||p[f]||a;return r?s.createElement(m,o(o({ref:t},u),{},{components:r})):s.createElement(m,o({ref:t},u))}));function f(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var a=r.length,o=new Array(a);o[0]=d;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:n,o[1]=i;for(var c=2;c<a;c++)o[c]=r[c];return s.createElement.apply(null,o)}return s.createElement.apply(null,r)}d.displayName="MDXCreateElement"},74794:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>p,frontMatter:()=>a,metadata:()=>i,toc:()=>c});var s=r(87462),n=(r(67294),r(3905));const a={},o=void 0,i={unversionedId:"features/alternative/oss/rossidx/rossidx",id:"features/alternative/oss/rossidx/rossidx",title:"rossidx",description:"usage: rossidx [-s SORTBY [SORTBY {GitHub,Company,Country,City,Founded,Raised [$M],Stars,Forks,Stars AGR [%],Forks AGR [%]}]] [--descend] [--chart] [--growth] [-ct {stars,forks}] [-h] [--export EXPORT] [-l LIMIT]",source:"@site/content/terminal/features/alternative/oss/rossidx/rossidx.md",sourceDirName:"features/alternative/oss/rossidx",slug:"/features/alternative/oss/rossidx/",permalink:"/docs/terminal/features/alternative/oss/rossidx/",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/content/terminal/features/alternative/oss/rossidx/rossidx.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"oss",permalink:"/docs/terminal/features/alternative/oss/"},next:{title:"rs",permalink:"/docs/terminal/features/alternative/oss/rs/"}},l={},c=[],u={toc:c};function p(e){let{components:t,...r}=e;return(0,n.kt)("wrapper",(0,s.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},"usage: rossidx [-s SORTBY [SORTBY {GitHub,Company,Country,City,Founded,Raised [$M],Stars,Forks,Stars AGR [%],Forks AGR [%]}]] [--descend] [--chart] [--growth] [-ct {stars,forks}] [-h] [--export EXPORT] [-l LIMIT]")),(0,n.kt)("p",null,"Display list of startups from ross index ","[Source: https://runacap.com/]","\nUse --chart to display chart and -t {stars,forks} to set chart type"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"optional arguments:\n  -s SORTBY [SORTBY ...], --sortby SORTBY [SORTBY {GitHub,Company,Country,City,Founded,Raised [$M],Stars,Forks,Stars AGR [%],Forks AGR [%]}]\n                        Sort startups by column (default: Stars AGR [%])\n  --descend             Flag to sort in descending order (lowest first) (default: False)\n  -c, --chart           Flag to show chart (default: False)\n  -g, --growth          Flag to show growth chart (default: False)\n  -t {stars,forks}, --chart-type {stars,forks}\n                        Chart type: {stars, forks} (default: stars)\n  -h, --help            show this help message (default: False)\n  --export EXPORT       Export raw data into csv, json, xlsx (default: )\n  -l LIMIT, --limit LIMIT\n                        Number of entries to show in data. (default: 10)\n")))}p.isMDXComponent=!0}}]);