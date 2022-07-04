(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[255],{f65b:function(t,a,s){"use strict";s.r(a);var e=function(){var t=this,a=t._self._c;return a("doc-page",{attrs:{"meta-title":t.metaTitle,title:"Scroll Observer",related:t.related,nav:t.nav,toc:t.toc,"meta-desc":t.metaDesc}},[a("p",[t._v("QScrollObserver is a Quasar component that emits a "),a("code",{staticClass:"doc-token"},[t._v("scroll")]),t._v(" event whenever the user scrolls the page or overflowed container with "),a("code",{staticClass:"doc-token"},[t._v(".scroll")]),t._v(" CSS class applied to it.")]),a("h2",{staticClass:"doc-heading doc-h2",attrs:{id:"qscrollobserver-api"},on:{click:function(a){return t.copyHeading("qscrollobserver-api")}}},[t._v("QScrollObserver API")]),a("doc-api",{attrs:{file:"QScrollObserver"}}),a("h2",{staticClass:"doc-heading doc-h2",attrs:{id:"usage"},on:{click:function(a){return t.copyHeading("usage")}}},[t._v("Usage")]),a("p",[t._v("Scroll this page to see the example below in action.")]),a("doc-example",{attrs:{title:"Basic",file:"QScrollObserver/Basic"}}),a("h2",{staticClass:"doc-heading doc-h2",attrs:{id:"determining-scrolling-container"},on:{click:function(a){return t.copyHeading("determining-scrolling-container")}}},[t._v("Determining Scrolling Container")]),a("p",[t._v("All components or directives in Quasar have a simple algorithm to determine the container that supports the scroll:")]),a("ul",[a("li",[t._v("if a "),a("code",{staticClass:"doc-token"},[t._v("scroll-target")]),t._v(" property is available on the component then it tries to use it as scroll container")]),a("li",[t._v("then it searches for a parent DOM element which has the "),a("code",{staticClass:"doc-token"},[t._v("scroll")]),t._v(", "),a("code",{staticClass:"doc-token"},[t._v("scroll-y")]),t._v(" or "),a("code",{staticClass:"doc-token"},[t._v("overflow-auto")]),t._v(" Quasar CSS helper classes attached to it,")]),a("li",[t._v("if none is found, then it considers that the scrolling takes place on the document itself.")])]),a("p",[t._v("Components like "),a("doc-link",{attrs:{to:"/vue-components/scroll-area"}},[t._v("QScrollArea")]),t._v(", for example, respect this design and have the "),a("code",{staticClass:"doc-token"},[t._v("scroll")]),t._v(" class embedded into it, so that QScrollObservable (or any other scrolling component or directive) can successfully detect it and attach the necessary event handlers to it.")],1),a("p",[t._v("Please note that simply attaching "),a("code",{staticClass:"doc-token"},[t._v("scroll")]),t._v(" CSS class to a DOM element or on a Vue component will have no effect if the respective element is not overflowed (example, with: CSS "),a("code",{staticClass:"doc-token"},[t._v("overflow: hidden")]),t._v(" and a height smaller than its inner content height).")]),a("p",[t._v("Example of good container:")]),a("pre",{pre:!0,attrs:{class:"doc-code language-html"}},[a("code",{pre:!0,attrs:{class:"doc-code__inner doc-code__inner--prerendered language-html"}},[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("\x3c!--\n  Quasar CSS helper 'overflow-hidden' is\n  equivalent to style=\"overflow: hidden\"\n--\x3e")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("div")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("class")]),a("span",{pre:!0,attrs:{class:"token attr-value"}},[a("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("scroll overflow-hidden"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),a("span",{pre:!0,attrs:{class:"token special-attr"}},[a("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("style")]),a("span",{pre:!0,attrs:{class:"token attr-value"}},[a("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),a("span",{pre:!0,attrs:{class:"token value css language-css"}},[a("span",{pre:!0,attrs:{class:"token property"}},[t._v("height")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 100px")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n  ...content expanding over the 100px height from container...\n  "),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("q-scroll-observer")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("@scroll")]),a("span",{pre:!0,attrs:{class:"token attr-value"}},[a("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("scrollHandler"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("/>")])]),t._v("\n\n  "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("\x3c!-- example with `v-scroll` directive --\x3e")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("div")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("v-scroll")]),a("span",{pre:!0,attrs:{class:"token attr-value"}},[a("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("scrollHandler"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("..."),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("div")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("div")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])]),a("p",[t._v("One more example with QScrollArea:")]),a("pre",{pre:!0,attrs:{class:"doc-code language-html"}},[a("code",{pre:!0,attrs:{class:"doc-code__inner doc-code__inner--prerendered language-html"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("q-scroll-area")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token special-attr"}},[a("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("style")]),a("span",{pre:!0,attrs:{class:"token attr-value"}},[a("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),a("span",{pre:!0,attrs:{class:"token value css language-css"}},[a("span",{pre:!0,attrs:{class:"token property"}},[t._v("width")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 400px"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("height")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 500px"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])])]),t._v(" "),a("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("class")]),a("span",{pre:!0,attrs:{class:"token attr-value"}},[a("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("bg-yellow"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n  ...content expanding over the 500px height from container...\n  "),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("q-scroll-observer")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("@scroll")]),a("span",{pre:!0,attrs:{class:"token attr-value"}},[a("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("scrollHandler"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("/>")])]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("q-scroll-area")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])]),a("h2",{staticClass:"doc-heading doc-h2",attrs:{id:"horizontal"},on:{click:function(a){return t.copyHeading("horizontal")}}},[t._v("Horizontal")]),a("p",[t._v("For capturing horizontal scrolling, set the "),a("code",{staticClass:"doc-token"},[t._v("axis")]),t._v(" prop to "),a("code",{staticClass:"doc-token"},[t._v("horizontal")]),t._v(":")]),a("pre",{pre:!0,attrs:{class:"doc-code language-html"}},[a("code",{pre:!0,attrs:{class:"doc-code__inner doc-code__inner--prerendered language-html"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("q-scroll-observer")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("axis")]),a("span",{pre:!0,attrs:{class:"token attr-value"}},[a("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("horizontal"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),a("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("@scroll")]),a("span",{pre:!0,attrs:{class:"token attr-value"}},[a("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("scrollHandler"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("/>")])]),t._v("\n")])]),a("h2",{staticClass:"doc-heading doc-h2",attrs:{id:"both-axis"},on:{click:function(a){return t.copyHeading("both-axis")}}},[t._v("Both axis")]),a("p",[t._v("For capturing both horizontal and vertical scrolling, set the "),a("code",{staticClass:"doc-token"},[t._v("axis")]),t._v(" prop to "),a("code",{staticClass:"doc-token"},[t._v("both")]),t._v(":")]),a("pre",{pre:!0,attrs:{class:"doc-code language-html"}},[a("code",{pre:!0,attrs:{class:"doc-code__inner doc-code__inner--prerendered language-html"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("q-scroll-observer")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("axis")]),a("span",{pre:!0,attrs:{class:"token attr-value"}},[a("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("both"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),a("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("@scroll")]),a("span",{pre:!0,attrs:{class:"token attr-value"}},[a("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("scrollHandler"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("/>")])]),t._v("\n")])]),a("h2",{staticClass:"doc-heading doc-h2",attrs:{id:"layout-scrolling"},on:{click:function(a){return t.copyHeading("layout-scrolling")}}},[t._v("Layout Scrolling")]),a("p",[t._v("When scrolling on a Layout with a Page, rather than injecting a QScrollObservable (and by so doing registering additional scroll events) you can take advantage of "),a("doc-link",{attrs:{to:"/layout/layout"}},[t._v("QLayout")]),t._v("´s "),a("code",{staticClass:"doc-token"},[t._v("@scroll")]),t._v(" event directly on your component defining the Layout.")],1),a("pre",{pre:!0,attrs:{class:"doc-code language-html"}},[a("code",{pre:!0,attrs:{class:"doc-code__inner doc-code__inner--prerendered language-html"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("q-layout")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("@scroll")]),a("span",{pre:!0,attrs:{class:"token attr-value"}},[a("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("scrollHandler"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("..."),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("q-layout")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])])],1)},n=[],r=s("8669"),o={name:"DocMarkdownPage",created:function(){this.metaTitle="Scroll Observer",this.metaDesc="The QScrollObserver Vue component emits an event whenever the user scrolls the page or the parent scrollable container.",this.related=[{name:"Resize Observer (for Element)",category:"Observers",path:"/vue-components/resize-observer"}],this.nav=[{name:"Resize Observer (for Element)",category:"Observers",path:"/vue-components/resize-observer",dir:"left"},{name:"Pagination",category:"Vue Components",path:"/vue-components/pagination",dir:"right"}],this.toc=[{id:"qscrollobserver-api",title:"QScrollObserver API"},{id:"usage",title:"Usage"},{id:"determining-scrolling-container",title:"Determining Scrolling Container"},{id:"horizontal",title:"Horizontal"},{id:"both-axis",title:"Both axis"},{id:"layout-scrolling",title:"Layout Scrolling"}],this.copyHeading=r["a"]}},c=o,l=s("2877"),p=Object(l["a"])(c,e,n,!1,null,null,null);a["default"]=p.exports}}]);