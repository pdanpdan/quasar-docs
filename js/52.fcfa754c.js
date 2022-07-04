(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[52],{"7b80":function(e,t,i){"use strict";i.r(t);var o=function(){var e=this,t=e._self._c;return t("doc-page",{attrs:{"meta-title":e.metaTitle,title:"Grid Column",related:e.related,nav:e.nav,toc:e.toc,"meta-desc":e.metaDesc}},[t("p",[e._v("In the hope that you’ve previously read the "),t("doc-link",{attrs:{to:"/layout/grid/introduction-to-flexbox"}},[e._v("Introduction to Flexbox")]),e._v(" theory, let’s get deeper into Columns.")],1),t("p",[e._v("Utilize breakpoint-specific row classes for equal-height rows. Add any number of unit-less classes for each breakpoint you need and every row will be the same height.")]),t("h2",{staticClass:"doc-heading doc-h2",attrs:{id:"equal-height"},on:{click:function(t){return e.copyHeading("equal-height")}}},[e._v("Equal-height")]),t("p",[e._v("For example, here are two grid layouts that apply to every device and viewport, from xs to xl.")]),t("doc-example",{attrs:{title:"Equal Height Example",file:"grid/ColumnEqualWidth"}}),t("h2",{staticClass:"doc-heading doc-h2",attrs:{id:"setting-one-row-height"},on:{click:function(t){return e.copyHeading("setting-one-row-height")}}},[e._v("Setting one row height")]),t("p",[e._v("Auto-layout for flexbox grid rows also means you can set the height of one row and the others will automatically resize around it. You may use predefined grid classes (as shown below) or inline heights. Note that the other rows will resize no matter the height of the center row.")]),t("doc-example",{attrs:{title:"Setting one row height",file:"grid/ColumnRowWidth"}}),t("h2",{staticClass:"doc-heading doc-h2",attrs:{id:"variable-height-content"},on:{click:function(t){return e.copyHeading("variable-height-content")}}},[e._v("Variable height content")]),t("p",[e._v("Using the "),t("code",{staticClass:"doc-token"},[e._v("col-{breakpoint}-auto")]),e._v(" classes, rows can size itself based on the natural height of its content. This is super handy with single line content like inputs, numbers, etc. This, in conjunction with horizontal alignment classes, is very useful for centering layouts with uneven row sizes as viewport height changes.")]),t("doc-example",{attrs:{title:"Variable height content",file:"grid/ColumnVariableWidth"}}),t("h2",{staticClass:"doc-heading doc-h2",attrs:{id:"responsive-classes"},on:{click:function(t){return e.copyHeading("responsive-classes")}}},[e._v("Responsive classes")]),t("p",[e._v("The grid includes five tiers of predefined classes for building complex responsive layouts. Customize the size of your rows on extra small, small, medium, large, or extra large devices however you see fit.")]),t("h3",{staticClass:"doc-heading doc-h3",attrs:{id:"all-breakpoints"},on:{click:function(t){return e.copyHeading("all-breakpoints")}}},[e._v("All breakpoints")]),t("p",[e._v("For grids that are the same from the smallest of devices to the largest, use the "),t("code",{staticClass:"doc-token"},[e._v(".col")]),e._v(" and "),t("code",{staticClass:"doc-token"},[e._v(".col-*")]),e._v(" classes. Specify a numbered class when you need a particularly sized row; otherwise, feel free to stick to .col.")]),t("doc-example",{attrs:{title:"All breakpoints",file:"grid/ColumnAllBreakpoints"}}),t("h3",{staticClass:"doc-heading doc-h3",attrs:{id:"mix-and-match"},on:{click:function(t){return e.copyHeading("mix-and-match")}}},[e._v("Mix and match")]),t("p",[e._v("Don’t want your rows to simply stack in some grid tiers? Use a combination of different classes for each tier as needed. See the example below for a better idea of how it all works.")]),t("doc-example",{attrs:{title:"Mix and match",file:"grid/ColumnMixAndMatch"}}),t("h3",{staticClass:"doc-heading doc-h3",attrs:{id:"alignment"},on:{click:function(t){return e.copyHeading("alignment")}}},[e._v("Alignment")]),t("p",[e._v("Use flexbox alignment utilities to vertically and horizontally align columns.")]),t("doc-example",{attrs:{title:"Horizontal alignment",file:"grid/ColumnHorizontalAlignment"}}),t("doc-example",{attrs:{title:"Vertical alignment",file:"grid/ColumnVerticalAlignment"}}),t("div",{staticClass:"doc-note doc-note--tip"},[t("p",{staticClass:"doc-note__title"},[e._v("TIP")]),t("p",[e._v("There is also the convenience "),t("code",{staticClass:"doc-token"},[e._v("flex-center")]),e._v(" CSS class which is equivalent to "),t("code",{staticClass:"doc-token"},[e._v("items-center")]),e._v(" + "),t("code",{staticClass:"doc-token"},[e._v("justify-center")]),e._v(". Use it along with "),t("code",{staticClass:"doc-token"},[e._v("flex")]),e._v(", "),t("code",{staticClass:"doc-token"},[e._v("row")]),e._v(" or "),t("code",{staticClass:"doc-token"},[e._v("column")]),e._v(".")])]),t("h3",{staticClass:"doc-heading doc-h3",attrs:{id:"wrapping"},on:{click:function(t){return e.copyHeading("wrapping")}}},[e._v("Wrapping")]),t("p",[e._v("If more than 12 columns are placed within a single row, each group of extra columns will, as one unit, wrap onto a new line.")]),t("doc-example",{attrs:{title:"Wrapping",file:"grid/ColumnRowWrapping"}}),t("h3",{staticClass:"doc-heading doc-h3",attrs:{id:"reordering"},on:{click:function(t){return e.copyHeading("reordering")}}},[e._v("Reordering")]),t("doc-example",{attrs:{title:"Reverse",file:"grid/ColumnReverse"}}),t("doc-example",{attrs:{title:"Flex order",file:"grid/ColumnFlexOrder"}}),t("h3",{staticClass:"doc-heading doc-h3",attrs:{id:"nesting"},on:{click:function(t){return e.copyHeading("nesting")}}},[e._v("Nesting")]),t("p",[e._v("To nest your content with the default grid, add a new "),t("code",{staticClass:"doc-token"},[e._v(".row")]),e._v(" and set of "),t("code",{staticClass:"doc-token"},[e._v(".col-sm-*")]),e._v(" columns within an existing "),t("code",{staticClass:"doc-token"},[e._v(".col-sm-*")]),e._v(" column. Nested rows should include a set of columns that add up to 12 or fewer (it is not required that you use all 12 available columns).")]),t("doc-example",{attrs:{title:"Nesting",file:"grid/ColumnNesting"}}),t("h2",{staticClass:"doc-heading doc-h2",attrs:{id:"flex-grid-playground"},on:{click:function(t){return e.copyHeading("flex-grid-playground")}}},[e._v("Flex Grid Playground")]),t("p",[e._v("To see the Flex in action, you can use the Flex Playground to interactively learn more.")]),t("q-btn",{attrs:{push:"",color:"brand-primary","icon-right":"launch",label:"Flex Playground",to:"/layout/grid/flex-playground"}})],1)},a=[],n=i("8669"),l={name:"DocMarkdownPage",created:function(){this.metaTitle="Grid Column",this.metaDesc="How to use the Quasar grid for columns.",this.related=[{name:"Introduction to Flexbox",category:"Flex Grid",path:"/layout/grid/introduction-to-flexbox"},{name:"Grid Row",category:"Flex Grid",path:"/layout/grid/row"},{name:"Grid Gutter",category:"Flex Grid",path:"/layout/grid/gutter"},{name:"Flex Playground",category:"Flex Grid",path:"/layout/grid/flex-playground"}],this.nav=[{name:"Grid Row",category:"Flex Grid",path:"/layout/grid/row",dir:"left"},{name:"Grid Gutter",category:"Flex Grid",path:"/layout/grid/gutter",dir:"right"}],this.toc=[{id:"equal-height",title:"Equal-height"},{id:"setting-one-row-height",title:"Setting one row height"},{id:"variable-height-content",title:"Variable height content"},{id:"responsive-classes",title:"Responsive classes"},{id:"all-breakpoints",title:"All breakpoints",sub:!0},{id:"mix-and-match",title:"Mix and match",sub:!0},{id:"alignment",title:"Alignment",sub:!0},{id:"wrapping",title:"Wrapping",sub:!0},{id:"reordering",title:"Reordering",sub:!0},{id:"nesting",title:"Nesting",sub:!0},{id:"flex-grid-playground",title:"Flex Grid Playground"}],this.copyHeading=n["a"]}},s=l,r=i("2877"),c=Object(r["a"])(s,o,a,!1,null,null,null);t["default"]=c.exports}}]);