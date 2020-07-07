(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[56],{b0eb:function(e,t,a){"use strict";a.r(t);var o=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("doc-page",{attrs:{title:"Layout QPageScroller",related:e.related,nav:e.nav}},[a("p",[e._v("The QPageScroller component helps in placing DOM elements / components wrapped by it into a static position within the content area of your QPage, no matter where the user scrolls.")]),a("p",[e._v("The great advantage of this is that the elements wrapped by this component will never overlap the layout header, footer or drawer(s), even if those are not configured to be fixed. In the latter case, the position will be offset so that the overlap won’t occur.\nTry it out with a non-fixed footer for example. When user reaches bottom of screen and footer comes into view, the component will shift up so it won’t overlap with the footer.")]),a("p",[e._v("Essentially QPageScroller is very similar to QPageSticky. Whereas a QPageSticky component is always visible, a QPageScroller component only appears after a "),a("code",{staticClass:"doc-token"},[e._v("scroll-offset")]),e._v(" (property) is reached. Once visible, the user can click on it to quickly get back to the top of the page via "),a("code",{staticClass:"doc-token"},[e._v("duration")]),e._v(" property.")]),a("h2",{staticClass:"doc-heading doc-h2",attrs:{id:"Installation"},on:{click:function(t){return e.copyHeading("Installation")}}},[e._v("Installation")]),a("doc-installation",{attrs:{components:"QPageScroller"}}),a("h2",{staticClass:"doc-heading doc-h2",attrs:{id:"Usage"},on:{click:function(t){return e.copyHeading("Usage")}}},[e._v("Usage")]),a("div",{staticClass:"doc-note doc-note--tip"},[a("p",{staticClass:"doc-note__title"},[e._v("TIP")]),a("p",[e._v("Since QPageScroller needs a layout and QLayout by default manages the entire window, then for demoing purposes we are going to use containerized QLayouts. But remember that by no means you are required to use containerized QLayouts for QPageScroller.")])]),a("div",{staticClass:"doc-note doc-note--warning"},[a("p",{staticClass:"doc-note__title"},[e._v("WARNING")]),a("ul",[a("li",[e._v("In order for QPageScroller to work, it must be placed within a QLayout component.")]),a("li",[e._v("QPageScroller must be the last child element within its parent, so it can display on top of other content")])])]),a("h3",{staticClass:"doc-heading doc-h3",attrs:{id:"Basic"},on:{click:function(t){return e.copyHeading("Basic")}}},[e._v("Basic")]),a("doc-example",{attrs:{title:"Basic",file:"QPageScroller/Basic"}}),a("h3",{staticClass:"doc-heading doc-h3",attrs:{id:"Expanded"},on:{click:function(t){return e.copyHeading("Expanded")}}},[e._v("Expanded")]),a("doc-example",{attrs:{title:"Expanded",file:"QPageScroller/Expanded"}}),a("h3",{staticClass:"doc-heading doc-h3",attrs:{id:"Reverse"},on:{click:function(t){return e.copyHeading("Reverse")}}},[e._v("Reverse "),a("q-badge",{attrs:{align:"top",label:"v1.9+"}})],1),a("doc-example",{attrs:{title:"Reverse",file:"QPageScroller/Reverse"}}),a("h2",{staticClass:"doc-heading doc-h2",attrs:{id:"QPageScroller-API"},on:{click:function(t){return e.copyHeading("QPageScroller-API")}}},[e._v("QPageScroller API")]),a("doc-api",{attrs:{file:"QPageScroller"}})],1)},n=[],i=a("8669");const r="Layout QPageScroller | Quasar Framework",c="How to use the QPageScroller component. Places components that will appear on screen after user scrolls the page.";var l={meta:{title:"Layout QPageScroller",meta:{title:{name:"title",content:r},ogTitle:{name:"og:title",content:r},twitterTitle:{name:"twitter:title",content:r},description:{name:"description",content:c},ogDesc:{name:"og:description",content:c},twitterDesc:{name:"twitter:description",content:c}}},created(){this.$root.store.toc=[{id:"Installation",title:"Installation"},{id:"Usage",title:"Usage"},{id:"Basic",title:"Basic",sub:!0},{id:"Expanded",title:"Expanded",sub:!0},{id:"Reverse",title:"Reverse",sub:!0},{id:"QPageScroller-API",title:"QPageScroller API"}],this.related=[{name:"Layout",category:"Layout and Grid",path:"/layout/layout"},{name:"Layout Page",category:"Layout and Grid",path:"/layout/page"}],this.nav=[{name:"Page Sticky",category:"Layout and Grid",path:"/layout/page-sticky",dir:"left"},{name:"Ajax Bar",category:"Vue Components",path:"/vue-components/ajax-bar",dir:"right"}]},methods:{copyHeading:i["a"]}},s=l,d=a("2877"),p=Object(d["a"])(s,o,n,!1,null,null,null);t["default"]=p.exports}}]);