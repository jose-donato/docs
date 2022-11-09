(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[653],{3665:function(e,t,s){(window.__NEXT_P=window.__NEXT_P||[]).push(["/terminal/docs/getting-started/add-to-project",function(){return s(9712)}])},1031:function(e,t,s){"use strict";s.d(t,{O:function(){return o.OK},m:function(){return c}});var n=s(6042),r=s(9396),a=s(9534),i=s(5893),o=s(1005),l=s(8100),c=function(e){var t=e.storageKey,s=void 0===t?"tab-index":t,c=e.items,d=e.children,h=void 0===d?null:d,p=(0,a.Z)(e,["storageKey","items","children"]),x=(0,l.ZP)(s,(function(e){try{return JSON.parse(localStorage.getItem(e))}catch(t){return null}})),u=x.data,j=x.mutate,k=c.indexOf(u);return(0,i.jsx)(o.mQ,(0,r.Z)((0,n.Z)({onChange:function(e){localStorage.setItem(s,JSON.stringify(c[e])),j(c[e],!1)},selectedIndex:-1===k?void 0:k,items:c},p),{children:h}))}},9712:function(e,t,s){"use strict";s.r(t),s.d(t,{default:function(){return h.ZP}});var n,r=s(6042),a=s(9396),i=s(5893),o=s(6871),l=s(6033),c=(s(8658),s(1151)),d=(s(1608),s(1031)),h=s(1005),p={filePath:"pages/terminal/docs/getting-started/add-to-project.mdx",route:"/terminal/docs/getting-started/add-to-project",frontMatter:{},pageMap:[{kind:"Meta",data:{"*":{type:"page"},index:{display:"hidden",theme:{layout:"raw",sidebar:!1,toc:!0}},terminal:"OpenBB Terminal",sdk:"OpenBB SDK",blog:{title:"Blog",href:"https://openbb.co/blog",newWindow:!0},showcase:{title:"Showcase",href:"https://openbb.co/products/sdk",newWindow:!0},confirm:{title:"Confirm",display:"hidden"},terms:{title:"Terms of Service",display:"hidden"},privacy:{title:"Privacy Policy",display:"hidden"}}},{kind:"MdxPage",name:"blog",route:"/blog",frontMatter:{description:"The latest updates and releases from the Turbo team at Vercel.",type:"posts"}},{kind:"MdxPage",name:"confirm",route:"/confirm",frontMatter:{headeronly:!0,searchable:!1}},{kind:"MdxPage",name:"index",route:"/",frontMatter:{description:"Turbo is an incremental bundler and build system optimized for JavaScript and TypeScript, written in Rust."}},{kind:"MdxPage",name:"privacy",route:"/privacy",frontMatter:{description:"See our privacy policy and how it relates to you.",hidden:!0,headeronly:!0,container:!0,searchable:!1}},{kind:"Folder",name:"sdk",route:"/sdk",children:[{kind:"Meta",data:{index:{type:"page",display:"hidden",theme:{layout:"raw",sidebar:!1,toc:!0}},docs:{title:"Docs",display:"children"}}},{kind:"Folder",name:"docs",route:"/sdk/docs",children:[{kind:"Meta",data:{index:"Quickstart","getting-started":"Getting Started","why-turbopack":"Why OpenBB SDK?","core-concepts":"Core Concepts",roadmap:"Roadmap",features:"Features",comparisons:"Comparisons"}},{kind:"Folder",name:"comparisons",route:"/sdk/docs/comparisons",children:[{kind:"Meta",data:{"turbopack-vs-vite":"OpenBB SDK vs yfinance","turbopack-vs-webpack":"OpenBB SDK vs vnpy"}},{kind:"MdxPage",name:"turbopack-vs-vite",route:"/sdk/docs/comparisons/turbopack-vs-vite",frontMatter:{title:"Turbopack vs. Vite",description:"Compare Turbopack vs. Vite"}},{kind:"MdxPage",name:"turbopack-vs-webpack",route:"/sdk/docs/comparisons/turbopack-vs-webpack",frontMatter:{title:"Turbopack vs. Webpack",description:"Compare Turbopack vs. Webpack"}}]},{kind:"MdxPage",name:"core-concepts",route:"/sdk/docs/core-concepts",frontMatter:{title:"Core Concepts",description:"Learn about the innovative architecture that powers Turbopack's speed improvements."}},{kind:"Folder",name:"features",route:"/sdk/docs/features",children:[{kind:"Meta",data:{stocks:"Stocks"}},{kind:"MdxPage",name:"stocks",route:"/sdk/docs/features/stocks"}]},{kind:"MdxPage",name:"features",route:"/sdk/docs/features",frontMatter:{title:"Features",description:"Learn about Turbopack's supported features"}},{kind:"Folder",name:"getting-started",route:"/sdk/docs/getting-started",children:[{kind:"Meta",data:{"add-to-project":"Installation","create-new":"Import","existing-monorepo":"First commands"}},{kind:"MdxPage",name:"add-to-project",route:"/sdk/docs/getting-started/add-to-project"},{kind:"MdxPage",name:"create-new",route:"/sdk/docs/getting-started/create-new",frontMatter:{title:"Getting Started with Turborepo",description:"Create your first monorepo or add Turborepo to an existing project."}},{kind:"MdxPage",name:"existing-monorepo",route:"/sdk/docs/getting-started/existing-monorepo",frontMatter:{title:"Getting Started with Turborepo",description:"Create your first monorepo or add Turborepo to an existing project."}}]},{kind:"MdxPage",name:"index",route:"/sdk/docs",frontMatter:{title:"Turbopack Quickstart",description:"Start Building Web Applications with Turbopack"}},{kind:"MdxPage",name:"roadmap",route:"/sdk/docs/roadmap"},{kind:"MdxPage",name:"why-turbopack",route:"/sdk/docs/why-turbopack",frontMatter:{title:"Why OpenBB SDK?",description:"Learn why we think Turbopack is the future of bundling for the web."}}]},{kind:"MdxPage",name:"index",route:"/sdk",frontMatter:{overrideTitle:"Turbopack - The successor to Webpack",description:"Turbopack is an incremental bundler optimized for JavaScript and TypeScript, written in Rust."}}]},{kind:"MdxPage",name:"showcase",route:"/showcase",frontMatter:{headeronly:!0,searchable:!1,description:"Turborepo by Vercel is the one of the fastest growing build systems in the frontend ecosystem. It's trusted by thousands of developers in production including teams at Vercel, AWS, Netflix, Microsoft, Disney, and more."}},{kind:"Folder",name:"terminal",route:"/terminal",children:[{kind:"Meta",data:{index:{type:"page",display:"hidden",theme:{layout:"raw",sidebar:!1,toc:!0}},docs:{title:"Docs",display:"children"}}},{kind:"Folder",name:"docs",route:"/terminal/docs",children:[{kind:"Meta",data:{index:"Quickstart","getting-started":"Getting Started","why-turbopack":"Why OpenBB Terminal?","core-concepts":"Core Concepts",roadmap:"Roadmap",features:"Features",comparisons:"Comparisons"}},{kind:"Folder",name:"comparisons",route:"/terminal/docs/comparisons",children:[{kind:"Meta",data:{"turbopack-vs-vite":"OpenBB Terminal vs Bloomberg Terminal","turbopack-vs-webpack":"OpenBB Terminal vs Yahoo Finance","turbopack-vs-webpack2":"OpenBB Terminal vs Refinitiv"}},{kind:"MdxPage",name:"turbopack-vs-vite",route:"/terminal/docs/comparisons/turbopack-vs-vite",frontMatter:{title:"Turbopack vs. Vite",description:"Compare Turbopack vs. Vite"}},{kind:"MdxPage",name:"turbopack-vs-webpack",route:"/terminal/docs/comparisons/turbopack-vs-webpack",frontMatter:{title:"Turbopack vs. Webpack",description:"Compare Turbopack vs. Webpack"}}]},{kind:"MdxPage",name:"core-concepts",route:"/terminal/docs/core-concepts",frontMatter:{title:"Core Concepts",description:"Learn about the innovative architecture that powers Turbopack's speed improvements."}},{kind:"Folder",name:"features",route:"/terminal/docs/features",children:[{kind:"Meta",data:{stocks:"Stocks"}},{kind:"MdxPage",name:"stocks",route:"/terminal/docs/features/stocks"}]},{kind:"MdxPage",name:"features",route:"/terminal/docs/features",frontMatter:{title:"Features",description:"Learn about Turbopack's supported features"}},{kind:"Folder",name:"getting-started",route:"/terminal/docs/getting-started",children:[{kind:"Meta",data:{"add-to-project":"Installation","create-new":"Import","existing-monorepo":"First commands"}},{kind:"MdxPage",name:"add-to-project",route:"/terminal/docs/getting-started/add-to-project"},{kind:"MdxPage",name:"create-new",route:"/terminal/docs/getting-started/create-new",frontMatter:{title:"Getting Started with Turborepo",description:"Create your first monorepo or add Turborepo to an existing project."}},{kind:"MdxPage",name:"existing-monorepo",route:"/terminal/docs/getting-started/existing-monorepo",frontMatter:{title:"Getting Started with Turborepo",description:"Create your first monorepo or add Turborepo to an existing project."}}]},{kind:"MdxPage",name:"index",route:"/terminal/docs",frontMatter:{title:"Turbopack Quickstart",description:"Start Building Web Applications with Turbopack"}},{kind:"MdxPage",name:"roadmap",route:"/terminal/docs/roadmap"},{kind:"MdxPage",name:"why-turbopack",route:"/terminal/docs/why-turbopack",frontMatter:{title:"Why OpenBB SDK?",description:"Learn why we think Turbopack is the future of bundling for the web."}}]},{kind:"MdxPage",name:"index",route:"/terminal",frontMatter:{description:"Turborepo is a high-performance build system for JavaScript and TypeScript codebases."}}]},{kind:"MdxPage",name:"terms",route:"/terms",frontMatter:{description:"See our terms of our service and how they relate to you.",hidden:!0,headeronly:!0,container:!0,searchable:!1}}],headings:[{type:"heading",depth:1,children:[{type:"text",value:"Install OpenBB SDK",position:{start:{line:3,column:3,offset:59},end:{line:3,column:21,offset:77}}}],position:{start:{line:3,column:1,offset:57},end:{line:3,column:21,offset:77}},value:"Install OpenBB SDK"},{type:"heading",depth:2,children:[{type:"text",value:"Quickstart",position:{start:{line:11,column:4,offset:453},end:{line:11,column:14,offset:463}}}],position:{start:{line:11,column:1,offset:450},end:{line:11,column:14,offset:463}},value:"Quickstart"}],unstable_flexsearch:!0};globalThis.__nextra_internal__={pageMap:p.pageMap,route:p.route};var x="Install OpenBB SDK";function u(e){var t=Object.assign({h1:"h1",p:"p",strong:"strong",code:"code",a:"a",h2:"h2",ol:"ol",li:"li",div:"div",pre:"pre",span:"span"},(0,c.ah)(),e.components);return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(t.h1,{children:"Install OpenBB SDK"}),"\n",(0,i.jsxs)(t.p,{children:["Turborepo can be used in ",(0,i.jsx)(t.strong,{children:"any project"})," to speed up the execution of scripts in your ",(0,i.jsx)(t.code,{children:"package.json"}),"."]}),"\n",(0,i.jsxs)(t.p,{children:["After you install ",(0,i.jsx)(t.code,{children:"turbo"}),", you'll be able to run all your ",(0,i.jsx)(t.code,{children:"package.json"})," tasks from ",(0,i.jsx)(t.code,{children:"turbo"})," instead of your package manager."]}),"\n",(0,i.jsxs)(t.p,{children:["By configuring your ",(0,i.jsx)(t.code,{children:"turbo.json"})," correctly, you'll notice how ",(0,i.jsx)(t.a,{href:"/repo/docs/core-concepts/caching",children:"caching"})," helps your tasks run a lot faster."]}),"\n",(0,i.jsx)(t.h2,{id:"quickstart",children:"Quickstart"}),"\n",(0,i.jsxs)(t.ol,{start:"0",children:["\n",(0,i.jsx)(t.li,{children:(0,i.jsx)(t.strong,{children:"If you don't have one already, create a new application:"})}),"\n"]}),"\n",(0,i.jsxs)(d.m,{items:["Next.js","Vite"],storageKey:"selected-framework",children:[(0,i.jsx)(d.O,{children:(0,i.jsx)(t.div,{"data-rehype-pretty-code-fragment":"",children:(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{"data-language":"bash","data-theme":"default",children:(0,i.jsx)(t.span,{className:"line",children:(0,i.jsx)(t.span,{style:{color:"var(--shiki-color-text)"},children:"npx create-next-app@latest"})})})})})}),(0,i.jsx)(d.O,{children:(0,i.jsx)(t.div,{"data-rehype-pretty-code-fragment":"",children:(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{"data-language":"bash","data-theme":"default",children:(0,i.jsx)(t.span,{className:"line",children:(0,i.jsx)(t.span,{style:{color:"var(--shiki-color-text)"},children:"npm create vite@latest"})})})})})})]}),"\n",(0,i.jsxs)(t.ol,{children:["\n",(0,i.jsx)(t.li,{children:(0,i.jsxs)(t.strong,{children:["Install ",(0,i.jsx)(t.code,{children:"turbo"}),":"]})}),"\n"]}),"\n",(0,i.jsxs)(d.m,{items:["npm","yarn","pnpm"],storageKey:"selected-pkg-manager",children:[(0,i.jsx)(d.O,{children:(0,i.jsx)(t.div,{"data-rehype-pretty-code-fragment":"",children:(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{"data-language":"bash","data-theme":"default",children:(0,i.jsx)(t.span,{className:"line",children:(0,i.jsx)(t.span,{style:{color:"var(--shiki-color-text)"},children:"npm install turbo --save-dev"})})})})})}),(0,i.jsx)(d.O,{children:(0,i.jsx)(t.div,{"data-rehype-pretty-code-fragment":"",children:(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{"data-language":"bash","data-theme":"default",children:(0,i.jsx)(t.span,{className:"line",children:(0,i.jsx)(t.span,{style:{color:"var(--shiki-color-text)"},children:"yarn add turbo --dev"})})})})})}),(0,i.jsx)(d.O,{children:(0,i.jsx)(t.div,{"data-rehype-pretty-code-fragment":"",children:(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{"data-language":"bash","data-theme":"default",children:(0,i.jsx)(t.span,{className:"line",children:(0,i.jsx)(t.span,{style:{color:"var(--shiki-color-text)"},children:"pnpm install turbo --save-dev"})})})})})})]}),"\n",(0,i.jsxs)(t.ol,{start:"2",children:["\n",(0,i.jsx)(t.li,{children:(0,i.jsxs)(t.strong,{children:["Add a ",(0,i.jsx)(t.code,{children:"turbo.json"})," file at the base of your new repository:"]})}),"\n"]}),"\n",(0,i.jsxs)(d.m,{items:["Next.js","Vite"],storageKey:"selected-framework",children:[(0,i.jsx)(d.O,{children:(0,i.jsx)(t.div,{"data-rehype-pretty-code-fragment":"",children:(0,i.jsx)(t.pre,{filename:"turbo.json",children:(0,i.jsxs)(t.code,{"data-language":"json","data-theme":"default",children:[(0,i.jsx)(t.span,{className:"line",children:(0,i.jsx)(t.span,{style:{color:"var(--shiki-color-text)"},children:"{"})}),"\n",(0,i.jsxs)(t.span,{className:"line",children:[(0,i.jsx)(t.span,{style:{color:"var(--shiki-color-text)"},children:"  "}),(0,i.jsx)(t.span,{style:{color:"var(--shiki-token-keyword)"},children:'"pipeline"'}),(0,i.jsx)(t.span,{style:{color:"var(--shiki-token-punctuation)"},children:":"}),(0,i.jsx)(t.span,{style:{color:"var(--shiki-color-text)"},children:" {"})]}),"\n",(0,i.jsxs)(t.span,{className:"line",children:[(0,i.jsx)(t.span,{style:{color:"var(--shiki-color-text)"},children:"    "}),(0,i.jsx)(t.span,{style:{color:"var(--shiki-token-keyword)"},children:'"build"'}),(0,i.jsx)(t.span,{style:{color:"var(--shiki-token-punctuation)"},children:":"}),(0,i.jsx)(t.span,{style:{color:"var(--shiki-color-text)"},children:" {"})]}),"\n",(0,i.jsxs)(t.span,{className:"line",children:[(0,i.jsx)(t.span,{style:{color:"var(--shiki-color-text)"},children:"      "}),(0,i.jsx)(t.span,{style:{color:"var(--shiki-token-keyword)"},children:'"outputs"'}),(0,i.jsx)(t.span,{style:{color:"var(--shiki-token-punctuation)"},children:":"}),(0,i.jsx)(t.span,{style:{color:"var(--shiki-color-text)"},children:" ["}),(0,i.jsx)(t.span,{style:{color:"var(--shiki-token-string-expression)"},children:'".next/**"'}),(0,i.jsx)(t.span,{style:{color:"var(--shiki-color-text)"},children:"]"})]}),"\n",(0,i.jsxs)(t.span,{className:"line",children:[(0,i.jsx)(t.span,{style:{color:"var(--shiki-color-text)"},children:"    }"}),(0,i.jsx)(t.span,{style:{color:"var(--shiki-token-punctuation)"},children:","})]}),"\n",(0,i.jsxs)(t.span,{className:"line",children:[(0,i.jsx)(t.span,{style:{color:"var(--shiki-color-text)"},children:"    "}),(0,i.jsx)(t.span,{style:{color:"var(--shiki-token-keyword)"},children:'"lint"'}),(0,i.jsx)(t.span,{style:{color:"var(--shiki-token-punctuation)"},children:":"}),(0,i.jsx)(t.span,{style:{color:"var(--shiki-color-text)"},children:" {"})]}),"\n",(0,i.jsxs)(t.span,{className:"line",children:[(0,i.jsx)(t.span,{style:{color:"var(--shiki-color-text)"},children:"      "}),(0,i.jsx)(t.span,{style:{color:"var(--shiki-token-keyword)"},children:'"outputs"'}),(0,i.jsx)(t.span,{style:{color:"var(--shiki-token-punctuation)"},children:":"}),(0,i.jsx)(t.span,{style:{color:"var(--shiki-color-text)"},children:" []"})]}),"\n",(0,i.jsx)(t.span,{className:"line",children:(0,i.jsx)(t.span,{style:{color:"var(--shiki-color-text)"},children:"    }"})}),"\n",(0,i.jsx)(t.span,{className:"line",children:(0,i.jsx)(t.span,{style:{color:"var(--shiki-color-text)"},children:"  }"})}),"\n",(0,i.jsx)(t.span,{className:"line",children:(0,i.jsx)(t.span,{style:{color:"var(--shiki-color-text)"},children:"}"})})]})})})}),(0,i.jsxs)(d.O,{children:[(0,i.jsx)(t.div,{"data-rehype-pretty-code-fragment":"",children:(0,i.jsx)(t.pre,{filename:"turbo.json",children:(0,i.jsxs)(t.code,{"data-language":"json","data-theme":"default",children:[(0,i.jsx)(t.span,{className:"line",children:(0,i.jsx)(t.span,{style:{color:"var(--shiki-color-text)"},children:"{"})}),"\n",(0,i.jsxs)(t.span,{className:"line",children:[(0,i.jsx)(t.span,{style:{color:"var(--shiki-color-text)"},children:"  "}),(0,i.jsx)(t.span,{style:{color:"var(--shiki-token-keyword)"},children:'"pipeline"'}),(0,i.jsx)(t.span,{style:{color:"var(--shiki-token-punctuation)"},children:":"}),(0,i.jsx)(t.span,{style:{color:"var(--shiki-color-text)"},children:" {"})]}),"\n",(0,i.jsxs)(t.span,{className:"line",children:[(0,i.jsx)(t.span,{style:{color:"var(--shiki-color-text)"},children:"    "}),(0,i.jsx)(t.span,{style:{color:"var(--shiki-token-keyword)"},children:'"build"'}),(0,i.jsx)(t.span,{style:{color:"var(--shiki-token-punctuation)"},children:":"}),(0,i.jsx)(t.span,{style:{color:"var(--shiki-color-text)"},children:" {"})]}),"\n",(0,i.jsxs)(t.span,{className:"line",children:[(0,i.jsx)(t.span,{style:{color:"var(--shiki-color-text)"},children:"      "}),(0,i.jsx)(t.span,{style:{color:"var(--shiki-token-keyword)"},children:'"outputs"'}),(0,i.jsx)(t.span,{style:{color:"var(--shiki-token-punctuation)"},children:":"}),(0,i.jsx)(t.span,{style:{color:"var(--shiki-color-text)"},children:" ["}),(0,i.jsx)(t.span,{style:{color:"var(--shiki-token-string-expression)"},children:'"dist/**"'}),(0,i.jsx)(t.span,{style:{color:"var(--shiki-color-text)"},children:"]"})]}),"\n",(0,i.jsxs)(t.span,{className:"line",children:[(0,i.jsx)(t.span,{style:{color:"var(--shiki-color-text)"},children:"    }"}),(0,i.jsx)(t.span,{style:{color:"var(--shiki-token-punctuation)"},children:","})]}),"\n",(0,i.jsxs)(t.span,{className:"line",children:[(0,i.jsx)(t.span,{style:{color:"var(--shiki-color-text)"},children:"    "}),(0,i.jsx)(t.span,{style:{color:"var(--shiki-token-keyword)"},children:'"lint"'}),(0,i.jsx)(t.span,{style:{color:"var(--shiki-token-punctuation)"},children:":"}),(0,i.jsx)(t.span,{style:{color:"var(--shiki-color-text)"},children:" {"})]}),"\n",(0,i.jsxs)(t.span,{className:"line",children:[(0,i.jsx)(t.span,{style:{color:"var(--shiki-color-text)"},children:"      "}),(0,i.jsx)(t.span,{style:{color:"var(--shiki-token-keyword)"},children:'"outputs"'}),(0,i.jsx)(t.span,{style:{color:"var(--shiki-token-punctuation)"},children:":"}),(0,i.jsx)(t.span,{style:{color:"var(--shiki-color-text)"},children:" []"})]}),"\n",(0,i.jsx)(t.span,{className:"line",children:(0,i.jsx)(t.span,{style:{color:"var(--shiki-color-text)"},children:"    }"})}),"\n",(0,i.jsx)(t.span,{className:"line",children:(0,i.jsx)(t.span,{style:{color:"var(--shiki-color-text)"},children:"  }"})}),"\n",(0,i.jsx)(t.span,{className:"line",children:(0,i.jsx)(t.span,{style:{color:"var(--shiki-color-text)"},children:"}"})})]})})}),(0,i.jsxs)(t.p,{children:["Some Vite starters ship with a ",(0,i.jsx)(t.code,{children:"package.json"})," that looks like this:"]}),(0,i.jsx)(t.div,{"data-rehype-pretty-code-fragment":"",children:(0,i.jsx)(t.pre,{filename:"package.json",children:(0,i.jsxs)(t.code,{"data-language":"json","data-theme":"default",children:[(0,i.jsx)(t.span,{className:"line",children:(0,i.jsx)(t.span,{style:{color:"var(--shiki-color-text)"},children:"{"})}),"\n",(0,i.jsxs)(t.span,{className:"line",children:[(0,i.jsx)(t.span,{style:{color:"var(--shiki-color-text)"},children:"  "}),(0,i.jsx)(t.span,{style:{color:"var(--shiki-token-keyword)"},children:'"scripts"'}),(0,i.jsx)(t.span,{style:{color:"var(--shiki-token-punctuation)"},children:":"}),(0,i.jsx)(t.span,{style:{color:"var(--shiki-color-text)"},children:" {"})]}),"\n",(0,i.jsxs)(t.span,{className:"line",children:[(0,i.jsx)(t.span,{style:{color:"var(--shiki-color-text)"},children:"    "}),(0,i.jsx)(t.span,{style:{color:"var(--shiki-token-keyword)"},children:'"build"'}),(0,i.jsx)(t.span,{style:{color:"var(--shiki-token-punctuation)"},children:":"}),(0,i.jsx)(t.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,i.jsx)(t.span,{style:{color:"var(--shiki-token-string-expression)"},children:'"tsc && vite build"'})]}),"\n",(0,i.jsx)(t.span,{className:"line",children:(0,i.jsx)(t.span,{style:{color:"var(--shiki-color-text)"},children:"  }"})}),"\n",(0,i.jsx)(t.span,{className:"line",children:(0,i.jsx)(t.span,{style:{color:"var(--shiki-color-text)"},children:"}"})})]})})}),(0,i.jsxs)(t.p,{children:["We recommend splitting these into a ",(0,i.jsx)(t.code,{children:"lint"})," and ",(0,i.jsx)(t.code,{children:"build"})," script."]}),(0,i.jsx)(t.div,{"data-rehype-pretty-code-fragment":"",children:(0,i.jsx)(t.pre,{filename:"package.json",children:(0,i.jsxs)(t.code,{"data-language":"json","data-theme":"default",children:[(0,i.jsx)(t.span,{className:"line",children:(0,i.jsx)(t.span,{style:{color:"var(--shiki-color-text)"},children:"{"})}),"\n",(0,i.jsxs)(t.span,{className:"line",children:[(0,i.jsx)(t.span,{style:{color:"var(--shiki-color-text)"},children:"  "}),(0,i.jsx)(t.span,{style:{color:"var(--shiki-token-keyword)"},children:'"scripts"'}),(0,i.jsx)(t.span,{style:{color:"var(--shiki-token-punctuation)"},children:":"}),(0,i.jsx)(t.span,{style:{color:"var(--shiki-color-text)"},children:" {"})]}),"\n",(0,i.jsxs)(t.span,{className:"line",children:[(0,i.jsx)(t.span,{style:{color:"var(--shiki-color-text)"},children:"    "}),(0,i.jsx)(t.span,{style:{color:"var(--shiki-token-keyword)"},children:'"build"'}),(0,i.jsx)(t.span,{style:{color:"var(--shiki-token-punctuation)"},children:":"}),(0,i.jsx)(t.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,i.jsx)(t.span,{style:{color:"var(--shiki-token-string-expression)"},children:'"vite build"'}),(0,i.jsx)(t.span,{style:{color:"var(--shiki-token-punctuation)"},children:","})]}),"\n",(0,i.jsxs)(t.span,{className:"line",children:[(0,i.jsx)(t.span,{style:{color:"var(--shiki-color-text)"},children:"    "}),(0,i.jsx)(t.span,{style:{color:"var(--shiki-token-keyword)"},children:'"lint"'}),(0,i.jsx)(t.span,{style:{color:"var(--shiki-token-punctuation)"},children:":"}),(0,i.jsx)(t.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,i.jsx)(t.span,{style:{color:"var(--shiki-token-string-expression)"},children:'"tsc"'})]}),"\n",(0,i.jsx)(t.span,{className:"line",children:(0,i.jsx)(t.span,{style:{color:"var(--shiki-color-text)"},children:"  }"})}),"\n",(0,i.jsx)(t.span,{className:"line",children:(0,i.jsx)(t.span,{style:{color:"var(--shiki-color-text)"},children:"}"})})]})})}),(0,i.jsx)(t.p,{children:"This means that Turbo can schedule them separately."})]})]}),"\n",(0,i.jsxs)(t.ol,{start:"3",children:["\n",(0,i.jsx)(t.li,{children:(0,i.jsxs)(t.strong,{children:["Try running ",(0,i.jsx)(t.code,{children:"build"})," and ",(0,i.jsx)(t.code,{children:"lint"})," with ",(0,i.jsx)(t.code,{children:"turbo"}),":"]})}),"\n"]}),"\n",(0,i.jsxs)(d.m,{items:["npm","yarn","pnpm"],storageKey:"selected-pkg-manager",children:[(0,i.jsx)(d.O,{children:(0,i.jsx)(t.div,{"data-rehype-pretty-code-fragment":"",children:(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{"data-language":"bash","data-theme":"default",children:(0,i.jsx)(t.span,{className:"line",children:(0,i.jsx)(t.span,{style:{color:"var(--shiki-color-text)"},children:"npx turbo build lint"})})})})})}),(0,i.jsx)(d.O,{children:(0,i.jsx)(t.div,{"data-rehype-pretty-code-fragment":"",children:(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{"data-language":"bash","data-theme":"default",children:(0,i.jsx)(t.span,{className:"line",children:(0,i.jsx)(t.span,{style:{color:"var(--shiki-color-text)"},children:"yarn turbo build lint"})})})})})}),(0,i.jsx)(d.O,{children:(0,i.jsx)(t.div,{"data-rehype-pretty-code-fragment":"",children:(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{"data-language":"bash","data-theme":"default",children:(0,i.jsx)(t.span,{className:"line",children:(0,i.jsx)(t.span,{style:{color:"var(--shiki-color-text)"},children:"pnpm turbo build lint"})})})})})})]}),"\n",(0,i.jsxs)(t.p,{children:["This runs ",(0,i.jsx)(t.code,{children:"build"})," and ",(0,i.jsx)(t.code,{children:"lint"})," at the same time."]}),"\n",(0,i.jsxs)(t.ol,{start:"4",children:["\n",(0,i.jsx)(t.li,{children:(0,i.jsxs)(t.strong,{children:["Without making any changes to the code, try running ",(0,i.jsx)(t.code,{children:"build"})," and ",(0,i.jsx)(t.code,{children:"lint"})," again:"]})}),"\n"]}),"\n",(0,i.jsxs)(d.m,{items:["npm","yarn","pnpm"],storageKey:"selected-pkg-manager",children:[(0,i.jsx)(d.O,{children:(0,i.jsx)(t.div,{"data-rehype-pretty-code-fragment":"",children:(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{"data-language":"bash","data-theme":"default",children:(0,i.jsx)(t.span,{className:"line",children:(0,i.jsx)(t.span,{style:{color:"var(--shiki-color-text)"},children:"npx turbo build lint"})})})})})}),(0,i.jsx)(d.O,{children:(0,i.jsx)(t.div,{"data-rehype-pretty-code-fragment":"",children:(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{"data-language":"bash","data-theme":"default",children:(0,i.jsx)(t.span,{className:"line",children:(0,i.jsx)(t.span,{style:{color:"var(--shiki-color-text)"},children:"yarn turbo build lint"})})})})})}),(0,i.jsx)(d.O,{children:(0,i.jsx)(t.div,{"data-rehype-pretty-code-fragment":"",children:(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{"data-language":"bash","data-theme":"default",children:(0,i.jsx)(t.span,{className:"line",children:(0,i.jsx)(t.span,{style:{color:"var(--shiki-color-text)"},children:"pnpm turbo build lint"})})})})})})]}),"\n",(0,i.jsx)(t.p,{children:"You should see terminal output like this:"}),"\n",(0,i.jsx)(t.div,{"data-rehype-pretty-code-fragment":"",children:(0,i.jsx)(t.pre,{children:(0,i.jsxs)(t.code,{"data-language":"text","data-theme":"default",children:[(0,i.jsx)(t.span,{className:"line",children:(0,i.jsx)(t.span,{style:{color:"var(--shiki-color-text)"},children:" Tasks:    2 successful, 2 total"})}),"\n",(0,i.jsx)(t.span,{className:"line",children:(0,i.jsx)(t.span,{style:{color:"var(--shiki-color-text)"},children:"Cached:    2 cached, 2 total"})}),"\n",(0,i.jsx)(t.span,{className:"line",children:(0,i.jsx)(t.span,{style:{color:"var(--shiki-color-text)"},children:"  Time:    185ms >>> FULL TURBO"})})]})})}),"\n",(0,i.jsxs)(t.p,{children:["Congratulations - ",(0,i.jsx)(t.strong,{children:"you just completed a build and lint in under 200ms"}),"."]}),"\n",(0,i.jsxs)(t.p,{children:["To learn how this is possible, check out our ",(0,i.jsx)(t.a,{href:"/repo/docs/core-concepts/caching",children:"core concepts docs"}),"."]}),"\n",(0,i.jsxs)(t.ol,{start:"5",children:["\n",(0,i.jsx)(t.li,{children:(0,i.jsxs)(t.strong,{children:["Try running ",(0,i.jsx)(t.code,{children:"dev"})," with ",(0,i.jsx)(t.code,{children:"turbo"}),":"]})}),"\n"]}),"\n",(0,i.jsxs)(d.m,{items:["npm","yarn","pnpm"],storageKey:"selected-pkg-manager",children:[(0,i.jsx)(d.O,{children:(0,i.jsx)(t.div,{"data-rehype-pretty-code-fragment":"",children:(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{"data-language":"bash","data-theme":"default",children:(0,i.jsx)(t.span,{className:"line",children:(0,i.jsx)(t.span,{style:{color:"var(--shiki-color-text)"},children:"npx turbo dev"})})})})})}),(0,i.jsx)(d.O,{children:(0,i.jsx)(t.div,{"data-rehype-pretty-code-fragment":"",children:(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{"data-language":"bash","data-theme":"default",children:(0,i.jsx)(t.span,{className:"line",children:(0,i.jsx)(t.span,{style:{color:"var(--shiki-color-text)"},children:"yarn turbo dev"})})})})})}),(0,i.jsx)(d.O,{children:(0,i.jsx)(t.div,{"data-rehype-pretty-code-fragment":"",children:(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{"data-language":"bash","data-theme":"default",children:(0,i.jsx)(t.span,{className:"line",children:(0,i.jsx)(t.span,{style:{color:"var(--shiki-color-text)"},children:"pnpm turbo dev"})})})})})})]}),"\n",(0,i.jsxs)(t.p,{children:["You'll notice that your ",(0,i.jsx)(t.code,{children:"dev"})," script starts up. You can use ",(0,i.jsx)(t.code,{children:"turbo"})," to run any script in your ",(0,i.jsx)(t.code,{children:"package.json"}),"."]})]})}function j(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=Object.assign({},(0,c.ah)(),e.components),s=t.wrapper;return s?(0,i.jsx)(s,(0,a.Z)((0,r.Z)({},e),{children:(0,i.jsx)(u,(0,r.Z)({},e))})):u(e)}p.title=x;(n=globalThis).__nextra_pageContext__||(n.__nextra_pageContext__=Object.create(null)),globalThis.__nextra_pageContext__["/terminal/docs/getting-started/add-to-project"]={Content:function(e){return(0,i.jsx)(o.mK.Provider,{value:e,children:(0,i.jsx)(j,{})})},pageOpts:p,themeConfig:l.Z}}},function(e){e.O(0,[664,164,628,33,774,888,179],(function(){return t=3665,e(e.s=t);var t}));var t=e.O();_N_E=t}]);