(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[72],{a02d:function(t,a,n){"use strict";n.r(a);var s=function(){var t=this,a=t.$createElement,n=t._self._c||a;return n("doc-page",{attrs:{title:"Vue Prototype Injections",nav:t.nav}},[n("p",[t._v("Quasar injects Vue prototype with "),n("code",{staticClass:"doc-token"},[t._v("$q")]),t._v(" object:")]),n("q-markup-table",{staticStyle:{width:"fit-content","max-width":"100%"},attrs:{"wrap-cells":!0,flat:!0,bordered:!0}},[n("thead",[n("tr",[n("th",{staticClass:"text-left"},[t._v("Injection")]),n("th",{staticClass:"text-left"},[t._v("Type")]),n("th",{staticClass:"text-left"},[t._v("Description")])])]),n("tbody",[n("tr",[n("td",[n("code",{staticClass:"doc-token"},[t._v("$q.version")])]),n("td",[t._v("String")]),n("td",[t._v("Quasar version.")])]),n("tr",[n("td",[n("code",{staticClass:"doc-token"},[t._v("$q.platform")])]),n("td",[t._v("Object")]),n("td",[t._v("Same object as "),n("doc-link",{attrs:{to:"/options/platform-detection"}},[t._v("Platform")]),t._v(" import from Quasar.")],1)]),n("tr",[n("td",[n("code",{staticClass:"doc-token"},[t._v("$q.screen")])]),n("td",[t._v("Object")]),n("td",[t._v("Object supplied by "),n("doc-link",{attrs:{to:"/options/screen-plugin"}},[t._v("Screen Plugin")]),t._v(".")],1)]),n("tr",[n("td",[n("code",{staticClass:"doc-token"},[t._v("$q.lang")])]),n("td",[t._v("Object")]),n("td",[t._v("Quasar Language pack management, containing labels etc (one of "),n("doc-link",{attrs:{to:"https://github.com/quasarframework/quasar/tree/dev/ui/lang"}},[t._v("lang files")]),t._v("). Designed for Quasar components, but you can use it in your app components too. More info: "),n("doc-link",{attrs:{to:"/options/quasar-language-packs"}},[t._v("Quasar Language Packs")]),t._v(".")],1)]),n("tr",[n("td",[n("code",{staticClass:"doc-token"},[t._v("$q.iconSet")])]),n("td",[t._v("Object")]),n("td",[t._v("Quasar icon set management (one of "),n("doc-link",{attrs:{to:"https://github.com/quasarframework/quasar/tree/dev/ui/icon-set"}},[t._v("icon set files")]),t._v("). Designed for Quasar components, but you can use it in your app components too. More info: "),n("doc-link",{attrs:{to:"/options/quasar-icon-sets"}},[t._v("Quasar Icon Sets")]),t._v(".")],1)]),n("tr",[n("td",[n("code",{staticClass:"doc-token"},[t._v("$q.cordova")])]),n("td",[t._v("Object")]),n("td",[t._v("Reference to Cordova global object. Available only when running under a Cordova app.")])]),n("tr",[n("td",[n("code",{staticClass:"doc-token"},[t._v("$q.capacitor")])]),n("td",[t._v("Object")]),n("td",[t._v("(@quasar/app v1.2+) Reference to Capacitor global object. Available only when running under a Capacitor app.")])]),n("tr",[n("td",[n("code",{staticClass:"doc-token"},[t._v("$q.electron")])]),n("td",[t._v("Object")]),n("td",[t._v("Reference to Electron global object. Available only when running under an Electron app and "),n("strong",[t._v("if "),n("doc-link",{attrs:{to:"/quasar-cli/developing-electron-apps/node-integration"}},[t._v("Node Integration")]),t._v(" is NOT turned off")],1),t._v(".")])])])]),n("h2",{staticClass:"doc-heading doc-h2",attrs:{id:"Example"},on:{click:function(a){return t.copyHeading("Example")}}},[t._v("Example")]),n("p",[t._v("You can use it globally inside a Vue context (component script or template) like this:")]),n("pre",{pre:!0,attrs:{class:"doc-code language-html"}},[n("code",{pre:!0,attrs:{class:"doc-code__inner doc-code__inner--prerendered language-html"}},[n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("\x3c!-- inside a Vue template --\x3e")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("template")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("div")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("div")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("v-if")]),n("span",{pre:!0,attrs:{class:"token attr-value"}},[n("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("$q.platform.is.ios"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n      Gets rendered only on iOS platform.\n    "),n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("div")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("div")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("template")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n\n"),n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("script")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),n("span",{pre:!0,attrs:{class:"token script"}},[n("span",{pre:!0,attrs:{class:"token language-javascript"}},[t._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// not available here outside")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// of the export")]),t._v("\n\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("export")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("default")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// inside a Vue component script")]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("...")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n\n  "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// showing an example on a method, but")]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// can be any part of Vue script")]),t._v("\n  methods"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("show")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// prints out Quasar version")]),t._v("\n      console"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("$q"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("version"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])]),n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("script")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])])],1)},e=[],o=n("8669"),r="Vue Prototype Injections | Quasar Framework",p="Injections into the Vue prototype supplied by Quasar.",c={meta:{title:"Vue Prototype Injections",meta:{title:{name:"title",content:r},ogTitle:{name:"og:title",content:r},twitterTitle:{name:"twitter:title",content:r},description:{name:"description",content:p},ogDesc:{name:"og:description",content:p},twitterDesc:{name:"twitter:description",content:p}}},created:function(){this.$root.store.toc=[{id:"Example",title:"Example"}],this.nav=[{name:"Commit Conventions",category:"Contribution Guide",path:"/contribution-guide/commit-conventions",dir:"left"},{name:"App Icons",category:"Quasar Options & Helpers",path:"/options/app-icons",dir:"right"}]},methods:{copyHeading:o["a"]}},i=c,l=n("2877"),v=Object(l["a"])(i,s,e,!1,null,null,null);a["default"]=v.exports}}]);