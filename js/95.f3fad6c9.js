(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[95],{9407:function(t,a,s){"use strict";s.r(a);var e=function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("doc-page",{attrs:{"meta-title":t.metaTitle,title:"Capacitor versions",nav:t.nav,toc:t.toc,"meta-desc":t.metaDesc}},[s("p",[t._v("The officially supported versions of Capacitor are v1, v2 and v3.")]),s("h2",{staticClass:"doc-heading doc-h2",attrs:{id:"setting-up-capacitor-v3"},on:{click:function(a){return t.copyHeading("setting-up-capacitor-v3")}}},[t._v("Setting up Capacitor v3")]),s("div",{staticClass:"doc-note doc-note--tip"},[s("p",{staticClass:"doc-note__title"},[t._v("TIP")]),s("p",[t._v("You will need "),s("code",{staticClass:"doc-token"},[t._v("quasar")]),t._v(" v1.15.5+ and "),s("code",{staticClass:"doc-token"},[t._v("@quasar/app")]),t._v(" v2.2.0+.")])]),s("div",{staticClass:"doc-note doc-note--warning"},[s("p",{staticClass:"doc-note__title"},[t._v("Known issue")]),s("p",[t._v("HTTPS devserver (through quasar.conf.js > devServer > https: true) is not "),s("strong",[t._v("yet")]),t._v(" supported. If you are using Capacitor plugins that depend on it, it’s better to stay with Capacitor v2 for the moment.")])]),s("p",[t._v("Assuming that you’ve installed Capacitor mode already, this is how your dependencies in /src-capacitor/package.json should look like:")]),s("pre",{pre:!0,attrs:{class:"doc-code language-js"}},[s("code",{pre:!0,attrs:{class:"doc-code__inner doc-code__inner--prerendered language-js"}},[t._v("dependencies"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"@capacitor/cli"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"^3.0.0-beta.1"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"@capacitor/core"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"^3.0.0-beta.1"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"@capacitor/app"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"^0.3.3"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"@capacitor/splash-screen"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"^0.3.3"')]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])]),s("p",[t._v("The "),s("code",{staticClass:"doc-token"},[t._v("@capacitor/app")]),t._v(" and "),s("code",{staticClass:"doc-token"},[t._v("@capacitor/splash-screen")]),t._v(" are optional, but it helps Quasar with some UI functionality if they are installed.")]),s("h2",{staticClass:"doc-heading doc-h2",attrs:{id:"setting-up-capacitor-v2"},on:{click:function(a){return t.copyHeading("setting-up-capacitor-v2")}}},[t._v("Setting up Capacitor v2")]),s("p",[t._v("Assuming that you’ve installed Capacitor mode already, this is how your dependencies in /src-capacitor/package.json should look like:")]),s("pre",{pre:!0,attrs:{class:"doc-code language-js"}},[s("code",{pre:!0,attrs:{class:"doc-code__inner doc-code__inner--prerendered language-js"}},[t._v("dependencies"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"@capacitor/cli"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"^2.0.0"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"@capacitor/core"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"^2.0.0"')]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])]),s("h2",{staticClass:"doc-heading doc-h2",attrs:{id:"setting-up-capacitor-v1"},on:{click:function(a){return t.copyHeading("setting-up-capacitor-v1")}}},[t._v("Setting up Capacitor v1")]),s("p",[t._v("Assuming that you’ve installed Capacitor mode already, this is how your dependencies in /src-capacitor/package.json should look like:")]),s("pre",{pre:!0,attrs:{class:"doc-code language-js"}},[s("code",{pre:!0,attrs:{class:"doc-code__inner doc-code__inner--prerendered language-js"}},[t._v("dependencies"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"@capacitor/cli"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"^1.0.0"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"@capacitor/core"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"^1.0.0"')]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])},n=[],r=s("8669"),o={name:"DocMarkdownPage",created:function(){this.metaTitle="Capacitor versions",this.metaDesc="Supported Capacitor versions in Quasar. How to upgrade to a newer Capacitor version.",this.nav=[{name:"Preparation",category:"Developing Capacitor Apps",path:"/quasar-cli/developing-capacitor-apps/preparation",dir:"left"},{name:"Configuring Capacitor",category:"Developing Capacitor Apps",path:"/quasar-cli/developing-capacitor-apps/configuring-capacitor",dir:"right"}],this.toc=[{id:"setting-up-capacitor-v3",title:"Setting up Capacitor v3"},{id:"setting-up-capacitor-v2",title:"Setting up Capacitor v2"},{id:"setting-up-capacitor-v1",title:"Setting up Capacitor v1"}],this.copyHeading=r["a"]}},p=o,c=s("2877"),i=Object(c["a"])(p,e,n,!1,null,null,null);a["default"]=i.exports}}]);