(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[171],{f348:function(t,a,s){"use strict";s.r(a);var n=function(){var t=this,a=t._self._c;return a("doc-page",{attrs:{"meta-title":t.metaTitle,title:"LoadingBar",related:t.related,nav:t.nav,toc:t.toc,"meta-desc":t.metaDesc}},[a("p",[t._v("The Quasar LoadingBar plugin offers an easy way to set up your app with a "),a("doc-link",{attrs:{to:"/vue-components/ajax-bar"}},[t._v("QAjaxBar")]),t._v(" in case you don’t want to handle a QAjaxBar component yourself.")],1),a("p",[t._v("For a demo, please visit the QAjaxBar documentation page.")]),a("h2",{staticClass:"doc-heading doc-h2",attrs:{id:"loadingbar-api"},on:{click:function(a){return t.copyHeading("loadingbar-api")}}},[t._v("LoadingBar API")]),a("doc-api",{attrs:{file:"LoadingBar"}}),a("h2",{staticClass:"doc-heading doc-h2",attrs:{id:"installation"},on:{click:function(a){return t.copyHeading("installation")}}},[t._v("Installation")]),a("doc-installation",{attrs:{plugins:"LoadingBar",config:"loadingBar"}}),a("p",[t._v("LoadingBar options are same as when configuring a "),a("doc-link",{attrs:{to:"/vue-components/ajax-bar"}},[t._v("QAjaxBar")]),t._v(".")],1),a("div",{staticClass:"doc-note doc-note--warning"},[a("p",{staticClass:"doc-note__title"},[t._v("WARNING")]),a("p",[t._v("When using the UMD version of Quasar, all components, directives and plugins are installed by default. This includes LoadingBar. Should you wish to disable it, specify "),a("code",{staticClass:"doc-token"},[t._v("loadingBar: { skipHijack: true }")]),t._v(" (which turns off listening to Ajax traffic).")])]),a("h2",{staticClass:"doc-heading doc-h2",attrs:{id:"usage"},on:{click:function(a){return t.copyHeading("usage")}}},[t._v("Usage")]),a("p",[t._v("Inside Vue components:")]),a("pre",{pre:!0,attrs:{class:"doc-code language-js"}},[a("code",{pre:!0,attrs:{class:"doc-code__inner doc-code__inner--prerendered language-js"}},[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("$q"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("loadingBar"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("start")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("$q"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("loadingBar"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("stop")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("$q"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("loadingBar"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("increment")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("value"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])]),a("p",[t._v("Outside of Vue components:")]),a("pre",{pre:!0,attrs:{class:"doc-code language-js"}},[a("code",{pre:!0,attrs:{class:"doc-code__inner doc-code__inner--prerendered language-js"}},[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" LoadingBar "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'quasar'")]),t._v("\n\nLoadingBar"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("start")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\nLoadingBar"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("stop")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\nLoadingBar"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("increment")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("value"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])]),a("h3",{staticClass:"doc-heading doc-h3",attrs:{id:"setting-up-defaults"},on:{click:function(a){return t.copyHeading("setting-up-defaults")}}},[t._v("Setting Up Defaults")]),a("p",[t._v("Should you wish to set up some defaults, rather than specifying them each time, you can do so by using quasar.conf.js > framework > config > loadingBar: {…} or by calling "),a("code",{staticClass:"doc-token"},[t._v("LoadingBar.setDefaults({...})")]),t._v(" or "),a("code",{staticClass:"doc-token"},[t._v("this.$q.loadingBar.setDefaults({...})")]),t._v(". Supports all "),a("doc-link",{attrs:{to:"/vue-components/ajax-bar"}},[t._v("QAjaxBar")]),t._v(" properties.")],1),a("p",[t._v("Inside Vue components:")]),a("pre",{pre:!0,attrs:{class:"doc-code language-js"}},[a("code",{pre:!0,attrs:{class:"doc-code__inner doc-code__inner--prerendered language-js"}},[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("$q"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("loadingBar"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("setDefaults")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("color")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'purple'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("size")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'15px'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("position")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'bottom'")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])]),a("p",[t._v("Outside of Vue components (includes boot files):")]),a("pre",{pre:!0,attrs:{class:"doc-code language-js"}},[a("code",{pre:!0,attrs:{class:"doc-code__inner doc-code__inner--prerendered language-js"}},[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" LoadingBar "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'quasar'")]),t._v("\n\nLoadingBar"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("setDefaults")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("color")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'purple'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("size")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'15px'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("position")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'bottom'")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])]),a("h3",{staticClass:"doc-heading doc-h3",attrs:{id:"using-an-ajax-filter"},on:{click:function(a){return t.copyHeading("using-an-ajax-filter")}}},[t._v("Using an Ajax filter "),a("q-badge",{attrs:{align:"top",color:"brand-primary",label:"v1.17.2+"}})],1),a("p",[t._v("Should you want to trigger LoadingBar only for some URLs, then you can use the "),a("code",{staticClass:"doc-token"},[t._v("setDefaults()")]),t._v(" method (described above) to configure the "),a("code",{staticClass:"doc-token"},[t._v("hijackFilter")]),t._v(" property:")]),a("pre",{pre:!0,attrs:{class:"doc-code language-js"}},[a("code",{pre:!0,attrs:{class:"doc-code__inner doc-code__inner--prerendered language-js"}},[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" LoadingBar "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'quasar'")]),t._v("\n\nLoadingBar"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("setDefaults")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// return a Boolean which has the meaning of")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v('// "should this URL trigger LoadingBar?"')]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("hijackFilter")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("url")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// example (only https://my-service.com/* should trigger)")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token regex"}},[a("span",{pre:!0,attrs:{class:"token regex-delimiter"}},[t._v("/")]),a("span",{pre:!0,attrs:{class:"token regex-source language-regex"}},[t._v("^https:\\/\\/my-service\\.com")]),a("span",{pre:!0,attrs:{class:"token regex-delimiter"}},[t._v("/")])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("test")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("url"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])],1)},e=[],r=s("8669"),o={name:"DocMarkdownPage",created:function(){this.metaTitle="LoadingBar",this.metaDesc="A Quasar plugin that wraps the QAjaxBar component for the easiest way of showing such a loading indicator in an app.",this.related=[{name:"Ajax Bar",category:"Vue Components",path:"/vue-components/ajax-bar"},{name:"Linear Progress",category:"Vue Components",path:"/vue-components/linear-progress"},{name:"Skeleton",category:"Vue Components",path:"/vue-components/skeleton"}],this.nav=[{name:"Loading",category:"Quasar Plugins",path:"/quasar-plugins/loading",dir:"left"},{name:"Local/Session Storage",category:"Quasar Plugins",path:"/quasar-plugins/web-storage",dir:"right"}],this.toc=[{id:"loadingbar-api",title:"LoadingBar API"},{id:"installation",title:"Installation"},{id:"usage",title:"Usage"},{id:"setting-up-defaults",title:"Setting Up Defaults",sub:!0},{id:"using-an-ajax-filter",title:"Using an Ajax filter",sub:!0}],this.copyHeading=r["a"]}},p=o,c=s("2877"),i=Object(c["a"])(p,n,e,!1,null,null,null);a["default"]=i.exports}}]);