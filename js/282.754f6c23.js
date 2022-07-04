(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[282],{ff84:function(e,t,i){"use strict";i.r(t);var a=function(){var e=this,t=e._self._c;return t("doc-page",{attrs:{"meta-title":e.metaTitle,title:"Material Ripples",nav:e.nav,toc:e.toc,"meta-desc":e.metaDesc}},[t("p",[e._v("Material Ripple effect can easily be added to any DOM element (or component) through the "),t("code",{staticClass:"doc-token"},[e._v("v-ripple")]),e._v(" Quasar directive.")]),t("div",{staticClass:"doc-note doc-note--danger"},[t("p",{staticClass:"doc-note__title"},[e._v("WARNING")]),t("p",[e._v("Do not use this directive on components that already have material ripples baked in (example: "),t("code",{staticClass:"doc-token"},[e._v("QBtn")]),e._v("). Rather configure the internal ripples through those component’s "),t("code",{staticClass:"doc-token"},[e._v("ripple")]),e._v(" property.")])]),t("h2",{staticClass:"doc-heading doc-h2",attrs:{id:"ripple-api"},on:{click:function(t){return e.copyHeading("ripple-api")}}},[e._v("Ripple API")]),t("doc-api",{attrs:{file:"Ripple"}}),t("h2",{staticClass:"doc-heading doc-h2",attrs:{id:"usage"},on:{click:function(t){return e.copyHeading("usage")}}},[e._v("Usage")]),t("div",{staticClass:"doc-note doc-note--warning"},[t("p",{staticClass:"doc-note__title"},[e._v("WARNING")]),t("p",[e._v("Make sure that your DOM element or component has CSS "),t("code",{staticClass:"doc-token"},[e._v("position: relative")]),e._v(" or Quasar CSS helper class "),t("code",{staticClass:"doc-token"},[e._v("relative-position")]),e._v(" attached to it.")])]),t("h3",{staticClass:"doc-heading doc-h3",attrs:{id:"basic"},on:{click:function(t){return e.copyHeading("basic")}}},[e._v("Basic")]),t("doc-example",{attrs:{title:"Basic",file:"Ripple/Basic"}}),t("h3",{staticClass:"doc-heading doc-h3",attrs:{id:"coloring"},on:{click:function(t){return e.copyHeading("coloring")}}},[e._v("Coloring")]),t("p",[e._v("The Material Ripple takes the CSS color of text by default, but you can configure it:")]),t("doc-example",{attrs:{title:"Colored",file:"Ripple/Colored"}}),t("h3",{staticClass:"doc-heading doc-h3",attrs:{id:"positioning"},on:{click:function(t){return e.copyHeading("positioning")}}},[e._v("Positioning")]),t("p",[e._v("You can also configure if the ripple should always start from center or not, regardless of the touch point:")]),t("doc-example",{attrs:{title:"Positioning",file:"Ripple/Positioning"}}),t("h3",{staticClass:"doc-heading doc-h3",attrs:{id:"triggering-early"},on:{click:function(t){return e.copyHeading("triggering-early")}}},[e._v("Triggering early "),t("q-badge",{attrs:{align:"top",color:"brand-primary",label:"v1.9.8+"}})],1),t("p",[e._v("By default, the Ripple directive is triggered on click or keyup. However, you can change that and make it trigger earlier, on the first user interaction (mousedown, touchstart, keydown). Please note that in most situations the event sets may overlap (small delay between first and last user interaction) and there is no difference in the user perception, but in certain conditions it may lead to misleading the user.")]),t("p",[e._v("This is especially noticeable on touchscreens where if a user accidentally moves their finger after the touchstart it can sometimes be interpreted as a very small scroll event instead of a click so the click event isn’t triggered but there is still a ripple.")]),t("doc-example",{attrs:{title:"Triggering immediately",file:"Ripple/Early"}}),t("h3",{staticClass:"doc-heading doc-h3",attrs:{id:"disable"},on:{click:function(t){return e.copyHeading("disable")}}},[e._v("Disable")]),t("p",[e._v("If for some reason you have a scenario where the ripples need to be disabled, then you can assign a Boolean as value for the directive:")]),t("doc-example",{attrs:{title:"Disable",file:"Ripple/Disable"}})],1)},o=[],s=i("8669"),n={name:"DocMarkdownPage",created:function(){this.metaTitle="Material Ripples",this.metaDesc="Vue directive for easily adding material ripples to your components and DOM elements.",this.nav=[{name:"Intersection",category:"Vue Directives",path:"/vue-directives/intersection",dir:"left"},{name:"Mutation",category:"Vue Directives",path:"/vue-directives/mutation",dir:"right"}],this.toc=[{id:"ripple-api",title:"Ripple API"},{id:"usage",title:"Usage"},{id:"basic",title:"Basic",sub:!0},{id:"coloring",title:"Coloring",sub:!0},{id:"positioning",title:"Positioning",sub:!0},{id:"triggering-early",title:"Triggering early",sub:!0},{id:"disable",title:"Disable",sub:!0}],this.copyHeading=s["a"]}},r=n,c=i("2877"),l=Object(c["a"])(r,a,o,!1,null,null,null);t["default"]=l.exports}}]);