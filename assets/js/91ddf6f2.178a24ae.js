"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[27523],{3905:(e,t,r)=>{r.d(t,{Zo:()=>f,kt:()=>d});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var s=n.createContext({}),u=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},f=function(e){var t=u(e.components);return n.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},c=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,f=i(e,["components","mdxType","originalType","parentName"]),c=u(r),d=o,m=c["".concat(s,".").concat(d)]||c[d]||p[d]||a;return r?n.createElement(m,l(l({ref:t},f),{},{components:r})):n.createElement(m,l({ref:t},f))}));function d(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,l=new Array(a);l[0]=c;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:o,l[1]=i;for(var u=2;u<a;u++)l[u]=r[u];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}c.displayName="MDXCreateElement"},85998:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>p,frontMatter:()=>a,metadata:()=>i,toc:()=>u});var n=r(87462),o=(r(67294),r(3905));const a={},l=void 0,i={unversionedId:"features/portfolio/po/ef/ef",id:"features/portfolio/po/ef/ef",title:"ef",description:"This function plots random portfolios based on their risk and returns and",source:"@site/terminal/features/portfolio/po/ef/ef.md",sourceDirName:"features/portfolio/po/ef",slug:"/features/portfolio/po/ef/",permalink:"/docs/terminal/features/portfolio/po/ef/",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/terminal/features/portfolio/po/ef/ef.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"dividend",permalink:"/docs/terminal/features/portfolio/po/dividend/"},next:{title:"equal",permalink:"/docs/terminal/features/portfolio/po/equal/"}},s={},u=[],f={toc:u};function p(e){let{components:t,...r}=e;return(0,o.kt)("wrapper",(0,n.Z)({},f,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"usage: ef [-p PERIOD] [-s START] [-e END] [-lr] [--freq {d,w,m}] [-mn MAXNAN]\n          [-th THRESHOLD] [-mt METHOD]\n          [-rm {MV,MAD,MSV,FLPM,SLPM,CVaR,EVaR,WR,ADD,UCI,CDaR,EDaR,MDD}]\n          [-r RISK_FREE_RATE] [-a ALPHA] [-v VALUE] [-vs VALUE_SHORT]\n          [-n N_PORTFOLIOS] [-se SEED] [-t] [-h]\n")),(0,o.kt)("p",null,"This function plots random portfolios based on their risk and returns and\nshows the efficient frontier of selected risk measure."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"optional arguments:\n  -p PERIOD, --period PERIOD\n                        Period to get yfinance data from (default: 3y)\n  -s START, --start START\n                        Start date to get yfinance data from. Must be in\n                        'YYYY-MM-DD' format (default: )\n  -e END, --end END     End date to get yfinance data from (default: )\n  -lr, --log-returns    If use logarithmic or arithmetic returns to calculate\n                        returns (default: False)\n  --freq {d,w,m}\n                        Frequency used to calculate returns (default: d)\n  -mn MAXNAN, --maxnan MAXNAN\n                        Max percentage of nan values accepted per asset to be\n                        considered in the optimization process (default: 0.05)\n  -th THRESHOLD, --threshold THRESHOLD\n                        Value used to replace outliers that are higher to\n                        threshold in absolute value (default: 0.3)\n  -mt METHOD, --method METHOD\n                        Method used to fill nan values (default: time)\n  -rm {MV,MAD,MSV,FLPM,SLPM,CVaR,EVaR,WR,ADD,UCI,CDaR,EDaR,MDD}, --risk-measure {MV,MAD,MSV,FLPM,SLPM,CVaR,EVaR,WR,ADD,UCI,CDaR,EDaR,MDD}\n                        Risk measure used to optimize the portfolio (default:\n                        MV)\n  -r RISK_FREE_RATE, --risk-free-rate RISK_FREE_RATE\n                        Risk-free rate of borrowing/lending. The period of the\n                        risk-free rate must be annual (default: 0.00185)\n  -a ALPHA, --alpha ALPHA\n                        Significance level of CVaR, EVaR, CDaR and EDaR\n                        (default: 0.05)\n  -v VALUE, --value VALUE\n                        Amount to allocate to portfolio in long positions\n                        (default: 1.0)\n  -vs VALUE_SHORT, --value-short VALUE_SHORT\n                        Amount to allocate to portfolio in short positions\n                        (default: 0.0)\n  -n N_PORTFOLIOS, --number-portfolios N_PORTFOLIOS\n                        Number of portfolios to simulate (default: 100)\n  -se SEED, --seed SEED\n                        Seed used to generate random portfolios (default: 123)\n  -t, --tangency        Adds the optimal line with the risk-free asset\n                        (default: False)\n  --no-plot         Whether to plot the tickers (default: True)\n  -h, --help            show this help message (default: False)\n")),(0,o.kt)("p",null,"Example:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"2022 Apr 05, 15:03 (\ud83e\udd8b) /portfolio/po/ $ ef\n")),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/61527316/161860003-e8b8ae93-ce8c-4e06-bad2-59c100f09325.png",alt:"Frontier"})))}p.isMDXComponent=!0}}]);