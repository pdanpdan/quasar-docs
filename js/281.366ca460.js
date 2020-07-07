(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[281],{"84e9":function(t,e,o){"use strict";o.r(e);var s=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("doc-page",{attrs:{title:"Touch Hold Directive",related:t.related,nav:t.nav}},[o("p",[t._v("Quasar offers full-featured Vue directives that can totally replace libraries like Hammerjs: "),o("code",{staticClass:"doc-token"},[t._v("v-touch-pan")]),t._v(", "),o("code",{staticClass:"doc-token"},[t._v("v-touch-swipe")]),t._v(", "),o("code",{staticClass:"doc-token"},[t._v("v-touch-hold")]),t._v(" and even "),o("code",{staticClass:"doc-token"},[t._v("v-touch-repeat")]),t._v(".")]),o("blockquote",{staticClass:"doc-note"},[o("p",[o("strong",[t._v("These directives also work with mouse events, not only touch events")]),t._v(", so you are able to build cool functionality for your App on desktops too.")])]),o("p",[t._v("We will be describing "),o("code",{staticClass:"doc-token"},[t._v("v-touch-hold")]),t._v(" directive on the lines below.")]),o("h2",{staticClass:"doc-heading doc-h2",attrs:{id:"Installation"},on:{click:function(e){return t.copyHeading("Installation")}}},[t._v("Installation")]),o("doc-installation",{attrs:{directives:"TouchHold"}}),o("h2",{staticClass:"doc-heading doc-h2",attrs:{id:"Usage"},on:{click:function(e){return t.copyHeading("Usage")}}},[t._v("Usage")]),o("doc-example",{attrs:{title:"Basic",file:"TouchHold/Basic"}}),o("p",[t._v("The default wait time is 600ms, but you can change it:")]),o("doc-example",{attrs:{title:"Custom wait time",file:"TouchHold/CustomTimer"}}),o("div",{staticClass:"doc-note doc-note--tip"},[o("p",{staticClass:"doc-note__title"},[t._v("TIP")]),o("p",[t._v("TouchHold also has a default sensitivity of 5px for touch events and 7px for mouse events, which means that it allows a slight movement of the finger or mouse without aborting, improving the user experience.")])]),o("p",[t._v("However, you can change this sensitivity too (notice the directive argument below - "),o("code",{staticClass:"doc-token"},[t._v("600:12:15")]),t._v(" - 600ms wait time, 12px sensitivity for touch events, 15px sensitivity for mouse events):")]),o("doc-example",{attrs:{title:"Custom sensitivity",file:"TouchHold/CustomSensitivity"}}),o("h3",{staticClass:"doc-heading doc-h3",attrs:{id:"Handling-Mouse-Events"},on:{click:function(e){return t.copyHeading("Handling-Mouse-Events")}}},[t._v("Handling Mouse Events")]),o("p",[t._v("When you want to also handle mouse events too, use the "),o("code",{staticClass:"doc-token"},[t._v("mouse")]),t._v(" modifier:")]),o("pre",{pre:!0,attrs:{class:"doc-code language-html"}},[o("code",{pre:!0,attrs:{class:"doc-code__inner doc-code__inner--prerendered language-html"}},[o("span",{pre:!0,attrs:{class:"token tag"}},[o("span",{pre:!0,attrs:{class:"token tag"}},[o("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("div")]),t._v(" "),o("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("v-touch-hold.mouse")]),o("span",{pre:!0,attrs:{class:"token attr-value"}},[o("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),o("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("userHasHold"),o("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),o("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("..."),o("span",{pre:!0,attrs:{class:"token tag"}},[o("span",{pre:!0,attrs:{class:"token tag"}},[o("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("div")]),o("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])]),o("h3",{staticClass:"doc-heading doc-h3",attrs:{id:"Inhibiting-TouchHold"},on:{click:function(e){return t.copyHeading("Inhibiting-TouchHold")}}},[t._v("Inhibiting TouchHold")]),o("p",[t._v("When you want to inhibit TouchHold, you can do so by stopping propagation of the "),o("code",{staticClass:"doc-token"},[t._v("touchstart")]),t._v("/"),o("code",{staticClass:"doc-token"},[t._v("mousedown")]),t._v(" events from the inner content:")]),o("pre",{pre:!0,attrs:{class:"doc-code language-html"}},[o("code",{pre:!0,attrs:{class:"doc-code__inner doc-code__inner--prerendered language-html"}},[o("span",{pre:!0,attrs:{class:"token tag"}},[o("span",{pre:!0,attrs:{class:"token tag"}},[o("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("div")]),t._v(" "),o("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("v-touch-hold.mouse")]),o("span",{pre:!0,attrs:{class:"token attr-value"}},[o("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),o("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("userHasHold"),o("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),o("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n  "),o("span",{pre:!0,attrs:{class:"token comment"}},[t._v("\x3c!-- ...content --\x3e")]),t._v("\n  "),o("span",{pre:!0,attrs:{class:"token tag"}},[o("span",{pre:!0,attrs:{class:"token tag"}},[o("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("div")]),t._v(" "),o("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("@touchstart.stop")]),t._v(" "),o("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("@mousedown.stop")]),o("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n    "),o("span",{pre:!0,attrs:{class:"token comment"}},[t._v("\x3c!--\n      TouchHold will not apply here because\n      we are calling stopPropagation() on touchstart\n      and mousedown events\n    --\x3e")]),t._v("\n  "),o("span",{pre:!0,attrs:{class:"token tag"}},[o("span",{pre:!0,attrs:{class:"token tag"}},[o("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("div")]),o("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n  "),o("span",{pre:!0,attrs:{class:"token comment"}},[t._v("\x3c!-- ...content --\x3e")]),t._v("\n"),o("span",{pre:!0,attrs:{class:"token tag"}},[o("span",{pre:!0,attrs:{class:"token tag"}},[o("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("div")]),o("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])]),o("p",[t._v("However, if you are using "),o("code",{staticClass:"doc-token"},[t._v("capture")]),t._v(" or "),o("code",{staticClass:"doc-token"},[t._v("mouseCapture")]),t._v(" modifiers then events will first reach the TouchHold directive then the inner content, so TouchHold will still trigger.")]),o("h2",{staticClass:"doc-heading doc-h2",attrs:{id:"Note-on-HMR"},on:{click:function(e){return t.copyHeading("Note-on-HMR")}}},[t._v("Note on HMR")]),o("p",[t._v("Due to performance reasons, not all of the modifiers are reactive. Some require a window/page/component refresh to get updated. Please check the API card for the modifiers which are not marked as reactive.")]),o("h2",{staticClass:"doc-heading doc-h2",attrs:{id:"TouchHold-API"},on:{click:function(e){return t.copyHeading("TouchHold-API")}}},[t._v("TouchHold API")]),o("doc-api",{attrs:{file:"TouchHold"}})],1)},a=[],n=o("8669");const c="Touch Hold Directive | Quasar Framework",i="Vue directive which triggers an event when the user touches and holds on a component or element for a specified amount of time.";var r={meta:{title:"Touch Hold Directive",meta:{title:{name:"title",content:c},ogTitle:{name:"og:title",content:c},twitterTitle:{name:"twitter:title",content:c},description:{name:"description",content:i},ogDesc:{name:"og:description",content:i},twitterDesc:{name:"twitter:description",content:i}}},created(){this.$root.store.toc=[{id:"Installation",title:"Installation"},{id:"Usage",title:"Usage"},{id:"Handling-Mouse-Events",title:"Handling Mouse Events",sub:!0},{id:"Inhibiting-TouchHold",title:"Inhibiting TouchHold",sub:!0},{id:"Note-on-HMR",title:"Note on HMR"},{id:"TouchHold-API",title:"TouchHold API"}],this.related=[{name:"Touch Pan",category:"Vue Directives",path:"/vue-directives/touch-pan"},{name:"Touch Swipe",category:"Vue Directives",path:"/vue-directives/touch-swipe"}],this.nav=[{name:"Scroll Fire",category:"Vue Directives",path:"/vue-directives/scroll-fire",dir:"left"},{name:"Touch Pan",category:"Vue Directives",path:"/vue-directives/touch-pan",dir:"right"}]},methods:{copyHeading:n["a"]}},l=r,d=o("2877"),p=Object(d["a"])(l,s,a,!1,null,null,null);e["default"]=p.exports}}]);