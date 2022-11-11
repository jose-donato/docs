"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[83070],{3905:(e,t,n)=>{n.d(t,{Zo:()=>m,kt:()=>f});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=a.createContext({}),u=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},m=function(e){var t=u(e.components);return a.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},p=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,m=s(e,["components","mdxType","originalType","parentName"]),p=u(n),f=r,c=p["".concat(l,".").concat(f)]||p[f]||d[f]||o;return n?a.createElement(c,i(i({ref:t},m),{},{components:n})):a.createElement(c,i({ref:t},m))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=p;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:r,i[1]=s;for(var u=2;u<o;u++)i[u]=n[u];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}p.displayName="MDXCreateElement"},47326:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>d,frontMatter:()=>o,metadata:()=>s,toc:()=>u});var a=n(87462),r=(n(67294),n(3905));const o={},i=void 0,s={unversionedId:"features/portfolio/po/maxret/maxret",id:"features/portfolio/po/maxret/maxret",title:"maxret",description:"Maximizes the return of portfolio.",source:"@site/terminal/features/portfolio/po/maxret/maxret.md",sourceDirName:"features/portfolio/po/maxret",slug:"/features/portfolio/po/maxret/",permalink:"/docs/terminal/features/portfolio/po/maxret/",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/terminal/features/portfolio/po/maxret/maxret.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"maxdiv",permalink:"/docs/terminal/features/portfolio/po/maxdiv/"},next:{title:"maxsharpe",permalink:"/docs/terminal/features/portfolio/po/maxsharpe/"}},l={},u=[],m={toc:u};function d(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"usage: maxret [-p HISTORIC_PERIOD] [-s START_PERIOD] [-e END_PERIOD] [-lr]\n              [--freq {d,w,m}] [-mn MAX_NAN] [-th THRESHOLD_VALUE]\n              [-mt NAN_FILL_METHOD]\n              [-rm {MV,MAD,MSV,FLPM,SLPM,CVaR,EVaR,WR,ADD,UCI,CDaR,EDaR,MDD}]\n              [-r RISK_FREE] [-a SIGNIFICANCE_LEVEL] [-tr TARGET_RETURN]\n              [-tk TARGET_RISK] [-m {hist,ewma1,ewma2}]\n              [-cv {hist,ewma1,ewma2,ledoit,oas,shrunk,gl,jlogo,fixed,spectral,shrink}]\n              [-de SMOOTHING_FACTOR_EWMA] [-v LONG_ALLOCATION]\n              [-vs SHORT_ALLOCATION] [--name NAME] [-h]\n")),(0,r.kt)("p",null,"Maximizes the return of portfolio."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"optional arguments:\n  -p HISTORIC_PERIOD, --period HISTORIC_PERIOD\n                        Period to get yfinance data from. Possible frequency\n                        strings are: 'd': means days, for example '252d' means\n                        252 days 'w': means weeks, for example '52w' means 52\n                        weeks 'mo': means months, for example '12mo' means 12\n                        months 'y': means years, for example '1y' means 1 year\n                        'ytd': downloads data from beginning of year to today\n                        'max': downloads all data available for each asset\n                        (default: 3y)\n  -s START_PERIOD, --start START_PERIOD\n                        Start date to get yfinance data from. Must be in\n                        'YYYY-MM-DD' format (default: )\n  -e END_PERIOD, --end END_PERIOD\n                        End date to get yfinance data from. Must be in 'YYYY-\n                        MM-DD' format (default: )\n  -lr, --log-returns    If use logarithmic or arithmetic returns to calculate\n                        returns (default: False)\n  --freq {d,w,m}\n                        Frequency used to calculate returns. Possible values\n                        are: 'd': for daily returns 'w': for weekly returns\n                        'm': for monthly returns (default: d)\n  -mn MAX_NAN, --maxnan MAX_NAN\n                        Max percentage of nan values accepted per asset to be\n                        considered in the optimization process (default: 0.05)\n  -th THRESHOLD_VALUE, --threshold THRESHOLD_VALUE\n                        Value used to replace outliers that are higher to\n                        threshold in absolute value (default: 0.3)\n  -mt NAN_FILL_METHOD, --method NAN_FILL_METHOD\n                        Method used to fill nan values in time series, by\n                        default time. Possible values are: 'linear': linear\n                        interpolation 'time': linear interpolation based on\n                        time index 'nearest': use nearest value to replace nan\n                        values 'zero': spline of zeroth order 'slinear':\n                        spline of first order 'quadratic': spline of second\n                        order 'cubic': spline of third order 'barycentric':\n                        builds a polynomial that pass for all points (default:\n                        time)\n  -rm {MV,MAD,MSV,FLPM,SLPM,CVaR,EVaR,WR,ADD,UCI,CDaR,EDaR,MDD}, --risk-measure {MV,MAD,MSV,FLPM,SLPM,CVaR,EVaR,WR,ADD,UCI,CDaR,EDaR,MDD}\n                        Risk measure used to optimize the portfolio. Possible\n                        values are: 'MV' : Variance 'MAD' : Mean Absolute\n                        Deviation 'MSV' : Semi Variance (Variance of negative\n                        returns) 'FLPM' : First Lower Partial Moment 'SLPM' :\n                        Second Lower Partial Moment 'CVaR' : Conditional Value\n                        at Risk 'EVaR' : Entropic Value at Risk 'WR' : Worst\n                        Realization 'ADD' : Average Drawdown of uncompounded\n                        returns 'UCI' : Ulcer Index of uncompounded returns\n                        'CDaR' : Conditional Drawdown at Risk of uncompounded\n                        returns 'EDaR' : Entropic Drawdown at Risk of\n                        uncompounded returns 'MDD' : Maximum Drawdown of\n                        uncompounded returns (default: MV)\n  -r RISK_FREE, --risk-free-rate RISK_FREE\n                        Risk-free rate of borrowing/lending. The period of the\n                        risk-free rate must be annual (default: 0.00329)\n  -a SIGNIFICANCE_LEVEL, --alpha SIGNIFICANCE_LEVEL\n                        Significance level of CVaR, EVaR, CDaR and EDaR\n                        (default: 0.05)\n  -tr TARGET_RETURN, --target-return TARGET_RETURN\n                        Constraint on minimum level of portfolio's return\n                        (default: -1)\n  -tk TARGET_RISK, --target-risk TARGET_RISK\n                        Constraint on maximum level of portfolio's risk\n                        (default: -1)\n  -m {hist,ewma1,ewma2}, --mean {hist,ewma1,ewma2}\n                        Method used to estimate the expected return vector\n                        (default: hist)\n  -cv {hist,ewma1,ewma2,ledoit,oas,shrunk,gl,jlogo,fixed,spectral,shrink}, --covariance {hist,ewma1,ewma2,ledoit,oas,shrunk,gl,jlogo,fixed,spectral,shrink}\n                        Method used to estimate covariance matrix. Possible\n                        values are 'hist': historical method 'ewma1':\n                        exponential weighted moving average with adjust=True\n                        'ewma2': exponential weighted moving average with\n                        adjust=False 'ledoit': Ledoit and Wolf shrinkage\n                        method 'oas': oracle shrinkage method 'shrunk':\n                        scikit-learn shrunk method 'gl': graphical lasso\n                        method 'jlogo': j-logo covariance 'fixed': takes\n                        average of eigenvalues above max Marchenko Pastour\n                        limit 'spectral': makes zero eigenvalues above max\n                        Marchenko Pastour limit 'shrink': Lopez de Prado's\n                        book shrinkage method (default: hist)\n  -de SMOOTHING_FACTOR_EWMA, --d-ewma SMOOTHING_FACTOR_EWMA\n                        Smoothing factor for ewma estimators (default: 0.94)\n  -v LONG_ALLOCATION, --value LONG_ALLOCATION\n                        Amount to allocate to portfolio in long positions\n                        (default: 1)\n  -vs SHORT_ALLOCATION, --value-short SHORT_ALLOCATION\n                        Amount to allocate to portfolio in short positions\n                        (default: 0.0)\n  --name NAME           Save portfolio with personalized or default name\n                        (default: MAXRET_0)\n  -h, --help            show this help message (default: False)\n")),(0,r.kt)("p",null,"Example:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"}," [3 Years] Maximal return portfolio using\nvolatility as risk measure\n\n     Weights\n\u250f\u2501\u2501\u2501\u2501\u2501\u2501\u2533\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2513\n\u2503      \u2503 Value   \u2503\n\u2521\u2501\u2501\u2501\u2501\u2501\u2501\u2547\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2529\n\u2502 AAPL \u2502  0.0 %  \u2502\n\u251c\u2500\u2500\u2500\u2500\u2500\u2500\u253c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2524\n\u2502 AMZN \u2502  0.0 %  \u2502\n\u251c\u2500\u2500\u2500\u2500\u2500\u2500\u253c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2524\n\u2502 BA   \u2502  0.0 %  \u2502\n\u251c\u2500\u2500\u2500\u2500\u2500\u2500\u253c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2524\n\u2502 FB   \u2502  0.0 %  \u2502\n\u251c\u2500\u2500\u2500\u2500\u2500\u2500\u253c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2524\n\u2502 MSFT \u2502  0.0 %  \u2502\n\u251c\u2500\u2500\u2500\u2500\u2500\u2500\u253c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2524\n\u2502 T    \u2502  0.0 %  \u2502\n\u251c\u2500\u2500\u2500\u2500\u2500\u2500\u253c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2524\n\u2502 TSLA \u2502 100.0 % \u2502\n\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n\nAnnual (by 252) expected return: 124.85%\nAnnual (by \u221a252) volatility: 68.44%\nSharpe ratio: 1.8215\n")))}d.isMDXComponent=!0}}]);