(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[146],{"10a5":function(t,e,s){"use strict";s.r(e);var a=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("doc-page",{attrs:{title:"App Handling Assets",nav:t.nav}},[s("p",[t._v("You will notice in the project structure we have two directories for assets: "),s("code",{staticClass:"doc-token"},[t._v("/public/")]),t._v(" and "),s("code",{staticClass:"doc-token"},[t._v("/src/assets/")]),t._v(". What is the difference between them? Some are static assets while the others are processed and embedded by the build system.")]),s("p",[t._v("So let’s try to answer the question above. We’ll first talk about using regular assets then we’ll see what the difference is for static assets.")]),s("h2",{staticClass:"doc-heading doc-h2",attrs:{id:"Regular-assets---%2Fsrc%2Fassets"},on:{click:function(e){return t.copyHeading("Regular-assets---%2Fsrc%2Fassets")}}},[t._v("Regular assets - /src/assets")]),s("p",[t._v("In "),s("code",{staticClass:"doc-token"},[t._v("*.vue")]),t._v(" components, all your templates and CSS are parsed by "),s("code",{staticClass:"doc-token"},[t._v("vue-html-loader")]),t._v(" and "),s("code",{staticClass:"doc-token"},[t._v("css-loader")]),t._v(" to look for asset URLs. For example, in "),s("code",{staticClass:"doc-token"},[t._v('<img src="./logo.png">')]),t._v(" and "),s("code",{staticClass:"doc-token"},[t._v("background: url(./logo.png)")]),t._v(", "),s("code",{staticClass:"doc-token"},[t._v('"./logo.png"')]),t._v(" is a relative asset path and will be resolved by Webpack as a module dependency.")]),s("p",[t._v("Because "),s("code",{staticClass:"doc-token"},[t._v("logo.png")]),t._v(" is not JavaScript, when treated as a module dependency, we need to use "),s("code",{staticClass:"doc-token"},[t._v("url-loader")]),t._v(" and "),s("code",{staticClass:"doc-token"},[t._v("file-loader")]),t._v(" to process it. Quasar CLI has already configured these webpack loaders for you, so you basically get features such as filename fingerprinting and conditional base64 inlining for free, while being able to use relative/module paths without worrying about deployment.")]),s("p",[t._v("Since these assets may be inlined/copied/renamed during build, they are essentially part of your source code. This is why it is recommended to place Webpack-processed assets inside "),s("code",{staticClass:"doc-token"},[t._v("/src/assets")]),t._v(", along side other source files. In fact, you don’t even have to put them all in "),s("code",{staticClass:"doc-token"},[t._v("/src/assets")]),t._v(": you can organize them based on the module/component using them. For example, you can put each component in its own directory, with its static assets right next to it.")]),s("h3",{staticClass:"doc-heading doc-h3",attrs:{id:"Asset-Resolving-Rules"},on:{click:function(e){return t.copyHeading("Asset-Resolving-Rules")}}},[t._v("Asset Resolving Rules")]),s("p",[t._v("Relative URLs, e.g. "),s("code",{staticClass:"doc-token"},[t._v("./assets/logo.png")]),t._v(" will be interpreted as a module dependency. They will be replaced with an auto-generated URL based on your Webpack output configuration.")]),s("p",[t._v("URLs prefixed with "),s("code",{staticClass:"doc-token"},[t._v("~")]),t._v(" are treated as a module request, similar to "),s("code",{staticClass:"doc-token"},[t._v("require('some-module/image.png')")]),t._v(". You need to use this prefix if you want to leverage Webpack’s module resolving configurations. Quasar provides "),s("code",{staticClass:"doc-token"},[t._v("assets")]),t._v(" Webpack alias out of the box, so it is recommended that you use it like this: "),s("code",{staticClass:"doc-token"},[t._v('<img src="~assets/logo.png">')]),t._v(". Notice "),s("code",{staticClass:"doc-token"},[t._v("~")]),t._v(" in front of ‘assets’.")]),s("h2",{staticClass:"doc-heading doc-h2",attrs:{id:"Static-Assets---%2Fpublic"},on:{click:function(e){return t.copyHeading("Static-Assets---%2Fpublic")}}},[t._v("Static Assets - /public")]),s("p",[t._v("Root-relative URLs (e.g. "),s("code",{staticClass:"doc-token"},[t._v("/logo.png")]),t._v(" – where ‘/’ is your publicPath) or "),s("code",{staticClass:"doc-token"},[t._v("logo.png")]),t._v(" are not processed at all. This should be placed in "),s("code",{staticClass:"doc-token"},[t._v("public/")]),t._v(". These won’t be processed by Webpack at all. The statics folder is simply copied over to the distributable folder as-is.")]),s("p",[t._v("Quasar has some smart algorithms behind the curtains which ensure that no matter what you build (SPA, PWA, Cordova, Electron), your statics are correctly referenced "),s("em",[t._v("if and only if")]),t._v(" they do not use a relative path.")]),s("pre",{pre:!0,attrs:{class:"doc-code language-html"}},[s("code",{pre:!0,attrs:{class:"doc-code__inner doc-code__inner--prerendered language-html"}},[s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("\x3c!-- Good! --\x3e")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("img")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("src")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("logo.png"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("\x3c!--\n  BAD! Works until you change vue router\n  mode (hash/history) or your public path.\n  Don't!\n--\x3e")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("img")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("src")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("/logo.png"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])]),s("div",{staticClass:"doc-note doc-note--tip"},[s("p",{staticClass:"doc-note__title"},[t._v("Assets vs Statics")]),s("p",[t._v("Files in the “assets” folder are only included in your build if they have a literal reference in one of your Vue files.\nEvery file and folder from the “public” folder are copied into your production build as-is, no matter what.")])]),s("div",{staticClass:"doc-note doc-note--danger"},[s("p",{staticClass:"doc-note__title"},[t._v("WARNING")]),s("p",[t._v("When not building a SPA/PWA/SSR, then "),s("code",{staticClass:"doc-token"},[t._v("/public/icons/*")]),t._v(" and "),s("code",{staticClass:"doc-token"},[t._v("/public/favicon.ico")]),t._v(" will NOT be embedded into your app because they would not serve any purpose. For example, Electron or Cordova apps do not require those files.")])]),s("h2",{staticClass:"doc-heading doc-h2",attrs:{id:"Vue-Binding-Requires-Statics-Only"},on:{click:function(e){return t.copyHeading("Vue-Binding-Requires-Statics-Only")}}},[t._v("Vue Binding Requires Statics Only")]),s("p",[t._v("Please note that whenever you bind “src” to a variable in your Vue scope, it must be one from the statics folder. The reason is simple: the URL is dynamic, so Webpack (which packs up assets at compile time) doesn’t know which file you’ll be referencing at runtime, so it won’t process the URL.")]),s("pre",{pre:!0,attrs:{class:"doc-code language-html"}},[s("code",{pre:!0,attrs:{class:"doc-code__inner doc-code__inner--prerendered language-html"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("template")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("\x3c!-- imageSrc MUST reference a file from /public --\x3e")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("img")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v(":src")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("imageSrc"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("template")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("script")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),s("span",{pre:!0,attrs:{class:"token script"}},[s("span",{pre:!0,attrs:{class:"token language-javascript"}},[t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("export")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("default")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("data")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("!")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("--")]),t._v("\n        Referencing "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("\n        Notice string doesn't start "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("with")]),t._v(" a slash"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("--")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n      imageSrc"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'logo.png'")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])]),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("script")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])]),s("p",[t._v("You can force serving static assets by binding "),s("code",{staticClass:"doc-token"},[t._v("src")]),t._v(" to a value with Vue. Instead of "),s("code",{staticClass:"doc-token"},[t._v('src="path/to/image"')]),t._v(" use "),s("code",{staticClass:"doc-token"},[t._v(":src=\" 'path/to/image' \"")]),t._v(" or "),s("code",{staticClass:"doc-token"},[t._v(':src="imageSrc"')]),t._v(". Please note the usage of single quotes within double quotes on the second code example (spaces have been added to see this visually on the documentation website - normally you would not have the spaces).")]),s("h2",{staticClass:"doc-heading doc-h2",attrs:{id:"Getting-Asset-Paths-in-JavaScript"},on:{click:function(e){return t.copyHeading("Getting-Asset-Paths-in-JavaScript")}}},[t._v("Getting Asset Paths in JavaScript")]),s("p",[t._v("In order for Webpack to return the correct asset paths, you need to use "),s("code",{staticClass:"doc-token"},[t._v("require('./relative/path/to/file.jpg')")]),t._v(", which will get processed by "),s("code",{staticClass:"doc-token"},[t._v("file-loader")]),t._v(" and returns the resolved URL. For example:")]),s("pre",{pre:!0,attrs:{class:"doc-code language-js"}},[s("code",{pre:!0,attrs:{class:"doc-code__inner doc-code__inner--prerendered language-js"}},[t._v("computed"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("background")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("require")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'./bgs/'")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("id "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'.jpg'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])]),s("p",[t._v("Note the above example will include every image under "),s("code",{staticClass:"doc-token"},[t._v("./bgs/")]),t._v(" in the final build. This is because Webpack cannot guess which of them will be used at runtime, so it includes them all.")])])},n=[],o=s("8669");const r="App Handling Assets | Quasar Framework",c="How to use regular app assets and static assets in a Quasar app.";var i={meta:{title:"App Handling Assets",meta:{title:{name:"title",content:r},ogTitle:{name:"og:title",content:r},twitterTitle:{name:"twitter:title",content:r},description:{name:"description",content:c},ogDesc:{name:"og:description",content:c},twitterDesc:{name:"twitter:description",content:c}}},created(){this.$root.store.toc=[{id:"Regular-assets---%2Fsrc%2Fassets",title:"Regular assets - /src/assets"},{id:"Asset-Resolving-Rules",title:"Asset Resolving Rules",sub:!0},{id:"Static-Assets---%2Fpublic",title:"Static Assets - /public"},{id:"Vue-Binding-Requires-Statics-Only",title:"Vue Binding Requires Statics Only"},{id:"Getting-Asset-Paths-in-JavaScript",title:"Getting Asset Paths in JavaScript"}],this.nav=[{name:"Lazy Loading - Code Splitting",category:"Quasar CLI",path:"/quasar-cli/lazy-loading",dir:"left"},{name:"Boot Files",category:"Quasar CLI",path:"/quasar-cli/boot-files",dir:"right"}]},methods:{copyHeading:o["a"]}},p=i,l=s("2877"),d=Object(l["a"])(p,a,n,!1,null,null,null);e["default"]=d.exports}}]);