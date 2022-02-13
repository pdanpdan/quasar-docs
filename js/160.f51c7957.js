(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[160],{f66d:function(t,s,e){"use strict";e.r(s);var n=function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("doc-page",{attrs:{"meta-title":t.metaTitle,title:"Supporting TypeScript",related:t.related,nav:t.nav,badge:t.badge,toc:t.toc,"meta-desc":t.metaDesc}},[e("p",[t._v("The Typescript support is not added by default to your project (unless you selected TS when you created your project folder), but it can be easily integrated by following the guide on this page.")]),e("div",{staticClass:"doc-note doc-note--tip"},[e("p",{staticClass:"doc-note__title"},[t._v("TIP")]),e("p",[t._v("The following steps are only required when you "),e("strong",[t._v("have not")]),t._v(" selected TypeScript support when creating a fresh Quasar project. If you selected the TS option on project creation, TypeScript support is already enabled.")])]),e("h2",{staticClass:"doc-heading doc-h2",attrs:{id:"installation-of-typescript-support"},on:{click:function(s){return t.copyHeading("installation-of-typescript-support")}}},[t._v("Installation of TypeScript Support")]),e("p",[t._v("In order to support TypeScript, you’ll need to edit "),e("code",{staticClass:"doc-token"},[t._v("/quasar.conf.js")]),t._v(":")]),e("pre",{pre:!0,attrs:{class:"doc-code language-js"}},[e("code",{pre:!0,attrs:{class:"doc-code__inner doc-code__inner--prerendered language-js"}},[t._v("module"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token function-variable function"}},[t._v("exports")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("ctx")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("supportTS")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("...")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])]),e("p",[t._v("Then create "),e("code",{staticClass:"doc-token"},[t._v("/tsconfig.json")]),t._v(" file at the root of you project with this content:")]),e("pre",{pre:!0,attrs:{class:"doc-code language-json"}},[e("code",{pre:!0,attrs:{class:"doc-code__inner doc-code__inner--prerendered language-json"}},[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token property"}},[t._v('"extends"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"@quasar/app/tsconfig-preset"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token property"}},[t._v('"compilerOptions"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token property"}},[t._v('"baseUrl"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"."')]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])]),e("p",[t._v("Now you can start using TypeScript into your project.")]),e("div",{staticClass:"doc-note doc-note--tip"},[e("p",{staticClass:"doc-note__title"},[t._v("TIP")]),e("p",[t._v("Remember that you must change the extension of your JavaScript files to "),e("code",{staticClass:"doc-token"},[t._v(".ts")]),t._v(" to be allowed to write TypeScript code inside them. To write TS code into your components, instead, change the script opening tag like so "),e("code",{staticClass:"doc-token"},[t._v('<script lang="ts">')]),t._v(".")])]),e("div",{staticClass:"doc-note doc-note--warning"},[e("p",{staticClass:"doc-note__title"},[t._v("WARNING")]),e("p",[t._v("If you enable the "),e("code",{staticClass:"doc-token"},[t._v("supportTS")]),t._v(" flag but fail to add the "),e("code",{staticClass:"doc-token"},[t._v("tsconfig.json")]),t._v(" file, the application will break at compile time!")])]),e("h2",{staticClass:"doc-heading doc-h2",attrs:{id:"handling-ts-webpack-loaders"},on:{click:function(s){return t.copyHeading("handling-ts-webpack-loaders")}}},[t._v("Handling TS Webpack loaders")]),e("p",[t._v("Behind the curtains, Quasar uses "),e("code",{staticClass:"doc-token"},[t._v("ts-loader")]),t._v(" and "),e("code",{staticClass:"doc-token"},[t._v("fork-ts-checker-webpack-plugin")]),t._v(" (provided by "),e("code",{staticClass:"doc-token"},[t._v("@quasar/app")]),t._v(" package) to manage TS files. If you ever need to provide a custom configuration for these libs you can do so by making "),e("code",{staticClass:"doc-token"},[t._v("supportTS")]),t._v(" property like so:")]),e("pre",{pre:!0,attrs:{class:"doc-code language-js"}},[e("code",{pre:!0,attrs:{class:"doc-code__inner doc-code__inner--prerendered language-js"}},[e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// quasar.conf.js")]),t._v("\nmodule"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token function-variable function"}},[t._v("exports")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("ctx")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("supportTS")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      "),e("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("tsLoaderConfig")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// `appendTsSuffixTo: [/\\.vue$/]` and `transpileOnly: true` are added by default and cannot be overridden")]),t._v("\n        "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("...")]),t._v("\n      "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      "),e("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("tsCheckerConfig")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// `vue: true` is added by default and cannot be overridden")]),t._v("\n        "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("...")]),t._v("\n      "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("...")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])]),e("h3",{staticClass:"doc-heading doc-h3",attrs:{id:"linting-setup"},on:{click:function(s){return t.copyHeading("linting-setup")}}},[t._v("Linting setup")]),e("p",[t._v("First add needed dependencies:")]),e("pre",{pre:!0,attrs:{class:"doc-code language-bash"}},[e("code",{pre:!0,attrs:{class:"doc-code__inner doc-code__inner--prerendered language-bash"}},[t._v("$ "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("yarn")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("add")]),t._v(" --dev eslint @typescript-eslint/parser @typescript-eslint/eslint-plugin\n")])]),e("p",[t._v("Then update your ESLint configuration accordingly, like in the following example:")]),e("pre",{pre:!0,attrs:{class:"doc-code language-js"}},[e("code",{pre:!0,attrs:{class:"doc-code__inner doc-code__inner--prerendered language-js"}},[e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// .eslintrc.js")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" resolve "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("require")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'path'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\nmodule"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("exports "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// https://eslint.org/docs/user-guide/configuring#configuration-cascading-and-hierarchy")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// This option interrupts the configuration hierarchy at this file")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Remove this if you have an higher level ESLint config file (it usually happens into a monorepos)")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("root")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n\n  "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// https://eslint.vuejs.org/user-guide/#how-to-use-a-custom-parser")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v('// Must use parserOptions instead of "parser" to allow vue-eslint-parser to keep working')]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// `parser: 'vue-eslint-parser'` is already included with any 'plugin:vue/**' config and should be omitted")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("parserOptions")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// https://github.com/typescript-eslint/typescript-eslint/tree/master/packages/parser#configuration")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// https://github.com/TypeStrong/fork-ts-checker-webpack-plugin#eslint")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Needed to make the parser take into account 'vue' files")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("extraFileExtensions")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'.vue'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("parser")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'@typescript-eslint/parser'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("project")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("resolve")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("__dirname"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'./tsconfig.json'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("tsconfigRootDir")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" __dirname"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("ecmaVersion")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("2018")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Allows for the parsing of modern ECMAScript features")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("sourceType")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'module'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Allows for the use of imports")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n\n  "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Rules order is important, please avoid shuffling them")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("extends")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Base ESLint recommended rules")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'eslint:recommended'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n\n    "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// https://github.com/typescript-eslint/typescript-eslint/tree/master/packages/eslint-plugin#usage")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// ESLint typescript rules")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'plugin:@typescript-eslint/eslint-recommended'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'plugin:@typescript-eslint/recommended'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// consider disabling this class of rules if linting takes too long")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'plugin:@typescript-eslint/recommended-requiring-type-checking'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n\n    "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// https://eslint.vuejs.org/rules/#priority-a-essential-error-prevention-for-vue-js-2-x")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// consider switching to `plugin:vue/strongly-recommended` or `plugin:vue/recommended` for stricter rules")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'plugin:vue/essential'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n\n    "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// --- ONLY WHEN USING PRETTIER ---")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// https://github.com/prettier/eslint-config-prettier#installation")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// usage with Prettier, provided by 'eslint-config-prettier'.")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'prettier'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'prettier/@typescript-eslint'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'prettier/vue'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n\n  "),e("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("plugins")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// required to apply rules which need type information")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'@typescript-eslint'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n\n    "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// https://eslint.vuejs.org/user-guide/#why-doesn-t-it-work-on-vue-files")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// required to lint *.vue files")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'vue'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n\n  "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// add your custom rules here")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("rules")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// others rules...")]),t._v("\n\n    "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// TypeScript")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token string-property property"}},[t._v("'quotes'")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'warn'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'single'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token string-property property"}},[t._v("'@typescript-eslint/explicit-function-return-type'")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'off'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])]),e("p",[t._v("If anything goes wrong, read the "),e("doc-link",{attrs:{to:"https://github.com/typescript-eslint/typescript-eslint/blob/master/docs/getting-started/linting/README.md"}},[t._v("typescript-eslint guide")]),t._v(", on which this example is based.")],1),e("p",[t._v("As a last step, update your "),e("code",{staticClass:"doc-token"},[t._v("yarn lint")]),t._v(" command to also lint "),e("code",{staticClass:"doc-token"},[t._v(".ts")]),t._v(" files.")]),e("div",{staticClass:"doc-note doc-note--tip"},[e("p",{staticClass:"doc-note__title"},[t._v("TIP")]),e("p",[t._v("TypeScript Linting is really slow due to type-checking overhead, we suggest you to disable Webpack lint extension into "),e("code",{staticClass:"doc-token"},[t._v("quasar.conf.js")]),t._v(" for dev builds.")])]),e("p",[t._v("If you setup TypeScript linting and want "),e("code",{staticClass:"doc-token"},[t._v("fork-ts-checker-webpack-plugin")]),t._v(" (provided by "),e("code",{staticClass:"doc-token"},[t._v("@quasar/app")]),t._v(" package) to take it into account then you should make use of "),e("code",{staticClass:"doc-token"},[t._v("tsCheckerConfig")]),t._v(" property:")]),e("pre",{pre:!0,attrs:{class:"doc-code language-js"}},[e("code",{pre:!0,attrs:{class:"doc-code__inner doc-code__inner--prerendered language-js"}},[e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// quasar.conf.js")]),t._v("\nmodule"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token function-variable function"}},[t._v("exports")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("ctx")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("supportTS")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      "),e("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("tsCheckerConfig")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),e("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("eslint")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),t._v("\n      "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("...")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])},a=[],r=e("8669"),p={name:"DocMarkdownPage",created:function(){this.metaTitle="Supporting TypeScript",this.metaDesc="How to enable support for TypeScript in a Quasar app.",this.related=[{name:"quasar.conf.js",category:"Quasar CLI",path:"/quasar-cli/quasar-conf-js"}],this.nav=[{name:"Browser Compatibility",category:"Quasar CLI",path:"/quasar-cli/browser-compatibility",dir:"left"},{name:"Directory Structure",category:"Quasar CLI",path:"/quasar-cli/directory-structure",dir:"right"}],this.badge="@quasar/app v1.6+",this.toc=[{id:"installation-of-typescript-support",title:"Installation of TypeScript Support"},{id:"handling-ts-webpack-loaders",title:"Handling TS Webpack loaders"},{id:"linting-setup",title:"Linting setup",sub:!0}],this.copyHeading=r["a"]}},o=p,c=e("2877"),i=Object(c["a"])(o,n,a,!1,null,null,null);s["default"]=i.exports}}]);