(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[104],{bbea:function(a,t,e){"use strict";e.r(t);var o=function(){var a=this,t=a.$createElement,e=a._self._c||t;return e("doc-page",{attrs:{"meta-title":a.metaTitle,title:"Configuring Cordova",related:a.related,nav:a.nav,toc:a.toc,"meta-desc":a.metaDesc}},[e("p",[a._v("We’ll be using Quasar CLI (and Cordova CLI) to develop and build a Mobile App. The difference between building a SPA, PWA, Electron App or a Mobile App is simply determined by the “mode” parameter in “quasar dev” and “quasar build” commands.")]),e("p",[a._v("There are two configuration files of great importance to your mobile apps. We’ll go over each one.")]),e("h2",{staticClass:"doc-heading doc-h2",attrs:{id:"config-xml"},on:{click:function(t){return a.copyHeading("config-xml")}}},[a._v("config.xml")]),e("p",[a._v("The most important config file for your mobile app is "),e("code",{staticClass:"doc-token"},[a._v("/src-cordova/config.xml")]),a._v(". The "),e("code",{staticClass:"doc-token"},[a._v("/src-cordova")]),a._v(" folder is a Cordova project, so please refer to "),e("doc-link",{attrs:{to:"https://cordova.apache.org/docs/en/latest/"}},[a._v("Cordova documentation")]),a._v(" in order to understand what each file from there does. But for now, have a few moments to read about "),e("doc-link",{attrs:{to:"https://cordova.apache.org/docs/en/latest/config_ref/"}},[a._v("config.xml")]),a._v(".")],1),e("p",[a._v("Some properties from this file will get overwritten as we’ll see in next section.")]),e("h2",{staticClass:"doc-heading doc-h2",attrs:{id:"quasar-conf-js"},on:{click:function(t){return a.copyHeading("quasar-conf-js")}}},[a._v("quasar.conf.js")]),e("p",[a._v("Quasar CLI helps you in setting some properties of the mobile Apps automatically (from config.xml): the Cordova “id”, app version, description and android-versionCode. This is for convenience so you’ll be able to have a single point where, for example, you change the version of your app, not multiple files that you need to simultaneously touch which is error prone.")]),e("p",[a._v("For determining the values for each of the properties mentioned above, Quasar CLI:")]),e("ol",[e("li",[a._v("Looks in "),e("code",{staticClass:"doc-token"},[a._v("/quasar.conf.js")]),a._v(" for a “cordova” Object. Does it have “version”, “description” and/or “androidVersionCode”? If yes, it will use them.")]),e("li",[a._v("If not, then it looks into your "),e("code",{staticClass:"doc-token"},[a._v("/package.json")]),a._v(" for “cordovaId”, “version” and “description” fields.")])]),e("p",[a._v("Other options you can configure:")]),e("pre",{pre:!0,attrs:{class:"doc-code language-js"}},[e("code",{pre:!0,attrs:{class:"doc-code__inner doc-code__inner--prerendered language-js"}},[e("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("return")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v("\n  framework"),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v(":")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v("\n    config"),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v(":")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v("\n      cordova"),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v(":")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v("\n        "),e("span",{pre:!0,attrs:{class:"token comment"}},[a._v("// add the dynamic top padding on iOS mobile devices")]),a._v("\n        iosStatusBarPadding"),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v(":")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token boolean"}},[a._v("true")]),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v("/")]),e("span",{pre:!0,attrs:{class:"token boolean"}},[a._v("false")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v("\n\n        "),e("span",{pre:!0,attrs:{class:"token comment"}},[a._v("// Quasar handles app exit on mobile phone back button.")]),a._v("\n        "),e("span",{pre:!0,attrs:{class:"token comment"}},[a._v("// Requires Quasar v1.9.3+ for true/false, v1.12.6+ for '*' wildcard and array values")]),a._v("\n        backButtonExit"),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v(":")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token boolean"}},[a._v("true")]),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v("/")]),e("span",{pre:!0,attrs:{class:"token boolean"}},[a._v("false")]),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v("/")]),e("span",{pre:!0,attrs:{class:"token string"}},[a._v("'*'")]),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v("/")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("[")]),e("span",{pre:!0,attrs:{class:"token string"}},[a._v("'/login'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[a._v("'/home'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[a._v("'/my-page'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("]")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v("\n\n        "),e("span",{pre:!0,attrs:{class:"token comment"}},[a._v("// On the other hand, the following completely")]),a._v("\n        "),e("span",{pre:!0,attrs:{class:"token comment"}},[a._v("// disables Quasar's back button management.")]),a._v("\n        "),e("span",{pre:!0,attrs:{class:"token comment"}},[a._v("// Requires Quasar v1.14.1+")]),a._v("\n        backButton"),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v(":")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token boolean"}},[a._v("true")]),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v("/")]),e("span",{pre:!0,attrs:{class:"token boolean"}},[a._v("false")]),a._v("\n      "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),a._v("\n    "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),a._v("\n  "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),a._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),a._v("\n")])])])},s=[],n=e("8669"),r={name:"DocMarkdownPage",created:function(){this.metaTitle="Configuring Cordova",this.metaDesc="How to manage your Cordova apps with Quasar CLI.",this.related=[{name:"quasar.conf.js",category:"Quasar CLI",path:"/quasar-cli/quasar-conf-js"}],this.nav=[{name:"Preparation",category:"Developing Cordova Apps",path:"/quasar-cli/developing-cordova-apps/preparation",dir:"left"},{name:"App Icons for Cordova",category:"Developing Cordova Apps",path:"/quasar-cli/developing-cordova-apps/app-icons-cordova",dir:"right"}],this.toc=[{id:"config-xml",title:"config.xml"},{id:"quasar-conf-js",title:"quasar.conf.js"}],this.copyHeading=n["a"]}},p=r,c=e("2877"),i=Object(c["a"])(p,o,s,!1,null,null,null);t["default"]=i.exports}}]);