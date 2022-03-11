(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[8],{"1b95":function(e,l,t){},"3dc8":function(e,l,t){"use strict";t.r(l);var o=function(){var e=this,l=e.$createElement,t=e._self._c||l;return t("doc-page",{attrs:{"meta-title":e.metaTitle,title:"Flex Grid Playground",related:e.related,nav:e.nav,toc:e.toc,"meta-desc":e.metaDesc}},[t("p",[e._v("To help you understand the Flexbox better, we have written an interactive playground for you. Create your grid and then copy the values to your projects.")]),t("div",{staticClass:"doc-note doc-note--tip"},[t("p",{staticClass:"doc-note__title"},[e._v("TIP")]),t("p",[e._v("The active child will have a blue index. Being active relates to the "),t("strong",[e._v("Child Classes")]),e._v(" and "),t("strong",[e._v("Child Styles")]),e._v(" listed below the results.")])]),t("flex-playground",{staticClass:"q-mt-md"})],1)},a=[],s=t("8669"),n=function(){var e=this,l=e.$createElement,t=e._self._c||l;return t("div",e._b({},"div",e.fullscreenAttrs,!1),[t("div",{staticClass:"q-pb-md"},[t("q-btn",{attrs:{color:"secondary",icon:e.$q.fullscreen.isActive?"fullscreen_exit":"fullscreen",label:e.$q.fullscreen.isActive?"Exit Fullscreen":"Try playground in Fullscreen"},on:{click:e.toggleFullscreen}})],1),t("div",{staticClass:"text-subtitle2 q-pb-md"},[e._v("Parent Properties (container)")]),t("div",{staticClass:"row wrap justify-start content-stretch"},[t("div",{staticClass:"col-lg-2 col-xs-6"},[t("q-select",{attrs:{color:"blue-12",options:e.containerOptions,label:"Container","emit-value":"","map-options":"",dense:"","options-dense":""},model:{value:e.containerGroup,callback:function(l){e.containerGroup=l},expression:"containerGroup"}})],1),t("div",{staticClass:"col-lg-2 col-xs-6"},[t("q-select",{attrs:{color:"blue-12",options:e.directionOptions,label:"Direction","emit-value":"","map-options":"",dense:"","options-dense":""},model:{value:e.directionGroup,callback:function(l){e.directionGroup=l},expression:"directionGroup"}})],1),t("div",{staticClass:"col-lg-2 col-xs-6"},[t("q-select",{attrs:{color:"blue-12",options:e.wrapOptions,label:"Wrap","emit-value":"","map-options":"",dense:"","options-dense":""},model:{value:e.wrapGroup,callback:function(l){e.wrapGroup=l},expression:"wrapGroup"}})],1),t("div",{staticClass:"col-lg-2 col-xs-6"},[t("q-select",{attrs:{color:"blue-12",options:e.justifyOptions,label:"Justify Content","emit-value":"","map-options":"",dense:"","options-dense":""},model:{value:e.justifyGroup,callback:function(l){e.justifyGroup=l},expression:"justifyGroup"}})],1),t("div",{staticClass:"col-lg-2 col-xs-6"},[t("q-select",{attrs:{color:"blue-12",options:e.itemsOptions,label:"Align Items","emit-value":"","map-options":"",dense:"","options-dense":""},model:{value:e.itemsGroup,callback:function(l){e.itemsGroup=l},expression:"itemsGroup"}})],1),t("div",{staticClass:"col-lg-2 col-xs-6"},[t("q-select",{attrs:{color:"blue-12",options:e.contentOptions,label:"Align Content","emit-value":"","map-options":"",dense:"","options-dense":""},model:{value:e.contentGroup,callback:function(l){e.contentGroup=l},expression:"contentGroup"}})],1)]),t("div",{staticClass:"text-weight-medium q-mt-sm"},[e._v("Container Classes")]),t("q-input",{staticClass:"q-py-sm",attrs:{filled:"",dense:"",readonly:""},scopedSlots:e._u([{key:"append",fn:function(){return[t("copy-button",{attrs:{text:e.classes}})]},proxy:!0}]),model:{value:e.classes,callback:function(l){e.classes=l},expression:"classes"}}),t("div",{staticClass:"text-subtitle2 float-left"},[e._v("\n    Results "),t("span",{staticClass:"text-weight-thin"},[e._v("(children: "+e._s(e.children.length)+"/10)")])]),t("q-btn",{staticClass:"float-right",attrs:{round:"",dense:"",flat:"",icon:e.mdiShareVariant},on:{click:e.share}},[t("q-tooltip",[e._v(e._s(e.copied?"Copied to clipboard":"Share URL"))])],1),t("q-btn",{staticClass:"float-right",attrs:{round:"",dense:"",flat:"",icon:e.fabCodepen},on:{click:e.editInCodepen}},[t("q-tooltip",[e._v("Edit in Codepen")])],1),t("q-btn",{staticClass:"float-right",attrs:{label:"Add Child",icon:e.mdiPlus,dense:"",flat:"",disabled:e.children.length>=10},on:{click:e.addChild}}),t("div",{staticClass:"row full-width bg-blue-grey-2",staticStyle:{"min-height":"400px"}},[t("div",{class:e.classes,staticStyle:{overflow:"hidden"},attrs:{id:"parent"}},e._l(e.children,(function(l,o){return t("child",{key:o,ref:"child"+o,refInFor:!0,attrs:{child:l,index:o,"selected-index":e.selectedIndex},on:{delete:e.onDelete,change:e.onChange}})})),1)]),t("div",{staticClass:"text-weight-medium q-mt-sm"},[e._v("Child Classes")]),t("q-input",{staticClass:"q-py-sm",attrs:{filled:"",dense:"",readonly:""},scopedSlots:e._u([{key:"append",fn:function(){return[t("copy-button",{attrs:{text:e.childClasses}})]},proxy:!0}]),model:{value:e.childClasses,callback:function(l){e.childClasses=l},expression:"childClasses"}}),t("div",{staticClass:"text-weight-medium q-mt-sm"},[e._v("Child Styles")]),t("q-input",{staticClass:"q-py-sm",attrs:{filled:"",dense:"",readonly:""},scopedSlots:e._u([{key:"append",fn:function(){return[t("copy-button",{attrs:{text:e.childStyles}})]},proxy:!0}]),model:{value:e.childStyles,callback:function(l){e.childStyles=l},expression:"childStyles"}}),t("codepen",{ref:"codepen",attrs:{title:"Flex example",slugifiedTitle:"flex-example"}})],1)},i=[],c=(t("ac1f"),t("5319"),t("a434"),t("caad"),t("2532"),t("b64b"),t("e9c4"),t("99af"),t("d81d"),t("b178")),u=t("6676"),r=t("cdb6"),d=function(){var e=this,l=e.$createElement,t=e._self._c||l;return t("div",{class:e.classes,style:e.styles,on:{click:e.emitChange}},[t("div",{staticClass:"row justify-between items-center"},[t("q-btn",{class:e.buttonClasses,attrs:{label:e.index,size:"sm",flat:"",dense:""},on:{click:e.emitChange}}),t("q-btn",{attrs:{icon:e.mdiClose,size:"xs",flat:"",dense:""},on:{click:e.onDelete}})],1),t("q-input",{attrs:{filled:"",dense:"",label:"Width (ex: '200px', '20em')"},on:{input:e.emitChange},scopedSlots:e._u([e.child.width.length>0?{key:"append",fn:function(){return[t("q-btn",{attrs:{icon:e.mdiClose,size:"xs",flat:"",dense:""},on:{click:function(l){e.child.width=""}}})]},proxy:!0}:null],null,!0),model:{value:e.child.width,callback:function(l){e.$set(e.child,"width",l)},expression:"child.width"}}),t("q-input",{attrs:{filled:"",dense:"",label:"Height (ex: '300px', '25em')"},on:{input:e.emitChange},scopedSlots:e._u([e.child.height.length>0?{key:"append",fn:function(){return[t("q-btn",{attrs:{icon:e.mdiClose,size:"xs",flat:"",dense:""},on:{click:function(l){e.child.height=""}}})]},proxy:!0}:null],null,!0),model:{value:e.child.height,callback:function(l){e.$set(e.child,"height",l)},expression:"child.height"}}),t("q-select",{attrs:{color:"blue-12",options:e.widthOptions,label:"Width","emit-value":"","map-options":"",dense:"","options-dense":""},on:{input:e.emitChange},model:{value:e.child.widthGroup,callback:function(l){e.$set(e.child,"widthGroup",l)},expression:"child.widthGroup"}}),t("q-select",{attrs:{color:"blue-12",options:e.breakpointOptions,label:"Break Points",multiple:"","emit-value":"","map-options":"",dense:"","options-dense":""},on:{input:e.emitChange},scopedSlots:e._u([e.child.breakpointGroup?{key:"append",fn:function(){return[t("q-icon",{staticClass:"cursor-pointer",attrs:{name:e.mdiCloseCircle},on:{click:function(l){l.stopPropagation(),e.child.breakpointGroup=null}}})]},proxy:!0}:null],null,!0),model:{value:e.child.breakpointGroup,callback:function(l){e.$set(e.child,"breakpointGroup",l)},expression:"child.breakpointGroup"}}),t("q-select",{attrs:{color:"blue-12",options:e.alignmentOptions,label:"Alignment Options","emit-value":"","map-options":"",dense:"","options-dense":""},on:{input:e.emitChange},model:{value:e.child.alignmentGroup,callback:function(l){e.$set(e.child,"alignmentGroup",l)},expression:"child.alignmentGroup"}}),t("q-select",{attrs:{color:"blue-12",options:e.offsetOptions,label:"Offset Options","emit-value":"","map-options":"",dense:"","options-dense":""},on:{input:e.emitChange},model:{value:e.child.offsetGroup,callback:function(l){e.$set(e.child,"offsetGroup",l)},expression:"child.offsetGroup"}}),t("q-select",{attrs:{color:"blue-12",options:e.gutterOptions,label:"Gutter Options",multiple:"","emit-value":"","map-options":"",dense:"","options-dense":""},on:{input:e.emitChange},scopedSlots:e._u([e.child.gutterGroup?{key:"append",fn:function(){return[t("q-icon",{staticClass:"cursor-pointer",attrs:{name:e.mdiCloseCircle},on:{click:function(l){l.stopPropagation(),e.child.gutterGroup=null}}})]},proxy:!0}:null],null,!0),model:{value:e.child.gutterGroup,callback:function(l){e.$set(e.child,"gutterGroup",l)},expression:"child.gutterGroup"}}),t("q-select",{attrs:{color:"blue-12",options:e.colGutterOptions,label:"Col Gutter Options",multiple:"","emit-value":"","map-options":"",dense:"","options-dense":""},on:{input:e.emitChange},scopedSlots:e._u([e.child.colGutterGroup?{key:"append",fn:function(){return[t("q-icon",{staticClass:"cursor-pointer",attrs:{name:e.mdiCloseCircle},on:{click:function(l){l.stopPropagation(),e.child.colGutterGroup=null}}})]},proxy:!0}:null],null,!0),model:{value:e.child.colGutterGroup,callback:function(l){e.$set(e.child,"colGutterGroup",l)},expression:"child.colGutterGroup"}})],1)},p=[],b=(t("a9e3"),{name:"FlexChild",created:function(){this.mdiClose=r["B"],this.mdiCloseCircle=r["C"]},props:{index:Number,selectedIndex:Number,child:Object},data:function(){return{widthOptions:[{label:"none",value:""},{label:"col",value:"col"},{label:"col-auto",value:"col-auto"},{label:"col-grow",value:"col-grow"},{label:"col-shrink",value:"col-shrink"},{label:"col-1",value:"col-1"},{label:"col-2",value:"col-2"},{label:"col-3",value:"col-3"},{label:"col-4",value:"col-4"},{label:"col-5",value:"col-5"},{label:"col-6",value:"col-6"},{label:"col-7",value:"col-7"},{label:"col-8",value:"col-8"},{label:"col-9",value:"col-9"},{label:"col-10",value:"col-10"},{label:"col-11",value:"col-11"},{label:"col-12",value:"col-12"}],breakpointOptions:[{label:"col-xs-1",value:"col-xs-1"},{label:"col-xs-2",value:"col-xs-2"},{label:"col-xs-3",value:"col-xs-3"},{label:"col-xs-4",value:"col-xs-4"},{label:"col-xs-5",value:"col-xs-5"},{label:"col-xs-6",value:"col-xs-6"},{label:"col-xs-7",value:"col-xs-7"},{label:"col-xs-8",value:"col-xs-8"},{label:"col-xs-9",value:"col-xs-9"},{label:"col-xs-10",value:"col-xs-10"},{label:"col-xs-11",value:"col-xs-11"},{label:"col-xs-12",value:"col-xs-12"},{label:"col-sm-1",value:"col-sm-1"},{label:"col-sm-2",value:"col-sm-2"},{label:"col-sm-3",value:"col-sm-3"},{label:"col-sm-4",value:"col-sm-4"},{label:"col-sm-5",value:"col-sm-5"},{label:"col-sm-6",value:"col-sm-6"},{label:"col-sm-7",value:"col-sm-7"},{label:"col-sm-8",value:"col-sm-8"},{label:"col-sm-9",value:"col-sm-9"},{label:"col-sm-10",value:"col-sm-10"},{label:"col-sm-11",value:"col-sm-11"},{label:"col-sm-12",value:"col-sm-12"},{label:"col-md-1",value:"col-md-1"},{label:"col-md-2",value:"col-md-2"},{label:"col-md-3",value:"col-md-3"},{label:"col-md-4",value:"col-md-4"},{label:"col-md-5",value:"col-md-5"},{label:"col-md-6",value:"col-md-6"},{label:"col-md-7",value:"col-md-7"},{label:"col-md-8",value:"col-md-8"},{label:"col-md-9",value:"col-md-9"},{label:"col-md-10",value:"col-md-10"},{label:"col-md-11",value:"col-md-11"},{label:"col-md-12",value:"col-md-12"},{label:"col-lg-1",value:"col-lg-1"},{label:"col-lg-2",value:"col-lg-2"},{label:"col-lg-3",value:"col-lg-3"},{label:"col-lg-4",value:"col-lg-4"},{label:"col-lg-5",value:"col-lg-5"},{label:"col-lg-6",value:"col-lg-6"},{label:"col-lg-7",value:"col-lg-7"},{label:"col-lg-8",value:"col-lg-8"},{label:"col-lg-9",value:"col-lg-9"},{label:"col-lg-10",value:"col-lg-10"},{label:"col-lg-11",value:"col-lg-11"},{label:"col-lg-12",value:"col-lg-12"},{label:"col-xl-1",value:"col-xl-1"},{label:"col-xl-2",value:"col-xl-2"},{label:"col-xl-3",value:"col-xl-3"},{label:"col-xl-4",value:"col-xl-4"},{label:"col-xl-5",value:"col-xl-5"},{label:"col-xl-6",value:"col-xl-6"},{label:"col-xl-7",value:"col-xl-7"},{label:"col-xl-8",value:"col-xl-8"},{label:"col-xl-9",value:"col-xl-9"},{label:"col-xl-10",value:"col-xl-10"},{label:"col-xl-11",value:"col-xl-11"},{label:"col-xl-12",value:"col-xl-12"}],alignmentOptions:[{label:"none",value:""},{label:"self-start",value:"self-start"},{label:"self-end",value:"self-end"},{label:"self-center",value:"self-center"},{label:"self-stretch",value:"self-stretch"},{label:"self-baseline",value:"self-baseline"}],offsetOptions:[{label:"none",value:""},{label:"offset-1",value:"offset-1"},{label:"offset-2",value:"offset-2"},{label:"offset-3",value:"offset-3"},{label:"offset-4",value:"offset-4"},{label:"offset-5",value:"offset-5"},{label:"offset-6",value:"offset-6"},{label:"offset-7",value:"offset-7"},{label:"offset-8",value:"offset-8"},{label:"offset-9",value:"offset-9"},{label:"offset-10",value:"offset-10"},{label:"offset-11",value:"offset-11"},{label:"offset-12",value:"offset-12"}],gutterOptions:[{label:"q-gutter-xs",value:"q-gutter-xs"},{label:"q-gutter-sm",value:"q-gutter-sm"},{label:"q-gutter-md",value:"q-gutter-md"},{label:"q-gutter-lg",value:"q-gutter-lg"},{label:"q-gutter-xl",value:"q-gutter-xl"},{label:"q-gutter-x-xs",value:"q-gutter-x-xs"},{label:"q-gutter-x-sm",value:"q-gutter-x-sm"},{label:"q-gutter-x-md",value:"q-gutter-x-md"},{label:"q-gutter-x-lg",value:"q-gutter-x-lg"},{label:"q-gutter-x-xl",value:"q-gutter-x-xl"},{label:"q-gutter-y-xs",value:"q-gutter-y-xs"},{label:"q-gutter-y-sm",value:"q-gutter-y-sm"},{label:"q-gutter-y-md",value:"q-gutter-y-md"},{label:"q-gutter-y-lg",value:"q-gutter-y-lg"},{label:"q-gutter-y-xl",value:"q-gutter-y-xl"}],colGutterOptions:[{label:"q-col-gutter-xs",value:"q-col-gutter-xs"},{label:"q-col-gutter-sm",value:"q-col-gutter-sm"},{label:"q-col-gutter-md",value:"q-col-gutter-md"},{label:"q-col-gutter-lg",value:"q-col-gutter-lg"},{label:"q-col-gutter-xl",value:"q-col-gutter-xl"},{label:"q-col-gutter-x-xs",value:"q-col-gutter-x-xs"},{label:"q-col-gutter-x-sm",value:"q-col-gutter-x-sm"},{label:"q-col-gutter-x-md",value:"q-col-gutter-x-md"},{label:"q-col-gutter-x-lg",value:"q-col-gutter-x-lg"},{label:"q-col-gutter-x-xl",value:"q-col-gutter-x-xl"},{label:"q-col-gutter-y-xs",value:"q-col-gutter-y-xs"},{label:"q-col-gutter-y-sm",value:"q-col-gutter-y-sm"},{label:"q-col-gutter-y-md",value:"q-col-gutter-y-md"},{label:"q-col-gutter-y-lg",value:"q-col-gutter-y-lg"},{label:"q-col-gutter-y-xl",value:"q-col-gutter-y-xl"}]}},mounted:function(){this.emitChange()},computed:{buttonClasses:function(){return"text-white "+(this.index===this.selectedIndex?"bg-brand-primary":"bg-grey")},styles:function(){return"overflow: auto;"+(this.child.height?"min-height: "+this.child.height+"; max-height: "+this.child.height+"; ":"")+(this.child.width?"min-width: "+this.child.width+"; max-width: "+this.child.width+";":"")},classes:function(){return(this.child.widthGroup+" "+(null===this.child.breakpointGroup?"":this.child.breakpointGroup)+" "+this.child.alignmentGroup+" "+this.child.offsetGroup+" "+(null===this.child.gutterGroup?"":this.child.gutterGroup)+" "+(null===this.child.colGutterGroup?"":this.child.colGutterGroup)).replace(/,/g," ").replace(/' '/g," ")}},methods:{onDelete:function(){this.$emit("delete",this.index)},emitChange:function(){this.$emit("change",this.index)}}}),h=b,v=(t("d8b4"),t("2877")),m=Object(v["a"])(h,d,p,!1,null,"3f3365aa",null),f=m.exports,g=t("990b"),x=t("6c03"),y={containerGroup:"string",directionGroup:"string",wrapGroup:"string",justifyGroup:"string",itemsGroup:"string",contentGroup:"string",children:"object",childClasses:"string",childStyles:"string"},q={name:"FlexPlayground",components:{Child:f,Codepen:g["a"],CopyButton:x["a"]},data:function(){return{containerGroup:"fit",containerOptions:[{label:"none",value:""},{label:"fit",value:"fit"},{label:"full-width",value:"full-width"},{label:"full-height",value:"full-height"}],directionGroup:"row",directionOptions:[{label:"row",value:"row"},{label:"row inline",value:"row inline"},{label:"column",value:"column"},{label:"column inline",value:"column inline"},{label:"row reverse",value:"row reverse"},{label:"column reverse",value:"column reverse"}],wrapGroup:"wrap",wrapOptions:[{label:"none",value:""},{label:"wrap",value:"wrap"},{label:"no-wrap",value:"no-wrap"},{label:"reverse-wrap",value:"reverse-wrap"}],justifyGroup:"justify-start",justifyOptions:[{label:"none",value:""},{label:"justify-start",value:"justify-start"},{label:"justify-end",value:"justify-end"},{label:"justify-center",value:"justify-center"},{label:"justify-between",value:"justify-between"},{label:"justify-around",value:"justify-around"},{label:"justify-evenly",value:"justify-evenly"}],itemsGroup:"items-start",itemsOptions:[{label:"none",value:""},{label:"items-start",value:"items-start"},{label:"items-end",value:"items-end"},{label:"items-center",value:"items-center"},{label:"items-stretch",value:"items-stretch"},{label:"items-baseline",value:"items-baseline"}],contentGroup:"content-start",contentOptions:[{label:"none",value:""},{label:"content-start",value:"content-start"},{label:"content-end",value:"content-end"},{label:"content-center",value:"content-center"},{label:"content-stretch",value:"content-stretch"},{label:"content-between",value:"content-between"},{label:"content-around",value:"content-around"}],children:[],childClasses:"",childStyles:"",selectedIndex:0,copied:!1}},mounted:function(){var e=this.$route.query;for(var l in y)if(l in e){var t=y[l];switch(t){case"object":this[l]=JSON.parse(e[l]);break;default:this[l]=e[l]}}e.children||this.addChild()},created:function(){this.fabCodepen=u["d"],this.mdiPlus=r["Nb"],this.mdiShareVariant=r["Tb"]},computed:{classes:function(){return(this.containerGroup+" "+this.directionGroup+" "+this.wrapGroup+" "+this.justifyGroup+" "+this.itemsGroup+" "+this.contentGroup).replace(/,/g," ").replace(/' '/g," ")},fullscreenAttrs:function(){return this.$q.fullscreen.isActive?{style:{backgroundColor:"#fff"},class:["q-pa-md"]}:{}}},methods:{addChild:function(){this.children.length<10&&this.children.push({width:"",height:"",widthGroup:"",breakpointGroup:null,alignmentGroup:"",offsetGroup:"",gutterGroup:null,colGutterGroup:null})},onDelete:function(e){this.children.splice(e,1)},onChange:function(e){this.selectedIndex=e;var l=this.$refs["child"+e][0];this.childClasses=l.classes,this.childStyles=l.styles},share:function(){var e=this,l=window.location.href;l.includes("?")&&(l=l.substring(0,l.indexOf("?")));var t="",o=0,a=Object.keys(y).length;for(var s in y){var n=y[s],i=void 0;switch(n){case"object":i=JSON.stringify(this[s]);break;default:i=this[s]}t+="".concat(s,"=").concat(encodeURIComponent(i)),o++,o<a&&(t+="&")}Object(c["l"])("".concat(l,"?").concat(t)),this.copied=!0,setTimeout((function(){e.copied=!1}),1500)},editInCodepen:function(){var e=this,l=this.children.map((function(l,t){var o=e.$refs["child".concat(t)];return'<div class="'.concat(o[0].classes,' bg-grey-6" style="').concat(o[0].styles,'">\n          <q-card>\n            <q-card-section>\n              Child #').concat(t,"\n            </q-card-section>\n          </q-card>\n        </div>")})),t='\n        <div class="flex flex-center column">\n          <div class="text-h6">Flex playground example</div>\n          <div class="row bg-blue-grey-2" style="min-height: 400px; width: 80%; padding: 24px;">\n            <div id="parent" class="'.concat(this.classes,'" style="overflow: hidden;">\n              ').concat(l,"\n            </div>\n          </div>\n        </div>\n      ");this.$refs.codepen.open({template:t})},toggleFullscreen:function(e){var l=e.target.parentNode.parentNode.parentNode.parentNode.parentNode;this.$q.fullscreen.toggle(l)}}},G=q,C=(t("a144"),Object(v["a"])(G,n,i,!1,null,"483efa92",null)),w=C.exports,k={name:"DocMarkdownPage",components:{FlexPlayground:w},created:function(){this.metaTitle="Flex Grid Playground",this.metaDesc="Interactively play with Quasar Flex Grid",this.related=[{name:"Introduction to Flexbox",category:"Flex Grid",path:"/layout/grid/introduction-to-flexbox"},{name:"Grid Row",category:"Flex Grid",path:"/layout/grid/row"},{name:"Grid Column",category:"Flex Grid",path:"/layout/grid/column"},{name:"Grid Gutter",category:"Flex Grid",path:"/layout/grid/gutter"}],this.nav=[{name:"Flexbox patterns",category:"Flex Grid",path:"/layout/grid/flexbox-patterns",dir:"left"},{name:"Layout",category:"Layout and Grid",path:"/layout/layout",dir:"right"}],this.toc=[],this.copyHeading=s["a"]}},O=k,_=Object(v["a"])(O,o,a,!1,null,null,null);l["default"]=_.exports},"50de":function(e,l,t){},a144:function(e,l,t){"use strict";t("50de")},d8b4:function(e,l,t){"use strict";t("1b95")}}]);