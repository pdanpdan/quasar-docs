(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[64],{"211b":function(t,s,e){"use strict";e.r(s);var o=function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("doc-page",{attrs:{"meta-title":t.metaTitle,title:"Installing Icon Libraries",related:t.related,nav:t.nav,toc:t.toc,"meta-desc":t.metaDesc}},[e("div",{staticClass:"doc-note doc-note--tip"},[e("p",{staticClass:"doc-note__title"},[t._v("TIP")]),e("p",[e("strong",[t._v("This page refers to using "),e("doc-link",{attrs:{to:"/vue-components/icon#webfont-icons"}},[t._v("webfont icons")]),t._v(" only.")],1),t._v(" Svg icons do not need any installation step.")])]),e("p",[t._v("You’ll most likely want icons in your website/app and Quasar offers an easy way out of the box for the following icon libraries: "),e("doc-link",{attrs:{to:"https://material.io/icons/"}},[t._v("Material Icons")]),t._v(" , "),e("doc-link",{attrs:{to:"http://fontawesome.io/icons/"}},[t._v("Font Awesome")]),t._v(", "),e("doc-link",{attrs:{to:"http://ionicons.com/"}},[t._v("Ionicons")]),t._v(", "),e("doc-link",{attrs:{to:"https://materialdesignicons.com/"}},[t._v("MDI")]),t._v(", "),e("doc-link",{attrs:{to:"https://akveo.github.io/eva-icons"}},[t._v("Eva Icons")]),t._v(", "),e("doc-link",{attrs:{to:"https://themify.me/themify-icons"}},[t._v("Themify Icons")]),t._v(", "),e("doc-link",{attrs:{to:"https://icons8.com/line-awesome"}},[t._v("Line Awesome")]),t._v(" and "),e("doc-link",{attrs:{to:"https://icons.getbootstrap.com/"}},[t._v("Bootstrap Icons")]),t._v(". But you can "),e("doc-link",{attrs:{to:"/vue-components/icon#custom-mapping"}},[t._v("add support for others")]),t._v(" by yourself.")],1),e("div",{staticClass:"doc-note doc-note--tip"},[e("p",{staticClass:"doc-note__title"},[t._v("TIP")]),e("p",[t._v("In regards to webfont icons, you can choose to install one or more of these icon libraries.")])]),e("h2",{staticClass:"doc-heading doc-h2",attrs:{id:"installing-webfonts"},on:{click:function(s){return t.copyHeading("installing-webfonts")}}},[t._v("Installing Webfonts")]),e("p",[t._v("If you are building a website only, then using a CDN (Content Delivery Network) approach can be an option you can follow. However, when building a mobile or Electron app, you most likely do not want to depend on an Internet connection and Quasar comes with a solution to this problem:")]),e("p",[t._v("Edit "),e("code",{staticClass:"doc-token"},[t._v("/quasar.conf.js")]),t._v(":")]),e("pre",{pre:!0,attrs:{class:"doc-code language-js"}},[e("code",{pre:!0,attrs:{class:"doc-code__inner doc-code__inner--prerendered language-js"}},[t._v("extras"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'material-icons'")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n")])]),e("p",[t._v("Webfont icons are available through "),e("doc-link",{attrs:{to:"https://github.com/quasarframework/quasar/tree/dev/extras"}},[t._v("@quasar/extras")]),t._v(" package. You don’t need to import it in your app, just configure "),e("code",{staticClass:"doc-token"},[t._v("/quasar.conf.js")]),t._v(" as indicated above.")],1),e("p",[t._v("Adding more than one set:")]),e("pre",{pre:!0,attrs:{class:"doc-code language-js"}},[e("code",{pre:!0,attrs:{class:"doc-code__inner doc-code__inner--prerendered language-js"}},[t._v("extras"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'material-icons'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'mdi-v5'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'ionicons-v4'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'eva-icons'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'fontawesome-v5'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'themify'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'line-awesome'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'bootstrap-icons'")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n")])]),e("p",[t._v("For all available options, visit the "),e("doc-link",{attrs:{to:"https://github.com/quasarframework/quasar/tree/dev/extras#webfonts"}},[t._v("GitHub")]),t._v(" repository.")],1),e("p",[t._v("You’re now ready to use the "),e("doc-link",{attrs:{to:"/vue-components/icon"}},[t._v("QIcon")]),t._v(" component.")],1),e("h2",{staticClass:"doc-heading doc-h2",attrs:{id:"using-cdn-as-alternative"},on:{click:function(s){return t.copyHeading("using-cdn-as-alternative")}}},[t._v("Using CDN as alternative")]),e("p",[t._v("If you want to make use of a CDN (Content Delivery Network), all you need to do is to include style tags in your "),e("code",{staticClass:"doc-token"},[t._v("index.template.html")]),t._v(" which point to the CDN URL.")]),e("p",[t._v("In case you follow this path, do not also add the icon sets that you want in "),e("code",{staticClass:"doc-token"},[t._v("/quasar.conf.js > extras")]),t._v(". Play with the "),e("doc-link",{attrs:{to:"/start/umd#installation"}},[t._v("UMD Installation Guide")]),t._v(" and edit "),e("code",{staticClass:"doc-token"},[t._v("index.template.html")]),t._v(" as described there.")],1),e("h2",{staticClass:"doc-heading doc-h2",attrs:{id:"using-fontawesome-pro"},on:{click:function(s){return t.copyHeading("using-fontawesome-pro")}}},[t._v("Using Fontawesome-Pro")]),e("p",[t._v("If you have a Fontawesome 5 Pro license and want to use it instead of the Fontawesome Free version, follow these instructions:")]),e("ol",[e("li",[t._v("Open the "),e("doc-link",{attrs:{to:"https://fontawesome.com/account"}},[t._v("Linked Accounts section")]),t._v(" in Fontawesome’s user account page to grab the npm TOKENID (login if necessary).")],1),e("li",[t._v("Create or append TOKENID into the "),e("code",{staticClass:"doc-token"},[t._v(".npmrc")]),t._v(" file (file path same as package.json):")])]),e("pre",{pre:!0,attrs:{class:"doc-code language-js"}},[e("code",{pre:!0,attrs:{class:"doc-code__inner doc-code__inner--prerendered language-js"}},[t._v("@fortawesome"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v("registry"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("https"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),e("span",{pre:!0,attrs:{class:"token regex"}},[e("span",{pre:!0,attrs:{class:"token regex-delimiter"}},[t._v("/")]),e("span",{pre:!0,attrs:{class:"token regex-source language-regex"}},[t._v("npm.fontawesome.com")]),e("span",{pre:!0,attrs:{class:"token regex-delimiter"}},[t._v("/")])]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//npm.fontawesome.com/:_authToken=TOKENID")]),t._v("\n")])]),e("ol",{attrs:{start:"3"}},[e("li",[t._v("Install Fontawesome webfonts:")])]),e("pre",{pre:!0,attrs:{class:"doc-code language-bash"}},[e("code",{pre:!0,attrs:{class:"doc-code__inner doc-code__inner--prerendered language-bash"}},[t._v("$ "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("yarn")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("add")]),t._v(" @fortawesome/fontawesome-pro\n")])]),e("ol",{attrs:{start:"4"}},[e("li",[t._v("Create new boot file:")])]),e("pre",{pre:!0,attrs:{class:"doc-code language-bash"}},[e("code",{pre:!0,attrs:{class:"doc-code__inner doc-code__inner--prerendered language-bash"}},[t._v("$ quasar new boot fontawesome-pro "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("--format ts"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n")])]),e("ol",{attrs:{start:"5"}},[e("li",[t._v("Edit "),e("code",{staticClass:"doc-token"},[t._v("/quasar.conf.js")]),t._v(":")])]),e("pre",{pre:!0,attrs:{class:"doc-code language-js"}},[e("code",{pre:!0,attrs:{class:"doc-code__inner doc-code__inner--prerendered language-js"}},[t._v("boot"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("...")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'fontawesome-pro'")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Add boot file")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\nextras"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 'fontawesome' // Disable free version!")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\nframework"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// if you want Quasar to use Fontawesome for its icons")]),t._v("\n  iconSet"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'fontawesome-v5-pro'")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])]),e("ol",{attrs:{start:"6"}},[e("li",[t._v("Edit "),e("code",{staticClass:"doc-token"},[t._v("/src/boot/fontawesome-pro.js")]),t._v(":")])]),e("pre",{pre:!0,attrs:{class:"doc-code language-js"}},[e("code",{pre:!0,attrs:{class:"doc-code__inner doc-code__inner--prerendered language-js"}},[e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// required")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'@fortawesome/fontawesome-pro/css/fontawesome.css'")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'@fortawesome/fontawesome-pro/css/light.css'")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// do you want these too?")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// import '@fortawesome/fontawesome-pro/css/brands.css'")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// import '@fortawesome/fontawesome-pro/css/solid.css'")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// import '@fortawesome/fontawesome-pro/css/regular.css'")]),t._v("\n")])]),e("ol",{attrs:{start:"7"}},[e("li",[t._v("(Optional) Override default icons:")])]),e("p",[t._v("Since the default "),e("code",{staticClass:"doc-token"},[t._v("font-weight")]),t._v(" for fontawesome-pro is "),e("code",{staticClass:"doc-token"},[t._v("light")]),t._v(" or "),e("code",{staticClass:"doc-token"},[t._v("fal")]),t._v(", some icons used by the framework components may not be desirable. The best way to handle this is to override it in the boot file that you created.")]),e("p",[t._v("For instance, to override the "),e("code",{staticClass:"doc-token"},[t._v("fal")]),t._v(" version of the close icon for chips, do this:")]),e("p",[e("em",[t._v("First")]),t._v(", find the icon used for chip close in Quasar Fontawesome v5 Pro "),e("doc-link",{attrs:{to:"https://github.com/pdanpdan/quasar/blob/dev-pdan/ui/icon-set/fontawesome-v5-pro.js"}},[t._v("icon-set source")]),t._v(".")],1),e("p",[t._v("(Alternatively, you can check inside the render function of the component you are overriding.)")]),e("pre",{pre:!0,attrs:{class:"doc-code language-js"}},[e("code",{pre:!0,attrs:{class:"doc-code__inner doc-code__inner--prerendered language-js"}},[e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// example")]),t._v("\nchip"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  remove"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'fal fa-times-circle'")]),t._v("\n")])]),e("p",[e("em",[t._v("Then")]),t._v(", override it in your "),e("code",{staticClass:"doc-token"},[t._v("/src/boot/fontawesome-pro.js")])]),e("pre",{pre:!0,attrs:{class:"doc-code language-js"}},[e("code",{pre:!0,attrs:{class:"doc-code__inner doc-code__inner--prerendered language-js"}},[e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" Vue "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'vue'")]),t._v("\n\n"),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'@fortawesome/fontawesome-pro/css/fontawesome.min.css'")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'@fortawesome/fontawesome-pro/css/solid.min.css'")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'@fortawesome/fontawesome-pro/css/light.min.css'")]),t._v("\n\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// example")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Vue")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("prototype"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("$q"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("iconSet"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("chip"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("remove "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'fas fa-times-circle'")]),t._v("\n")])])])},a=[],n=e("8669"),r={name:"DocMarkdownPage",created:function(){this.metaTitle="Installing Icon Libraries",this.metaDesc="How to use icon libraries in a Quasar app.",this.related=[{name:"Quasar Icon Sets",category:"Quasar Options & Helpers",path:"/options/quasar-icon-sets"},{name:"Icon",category:"Vue Components",path:"/vue-components/icon"}],this.nav=[{name:"RTL Support",category:"Quasar Options & Helpers",path:"/options/rtl-support",dir:"left"},{name:"Quasar Icon Sets",category:"Quasar Options & Helpers",path:"/options/quasar-icon-sets",dir:"right"}],this.toc=[{id:"installing-webfonts",title:"Installing Webfonts"},{id:"using-cdn-as-alternative",title:"Using CDN as alternative"},{id:"using-fontawesome-pro",title:"Using Fontawesome-Pro"}],this.copyHeading=n["a"]}},c=r,i=e("2877"),p=Object(i["a"])(c,o,a,!1,null,null,null);s["default"]=p.exports}}]);