(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[145],{"23a0":function(e,t,s){"use strict";s.r(t);var a=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("doc-page",{attrs:{"meta-title":e.metaTitle,title:"SSR with PWA Client Takeover",nav:e.nav,toc:e.toc,"meta-desc":e.metaDesc}},[s("p",[e._v("With Quasar CLI you can build your app with the killer combo of SSR + PWA. In order to enable PWA for SSR builds, you need to edit your "),s("code",{staticClass:"doc-token"},[e._v("/quasar.conf.js")]),e._v(" first:")]),s("pre",{pre:!0,attrs:{class:"doc-code language-js"}},[s("code",{pre:!0,attrs:{class:"doc-code__inner doc-code__inner--prerendered language-js"}},[s("span",{pre:!0,attrs:{class:"token comment"}},[e._v("// quasar.conf.js")]),e._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("return")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("{")]),e._v("\n  "),s("span",{pre:!0,attrs:{class:"token comment"}},[e._v("// ...")]),e._v("\n  ssr"),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v(":")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("{")]),e._v("\n    pwa"),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v(":")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token boolean"}},[e._v("true")]),e._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("}")]),e._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("}")]),e._v("\n")])]),s("p",[e._v("The first request of a "),s("strong",[e._v("new")]),e._v(" client will be served from the webserver (so SSR supplies the initial page content). The PWA gets installed then it takes over on client side. All further requests will be served from cache (unless you have some custom configuration to change that).")]),s("blockquote",{staticClass:"doc-note"},[s("p",[e._v("For more information on PWA, head on to "),s("doc-link",{attrs:{to:"/quasar-cli/developing-pwa/introduction"}},[e._v("PWA Introduction")]),e._v(" and read the whole PWA Guide section.")],1)])])},n=[],o=s("8669"),r={name:"DocMarkdownPage",created:function(){this.metaTitle="SSR with PWA Client Takeover",this.metaDesc="How to configure your Quasar server-side rendered app to become a Progressive Web App on the client side.",this.nav=[{name:"Handling 404 and 500 Errors",category:"Developing SSR",path:"/quasar-cli/developing-ssr/handling-404-and-500-errors",dir:"left"},{name:"SSR Frequently Asked Questions",category:"Developing SSR",path:"/quasar-cli/developing-ssr/ssr-frequently-asked-questions",dir:"right"}],this.toc=[],this.copyHeading=o["a"]}},i=r,c=s("2877"),l=Object(c["a"])(i,a,n,!1,null,null,null);t["default"]=l.exports}}]);