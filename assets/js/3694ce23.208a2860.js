"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[96035],{3905:(e,a,t)=>{t.d(a,{Zo:()=>u,kt:()=>m});var n=t(67294);function r(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}function o(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);a&&(n=n.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,n)}return t}function i(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?o(Object(t),!0).forEach((function(a){r(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}function l(e,a){if(null==e)return{};var t,n,r=function(e,a){if(null==e)return{};var t,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)t=o[n],a.indexOf(t)>=0||(r[t]=e[t]);return r}(e,a);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)t=o[n],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var c=n.createContext({}),p=function(e){var a=n.useContext(c),t=a;return e&&(t="function"==typeof e?e(a):i(i({},a),e)),t},u=function(e){var a=p(e.components);return n.createElement(c.Provider,{value:a},e.children)},s={inlineCode:"code",wrapper:function(e){var a=e.children;return n.createElement(n.Fragment,{},a)}},d=n.forwardRef((function(e,a){var t=e.components,r=e.mdxType,o=e.originalType,c=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),d=p(t),m=r,f=d["".concat(c,".").concat(m)]||d[m]||s[m]||o;return t?n.createElement(f,i(i({ref:a},u),{},{components:t})):n.createElement(f,i({ref:a},u))}));function m(e,a){var t=arguments,r=a&&a.mdxType;if("string"==typeof e||r){var o=t.length,i=new Array(o);i[0]=d;var l={};for(var c in a)hasOwnProperty.call(a,c)&&(l[c]=a[c]);l.originalType=e,l.mdxType="string"==typeof e?e:r,i[1]=l;for(var p=2;p<o;p++)i[p]=t[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,t)}d.displayName="MDXCreateElement"},2098:(e,a,t)=>{t.r(a),t.d(a,{assets:()=>c,contentTitle:()=>i,default:()=>s,frontMatter:()=>o,metadata:()=>l,toc:()=>p});var n=t(87462),r=(t(67294),t(3905));const o={title:"funot",description:"OpenBB Terminal Function"},i="funot",l={unversionedId:"features/cryptocurrency/due diligence/funot",id:"features/cryptocurrency/due diligence/funot",title:"funot",description:"OpenBB Terminal Function",source:"@site/content/terminal/features/cryptocurrency/due diligence/funot.md",sourceDirName:"features/cryptocurrency/due diligence",slug:"/features/cryptocurrency/due diligence/funot",permalink:"/terminal/features/cryptocurrency/due diligence/funot",draft:!1,tags:[],version:"current",frontMatter:{title:"funot",description:"OpenBB Terminal Function"},sidebar:"tutorialSidebar",previous:{title:"fundrate",permalink:"/terminal/features/cryptocurrency/due diligence/fundrate"},next:{title:"gh",permalink:"/terminal/features/cryptocurrency/due diligence/gh"}},c={},p=[{value:"Usage",id:"usage",level:3},{value:"Parameters",id:"parameters",level:2},{value:"Examples",id:"examples",level:2}],u={toc:p};function s(e){let{components:a,...t}=e;return(0,r.kt)("wrapper",(0,n.Z)({},u,t,{components:a,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"funot"},"funot"),(0,r.kt)("p",null,"Display fundamental metric over time ","[Source: Token Terminal]"),(0,r.kt)("h3",{id:"usage"},"Usage"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},"usage: funot [-m {twitter_followers,gmv_annualized,market_cap,take_rate,revenue,revenue_protocol,tvl,pe,pe_circulating,ps,ps_circulating}] -p\n             {0x,1inch,88mph,aave,abracadabra-money,alchemist,alchemix-finance,algorand,alpha-finance,arweave,autofarm,avalanche,axie-infinity,balancer,bancor,barnbridge,basket-dao,benqi,binance-smart-chain,bitcoin,cap,cardano,centrifuge,clipper,compound,convex-finance,cosmos,cryptex,curve,decentral-games,decred,dforce,dhedge,dodo,dogecoin,dydx,ellipsis-finance,elrond,enzyme-finance,erasure-protocol,ethereum,ethereum-name-service,euler,fantom,fei-protocol,filecoin,futureswap,gmx,goldfinch,harvest-finance,helium,hurricaneswap,idle-finance,index-cooperative,instadapp,integral-protocol,karura,keeperdao,keep-network,kusama,kyber,lido-finance,liquity,litecoin,livepeer,looksrare,loopring,maiar,makerdao,maple-finance,mcdex,metamask,mstable,near-protocol,nexus-mutual,nftx,notional-finance,opensea,optimism,osmosis,pancakeswap,pangolin,perpetual-protocol,piedao,pocket-network,polkadot,polygon,polymarket,pooltogether,powerpool,quickswap,rarible,rari-capital,reflexer,ren,ribbon-finance,rocket-pool,saddle-finance,set-protocol,solana,solend,spookyswap,stake-dao,stellar,sushiswap,synthetix,terra,tezos,the-graph,thorchain,tokemak,tokenlon,tornado-cash,trader-joe,uma,uniswap,unit-protocol,venus,vesper-finance,volmex,wakaswap,yearn-finance,yield-guild-games,yield-yak,zcash,zora}\n")),(0,r.kt)("h2",{id:"parameters"},"Parameters"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Name"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"),(0,r.kt)("th",{parentName:"tr",align:null},"Default"),(0,r.kt)("th",{parentName:"tr",align:null},"Optional"),(0,r.kt)("th",{parentName:"tr",align:null},"Choices"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"metric"),(0,r.kt)("td",{parentName:"tr",align:null},"Choose metric of interest"),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"True"),(0,r.kt)("td",{parentName:"tr",align:null},"twitter_followers, gmv_annualized, market_cap, take_rate, revenue, revenue_protocol, tvl, pe, pe_circulating, ps, ps_circulating")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"project"),(0,r.kt)("td",{parentName:"tr",align:null},"Choose project of interest"),(0,r.kt)("td",{parentName:"tr",align:null},"None"),(0,r.kt)("td",{parentName:"tr",align:null},"False"),(0,r.kt)("td",{parentName:"tr",align:null},"0x, 1inch, 88mph, aave, abracadabra-money, alchemist, alchemix-finance, algorand, alpha-finance, arweave, autofarm, avalanche, axie-infinity, balancer, bancor, barnbridge, basket-dao, benqi, binance-smart-chain, bitcoin, cap, cardano, centrifuge, clipper, compound, convex-finance, cosmos, cryptex, curve, decentral-games, decred, dforce, dhedge, dodo, dogecoin, dydx, ellipsis-finance, elrond, enzyme-finance, erasure-protocol, ethereum, ethereum-name-service, euler, fantom, fei-protocol, filecoin, futureswap, gmx, goldfinch, harvest-finance, helium, hurricaneswap, idle-finance, index-cooperative, instadapp, integral-protocol, karura, keeperdao, keep-network, kusama, kyber, lido-finance, liquity, litecoin, livepeer, looksrare, loopring, maiar, makerdao, maple-finance, mcdex, metamask, mstable, near-protocol, nexus-mutual, nftx, notional-finance, opensea, optimism, osmosis, pancakeswap, pangolin, perpetual-protocol, piedao, pocket-network, polkadot, polygon, polymarket, pooltogether, powerpool, quickswap, rarible, rari-capital, reflexer, ren, ribbon-finance, rocket-pool, saddle-finance, set-protocol, solana, solend, spookyswap, stake-dao, stellar, sushiswap, synthetix, terra, tezos, the-graph, thorchain, tokemak, tokenlon, tornado-cash, trader-joe, uma, uniswap, unit-protocol, venus, vesper-finance, volmex, wakaswap, yearn-finance, yield-guild-games, yield-yak, zcash, zora")))),(0,r.kt)("h2",{id:"examples"},"Examples"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},"2022 Aug 28, 19:08 (\ud83e\udd8b) /crypto/dd/ $ funot -m revenue -p solana\n")))}s.isMDXComponent=!0}}]);