(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[148],{"3a2b":function(t,s,a){"use strict";a.r(s);var n=function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("doc-page",{attrs:{title:"Handling Webpack",related:t.related,nav:t.nav}},[a("p",[t._v("The build system uses Webpack to create your website/app. Don’t worry if you aren’t acquainted with Webpack. Out of the box, you won’t need to configure it because it already has everything set up.")]),a("h2",{staticClass:"doc-heading doc-h2",attrs:{id:"Usage-with-quasar.conf.js"},on:{click:function(s){return t.copyHeading("Usage-with-quasar.conf.js")}}},[t._v("Usage with quasar.conf.js")]),a("p",[t._v("For cases where you need to tweak the default Webpack config you can do so by editing "),a("code",{staticClass:"doc-token"},[t._v("/quasar.conf.js")]),t._v(" and configuring "),a("code",{staticClass:"doc-token"},[t._v("build > extendWebpack (cfg)")]),t._v(" method or "),a("code",{staticClass:"doc-token"},[t._v("build > chainWebpack (chain)")]),t._v(".")]),a("p",[t._v("Example of adding ESLint loader to Webpack (assuming you’ve installed it):")]),a("pre",{pre:!0,attrs:{class:"doc-code language-js"}},[a("code",{pre:!0,attrs:{class:"doc-code__inner doc-code__inner--prerendered language-js"}},[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// quasar.conf.js")]),t._v("\nbuild"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("extendWebpack")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("cfg"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" isServer"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" isClient "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    cfg"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("module"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("rules"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("push")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      enforce"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'pre'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      test"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token regex"}},[a("span",{pre:!0,attrs:{class:"token regex-delimiter"}},[t._v("/")]),a("span",{pre:!0,attrs:{class:"token regex-source language-regex"}},[t._v("\\.(js|vue)$")]),a("span",{pre:!0,attrs:{class:"token regex-delimiter"}},[t._v("/")])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      loader"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'eslint-loader'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      exclude"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token regex"}},[a("span",{pre:!0,attrs:{class:"token regex-delimiter"}},[t._v("/")]),a("span",{pre:!0,attrs:{class:"token regex-source language-regex"}},[t._v("(node_modules|quasar)")]),a("span",{pre:!0,attrs:{class:"token regex-delimiter"}},[t._v("/")])]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])]),a("p",[t._v("Notice that you don’t need to return anything. The parameter of extendWebpack(cfg) is the Webpack configuration Object generated by Quasar for you. You can add/remove/replace anything from it, assuming you really know what you are doing.")]),a("p",[t._v("Equivalent quasar.conf for chainWebpack():")]),a("pre",{pre:!0,attrs:{class:"doc-code language-js"}},[a("code",{pre:!0,attrs:{class:"doc-code__inner doc-code__inner--prerendered language-js"}},[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// quasar.conf.js")]),t._v("\nbuild"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("chainWebpack")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("chain"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" isServer"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" isClient "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    chain"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("module"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("rule")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'eslint'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("test")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token regex"}},[a("span",{pre:!0,attrs:{class:"token regex-delimiter"}},[t._v("/")]),a("span",{pre:!0,attrs:{class:"token regex-source language-regex"}},[t._v("\\.(js|vue)$")]),a("span",{pre:!0,attrs:{class:"token regex-delimiter"}},[t._v("/")])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("enforce")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'pre'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("exclude\n        "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("add")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token regex"}},[a("span",{pre:!0,attrs:{class:"token regex-delimiter"}},[t._v("/")]),a("span",{pre:!0,attrs:{class:"token regex-source language-regex"}},[t._v("[\\\\/]node_modules[\\\\/]")]),a("span",{pre:!0,attrs:{class:"token regex-delimiter"}},[t._v("/")])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("end")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("use")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'eslint-loader'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("loader")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'eslint-loader'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])]),a("div",{staticClass:"doc-note doc-note--tip"},[a("p",{staticClass:"doc-note__title"},[t._v("TIP")]),a("p",[t._v("The method "),a("code",{staticClass:"doc-token"},[t._v("chainWebpack()")]),t._v(" supplies a "),a("doc-link",{attrs:{to:"https://github.com/neutrinojs/webpack-chain"}},[t._v("webpack-chain")]),t._v(" Object. You might want to check its documentation page.")],1)]),a("div",{staticClass:"doc-note doc-note--warning"},[a("p",{staticClass:"doc-note__title"},[t._v("WARNING")]),a("p",[a("code",{staticClass:"doc-token"},[t._v("chainWebpack()")]),t._v(" gets executed "),a("strong",[t._v("before")]),a("code",{staticClass:"doc-token"},[t._v("extendWebpack()")]),t._v(".")]),a("p",[t._v("The two examples above are equivalent. Do NOT use both methods to tamper for the same thing!")])]),a("h2",{staticClass:"doc-heading doc-h2",attrs:{id:"Inspecting-Webpack-Config"},on:{click:function(s){return t.copyHeading("Inspecting-Webpack-Config")}}},[t._v("Inspecting Webpack Config")]),a("p",[t._v("Quasar CLI offers a useful command for this:")]),a("pre",{pre:!0,attrs:{class:"doc-code language-bash"}},[a("code",{pre:!0,attrs:{class:"doc-code__inner doc-code__inner--prerendered language-bash"}},[t._v("$ quasar inspect -h\n\n  Description\n    Inspect Quasar generated Webpack config\n\n  Usage\n    $ quasar inspect\n    $ quasar inspect -c build\n    $ quasar inspect -m electron -p "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'module.rules'")]),t._v("\n\n  Options\n    --cmd, -c        Quasar "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("command")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("dev"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v("build"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("default: dev"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    --mode, -m       App mode "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("spa"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v("ssr"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v("pwa"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v("cordova"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v("electron"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("default: spa"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    --depth, -d      Number of levels deep "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("default: "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("5")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    --path, -p       Path of config "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("in")]),t._v(" dot notation\n                        Examples:\n                          -p module.rules\n                          -p plugins\n    --help, -h       Displays this message\n")])]),a("h2",{staticClass:"doc-heading doc-h2",attrs:{id:"Webpack-Aliases"},on:{click:function(s){return t.copyHeading("Webpack-Aliases")}}},[t._v("Webpack Aliases")]),a("p",[t._v("Quasar comes with a bunch of useful Webpack aliases preconfigured. You can use them anywhere in your project and webpack will resolve the correct path.")]),a("q-markup-table",{staticStyle:{width:"fit-content","max-width":"100%"},attrs:{"wrap-cells":!0,flat:!0,bordered:!0}},[a("thead",[a("tr",[a("th",{staticClass:"text-left"},[t._v("Alias")]),a("th",{staticClass:"text-left"},[t._v("Resolves to")])])]),a("tbody",[a("tr",[a("td",[a("code",{staticClass:"doc-token"},[t._v("src")])]),a("td",[t._v("/src")])]),a("tr",[a("td",[a("code",{staticClass:"doc-token"},[t._v("app")])]),a("td",[t._v("/")])]),a("tr",[a("td",[a("code",{staticClass:"doc-token"},[t._v("components")])]),a("td",[t._v("/src/components")])]),a("tr",[a("td",[a("code",{staticClass:"doc-token"},[t._v("layouts")])]),a("td",[t._v("/src/layouts")])]),a("tr",[a("td",[a("code",{staticClass:"doc-token"},[t._v("pages")])]),a("td",[t._v("/src/pages")])]),a("tr",[a("td",[a("code",{staticClass:"doc-token"},[t._v("assets")])]),a("td",[t._v("/src/assets")])]),a("tr",[a("td",[a("code",{staticClass:"doc-token"},[t._v("boot")])]),a("td",[t._v("/src/boot")])])])]),a("p",[t._v("Also if you configure to build with the Vue compiler version (quasar.conf > build > vueCompiler: true), "),a("code",{staticClass:"doc-token"},[t._v("vue$")]),t._v(" resolves to  "),a("code",{staticClass:"doc-token"},[t._v("vue/dist/vue.esm.js")]),t._v(".")]),a("h3",{staticClass:"doc-heading doc-h3",attrs:{id:"Adding-Webpack-aliases"},on:{click:function(s){return t.copyHeading("Adding-Webpack-aliases")}}},[t._v("Adding Webpack aliases")]),a("p",[t._v("To add your own alias you can extend the webpack config and merge it with the existing alias.\nUse the "),a("code",{staticClass:"doc-token"},[t._v("path.resolve")]),t._v(" helper to resolve the path to your intended alias.")]),a("pre",{pre:!0,attrs:{class:"doc-code language-js"}},[a("code",{pre:!0,attrs:{class:"doc-code__inner doc-code__inner--prerendered language-js"}},[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// quasar.conf.js")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" path "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("require")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'path'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\nmodule"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function-variable function"}},[t._v("exports")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("ctx")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    build"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("extendWebpack")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("cfg"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" isServer"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" isClient "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        cfg"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("resolve"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("alias "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n          "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("...")]),t._v("cfg"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("resolve"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("alias"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// This adds the existing alias")]),t._v("\n\n          "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Add your own alias like this")]),t._v("\n          myalias"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" path"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("resolve")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("__dirname"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'./src/somefolder'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])]),a("p",[t._v("Equivalent with chainWebpack():")]),a("pre",{pre:!0,attrs:{class:"doc-code language-js"}},[a("code",{pre:!0,attrs:{class:"doc-code__inner doc-code__inner--prerendered language-js"}},[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// quasar.conf.js")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" path "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("require")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'path'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\nmodule"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function-variable function"}},[t._v("exports")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("ctx")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    build"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("chainWebpack")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("chain"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" isServer"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" isClient "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        chain"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("resolve"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("alias\n          "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("set")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'myalias'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" path"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("resolve")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("__dirname"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'./src/somefolder'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])]),a("h2",{staticClass:"doc-heading doc-h2",attrs:{id:"Webpack-loaders"},on:{click:function(s){return t.copyHeading("Webpack-loaders")}}},[t._v("Webpack loaders")]),a("p",[t._v("The build system uses Webpack, so it relies on using webpack loaders to handle different types of files (js, css, styl, scss, json, and so on). By default, the most used loaders are provided by default.")]),a("h3",{staticClass:"doc-heading doc-h3",attrs:{id:"Installing-loaders"},on:{click:function(s){return t.copyHeading("Installing-loaders")}}},[t._v("Installing loaders")]),a("p",[t._v("Let’s take an example. You want to be able to import "),a("code",{staticClass:"doc-token"},[t._v(".json")]),t._v(" files. "),a("strong",[t._v("Out of the box, Quasar supplies json support so you don’t actually need to follow these steps, but for the sake of demonstrating how to add a loader, we’ll pretend Quasar doesn’t offer it.")])]),a("p",[t._v("So, you need a loader for it. You search Google to see what webpack loader you need. In this case, it’s “json-loader”. We first install it:")]),a("pre",{pre:!0,attrs:{class:"doc-code language-bash"}},[a("code",{pre:!0,attrs:{class:"doc-code__inner doc-code__inner--prerendered language-bash"}},[t._v("$ "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("yarn")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("add")]),t._v(" --dev json-loader\n")])]),a("p",[t._v("After installing your new loader, we want to tell Webpack to use it. So we edit "),a("code",{staticClass:"doc-token"},[t._v("/quasar.conf.js")]),t._v(" and change "),a("code",{staticClass:"doc-token"},[t._v("build.extendWebpack()")]),t._v(" to add entries to "),a("code",{staticClass:"doc-token"},[t._v("module/rules")]),t._v(" for this new loader:")]),a("pre",{pre:!0,attrs:{class:"doc-code language-js"}},[a("code",{pre:!0,attrs:{class:"doc-code__inner doc-code__inner--prerendered language-js"}},[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// quasar.conf")]),t._v("\nbuild"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("extendWebpack")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("cfg")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    cfg"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("module"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("rules"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("push")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      test"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token regex"}},[a("span",{pre:!0,attrs:{class:"token regex-delimiter"}},[t._v("/")]),a("span",{pre:!0,attrs:{class:"token regex-source language-regex"}},[t._v("\\.json$")]),a("span",{pre:!0,attrs:{class:"token regex-delimiter"}},[t._v("/")])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      loader"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'json-loader'")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])]),a("p",[t._v("Equivalent with chainWebpack():")]),a("pre",{pre:!0,attrs:{class:"doc-code language-js"}},[a("code",{pre:!0,attrs:{class:"doc-code__inner doc-code__inner--prerendered language-js"}},[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// quasar.conf")]),t._v("\nbuild"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("chainWebpack")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("chain")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    chain"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("module"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("rule")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'json'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("test")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token regex"}},[a("span",{pre:!0,attrs:{class:"token regex-delimiter"}},[t._v("/")]),a("span",{pre:!0,attrs:{class:"token regex-source language-regex"}},[t._v("\\.json$")]),a("span",{pre:!0,attrs:{class:"token regex-delimiter"}},[t._v("/")])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("use")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'json-loader'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("loader")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'json-loader'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])]),a("p",[t._v("And you’re done.")]),a("h3",{staticClass:"doc-heading doc-h3",attrs:{id:"PostCSS"},on:{click:function(s){return t.copyHeading("PostCSS")}}},[t._v("PostCSS")]),a("p",[t._v("Styles in "),a("code",{staticClass:"doc-token"},[t._v("*.vue")]),t._v(" files (and all other style files) are piped through PostCSS by default, so you don’t need to use a specific loader for it.")]),a("p",[t._v("By default, PostCSS is configured to use Autoprefixer. Take a look at "),a("code",{staticClass:"doc-token"},[t._v("/.postcssrc.js")]),t._v(" where you can tweak it if you need to.")]),a("h3",{staticClass:"doc-heading doc-h3",attrs:{id:"Pug"},on:{click:function(s){return t.copyHeading("Pug")}}},[t._v("Pug")]),a("p",[t._v("First, you need to install some dependencies:")]),a("pre",{pre:!0,attrs:{class:"doc-code language-bash"}},[a("code",{pre:!0,attrs:{class:"doc-code__inner doc-code__inner--prerendered language-bash"}},[t._v("$ "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("yarn")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("add")]),t._v(" --dev pug pug-plain-loader\n")])]),a("p",[t._v("Then you need to extend the webpack configuration through quasar.conf.js:")]),a("pre",{pre:!0,attrs:{class:"doc-code language-js"}},[a("code",{pre:!0,attrs:{class:"doc-code__inner doc-code__inner--prerendered language-js"}},[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// quasar.conf.js")]),t._v("\nbuild"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("extendWebpack")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("cfg")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    cfg"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("module"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("rules"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("push")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      test"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token regex"}},[a("span",{pre:!0,attrs:{class:"token regex-delimiter"}},[t._v("/")]),a("span",{pre:!0,attrs:{class:"token regex-source language-regex"}},[t._v("\\.pug$")]),a("span",{pre:!0,attrs:{class:"token regex-delimiter"}},[t._v("/")])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      loader"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'pug-plain-loader'")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])]),a("p",[t._v("Equivalent with chainWebpack():")]),a("pre",{pre:!0,attrs:{class:"doc-code language-js"}},[a("code",{pre:!0,attrs:{class:"doc-code__inner doc-code__inner--prerendered language-js"}},[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// quasar.conf.js")]),t._v("\nbuild"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("chainWebpack")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("chain")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    chain"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("module"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("rule")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'pug'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("test")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token regex"}},[a("span",{pre:!0,attrs:{class:"token regex-delimiter"}},[t._v("/")]),a("span",{pre:!0,attrs:{class:"token regex-source language-regex"}},[t._v("\\.pug$")]),a("span",{pre:!0,attrs:{class:"token regex-delimiter"}},[t._v("/")])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("use")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'pug-plain-loader'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("loader")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'pug-plain-loader'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])]),a("h3",{staticClass:"doc-heading doc-h3",attrs:{id:"Coffeescript"},on:{click:function(s){return t.copyHeading("Coffeescript")}}},[t._v("Coffeescript")]),a("p",[t._v("If you are using Coffeescript then you need to EITHER disable ESLint OR tell ESLint which Vue components are using Coffeescript.")]),a("p",[t._v("Note that "),a("code",{staticClass:"doc-token"},[t._v("vue-loader")]),t._v(" uses "),a("code",{staticClass:"doc-token"},[t._v('lang="coffee"')]),t._v(" to identify components which are using Coffeescript, but "),a("code",{staticClass:"doc-token"},[t._v('lang="coffee"')]),t._v(" is not recognizable for ESLint. Fortunately, ESLint (following traditional HTML) uses "),a("code",{staticClass:"doc-token"},[t._v('type="xxx"')]),t._v(" to identify the type of scripts. As long as a "),a("code",{staticClass:"doc-token"},[t._v("<script>")]),t._v(" tag has any "),a("code",{staticClass:"doc-token"},[t._v("type")]),t._v(" other than "),a("code",{staticClass:"doc-token"},[t._v("javascript")]),t._v(", ESLint would mark the script as non-javascript, and skips linting it. Coffeescript’s convention is to use "),a("code",{staticClass:"doc-token"},[t._v('type="text/coffeescript"')]),t._v(" to identify itself. Therefore, in your Vue components which are using Coffeescript, using both "),a("code",{staticClass:"doc-token"},[t._v("lang")]),t._v(" and "),a("code",{staticClass:"doc-token"},[t._v("type")]),t._v(" to avoid ESLint warnings:")]),a("pre",{pre:!0,attrs:{class:"doc-code language-html"}},[a("code",{pre:!0,attrs:{class:"doc-code__inner doc-code__inner--prerendered language-html"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("template")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n  ...\n"),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("template")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("script")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("lang")]),a("span",{pre:!0,attrs:{class:"token attr-value"}},[a("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("coffee"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),a("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("type")]),a("span",{pre:!0,attrs:{class:"token attr-value"}},[a("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("text/coffeescript"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),a("span",{pre:!0,attrs:{class:"token script"}},[a("span",{pre:!0,attrs:{class:"token language-javascript"}},[t._v("\n  "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("...")]),t._v("\n")])]),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("script")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])])],1)},e=[],r=a("8669"),o="Handling Webpack | Quasar Framework",p="How to manage Webpack in a Quasar app.",c={meta:{title:"Handling Webpack",meta:{title:{name:"title",content:o},ogTitle:{name:"og:title",content:o},twitterTitle:{name:"twitter:title",content:o},description:{name:"description",content:p},ogDesc:{name:"og:description",content:p},twitterDesc:{name:"twitter:description",content:p}}},created:function(){this.$root.store.toc=[{id:"Usage-with-quasar.conf.js",title:"Usage with quasar.conf.js"},{id:"Inspecting-Webpack-Config",title:"Inspecting Webpack Config"},{id:"Webpack-Aliases",title:"Webpack Aliases"},{id:"Adding-Webpack-aliases",title:"Adding Webpack aliases",sub:!0},{id:"Webpack-loaders",title:"Webpack loaders"},{id:"Installing-loaders",title:"Installing loaders",sub:!0},{id:"PostCSS",title:"PostCSS",sub:!0},{id:"Pug",title:"Pug",sub:!0},{id:"Coffeescript",title:"Coffeescript",sub:!0}],this.related=[{name:"quasar.conf.js",category:"Quasar CLI",path:"/quasar-cli/quasar-conf-js"}],this.nav=[{name:"API Proxying",category:"Quasar CLI",path:"/quasar-cli/api-proxying",dir:"left"},{name:"Handling process.env",category:"Quasar CLI",path:"/quasar-cli/handling-process-env",dir:"right"}]},methods:{copyHeading:r["a"]}},i=c,l=a("2877"),u=Object(l["a"])(i,n,e,!1,null,null,null);s["default"]=u.exports}}]);