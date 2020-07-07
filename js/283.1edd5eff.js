(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[283],{b7a9:function(t,e,a){"use strict";a.r(e);var s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("doc-page",{attrs:{title:"Touch Repeat Directive",nav:t.nav}},[a("p",[t._v("Quasar offers full-featured Vue directives that can totally replace libraries like Hammerjs: "),a("code",{staticClass:"doc-token"},[t._v("v-touch-pan")]),t._v(", "),a("code",{staticClass:"doc-token"},[t._v("v-touch-swipe")]),t._v(", "),a("code",{staticClass:"doc-token"},[t._v("v-touch-hold")]),t._v(" and "),a("code",{staticClass:"doc-token"},[t._v("v-touch-repeat")]),t._v(".")]),a("blockquote",{staticClass:"doc-note"},[a("p",[a("strong",[t._v("These directives also work with mouse events, not only touch events")]),t._v(", so you are able to build cool functionality for your App on desktops too.")])]),a("p",[t._v("We will be describing "),a("code",{staticClass:"doc-token"},[t._v("v-touch-repeat")]),t._v(" on the lines below.")]),a("h2",{staticClass:"doc-heading doc-h2",attrs:{id:"Installation"},on:{click:function(e){return t.copyHeading("Installation")}}},[t._v("Installation")]),a("doc-installation",{attrs:{directives:"TouchRepeat"}}),a("h2",{staticClass:"doc-heading doc-h2",attrs:{id:"Usage"},on:{click:function(e){return t.copyHeading("Usage")}}},[t._v("Usage")]),a("p",[t._v("Click and hold with your mouse on the area below to see it in action.\nNotice that on touch capable devices the scrolling is not blocked.")]),a("blockquote",{staticClass:"doc-note"},[a("p",[t._v("The default repeat pattern is 0:600:300 (ms).")])]),a("doc-example",{attrs:{title:"Basic",file:"TouchRepeat/Basic"}}),a("p",[t._v("Below is an example configured to also react to "),a("code",{staticClass:"doc-token"},[t._v("SPACE")]),t._v(", "),a("code",{staticClass:"doc-token"},[t._v("ENTER")]),t._v(" and "),a("code",{staticClass:"doc-token"},[t._v("h")]),t._v(" keys ("),a("strong",[t._v("focus on it first")]),t._v("), with 0:300:200 (ms) repeat pattern. Hit & hold keys, or click/tap and hold.")]),a("doc-example",{attrs:{title:"Custom keys",file:"TouchRepeat/Keys"}}),a("p",[t._v("Below is an example of applying TouchRepeat to QBtn. Notice how we play with the directive arguments in order to make the blue buttons increment slower than the red ones.")]),a("doc-example",{attrs:{title:"Applied to QBtn",file:"TouchRepeat/Buttons"}}),a("h3",{staticClass:"doc-heading doc-h3",attrs:{id:"Handling-Mouse-Events"},on:{click:function(e){return t.copyHeading("Handling-Mouse-Events")}}},[t._v("Handling Mouse Events")]),a("p",[t._v("When you want to handle mouse events too, use the "),a("code",{staticClass:"doc-token"},[t._v("mouse")]),t._v(" modifier:")]),a("pre",{pre:!0,attrs:{class:"doc-code language-html"}},[a("code",{pre:!0,attrs:{class:"doc-code__inner doc-code__inner--prerendered language-html"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("div")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("v-touch-repeat.mouse")]),a("span",{pre:!0,attrs:{class:"token attr-value"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("myHandler"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("..."),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("div")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])]),a("h3",{staticClass:"doc-heading doc-h3",attrs:{id:"Handling-Key-Events"},on:{click:function(e){return t.copyHeading("Handling-Key-Events")}}},[t._v("Handling Key Events")]),a("p",[t._v("When you want to handle key events too, use "),a("doc-link",{attrs:{to:"https://keycode.info/"}},[t._v("keycodes")]),t._v(" as modifiers:")],1),a("pre",{pre:!0,attrs:{class:"doc-code language-html"}},[a("code",{pre:!0,attrs:{class:"doc-code__inner doc-code__inner--prerendered language-html"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("div")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("v-touch-repeat.65.70")]),a("span",{pre:!0,attrs:{class:"token attr-value"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("myHandler"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("..."),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("div")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])]),a("p",[t._v("There are some special modifiers that you do not require to write the equivalent keycode: "),a("code",{staticClass:"doc-token"},[t._v("space")]),t._v(", "),a("code",{staticClass:"doc-token"},[t._v("tab")]),t._v(", "),a("code",{staticClass:"doc-token"},[t._v("enter")]),t._v(".")]),a("h3",{staticClass:"doc-heading doc-h3",attrs:{id:"Inhibiting-TouchRepeat"},on:{click:function(e){return t.copyHeading("Inhibiting-TouchRepeat")}}},[t._v("Inhibiting TouchRepeat")]),a("p",[t._v("When you want to inhibit TouchRepeat, you can do so by stopping propagation of the "),a("code",{staticClass:"doc-token"},[t._v("touchstart")]),t._v("/"),a("code",{staticClass:"doc-token"},[t._v("mousedown")]),t._v("/"),a("code",{staticClass:"doc-token"},[t._v("keydown")]),t._v(" events from the inner content:")]),a("pre",{pre:!0,attrs:{class:"doc-code language-html"}},[a("code",{pre:!0,attrs:{class:"doc-code__inner doc-code__inner--prerendered language-html"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("div")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("v-touch-repeat.mouse.enter")]),a("span",{pre:!0,attrs:{class:"token attr-value"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("userHasHold"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("\x3c!-- ...content --\x3e")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("div")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("@touchstart.stop")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("@mousedown.stop")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("@keydown.stop")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("\x3c!--\n      TouchRepeat will not apply here because\n      we are calling stopPropagation() on touchstart,\n      mousedown and keydown events\n    --\x3e")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("div")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("\x3c!-- ...content --\x3e")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("div")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])]),a("p",[t._v("However, if you are using "),a("code",{staticClass:"doc-token"},[t._v("capture")]),t._v(", "),a("code",{staticClass:"doc-token"},[t._v("mouseCapture")]),t._v(" or "),a("code",{staticClass:"doc-token"},[t._v("keyCapture")]),t._v(" modifiers then events will first reach the TouchRepeat directive then the inner content, so TouchRepeat will still trigger.")]),a("h2",{staticClass:"doc-heading doc-h2",attrs:{id:"Note-on-HMR"},on:{click:function(e){return t.copyHeading("Note-on-HMR")}}},[t._v("Note on HMR")]),a("p",[t._v("Due to performance reasons, not all of the modifiers are reactive. Some require a window/page/component refresh to get updated. Please check the API card for the modifiers which are not marked as reactive.")]),a("h2",{staticClass:"doc-heading doc-h2",attrs:{id:"TouchRepeat-API"},on:{click:function(e){return t.copyHeading("TouchRepeat-API")}}},[t._v("TouchRepeat API")]),a("doc-api",{attrs:{file:"TouchRepeat"}})],1)},n=[],o=a("8669");const c="Touch Repeat Directive | Quasar Framework",r="Vue directive which triggers an event at specified intervals of time while the user touches and holds on a component or element.";var i={meta:{title:"Touch Repeat Directive",meta:{title:{name:"title",content:c},ogTitle:{name:"og:title",content:c},twitterTitle:{name:"twitter:title",content:c},description:{name:"description",content:r},ogDesc:{name:"og:description",content:r},twitterDesc:{name:"twitter:description",content:r}}},created(){this.$root.store.toc=[{id:"Installation",title:"Installation"},{id:"Usage",title:"Usage"},{id:"Handling-Mouse-Events",title:"Handling Mouse Events",sub:!0},{id:"Handling-Key-Events",title:"Handling Key Events",sub:!0},{id:"Inhibiting-TouchRepeat",title:"Inhibiting TouchRepeat",sub:!0},{id:"Note-on-HMR",title:"Note on HMR"},{id:"TouchRepeat-API",title:"TouchRepeat API"}],this.nav=[{name:"Touch Pan",category:"Vue Directives",path:"/vue-directives/touch-pan",dir:"left"},{name:"Touch Swipe",category:"Vue Directives",path:"/vue-directives/touch-swipe",dir:"right"}]},methods:{copyHeading:o["a"]}},p=i,l=a("2877"),d=Object(l["a"])(p,s,n,!1,null,null,null);e["default"]=d.exports}}]);