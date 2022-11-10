"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[58230],{3905:(e,t,r)=>{r.d(t,{Zo:()=>f,kt:()=>m});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var p=n.createContext({}),c=function(e){var t=n.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},f=function(e){var t=c(e.components);return n.createElement(p.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,p=e.parentName,f=i(e,["components","mdxType","originalType","parentName"]),u=c(r),m=o,d=u["".concat(p,".").concat(m)]||u[m]||s[m]||a;return r?n.createElement(d,l(l({ref:t},f),{},{components:r})):n.createElement(d,l({ref:t},f))}));function m(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,l=new Array(a);l[0]=u;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i.mdxType="string"==typeof e?e:o,l[1]=i;for(var c=2;c<a;c++)l[c]=r[c];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}u.displayName="MDXCreateElement"},48946:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>p,contentTitle:()=>l,default:()=>s,frontMatter:()=>a,metadata:()=>i,toc:()=>c});var n=r(87462),o=(r(67294),r(3905));const a={},l=void 0,i={unversionedId:"features/portfolio/po/file/file",id:"features/portfolio/po/file/file",title:"file",description:"Select parameter file to use.",source:"@site/terminal/features/portfolio/po/file/file.md",sourceDirName:"features/portfolio/po/file",slug:"/features/portfolio/po/file/",permalink:"/docs/terminal/features/portfolio/po/file/",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/terminal/features/portfolio/po/file/file.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"equal",permalink:"/docs/terminal/features/portfolio/po/equal/"},next:{title:"herc",permalink:"/docs/terminal/features/portfolio/po/herc/"}},p={},c=[],f={toc:c};function s(e){let{components:t,...r}=e;return(0,o.kt)("wrapper",(0,n.Z)({},f,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"usage: file -f FILE [FILE ...] [-h]\n")),(0,o.kt)("p",null,"Select parameter file to use."),(0,o.kt)("p",null,"Optional arguments:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"optional arguments:\n  -f FILE [FILE ...], --file FILE [FILE ...]\n                        Parameter file to be used (default: None)\n  -h, --help            show this help message (default: False)\n")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"2022 May 02, 06:51 (\ud83e\udd8b) /portfolio/po/ $ file OpenBB_Parameters_Template v1.0.0.xlsx\nParameters:\n    historic_period         : 3y\n    log_returns             : 0\n    return_frequency        : d\n    max_nan                 : 0.05\n    threshold_value         : 0.3\n    nan_fill_method         : time\n    risk_free               : 0.003\n    significance_level      : 0.05\n    risk_measure            : MV\n    target_return           : -1\n    target_risk             : -1\n    expected_return         : hist\n    covariance              : hist\n    smoothing_factor_ewma   : 0.94\n    long_allocation         : 1\n    short_allocation        : 0\n")))}s.isMDXComponent=!0}}]);