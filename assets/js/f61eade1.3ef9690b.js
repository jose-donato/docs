"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[18158],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>f});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),p=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},c=function(e){var t=p(e.components);return r.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),d=p(n),f=a,h=d["".concat(s,".").concat(f)]||d[f]||u[f]||o;return n?r.createElement(h,l(l({ref:t},c),{},{components:n})):r.createElement(h,l({ref:t},c))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,l=new Array(o);l[0]=d;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:a,l[1]=i;for(var p=2;p<o;p++)l[p]=n[p];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},18521:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>u,frontMatter:()=>o,metadata:()=>i,toc:()=>p});var r=n(87462),a=(n(67294),n(3905));const o={},l=void 0,i={unversionedId:"features/stocks/options/hedge/calc_delta",id:"features/stocks/options/hedge/calc_delta",title:"calc_delta",description:".. role:: python(code)",source:"@site/sdk/features/stocks/options/hedge/calc_delta.md",sourceDirName:"features/stocks/options/hedge",slug:"/features/stocks/options/hedge/calc_delta",permalink:"/sdk/features/stocks/options/hedge/calc_delta",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"add_hedge_option",permalink:"/sdk/features/stocks/options/hedge/add_hedge_option"},next:{title:"calc_gamma",permalink:"/sdk/features/stocks/options/hedge/calc_gamma"}},s={},p=[],c={toc:p};function u(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,".. role:: python(code)\n:language: python\n:class: highlight"),(0,a.kt)("p",null,"|"),(0,a.kt)("p",null,".. raw:: html"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"<h3>\n> Getting data\n</h3>\n")),(0,a.kt)("p",null,"{{< highlight python >}}\nstocks.options.hedge.calc_delta(\nasset_price: float = 100,\nasset_volatility: float = 20,\nstrike_price: float = 120,\ntime_to_expiration: float = 30,\nrisk_free_rate: float = 0,\nsign: int = 1,\nchart: bool = False,\n)\n{{< /highlight >}}"),(0,a.kt)("p",null,".. raw:: html"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"<p>\nThe first-order partial-derivative with respect to the underlying asset of the Black-Scholes\nequation is known as delta. Delta refers to how the option value changes when there is a change in\nthe underlying asset price. Multiplying delta by a +-$1 change in the underlying asset, holding all other\nparameters constant, will give you the new value of the option. Delta will be positive for long call and\nshort put positions, negative for short call and long put positions.\n</p>\n")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("strong",{parentName:"p"},"Parameters")),(0,a.kt)("p",{parentName:"li"},"  asset_price: int\nThe price.\nasset_volatility: float\nThe implied volatility.\nstrike_price: float\nThe strike price.\ntime_to_expiration: float\nThe amount of days until expiration. Use annual notation thus a month would be 30 / 360.\nrisk_free_rate: float\nThe risk free rate.\nsign: int\nWhether you have a long (1) or short (-1) position")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("strong",{parentName:"p"},"Returns")),(0,a.kt)("p",{parentName:"li"},"  delta: float\nReturns the value for the delta."))))}u.isMDXComponent=!0}}]);