(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[196],{6287:function(t,s,e){"use strict";e.r(s);var a=function(){var t=this,s=t._self._c;return s("doc-page",{attrs:{"meta-title":t.metaTitle,title:"Breakpoints",related:t.related,nav:t.nav,toc:t.toc,"meta-desc":t.metaDesc}},[s("p",[t._v("Quasar uses the following CSS breakpoints:")]),s("q-markup-table",{staticStyle:{width:"fit-content","max-width":"100%"},attrs:{"wrap-cells":!0,flat:!0,bordered:!0}},[s("thead",[s("tr",[s("th",{staticClass:"text-left"},[t._v("Window Size")]),s("th",{staticClass:"text-left"},[t._v("Name")]),s("th",{staticClass:"text-left"},[t._v("Width threshold in pixels")])])]),s("tbody",[s("tr",[s("td",[t._v("Extra Small")]),s("td",[s("code",{staticClass:"doc-token"},[t._v("xs")])]),s("td",[t._v("Up to 599px")])]),s("tr",[s("td",[t._v("Small")]),s("td",[s("code",{staticClass:"doc-token"},[t._v("sm")])]),s("td",[t._v("Up to 1023px")])]),s("tr",[s("td",[t._v("Medium")]),s("td",[s("code",{staticClass:"doc-token"},[t._v("md")])]),s("td",[t._v("Up to 1439px")])]),s("tr",[s("td",[t._v("Large")]),s("td",[s("code",{staticClass:"doc-token"},[t._v("lg")])]),s("td",[t._v("Up to 1919px")])]),s("tr",[s("td",[t._v("Extra Large")]),s("td",[s("code",{staticClass:"doc-token"},[t._v("xl")])]),s("td",[t._v("1920px and up")])])])]),s("p",[t._v("To learn how to use them, please visit the "),s("doc-link",{attrs:{to:"/style/visibility"}},[t._v("Visibility")]),t._v(" page.")],1),s("p",[t._v("You might also want to take a look at the "),s("doc-link",{attrs:{to:"/layout/grid/introduction-to-flexbox#responsive-design"}},[t._v("Introduction to Flexbox")]),t._v(" on the “Responsive Design” section.")],1),s("h3",{staticClass:"doc-heading doc-h3",attrs:{id:"sass-and-stylus"},on:{click:function(s){return t.copyHeading("sass-and-stylus")}}},[t._v("Sass and Stylus")]),s("p",[t._v("You can also use the breakpoints in Stylus:")]),s("pre",{pre:!0,attrs:{class:"doc-code language-js"}},[s("code",{pre:!0,attrs:{class:"doc-code__inner doc-code__inner--prerendered language-js"}},[t._v("@"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("media")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("max"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("width"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" $breakpoint"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("xs"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("max"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n  font"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("size"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" 10px\n")])]),s("p",[t._v("The syntax for these variables is shown below, where "),s("code",{staticClass:"doc-token"},[t._v("<breakpoint>")]),t._v(" is to be replaced by “xs”, “sm”, “md”, “lg” or “xl”:")]),s("pre",{pre:!0,attrs:{class:"doc-code language-js"}},[s("code",{pre:!0,attrs:{class:"doc-code__inner doc-code__inner--prerendered language-js"}},[t._v("$breakpoint"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("breakpoint"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("min\n$breakpoint"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("breakpoint"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("max\n")])]),s("p",[t._v("There’s also:")]),s("pre",{pre:!0,attrs:{class:"doc-code language-js"}},[s("code",{pre:!0,attrs:{class:"doc-code__inner doc-code__inner--prerendered language-js"}},[t._v("$sizes"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("breakpoint"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// replace <breakpoint> with xs, sm, md, lg or xl")]),t._v("\n")])]),s("p",[t._v("Starting with "),s("strong",[t._v("Quasar v1.5.3+")]),t._v(", "),s("doc-link",{attrs:{to:"/options/screen-plugin#how-to-enable-body-classes"}},[t._v("if enabled (only)")]),t._v(", you can also style your content based on a particular set of CSS classes applied to document.body: "),s("code",{staticClass:"doc-token"},[t._v("screen--xs")]),t._v(", "),s("code",{staticClass:"doc-token"},[t._v("screen--sm")]),t._v(", …, "),s("code",{staticClass:"doc-token"},[t._v("screen--xl")]),t._v(".")],1),s("pre",{pre:!0,attrs:{class:"doc-code language-css"}},[s("code",{pre:!0,attrs:{class:"doc-code__inner doc-code__inner--prerendered language-css"}},[t._v("// v1.5.3+\n\n.my-div\n  body.screen--xs &\n    "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v("color")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" #000\n  body.screen--sm &\n    "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v("color")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" #fff\n")])])],1)},o=[],n=e("8669"),r={name:"DocMarkdownPage",created:function(){this.metaTitle="Breakpoints",this.metaDesc="Quasar's list of CSS breakpoints.",this.related=[{name:"Spacing",category:"Style & Identity",path:"/style/spacing"}],this.nav=[{name:"Shadows",category:"Style & Identity",path:"/style/shadows",dir:"left"},{name:"Body classes",category:"Style & Identity",path:"/style/body-classes",dir:"right"}],this.toc=[{id:"sass-and-stylus",title:"Sass and Stylus",sub:!0}],this.copyHeading=n["a"]}},c=r,p=e("2877"),l=Object(p["a"])(c,a,o,!1,null,null,null);s["default"]=l.exports}}]);