(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[215],{c9f4:function(t,e,a){"use strict";a.r(e);var o=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("doc-page",{attrs:{"meta-title":t.metaTitle,title:"Carousel",nav:t.nav,toc:t.toc,"meta-desc":t.metaDesc}},[a("p",[t._v("The QCarousel component allows you to display more information with less real estate, using slides. Useful for creating Wizards or an image gallery too.")]),a("h2",{staticClass:"doc-heading doc-h2",attrs:{id:"qcarousel-api"},on:{click:function(e){return t.copyHeading("qcarousel-api")}}},[t._v("QCarousel API")]),a("doc-api",{attrs:{file:"QCarousel"}}),a("h2",{staticClass:"doc-heading doc-h2",attrs:{id:"qcarouselcontrol-api"},on:{click:function(e){return t.copyHeading("qcarouselcontrol-api")}}},[t._v("QCarouselControl API")]),a("doc-api",{attrs:{file:"QCarouselControl"}}),a("h2",{staticClass:"doc-heading doc-h2",attrs:{id:"qcarouselslide-api"},on:{click:function(e){return t.copyHeading("qcarouselslide-api")}}},[t._v("QCarouselSlide API")]),a("doc-api",{attrs:{file:"QCarouselSlide"}}),a("h2",{staticClass:"doc-heading doc-h2",attrs:{id:"usage"},on:{click:function(e){return t.copyHeading("usage")}}},[t._v("Usage")]),a("div",{staticClass:"doc-note doc-note--tip"},[a("p",{staticClass:"doc-note__title"},[t._v("TIP")]),a("p",[t._v("If the QCarouselSlide content also has images and you want to use swipe actions to navigate, you might want to add "),a("code",{staticClass:"doc-token"},[t._v('draggable="false"')]),t._v(" to them, otherwise the native browser behavior might interfere in a negative way.")])]),a("div",{staticClass:"doc-note doc-note--danger"},[a("p",{staticClass:"doc-note__title"},[t._v("Keep Alive")]),a("ul",[a("li",[t._v("Please take notice of the Boolean "),a("code",{staticClass:"doc-token"},[t._v("keep-alive")]),t._v(" prop for QCarousel, if you need this behavior. Do NOT use Vue’s native "),a("code",{staticClass:"doc-token"},[t._v("<keep-alive>")]),t._v(" component over QCarouselSlide.")]),a("li",[t._v("Should you need the "),a("code",{staticClass:"doc-token"},[t._v("keep-alive-include")]),t._v(" or "),a("code",{staticClass:"doc-token"},[t._v("keep-alive-exclude")]),t._v(" props then the QCarouselSlide "),a("code",{staticClass:"doc-token"},[t._v("name")]),t._v("s must be valid Vue component names (no spaces allowed, don’t start with a number etc).")])])]),a("h3",{staticClass:"doc-heading doc-h3",attrs:{id:"basic"},on:{click:function(e){return t.copyHeading("basic")}}},[t._v("Basic")]),a("p",[t._v("Below is an almost stripped down basic Carousel (it is just animated and only has custom transitions specified) with no navigation embedded. For this reason, we are controlling the current slide through the model.")]),a("doc-example",{attrs:{title:"Basic",file:"QCarousel/Basic"}}),a("h3",{staticClass:"doc-heading doc-h3",attrs:{id:"transitions"},on:{click:function(e){return t.copyHeading("transitions")}}},[t._v("Transitions")]),a("p",[t._v("In the example below:")]),a("ul",[a("li",[t._v("There are just a few transitions demoed. For a complete list of transitions, head to the "),a("doc-link",{attrs:{to:"/options/transitions"}},[t._v("Transitions")]),t._v(" page.")],1),a("li",[t._v("You can also swipe with your finger (or swiping with the mouse – clicking and quickly dragging to left/right then releasing).")])]),a("doc-example",{attrs:{title:"Transitions, bottom navigation, arrows and auto padding",file:"QCarousel/Transitions"}}),a("h3",{staticClass:"doc-heading doc-h3",attrs:{id:"vertical"},on:{click:function(e){return t.copyHeading("vertical")}}},[t._v("Vertical "),a("q-badge",{attrs:{align:"top",color:"brand-primary",label:"v1.9+"}})],1),a("doc-example",{attrs:{title:"Vertical mode",file:"QCarousel/Vertical"}}),a("h3",{staticClass:"doc-heading doc-h3",attrs:{id:"control-type"},on:{click:function(e){return t.copyHeading("control-type")}}},[t._v("Control type "),a("q-badge",{attrs:{align:"top",color:"brand-primary",label:"v1.9+"}})],1),a("p",[t._v("The notion of “control” here refers to the arrows and navigation buttons. Since they are buttons, you can also pick their type to better match your design. You also benefit from the "),a("code",{staticClass:"doc-token"},[t._v("control-color")]),t._v(" and "),a("code",{staticClass:"doc-token"},[t._v("control-text-color")]),t._v(" props.")]),a("doc-example",{attrs:{title:"Control Type",file:"QCarousel/ControlType"}}),a("h3",{staticClass:"doc-heading doc-h3",attrs:{id:"navigation-position"},on:{click:function(e){return t.copyHeading("navigation-position")}}},[t._v("Navigation position "),a("q-badge",{attrs:{align:"top",color:"brand-primary",label:"v1.9+"}})],1),a("doc-example",{attrs:{title:"Navigation position",file:"QCarousel/NavigationPosition"}}),a("h3",{staticClass:"doc-heading doc-h3",attrs:{id:"custom-navigation"},on:{click:function(e){return t.copyHeading("custom-navigation")}}},[t._v("Custom navigation "),a("q-badge",{attrs:{align:"top",color:"brand-primary",label:"v1.13.2+"}})],1),a("p",[t._v("For a full list of properties of the "),a("code",{staticClass:"doc-token"},[t._v("navigation-icon")]),t._v(" slot, please consult the API card.")]),a("doc-example",{attrs:{title:"Custom navigation",file:"QCarousel/CustomNavigation"}}),a("h3",{staticClass:"doc-heading doc-h3",attrs:{id:"auto-padding"},on:{click:function(e){return t.copyHeading("auto-padding")}}},[t._v("Auto padding")]),a("p",[t._v("Below is an example with which you can play with different QCarousel settings so you can see the padding (or lack of) in action:")]),a("doc-example",{attrs:{title:"Padding",file:"QCarousel/AutoPadding"}}),a("h3",{staticClass:"doc-heading doc-h3",attrs:{id:"media-content"},on:{click:function(e){return t.copyHeading("media-content")}}},[t._v("Media content")]),a("doc-example",{attrs:{title:"Image slides",file:"QCarousel/ImageSlides"}}),a("doc-example",{attrs:{title:"Multi-image slides",file:"QCarousel/MultiImageSlides"}}),a("doc-example",{attrs:{title:"Captions",file:"QCarousel/Captions"}}),a("doc-example",{attrs:{title:"Video slides",file:"QCarousel/VideoSlides"}}),a("p",[t._v("In the example below there are thumbnails being generated automatically. Thumbnails only applies to image slides.")]),a("doc-example",{attrs:{title:"Thumbnails",file:"QCarousel/Thumbnails"}}),a("div",{staticClass:"doc-note doc-note--tip"},[a("p",{staticClass:"doc-note__title"},[t._v("TIP")]),a("p",[t._v("Don’t use the property "),a("code",{staticClass:"doc-token"},[t._v("navigation")]),t._v(" along with "),a("code",{staticClass:"doc-token"},[t._v("thumbnails")]),t._v(" as the first supercedes the latter so the thumbnails will not be displayed.")])]),a("h3",{staticClass:"doc-heading doc-h3",attrs:{id:"infinite-and-autoplay"},on:{click:function(e){return t.copyHeading("infinite-and-autoplay")}}},[t._v("Infinite and autoplay")]),a("p",[t._v("You can pause autoplay when the pointer is over the carousel or over a region of interest.")]),a("doc-example",{attrs:{title:"Autoplay",file:"QCarousel/InfiniteAutoplay"}}),a("h3",{staticClass:"doc-heading doc-h3",attrs:{id:"controls"},on:{click:function(e){return t.copyHeading("controls")}}},[t._v("Controls")]),a("doc-example",{attrs:{title:"Controls",file:"QCarousel/Controls"}}),a("h3",{staticClass:"doc-heading doc-h3",attrs:{id:"with-qscrollarea"},on:{click:function(e){return t.copyHeading("with-qscrollarea")}}},[t._v("With QScrollArea "),a("q-badge",{attrs:{align:"top",color:"brand-primary",label:"v1.9+"}})],1),a("p",[t._v("Please note how "),a("doc-link",{attrs:{to:"/vue-components/scroll-area"}},[t._v("QScrollArea")]),t._v(" is used in the two examples below. Also note the "),a("code",{staticClass:"doc-token"},[t._v("q-carousel--padding")]),t._v(" CSS helper class in the second example.")],1),a("doc-example",{attrs:{title:"With QScrollArea and padding",file:"QCarousel/WithScrollareaPadding"}}),a("doc-example",{attrs:{title:"With QScrollArea on whole slide",file:"QCarousel/WithScrollareaFull"}}),a("h3",{staticClass:"doc-heading doc-h3",attrs:{id:"fullscreen"},on:{click:function(e){return t.copyHeading("fullscreen")}}},[t._v("Fullscreen")]),a("doc-example",{attrs:{title:"Fullscreen",file:"QCarousel/Fullscreen"}})],1)},i=[],s=a("8669"),n={name:"DocMarkdownPage",created:function(){this.metaTitle="Carousel",this.metaDesc="The QCarousel Vue component allows you to display a series of slides, useful for wizards or an image gallery.",this.nav=[{name:"Card",category:"Vue Components",path:"/vue-components/card",dir:"left"},{name:"Chat Message",category:"Vue Components",path:"/vue-components/chat",dir:"right"}],this.toc=[{id:"qcarousel-api",title:"QCarousel API"},{id:"qcarouselcontrol-api",title:"QCarouselControl API"},{id:"qcarouselslide-api",title:"QCarouselSlide API"},{id:"usage",title:"Usage"},{id:"basic",title:"Basic",sub:!0},{id:"transitions",title:"Transitions",sub:!0},{id:"vertical",title:"Vertical",sub:!0},{id:"control-type",title:"Control type",sub:!0},{id:"navigation-position",title:"Navigation position",sub:!0},{id:"custom-navigation",title:"Custom navigation",sub:!0},{id:"auto-padding",title:"Auto padding",sub:!0},{id:"media-content",title:"Media content",sub:!0},{id:"infinite-and-autoplay",title:"Infinite and autoplay",sub:!0},{id:"controls",title:"Controls",sub:!0},{id:"with-qscrollarea",title:"With QScrollArea",sub:!0},{id:"fullscreen",title:"Fullscreen",sub:!0}],this.copyHeading=s["a"]}},l=n,c=a("2877"),r=Object(c["a"])(l,o,i,!1,null,null,null);e["default"]=r.exports}}]);