"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[49893],{3905:(e,t,n)=>{n.d(t,{Zo:()=>m,kt:()=>d});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var i=r.createContext({}),s=function(e){var t=r.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},m=function(e){var t=s(e.components);return r.createElement(i.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},c=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,i=e.parentName,m=p(e,["components","mdxType","originalType","parentName"]),c=s(n),d=o,f=c["".concat(i,".").concat(d)]||c[d]||u[d]||a;return n?r.createElement(f,l(l({ref:t},m),{},{components:n})):r.createElement(f,l({ref:t},m))}));function d(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,l=new Array(a);l[0]=c;var p={};for(var i in t)hasOwnProperty.call(t,i)&&(p[i]=t[i]);p.originalType=e,p.mdxType="string"==typeof e?e:o,l[1]=p;for(var s=2;s<a;s++)l[s]=n[s];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}c.displayName="MDXCreateElement"},5517:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>i,contentTitle:()=>l,default:()=>u,frontMatter:()=>a,metadata:()=>p,toc:()=>s});var r=n(87462),o=(n(67294),n(3905));const a={title:"show",description:"OpenBB SDK Function"},l="show",p={unversionedId:"reference/portfolio/po/show",id:"reference/portfolio/po/show",title:"show",description:"OpenBB SDK Function",source:"@site/content/sdk/reference/portfolio/po/show.md",sourceDirName:"reference/portfolio/po",slug:"/reference/portfolio/po/show",permalink:"/sdk/reference/portfolio/po/show",draft:!1,tags:[],version:"current",frontMatter:{title:"show",description:"OpenBB SDK Function"},sidebar:"tutorialSidebar",previous:{title:"riskparity",permalink:"/sdk/reference/portfolio/po/riskparity"},next:{title:"rbeta",permalink:"/sdk/reference/portfolio/rbeta"}},i={},s=[{value:"Parameters",id:"parameters",level:2},{value:"Returns",id:"returns",level:2},{value:"Examples",id:"examples",level:2},{value:"Examples",id:"examples-1",level:2},{value:"Examples",id:"examples-2",level:2},{value:"Examples",id:"examples-3",level:2}],m={toc:s};function u(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,r.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"show"},"show"),(0,o.kt)("p",null,"Show portfolio optimization results"),(0,o.kt)("p",null,"Source Code: [",(0,o.kt)("a",{parentName:"p",href:"https://github.com/OpenBB-finance/OpenBBTerminal/tree/main/openbb_terminal/portfolio/portfolio_optimization/po_model.py#L2361"},"link"),"]"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},"openbb.portfolio.po.show(portfolio_engine: portfolio_optimization.po_engine.PoEngine, category: str = None)\n")),(0,o.kt)("hr",null),(0,o.kt)("h2",{id:"parameters"},"Parameters"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"Name"),(0,o.kt)("th",{parentName:"tr",align:null},"Type"),(0,o.kt)("th",{parentName:"tr",align:null},"Description"),(0,o.kt)("th",{parentName:"tr",align:null},"Default"),(0,o.kt)("th",{parentName:"tr",align:null},"Optional"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"portfolio_engine"),(0,o.kt)("td",{parentName:"tr",align:null},"PoEngine"),(0,o.kt)("td",{parentName:"tr",align:null},"Portfolio optimization engine",(0,o.kt)("br",null),"Use ",(0,o.kt)("inlineCode",{parentName:"td"},"portfolio.po.load")," to load a portfolio engine"),(0,o.kt)("td",{parentName:"tr",align:null},"None"),(0,o.kt)("td",{parentName:"tr",align:null},"False")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"category"),(0,o.kt)("td",{parentName:"tr",align:null},"str"),(0,o.kt)("td",{parentName:"tr",align:null},"Category to show, by default None",(0,o.kt)("br",null),"After loading a portfolio with ",(0,o.kt)("inlineCode",{parentName:"td"},"portfolio.po.load")," you can use",(0,o.kt)("br",null),"the object method ",(0,o.kt)("inlineCode",{parentName:"td"},"get_available_categories()")," to get a list of available categories.",(0,o.kt)("br",null),"You can also use the object method ",(0,o.kt)("inlineCode",{parentName:"td"},"set_categories_dict()")," to set a custom dictionary",(0,o.kt)("br",null),'of categories. The dictionary must contain "CURRENT_INVESTED_AMOUNT" and "CURRENT_WEIGHTS"',(0,o.kt)("br",null),"as keys as shown in the example below."),(0,o.kt)("td",{parentName:"tr",align:null},"None"),(0,o.kt)("td",{parentName:"tr",align:null},"True")))),(0,o.kt)("hr",null),(0,o.kt)("h2",{id:"returns"},"Returns"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"Type"),(0,o.kt)("th",{parentName:"tr",align:null},"Description"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"Union[pd.DataFrame, Tuple","[pd.DataFrame, pd.DataFrame]","]"),(0,o.kt)("td",{parentName:"tr",align:null},"Portfolio weights and categories")))),(0,o.kt)("hr",null),(0,o.kt)("h2",{id:"examples"},"Examples"),(0,o.kt)("h2",{id:"examples-1"},"Examples"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'    "SECTOR": {\n        "AAPL": "INFORMATION TECHNOLOGY",\n        "MSFT": "INFORMATION TECHNOLOGY",\n        "AMZN": "CONSUMER DISCRETIONARY",\n    },\n    "CURRENT_INVESTED_AMOUNT": {\n        "AAPL": "100000.0",\n        "MSFT": "200000.0",\n        "AMZN": "300000.0",\n    },\n    "CURRENCY": {\n        "AAPL": "USD",\n        "MSFT": "USD",\n        "AMZN": "USD",\n    },\n}\n')),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},'from openbb_terminal.sdk import openbb\np = openbb.portfolio.po.load(symbols=["AAPL", "MSFT", "AMZN"])\nd = {\n')),(0,o.kt)("h2",{id:"examples-2"},"Examples"),(0,o.kt)("p",null,"['SECTOR']"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},"p.set_categories_dict(categories=d)\nweights, performance = openbb.portfolio.po.equal(portfolio_engine=p)\np.get_available_categories()\n")),(0,o.kt)("h2",{id:"examples-3"},"Examples"),(0,o.kt)("p",null,"['ASSET_CLASS',\n'SECTOR',\n'INDUSTRY',\n'COUNTRY',\n'CURRENT_INVESTED_AMOUNT',\n'CURRENCY']"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},'from openbb_terminal.sdk import openbb\np = openbb.portfolio.po.load(symbols_file_path="~/openbb_terminal/miscellaneous/portfolio_examples/allocation/60_40_Portfolio.xlsx")\nweights, performance = openbb.portfolio.po.equal(portfolio_engine=p)\np.get_available_categories()\n')),(0,o.kt)("hr",null))}u.isMDXComponent=!0}}]);