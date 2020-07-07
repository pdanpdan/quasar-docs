(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[142],{6637:function(t,e,o){"use strict";o.r(e);var n=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("doc-page",{attrs:{title:"SSR FAQ",nav:t.nav}},[o("h2",{staticClass:"doc-heading doc-h2",attrs:{id:"Why-am-I-getting-hydration-errors%3F"},on:{click:function(e){return t.copyHeading("Why-am-I-getting-hydration-errors%3F")}}},[t._v("Why am I getting hydration errors?")]),o("p",[t._v("Take a look at our "),o("doc-link",{attrs:{to:"/quasar-cli/developing-ssr/client-side-hydration"}},[t._v("Client Side Hydration")]),t._v(" page. When you get hydration errors, it means the HTML rendered on the server does not match the equivalent HTML rendered on client-side. This error will appear only when developing (and NOT on production) and it definitely needs to be addressed, before you release your website. Is there some content that you can only generate on client-side? Then use "),o("doc-link",{attrs:{to:"/vue-components/no-ssr"}},[t._v("QNoSsr")]),t._v(".")],1),o("h2",{staticClass:"doc-heading doc-h2",attrs:{id:"Why-doesn%E2%80%99t-importing-Platform-and-Cookies-work%3F"},on:{click:function(e){return t.copyHeading("Why-doesn%E2%80%99t-importing-Platform-and-Cookies-work%3F")}}},[t._v("Why doesn’t importing Platform and Cookies work?")]),o("p",[t._v("When building for SSR, use only the "),o("code",{staticClass:"doc-token"},[t._v("$q.platform")]),t._v("/"),o("code",{staticClass:"doc-token"},[t._v("$q.cookies")]),t._v(" form. If you need to use the "),o("code",{staticClass:"doc-token"},[t._v("import { Platform, Cookies } from 'quasar'")]),t._v(" (when on server-side), then you’ll need to do it like this:")]),o("pre",{pre:!0,attrs:{class:"doc-code language-js"}},[o("code",{pre:!0,attrs:{class:"doc-code__inner doc-code__inner--prerendered language-js"}},[o("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// example with Platform; same thing for Cookies")]),t._v("\n"),o("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" "),o("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" Platform "),o("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),o("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" "),o("span",{pre:!0,attrs:{class:"token string"}},[t._v("'quasar'")]),t._v("\n\n"),o("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// you need access to `ssrContext`")]),t._v("\n"),o("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),o("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),o("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("ssrContext")]),o("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),o("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),o("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" platform "),o("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" process"),o("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("env"),o("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),o("span",{pre:!0,attrs:{class:"token constant"}},[t._v("SERVER")]),t._v("\n    "),o("span",{pre:!0,attrs:{class:"token operator"}},[t._v("?")]),t._v(" Platform"),o("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),o("span",{pre:!0,attrs:{class:"token function"}},[t._v("parseSSR")]),o("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("ssrContext"),o("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),o("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" Platform "),o("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// otherwise we're on client")]),t._v("\n\n  "),o("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// platform is equivalent to the global import as in non-SSR builds")]),t._v("\n"),o("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])]),o("p",[t._v("The "),o("code",{staticClass:"doc-token"},[t._v("ssrContext")]),t._v(" is available in the "),o("doc-link",{attrs:{to:"/quasar-cli/boot-files"}},[t._v("Boot Files")]),t._v(" or the "),o("doc-link",{attrs:{to:"/quasar-cli/prefetch-feature"}},[t._v("PreFetch Feature")]),t._v(", where it is supplied as a parameter.")],1),o("p",[t._v("There is a good reason for this. In a client-only app, every user will be using a fresh instance of the app in their browser. For server-side rendering we want the same thing. Each request should have a fresh, isolated app instance so that there is no cross-request state pollution. So "),o("doc-link",{attrs:{to:"/options/platform-detection"}},[t._v("Platform")]),t._v(" and "),o("doc-link",{attrs:{to:"/quasar-plugins/cookies"}},[t._v("Cookies")]),t._v(" need to be bound to each request separately.")],1),o("p",[t._v("Also a good idea is to read the "),o("doc-link",{attrs:{to:"/quasar-cli/developing-ssr/writing-universal-code"}},[t._v("Writing Universal Code")]),t._v(" documentation page.")],1),o("h2",{staticClass:"doc-heading doc-h2",attrs:{id:"Why-isn%E2%80%99t-LocalStorage-and-SessionStorage-working%3F"},on:{click:function(e){return t.copyHeading("Why-isn%E2%80%99t-LocalStorage-and-SessionStorage-working%3F")}}},[t._v("Why isn’t LocalStorage and SessionStorage working?")]),o("p",[t._v("When running the code on server-side, the storage facilities can’t work. Web Storage is a browser only API.")])])},s=[],a=o("8669");const r="SSR FAQ | Quasar Framework",i="Tips and tricks for a Quasar server-side rendered app.";var c={meta:{title:"SSR FAQ",meta:{title:{name:"title",content:r},ogTitle:{name:"og:title",content:r},twitterTitle:{name:"twitter:title",content:r},description:{name:"description",content:i},ogDesc:{name:"og:description",content:i},twitterDesc:{name:"twitter:description",content:i}}},created(){this.$root.store.toc=[{id:"Why-am-I-getting-hydration-errors%3F",title:"Why am I getting hydration errors?"},{id:"Why-doesn%E2%80%99t-importing-Platform-and-Cookies-work%3F",title:"Why doesn’t importing Platform and Cookies work?"},{id:"Why-isn%E2%80%99t-LocalStorage-and-SessionStorage-working%3F",title:"Why isn’t LocalStorage and SessionStorage working?"}],this.nav=[{name:"SSR with PWA",category:"Developing SSR",path:"/quasar-cli/developing-ssr/ssr-with-pwa",dir:"left"},{name:"Build Commands",category:"Developing SSR",path:"/quasar-cli/developing-ssr/build-commands",dir:"right"}]},methods:{copyHeading:a["a"]}},l=c,p=o("2877"),d=Object(p["a"])(l,n,s,!1,null,null,null);e["default"]=d.exports}}]);