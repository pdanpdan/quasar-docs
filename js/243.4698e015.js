(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[243],{"1f87":function(t,e,o){"use strict";o.r(e);var n=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("doc-page",{attrs:{title:"Pull to refresh",related:t.related,nav:t.nav}},[o("p",[t._v("The QPullToRefresh is a component that allows the user to pull down in order to refresh page content (or retrieve the newest content).")]),o("h2",{staticClass:"doc-heading doc-h2",attrs:{id:"Installation"},on:{click:function(e){return t.copyHeading("Installation")}}},[t._v("Installation")]),o("doc-installation",{attrs:{components:"QPullToRefresh"}}),o("h2",{staticClass:"doc-heading doc-h2",attrs:{id:"Usage"},on:{click:function(e){return t.copyHeading("Usage")}}},[t._v("Usage")]),o("h3",{staticClass:"doc-heading doc-h3",attrs:{id:"Basic"},on:{click:function(e){return t.copyHeading("Basic")}}},[t._v("Basic")]),o("div",{staticClass:"doc-note doc-note--warning"},[o("p",{staticClass:"doc-note__title"},[t._v("WARNING")]),o("p",[t._v("In your "),o("code",{staticClass:"doc-token"},[t._v("@refresh")]),t._v(" function, don’t forget to call the passed in "),o("code",{staticClass:"doc-token"},[t._v("done()")]),t._v(" function when you have finished loading more data.")])]),o("p",[t._v("To refresh, pull down (with mouse or through finger touch) on the content below when the inner scroll position is the top.")]),o("doc-example",{attrs:{title:"Basic",file:"QPullToRefresh/Basic"}}),o("h3",{staticClass:"doc-heading doc-h3",attrs:{id:"Custom-icon"},on:{click:function(e){return t.copyHeading("Custom-icon")}}},[t._v("Custom icon")]),o("doc-example",{attrs:{title:"Custom icon",file:"QPullToRefresh/Icon"}}),o("h3",{staticClass:"doc-heading doc-h3",attrs:{id:"Custom-coloring"},on:{click:function(e){return t.copyHeading("Custom-coloring")}}},[t._v("Custom coloring "),o("q-badge",{attrs:{align:"top",label:"v1.9.5+"}})],1),o("doc-example",{attrs:{title:"Custom coloring",file:"QPullToRefresh/CustomColoring"}}),o("h2",{staticClass:"doc-heading doc-h2",attrs:{id:"Tips"},on:{click:function(e){return t.copyHeading("Tips")}}},[t._v("Tips")]),o("ul",[o("li",[t._v("If using a QLayout, then it’s recommended that you put QPullToRefresh as direct child of QPage and wrap your page content with it.")]),o("li",[t._v("If you change the parent of this component, don’t forget to call "),o("code",{staticClass:"doc-token"},[t._v("updateScrollTarget()")]),t._v(" on the QPullToRefresh Vue reference.")]),o("li",[t._v("QPullToRefresh also allows text selection, so if your content also has images, you might want to add "),o("code",{staticClass:"doc-token"},[t._v('draggable="false"')]),t._v(" to them, otherwise the native browser behavior might interfere in a negative way.")])]),o("h2",{staticClass:"doc-heading doc-h2",attrs:{id:"QPullToRefresh-API"},on:{click:function(e){return t.copyHeading("QPullToRefresh-API")}}},[t._v("QPullToRefresh API")]),o("doc-api",{attrs:{file:"QPullToRefresh"}})],1)},i=[],s=o("8669");const a="Pull to refresh | Quasar Framework",c="The QPullToRefresh Vue component allows the user to pull down in order to refresh or retrieve the newest content on a page.";var l={meta:{title:"Pull to refresh",meta:{title:{name:"title",content:a},ogTitle:{name:"og:title",content:a},twitterTitle:{name:"twitter:title",content:a},description:{name:"description",content:c},ogDesc:{name:"og:description",content:c},twitterDesc:{name:"twitter:description",content:c}}},created(){this.$root.store.toc=[{id:"Installation",title:"Installation"},{id:"Usage",title:"Usage"},{id:"Basic",title:"Basic",sub:!0},{id:"Custom-icon",title:"Custom icon",sub:!0},{id:"Custom-coloring",title:"Custom coloring",sub:!0},{id:"Tips",title:"Tips"},{id:"QPullToRefresh-API",title:"QPullToRefresh API"}],this.related=[{name:"Infinite Scroll",category:"Vue Components",path:"/vue-components/infinite-scroll"},{name:"Intersection",category:"Vue Components",path:"/vue-components/intersection"},{name:"Icon",category:"Vue Components",path:"/vue-components/icon"}],this.nav=[{name:"Popup Proxy",category:"Vue Components",path:"/vue-components/popup-proxy",dir:"left"},{name:"Rating",category:"Vue Components",path:"/vue-components/rating",dir:"right"}]},methods:{copyHeading:s["a"]}},r=l,d=o("2877"),u=Object(d["a"])(r,n,i,!1,null,null,null);e["default"]=u.exports}}]);