(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[185],{ce5f:function(t,a,s){"use strict";s.r(a);var e=function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("doc-page",{attrs:{title:"Quasar UMD - CDN install",nav:t.nav}},[s("p",[t._v("If you want to embed Quasar into your existing website project, integrating it in a progressive manner, then go for the UMD/Standalone (Unified Module Definition) version.")]),s("h2",{staticClass:"doc-heading doc-h2",attrs:{id:"Installation"},on:{click:function(a){return t.copyHeading("Installation")}}},[t._v("Installation")]),s("p",[t._v("UMD is all about adding Quasar style and javascript tags. Please select what you will be using and check out the output below it.")]),s("umd-tags"),s("div",{staticClass:"doc-note doc-note--warning"},[s("p",{staticClass:"doc-note__title"},[t._v("WARNING")]),s("ul",[s("li",[t._v("Please notice the "),s("code",{staticClass:"doc-token"},[t._v("<!DOCTYPE html>")]),t._v(" at the beginning of the document. Do not forget to add it, or else some browsers (notably Safari) will use some compatibility mode that breaks flex.")]),s("li",[t._v("If you are using an RTL Quasar language pack (eg. Hebrew) then toggle the “RTL CSS support” above too!")]),s("li",[t._v("Do NOT use self-closing tags, like "),s("code",{staticClass:"doc-token"},[t._v("<q-icon ... />")]),t._v(". Instead, go with "),s("code",{staticClass:"doc-token"},[t._v("<q-icon ...></q-icon>")]),t._v(".")])])]),s("div",{staticClass:"doc-note doc-note--tip"},[s("p",{staticClass:"doc-note__title"},[t._v("TIP")]),s("p",[t._v("All components, directives and Quasar plugins are ready to be used out of the box. There is no need for additional code to install them. Just make sure that you will NOT be using self-closing tags.")])]),s("h2",{staticClass:"doc-heading doc-h2",attrs:{id:"JsFiddle-%2F-Codepen"},on:{click:function(a){return t.copyHeading("JsFiddle-%2F-Codepen")}}},[t._v("JsFiddle / Codepen")]),s("p",[t._v("You can fork and use these links for reporting issues on GitHub too:")]),s("q-markup-table",{staticStyle:{width:"fit-content","max-width":"100%"},attrs:{"wrap-cells":!0,flat:!0,bordered:!0}},[s("thead",[s("tr",[s("th",{staticClass:"text-left"},[t._v("Supplier")]),s("th",{staticClass:"text-left"},[t._v("URL")])])]),s("tbody",[s("tr",[s("td",[t._v("jsFiddle")]),s("td",[s("doc-link",{attrs:{to:"https://jsfiddle.quasar.dev"}},[t._v("https://jsfiddle.quasar.dev")])],1)]),s("tr",[s("td",[t._v("Codepen")]),s("td",[s("doc-link",{attrs:{to:"https://codepen.quasar.dev"}},[t._v("https://codepen.quasar.dev")])],1)])])]),s("p",[t._v("These links (obviously) use the Quasar UMD version.")]),s("h2",{staticClass:"doc-heading doc-h2",attrs:{id:"Quasar-Global-Object"},on:{click:function(a){return t.copyHeading("Quasar-Global-Object")}}},[t._v("Quasar Global Object")]),s("p",[t._v("When you embed Quasar UMD into a webpage you’ll get a "),s("code",{staticClass:"doc-token"},[t._v("Quasar")]),t._v(" global Object injected:")]),s("pre",{pre:!0,attrs:{class:"doc-code language-js"}},[s("code",{pre:!0,attrs:{class:"doc-code__inner doc-code__inner--prerendered language-js"}},[t._v("Quasar "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  version"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Quasar version")]),t._v("\n\n  plugins"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Quasar plugins")]),t._v("\n  utils"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Quasar utils")]),t._v("\n\n  "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// if you want to extend Quasar's components or directives")]),t._v("\n  components"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  directives"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n\n  "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// if you want to change current icon set or Quasar Language pack")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// (must include CDN links so they are available first!)")]),t._v("\n  lang"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  iconSet\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])]),s("h2",{staticClass:"doc-heading doc-h2",attrs:{id:"Init-Configuration"},on:{click:function(a){return t.copyHeading("Init-Configuration")}}},[t._v("Init Configuration")]),s("p",[t._v("There are some configuration options for Quasar & Quasar plugins. For the Quasar UMD version you can define the following before including the Quasar script tag:")]),s("pre",{pre:!0,attrs:{class:"doc-code language-html"}},[s("code",{pre:!0,attrs:{class:"doc-code__inner doc-code__inner--prerendered language-html"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("script")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),s("span",{pre:!0,attrs:{class:"token script"}},[s("span",{pre:!0,attrs:{class:"token language-javascript"}},[t._v("\n  "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// optional")]),t._v("\n  window"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("quasarConfig "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    brand"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// this will NOT work on IE 11")]),t._v("\n      primary"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'#e46262'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// ... or all other brand colors")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    notify"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("...")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// default set of options for Notify Quasar plugin")]),t._v("\n    loading"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("...")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// default set of options for Loading Quasar plugin")]),t._v("\n    loadingBar"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("...")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// settings for LoadingBar Quasar plugin")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// ..and many more")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])]),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("script")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])]),s("h2",{staticClass:"doc-heading doc-h2",attrs:{id:"Usage"},on:{click:function(a){return t.copyHeading("Usage")}}},[t._v("Usage")]),s("p",[t._v("So, after you figured out the CDN links that you need to embed into your webpages (hopefully you’ve inspected the project folder created by UMD demo kit), now it’s time to use Quasar.")]),s("div",{staticClass:"doc-note doc-note--tip"},[s("p",{staticClass:"doc-note__title"},[t._v("TIP")]),s("p",[t._v("You’ll notice that all the Quasar Components, Quasar Directives and Quasar Plugins have an installation section at the top of their pages.")])]),s("p",[t._v("By using the UMD version, you’ll have all of the components, directives and Quasar plugins already installed for you. You just need to start using them.")]),s("p",[s("strong",[t._v("Do not use self-closing tags with the UMD version:")]),t._v("\nYou will notice that you won’t be able to use the self-closing tag form of any of the components. You must close all components tags.")]),s("pre",{pre:!0,attrs:{class:"doc-code language-html"}},[s("code",{pre:!0,attrs:{class:"doc-code__inner doc-code__inner--prerendered language-html"}},[s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("\x3c!-- In docs, but for Quasar CLI usage --\x3e")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("q-btn")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("label")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("My Button"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("/>")])]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("\x3c!-- ^^^ can't use it like this on UMD --\x3e")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("\x3c!-- Instead, include a self-closing tag too: --\x3e")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("q-btn")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("label")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("My Button"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("q-btn")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])]),s("h3",{staticClass:"doc-heading doc-h3",attrs:{id:"Quasar-Components"},on:{click:function(a){return t.copyHeading("Quasar-Components")}}},[t._v("Quasar Components")]),s("p",[t._v("An example. No need to install any component in UMD version.")]),s("pre",{pre:!0,attrs:{class:"doc-code language-html"}},[s("code",{pre:!0,attrs:{class:"doc-code__inner doc-code__inner--prerendered language-html"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("q-btn")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("label")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("My Button"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("q-btn")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])]),s("h3",{staticClass:"doc-heading doc-h3",attrs:{id:"Quasar-Directives"},on:{click:function(a){return t.copyHeading("Quasar-Directives")}}},[t._v("Quasar Directives")]),s("p",[t._v("An example. No need to install any directives in UMD version.")]),s("pre",{pre:!0,attrs:{class:"doc-code language-html"}},[s("code",{pre:!0,attrs:{class:"doc-code__inner doc-code__inner--prerendered language-html"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("div")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("v-ripple")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("..."),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("div")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])]),s("h3",{staticClass:"doc-heading doc-h3",attrs:{id:"Quasar-Plugins"},on:{click:function(a){return t.copyHeading("Quasar-Plugins")}}},[t._v("Quasar Plugins")]),s("p",[t._v("An example. No need to install any plugins in UMD version.")]),s("pre",{pre:!0,attrs:{class:"doc-code language-js"}},[s("code",{pre:!0,attrs:{class:"doc-code__inner doc-code__inner--prerendered language-js"}},[t._v("Quasar"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("plugins"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("bottomSheet"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("create")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("...")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])]),s("h3",{staticClass:"doc-heading doc-h3",attrs:{id:"Quasar-Utils"},on:{click:function(a){return t.copyHeading("Quasar-Utils")}}},[t._v("Quasar Utils")]),s("p",[t._v("An example.")]),s("pre",{pre:!0,attrs:{class:"doc-code language-js"}},[s("code",{pre:!0,attrs:{class:"doc-code__inner doc-code__inner--prerendered language-js"}},[t._v("Quasar"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("utils"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("openURL")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'https://quasar.dev'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])]),s("h3",{staticClass:"doc-heading doc-h3",attrs:{id:"Changing-Quasar-Icon-Set"},on:{click:function(a){return t.copyHeading("Changing-Quasar-Icon-Set")}}},[t._v("Changing Quasar Icon Set")]),s("p",[t._v("Assuming you have already included the CDN link to your favorite Quasar Icon Set (unless you’re using Material Icons which is used by default), you can then tell Quasar to use it:")]),s("pre",{pre:!0,attrs:{class:"doc-code language-js"}},[s("code",{pre:!0,attrs:{class:"doc-code__inner doc-code__inner--prerendered language-js"}},[t._v("Quasar"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("iconSet"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("set")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("Quasar"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("iconSet"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("fontawesomeV5"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])]),s("p",[t._v("The list of available "),s("doc-link",{attrs:{to:"/options/quasar-icon-sets"}},[t._v("Quasar Icon Sets")]),t._v(" can be found on "),s("doc-link",{attrs:{to:"https://github.com/quasarframework/quasar/tree/dev/ui/icon-set"}},[t._v("GitHub")]),t._v(".")],1),s("h3",{staticClass:"doc-heading doc-h3",attrs:{id:"Changing-Quasar-Language-Pack"},on:{click:function(a){return t.copyHeading("Changing-Quasar-Language-Pack")}}},[t._v("Changing Quasar Language Pack")]),s("p",[t._v("Assuming you have already included the CDN link to your desired Quasar I18n Language (unless you want “en-us” language pack which is used by default), you can then tell Quasar to use it:")]),s("pre",{pre:!0,attrs:{class:"doc-code language-js"}},[s("code",{pre:!0,attrs:{class:"doc-code__inner doc-code__inner--prerendered language-js"}},[s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// example setting German language,")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// using ISO 2 letter code:")]),t._v("\nQuasar"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("lang"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("set")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("Quasar"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("lang"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("de"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// example setting Portuguese (Brazil) language:")]),t._v("\nQuasar"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("lang"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("set")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("Quasar"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("lang"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("ptBr"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])]),s("p",[t._v("The list of available languages can be found on "),s("doc-link",{attrs:{to:"https://github.com/quasarframework/quasar/tree/dev/ui/lang"}},[t._v("GitHub")]),t._v(". "),s("strong",[t._v("If your desired language pack is not available yet, you can help by providing a PR.")]),t._v(" We welcome any languages!")],1)],1)},n=[],o=s("8669"),r=function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("q-card",{attrs:{flat:"",bordered:""}},[s("q-card-section",{staticClass:"q-gutter-xs"},[s("q-toggle",{attrs:{label:"Roboto font"},model:{value:t.css.roboto,callback:function(a){t.$set(t.css,"roboto",a)},expression:"css.roboto"}}),s("q-toggle",{attrs:{label:"Animate.css"},model:{value:t.css.animate,callback:function(a){t.$set(t.css,"animate",a)},expression:"css.animate"}})],1),s("q-separator"),s("q-card-section",{staticClass:"q-gutter-xs"},[s("q-toggle",{attrs:{label:"Material Icons"},model:{value:t.css["material-icons"],callback:function(a){t.$set(t.css,"material-icons",a)},expression:"css['material-icons']"}}),s("q-toggle",{attrs:{label:"Material Icons (Outlined)"},model:{value:t.css["material-icons-outlined"],callback:function(a){t.$set(t.css,"material-icons-outlined",a)},expression:"css['material-icons-outlined']"}}),s("q-toggle",{attrs:{label:"Material Icons (Round)"},model:{value:t.css["material-icons-round"],callback:function(a){t.$set(t.css,"material-icons-round",a)},expression:"css['material-icons-round']"}}),s("q-toggle",{attrs:{label:"Material Icons (Sharp)"},model:{value:t.css["material-icons-sharp"],callback:function(a){t.$set(t.css,"material-icons-sharp",a)},expression:"css['material-icons-sharp']"}}),s("q-toggle",{attrs:{label:"MDI v5"},model:{value:t.css["mdi-v5"],callback:function(a){t.$set(t.css,"mdi-v5",a)},expression:"css['mdi-v5']"}}),s("q-toggle",{attrs:{label:"Fontawesome v5"},model:{value:t.css["fontawesome-v5"],callback:function(a){t.$set(t.css,"fontawesome-v5",a)},expression:"css['fontawesome-v5']"}}),s("q-toggle",{attrs:{label:"Ionicons v4"},model:{value:t.css["ionicons-v4"],callback:function(a){t.$set(t.css,"ionicons-v4",a)},expression:"css['ionicons-v4']"}}),s("q-toggle",{attrs:{label:"Eva Icons"},model:{value:t.css["eva-icons"],callback:function(a){t.$set(t.css,"eva-icons",a)},expression:"css['eva-icons']"}}),s("q-toggle",{attrs:{label:"Themify"},model:{value:t.css.themify,callback:function(a){t.$set(t.css,"themify",a)},expression:"css.themify"}}),s("q-toggle",{attrs:{label:"Line Awesome"},model:{value:t.css["line-awesome"],callback:function(a){t.$set(t.css,"line-awesome",a)},expression:"css['line-awesome']"}})],1),s("q-separator"),s("q-card-section",{staticClass:"q-gutter-xs"},[s("q-toggle",{attrs:{label:"Modern (ES6+)"},model:{value:t.modern,callback:function(a){t.modern=a},expression:"modern"}}),s("q-toggle",{attrs:{label:"Quasar Configure Object"},model:{value:t.cfgObject,callback:function(a){t.cfgObject=a},expression:"cfgObject"}}),s("q-toggle",{attrs:{label:"Minified files"},model:{value:t.minified,callback:function(a){t.minified=a},expression:"minified"}}),s("q-toggle",{attrs:{label:"RTL CSS support"},model:{value:t.rtl,callback:function(a){t.rtl=a},expression:"rtl"}}),s("q-toggle",{attrs:{label:"IE11 support"},model:{value:t.ie,callback:function(a){t.ie=a},expression:"ie"}})],1),s("q-separator"),s("q-card-section",{staticClass:"q-gutter-sm column"},[s("q-select",{staticStyle:{width:"100%"},attrs:{label:"Quasar Language Pack",dense:"",outlined:"",options:t.langOptions,"emit-value":"","map-options":"","options-dense":""},model:{value:t.lang,callback:function(a){t.lang=a},expression:"lang"}}),s("q-select",{attrs:{label:"Quasar Icon Set",dense:"",outlined:"",options:t.iconSetOptions,"options-dense":"","emit-value":"","map-options":""},model:{value:t.iconSet,callback:function(a){t.iconSet=a},expression:"iconSet"}})],1),s("q-separator"),s("doc-code",{staticClass:"relative-position",attrs:{lang:"html"}},[t._v(t._s(t.output))])],1)},i=[],c=(s("5319"),s("a6d8"));const l={"mdi-v5":"cdn.jsdelivr.net/npm/@mdi/font@^5.0.0/css/materialdesignicons.min.css","fontawesome-v5":"use.fontawesome.com/releases/v5.0.13/css/all.css","ionicons-v4":"cdn.jsdelivr.net/npm/ionicons@^4.0.0/dist/css/ionicons.min.css","eva-icons":"cdn.jsdelivr.net/npm/eva-icons@^1.0.0/style/eva-icons.css",themify:"themify.me/wp-content/themes/themify-v32/themify-icons/themify-icons.css","line-awesome":"maxst.icons8.com/vue-static/landings/line-awesome/font-awesome-line-awesome/css/all.min.css",animate:"cdn.jsdelivr.net/npm/animate.css@^4.0.0/animate.min.css"},p={roboto:"Roboto:100,300,400,500,700,900","material-icons":"Material+Icons","material-icons-outlined":"Material+Icons+Outlined","material-icons-round":"Material+Icons+Round","material-icons-sharp":"Material+Icons+Sharp"},u=t=>t.replace(/(-\w)/g,t=>t[1].toUpperCase());var v={data(){return{version:this.$q.version,css:{roboto:!0,"material-icons":!0,"material-icons-outlined":!1,"material-icons-round":!1,"material-icons-sharp":!1,"mdi-v5":!1,"fontawesome-v5":!1,"ionicons-v4":!1,"eva-icons":!1,themify:!1,"line-awesome":!1,animate:!1},modern:!1,minified:!0,rtl:!1,ie:!1,cfgObject:!1,lang:"en-us",iconSet:"material-icons"}},computed:{output(){return`<!DOCTYPE html>\n<html>\n  \x3c!--\n    WARNING! Make sure that you match all Quasar related\n    tags to the same version! (Below it's "@${this.version}")\n  --\x3e\n\n  <head>\n    ${this.head}\n  </head>\n\n  <body>\n    \x3c!-- Add the following at the end of your body tag --\x3e\n    ${this.configTag}\n    ${this.body}\n    ${this.finalScriptTag}\n  </body>\n</html>\n`},googleFonts(){const t=Object.keys(p).filter(t=>!0===this.css[t]).map(t=>p[t]);return 0===t.length?"":"fonts.googleapis.com/css?family="+t.join("|")},head(){const t=Object.keys(l).filter(t=>!0===this.css[t]).map(t=>l[t]);return t.unshift(this.googleFonts),t.push(`cdn.jsdelivr.net/npm/quasar@${this.version}/dist/quasar.rtl.min.css`),t.filter(t=>t).map(t=>this.getCssTag(t)).join("\n    ")},configTag(){return!1===this.cfgObject?"":"\n    <script>\n    window.quasarConfig = {\n      brand: { // this will NOT work on IE 11\n        primary: '#e46262',\n        // ... or all other brand colors\n      },\n      notify: {...}, // default set of options for Notify Quasar plugin\n      loading: {...}, // default set of options for Loading Quasar plugin\n      loadingBar: { ... }, // settings for LoadingBar Quasar plugin\n      // ..and many more (check Installation card on each Quasar component/directive/plugin)\n    }\n    <\/script>\n"},finalScriptTag(){let t="";"en-us"===this.lang&&"material-icons"===this.iconSet||(t="\n","en-us"!==this.lang&&(t+=`      Quasar.lang.set(Quasar.lang.${u(this.lang)})\n`),"material-icons"!==this.iconSet&&(t+=`      Quasar.iconSet.set(Quasar.iconSet.${u(this.iconSet)})\n`));const a="\n      /*\n        Example kicking off the UI. Obviously, adapt this to your specific needs.\n        Assumes you have a <div id=\"q-app\"></div> in your <body> above\n       */\n      new Vue({\n        el: '#q-app',\n        data: function () {\n          return {}\n        },\n        methods: {},\n        // ...etc\n      })\n    ";return`\n    <script>${t}${a}<\/script>`},body(){const t=["cdn.jsdelivr.net/npm/vue@^2.0.0/dist/vue.min.js",`cdn.jsdelivr.net/npm/quasar@${this.version}/dist/quasar.umd.${!0===this.modern?"modern.":""}min.js`];return!0===this.ie&&t.unshift(`cdn.jsdelivr.net/npm/quasar@${this.version}/dist/quasar.ie.polyfills.umd.min.js`),"en-us"!==this.lang&&t.push(`cdn.jsdelivr.net/npm/quasar@${this.version}/dist/lang/${this.lang}.umd.min.js`),"material-icons"!==this.iconSet&&t.push(`cdn.jsdelivr.net/npm/quasar@${this.version}/dist/icon-set/${this.iconSet}.umd.min.js`),t.map(t=>this.getJsTag(t)).join("\n    ")}},methods:{getUrl(t){const a=!1===this.minified?t.replace(".min",""):t;return!1===this.rtl?a.replace(".rtl",""):a},getCssTag(t){return`<link href="https://${this.getUrl(t)}" rel="stylesheet" type="text/css">`},getJsTag(t){return`<script src="https://${this.getUrl(t)}"><\/script>`}},created(){this.langOptions=c.map(t=>({label:t.nativeName,value:t.isoName})),this.iconSetOptions=[{label:"Material (webfont)",value:"material-icons"},{label:"Material (svg)",value:"svg-material-icons"},{label:"Material Outlined (webfont)",value:"material-icons-outlined"},{label:"Material Round (webfont)",value:"material-icons-round"},{label:"Material Sharp (webfont)",value:"material-icons-sharp"},{label:"MDI v5 (webfont)",value:"mdi-v5"},{label:"MDI v5 (svg)",value:"svg-mdi-v5"},{label:"Ionicons v4 (webfont)",value:"ionicons-v4"},{label:"Ionicons v4 (svg)",value:"svg-ionicons-v4"},{label:"Fontawesome v5 (webfont)",value:"fontawesome-v5"},{label:"Fontawesome v5 (svg)",value:"svg-fontawesome-v5"},{label:"Eva Icons (webfont)",value:"eva-icons"},{label:"Eva Icons (svg)",value:"svg-eva-icons"},{label:"Themify (webfont)",value:"themify"},{label:"Themify (svg)",value:"svg-themify"},{label:"Line Awesome (webfont)",value:"line-awesome"},{label:"Line Awesome (svg)",value:"svg-line-awesome"}]}},d=v,g=s("2877"),_=Object(g["a"])(d,r,i,!1,null,null,null),m=_.exports;const h="Quasar UMD - CDN install | Quasar Framework",k="How to use the Unified Module Definition form of Quasar.";var f={meta:{title:"Quasar UMD - CDN install",meta:{title:{name:"title",content:h},ogTitle:{name:"og:title",content:h},twitterTitle:{name:"twitter:title",content:h},description:{name:"description",content:k},ogDesc:{name:"og:description",content:k},twitterDesc:{name:"twitter:description",content:k}}},components:{UmdTags:m},created(){this.$root.store.toc=[{id:"Installation",title:"Installation"},{id:"JsFiddle-%2F-Codepen",title:"JsFiddle / Codepen"},{id:"Quasar-Global-Object",title:"Quasar Global Object"},{id:"Init-Configuration",title:"Init Configuration"},{id:"Usage",title:"Usage"},{id:"Quasar-Components",title:"Quasar Components",sub:!0},{id:"Quasar-Directives",title:"Quasar Directives",sub:!0},{id:"Quasar-Plugins",title:"Quasar Plugins",sub:!0},{id:"Quasar-Utils",title:"Quasar Utils",sub:!0},{id:"Changing-Quasar-Icon-Set",title:"Changing Quasar Icon Set",sub:!0},{id:"Changing-Quasar-Language-Pack",title:"Changing Quasar Language Pack",sub:!0}],this.nav=[{name:"Quasar CLI",category:"Quasar Flavours",path:"/start/quasar-cli",dir:"left"},{name:"Vue CLI Plugin",category:"Quasar Flavours",path:"/start/vue-cli-plugin",dir:"right"}]},methods:{copyHeading:o["a"]}},b=f,y=Object(g["a"])(b,e,n,!1,null,null,null);a["default"]=y.exports}}]);