(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[228],{d6ec:function(t,e,n){"use strict";n.r(e);var o=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("doc-page",{attrs:{title:"Infinite Scroll",related:t.related,nav:t.nav}},[n("p",[t._v("The QInfiniteScroll component allows you to load new content as the user scrolls the page.")]),n("h2",{staticClass:"doc-heading doc-h2",attrs:{id:"Installation"},on:{click:function(e){return t.copyHeading("Installation")}}},[t._v("Installation")]),n("doc-installation",{attrs:{components:"QInfiniteScroll"}}),n("h2",{staticClass:"doc-heading doc-h2",attrs:{id:"Usage"},on:{click:function(e){return t.copyHeading("Usage")}}},[t._v("Usage")]),n("div",{staticClass:"doc-note doc-note--tip"},[n("p",{staticClass:"doc-note__title"},[t._v("TIP")]),n("p",[t._v("Infinite Scroll loads items in advance when less than "),n("code",{staticClass:"doc-token"},[t._v("offset")]),t._v(" (default = 500) pixels is left to be seen. If the content you fetch has height less than the scroll target container’s height on screen then Infinite Scroll will continue loading more content. So make sure you load enough content.")])]),n("div",{staticClass:"doc-note doc-note--tip"},[n("p",{staticClass:"doc-note__title"},[t._v("TIP")]),n("p",[t._v("In your "),n("code",{staticClass:"doc-token"},[t._v("@load")]),t._v(" function, don’t forget to call the passed in "),n("code",{staticClass:"doc-token"},[t._v("done()")]),t._v(" function when you have finished loading more data.")])]),n("p",[t._v("Scroll to the bottom to see QInfiniteScroll in action.")]),n("doc-example",{attrs:{title:"Basic",file:"QInfiniteScroll/Basic",scrollable:""}}),n("doc-example",{attrs:{title:"Custom Scroll Target Container",file:"QInfiniteScroll/Container"}}),n("doc-example",{attrs:{title:"Reverse (Messenger style)",file:"QInfiniteScroll/Reverse",scrollable:""}}),n("h3",{staticClass:"doc-heading doc-h3",attrs:{id:"Tips"},on:{click:function(e){return t.copyHeading("Tips")}}},[t._v("Tips")]),n("ul",[n("li",[t._v("Works best when placed as direct child of the Vue component rendering your Page")]),n("li",[t._v("If you change the parent of this component, don’t forget to call "),n("code",{staticClass:"doc-token"},[t._v("updateScrollTarget()")]),t._v(" on the QInfiniteScroll Vue reference.")]),n("li",[t._v("If you need to specify the scroll target inner element (because the auto detected one is not the desired one) pass a CSS selector (as string) or the DOM element in the "),n("code",{staticClass:"doc-token"},[t._v("scroll-target")]),t._v(" prop")])]),n("div",{staticClass:"doc-note doc-note--warning"},[n("p",{staticClass:"doc-note__title"},[t._v("WARNING")]),n("p",[t._v("If you pass a custom scroll target container with "),n("code",{staticClass:"doc-token"},[t._v("scroll-target")]),t._v(" prop you must make sure that the element exists and that it can be overflowed (it must have a maximum height and an overflow that allows scrolling).")]),n("p",[t._v("If the scroll target container cannot be overflowed you’ll get a forever loading situation.")])]),n("doc-example",{attrs:{title:"Usage in QMenu",file:"QInfiniteScroll/Menu"}}),n("h2",{staticClass:"doc-heading doc-h2",attrs:{id:"QInfiniteScroll-API"},on:{click:function(e){return t.copyHeading("QInfiniteScroll-API")}}},[t._v("QInfiniteScroll API")]),n("doc-api",{attrs:{file:"QInfiniteScroll"}})],1)},i=[],a=n("8669");const l="Infinite Scroll | Quasar Framework",s="The QInfiniteScroll Vue component allows you to load new content as the user scrolls the page.";var c={meta:{title:"Infinite Scroll",meta:{title:{name:"title",content:l},ogTitle:{name:"og:title",content:l},twitterTitle:{name:"twitter:title",content:l},description:{name:"description",content:s},ogDesc:{name:"og:description",content:s},twitterDesc:{name:"twitter:description",content:s}}},created(){this.$root.store.toc=[{id:"Installation",title:"Installation"},{id:"Usage",title:"Usage"},{id:"Tips",title:"Tips",sub:!0},{id:"QInfiniteScroll-API",title:"QInfiniteScroll API"}],this.related=[{name:"Spinners",category:"Vue Components",path:"/vue-components/spinners"},{name:"Pull to refresh",category:"Vue Components",path:"/vue-components/pull-to-refresh"},{name:"Intersection",category:"Vue Components",path:"/vue-components/intersection"}],this.nav=[{name:"Img",category:"Vue Components",path:"/vue-components/img",dir:"left"},{name:"Inner Loading",category:"Vue Components",path:"/vue-components/inner-loading",dir:"right"}]},methods:{copyHeading:a["a"]}},r=c,d=n("2877"),p=Object(d["a"])(r,o,i,!1,null,null,null);e["default"]=p.exports}}]);