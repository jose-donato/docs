"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[99357],{3905:(e,n,t)=>{t.d(n,{Zo:()=>m,kt:()=>c});var r=t(67294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var l=r.createContext({}),u=function(e){var n=r.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},m=function(e){var n=u(e.components);return r.createElement(l.Provider,{value:n},e.children)},d={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},p=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,m=s(e,["components","mdxType","originalType","parentName"]),p=u(t),c=a,f=p["".concat(l,".").concat(c)]||p[c]||d[c]||o;return t?r.createElement(f,i(i({ref:n},m),{},{components:t})):r.createElement(f,i({ref:n},m))}));function c(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var o=t.length,i=new Array(o);i[0]=p;var s={};for(var l in n)hasOwnProperty.call(n,l)&&(s[l]=n[l]);s.originalType=e,s.mdxType="string"==typeof e?e:a,i[1]=s;for(var u=2;u<o;u++)i[u]=t[u];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}p.displayName="MDXCreateElement"},34261:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>i,default:()=>d,frontMatter:()=>o,metadata:()=>s,toc:()=>u});var r=t(87462),a=(t(67294),t(3905));const o={},i=void 0,s={unversionedId:"features/portfolio/po/minrisk/minrisk",id:"features/portfolio/po/minrisk/minrisk",title:"minrisk",description:"If all investments have the same expected return independent of risk, investors seeking maximum returns for minimum risk should concentrate exclusively on minimizing risk. This is the explicit objective of the minimum variance portfolio.",source:"@site/terminal/features/portfolio/po/minrisk/minrisk.md",sourceDirName:"features/portfolio/po/minrisk",slug:"/features/portfolio/po/minrisk/",permalink:"/docs/terminal/features/portfolio/po/minrisk/",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/terminal/features/portfolio/po/minrisk/minrisk.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"maxutil",permalink:"/docs/terminal/features/portfolio/po/maxutil/"},next:{title:"mktcap",permalink:"/docs/terminal/features/portfolio/po/mktcap/"}},l={},u=[],m={toc:u};function d(e){let{components:n,...t}=e;return(0,a.kt)("wrapper",(0,r.Z)({},m,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"usage: minrisk [-p HISTORIC_PERIOD] [-s START_PERIOD] [-e END_PERIOD] [-lr]\n               [--freq {d,w,m}] [-mn MAX_NAN] [-th THRESHOLD_VALUE]\n               [-mt NAN_FILL_METHOD]\n               [-rm {MV,MAD,MSV,FLPM,SLPM,CVaR,EVaR,WR,ADD,UCI,CDaR,EDaR,MDD}]\n               [-r RISK_FREE] [-a SIGNIFICANCE_LEVEL] [-tr TARGET_RETURN]\n               [-tk TARGET_RISK] [-m {hist,ewma1,ewma2}]\n               [-cv {hist,ewma1,ewma2,ledoit,oas,shrunk,gl,jlogo,fixed,spectral,shrink}]\n               [-de SMOOTHING_FACTOR_EWMA] [-v LONG_ALLOCATION]\n               [-vs SHORT_ALLOCATION] [--name NAME] [-h]\n")),(0,a.kt)("p",null,"If all investments have the same expected return independent of risk, investors seeking maximum returns for minimum risk should concentrate exclusively on minimizing risk. This is the explicit objective of the minimum variance portfolio."),(0,a.kt)("p",null,"Haugen and Baker (",(0,a.kt)("a",{parentName:"p",href:"https://investresolve.com/portfolio-optimization-simple-optimal-methods/#ref-Haugen1991"},"source"),") proposed dispensing with any relationship between risk and return, at least for equities. Their paper was one of the first to demonstrate that stock returns are not well explained by beta. In fact, they observed a negative relationship between returns and volatility. In the face of a spurious link between risk and return, Haugen and Baker suggested that a regularly reconstituted long-only Minimum Variance portfolio might dominate the capitalization weighted portfolio for stocks."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"optional arguments:\n  -p HISTORIC_PERIOD, --period HISTORIC_PERIOD\n                        Period to get yfinance data from. Possible frequency\n                        strings are: 'd': means days, for example '252d' means\n                        252 days 'w': means weeks, for example '52w' means 52\n                        weeks 'mo': means months, for example '12mo' means 12\n                        months 'y': means years, for example '1y' means 1 year\n                        'ytd': downloads data from beginning of year to today\n                        'max': downloads all data available for each asset\n                        (default: 3y)\n  -s START_PERIOD, --start START_PERIOD\n                        Start date to get yfinance data from. Must be in\n                        'YYYY-MM-DD' format (default: )\n  -e END_PERIOD, --end END_PERIOD\n                        End date to get yfinance data from. Must be in 'YYYY-\n                        MM-DD' format (default: )\n  -lr, --log-returns    If use logarithmic or arithmetic returns to calculate\n                        returns (default: False)\n  --freq {d,w,m}\n                        Frequency used to calculate returns. Possible values\n                        are: 'd': for daily returns 'w': for weekly returns\n                        'm': for monthly returns (default: d)\n  -mn MAX_NAN, --maxnan MAX_NAN\n                        Max percentage of nan values accepted per asset to be\n                        considered in the optimization process (default: 0.05)\n  -th THRESHOLD_VALUE, --threshold THRESHOLD_VALUE\n                        Value used to replace outliers that are higher to\n                        threshold in absolute value (default: 0.3)\n  -mt NAN_FILL_METHOD, --method NAN_FILL_METHOD\n                        Method used to fill nan values in time series, by\n                        default time. Possible values are: 'linear': linear\n                        interpolation 'time': linear interpolation based on\n                        time index 'nearest': use nearest value to replace nan\n                        values 'zero': spline of zeroth order 'slinear':\n                        spline of first order 'quadratic': spline of second\n                        order 'cubic': spline of third order 'barycentric':\n                        builds a polynomial that pass for all points (default:\n                        time)\n  -rm {MV,MAD,MSV,FLPM,SLPM,CVaR,EVaR,WR,ADD,UCI,CDaR,EDaR,MDD}, --risk-measure {MV,MAD,MSV,FLPM,SLPM,CVaR,EVaR,WR,ADD,UCI,CDaR,EDaR,MDD}\n                        Risk measure used to optimize the portfolio. Possible\n                        values are: 'MV' : Variance 'MAD' : Mean Absolute\n                        Deviation 'MSV' : Semi Variance (Variance of negative\n                        returns) 'FLPM' : First Lower Partial Moment 'SLPM' :\n                        Second Lower Partial Moment 'CVaR' : Conditional Value\n                        at Risk 'EVaR' : Entropic Value at Risk 'WR' : Worst\n                        Realization 'ADD' : Average Drawdown of uncompounded\n                        returns 'UCI' : Ulcer Index of uncompounded returns\n                        'CDaR' : Conditional Drawdown at Risk of uncompounded\n                        returns 'EDaR' : Entropic Drawdown at Risk of\n                        uncompounded returns 'MDD' : Maximum Drawdown of\n                        uncompounded returns (default: MV)\n  -r RISK_FREE, --risk-free-rate RISK_FREE\n                        Risk-free rate of borrowing/lending. The period of the\n                        risk-free rate must be annual (default: 0.00329)\n  -a SIGNIFICANCE_LEVEL, --alpha SIGNIFICANCE_LEVEL\n                        Significance level of CVaR, EVaR, CDaR and EDaR\n                        (default: 0.05)\n  -tr TARGET_RETURN, --target-return TARGET_RETURN\n                        Constraint on minimum level of portfolio's return\n                        (default: -1)\n  -tk TARGET_RISK, --target-risk TARGET_RISK\n                        Constraint on maximum level of portfolio's risk\n                        (default: -1)\n  -m {hist,ewma1,ewma2}, --mean {hist,ewma1,ewma2}\n                        Method used to estimate expected returns vector\n                        (default: hist)\n  -cv {hist,ewma1,ewma2,ledoit,oas,shrunk,gl,jlogo,fixed,spectral,shrink}, --covariance {hist,ewma1,ewma2,ledoit,oas,shrunk,gl,jlogo,fixed,spectral,shrink}\n                        Method used to estimate covariance matrix. Possible\n                        values are 'hist': historical method 'ewma1':\n                        exponential weighted moving average with adjust=True\n                        'ewma2': exponential weighted moving average with\n                        adjust=False 'ledoit': Ledoit and Wolf shrinkage\n                        method 'oas': oracle shrinkage method 'shrunk':\n                        scikit-learn shrunk method 'gl': graphical lasso\n                        method 'jlogo': j-logo covariance 'fixed': takes\n                        average of eigenvalues above max Marchenko Pastour\n                        limit 'spectral': makes zero eigenvalues above max\n                        Marchenko Pastour limit 'shrink': Lopez de Prado's\n                        book shrinkage method (default: hist)\n  -de SMOOTHING_FACTOR_EWMA, --d-ewma SMOOTHING_FACTOR_EWMA\n                        Smoothing factor for ewma estimators (default: 0.94)\n  -v LONG_ALLOCATION, --value LONG_ALLOCATION\n                        Amount to allocate to portfolio in long positions\n                        (default: 1)\n  -vs SHORT_ALLOCATION, --value-short SHORT_ALLOCATION\n                        Amount to allocate to portfolio in short positions\n                        (default: 0.0)\n  --name NAME           Save portfolio with personalized or default name\n                        (default: MINRISK_0)\n  -h, --help            show this help message (default: False)\n")),(0,a.kt)("p",null,"Example:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"2022 Apr 05, 13:45 (\ud83e\udd8b) /portfolio/po/ $ minrisk\n\n [3 Years] Display a minimum risk portfolio using\nvolatility as risk measure\n\n     Weights\n\u250f\u2501\u2501\u2501\u2501\u2501\u2501\u2533\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2513\n\u2503      \u2503 Value   \u2503\n\u2521\u2501\u2501\u2501\u2501\u2501\u2501\u2547\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2529\n\u2502 AAPL \u2502  0.0 %  \u2502\n\u251c\u2500\u2500\u2500\u2500\u2500\u2500\u253c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2524\n\u2502 AMZN \u2502 35.21 % \u2502\n\u251c\u2500\u2500\u2500\u2500\u2500\u2500\u253c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2524\n\u2502 BA   \u2502  0.0 %  \u2502\n\u251c\u2500\u2500\u2500\u2500\u2500\u2500\u253c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2524\n\u2502 FB   \u2502  0.0 %  \u2502\n\u251c\u2500\u2500\u2500\u2500\u2500\u2500\u253c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2524\n\u2502 MSFT \u2502  5.86 % \u2502\n\u251c\u2500\u2500\u2500\u2500\u2500\u2500\u253c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2524\n\u2502 T    \u2502 58.92 % \u2502\n\u251c\u2500\u2500\u2500\u2500\u2500\u2500\u253c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2524\n\u2502 TSLA \u2502  0.0 %  \u2502\n\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n\nAnnual (by 252) expected return: 11.77%\nAnnual (by \u221a252) volatility: 22.03%\nSharpe ratio: 0.5256\n")))}d.isMDXComponent=!0}}]);