(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[96],{7570:function(a,t,s){"use strict";s.r(t);var e=function(){var a=this,t=a.$createElement,s=a._self._c||t;return s("doc-page",{attrs:{"meta-title":a.metaTitle,title:"Configuring Capacitor",related:a.related,nav:a.nav,toc:a.toc,"meta-desc":a.metaDesc}},[s("p",[a._v("We’ll be using Quasar CLI to develop and build a Mobile App. The difference between building a SPA, PWA, Electron App or a Mobile App is simply determined by the “mode” parameter in “quasar dev” and “quasar build” commands.")]),s("p",[a._v("There are two configuration files of great importance to your mobile apps. We’ll go over each one.")]),s("h2",{staticClass:"doc-heading doc-h2",attrs:{id:"capacitor-config-json"},on:{click:function(t){return a.copyHeading("capacitor-config-json")}}},[a._v("capacitor.config.json")]),s("p",[a._v("The most important config file for your mobile app is "),s("code",{staticClass:"doc-token"},[a._v("/src-capacitor/capacitor.config.json")]),a._v(". The "),s("code",{staticClass:"doc-token"},[a._v("/src-capacitor")]),a._v(" folder is a Capacitor project, so please refer to "),s("doc-link",{attrs:{to:"https://capacitor.ionicframework.com"}},[a._v("Capacitor documentation")]),a._v(" in order to understand what each file from there does. But for now, have a few moments to read about "),s("doc-link",{attrs:{to:"https://capacitor.ionicframework.com/docs/basics/configuring-your-app/"}},[a._v("capacitor.config.json")]),a._v(".")],1),s("p",[a._v("Some properties from this file will get overwritten as we’ll see in next section.")]),s("h2",{staticClass:"doc-heading doc-h2",attrs:{id:"quasar-conf-js"},on:{click:function(t){return a.copyHeading("quasar-conf-js")}}},[a._v("quasar.conf.js")]),s("p",[a._v("There are two places in "),s("code",{staticClass:"doc-token"},[a._v("/quasar.conf.js")]),a._v(" where you can configure Quasar specific features for Capacitor.")]),s("pre",{pre:!0,attrs:{class:"doc-code language-js"}},[s("code",{pre:!0,attrs:{class:"doc-code__inner doc-code__inner--prerendered language-js"}},[s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("return")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v("\n  capacitor"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(":")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v("\n    "),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("// (Optional!) requires @quasar/app v1.3+")]),a._v("\n    hideSplashscreen"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(":")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token boolean"}},[a._v("false")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("// disables auto-hiding the Splashscreen by Quasar CLI")]),a._v("\n\n    "),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("// (Optional!) requires @quasar/app v2.1.5")]),a._v("\n    capacitorCliPreparationParams"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(":")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("[")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[a._v("'sync'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v(" ctx"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),a._v("targetName "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("]")]),a._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),a._v("\n")])]),s("p",[a._v("And you can also configure:")]),s("pre",{pre:!0,attrs:{class:"doc-code language-js"}},[s("code",{pre:!0,attrs:{class:"doc-code__inner doc-code__inner--prerendered language-js"}},[s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("return")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v("\n  framework"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(":")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v("\n    config"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(":")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v("\n      capacitor"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(":")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v("\n        iosStatusBarPadding"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(":")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token boolean"}},[a._v("true")]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("/")]),s("span",{pre:!0,attrs:{class:"token boolean"}},[a._v("false")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("// add the dynamic top padding on iOS mobile devices")]),a._v("\n      "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),a._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),a._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),a._v("\n")])]),s("p",[a._v("Finally, you can also disable or configure the back button hook (used for Dialogs):")]),s("pre",{pre:!0,attrs:{class:"doc-code language-js"}},[s("code",{pre:!0,attrs:{class:"doc-code__inner doc-code__inner--prerendered language-js"}},[s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("return")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v("\n  framework"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(":")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v("\n    config"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(":")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v("\n      capacitor"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(":")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v("\n        "),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("// Quasar handles app exit on mobile phone back button.")]),a._v("\n        "),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("// Requires Quasar v1.9.3+ for true/false, v1.12.6+ for '*' wildcard and array values")]),a._v("\n        backButtonExit"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(":")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token boolean"}},[a._v("true")]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("/")]),s("span",{pre:!0,attrs:{class:"token boolean"}},[a._v("false")]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("/")]),s("span",{pre:!0,attrs:{class:"token string"}},[a._v("'*'")]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("/")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("[")]),s("span",{pre:!0,attrs:{class:"token string"}},[a._v("'/login'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[a._v("'/home'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[a._v("'/my-page'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v("\n\n        "),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("// On the other hand, the following completely")]),a._v("\n        "),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("// disables Quasar's back button management.")]),a._v("\n        "),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("// Requires Quasar v1.14.1+")]),a._v("\n        backButton"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(":")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token boolean"}},[a._v("true")]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("/")]),s("span",{pre:!0,attrs:{class:"token boolean"}},[a._v("false")]),a._v("\n      "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),a._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),a._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),a._v("\n")])])])},n=[],o=s("8669"),r={name:"DocMarkdownPage",created:function(){this.metaTitle="Configuring Capacitor",this.metaDesc="How to manage your Capacitor apps with Quasar CLI.",this.related=[{name:"quasar.conf.js",category:"Quasar CLI",path:"/quasar-cli/quasar-conf-js"}],this.nav=[{name:"Capacitor versions",category:"Developing Capacitor Apps",path:"/quasar-cli/developing-capacitor-apps/capacitor-version-support",dir:"left"},{name:"App Icons for Capacitor",category:"Developing Capacitor Apps",path:"/quasar-cli/developing-capacitor-apps/app-icons-capacitor",dir:"right"}],this.toc=[{id:"capacitor-config-json",title:"capacitor.config.json"},{id:"quasar-conf-js",title:"quasar.conf.js"}],this.copyHeading=o["a"]}},p=r,c=s("2877"),i=Object(c["a"])(p,e,n,!1,null,null,null);t["default"]=i.exports}}]);