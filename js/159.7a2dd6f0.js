(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[159],{"8d4b":function(t,s,a){"use strict";a.r(s);var e=function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("doc-page",{attrs:{"meta-title":t.metaTitle,title:"App Routing",nav:t.nav,toc:t.toc,"meta-desc":t.metaDesc}},[a("p",[t._v("You’ll notice that your Quasar project contains a "),a("code",{staticClass:"doc-token"},[t._v("/src/router")]),t._v(" folder. This holds the routing configuration of your website/app:")]),a("ul",[a("li",[t._v("“/src/router/index.js” holds the Vue Router initialization code")]),a("li",[t._v("“/src/router/routes.js” holds the routes of your website/app")])]),a("p",[t._v("Make sure to read "),a("doc-link",{attrs:{to:"https://v3.router.vuejs.org/"}},[t._v("Vue Router documentation")]),t._v(" to understand how it works.")],1),a("p",[t._v("The "),a("code",{staticClass:"doc-token"},[t._v("/src/router/routes.js")]),t._v(" needs to import your website/app’s Pages and Layouts. Read more on "),a("doc-link",{attrs:{to:"/layout/routing-with-layouts-and-pages"}},[t._v("Routing with Layouts and Pages")]),t._v(" documentation page.")],1),a("p",[t._v("When using Vuex the store is not directly importable from other scripts, but it is passed to the exported function of "),a("code",{staticClass:"doc-token"},[t._v("/src/router/index.js")]),t._v(", so it can be accessed from there. For example you can use the "),a("code",{staticClass:"doc-token"},[t._v("Router.beforeEach")]),t._v(" method to check authentication in the router:")]),a("pre",{pre:!0,attrs:{class:"doc-code language-js"}},[a("code",{pre:!0,attrs:{class:"doc-code__inner doc-code__inner--prerendered language-js"}},[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("export")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("default")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" store "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/*, ssrContext */")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// ...")]),t._v("\n  Router"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("beforeEach")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("to"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" from"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" next")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("to"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("matched"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("some")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("record")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" record"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("meta"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("requireAuth"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("&&")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("!")]),t._v("store"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("getters"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'auth/isSignedIn'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("next")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("name")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'account-signin'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("query")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("next")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" to"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("fullPath "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("else")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("next")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// ...")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])},n=[],r=a("8669"),o={name:"DocMarkdownPage",created:function(){this.metaTitle="App Routing",this.metaDesc="How to use the Vue Router in a Quasar app.",this.nav=[{name:"CSS Preprocessors",category:"Quasar CLI",path:"/quasar-cli/css-preprocessors",dir:"left"},{name:"Lazy Loading - Code Splitting",category:"Quasar CLI",path:"/quasar-cli/lazy-loading",dir:"right"}],this.toc=[],this.copyHeading=r["a"]}},p=o,c=a("2877"),u=Object(c["a"])(p,e,n,!1,null,null,null);s["default"]=u.exports}}]);