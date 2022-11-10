"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[1741],{3905:(e,t,a)=>{a.d(t,{Zo:()=>d,kt:()=>c});var r=a(67294);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function n(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?n(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):n(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,r,o=function(e,t){if(null==e)return{};var a,r,o={},n=Object.keys(e);for(r=0;r<n.length;r++)a=n[r],t.indexOf(a)>=0||(o[a]=e[a]);return o}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(r=0;r<n.length;r++)a=n[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(o[a]=e[a])}return o}var l=r.createContext({}),u=function(e){var t=r.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},d=function(e){var t=u(e.components);return r.createElement(l.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var a=e.components,o=e.mdxType,n=e.originalType,l=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),p=u(a),c=o,f=p["".concat(l,".").concat(c)]||p[c]||m[c]||n;return a?r.createElement(f,i(i({ref:t},d),{},{components:a})):r.createElement(f,i({ref:t},d))}));function c(e,t){var a=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var n=a.length,i=new Array(n);i[0]=p;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:o,i[1]=s;for(var u=2;u<n;u++)i[u]=a[u];return r.createElement.apply(null,i)}return r.createElement.apply(null,a)}p.displayName="MDXCreateElement"},80152:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>m,frontMatter:()=>n,metadata:()=>s,toc:()=>u});var r=a(87462),o=(a(67294),a(3905));const n={},i=void 0,s={unversionedId:"features/portfolio/po/maxsharpe/maxsharpe",id:"features/portfolio/po/maxsharpe/maxsharpe",title:"maxsharpe",description:"Maximizes the Risk-Adjusted Return Ratio. The Sharpe ratio is one of the most widely used methods for calculating risk-adjusted return. Modern Portfolio Theory (MPT) states that adding assets to a diversified portfolio that has low correlations can decrease portfolio risk without sacrificing returns. Adding diversification should increase the Sharpe ratio compared to similar portfolios with a lower level of diversification. For this to be true, investors must also accept the assumption that risk is equal to volatility, which is not unreasonable but may be too narrow to be applied to all investments. Post-Modern Portfolio Theory (PMPT) allows to extend the concept of Sharpe ratio to other risk measures like conditional value at risk or conditional drawdown at risk to consider downside risk aversion.",source:"@site/terminal/features/portfolio/po/maxsharpe/maxsharpe.md",sourceDirName:"features/portfolio/po/maxsharpe",slug:"/features/portfolio/po/maxsharpe/",permalink:"/docs/terminal/features/portfolio/po/maxsharpe/",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/terminal/features/portfolio/po/maxsharpe/maxsharpe.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"maxret",permalink:"/docs/terminal/features/portfolio/po/maxret/"},next:{title:"maxutil",permalink:"/docs/terminal/features/portfolio/po/maxutil/"}},l={},u=[],d={toc:u};function m(e){let{components:t,...a}=e;return(0,o.kt)("wrapper",(0,r.Z)({},d,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"usage: maxsharpe [-p HISTORIC_PERIOD] [-s START_PERIOD] [-e END_PERIOD] [-lr]\n                 [--freq {d,w,m}] [-mn MAX_NAN] [-th THRESHOLD_VALUE]\n                 [-mt NAN_FILL_METHOD]\n                 [-rm {MV,MAD,MSV,FLPM,SLPM,CVaR,EVaR,WR,ADD,UCI,CDaR,EDaR,MDD}]\n                 [-r RISK_FREE] [-a SIGNIFICANCE_LEVEL] [-tr TARGET_RETURN]\n                 [-tk TARGET_RISK] [-m {hist,ewma1,ewma2}]\n                 [-cv {hist,ewma1,ewma2,ledoit,oas,shrunk,gl,jlogo,fixed,spectral,shrink}]\n                 [-de SMOOTHING_FACTOR_EWMA] [-v LONG_ALLOCATION]\n                 [-vs SHORT_ALLOCATION] [--name NAME] [-h]\n")),(0,o.kt)("p",null,"Maximizes the Risk-Adjusted Return Ratio. The Sharpe ratio is one of the most widely used methods for calculating risk-adjusted return. Modern Portfolio Theory (MPT) states that adding assets to a diversified portfolio that has low correlations can decrease portfolio risk without sacrificing returns. Adding diversification should increase the Sharpe ratio compared to similar portfolios with a lower level of diversification. For this to be true, investors must also accept the assumption that risk is equal to volatility, which is not unreasonable but may be too narrow to be applied to all investments. Post-Modern Portfolio Theory (PMPT) allows to extend the concept of Sharpe ratio to other risk measures like conditional value at risk or conditional drawdown at risk to consider downside risk aversion."),(0,o.kt)("p",null,"The Risk-Adjusted Return Ratio is calculated as follows:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Subtract the risk-free rate from the return of the portfolio. The risk-free rate could be a U.S. Treasury rate or yield, such as the one-year or two-year Treasury yield.")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Divide the result by the selected risk measure of the portfolio\u2019s excess return."))),(0,o.kt)("p",null,"The Risk-Adjusted Return Ratio can also help explain whether a portfolio's excess returns are due to smart investment decisions or a result of too much risk."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"optional arguments:\n  -p HISTORIC_PERIOD, --period HISTORIC_PERIOD\n                        Period to get yfinance data from. Possible frequency\n                        strings are: 'd': means days, for example '252d' means\n                        252 days 'w': means weeks, for example '52w' means 52\n                        weeks 'mo': means months, for example '12mo' means 12\n                        months 'y': means years, for example '1y' means 1 year\n                        'ytd': downloads data from beginning of year to today\n                        'max': downloads all data available for each asset\n                        (default: 3y)\n  -s START_PERIOD, --start START_PERIOD\n                        Start date to get yfinance data from. Must be in\n                        'YYYY-MM-DD' format (default: )\n  -e END_PERIOD, --end END_PERIOD\n                        End date to get yfinance data from. Must be in 'YYYY-\n                        MM-DD' format (default: )\n  -lr, --log-returns    If use logarithmic or arithmetic returns to calculate\n                        returns (default: False)\n  --freq {d,w,m}\n                        Frequency used to calculate returns. Possible values\n                        are: 'd': for daily returns 'w': for weekly returns\n                        'm': for monthly returns (default: d)\n  -mn MAX_NAN, --maxnan MAX_NAN\n                        Max percentage of nan values accepted per asset to be\n                        considered in the optimization process (default: 0.05)\n  -th THRESHOLD_VALUE, --threshold THRESHOLD_VALUE\n                        Value used to replace outliers that are higher to\n                        threshold in absolute value (default: 0.3)\n  -mt NAN_FILL_METHOD, --method NAN_FILL_METHOD\n                        Method used to fill nan values in time series, by\n                        default time. Possible values are: 'linear': linear\n                        interpolation 'time': linear interpolation based on\n                        time index 'nearest': use nearest value to replace nan\n                        values 'zero': spline of zeroth order 'slinear':\n                        spline of first order 'quadratic': spline of second\n                        order 'cubic': spline of third order 'barycentric':\n                        builds a polynomial that pass for all points (default:\n                        time)\n  -rm {MV,MAD,MSV,FLPM,SLPM,CVaR,EVaR,WR,ADD,UCI,CDaR,EDaR,MDD}, --risk-measure {MV,MAD,MSV,FLPM,SLPM,CVaR,EVaR,WR,ADD,UCI,CDaR,EDaR,MDD}\n                        Risk measure used to optimize the portfolio. Possible\n                        values are: 'MV' : Variance 'MAD' : Mean Absolute\n                        Deviation 'MSV' : Semi Variance (Variance of negative\n                        returns) 'FLPM' : First Lower Partial Moment 'SLPM' :\n                        Second Lower Partial Moment 'CVaR' : Conditional Value\n                        at Risk 'EVaR' : Entropic Value at Risk 'WR' : Worst\n                        Realization 'ADD' : Average Drawdown of uncompounded\n                        returns 'UCI' : Ulcer Index of uncompounded returns\n                        'CDaR' : Conditional Drawdown at Risk of uncompounded\n                        returns 'EDaR' : Entropic Drawdown at Risk of\n                        uncompounded returns 'MDD' : Maximum Drawdown of\n                        uncompounded returns (default: MV)\n  -r RISK_FREE, --risk-free-rate RISK_FREE\n                        Risk-free rate of borrowing/lending. The period of the\n                        risk-free rate must be annual (default: 0.00329)\n  -a SIGNIFICANCE_LEVEL, --alpha SIGNIFICANCE_LEVEL\n                        Significance level of CVaR, EVaR, CDaR and EDaR\n                        (default: 0.05)\n  -tr TARGET_RETURN, --target-return TARGET_RETURN\n                        Constraint on minimum level of portfolio's return\n                        (default: -1)\n  -tk TARGET_RISK, --target-risk TARGET_RISK\n                        Constraint on maximum level of portfolio's risk\n                        (default: -1)\n  -m {hist,ewma1,ewma2}, --mean {hist,ewma1,ewma2}\n                        Method used to estimate the expected return vector\n                        (default: hist)\n  -cv {hist,ewma1,ewma2,ledoit,oas,shrunk,gl,jlogo,fixed,spectral,shrink}, --covariance {hist,ewma1,ewma2,ledoit,oas,shrunk,gl,jlogo,fixed,spectral,shrink}\n                        Method used to estimate covariance matrix. Possible\n                        values are 'hist': historical method 'ewma1':\n                        exponential weighted moving average with adjust=True\n                        'ewma2': exponential weighted moving average with\n                        adjust=False 'ledoit': Ledoit and Wolf shrinkage\n                        method 'oas': oracle shrinkage method 'shrunk':\n                        scikit-learn shrunk method 'gl': graphical lasso\n                        method 'jlogo': j-logo covariance 'fixed': takes\n                        average of eigenvalues above max Marchenko Pastour\n                        limit 'spectral': makes zero eigenvalues above max\n                        Marchenko Pastour limit 'shrink': Lopez de Prado's\n                        book shrinkage method (default: hist)\n  -de SMOOTHING_FACTOR_EWMA, --d-ewma SMOOTHING_FACTOR_EWMA\n                        Smoothing factor for ewma estimators (default: 0.94)\n  -v LONG_ALLOCATION, --value LONG_ALLOCATION\n                        Amount to allocate to portfolio in long positions\n                        (default: 1)\n  -vs SHORT_ALLOCATION, --value-short SHORT_ALLOCATION\n                        Amount to allocate to portfolio in short positions\n                        (default: 0.0)\n  --name NAME           Save portfolio with personalized or default name\n                        (default: MAXSHARPE_0)\n  -h, --help            show this help message (default: False)\n")),(0,o.kt)("p",null,"Example:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"2022 Apr 05, 13:52 (\ud83e\udd8b) /portfolio/po/ $ maxsharpe --pie\n\n [3 Years] Display a maximal return/risk ratio portfolio using\nvolatility as risk measure\n\n     Weights\n\u250f\u2501\u2501\u2501\u2501\u2501\u2501\u2533\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2513\n\u2503      \u2503 Value   \u2503\n\u2521\u2501\u2501\u2501\u2501\u2501\u2501\u2547\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2529\n\u2502 AAPL \u2502 51.47 % \u2502\n\u251c\u2500\u2500\u2500\u2500\u2500\u2500\u253c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2524\n\u2502 AMZN \u2502  0.0 %  \u2502\n\u251c\u2500\u2500\u2500\u2500\u2500\u2500\u253c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2524\n\u2502 BA   \u2502  0.0 %  \u2502\n\u251c\u2500\u2500\u2500\u2500\u2500\u2500\u253c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2524\n\u2502 FB   \u2502  0.0 %  \u2502\n\u251c\u2500\u2500\u2500\u2500\u2500\u2500\u253c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2524\n\u2502 MSFT \u2502  0.0 %  \u2502\n\u251c\u2500\u2500\u2500\u2500\u2500\u2500\u253c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2524\n\u2502 T    \u2502  0.0 %  \u2502\n\u251c\u2500\u2500\u2500\u2500\u2500\u2500\u253c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2524\n\u2502 TSLA \u2502 48.52 % \u2502\n\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n\nAnnual (by 252) expected return: 86.15%\nAnnual (by \u221a252) volatility: 44.22%\nSharpe ratio: 1.9441\n")))}m.isMDXComponent=!0}}]);