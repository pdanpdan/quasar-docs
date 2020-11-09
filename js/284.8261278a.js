(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[284],{"2f34":function(t,e,a){"use strict";a.r(e);var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("doc-page",{attrs:{title:"Touch Pan Directive",related:t.related,nav:t.nav}},[a("p",[t._v("Quasar offers full-featured Vue directives that can totally replace libraries like Hammerjs: "),a("code",{staticClass:"doc-token"},[t._v("v-touch-pan")]),t._v(", "),a("code",{staticClass:"doc-token"},[t._v("v-touch-swipe")]),t._v(", "),a("code",{staticClass:"doc-token"},[t._v("v-touch-hold")]),t._v(" and even "),a("code",{staticClass:"doc-token"},[t._v("v-touch-repeat")]),t._v(".")]),a("blockquote",{staticClass:"doc-note"},[a("p",[a("strong",[t._v("These directives also work with mouse events, not only touch events")]),t._v(", so you are able to build cool functionality for your App on desktops too.")])]),a("p",[t._v("We will be describing "),a("code",{staticClass:"doc-token"},[t._v("v-touch-pan")]),t._v(" on the lines below.")]),a("h2",{staticClass:"doc-heading doc-h2",attrs:{id:"Installation"},on:{click:function(e){return t.copyHeading("Installation")}}},[t._v("Installation")]),a("doc-installation",{attrs:{directives:"TouchPan"}}),a("h2",{staticClass:"doc-heading doc-h2",attrs:{id:"Usage"},on:{click:function(e){return t.copyHeading("Usage")}}},[t._v("Usage")]),a("p",[t._v("Click then pan in a direction with your mouse on the area below to see it in action.\nPage scrolling is prevented, but you can opt out if you wish.")]),a("div",{staticClass:"doc-note doc-note--tip"},[a("p",{staticClass:"doc-note__title"},[t._v("TIP")]),a("p",[t._v("If your content also has images, you might want to add "),a("code",{staticClass:"doc-token"},[t._v('draggable="false"')]),t._v(" to them, otherwise the native browser behavior might interfere in a negative way.")])]),a("doc-example",{attrs:{title:"All directions",file:"TouchPan/Basic"}}),a("p",[t._v("Panning works both with a mouse or a native touch action.\nYou can also capture pan to certain directions (any) only as you’ll see below.")]),a("p",[t._v("Example on capturing only horizontal panning.\nNotice that on touch capable devices the scrolling is automatically not blocked, since we are only capturing horizontally.")]),a("doc-example",{attrs:{title:"Horizontally",file:"TouchPan/Horizontal"}}),a("p",[t._v("Example on capturing only vertically panning. Page scrolling is prevented, but you can opt out if you wish.")]),a("doc-example",{attrs:{title:"Vertically",file:"TouchPan/Vertical"}}),a("p",[t._v("Example on capturing panning on custom directions. For this, use modifiers: "),a("code",{staticClass:"doc-token"},[t._v("up")]),t._v(", "),a("code",{staticClass:"doc-token"},[t._v("down")]),t._v(", "),a("code",{staticClass:"doc-token"},[t._v("left")]),t._v(", "),a("code",{staticClass:"doc-token"},[t._v("right")]),t._v(". Page scrolling is prevented, but you can opt out if you wish.")]),a("doc-example",{attrs:{title:"Custom directions",file:"TouchPan/Custom"}}),a("h3",{staticClass:"doc-heading doc-h3",attrs:{id:"Handling-Mouse-Events"},on:{click:function(e){return t.copyHeading("Handling-Mouse-Events")}}},[t._v("Handling Mouse Events")]),a("p",[t._v("When you want to handle mouse events too, use the "),a("code",{staticClass:"doc-token"},[t._v("mouse")]),t._v(" modifier:")]),a("pre",{pre:!0,attrs:{class:"doc-code language-html"}},[a("code",{pre:!0,attrs:{class:"doc-code__inner doc-code__inner--prerendered language-html"}},[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("\x3c!--\n  directive will also be triggered by mouse actions\n--\x3e")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("div")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("v-touch-pan.mouse")]),a("span",{pre:!0,attrs:{class:"token attr-value"}},[a("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("userHasPanned"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("..."),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("div")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])]),a("h3",{staticClass:"doc-heading doc-h3",attrs:{id:"Preventing-Scroll-(on-touch-capable-devices)"},on:{click:function(e){t.copyHeading("Preventing-Scroll-(on-touch-capable-devices)")}}},[t._v("Preventing Scroll (on touch capable devices)")]),a("p",[t._v("By default, the directive does not block page scrolling. If you want to prevent scrolling, then use the "),a("code",{staticClass:"doc-token"},[t._v("prevent")]),t._v(" modifier.")]),a("pre",{pre:!0,attrs:{class:"doc-code language-html"}},[a("code",{pre:!0,attrs:{class:"doc-code__inner doc-code__inner--prerendered language-html"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("div")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("v-touch-pan.prevent")]),a("span",{pre:!0,attrs:{class:"token attr-value"}},[a("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("userHasPanned"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("..."),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("div")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])]),a("h3",{staticClass:"doc-heading doc-h3",attrs:{id:"Inhibiting-TouchPan"},on:{click:function(e){return t.copyHeading("Inhibiting-TouchPan")}}},[t._v("Inhibiting TouchPan")]),a("p",[t._v("When you want to inhibit TouchPan, you can do so by stopping propagation of the "),a("code",{staticClass:"doc-token"},[t._v("touchstart")]),t._v("/"),a("code",{staticClass:"doc-token"},[t._v("mousedown")]),t._v(" events from the inner content:")]),a("pre",{pre:!0,attrs:{class:"doc-code language-html"}},[a("code",{pre:!0,attrs:{class:"doc-code__inner doc-code__inner--prerendered language-html"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("div")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("v-touch-pan.mouse")]),a("span",{pre:!0,attrs:{class:"token attr-value"}},[a("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("userHasHold"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("\x3c!-- ...content --\x3e")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("div")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("@touchstart.stop")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("@mousedown.stop")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("\x3c!--\n      TouchPan will not apply here because\n      we are calling stopPropagation() on touchstart\n      and mousedown events\n    --\x3e")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("div")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("\x3c!-- ...content --\x3e")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("div")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])]),a("p",[t._v("However, if you are using "),a("code",{staticClass:"doc-token"},[t._v("capture")]),t._v(" or "),a("code",{staticClass:"doc-token"},[t._v("mouseCapture")]),t._v(" modifiers then events will first reach the TouchPan directive then the inner content, so TouchPan will still trigger.")]),a("h2",{staticClass:"doc-heading doc-h2",attrs:{id:"Example-with-FAB"},on:{click:function(e){return t.copyHeading("Example-with-FAB")}}},[t._v("Example with FAB")]),a("p",[t._v("Below is a nice example on using TouchPan on a QFab. You can drag it across the screen.")]),a("doc-example",{attrs:{title:"Draggable",file:"QFab/Draggable"}}),a("h2",{staticClass:"doc-heading doc-h2",attrs:{id:"Note-on-HMR"},on:{click:function(e){return t.copyHeading("Note-on-HMR")}}},[t._v("Note on HMR")]),a("p",[t._v("Due to performance reasons, not all of the modifiers are reactive. Some require a window/page/component refresh to get updated. Please check the API card for the modifiers which are not marked as reactive.")]),a("h2",{staticClass:"doc-heading doc-h2",attrs:{id:"TouchPan-API"},on:{click:function(e){return t.copyHeading("TouchPan-API")}}},[t._v("TouchPan API")]),a("doc-api",{attrs:{file:"TouchPan"}})],1)},o=[],s=a("8669"),c="Touch Pan Directive | Quasar Framework",i="Vue directive which triggers an event when the user drags the finger or mouse on a component or element.",r={meta:{title:"Touch Pan Directive",meta:{title:{name:"title",content:c},ogTitle:{name:"og:title",content:c},twitterTitle:{name:"twitter:title",content:c},description:{name:"description",content:i},ogDesc:{name:"og:description",content:i},twitterDesc:{name:"twitter:description",content:i}}},created:function(){this.$root.store.toc=[{id:"Installation",title:"Installation"},{id:"Usage",title:"Usage"},{id:"Handling-Mouse-Events",title:"Handling Mouse Events",sub:!0},{id:"Preventing-Scroll-(on-touch-capable-devices)",title:"Preventing Scroll (on touch capable devices)",sub:!0},{id:"Inhibiting-TouchPan",title:"Inhibiting TouchPan",sub:!0},{id:"Example-with-FAB",title:"Example with FAB"},{id:"Note-on-HMR",title:"Note on HMR"},{id:"TouchPan-API",title:"TouchPan API"}],this.related=[{name:"Touch Swipe",category:"Vue Directives",path:"/vue-directives/touch-swipe"},{name:"Touch Hold",category:"Vue Directives",path:"/vue-directives/touch-hold"}],this.nav=[{name:"Touch Hold",category:"Vue Directives",path:"/vue-directives/touch-hold",dir:"left"},{name:"Touch Repeat",category:"Vue Directives",path:"/vue-directives/touch-repeat",dir:"right"}]},methods:{copyHeading:s["a"]}},l=r,p=a("2877"),u=Object(p["a"])(l,n,o,!1,null,null,null);e["default"]=u.exports}}]);