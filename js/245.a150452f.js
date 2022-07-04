(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[245],{6011:function(e,t,a){"use strict";a.r(t);var o=function(){var e=this,t=e._self._c;return t("doc-page",{attrs:{"meta-title":e.metaTitle,title:"QParallax",related:e.related,nav:e.nav,toc:e.toc,"meta-desc":e.metaDesc}},[t("p",[e._v("Parallax scrolling is a technique in computer graphics and web design, where background images move by the camera slower than foreground images, creating an illusion of depth in a 2D scene and adding to the immersion.")]),t("p",[e._v("QParallax takes care of a lot of quirks, including image/video size which can actually be smaller than the window width/height.")]),t("h2",{staticClass:"doc-heading doc-h2",attrs:{id:"qparallax-api"},on:{click:function(t){return e.copyHeading("qparallax-api")}}},[e._v("QParallax API")]),t("doc-api",{attrs:{file:"QParallax"}}),t("h2",{staticClass:"doc-heading doc-h2",attrs:{id:"usage"},on:{click:function(t){return e.copyHeading("usage")}}},[e._v("Usage")]),t("div",{staticClass:"doc-note doc-note--tip"},[t("p",{staticClass:"doc-note__title"},[e._v("Scrolling container")]),t("p",[e._v("Please read "),t("doc-link",{attrs:{to:"/vue-components/scroll-observer#determining-scrolling-container"}},[e._v("here")]),e._v(" about how Quasar determines the container to attach scrolling events to.")],1)]),t("h3",{staticClass:"doc-heading doc-h3",attrs:{id:"image-background"},on:{click:function(t){return e.copyHeading("image-background")}}},[e._v("Image background")]),t("doc-example",{attrs:{title:"Image background",file:"QParallax/Image"}}),t("h3",{staticClass:"doc-heading doc-h3",attrs:{id:"video-background"},on:{click:function(t){return e.copyHeading("video-background")}}},[e._v("Video background")]),t("div",{staticClass:"doc-note doc-note--warning"},[t("p",{staticClass:"doc-note__title"},[e._v("WARNING")]),t("p",[e._v("On some iOS platforms there may be problems regarding the autoplay feature of the native "),t("code",{staticClass:"doc-token"},[e._v("<video>")]),e._v(" tag. "),t("doc-link",{attrs:{to:"https://webkit.org/blog/6784/new-video-policies-for-ios/"}},[e._v("Reference")]),e._v(". QParallax and Quasar are not interfering in any way with the client browser’s ability/restrictions on the "),t("code",{staticClass:"doc-token"},[e._v("<video>")]),e._v(" tag.")],1)]),t("div",{staticClass:"doc-note doc-note--warning"},[t("p",{staticClass:"doc-note__title"},[e._v("WARNING")]),t("p",[e._v("When using the "),t("code",{staticClass:"doc-token"},[e._v("video")]),e._v(" tag inside QParallax, you "),t("strong",[e._v("must")]),e._v(" provide the "),t("code",{staticClass:"doc-token"},[e._v("width")]),e._v(" and "),t("code",{staticClass:"doc-token"},[e._v("height")]),e._v(" attributes in order for QParallax to work properly because of the intrinsic resizing capabilities of this type of media. Also, be aware that the actual video width and height are not available until the video’s metadata has been loaded.")])]),t("doc-example",{attrs:{title:"Custom height with video background",file:"QParallax/Video"}}),t("h3",{staticClass:"doc-heading doc-h3",attrs:{id:"custom-speed"},on:{click:function(t){return e.copyHeading("custom-speed")}}},[e._v("Custom speed")]),t("doc-example",{attrs:{title:"Custom speed",file:"QParallax/Speed"}}),t("h3",{staticClass:"doc-heading doc-h3",attrs:{id:"using-slot"},on:{click:function(t){return e.copyHeading("using-slot")}}},[e._v("Using slot")]),t("doc-example",{attrs:{title:"Scoped Slot",file:"QParallax/ScopedSlot"}})],1)},i=[],n=a("8669"),s={name:"DocMarkdownPage",created:function(){this.metaTitle="QParallax",this.metaDesc="The QParallax Vue component makes it easy to embed a parallax scrolling effect into a page.",this.related=[{name:"Video",category:"Vue Components",path:"/vue-components/video"}],this.nav=[{name:"Pagination",category:"Vue Components",path:"/vue-components/pagination",dir:"left"},{name:"Popup Edit",category:"Vue Components",path:"/vue-components/popup-edit",dir:"right"}],this.toc=[{id:"qparallax-api",title:"QParallax API"},{id:"usage",title:"Usage"},{id:"image-background",title:"Image background",sub:!0},{id:"video-background",title:"Video background",sub:!0},{id:"custom-speed",title:"Custom speed",sub:!0},{id:"using-slot",title:"Using slot",sub:!0}],this.copyHeading=n["a"]}},c=s,d=a("2877"),l=Object(d["a"])(c,o,i,!1,null,null,null);t["default"]=l.exports}}]);