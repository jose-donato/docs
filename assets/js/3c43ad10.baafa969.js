"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[97325],{3905:(e,t,r)=>{r.d(t,{Zo:()=>l,kt:()=>f});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var p=n.createContext({}),c=function(e){var t=n.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},l=function(e){var t=c(e.components);return n.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,p=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),d=c(r),f=a,m=d["".concat(p,".").concat(f)]||d[f]||u[f]||o;return r?n.createElement(m,i(i({ref:t},l),{},{components:r})):n.createElement(m,i({ref:t},l))}));function f(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=d;var s={};for(var p in t)hasOwnProperty.call(t,p)&&(s[p]=t[p]);s.originalType=e,s.mdxType="string"==typeof e?e:a,i[1]=s;for(var c=2;c<o;c++)i[c]=r[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},90164:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>u,frontMatter:()=>o,metadata:()=>s,toc:()=>c});var n=r(87462),a=(r(67294),r(3905));const o={},i=void 0,s={unversionedId:"features/scripts/exe/exe",id:"features/scripts/exe/exe",title:"exe",description:"The .openbb scripts offer the ability to automatically run a set of commands in the form of a routine. Furthermore,",source:"@site/terminal/features/scripts/exe/exe.md",sourceDirName:"features/scripts/exe",slug:"/features/scripts/exe/",permalink:"/docs/terminal/features/scripts/exe/",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/terminal/features/scripts/exe/exe.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"scripts",permalink:"/docs/terminal/features/scripts/"},next:{title:"Introduction to Stocks",permalink:"/docs/terminal/features/stocks/"}},p={},c=[],l={toc:c};function u(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},l,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"usage: exe [-f PATH] [-i ROUTINE_ARGS] [-h]\n")),(0,a.kt)("p",null,"The .openbb scripts offer the ability to automatically run a set of commands in the form of a ",(0,a.kt)("strong",{parentName:"p"},"routine"),". Furthermore,\nthe scripts can be adapted, and documented, at any moment giving the user full control over the type of analysis you wish\nto do (and repeat). This can fundamental research, understanding market movements, finding hidden gems and even\ndoing advanced statistical/econometric research."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"optional arguments:\n  -f PATH, --file PATH  The path or .openbb file to run. (default: )\n  -i ROUTINE_ARGS, --input ROUTINE_ARGS\n                        Select multiple inputs to be replaced in the routine and separated by commas. E.g. GME,AMC,BTC-USD (default: None)\n  -h, --help            show this help message (default: False)\n\n")),(0,a.kt)("p",null,"An example of a script can be the following (inside a ",(0,a.kt)("inlineCode",{parentName:"p"},".openbb")," file):"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-txt"},"# Go into the econometrics context\neconometrics\n\n# Load the wage_panel dataset and include an alias\nload wage_panel -a wp\n\n# Set the MultiIndex, allowing for Panel regressions to be performed\nindex wp -i nr,year\n\n# Change the type of the year column so it can be included as time effects within the regressions\ntype wp.year --format category\n\n# Perform a Pooled OLS, Random Effects and Fixed Effects estimation\npanel -d wp.lwage -i wp.black,wp.hisp,wp.exper,wp.expersq,wp.married,wp.educ,wp.union,wp.year\npanel -d wp.lwage -i wp.black,wp.hisp,wp.exper,wp.expersq,wp.married,wp.educ,wp.union,wp.year -r re\npanel -d wp.lwage -i wp.expersq,wp.union,wp.married,wp.year -r fe\n\n# Compare the results obtained from these regressions\ncompare\n")))}u.isMDXComponent=!0}}]);