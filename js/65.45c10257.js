(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[65],{"79de":function(t,a,n){"use strict";n.r(a);var s=function(){var t=this,a=t.$createElement,n=t._self._c||a;return n("doc-page",{attrs:{"meta-title":t.metaTitle,title:"Interaction Plugin",nav:t.nav,toc:t.toc,"meta-desc":t.metaDesc}},[n("p",[t._v("The Quasar Interaction plugin detects interactions with the browser and provides useful details about the last event.")]),n("h2",{staticClass:"doc-heading doc-h2",attrs:{id:"installation"},on:{click:function(a){return t.copyHeading("installation")}}},[t._v("Installation")]),n("p",[t._v("You don’t need to do anything. The Interaction plugin gets installed automatically.")]),n("h2",{staticClass:"doc-heading doc-h2",attrs:{id:"usage"},on:{click:function(a){return t.copyHeading("usage")}}},[t._v("Usage")]),n("p",[t._v("Notice "),n("code",{staticClass:"doc-token"},[t._v("$q.interaction")]),t._v(" below. This is just a simple usage example.")]),n("pre",{pre:!0,attrs:{class:"doc-code language-html"}},[n("code",{pre:!0,attrs:{class:"doc-code__inner doc-code__inner--prerendered language-html"}},[n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("div")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("v-if")]),n("span",{pre:!0,attrs:{class:"token attr-value"}},[n("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("$q.interaction.isKeyboard === true"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n  You pressed {{$q.interaction.event.code}}\n  "),n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("span")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("v-show")]),n("span",{pre:!0,attrs:{class:"token attr-value"}},[n("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("$q.interaction.isPending === true"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n    and it is still pressed\n  "),n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("span")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("div")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])]),n("pre",{pre:!0,attrs:{class:"doc-code language-js"}},[n("code",{pre:!0,attrs:{class:"doc-code__inner doc-code__inner--prerendered language-js"}},[n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// script part of a Vue component")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("export")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("default")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  method"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("onMousedown")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("evt")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("$q"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("interaction"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("preventClick")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("evt"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("target"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])]),n("p",[t._v("We can also use the Interaction plugin outside of a Vue component:")]),n("pre",{pre:!0,attrs:{class:"doc-code language-js"}},[n("code",{pre:!0,attrs:{class:"doc-code__inner doc-code__inner--prerendered language-js"}},[n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" Interaction "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'quasar'")]),t._v("\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Interaction.isPointer")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Interaction.event !== null && Interaction.event.target")]),t._v("\n")])]),n("h2",{staticClass:"doc-heading doc-h2",attrs:{id:"api"},on:{click:function(a){return t.copyHeading("api")}}},[t._v("API")]),n("doc-api",{attrs:{file:"Interaction"}})],1)},e=[],r=n("8669"),o={name:"DocMarkdownPage",created:function(){this.metaTitle="Interaction Plugin",this.metaDesc="Quasar plugin that helps in detecting human interactions through Javascript code.",this.nav=[{name:"Screen Plugin",category:"Quasar Options & Helpers",path:"/options/screen-plugin",dir:"left"},{name:"Animations",category:"Quasar Options & Helpers",path:"/options/animations",dir:"right"}],this.toc=[{id:"installation",title:"Installation"},{id:"usage",title:"Usage"},{id:"api",title:"API"}],this.copyHeading=r["a"]}},p=o,c=n("2877"),i=Object(c["a"])(p,s,e,!1,null,null,null);a["default"]=i.exports}}]);