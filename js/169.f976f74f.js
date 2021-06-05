(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[169],{d69b:function(t,a,n){"use strict";n.r(a);var s=function(){var t=this,a=t.$createElement,n=t._self._c||a;return n("doc-page",{attrs:{"meta-title":t.metaTitle,title:"Loading Plugin",related:t.related,nav:t.nav,toc:t.toc,"meta-desc":t.metaDesc}},[n("p",[t._v("Loading is a feature that you can use to display an overlay with a spinner on top of your App’s content to inform the user that a background operation is taking place. No need to add complex logic within your Pages for global background operations.")]),n("h2",{staticClass:"doc-heading doc-h2",attrs:{id:"loading-api"},on:{click:function(a){return t.copyHeading("loading-api")}}},[t._v("Loading API")]),n("doc-api",{attrs:{file:"Loading"}}),n("h2",{staticClass:"doc-heading doc-h2",attrs:{id:"installation"},on:{click:function(a){return t.copyHeading("installation")}}},[t._v("Installation")]),n("doc-installation",{attrs:{plugins:"Loading",config:"loading"}}),n("h2",{staticClass:"doc-heading doc-h2",attrs:{id:"usage"},on:{click:function(a){return t.copyHeading("usage")}}},[t._v("Usage")]),n("p",[t._v("Loading uses a delay (500ms) to display itself so that quick operations won’t make the screen flicker. This happens by showing and then quickly hiding the progress spinner without the user having a chance to see what happens. The delay before showing it eliminates confusion.")]),n("p",[t._v("Inside a Vue component:")]),n("pre",{pre:!0,attrs:{class:"doc-code language-js"}},[n("code",{pre:!0,attrs:{class:"doc-code__inner doc-code__inner--prerendered language-js"}},[n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("$q"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("loading"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("show")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  delay"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("400")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// ms")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("$q"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("loading"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("hide")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])]),n("p",[t._v("Outside of a Vue component:")]),n("pre",{pre:!0,attrs:{class:"doc-code language-js"}},[n("code",{pre:!0,attrs:{class:"doc-code__inner doc-code__inner--prerendered language-js"}},[n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  Loading"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n\n  "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// optional!, for example below")]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// with custom spinner")]),t._v("\n  QSpinnerGears\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'quasar'")]),t._v("\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// default options")]),t._v("\nLoading"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("show")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// fully customizable")]),t._v("\nLoading"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("show")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  spinner"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" QSpinnerGears"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// other props")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\nLoading"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("hide")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])]),n("doc-example",{attrs:{title:"Default options",file:"Loading/Default"}}),n("doc-example",{attrs:{title:"With message",file:"Loading/WithMessage"}}),n("doc-example",{attrs:{title:"With unsafe message, but sanitized",file:"Loading/WithMessageSanitized"}}),n("doc-example",{attrs:{title:"Customized",file:"Loading/Customized"}}),n("doc-example",{attrs:{title:"Show and Change",file:"Loading/ShowAndChange"}}),n("h3",{staticClass:"doc-heading doc-h3",attrs:{id:"setting-up-defaults"},on:{click:function(a){return t.copyHeading("setting-up-defaults")}}},[t._v("Setting Up Defaults")]),n("p",[t._v("Should you wish to set up some defaults, rather than specifying them each time, you can do so by using quasar.conf.js > framework > config > loading: {…} or by calling "),n("code",{staticClass:"doc-token"},[t._v("Loading.setDefaults({...})")]),t._v(" or "),n("code",{staticClass:"doc-token"},[t._v("this.$q.loading.setDefaults({...})")]),t._v(".")])],1)},e=[],o=n("8669"),i={name:"DocMarkdownPage",created:function(){this.metaTitle="Loading Plugin",this.metaDesc="A Quasar plugin which can display a loading state for your app through an overlay with a spinner and a message.",this.related=[{name:"Linear Progress",category:"Vue Components",path:"/vue-components/linear-progress"},{name:"Circular Progress",category:"Vue Components",path:"/vue-components/circular-progress"},{name:"Inner Loading",category:"Vue Components",path:"/vue-components/inner-loading"},{name:"Spinners",category:"Vue Components",path:"/vue-components/spinners"},{name:"Skeleton",category:"Vue Components",path:"/vue-components/skeleton"},{name:"Loading Bar",category:"Quasar Plugins",path:"/quasar-plugins/loading-bar"},{name:"Ajax Bar",category:"Vue Components",path:"/vue-components/ajax-bar"}],this.nav=[{name:"Dialog",category:"Quasar Plugins",path:"/quasar-plugins/dialog",dir:"left"},{name:"Loading Bar",category:"Quasar Plugins",path:"/quasar-plugins/loading-bar",dir:"right"}],this.toc=[{id:"loading-api",title:"Loading API"},{id:"installation",title:"Installation"},{id:"usage",title:"Usage"},{id:"setting-up-defaults",title:"Setting Up Defaults",sub:!0}],this.copyHeading=o["a"]}},r=i,p=n("2877"),c=Object(p["a"])(r,s,e,!1,null,null,null);a["default"]=c.exports}}]);