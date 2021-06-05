(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[67],{"56ce":function(t,s,a){"use strict";a.r(s);var n=function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("doc-page",{attrs:{"meta-title":t.metaTitle,title:"Quasar Icon Sets",related:t.related,nav:t.nav,toc:t.toc,"meta-desc":t.metaDesc}},[a("p",[t._v("Quasar components have their own icons. Rather than forcing you into using one icon library in particular (so that they can display correctly), Quasar lets you choose "),a("strong",[t._v("which icons it should use for its components")]),t._v(". This is called a "),a("code",{staticClass:"doc-token"},[t._v("Quasar Icon Set")]),t._v(".")]),a("p",[t._v("You can install multiple icon libraries, but you must choose only one to use on Quasar’s components.")]),a("p",[t._v("Quasar currently supports: "),a("doc-link",{attrs:{to:"https://material.io/icons/"}},[t._v("Material Icons")]),t._v(" , "),a("doc-link",{attrs:{to:"http://fontawesome.io/icons/"}},[t._v("Font Awesome")]),t._v(", "),a("doc-link",{attrs:{to:"http://ionicons.com/"}},[t._v("Ionicons")]),t._v(", "),a("doc-link",{attrs:{to:"https://materialdesignicons.com/"}},[t._v("MDI")]),t._v(", "),a("doc-link",{attrs:{to:"https://akveo.github.io/eva-icons"}},[t._v("Eva Icons")]),t._v(", "),a("doc-link",{attrs:{to:"https://themify.me/themify-icons"}},[t._v("Themify Icons")]),t._v(", "),a("doc-link",{attrs:{to:"https://icons8.com/line-awesome"}},[t._v("Line Awesome")]),t._v(" and "),a("doc-link",{attrs:{to:"https://icons.getbootstrap.com/"}},[t._v("Bootstrap Icons")]),t._v(".")],1),a("p",[t._v("It is also possible to use your own icons (as custom svgs or as images in any format) with any Quasar component, see the "),a("doc-link",{attrs:{to:"/vue-components/icon#image-icons"}},[t._v("QIcon")]),t._v(" page for more info on this.")],1),a("div",{staticClass:"doc-note doc-note--tip"},[a("p",{staticClass:"doc-note__title"},[t._v("TIP")]),a("p",[t._v("Related pages: "),a("doc-link",{attrs:{to:"/options/installing-icon-libraries"}},[t._v("Installing Icon Libraries")]),t._v(" and "),a("doc-link",{attrs:{to:"/vue-components/icon"}},[t._v("QIcon component")]),t._v(".")],1)]),a("h2",{staticClass:"doc-heading doc-h2",attrs:{id:"configuring-the-default-icon-set"},on:{click:function(s){return t.copyHeading("configuring-the-default-icon-set")}}},[t._v("Configuring the default Icon Set")]),a("p",[a("strong",[t._v("There are two types of Quasar Icon Sets: webfont-based and svg-based.")])]),a("p",[t._v("Unless configured otherwise, Quasar uses Material Icons webfont as the icon set for its components. You can however tell Quasar to use some other Icon Set, but if it’s a webfont-based one then be sure to include its icon library in your website/app (see "),a("doc-link",{attrs:{to:"/options/installing-icon-libraries"}},[t._v("Installing Icon Libraries")]),t._v(").")],1),a("h3",{staticClass:"doc-heading doc-h3",attrs:{id:"hardcoded"},on:{click:function(s){return t.copyHeading("hardcoded")}}},[t._v("Hardcoded")]),a("p",[t._v("If the default Quasar Icon Set is not dynamically determined (does not depends on cookies for example), then you can:")]),a("h4",{staticClass:"doc-heading doc-h4",attrs:{id:"quasar-cli-way"},on:{click:function(s){return t.copyHeading("quasar-cli-way")}}},[t._v("Quasar CLI Way")]),a("p",[t._v("We edit "),a("code",{staticClass:"doc-token"},[t._v("/quasar.conf.js")]),t._v(" again:")]),a("pre",{pre:!0,attrs:{class:"doc-code language-js"}},[a("code",{pre:!0,attrs:{class:"doc-code__inner doc-code__inner--prerendered language-js"}},[t._v("framework"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// webfont-based example")]),t._v("\n  iconSet"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'mdi-v5'")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])]),a("pre",{pre:!0,attrs:{class:"doc-code language-js"}},[a("code",{pre:!0,attrs:{class:"doc-code__inner doc-code__inner--prerendered language-js"}},[t._v("framework"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// svg-based example")]),t._v("\n  iconSet"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'svg-mdi-v5'")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])]),a("p",[t._v("For all available options, visit the "),a("doc-link",{attrs:{to:"https://github.com/quasarframework/quasar/tree/dev/ui/icon-set"}},[t._v("GitHub")]),t._v(" repository.")],1),a("p",[t._v("Full example of including MDI & Fontawesome and telling Quasar to use Fontawesome for its components.")]),a("pre",{pre:!0,attrs:{class:"doc-code language-js"}},[a("code",{pre:!0,attrs:{class:"doc-code__inner doc-code__inner--prerendered language-js"}},[t._v("extras"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'mdi-v5'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'fontawesome-v5'")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\nframework"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  iconSet"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'fontawesome-v5'")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])]),a("p",[t._v("This will enable you to use both Ionicons & Fontawesome webfonts in your app, and all Quasar components will display Fontawesome icons.")]),a("h4",{staticClass:"doc-heading doc-h4",attrs:{id:"umd-way"},on:{click:function(s){return t.copyHeading("umd-way")}}},[t._v("UMD Way")]),a("p",[t._v("Include the Quasar Icon Set tag for your Quasar version and also tell Quasar to use it. Example:")]),a("pre",{pre:!0,attrs:{class:"doc-code language-html"}},[a("code",{pre:!0,attrs:{class:"doc-code__inner doc-code__inner--prerendered language-html"}},[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("\x3c!-- include this after Quasar JS tag --\x3e")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("script")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("src")]),a("span",{pre:!0,attrs:{class:"token attr-value"}},[a("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("https://cdn.jsdelivr.net/gh/pdanpdan/quasar@quasar-pdan-<version>/dist/icon-set/fontawesome-v5.umd.min.js"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("script")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("script")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),a("span",{pre:!0,attrs:{class:"token script"}},[a("span",{pre:!0,attrs:{class:"token language-javascript"}},[t._v("\n  Quasar"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("iconSet"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("set")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("Quasar"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("iconSet"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("fontawesomeV5"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])]),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("script")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])]),a("p",[t._v("Check what tags you need to include in your HTML files on "),a("doc-link",{attrs:{to:"/start/umd"}},[t._v("UMD / Standalone")]),t._v(" page.")],1),a("h4",{staticClass:"doc-heading doc-h4",attrs:{id:"vue-cli-way"},on:{click:function(s){return t.copyHeading("vue-cli-way")}}},[t._v("Vue CLI Way")]),a("p",[t._v("We edit your "),a("code",{staticClass:"doc-token"},[t._v("main.js")]),t._v(":")]),a("pre",{pre:!0,attrs:{class:"doc-code language-js"}},[a("code",{pre:!0,attrs:{class:"doc-code__inner doc-code__inner--prerendered language-js"}},[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" iconSet "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'quasar/icon-set/fontawesome-v5'")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// ...")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" Quasar "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'quasar'")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// ...")]),t._v("\nVue"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("use")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("Quasar"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// ...,")]),t._v("\n  iconSet"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" iconSet\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])]),a("h3",{staticClass:"doc-heading doc-h3",attrs:{id:"dynamical-non-ssr-"},on:{click:function(s){return t.copyHeading("dynamical-non-ssr-")}}},[t._v("Dynamical (non-SSR)")]),a("p",[t._v("Quasar CLI: If your desired Quasar Icon Set must be dynamically selected (example: depends on a cookie), then you need to create a boot file: "),a("code",{staticClass:"doc-token"},[t._v("$ quasar new boot quasar-icon-set [--format ts]")]),t._v(". This will create "),a("code",{staticClass:"doc-token"},[t._v("/src/boot/quasar-icon-set.js")]),t._v(" file. Edit it to:")]),a("pre",{pre:!0,attrs:{class:"doc-code language-js"}},[a("code",{pre:!0,attrs:{class:"doc-code__inner doc-code__inner--prerendered language-js"}},[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// for when you don't specify quasar.conf.js > framework: 'all'")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" Quasar "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'quasar'")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// OTHERWISE:")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" Quasar "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'quasar'")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("export")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("default")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("async")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" iconSetName "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'mdi-v5'")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// ... some logic to determine it (use Cookies Plugin?)")]),t._v("\n\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("try")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("await")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/* webpackInclude: /(mdi-v5|fontawesome-v5)\\.js$/ */")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'quasar/icon-set/'")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" iconSetName\n      "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("then")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("setDefinition")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        Quasar"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("iconSet"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("set")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("setDefinition"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("default"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("catch")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("err"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Requested Quasar Icon Set does not exist,")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// let's not break the app, so catching error")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])]),a("p",[t._v("Then register this boot file into "),a("code",{staticClass:"doc-token"},[t._v("/quasar.conf.js")]),t._v(":")]),a("pre",{pre:!0,attrs:{class:"doc-code language-js"}},[a("code",{pre:!0,attrs:{class:"doc-code__inner doc-code__inner--prerendered language-js"}},[t._v("boot"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'quasar-icon-set'")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n")])]),a("div",{staticClass:"doc-note doc-note--warning"},[a("p",{staticClass:"doc-note__title"},[t._v("Always constrain a dynamic import")]),a("p",[t._v("Notice the use of the "),a("doc-link",{attrs:{to:"https://webpack.js.org/api/module-methods/#magic-comments"}},[t._v("Webpack magic comment")]),t._v(" - "),a("code",{staticClass:"doc-token"},[t._v("webpackInclude")]),t._v(". Otherwise all the available icon set files will be bundled, resulting in an increase in the compilation time and the bundle size. See "),a("doc-link",{attrs:{to:"https://pdanpdan.github.io/quasar-docs/quasar-cli/lazy-loading#Caveat-for-dynamic-imports"}},[t._v("Caveat for dynamic imports")])],1)]),a("h3",{staticClass:"doc-heading doc-h3",attrs:{id:"dynamical-ssr-"},on:{click:function(s){return t.copyHeading("dynamical-ssr-")}}},[t._v("Dynamical (SSR) "),a("q-badge",{attrs:{align:"top",color:"brand-primary",label:"v1.11+"}})],1),a("p",[t._v("When dealing with SSR, we can’t use singleton objects because that would pollute sessions. As a result, as opposed to the dynamical example above (read it first!), you must also specify the "),a("code",{staticClass:"doc-token"},[t._v("ssrContext")]),t._v(" from your boot file:")]),a("pre",{pre:!0,attrs:{class:"doc-code language-js"}},[a("code",{pre:!0,attrs:{class:"doc-code__inner doc-code__inner--prerendered language-js"}},[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// for when you don't specify quasar.conf.js > framework: 'all'")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" Quasar "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'quasar'")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// OTHERWISE:")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" Quasar "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'quasar'")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// ! NOTICE ssrContext param:")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("export")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("default")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("async")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token parameter"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" ssrContext "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" iconSetName "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'mdi-v5'")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// ... some logic to determine it (use Cookies Plugin?)")]),t._v("\n\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("try")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("await")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/* webpackInclude: /(mdi-v5|fontawesome-v5)\\.js$/ */")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'quasar/icon-set/'")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" iconSetName\n      "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("then")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("setDefinition")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// ! NOTICE ssrContext param:")]),t._v("\n        Quasar"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("iconSet"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("set")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("setDefinition"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("default"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" ssrContext"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("catch")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("err"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Requested Quasar Icon Set does not exist,")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// let's not break the app, so catching error")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])]),a("h2",{staticClass:"doc-heading doc-h2",attrs:{id:"change-quasar-icon-set-at-runtime"},on:{click:function(s){return t.copyHeading("change-quasar-icon-set-at-runtime")}}},[t._v("Change Quasar Icon Set at Runtime")]),a("h4",{staticClass:"doc-heading doc-h4",attrs:{id:"changing-icon-set-dynamically"},on:{click:function(s){return t.copyHeading("changing-icon-set-dynamically")}}},[t._v("Changing Icon Set Dynamically")]),a("p",[t._v("Quasar Icon Set is reactive, so all components will update properly if you change the $q.iconSet object. Here is an example:")]),a("pre",{pre:!0,attrs:{class:"doc-code language-js"}},[a("code",{pre:!0,attrs:{class:"doc-code__inner doc-code__inner--prerendered language-js"}},[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" mdiIconSet "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'quasar/icon-set/mdi-v5.js'")]),t._v("\n\nmethods"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("changeIconSetToMdiIconSet")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("$q"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("iconSet"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("set")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("mdiIconSet"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])]),a("h4",{staticClass:"doc-heading doc-h4",attrs:{id:"changing-a-specific-icon-dynamically"},on:{click:function(s){return t.copyHeading("changing-a-specific-icon-dynamically")}}},[t._v("Changing a Specific Icon Dynamically")]),a("p",[t._v("If you want to change a specific icon to another, you can. Here is an example:")]),a("pre",{pre:!0,attrs:{class:"doc-code language-js"}},[a("code",{pre:!0,attrs:{class:"doc-code__inner doc-code__inner--prerendered language-js"}},[t._v("methods"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("changeQEditorHeaderIcon")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("$q"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("iconSet"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("editor"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("header1 "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'fas fa-font'")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])},e=[],o=a("8669"),r={name:"DocMarkdownPage",created:function(){this.metaTitle="Quasar Icon Sets",this.metaDesc="How to configure icon sets for Quasar components.",this.related=[{name:"Installing Icon Libraries",category:"Quasar Options & Helpers",path:"/options/installing-icon-libraries"},{name:"Icon",category:"Vue Components",path:"/vue-components/icon"}],this.nav=[{name:"Installing Icon Libraries",category:"Quasar Options & Helpers",path:"/options/installing-icon-libraries",dir:"left"},{name:"Platform Detection",category:"Quasar Options & Helpers",path:"/options/platform-detection",dir:"right"}],this.toc=[{id:"configuring-the-default-icon-set",title:"Configuring the default Icon Set"},{id:"hardcoded",title:"Hardcoded",sub:!0},{id:"dynamical-non-ssr-",title:"Dynamical (non-SSR)",sub:!0},{id:"dynamical-ssr-",title:"Dynamical (SSR)",sub:!0},{id:"change-quasar-icon-set-at-runtime",title:"Change Quasar Icon Set at Runtime"}],this.copyHeading=o["a"]}},c=r,p=a("2877"),i=Object(p["a"])(c,n,e,!1,null,null,null);s["default"]=i.exports}}]);