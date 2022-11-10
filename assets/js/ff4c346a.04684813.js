"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[3257],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>m});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=a.createContext({}),p=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},u=function(e){var t=p(e.components);return a.createElement(l.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,l=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),d=p(n),m=r,h=d["".concat(l,".").concat(m)]||d[m]||c[m]||i;return n?a.createElement(h,s(s({ref:t},u),{},{components:n})):a.createElement(h,s({ref:t},u))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,s=new Array(i);s[0]=d;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o.mdxType="string"==typeof e?e:r,s[1]=o;for(var p=2;p<i;p++)s[p]=n[p];return a.createElement.apply(null,s)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},19611:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>c,frontMatter:()=>i,metadata:()=>o,toc:()=>p});var a=n(87462),r=(n(67294),n(3905));const i={title:"Introduction to the Due Diligence Menu",keywords:["dd","due","diligence","research","company","ticker","analyst","rating","rot","pt","est","sec","supplier","customer","arktrades","ratings","analysts","filings","form","forms","customers","suppliers"],date:"2022-06-01",type:"guides",status:"publish",excerpt:"This guide introduces the Due Diligence menu within the Stocks menu, explains the features briefly, then provides examples.",geekdocCollapseSection:!0},s=void 0,o={unversionedId:"features/stocks/dd/dd",id:"features/stocks/dd/dd",title:"Introduction to the Due Diligence Menu",description:"The Due Diligence submenu, located within the Stocks menu, is primarily for supplementing fundamental analysis with information such as:",source:"@site/terminal/features/stocks/dd/dd.md",sourceDirName:"features/stocks/dd",slug:"/features/stocks/dd/",permalink:"/docs/terminal/features/stocks/dd/",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/terminal/features/stocks/dd/dd.md",tags:[],version:"current",frontMatter:{title:"Introduction to the Due Diligence Menu",keywords:["dd","due","diligence","research","company","ticker","analyst","rating","rot","pt","est","sec","supplier","customer","arktrades","ratings","analysts","filings","form","forms","customers","suppliers"],date:"2022-06-01",type:"guides",status:"publish",excerpt:"This guide introduces the Due Diligence menu within the Stocks menu, explains the features briefly, then provides examples.",geekdocCollapseSection:!0},sidebar:"tutorialSidebar",previous:{title:"codes",permalink:"/docs/terminal/features/stocks/codes/"},next:{title:"analyst",permalink:"/docs/terminal/features/stocks/dd/analyst/"}},l={},p=[{value:'Always do your own Due Diligence! To run a demo in the OpenBB Terminal of the features discussed here, launch the routine from the Main Menu by entering: <code>exe routines/dd_demo.openbb</code> in the command line and hitting <code>enter</code>. Click <a href="https://openbb-finance.github.io/OpenBBTerminal/terminal/stocks/" target="_blank">here</a> to go back to <code>Stocks</code>.',id:"always-do-your-own-due-diligence-to-run-a-demo-in-the-openbb-terminal-of-the-features-discussed-here-launch-the-routine-from-the-main-menu-by-entering-exe-routinesdd_demoopenbb-in-the-command-line-and-hitting-enter-click-here-to-go-back-to-stocks",level:2},{value:"geekdocCollapseSection: true",id:"geekdoccollapsesection-true",level:2}],u={toc:p};function c(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"The Due Diligence submenu, located within the ",(0,r.kt)("a",{href:"https://openbb-finance.github.io/OpenBBTerminal/terminal/stocks/",target:"_blank"},(0,r.kt)("inlineCode",{parentName:"p"},"Stocks"))," menu, is primarily for supplementing fundamental analysis with information such as:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Analyst ratings and price targets over time"),(0,r.kt)("li",{parentName:"ul"},"Earnings estimates"),(0,r.kt)("li",{parentName:"ul"},"SEC filings"),(0,r.kt)("li",{parentName:"ul"},"Business-to-business customers and suppliers"),(0,r.kt)("li",{parentName:"ul"},"What kind of trades, if any, ARK is involved in with the loaded ticker.")),(0,r.kt)("p",null,"To use all features in this menu, two (free) API keys must be obtained. Refer to the ",(0,r.kt)("a",{href:"https://openbb-finance.github.io/OpenBBTerminal/terminal/#accessing-other-sources-of-data-via-api-keys",target:"_blank"},"Getting Started Guide")," for instructions on storing API keys in the Terminal."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"rating: FMP - ",(0,r.kt)("a",{href:"https://site.financialmodelingprep.com/developer/docs/",target:"_blank"},"Financial Modeling Prep")),(0,r.kt)("li",{parentName:"ul"},"rot: ",(0,r.kt)("a",{href:"https://finnhub.io/",target:"_blank"},"Finnhub"))),(0,r.kt)("p",null,"Entering the submenu requires having a ticker ",(0,r.kt)("a",{href:"https://openbb-finance.github.io/OpenBBTerminal/terminal/#explanation-of-commands",target:"_blank"},"loaded")," from the ",(0,r.kt)("inlineCode",{parentName:"p"},"Stocks")," menu. With a stock selected, type ",(0,r.kt)("inlineCode",{parentName:"p"},"dd")," into the command line and press ",(0,r.kt)("inlineCode",{parentName:"p"},"enter"),"."),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/85772166/176110875-e23b0016-00a9-4fa0-b7e1-020a344c40ce.png",alt:"The Due Diligence submenu"})),(0,r.kt)("h2",null,"How to use the Due Diligence Menu"),(0,r.kt)("p",null,"With the same company, as loaded above, ",(0,r.kt)("inlineCode",{parentName:"p"},"sec -l 20")," prints a table of the last twenty SEC filings from the company, and provides a link to a hosted document on ",(0,r.kt)("a",{href:"https://marketwatch.com",target:"_blank"},"MarketWatch"),"."),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/85772166/176111098-0a63a921-9695-422d-a495-0efdabafcd16.png",alt:"Printing the last twenty SEC filings of CF Industries"})),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"pt")," displays a chart of historical adjusted closing prices and price targets. ",(0,r.kt)("inlineCode",{parentName:"p"},"pt --raw")," prints a table, ",(0,r.kt)("inlineCode",{parentName:"p"},"pt --export xlsx")," exports a spreadsheet, while ",(0,r.kt)("inlineCode",{parentName:"p"},"pt -l [n]")," limits the number of price targets to return to ",(0,r.kt)("inlineCode",{parentName:"p"},"n"),"."),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/85772166/176111207-4fe741a8-df49-4cbb-8216-94edebde77b7.png",alt:"Historical price targets for CF Industries"})),(0,r.kt)("p",null,"A new ticker can be loaded directly from the Due Diligence submenu; for example, ",(0,r.kt)("inlineCode",{parentName:"p"},"load tsla")),(0,r.kt)("h2",null,"Examples"),(0,r.kt)("p",null,"With $TSLA loaded, ",(0,r.kt)("inlineCode",{parentName:"p"},"arktrades -l 20"),", shows the last twenty trades across all ARK funds."),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/85772166/176111315-c79eee3a-d9cf-492b-9f07-8f0f6d08430a.png",alt:"Last twenty Tesla trades across all ARK funds"})),(0,r.kt)("p",null,"Export the history of $HOOD trades for further analysis. ",(0,r.kt)("inlineCode",{parentName:"p"},"arktrades --export xlsx")),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/85772166/176111475-2ba12aca-c0ba-4eb4-9751-dbd09fdd384c.png",alt:"Robinhood trades across all ARK funds, exported"})),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"est")," displays futures earnings estimates."),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/85772166/176111584-3d51027e-7e3a-4579-8c40-14f59a40ce97.png",alt:"Hood quarterly earnings estimates"})),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/85772166/176111708-3c88d7ce-f4e1-4e23-8107-dcf4e22869dc.png",alt:"Hood annual earnings estimates"})),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"analyst")),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/85772166/176111824-1133da8e-18e4-4b12-baa4-7a5d4b77e784.png",alt:"Analyst coverage of Hood"})),(0,r.kt)("h2",{id:"always-do-your-own-due-diligence-to-run-a-demo-in-the-openbb-terminal-of-the-features-discussed-here-launch-the-routine-from-the-main-menu-by-entering-exe-routinesdd_demoopenbb-in-the-command-line-and-hitting-enter-click-here-to-go-back-to-stocks"},"Always do your own Due Diligence! To run a demo in the OpenBB Terminal of the features discussed here, launch the routine from the Main Menu by entering: ",(0,r.kt)("inlineCode",{parentName:"h2"},"exe routines/dd_demo.openbb")," in the command line and hitting ",(0,r.kt)("inlineCode",{parentName:"h2"},"enter"),". Click ",(0,r.kt)("a",{href:"https://openbb-finance.github.io/OpenBBTerminal/terminal/stocks/",target:"_blank"},"here")," to go back to ",(0,r.kt)("inlineCode",{parentName:"h2"},"Stocks"),"."),(0,r.kt)("p",null,"title: Introduction to the Due Diligence Menu\nkeywords: ","['dd', 'due', 'diligence', 'research', 'company', 'ticker', 'analyst', 'rating', 'rot', 'pt', 'est', 'sec', 'supplier', 'customer', 'arktrades', 'ratings', 'analysts', 'filings', 'form', 'forms', 'customers', 'suppliers']",'\ndate: "2022-06-01"\ntype: guides\nstatus: publish\nexcerpt: "This guide introduces the Due Diligence menu within the Stocks menu, explains the features briefly, then provides examples."'),(0,r.kt)("h2",{id:"geekdoccollapsesection-true"},"geekdocCollapseSection: true"),(0,r.kt)("p",null,"The Due Diligence submenu, located within the ",(0,r.kt)("a",{href:"https://openbb-finance.github.io/OpenBBTerminal/terminal/stocks/",target:"_blank"},(0,r.kt)("inlineCode",{parentName:"p"},"Stocks"))," menu, is primarily for supplementing fundamental analysis with information such as:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Analyst ratings and price targets over time"),(0,r.kt)("li",{parentName:"ul"},"Earnings estimates"),(0,r.kt)("li",{parentName:"ul"},"SEC filings"),(0,r.kt)("li",{parentName:"ul"},"Business-to-business customers and suppliers"),(0,r.kt)("li",{parentName:"ul"},"What kind of trades, if any, ARK is involved in with the loaded ticker.")),(0,r.kt)("p",null,"To use all features in this menu, two (free) API keys must be obtained. Refer to the ",(0,r.kt)("a",{href:"https://openbb-finance.github.io/OpenBBTerminal/terminal/#accessing-other-sources-of-data-via-api-keys",target:"_blank"},"Getting Started Guide")," for instructions on storing API keys in the Terminal."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"rating: FMP - ",(0,r.kt)("a",{href:"https://site.financialmodelingprep.com/developer/docs/",target:"_blank"},"Financial Modeling Prep")),(0,r.kt)("li",{parentName:"ul"},"rot: ",(0,r.kt)("a",{href:"https://finnhub.io/",target:"_blank"},"Finnhub"))),(0,r.kt)("p",null,"Entering the submenu requires having a ticker ",(0,r.kt)("a",{href:"https://openbb-finance.github.io/OpenBBTerminal/terminal/#explanation-of-commands",target:"_blank"},"loaded")," from the ",(0,r.kt)("inlineCode",{parentName:"p"},"Stocks")," menu. With a stock selected, type ",(0,r.kt)("inlineCode",{parentName:"p"},"dd")," into the command line and press ",(0,r.kt)("inlineCode",{parentName:"p"},"enter"),"."),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/85772166/176110875-e23b0016-00a9-4fa0-b7e1-020a344c40ce.png",alt:"The Due Diligence submenu"})),(0,r.kt)("h2",null,"How to use the Due Diligence Menu"),(0,r.kt)("p",null,"With the same company, as loaded above, ",(0,r.kt)("inlineCode",{parentName:"p"},"sec -l 20")," prints a table of the last twenty SEC filings from the company, and provides a link to a hosted document on ",(0,r.kt)("a",{href:"https://marketwatch.com",target:"_blank"},"MarketWatch"),"."),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/85772166/176111098-0a63a921-9695-422d-a495-0efdabafcd16.png",alt:"Printing the last twenty SEC filings of CF Industries"})),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"pt")," displays a chart of historical adjusted closing prices and price targets. ",(0,r.kt)("inlineCode",{parentName:"p"},"pt --raw")," prints a table, ",(0,r.kt)("inlineCode",{parentName:"p"},"pt --export xlsx")," exports a spreadsheet, while ",(0,r.kt)("inlineCode",{parentName:"p"},"pt -l [n]")," limits the number of price targets to return to ",(0,r.kt)("inlineCode",{parentName:"p"},"n"),"."),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/85772166/176111207-4fe741a8-df49-4cbb-8216-94edebde77b7.png",alt:"Historical price targets for CF Industries"})),(0,r.kt)("p",null,"A new ticker can be loaded directly from the Due Diligence submenu; for example, ",(0,r.kt)("inlineCode",{parentName:"p"},"load tsla")),(0,r.kt)("h2",null,"Examples"),(0,r.kt)("p",null,"With $TSLA loaded, ",(0,r.kt)("inlineCode",{parentName:"p"},"arktrades -l 20"),", shows the last twenty trades across all ARK funds."),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/85772166/176111315-c79eee3a-d9cf-492b-9f07-8f0f6d08430a.png",alt:"Last twenty Tesla trades across all ARK funds"})),(0,r.kt)("p",null,"Export the history of $HOOD trades for further analysis. ",(0,r.kt)("inlineCode",{parentName:"p"},"arktrades --export xlsx")),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/85772166/176111475-2ba12aca-c0ba-4eb4-9751-dbd09fdd384c.png",alt:"Robinhood trades across all ARK funds, exported"})),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"est")," displays futures earnings estimates."),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/85772166/176111584-3d51027e-7e3a-4579-8c40-14f59a40ce97.png",alt:"Hood quarterly earnings estimates"})),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/85772166/176111708-3c88d7ce-f4e1-4e23-8107-dcf4e22869dc.png",alt:"Hood annual earnings estimates"})),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"analyst")),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/85772166/176111824-1133da8e-18e4-4b12-baa4-7a5d4b77e784.png",alt:"Analyst coverage of Hood"})),(0,r.kt)("p",null,"Always do your own Due Diligence! To run a demo in the OpenBB Terminal of the features discussed here, launch the routine from the Main Menu by entering: ",(0,r.kt)("inlineCode",{parentName:"p"},"exe routines/dd_demo.openbb")," in the command line and hitting ",(0,r.kt)("inlineCode",{parentName:"p"},"enter"),". Click ",(0,r.kt)("a",{href:"https://openbb-finance.github.io/OpenBBTerminal/terminal/stocks/",target:"_blank"},"here")," to go back to ",(0,r.kt)("inlineCode",{parentName:"p"},"Stocks"),"."))}c.isMDXComponent=!0}}]);