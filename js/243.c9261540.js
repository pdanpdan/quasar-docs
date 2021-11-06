(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[243],{6011:function(e,t,a){"use strict";a.r(t);var o=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("doc-page",{attrs:{"meta-title":e.metaTitle,title:"QParallax",related:e.related,nav:e.nav,toc:e.toc,"meta-desc":e.metaDesc}},[a("p",[e._v("Parallax scrolling is a technique in computer graphics and web design, where background images move by the camera slower than foreground images, creating an illusion of depth in a 2D scene and adding to the immersion.")]),a("p",[e._v("QParallax takes care of a lot of quirks, including image/video size which can actually be smaller than the window width/height.")]),a("h2",{staticClass:"doc-heading doc-h2",attrs:{id:"qparallax-api"},on:{click:function(t){return e.copyHeading("qparallax-api")}}},[e._v("QParallax API")]),a("doc-api",{attrs:{file:"QParallax"}}),a("h2",{staticClass:"doc-heading doc-h2",attrs:{id:"usage"},on:{click:function(t){return e.copyHeading("usage")}}},[e._v("Usage")]),a("div",{staticClass:"doc-note doc-note--tip"},[a("p",{staticClass:"doc-note__title"},[e._v("Scrolling container")]),a("p",[e._v("Please read "),a("doc-link",{attrs:{to:"/vue-components/scroll-observer#determining-scrolling-container"}},[e._v("here")]),e._v(" about how Quasar determines the container to attach scrolling events to.")],1)]),a("h3",{staticClass:"doc-heading doc-h3",attrs:{id:"image-background"},on:{click:function(t){return e.copyHeading("image-background")}}},[e._v("Image background")]),a("doc-example",{attrs:{title:"Image background",file:"QParallax/Image"}}),a("h3",{staticClass:"doc-heading doc-h3",attrs:{id:"video-background"},on:{click:function(t){return e.copyHeading("video-background")}}},[e._v("Video background")]),a("div",{staticClass:"doc-note doc-note--warning"},[a("p",{staticClass:"doc-note__title"},[e._v("WARNING")]),a("p",[e._v("On some iOS platforms there may be problems regarding the autoplay feature of the native "),a("code",{staticClass:"doc-token"},[e._v("<video>")]),e._v(" tag. "),a("doc-link",{attrs:{to:"https://webkit.org/blog/6784/new-video-policies-for-ios/"}},[e._v("Reference")]),e._v(". QParallax and Quasar are not interfering in any way with the client browser’s ability/restrictions on the "),a("code",{staticClass:"doc-token"},[e._v("<video>")]),e._v(" tag.")],1)]),a("div",{staticClass:"doc-note doc-note--warning"},[a("p",{staticClass:"doc-note__title"},[e._v("WARNING")]),a("p",[e._v("When using the "),a("code",{staticClass:"doc-token"},[e._v("video")]),e._v(" tag inside QParallax, you "),a("strong",[e._v("must")]),e._v(" provide the "),a("code",{staticClass:"doc-token"},[e._v("width")]),e._v(" and "),a("code",{staticClass:"doc-token"},[e._v("height")]),e._v(" attributes in order for QParallax to work properly because of the intrinsic resizing capabilities of this type of media. Also, be aware that the actual video width and height are not available until the video’s metadata has been loaded.")])]),a("doc-example",{attrs:{title:"Custom height with video background",file:"QParallax/Video"}}),a("h3",{staticClass:"doc-heading doc-h3",attrs:{id:"custom-speed"},on:{click:function(t){return e.copyHeading("custom-speed")}}},[e._v("Custom speed")]),a("doc-example",{attrs:{title:"Custom speed",file:"QParallax/Speed"}}),a("h3",{staticClass:"doc-heading doc-h3",attrs:{id:"using-slot"},on:{click:function(t){return e.copyHeading("using-slot")}}},[e._v("Using slot")]),a("doc-example",{attrs:{title:"Scoped Slot",file:"QParallax/ScopedSlot"}})],1)},i=[],n=a("8669"),s={name:"DocMarkdownPage",created:function(){this.metaTitle="QParallax",this.metaDesc="The QParallax Vue component makes it easy to embed a parallax scrolling effect into a page.",this.related=[{name:"Video",category:"Vue Components",path:"/vue-components/video"}],this.nav=[{name:"Pagination",category:"Vue Components",path:"/vue-components/pagination",dir:"left"},{name:"Popup Edit",category:"Vue Components",path:"/vue-components/popup-edit",dir:"right"}],this.toc=[{id:"qparallax-api",title:"QParallax API"},{id:"usage",title:"Usage"},{id:"image-background",title:"Image background",sub:!0},{id:"video-background",title:"Video background",sub:!0},{id:"custom-speed",title:"Custom speed",sub:!0},{id:"using-slot",title:"Using slot",sub:!0}],this.copyHeading=n["a"]}},c=s,l=a("2877"),d=Object(l["a"])(c,o,i,!1,null,null,null);t["default"]=d.exports}}]);