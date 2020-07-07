(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[60],{"48a5":function(t,a,n){"use strict";n.r(a);var s=function(){var t=this,a=t.$createElement,n=t._self._c||a;return n("doc-page",{attrs:{title:"Animations",nav:t.nav}},[n("p",[t._v("CSS Transitions can be handled by the "),n("doc-link",{attrs:{to:"https://vuejs.org/v2/guide/transitions.html"}},[t._v("Vue Transition Component")]),t._v(". The transitions are used for entering (appearing) or leaving (disappearing) animations.")],1),n("p",[t._v("However, Quasar can supply a big list of ready to use CSS animations. The animation effects are borrowed from "),n("doc-link",{attrs:{to:"https://animate.style/"}},[t._v("Animate.css")]),t._v(". So there are 80+ animation types available for you to use out of the box. Check the list either on Animate.css website or on the demo available for this page.")],1),n("blockquote",{staticClass:"doc-note"},[n("p",[t._v("Please refer to "),n("doc-link",{attrs:{to:"https://vuejs.org/v2/guide/transitions.html"}},[t._v("Vue")]),t._v("  documentation for learning on how to use the Vue supplied "),n("code",{staticClass:"doc-token"},[t._v("<transition>")]),t._v(" component.")],1)]),n("h2",{staticClass:"doc-heading doc-h2",attrs:{id:"Installation"},on:{click:function(a){return t.copyHeading("Installation")}}},[t._v("Installation")]),n("p",[t._v("Edit "),n("code",{staticClass:"doc-token"},[t._v("/quasar.conf.js")]),t._v(".")]),n("pre",{pre:!0,attrs:{class:"doc-code language-js"}},[n("code",{pre:!0,attrs:{class:"doc-code__inner doc-code__inner--prerendered language-js"}},[n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// embedding all animations")]),t._v("\nanimations"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'all'")]),t._v("\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// or embedding only specific animations")]),t._v("\nanimations"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'bounceInLeft'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'bounceOutRight'")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n")])]),n("p",[t._v("If you are building a website, you can also skip configuring quasar.conf.js and use a CDN link which points to Animate.css like this (following is just an example, Google for latest link). Remember this will require an Internet connection for your user, as opposed to bundling from within quasar.conf.js.")]),n("pre",{pre:!0,attrs:{class:"doc-code language-html"}},[n("code",{pre:!0,attrs:{class:"doc-code__inner doc-code__inner--prerendered language-html"}},[n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("\x3c!-- src/index.template.html --\x3e")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("head")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n  ...\n\n  "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("\x3c!-- CDN example for Animate.css --\x3e")]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("link")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("rel")]),n("span",{pre:!0,attrs:{class:"token attr-value"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("stylesheet"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("href")]),n("span",{pre:!0,attrs:{class:"token attr-value"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.0.0/animate.min.css"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("head")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])]),n("h2",{staticClass:"doc-heading doc-h2",attrs:{id:"Usage"},on:{click:function(a){return t.copyHeading("Usage")}}},[t._v("Usage")]),n("p",[t._v("Notice the string “animated” in front of the actual animation name.")]),n("pre",{pre:!0,attrs:{class:"doc-code language-html"}},[n("code",{pre:!0,attrs:{class:"doc-code__inner doc-code__inner--prerendered language-html"}},[n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("\x3c!-- Example with wrapping only one DOM element / component --\x3e")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("transition")]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("appear")]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("enter-active-class")]),n("span",{pre:!0,attrs:{class:"token attr-value"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("animated fadeIn"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("leave-active-class")]),n("span",{pre:!0,attrs:{class:"token attr-value"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("animated fadeOut"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("\x3c!-- Wrapping only one DOM element, defined by QBtn --\x3e")]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("q-btn")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("color")]),n("span",{pre:!0,attrs:{class:"token attr-value"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("secondary"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("icon")]),n("span",{pre:!0,attrs:{class:"token attr-value"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("mail"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("label")]),n("span",{pre:!0,attrs:{class:"token attr-value"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("Email"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("/>")])]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("transition")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])]),n("h3",{staticClass:"doc-heading doc-h3",attrs:{id:"Wrapping-Multiple-Elements"},on:{click:function(a){return t.copyHeading("Wrapping-Multiple-Elements")}}},[t._v("Wrapping Multiple Elements")]),n("p",[t._v("You can also group components or DOM elements in a transition so that the same effects are applied to all of them simultaneously.")]),n("pre",{pre:!0,attrs:{class:"doc-code language-html"}},[n("code",{pre:!0,attrs:{class:"doc-code__inner doc-code__inner--prerendered language-html"}},[n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("\x3c!-- Example with wrapping multiple DOM elements / components --\x3e")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("transition-group")]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("appear")]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("enter-active-class")]),n("span",{pre:!0,attrs:{class:"token attr-value"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("animated fadeIn"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("leave-active-class")]),n("span",{pre:!0,attrs:{class:"token attr-value"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("animated fadeOut"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v('\x3c!-- We wrap a "p" tag and a QBtn --\x3e')]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("p")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("key")]),n("span",{pre:!0,attrs:{class:"token attr-value"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("text"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n     Lorem Ipsum\n  "),n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("p")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("q-btn")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("key")]),n("span",{pre:!0,attrs:{class:"token attr-value"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("email-button"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("color")]),n("span",{pre:!0,attrs:{class:"token attr-value"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("secondary"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("icon")]),n("span",{pre:!0,attrs:{class:"token attr-value"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("mail"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("label")]),n("span",{pre:!0,attrs:{class:"token attr-value"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("Email"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("/>")])]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("transition-group")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])]),n("p",[t._v("Please note some things in the above example:")]),n("ol",[n("li",[t._v("Note "),n("code",{staticClass:"doc-token"},[t._v("<transition-group>")]),t._v(" instead of "),n("code",{staticClass:"doc-token"},[t._v("<transition>")]),t._v(".")]),n("li",[t._v("The components and DOM elements must be keyed, like "),n("code",{staticClass:"doc-token"},[t._v('key="text"')]),t._v(" or "),n("code",{staticClass:"doc-token"},[t._v('key="email-button"')]),t._v(" in the example above.")]),n("li",[t._v("Both examples above have the Boolean property "),n("code",{staticClass:"doc-token"},[t._v("appear")]),t._v(" specified, which makes the entering animation kick in right after component(s) have been rendered. This property is optional.")])])])},e=[],r=n("8669");const o="Animations | Quasar Framework",p="Helper CSS animations supplied by Animate.css for a Quasar app.";var c={meta:{title:"Animations",meta:{title:{name:"title",content:o},ogTitle:{name:"og:title",content:o},twitterTitle:{name:"twitter:title",content:o},description:{name:"description",content:p},ogDesc:{name:"og:description",content:p},twitterDesc:{name:"twitter:description",content:p}}},created(){this.$root.store.toc=[{id:"Installation",title:"Installation"},{id:"Usage",title:"Usage"},{id:"Wrapping-Multiple-Elements",title:"Wrapping Multiple Elements",sub:!0}],this.nav=[{name:"Screen Plugin",category:"Quasar Options & Helpers",path:"/options/screen-plugin",dir:"left"},{name:"Transitions",category:"Quasar Options & Helpers",path:"/options/transitions",dir:"right"}]},methods:{copyHeading:r["a"]}},i=c,l=n("2877"),v=Object(l["a"])(i,s,e,!1,null,null,null);a["default"]=v.exports}}]);