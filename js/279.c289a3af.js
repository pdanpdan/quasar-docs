(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[279],{afe7:function(e,t,o){"use strict";o.r(t);var a=function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("doc-page",{attrs:{"meta-title":e.metaTitle,title:"Handling Keyboard Navigation in Groups of Controls",nav:e.nav,badge:e.badge,toc:e.toc,"meta-desc":e.metaDesc}},[o("p",[e._v("Quasar offers a simple way to improve keyboard accessibility when using a large number of controls that can be grouped.")]),o("h2",{staticClass:"doc-heading doc-h2",attrs:{id:"keygroupnavigation-api"},on:{click:function(t){return e.copyHeading("keygroupnavigation-api")}}},[e._v("KeyGroupNavigation API")]),o("doc-api",{attrs:{file:"KeyGroupNavigation"}}),o("h2",{staticClass:"doc-heading doc-h2",attrs:{id:"installation"},on:{click:function(t){return e.copyHeading("installation")}}},[e._v("Installation")]),o("doc-installation",{attrs:{directives:"KeyGroupNavigation"}}),o("h2",{staticClass:"doc-heading doc-h2",attrs:{id:"usage"},on:{click:function(t){return e.copyHeading("usage")}}},[e._v("Usage")]),o("p",[e._v("Attach the directive on a group wrapping component or DOM element (like QList, QBar, QToolbar).\nKeyboard navigation using "),o("code",{staticClass:"doc-token"},[e._v("TAB")]),e._v(" or "),o("code",{staticClass:"doc-token"},[e._v("SHIFT")]),e._v(" + "),o("code",{staticClass:"doc-token"},[e._v("TAB")]),e._v(" keys will only select one tabbable element inside the group:")]),o("ul",[o("li",[e._v("the first / last tabbable element depending on navigation direction when first entering the group")]),o("li",[e._v("the last selected tabbable element when the group was visited before")]),o("li",[e._v("pressing the "),o("code",{staticClass:"doc-token"},[e._v("TAB")]),e._v(" or "),o("code",{staticClass:"doc-token"},[e._v("SHIFT")]),e._v(" + "),o("code",{staticClass:"doc-token"},[e._v("TAB")]),e._v(" keys when an element is focused inside the group will focus the next tabbable element after the group or the previous une before the group\nKeyboard navigation inside the group can be performed using:")]),o("li",[o("code",{staticClass:"doc-token"},[e._v("HOME")]),e._v(", "),o("code",{staticClass:"doc-token"},[e._v("ARROW_LEFT")]),e._v(", "),o("code",{staticClass:"doc-token"},[e._v("ARROW_RIGHT")]),e._v(" and "),o("code",{staticClass:"doc-token"},[e._v("END")]),e._v(" keys when "),o("code",{staticClass:"doc-token"},[e._v("horizontal")]),e._v(" modifier is used")]),o("li",[o("code",{staticClass:"doc-token"},[e._v("PG_UP")]),e._v(", "),o("code",{staticClass:"doc-token"},[e._v("ARROW_UP")]),e._v(", "),o("code",{staticClass:"doc-token"},[e._v("ARROW_DOWN")]),e._v(" and "),o("code",{staticClass:"doc-token"},[e._v("PG_DOWN")]),e._v(" keys when "),o("code",{staticClass:"doc-token"},[e._v("vertical")]),e._v(" modifier is used")]),o("li",[e._v("any of the above keys when neither "),o("code",{staticClass:"doc-token"},[e._v("horizontal")]),e._v(" nor "),o("code",{staticClass:"doc-token"},[e._v("vertical")]),e._v(" modifiers are used (default)\nThe navigation wraps at the start / end, moving to the last / first tabbable element.")])]),o("div",{staticClass:"doc-note doc-note--tip"},[o("p",{staticClass:"doc-note__title"},[e._v("TIP")]),o("ul",[o("li",[e._v("To skip processing key events for some elements set a "),o("code",{staticClass:"doc-token"},[e._v("q-key-group-navigation--ignore-key")]),e._v(" class on them or on a parent of them.")]),o("li",[e._v("If you want a specific element to be focused when keyboard navigating to a group then add a "),o("code",{staticClass:"doc-token"},[e._v("q-key-group-navigation__refocus")]),e._v(" class to the element.")])])]),o("div",{staticClass:"doc-note doc-note--warning"},[o("p",{staticClass:"doc-note__title"},[e._v("WARNING")]),o("p",[e._v("Try not to mix keyboard controlled components (like QKnob, QRange, QSlider, QRating, QDate, QTime) in key navigation groups as it might get confusing to the user.")])]),o("doc-example",{attrs:{title:"List navigation",file:"KeyGroupNavigation/List"}}),o("doc-example",{attrs:{title:"Bar navigation",file:"KeyGroupNavigation/Bar"}}),o("doc-example",{attrs:{title:"Toolbar navigation",file:"KeyGroupNavigation/Toolbar"}}),o("doc-example",{attrs:{title:"Form controls navigation",file:"KeyGroupNavigation/FormControls"}})],1)},i=[],n=o("8669"),s={name:"DocMarkdownPage",created:function(){this.metaTitle="Handling Keyboard Navigation in Groups of Controls",this.metaDesc="How to improve keyboard accessibility when using groups of controls in a Quasar app.",this.nav=[{name:"Go Back (Handling Back Button)",category:"Vue Directives",path:"/vue-directives/go-back",dir:"left"},{name:"Intersection",category:"Vue Directives",path:"/vue-directives/intersection",dir:"right"}],this.badge="v1.13+",this.toc=[{id:"keygroupnavigation-api",title:"KeyGroupNavigation API"},{id:"installation",title:"Installation"},{id:"usage",title:"Usage"}],this.copyHeading=n["a"]}},c=s,l=o("2877"),r=Object(l["a"])(c,a,i,!1,null,null,null);t["default"]=r.exports}}]);