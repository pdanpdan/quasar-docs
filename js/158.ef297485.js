(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[158],{c7d8:function(t,s,a){"use strict";a.r(s);var e=function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("doc-page",{attrs:{title:"App Vuex Store",nav:t.nav}},[a("p",[t._v("In large applications, state management often becomes complex due to multiple pieces of state scattered across many components and the interactions between them. It is often overlooked that the source of truth in Vue instances is the raw data object - a Vue instance simply proxies access to it. Therefore, if you have a piece of state that should be shared by multiple instances, you should avoid duplicating it and share it by identity.")]),a("p",[t._v("The recommended way to go if you want components sharing state is Vuex. Take a look at its "),a("doc-link",{attrs:{to:"https://vuex.vuejs.org/"}},[t._v("documentation")]),t._v(" before diving in. It has a great feature when used along the "),a("doc-link",{attrs:{to:"https://github.com/vuejs/vue-devtools"}},[t._v("Vue dev-tools")]),t._v(" browser extension like Time Travel debugging.")],1),a("p",[t._v("We won’t go into details on how to configure or use Vuex since it has great docs. Instead we’ll just show you what the folder structure looks like when using it on a Quasar project.")]),a("pre",{pre:!0,attrs:{class:"doc-code language-bash"}},[a("code",{pre:!0,attrs:{class:"doc-code__inner doc-code__inner--prerendered language-bash"}},[a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v(".")]),t._v("\n└── src/\n    └── store/               "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# Vuex Store")]),t._v("\n        ├── index.js         "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# Vuex Store definition")]),t._v("\n        ├── "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("folder"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("         "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# Vuex Store Module...")]),t._v("\n        └── "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("folder"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("         "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# Vuex Store Module...")]),t._v("\n")])]),a("p",[t._v("By default, if you choose to use Vuex when you create a project folder with Quasar CLI, it will set you up on using Vuex modules. Each sub-folder of "),a("code",{staticClass:"doc-token"},[t._v("/src/store")]),t._v(" represents a Vuex Module.")]),a("div",{staticClass:"doc-note doc-note--tip"},[a("p",{staticClass:"doc-note__title"},[t._v("TIP")]),a("p",[t._v("If Vuex Modules is too much for your website app, you can change "),a("code",{staticClass:"doc-token"},[t._v("/src/store/index.js")]),t._v(" and avoid importing any module.")])]),a("h2",{staticClass:"doc-heading doc-h2",attrs:{id:"Adding-a-Vuex-Module."},on:{click:function(s){return t.copyHeading("Adding-a-Vuex-Module.")}}},[t._v("Adding a Vuex Module.")]),a("p",[t._v("Adding a Vuex Module is made easy by Quasar CLI through the "),a("code",{staticClass:"doc-token"},[t._v("$ quasar new")]),t._v(" command.")]),a("pre",{pre:!0,attrs:{class:"doc-code language-bash"}},[a("code",{pre:!0,attrs:{class:"doc-code__inner doc-code__inner--prerendered language-bash"}},[t._v("$ quasar new store "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("store_name"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n")])]),a("p",[t._v("It will create a folder in "),a("code",{staticClass:"doc-token"},[t._v("/src/store")]),t._v(" named by “store_name” from the command above. It will contain all the boilerplate that you need.")]),a("p",[t._v("Let’s say that you want to create a “showcase” Vuex Module. You issue "),a("code",{staticClass:"doc-token"},[t._v("$ quasar new store showcase")]),t._v(". You then notice the newly created "),a("code",{staticClass:"doc-token"},[t._v("/src/store/showcase")]),t._v(" folder, which holds the following files:")]),a("pre",{pre:!0,attrs:{class:"doc-code language-bash"}},[a("code",{pre:!0,attrs:{class:"doc-code__inner doc-code__inner--prerendered language-bash"}},[a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v(".")]),t._v("\n└── src/\n    └── store/\n        ├── index.js         "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# Vuex Store definition")]),t._v("\n        └── showcase         "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v('# Module "showcase"')]),t._v("\n            ├── index.js     "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# Gluing the module together")]),t._v("\n            ├── actions.js   "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# Module actions")]),t._v("\n            ├── getters.js   "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# Module getters")]),t._v("\n            ├── mutations.js "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# Module mutations")]),t._v("\n            └── state.js     "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# Module state")]),t._v("\n")])]),a("p",[t._v("We’ve created the new Vuex Module, but we haven’t yet informed Vuex to use it. So we edit "),a("code",{staticClass:"doc-token"},[t._v("/src/store/index.js")]),t._v(" and add a reference to it:")]),a("pre",{pre:!0,attrs:{class:"doc-code language-js"}},[a("code",{pre:!0,attrs:{class:"doc-code__inner doc-code__inner--prerendered language-js"}},[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" Vue "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'vue'")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" Vuex "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'vuex'")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// we first import the module")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" showcase "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'./showcase'")]),t._v("\n\nVue"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("use")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("Vuex"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("export")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("default")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/* { ssrContext } */")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" Store "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Vuex"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Store")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    modules"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// then we reference it")]),t._v("\n      showcase\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// enable strict mode (adds overhead!)")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// for dev mode only")]),t._v("\n    strict"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" process"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("env"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token constant"}},[t._v("DEV")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n  "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/*\n    if we want some HMR magic for it, we handle\n    the hot update like below. Notice we guard this\n    code with \"process.env.DEV\" -- so this doesn't\n    get into our production build (and it shouldn't).\n  */")]),t._v("\n\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("process"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("env"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token constant"}},[t._v("DEV")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("&&")]),t._v(" module"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("hot"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    module"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("hot"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("accept")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'./showcase'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" newShowcase "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("require")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'./showcase'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("default\n      Store"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("hotUpdate")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" modules"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" showcase"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" newShowcase "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" Store\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])]),a("p",[t._v("Now we can use this Vuex Module in our Vue files. Here is a quick example. Assume we configured "),a("code",{staticClass:"doc-token"},[t._v("drawerState")]),t._v(" in the state and added "),a("code",{staticClass:"doc-token"},[t._v("updateDrawerState")]),t._v(" mutation.")]),a("pre",{pre:!0,attrs:{class:"doc-code language-js"}},[a("code",{pre:!0,attrs:{class:"doc-code__inner doc-code__inner--prerendered language-js"}},[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// src/store/showcase/mutations.js")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("export")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function-variable function"}},[t._v("updateDrawerState")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("state"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" opened")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  state"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("drawerState "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" opened\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// src/store/showcase/state.js")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Always use a function to return state if you use SSR")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("export")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("default")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    drawerState"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])]),a("p",[t._v("In a Vue file:")]),a("pre",{pre:!0,attrs:{class:"doc-code language-html"}},[a("code",{pre:!0,attrs:{class:"doc-code__inner doc-code__inner--prerendered language-html"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("template")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("div")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("q-toggle")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("v-model")]),a("span",{pre:!0,attrs:{class:"token attr-value"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("drawerState"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("/>")])]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("div")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("template")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("script")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),a("span",{pre:!0,attrs:{class:"token script"}},[a("span",{pre:!0,attrs:{class:"token language-javascript"}},[t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("export")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("default")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  computed"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    drawerState"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("get")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("$store"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("state"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("showcase"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("drawerState\n      "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("set")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("val"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("$store"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("commit")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'showcase/updateDrawerState'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" val"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])]),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("script")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])]),a("h2",{staticClass:"doc-heading doc-h2",attrs:{id:"Store-Code-Splitting"},on:{click:function(s){return t.copyHeading("Store-Code-Splitting")}}},[t._v("Store Code Splitting")]),a("p",[t._v("You can take advantage of the "),a("doc-link",{attrs:{to:"/quasar-cli/prefetch-feature#Store-Code-Splitting"}},[t._v("PreFetch Feature")]),t._v(" to code-split Vuex modules.")],1)])},n=[],o=a("8669");const r="App Vuex Store | Quasar Framework",p="How to manage the Vuex Store in a Quasar App.";var c={meta:{title:"App Vuex Store",meta:{title:{name:"title",content:r},ogTitle:{name:"og:title",content:r},twitterTitle:{name:"twitter:title",content:r},description:{name:"description",content:p},ogDesc:{name:"og:description",content:p},twitterDesc:{name:"twitter:description",content:p}}},created(){this.$root.store.toc=[{id:"Adding-a-Vuex-Module.",title:"Adding a Vuex Module."},{id:"Store-Code-Splitting",title:"Store Code Splitting"}],this.nav=[{name:"Handling process.env",category:"Quasar CLI",path:"/quasar-cli/handling-process-env",dir:"left"},{name:"Linter",category:"Quasar CLI",path:"/quasar-cli/linter",dir:"right"}]},methods:{copyHeading:o["a"]}},v=c,_=a("2877"),u=Object(_["a"])(v,e,n,!1,null,null,null);s["default"]=u.exports}}]);