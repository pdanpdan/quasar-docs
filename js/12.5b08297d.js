(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[12],{"9db5":function(e,a,t){"use strict";t("c39b")},b4c4:function(e,a,t){"use strict";t.r(a);var r=function(){var e=this,a=e._self._c;return a("doc-page",{attrs:{"meta-title":e.metaTitle,title:"Meet the Team",nav:e.nav,toc:e.toc,"meta-desc":e.metaDesc}},[a("p",[e._v("Hailing from all around the planet, the Quasar Team is not only international but full of people with a vast range of fields of expertise. From real rocket engineers to Fortune 500 developers, the unifying factor among us is our dedication to quality and the love for our community of contributors and developers.")]),a("p",[e._v("With hundreds of contributors to Quasar, "),a("strong",[e._v("the list of people you can meet below is by no means exhaustive")]),e._v(". Just remember to thank everyone using Quasar and supporting us, because together we all help you push your products light-years ahead of your competition. A great way to do that is to "),a("doc-link",{attrs:{to:"https://github.com/sponsors/pdanpdan"}},[e._v("donate for Dan Popescu")]),e._v(" and/or "),a("doc-link",{attrs:{to:"https://donate.quasar.dev"}},[e._v("donate for Quasar")]),e._v(".")],1),a("team-listing",{staticClass:"q-mt-xl"})],1)},o=[],i=t("8669"),n=(t("b0c0"),function(){var e=this,a=e._self._c;return a("div",[e._l(e.team,(function(t){return[a("h4",{key:"categ_".concat(t.name),staticClass:"text-brand-primary"},[e._v(e._s(t.name))]),a("div",{key:"members_".concat(t.name),staticClass:"row items-stretch q-gutter-sm"},e._l(t.members,(function(e){return a("team-member",{key:e.name,attrs:{name:e.name,role:e.role,avatar:e.avatar,email:e.email,twitter:e.twitter,github:e.github,desc:e.desc}})})),1)]}))],2)}),s=[],l=function(){var e=this,a=e._self._c;return a("q-card",{staticClass:"quasar-member column",attrs:{flat:"",bordered:""}},[a("q-card-section",[a("div",{staticClass:"text-bold"},[e._v(e._s(e.name))]),e.github?a("div",[e._v("@"+e._s(e.github))]):e._e()]),e.avatar?a("q-img",{attrs:{alt:"avatar",src:e.url.avatar,ratio:1}}):e._e(),a("q-card-section",{staticClass:"quasar-member__front col"},[a("div",{staticClass:"text-grey text-italic q-mt-xs quasar-member__role"},[e._v(e._s(e.role))]),a("div",{staticClass:"q-mt-xs"},[e._v(e._s(e.desc))])]),a("q-separator",{staticStyle:{height:"1px"}}),a("q-card-actions",{attrs:{align:"around"}},[e.twitter?a("div",[a("q-btn",{attrs:{href:e.url.twitter,target:"_blank",rel:"noopener",round:"",flat:"",icon:e.fabTwitter}})],1):e._e(),e.github?a("div",[a("q-btn",{attrs:{href:e.url.github,target:"_blank",rel:"noopener",round:"",flat:"",icon:e.fabGithub}})],1):e._e(),e.email?a("div",[a("q-btn",{attrs:{href:e.url.email,target:"_blank",rel:"noopener",round:"",flat:"",icon:"mail"}})],1):e._e()])],1)},u=[],m=t("e821"),c={name:"TeamMember",props:{name:String,avatar:String,role:String,twitter:String,github:String,email:String,desc:String},computed:{url:function(){return{avatar:"https://cdn.quasar.dev/team/"+this.avatar,twitter:"https://twitter.com/"+this.twitter,github:"https://github.com/"+this.github,email:"mailto:"+this.email}}},created:function(){this.fabGithub=m["h"],this.fabTwitter=m["n"]}},d=c,p=(t("9db5"),t("2877")),g=Object(p["a"])(d,l,u,!1,null,null,null),h=g.exports,b=[{name:"Core Team",members:[{name:"Razvan Stoenescu",role:"Creator, Lead Dev & Architect",avatar:"razvan_stoenescu.jpeg",email:"razvan@quasar.dev",twitter:"quasarframework",github:"rstoenescu",desc:"Architecture and development of Quasar on all fronts"},{name:"Dan Popescu",role:"Senior Core Developer",avatar:"dan_popescu.jpg",email:"dan@quasar.dev",github:"pdanpdan",desc:"Focuses on Quasar UI components, directives and plugins"},{name:"Jeff Galbraith",role:"Senior Developer",avatar:"jeff_galbraith.jpg",email:"jeff@quasar.dev",twitter:"jgalbraith64",github:"hawkeye64",desc:"UI components, App Extensions and community outreach"},{name:"Allan Gaunt",role:"Senior Developer",avatar:"allan_gaunt.png",github:"webnoob",desc:"BEX (browser extension App CLI mode), web products and security research"},{name:"Scott Molinari",role:"Media Manager",avatar:"scott_molinari.jpg",github:"smolinari",desc:"Manages our Facebook page, blog and forum. Helps with docs, bug reports, external systems, writes and manages articles and offers community support."},{name:"Paolo Caleffi",role:"Senior developer",avatar:"paolo_caleffi.jpg",github:"IlCallo",desc:"Typescript support"},{name:"Aldrin Marquez",role:"Community Staff",avatar:"aldrin_marquez.jpg",github:"metalsadman",desc:"Help desk"},{name:"Luke Diebold",role:"Senior developer",avatar:"luke_diebold.png",github:"ldiebold",desc:"Creates video tutorials, podcasts and shows for Quasar Framework."},{name:"Niccolò Menozzi",role:"Senior designer",avatar:"niccolo_menozzi.jpg",github:"NiccoloMenozzi",desc:"UX manager, brand management, communication, business strategy."}]},{name:"Honorable mentions",members:[{name:"Tobias Mesquita",role:"Senior Developer",avatar:"tobias_mesquita.jpg",github:"TobyMosque",desc:"Help desk"},{name:"Kerry Huguet",role:"Senior Developer",avatar:"kerry_huguet.jpeg",github:"outofmemoryagain",desc:"Typescript support"},{name:"Noah Klayman",role:"Developer / Community Staff",avatar:"noah_klayman.jpeg",github:"nklayman",desc:"Capacitor App CLI mode"},{name:"Heitor Ribeiro",role:"Community Staff",avatar:"heitor_ribeiro.jpg",github:"bloodf",desc:"Writes articles and offers community support."},{name:"Jesús Villanueva",role:"Senior Developer",avatar:"jesus_villanueva.jpg",github:"jesusvilla",desc:"Help desk"},{name:"Dmitrij Polianin",role:"Trainer / Community Staff",avatar:"dmitrij_polianin.jpg",email:"dmitrij.polyanin@gmail.com",github:"DmitrijOkeanij",desc:"Russian Community maintainer and Quasar Trainer."}]}],v={name:"TeamListing",components:{TeamMember:h},created:function(){this.team=b}},f=v,_=Object(p["a"])(f,n,s,!1,null,null,null),y=_.exports,w={name:"DocMarkdownPage",components:{TeamListing:y},created:function(){this.metaTitle="Meet the Team",this.metaDesc="The list of people behind Quasar Framework.",this.nav=[{name:"Video Tutorials",category:null,path:"/video-tutorials",dir:"left"},{name:"Pick Quasar Flavour",category:"Getting Started",path:"/start/pick-quasar-flavour",dir:"right"}],this.toc=[],this.copyHeading=i["a"]}},k=w,q=Object(p["a"])(k,r,o,!1,null,null,null);a["default"]=q.exports},c39b:function(e,a,t){}}]);