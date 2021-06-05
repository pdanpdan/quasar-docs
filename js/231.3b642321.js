(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[231],{d6ec:function(e,t,o){"use strict";o.r(t);var n=function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("doc-page",{attrs:{"meta-title":e.metaTitle,title:"Infinite Scroll",related:e.related,nav:e.nav,toc:e.toc,"meta-desc":e.metaDesc}},[o("p",[e._v("The QInfiniteScroll component allows you to load new content as the user scrolls the page.")]),o("h2",{staticClass:"doc-heading doc-h2",attrs:{id:"qinfinitescroll-api"},on:{click:function(t){return e.copyHeading("qinfinitescroll-api")}}},[e._v("QInfiniteScroll API")]),o("doc-api",{attrs:{file:"QInfiniteScroll"}}),o("h2",{staticClass:"doc-heading doc-h2",attrs:{id:"usage"},on:{click:function(t){return e.copyHeading("usage")}}},[e._v("Usage")]),o("div",{staticClass:"doc-note doc-note--tip"},[o("p",{staticClass:"doc-note__title"},[e._v("TIP")]),o("p",[e._v("Infinite Scroll loads items in advance when less than "),o("code",{staticClass:"doc-token"},[e._v("offset")]),e._v(" (default = 500) pixels is left to be seen. If the content you fetch has height less than the scroll target container’s height on screen then Infinite Scroll will continue loading more content. So make sure you load enough content.")])]),o("div",{staticClass:"doc-note doc-note--tip"},[o("p",{staticClass:"doc-note__title"},[e._v("TIP")]),o("p",[e._v("In your "),o("code",{staticClass:"doc-token"},[e._v("@load")]),e._v(" function, don’t forget to call the passed in "),o("code",{staticClass:"doc-token"},[e._v("done()")]),e._v(" function when you have finished loading more data.")])]),o("p",[e._v("Scroll to the bottom to see QInfiniteScroll in action.")]),o("doc-example",{attrs:{title:"Basic",file:"QInfiniteScroll/Basic",scrollable:""}}),o("doc-example",{attrs:{title:"Custom Scroll Target Container",file:"QInfiniteScroll/Container"}}),o("doc-example",{attrs:{title:"Reverse (Messenger style)",file:"QInfiniteScroll/Reverse",scrollable:""}}),o("h3",{staticClass:"doc-heading doc-h3",attrs:{id:"tips"},on:{click:function(t){return e.copyHeading("tips")}}},[e._v("Tips")]),o("ul",[o("li",[e._v("Works best when placed as direct child of the Vue component rendering your Page")]),o("li",[e._v("If you change the parent of this component, don’t forget to call "),o("code",{staticClass:"doc-token"},[e._v("updateScrollTarget()")]),e._v(" on the QInfiniteScroll Vue reference.")]),o("li",[e._v("If you need to specify the scroll target inner element (because the auto detected one is not the desired one) pass a CSS selector (as string) or the DOM element in the "),o("code",{staticClass:"doc-token"},[e._v("scroll-target")]),e._v(" prop")])]),o("div",{staticClass:"doc-note doc-note--warning"},[o("p",{staticClass:"doc-note__title"},[e._v("WARNING")]),o("p",[e._v("If you pass a custom scroll target container with "),o("code",{staticClass:"doc-token"},[e._v("scroll-target")]),e._v(" prop you must make sure that the element exists and that it can be overflowed (it must have a maximum height and an overflow that allows scrolling).")]),o("p",[e._v("If the scroll target container cannot be overflowed you’ll get a forever loading situation.")])]),o("doc-example",{attrs:{title:"Usage in QMenu",file:"QInfiniteScroll/Menu"}})],1)},i=[],a=o("8669"),s={name:"DocMarkdownPage",created:function(){this.metaTitle="Infinite Scroll",this.metaDesc="The QInfiniteScroll Vue component allows you to load new content as the user scrolls the page.",this.related=[{name:"Spinners",category:"Vue Components",path:"/vue-components/spinners"},{name:"Pull to refresh",category:"Vue Components",path:"/vue-components/pull-to-refresh"},{name:"Intersection",category:"Vue Components",path:"/vue-components/intersection"}],this.nav=[{name:"Img",category:"Vue Components",path:"/vue-components/img",dir:"left"},{name:"Inner Loading",category:"Vue Components",path:"/vue-components/inner-loading",dir:"right"}],this.toc=[{id:"qinfinitescroll-api",title:"QInfiniteScroll API"},{id:"usage",title:"Usage"},{id:"tips",title:"Tips",sub:!0}],this.copyHeading=a["a"]}},l=s,c=o("2877"),r=Object(c["a"])(l,n,i,!1,null,null,null);t["default"]=r.exports}}]);