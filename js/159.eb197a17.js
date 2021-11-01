(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[159],{"243d":function(t,e,s){"use strict";s.r(e);var a=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("doc-page",{attrs:{"meta-title":t.metaTitle,title:"Testing & Auditing",nav:t.nav,toc:t.toc,"meta-desc":t.metaDesc}},[s("p",[t._v("Your Quasar projects have the ability to add unit and e2e testing harnesses, as well as an ever-growing suite of product quality auditing tools. This introduction will not go into details about how to write and use tests, for that please consult the specially prepared and maintained documentation at the "),s("doc-link",{attrs:{to:"https://github.com/quasarframework/quasar-testing"}},[t._v("Testing repo at GitHub")]),t._v(". If you are a beginner, consider reading one of the books in the “Further Reading” section.")],1),s("h2",{staticClass:"doc-heading doc-h2",attrs:{id:"high-level-overview"},on:{click:function(e){return t.copyHeading("high-level-overview")}}},[t._v("High level overview")]),s("p",[t._v("You can install multiple pre-rigged testing harnesses to your existing 1.0+ Quasar application by running a simple command. This command will pull and install a node module (with dependencies) into your project’s "),s("code",{staticClass:"doc-token"},[t._v("package.json")]),t._v(", place necessary configuration files as appropriate and if you so choose, it will also add script commands that expose some of the functionality of the respective harness. You can add multiple harnesses and even use them for your continuous integration pipelines - as appropriate.")]),s("p",[t._v("Testing is not in and of itself hard. The most complicated part is setting up the testing harness. The trick lies in knowing what to test. If you are new to testing, it is absolutely imperative that you familiarize yourself with some of the concepts and patterns. There are some links for further reading at the end of this document page.")]),s("h2",{staticClass:"doc-heading doc-h2",attrs:{id:"testing-documentation"},on:{click:function(e){return t.copyHeading("testing-documentation")}}},[t._v("Testing documentation")]),s("p",[t._v("Testing has its own documentation website (https://testing.quasar.dev), so head there for full info.")]),s("q-btn",{attrs:{color:"brand-primary",label:"testing.quasar.dev","icon-right":"launch","no-caps":"",type:"a",href:"https://testing.quasar.dev",target:"_blank"}}),s("h2",{staticClass:"doc-heading doc-h2",attrs:{id:"installing"},on:{click:function(e){return t.copyHeading("installing")}}},[t._v("Installing")]),s("pre",{pre:!0,attrs:{class:"doc-code language-shell"}},[s("code",{pre:!0,attrs:{class:"doc-code__inner doc-code__inner--prerendered language-shell"}},[t._v("$ "),s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("cd")]),t._v(" your-quasar-project\n$ quasar ext "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("add")]),t._v(" @quasar/testing@1\n")])]),s("p",[t._v("The lightweight extension installer will ask you which testing harnesses you want to install. Then it will install the respective extensions for these harnesses, which you can configure as you like. It is how multiple testing harnesses are ideally managed within a Quasar project.")]),s("p",[t._v("It will provide you with a new "),s("code",{staticClass:"doc-token"},[t._v("quasar run")]),t._v(" command that you can use to execute test-runners - and even your HMR dev environment at the same time. This approach can, for example, be quite helpful if you need to pass quasar.ctx to the test runner…")]),s("pre",{pre:!0,attrs:{class:"doc-code language-shell"}},[s("code",{pre:!0,attrs:{class:"doc-code__inner doc-code__inner--prerendered language-shell"}},[s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# Example to run jest && dev server in pwa mode")]),t._v("\n$ quasar "),s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("test")]),t._v(" --unit jest --dev"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"-m pwa"')]),t._v("\n")])]),s("p",[t._v("If you ever need to review your choices you can take a look at "),s("code",{staticClass:"doc-token"},[t._v("quasar.extensions.json")]),t._v(".")]),s("p",[t._v("If you don’t want to install the base package, you don’t have to do so. You can install each test harness app extension individually. They are completely standalone, but you won’t have the tight integration with the "),s("code",{staticClass:"doc-token"},[t._v("quasar test")]),t._v(" command functionality.")]),s("h2",{staticClass:"doc-heading doc-h2",attrs:{id:"further-reading"},on:{click:function(e){return t.copyHeading("further-reading")}}},[t._v("Further Reading")]),s("h3",{staticClass:"doc-heading doc-h3",attrs:{id:"books"},on:{click:function(e){return t.copyHeading("books")}}},[t._v("Books")]),s("ul",[s("li",[s("doc-link",{attrs:{to:"https://www.manning.com/books/testing-vue-js-applications"}},[t._v("Testing Vue.js Applications")]),t._v(" by Edd Yerburgh, the author of the "),s("code",{staticClass:"doc-token"},[t._v("@vue/test-utils")]),t._v(" repo")],1),s("li",[s("doc-link",{attrs:{to:"https://lmiller1990.github.io/vue-testing-handbook/"}},[t._v("Free Vue Testing Handbook")])],1)]),s("h3",{staticClass:"doc-heading doc-h3",attrs:{id:"tutorials"},on:{click:function(e){return t.copyHeading("tutorials")}}},[t._v("Tutorials")]),s("ul",[s("li",[s("doc-link",{attrs:{to:"https://medium.com/js-dojo/unit-testing-vue-router-1d091241312"}},[t._v("Unit Testing Vue Router with Jest")])],1),s("li",[t._v("… add your suggestions here")])]),s("h3",{staticClass:"doc-heading doc-h3",attrs:{id:"documentation"},on:{click:function(e){return t.copyHeading("documentation")}}},[t._v("Documentation")]),s("ul",[s("li",[s("doc-link",{attrs:{to:"https://vue-test-utils.vuejs.org"}},[t._v("@vue/test-utils")])],1),s("li",[s("doc-link",{attrs:{to:"https://facebook.github.io/jest/"}},[t._v("jest 24")])],1),s("li",[s("doc-link",{attrs:{to:"https://docs.cypress.io/guides/core-concepts/introduction-to-cypress.html#Cypress-Is-Simple"}},[t._v("cypress")])],1),s("li",[s("doc-link",{attrs:{to:"https://developers.google.com/web/tools/lighthouse/#cli"}},[t._v("lighthouse")])],1),s("li",[s("doc-link",{attrs:{to:"https://snyk.io/test"}},[t._v("snyk")])],1),s("li",[s("doc-link",{attrs:{to:"https://www.npmjs.com/package/nlf"}},[t._v("nlf")])],1),s("li",[s("doc-link",{attrs:{to:"http://www.chaijs.com/"}},[t._v("chai")])],1),s("li",[s("doc-link",{attrs:{to:"https://istanbul.js.org/"}},[t._v("istanbul")])],1)])],1)},i=[],n=s("8669"),o={name:"DocMarkdownPage",created:function(){this.metaTitle="Testing & Auditing",this.metaDesc="How to unit and end to end test a Quasar app and also how to audit for quality and security.",this.nav=[{name:"Linter",category:"Quasar CLI",path:"/quasar-cli/linter",dir:"left"},{name:"Introduction",category:"Developing SPA",path:"/quasar-cli/developing-spa/introduction",dir:"right"}],this.toc=[{id:"high-level-overview",title:"High level overview"},{id:"testing-documentation",title:"Testing documentation"},{id:"installing",title:"Installing"},{id:"further-reading",title:"Further Reading"},{id:"books",title:"Books",sub:!0},{id:"tutorials",title:"Tutorials",sub:!0},{id:"documentation",title:"Documentation",sub:!0}],this.copyHeading=n["a"]}},r=o,l=s("2877"),c=Object(l["a"])(r,a,i,!1,null,null,null);e["default"]=c.exports}}]);