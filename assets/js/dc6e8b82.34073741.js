"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[86624],{3905:(e,t,a)=>{a.d(t,{Zo:()=>p,kt:()=>c});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var d=n.createContext({}),s=function(e){var t=n.useContext(d),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},p=function(e){var t=s(e.components);return n.createElement(d.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,l=e.originalType,d=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),u=s(a),c=r,g=u["".concat(d,".").concat(c)]||u[c]||m[c]||l;return a?n.createElement(g,i(i({ref:t},p),{},{components:a})):n.createElement(g,i({ref:t},p))}));function c(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=a.length,i=new Array(l);i[0]=u;var o={};for(var d in t)hasOwnProperty.call(t,d)&&(o[d]=t[d]);o.originalType=e,o.mdxType="string"==typeof e?e:r,i[1]=o;for(var s=2;s<l;s++)i[s]=a[s];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}u.displayName="MDXCreateElement"},21762:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>d,contentTitle:()=>i,default:()=>m,frontMatter:()=>l,metadata:()=>o,toc:()=>s});var n=a(87462),r=(a(67294),a(3905));const l={title:"herc",description:"OpenBB Terminal Function"},i="Portfolio Optimization",o={unversionedId:"features/portfolio/po/herc",id:"features/portfolio/po/herc",title:"herc",description:"OpenBB Terminal Function",source:"@site/content/terminal/features/portfolio/po/herc.md",sourceDirName:"features/portfolio/po",slug:"/features/portfolio/po/herc",permalink:"/terminal/features/portfolio/po/herc",draft:!1,tags:[],version:"current",frontMatter:{title:"herc",description:"OpenBB Terminal Function"},sidebar:"tutorialSidebar",previous:{title:"file",permalink:"/terminal/features/portfolio/po/file"},next:{title:"hrp",permalink:"/terminal/features/portfolio/po/hrp"}},d={},s=[{value:"herc",id:"herc",level:2},{value:"Description:",id:"description",level:3},{value:"Usage:",id:"usage",level:3},{value:"Parameters",id:"parameters",level:2},{value:"Examples",id:"examples",level:2}],p={toc:s};function m(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,n.Z)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"portfolio-optimization"},"Portfolio Optimization"),(0,r.kt)("h2",{id:"herc"},"herc"),(0,r.kt)("h3",{id:"description"},"Description:"),(0,r.kt)("p",null,"Builds a hierarchical equal risk contribution portfolio"),(0,r.kt)("h3",{id:"usage"},"Usage:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},"usage: herc [-cd {pearson,spearman,abs_pearson,abs_spearman,distance,mutual_info,tail}] [-cv {hist,ewma1,ewma2,ledoit,oas,shrunk,gl,jlogo,fixed,spectral,shrink}] [-rm {MV,MAD,GMD,MSV,VaR,CVaR,TG,EVaR,RG,CVRG,TGRG,WR,FLPM,SLPM,MDD,ADD,DaR,CDaR,EDaR,UCI,MDD_Rel,ADD_Rel,DaR_Rel,CDaR_Rel,EDaR_Rel,UCI_Rel}] [-as CVAR_SIMULATIONS_LOSSES]\n            [-b CVAR_SIGNIFICANCE] [-bs CVAR_SIMULATIONS_GAINS] [-lk {single,complete,average,weighted,centroid,median,ward,dbht}] [-k AMOUNT_CLUSTERS] [-mk MAX_CLUSTERS] [-bi AMOUNT_BINS] [-at ALPHA_TAIL] [-lo LEAF_ORDER] [-de SMOOTHING_FACTOR_EWMA] [-mt NAN_FILL_METHOD] [-ct CATEGORIES] [-p HISTORIC_PERIOD] [-s START_PERIOD] [-e END_PERIOD]\n            [-lr] [--freq {d,w,m}] [-mn MAX_NAN] [-th THRESHOLD_VALUE] [-r RISK_FREE] [-a SIGNIFICANCE_LEVEL] [-v LONG_ALLOCATION] [--name NAME]\n            {sa} ...\n")),(0,r.kt)("h2",{id:"parameters"},"Parameters"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Name"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"),(0,r.kt)("th",{parentName:"tr",align:null},"Default"),(0,r.kt)("th",{parentName:"tr",align:null},"Optional"),(0,r.kt)("th",{parentName:"tr",align:null},"Choices"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"co_dependence"),(0,r.kt)("td",{parentName:"tr",align:null},"The codependence or similarity matrix used to build the distance metric and clusters. Possible values are: 'pearson': pearson correlation matrix 'spearman': spearman correlation matrix 'abs_pearson': absolute value of pearson correlation matrix 'abs_spearman': absolute value of spearman correlation matrix 'distance': distance correlation matrix 'mutual_info': mutual information codependence matrix 'tail': tail index codependence matrix"),(0,r.kt)("td",{parentName:"tr",align:null},"pearson"),(0,r.kt)("td",{parentName:"tr",align:null},"False"),(0,r.kt)("td",{parentName:"tr",align:null},"pearson, spearman, abs_pearson, abs_spearman, distance, mutual_info, tail")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"covariance"),(0,r.kt)("td",{parentName:"tr",align:null},"Method used to estimate covariance matrix. Possible values are 'hist': historical method 'ewma1': exponential weighted moving average with adjust=True 'ewma2': exponential weighted moving average with adjust=False 'ledoit': Ledoit and Wolf shrinkage method 'oas': oracle shrinkage method 'shrunk': scikit-learn shrunk method 'gl': graphical lasso method 'jlogo': j-logo covariance 'fixed': takes average of eigenvalues above max Marchenko Pastour limit 'spectral': makes zero eigenvalues above max Marchenko Pastour limit 'shrink': Lopez de Prado's book shrinkage method"),(0,r.kt)("td",{parentName:"tr",align:null},"hist"),(0,r.kt)("td",{parentName:"tr",align:null},"False"),(0,r.kt)("td",{parentName:"tr",align:null},"hist, ewma1, ewma2, ledoit, oas, shrunk, gl, jlogo, fixed, spectral, shrink")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"risk_measure"),(0,r.kt)("td",{parentName:"tr",align:null},"Risk measure used to optimize the portfolio. Possible values are: 'MV' : Variance 'MAD' : Mean Absolute Deviation 'GMD' : Gini Mean Difference 'MSV' : Semi Variance (Variance of negative returns) 'FLPM' : First Lower Partial Moment 'SLPM' : Second Lower Partial Moment 'VaR' : Value at Risk 'CVaR' : Conditional Value at Risk 'TG' : Tail Gini 'EVaR' : Entropic Value at Risk 'WR' : Worst Realization 'RG' : Range 'CVRG' : CVaR Range 'TGRG' : Tail Gini Range 'ADD' : Average Drawdown of uncompounded returns 'UCI' : Ulcer Index of uncompounded returns 'DaR' : Drawdown at Risk of uncompounded returns 'CDaR' : Conditional Drawdown at Risk of uncompounded returns 'EDaR' : Entropic Drawdown at Risk of uncompounded returns 'MDD' : Maximum Drawdown of uncompounded returns 'ADD_Rel' : Average Drawdown of compounded returns 'UCI_Rel' : Ulcer Index of compounded returns 'DaR_Rel' : Drawdown at Risk of compounded returns 'CDaR_Rel' : Conditional Drawdown at Risk of compounded returns 'EDaR_Rel' : Entropic Drawdown at Risk of compounded returns 'MDD_Rel' : Maximum Drawdown of compounded returns"),(0,r.kt)("td",{parentName:"tr",align:null},"MV"),(0,r.kt)("td",{parentName:"tr",align:null},"False"),(0,r.kt)("td",{parentName:"tr",align:null},"MV, MAD, GMD, MSV, VaR, CVaR, TG, EVaR, RG, CVRG, TGRG, WR, FLPM, SLPM, MDD, ADD, DaR, CDaR, EDaR, UCI, MDD_Rel, ADD_Rel, DaR_Rel, CDaR_Rel, EDaR_Rel, UCI_Rel")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"cvar_simulations_losses"),(0,r.kt)("td",{parentName:"tr",align:null},"Number of CVaRs used to approximate Tail Gini of losses. The default is 100"),(0,r.kt)("td",{parentName:"tr",align:null},"100"),(0,r.kt)("td",{parentName:"tr",align:null},"False"),(0,r.kt)("td",{parentName:"tr",align:null},"None")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"cvar_significance"),(0,r.kt)("td",{parentName:"tr",align:null},"Significance level of CVaR and Tail Gini of gains. If empty it duplicates alpha"),(0,r.kt)("td",{parentName:"tr",align:null},"None"),(0,r.kt)("td",{parentName:"tr",align:null},"False"),(0,r.kt)("td",{parentName:"tr",align:null},"None")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"cvar_simulations_gains"),(0,r.kt)("td",{parentName:"tr",align:null},"Number of CVaRs used to approximate Tail Gini of gains. If empty it duplicates a_sim value"),(0,r.kt)("td",{parentName:"tr",align:null},"None"),(0,r.kt)("td",{parentName:"tr",align:null},"False"),(0,r.kt)("td",{parentName:"tr",align:null},"None")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"linkage"),(0,r.kt)("td",{parentName:"tr",align:null},"Linkage method of hierarchical clustering"),(0,r.kt)("td",{parentName:"tr",align:null},"single"),(0,r.kt)("td",{parentName:"tr",align:null},"False"),(0,r.kt)("td",{parentName:"tr",align:null},"single, complete, average, weighted, centroid, median, ward, dbht")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"amount_clusters"),(0,r.kt)("td",{parentName:"tr",align:null},"Number of clusters specified in advance"),(0,r.kt)("td",{parentName:"tr",align:null},"None"),(0,r.kt)("td",{parentName:"tr",align:null},"False"),(0,r.kt)("td",{parentName:"tr",align:null},"None")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"max_clusters"),(0,r.kt)("td",{parentName:"tr",align:null},"Max number of clusters used by the two difference gap statistic to find the optimal number of clusters. If k is empty this value is used"),(0,r.kt)("td",{parentName:"tr",align:null},"10"),(0,r.kt)("td",{parentName:"tr",align:null},"False"),(0,r.kt)("td",{parentName:"tr",align:null},"None")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"amount_bins"),(0,r.kt)("td",{parentName:"tr",align:null},"Number of bins used to calculate the variation of information"),(0,r.kt)("td",{parentName:"tr",align:null},"KN"),(0,r.kt)("td",{parentName:"tr",align:null},"False"),(0,r.kt)("td",{parentName:"tr",align:null},"None")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"alpha_tail"),(0,r.kt)("td",{parentName:"tr",align:null},"Significance level for lower tail dependence index, only used when when codependence value is 'tail'"),(0,r.kt)("td",{parentName:"tr",align:null},"0.05"),(0,r.kt)("td",{parentName:"tr",align:null},"False"),(0,r.kt)("td",{parentName:"tr",align:null},"None")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"leaf_order"),(0,r.kt)("td",{parentName:"tr",align:null},"Indicates if the cluster are ordered so that the distance between successive leaves is minimal"),(0,r.kt)("td",{parentName:"tr",align:null},"True"),(0,r.kt)("td",{parentName:"tr",align:null},"False"),(0,r.kt)("td",{parentName:"tr",align:null},"None")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"smoothing_factor_ewma"),(0,r.kt)("td",{parentName:"tr",align:null},"Smoothing factor for ewma estimators"),(0,r.kt)("td",{parentName:"tr",align:null},"0.94"),(0,r.kt)("td",{parentName:"tr",align:null},"False"),(0,r.kt)("td",{parentName:"tr",align:null},"None")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"==SUPPRESS=="),(0,r.kt)("td",{parentName:"tr",align:null},"sensitivity analysis"),(0,r.kt)("td",{parentName:"tr",align:null},"None"),(0,r.kt)("td",{parentName:"tr",align:null},"False"),(0,r.kt)("td",{parentName:"tr",align:null},"sa:  ArgumentParser(prog='herc sa', usage=None, description=None, formatter_class=<class 'argparse.HelpFormatter'>, conflict_handler='error', add_help=True)")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"nan_fill_method"),(0,r.kt)("td",{parentName:"tr",align:null},"Method used to fill nan values in time series, by default time. Possible values are: 'linear': linear interpolation 'time': linear interpolation based on time index 'nearest': use nearest value to replace nan values 'zero': spline of zeroth order 'slinear': spline of first order 'quadratic': spline of second order 'cubic': spline of third order 'barycentric': builds a polynomial that pass for all points"),(0,r.kt)("td",{parentName:"tr",align:null},"time"),(0,r.kt)("td",{parentName:"tr",align:null},"False"),(0,r.kt)("td",{parentName:"tr",align:null},"None")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"categories"),(0,r.kt)("td",{parentName:"tr",align:null},"Show selected categories"),(0,r.kt)("td",{parentName:"tr",align:null},"None"),(0,r.kt)("td",{parentName:"tr",align:null},"False"),(0,r.kt)("td",{parentName:"tr",align:null},"None")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"historic_period"),(0,r.kt)("td",{parentName:"tr",align:null},"Period to get yfinance data from. Possible frequency strings are: 'd': means days, for example '252d' means 252 days 'w': means weeks, for example '52w' means 52 weeks 'mo': means months, for example '12mo' means 12 months 'y': means years, for example '1y' means 1 year 'ytd': downloads data from beginning of year to today 'max': downloads all data available for each asset"),(0,r.kt)("td",{parentName:"tr",align:null},"3y"),(0,r.kt)("td",{parentName:"tr",align:null},"False"),(0,r.kt)("td",{parentName:"tr",align:null},"None")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"start_period"),(0,r.kt)("td",{parentName:"tr",align:null},"Start date to get yfinance data from. Must be in 'YYYY-MM-DD' format"),(0,r.kt)("td",{parentName:"tr",align:null},"None"),(0,r.kt)("td",{parentName:"tr",align:null},"False"),(0,r.kt)("td",{parentName:"tr",align:null},"None")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"end_period"),(0,r.kt)("td",{parentName:"tr",align:null},"End date to get yfinance data from. Must be in 'YYYY-MM-DD' format"),(0,r.kt)("td",{parentName:"tr",align:null},"None"),(0,r.kt)("td",{parentName:"tr",align:null},"False"),(0,r.kt)("td",{parentName:"tr",align:null},"None")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"log_returns"),(0,r.kt)("td",{parentName:"tr",align:null},"If use logarithmic or arithmetic returns to calculate returns"),(0,r.kt)("td",{parentName:"tr",align:null},"None"),(0,r.kt)("td",{parentName:"tr",align:null},"False"),(0,r.kt)("td",{parentName:"tr",align:null},"None")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"return_frequency"),(0,r.kt)("td",{parentName:"tr",align:null},"Frequency used to calculate returns. Possible values are: 'd': for daily returns 'w': for weekly returns 'm': for monthly returns"),(0,r.kt)("td",{parentName:"tr",align:null},"d"),(0,r.kt)("td",{parentName:"tr",align:null},"False"),(0,r.kt)("td",{parentName:"tr",align:null},"d, w, m")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"max_nan"),(0,r.kt)("td",{parentName:"tr",align:null},"Max percentage of nan values accepted per asset to be considered in the optimization process"),(0,r.kt)("td",{parentName:"tr",align:null},"0.05"),(0,r.kt)("td",{parentName:"tr",align:null},"False"),(0,r.kt)("td",{parentName:"tr",align:null},"None")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"threshold_value"),(0,r.kt)("td",{parentName:"tr",align:null},"Value used to replace outliers that are higher to threshold in absolute value"),(0,r.kt)("td",{parentName:"tr",align:null},"0.3"),(0,r.kt)("td",{parentName:"tr",align:null},"False"),(0,r.kt)("td",{parentName:"tr",align:null},"None")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"risk_free"),(0,r.kt)("td",{parentName:"tr",align:null},"Risk-free rate of borrowing/lending. The period of the risk-free rate must be annual"),(0,r.kt)("td",{parentName:"tr",align:null},"0.02924"),(0,r.kt)("td",{parentName:"tr",align:null},"False"),(0,r.kt)("td",{parentName:"tr",align:null},"None")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"significance_level"),(0,r.kt)("td",{parentName:"tr",align:null},"Significance level of CVaR, EVaR, CDaR and EDaR"),(0,r.kt)("td",{parentName:"tr",align:null},"0.05"),(0,r.kt)("td",{parentName:"tr",align:null},"False"),(0,r.kt)("td",{parentName:"tr",align:null},"None")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"long_allocation"),(0,r.kt)("td",{parentName:"tr",align:null},"Amount to allocate to portfolio"),(0,r.kt)("td",{parentName:"tr",align:null},"1"),(0,r.kt)("td",{parentName:"tr",align:null},"False"),(0,r.kt)("td",{parentName:"tr",align:null},"None")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"name"),(0,r.kt)("td",{parentName:"tr",align:null},"Save portfolio with personalized or default name"),(0,r.kt)("td",{parentName:"tr",align:null},"HERC_0"),(0,r.kt)("td",{parentName:"tr",align:null},"False"),(0,r.kt)("td",{parentName:"tr",align:null},"None")))),(0,r.kt)("h2",{id:"examples"},"Examples"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},"\n2022 Apr 05, 14:40 (\ud83e\udd8b) /portfolio/po/ $ herc\n\n [3 Years] Hierarchical equal risk contribution portfolio using pearson\ncodependence,single linkage and volatility as risk measure\n\n     Weights\n\u250f\u2501\u2501\u2501\u2501\u2501\u2501\u2533\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2513\n\u2503      \u2503 Value   \u2503\n\u2521\u2501\u2501\u2501\u2501\u2501\u2501\u2547\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2529\n\u2502 AAPL \u2502 10.78 % \u2502\n\u251c\u2500\u2500\u2500\u2500\u2500\u2500\u253c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2524\n\u2502 AMZN \u2502 12.64 % \u2502\n\u251c\u2500\u2500\u2500\u2500\u2500\u2500\u253c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2524\n\u2502 BA   \u2502  9.12 % \u2502\n\u251c\u2500\u2500\u2500\u2500\u2500\u2500\u253c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2524\n\u2502 FB   \u2502  8.08 % \u2502\n\u251c\u2500\u2500\u2500\u2500\u2500\u2500\u253c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2524\n\u2502 MSFT \u2502 12.86 % \u2502\n\u251c\u2500\u2500\u2500\u2500\u2500\u2500\u253c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2524\n\u2502 T    \u2502 43.83 % \u2502\n\u251c\u2500\u2500\u2500\u2500\u2500\u2500\u253c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2524\n\u2502 TSLA \u2502  2.66 % \u2502\n\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n\nAnnual (by 252) expected return: 18.09%\nAnnual (by \u221a252) volatility: 24.19%\nSharpe ratio: 0.7401\n\n")))}m.isMDXComponent=!0}}]);