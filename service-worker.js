if(!self.define){const s=s=>{"require"!==s&&(s+=".js");let r=Promise.resolve();return u[s]||(r=new Promise((async r=>{if("document"in self){const u=document.createElement("script");u.src=s,document.head.appendChild(u),u.onload=r}else importScripts(s),r()}))),r.then((()=>{if(!u[s])throw new Error(`Module ${s} didn’t register its module`);return u[s]}))},r=(r,u)=>{Promise.all(r.map(s)).then((s=>u(1===s.length?s[0]:s)))},u={require:Promise.resolve(r)};self.define=(r,l,a)=>{u[r]||(u[r]=Promise.resolve().then((()=>{let u={};const o={uri:location.origin+r.slice(1)};return Promise.all(l.map((r=>{switch(r){case"exports":return u;case"module":return o;default:return s(r)}}))).then((s=>{const r=a(...s);return u.default||(u.default=r),u}))})))}}define("./service-worker.js",["./workbox-8b1d1113"],(function(s){"use strict";s.setCacheNameDetails({prefix:"quasar.dev-pdan"}),self.skipWaiting(),s.clientsClaim(),s.precacheAndRoute([{url:"/quasar-docs/css/10.29113f00.css",revision:null},{url:"/quasar-docs/css/11.afe1a32e.css",revision:null},{url:"/quasar-docs/css/12.07f9719d.css",revision:null},{url:"/quasar-docs/css/13.cd1b576e.css",revision:null},{url:"/quasar-docs/css/14.c07bf27d.css",revision:null},{url:"/quasar-docs/css/15.96af82c5.css",revision:null},{url:"/quasar-docs/css/16.99064edf.css",revision:null},{url:"/quasar-docs/css/17.add5568a.css",revision:null},{url:"/quasar-docs/css/18.e41fb891.css",revision:null},{url:"/quasar-docs/css/19.40810d73.css",revision:null},{url:"/quasar-docs/css/20.64943849.css",revision:null},{url:"/quasar-docs/css/21.b04235c4.css",revision:null},{url:"/quasar-docs/css/6.ad3185aa.css",revision:null},{url:"/quasar-docs/css/7.49f735a0.css",revision:null},{url:"/quasar-docs/css/8.b3abe3ba.css",revision:null},{url:"/quasar-docs/css/9.d2b53414.css",revision:null},{url:"/quasar-docs/css/app.b211d138.css",revision:null},{url:"/quasar-docs/css/demo.031ff5e7.css",revision:null},{url:"/quasar-docs/fonts/KFOkCnqEu92Fr1MmgVxIIzQ.a45108d3.woff",revision:null},{url:"/quasar-docs/fonts/KFOlCnqEu92Fr1MmEU9fBBc-.cea99d3e.woff",revision:null},{url:"/quasar-docs/fonts/KFOlCnqEu92Fr1MmSU5fBBc-.865f928c.woff",revision:null},{url:"/quasar-docs/fonts/KFOlCnqEu92Fr1MmWUlfBBc-.2267169e.woff",revision:null},{url:"/quasar-docs/fonts/KFOlCnqEu92Fr1MmYUtfBBc-.bac8362e.woff",revision:null},{url:"/quasar-docs/fonts/KFOmCnqEu92Fr1Mu4mxM.49ae34d4.woff",revision:null},{url:"/quasar-docs/fonts/flUhRq6tzZclQEJ-Vdg-IuiaDsNa.88e9c0a1.woff",revision:null},{url:"/quasar-docs/fonts/flUhRq6tzZclQEJ-Vdg-IuiaDsNcIhQ8tQ.b8c10426.woff2",revision:null},{url:"/quasar-docs/index.html",revision:"6e8b5df0ece988cb9e88723e64d6cde1"},{url:"/quasar-docs/js/10.e2ea30d9.js",revision:null},{url:"/quasar-docs/js/100.45ca3a1c.js",revision:null},{url:"/quasar-docs/js/101.2f34afaa.js",revision:null},{url:"/quasar-docs/js/102.58d31c72.js",revision:null},{url:"/quasar-docs/js/103.4181a02d.js",revision:null},{url:"/quasar-docs/js/104.a96676e1.js",revision:null},{url:"/quasar-docs/js/105.d25d4bc9.js",revision:null},{url:"/quasar-docs/js/106.f5cd18dc.js",revision:null},{url:"/quasar-docs/js/107.973fa5da.js",revision:null},{url:"/quasar-docs/js/108.a0f2358e.js",revision:null},{url:"/quasar-docs/js/109.15fb8245.js",revision:null},{url:"/quasar-docs/js/11.e0734033.js",revision:null},{url:"/quasar-docs/js/110.3a4ad3ef.js",revision:null},{url:"/quasar-docs/js/111.6e183912.js",revision:null},{url:"/quasar-docs/js/112.8a07ff96.js",revision:null},{url:"/quasar-docs/js/113.8464d3bb.js",revision:null},{url:"/quasar-docs/js/114.022ab9d9.js",revision:null},{url:"/quasar-docs/js/115.92361358.js",revision:null},{url:"/quasar-docs/js/116.c04e7fd9.js",revision:null},{url:"/quasar-docs/js/117.7ce78d4c.js",revision:null},{url:"/quasar-docs/js/118.06615e45.js",revision:null},{url:"/quasar-docs/js/119.c74ae81f.js",revision:null},{url:"/quasar-docs/js/12.cf7d933c.js",revision:null},{url:"/quasar-docs/js/120.a817e05f.js",revision:null},{url:"/quasar-docs/js/121.783180e8.js",revision:null},{url:"/quasar-docs/js/122.9a3f318a.js",revision:null},{url:"/quasar-docs/js/123.5dfba9dc.js",revision:null},{url:"/quasar-docs/js/124.2fc675f4.js",revision:null},{url:"/quasar-docs/js/125.c0b3d49f.js",revision:null},{url:"/quasar-docs/js/126.629fd7a2.js",revision:null},{url:"/quasar-docs/js/127.8213ffc2.js",revision:null},{url:"/quasar-docs/js/128.1ab60623.js",revision:null},{url:"/quasar-docs/js/129.98b75450.js",revision:null},{url:"/quasar-docs/js/13.6d3405eb.js",revision:null},{url:"/quasar-docs/js/130.87980a47.js",revision:null},{url:"/quasar-docs/js/131.1858ba64.js",revision:null},{url:"/quasar-docs/js/132.bc246627.js",revision:null},{url:"/quasar-docs/js/133.c46aeb2c.js",revision:null},{url:"/quasar-docs/js/134.e3b17592.js",revision:null},{url:"/quasar-docs/js/135.7d191825.js",revision:null},{url:"/quasar-docs/js/136.0683d4d4.js",revision:null},{url:"/quasar-docs/js/137.77af7262.js",revision:null},{url:"/quasar-docs/js/138.2bcdc48d.js",revision:null},{url:"/quasar-docs/js/139.ed2d9189.js",revision:null},{url:"/quasar-docs/js/14.8c09c9ca.js",revision:null},{url:"/quasar-docs/js/140.06633e4b.js",revision:null},{url:"/quasar-docs/js/141.98026cbe.js",revision:null},{url:"/quasar-docs/js/142.73620bd4.js",revision:null},{url:"/quasar-docs/js/143.76fafe90.js",revision:null},{url:"/quasar-docs/js/144.89480aec.js",revision:null},{url:"/quasar-docs/js/145.8e49247a.js",revision:null},{url:"/quasar-docs/js/146.4d2cf269.js",revision:null},{url:"/quasar-docs/js/147.84ff354e.js",revision:null},{url:"/quasar-docs/js/148.82b8d934.js",revision:null},{url:"/quasar-docs/js/149.3774c810.js",revision:null},{url:"/quasar-docs/js/15.fbef2707.js",revision:null},{url:"/quasar-docs/js/150.7e97f79f.js",revision:null},{url:"/quasar-docs/js/151.1f4f656d.js",revision:null},{url:"/quasar-docs/js/152.715b8106.js",revision:null},{url:"/quasar-docs/js/153.93948203.js",revision:null},{url:"/quasar-docs/js/154.e6aa7531.js",revision:null},{url:"/quasar-docs/js/155.d277cc47.js",revision:null},{url:"/quasar-docs/js/156.f390cd88.js",revision:null},{url:"/quasar-docs/js/157.d3f0f6b4.js",revision:null},{url:"/quasar-docs/js/158.298dc90c.js",revision:null},{url:"/quasar-docs/js/159.bc2fb1c6.js",revision:null},{url:"/quasar-docs/js/16.b2e5abb0.js",revision:null},{url:"/quasar-docs/js/160.7056b48b.js",revision:null},{url:"/quasar-docs/js/161.7bc24d6f.js",revision:null},{url:"/quasar-docs/js/162.4c6f2a0a.js",revision:null},{url:"/quasar-docs/js/163.d34724d9.js",revision:null},{url:"/quasar-docs/js/164.a7d75bdf.js",revision:null},{url:"/quasar-docs/js/165.5d76bba1.js",revision:null},{url:"/quasar-docs/js/166.34456679.js",revision:null},{url:"/quasar-docs/js/167.649851f8.js",revision:null},{url:"/quasar-docs/js/168.6ee0c282.js",revision:null},{url:"/quasar-docs/js/169.421d55cf.js",revision:null},{url:"/quasar-docs/js/17.fb5852db.js",revision:null},{url:"/quasar-docs/js/170.3be91ecb.js",revision:null},{url:"/quasar-docs/js/171.78429d8e.js",revision:null},{url:"/quasar-docs/js/172.233caafb.js",revision:null},{url:"/quasar-docs/js/173.802f3d2e.js",revision:null},{url:"/quasar-docs/js/174.fe232b94.js",revision:null},{url:"/quasar-docs/js/175.7127be90.js",revision:null},{url:"/quasar-docs/js/176.6863d7e8.js",revision:null},{url:"/quasar-docs/js/177.bb894d11.js",revision:null},{url:"/quasar-docs/js/178.392b9ccf.js",revision:null},{url:"/quasar-docs/js/179.6ddf1d2a.js",revision:null},{url:"/quasar-docs/js/18.cd85e820.js",revision:null},{url:"/quasar-docs/js/180.aa672929.js",revision:null},{url:"/quasar-docs/js/181.65661ebd.js",revision:null},{url:"/quasar-docs/js/182.2c64b8f8.js",revision:null},{url:"/quasar-docs/js/183.7fbf327e.js",revision:null},{url:"/quasar-docs/js/184.5078ba3a.js",revision:null},{url:"/quasar-docs/js/185.94f71fbe.js",revision:null},{url:"/quasar-docs/js/186.d1360bde.js",revision:null},{url:"/quasar-docs/js/187.b4951229.js",revision:null},{url:"/quasar-docs/js/188.dadfab71.js",revision:null},{url:"/quasar-docs/js/189.0c378c60.js",revision:null},{url:"/quasar-docs/js/19.be711de0.js",revision:null},{url:"/quasar-docs/js/190.25d1aea0.js",revision:null},{url:"/quasar-docs/js/191.bba9ba3d.js",revision:null},{url:"/quasar-docs/js/192.30987bac.js",revision:null},{url:"/quasar-docs/js/193.e1e47b9c.js",revision:null},{url:"/quasar-docs/js/194.2e5d86d0.js",revision:null},{url:"/quasar-docs/js/195.c52da667.js",revision:null},{url:"/quasar-docs/js/196.bb2c4d85.js",revision:null},{url:"/quasar-docs/js/197.da04fc57.js",revision:null},{url:"/quasar-docs/js/198.bc78abe5.js",revision:null},{url:"/quasar-docs/js/199.e7d3dcc8.js",revision:null},{url:"/quasar-docs/js/20.5359770d.js",revision:null},{url:"/quasar-docs/js/200.7a8bac6f.js",revision:null},{url:"/quasar-docs/js/201.eebfd854.js",revision:null},{url:"/quasar-docs/js/202.227bdfb6.js",revision:null},{url:"/quasar-docs/js/203.b137b45f.js",revision:null},{url:"/quasar-docs/js/204.2cc325fd.js",revision:null},{url:"/quasar-docs/js/205.918847b5.js",revision:null},{url:"/quasar-docs/js/206.e2291198.js",revision:null},{url:"/quasar-docs/js/207.0833efb6.js",revision:null},{url:"/quasar-docs/js/208.3b113c5f.js",revision:null},{url:"/quasar-docs/js/209.f95011d7.js",revision:null},{url:"/quasar-docs/js/21.9f70191b.js",revision:null},{url:"/quasar-docs/js/210.3f3f8c2b.js",revision:null},{url:"/quasar-docs/js/211.5ac72f69.js",revision:null},{url:"/quasar-docs/js/212.5988a948.js",revision:null},{url:"/quasar-docs/js/213.5707e26f.js",revision:null},{url:"/quasar-docs/js/214.77f4292f.js",revision:null},{url:"/quasar-docs/js/215.b0bff559.js",revision:null},{url:"/quasar-docs/js/216.812268df.js",revision:null},{url:"/quasar-docs/js/217.cc7a84c5.js",revision:null},{url:"/quasar-docs/js/218.dac37329.js",revision:null},{url:"/quasar-docs/js/219.dd5d5e0a.js",revision:null},{url:"/quasar-docs/js/22.f3da8826.js",revision:null},{url:"/quasar-docs/js/220.576b3cd0.js",revision:null},{url:"/quasar-docs/js/221.d0c6082c.js",revision:null},{url:"/quasar-docs/js/222.f6607526.js",revision:null},{url:"/quasar-docs/js/223.7f2d8e57.js",revision:null},{url:"/quasar-docs/js/224.9c1420a3.js",revision:null},{url:"/quasar-docs/js/225.e3bd0c22.js",revision:null},{url:"/quasar-docs/js/226.df9bde5c.js",revision:null},{url:"/quasar-docs/js/227.63da605b.js",revision:null},{url:"/quasar-docs/js/228.4bad4c12.js",revision:null},{url:"/quasar-docs/js/229.b013a25b.js",revision:null},{url:"/quasar-docs/js/23.447ba710.js",revision:null},{url:"/quasar-docs/js/230.726720d0.js",revision:null},{url:"/quasar-docs/js/231.f9e18564.js",revision:null},{url:"/quasar-docs/js/232.4711032c.js",revision:null},{url:"/quasar-docs/js/233.33c52f70.js",revision:null},{url:"/quasar-docs/js/234.f2254171.js",revision:null},{url:"/quasar-docs/js/235.3ad4cf04.js",revision:null},{url:"/quasar-docs/js/236.39c2efc2.js",revision:null},{url:"/quasar-docs/js/237.b792adac.js",revision:null},{url:"/quasar-docs/js/238.8844834e.js",revision:null},{url:"/quasar-docs/js/239.a31e9dac.js",revision:null},{url:"/quasar-docs/js/24.abbdeb6d.js",revision:null},{url:"/quasar-docs/js/240.63f28a0f.js",revision:null},{url:"/quasar-docs/js/241.6295db8c.js",revision:null},{url:"/quasar-docs/js/242.125db3d6.js",revision:null},{url:"/quasar-docs/js/243.1c2b3178.js",revision:null},{url:"/quasar-docs/js/244.d1c6a3dd.js",revision:null},{url:"/quasar-docs/js/245.bf38a3e7.js",revision:null},{url:"/quasar-docs/js/246.31383bc3.js",revision:null},{url:"/quasar-docs/js/247.a96b025d.js",revision:null},{url:"/quasar-docs/js/248.39808b33.js",revision:null},{url:"/quasar-docs/js/249.65d9da6f.js",revision:null},{url:"/quasar-docs/js/25.e0c57472.js",revision:null},{url:"/quasar-docs/js/250.aa4fc935.js",revision:null},{url:"/quasar-docs/js/251.47dd7c72.js",revision:null},{url:"/quasar-docs/js/252.084364ca.js",revision:null},{url:"/quasar-docs/js/253.7ac504de.js",revision:null},{url:"/quasar-docs/js/254.56d656d9.js",revision:null},{url:"/quasar-docs/js/255.99d2f9e2.js",revision:null},{url:"/quasar-docs/js/256.a4d5ab2d.js",revision:null},{url:"/quasar-docs/js/257.7dd7c217.js",revision:null},{url:"/quasar-docs/js/258.60e9ad25.js",revision:null},{url:"/quasar-docs/js/259.f247a87b.js",revision:null},{url:"/quasar-docs/js/26.73f174b6.js",revision:null},{url:"/quasar-docs/js/260.9d0b351c.js",revision:null},{url:"/quasar-docs/js/261.0a433e4a.js",revision:null},{url:"/quasar-docs/js/262.09827840.js",revision:null},{url:"/quasar-docs/js/263.f57a57a5.js",revision:null},{url:"/quasar-docs/js/264.5865963d.js",revision:null},{url:"/quasar-docs/js/265.ab32afb3.js",revision:null},{url:"/quasar-docs/js/266.3ed2b6d6.js",revision:null},{url:"/quasar-docs/js/267.c7f2524f.js",revision:null},{url:"/quasar-docs/js/268.8e654ded.js",revision:null},{url:"/quasar-docs/js/269.3e7f3d62.js",revision:null},{url:"/quasar-docs/js/27.3251dca5.js",revision:null},{url:"/quasar-docs/js/270.2530265e.js",revision:null},{url:"/quasar-docs/js/271.543353e9.js",revision:null},{url:"/quasar-docs/js/272.ea09f9a5.js",revision:null},{url:"/quasar-docs/js/273.8f9b3372.js",revision:null},{url:"/quasar-docs/js/274.5b36be1f.js",revision:null},{url:"/quasar-docs/js/275.501c1cc2.js",revision:null},{url:"/quasar-docs/js/276.5ce4adba.js",revision:null},{url:"/quasar-docs/js/277.5e9ac1e2.js",revision:null},{url:"/quasar-docs/js/278.759ed8a9.js",revision:null},{url:"/quasar-docs/js/279.53348e20.js",revision:null},{url:"/quasar-docs/js/28.78f761e6.js",revision:null},{url:"/quasar-docs/js/280.d0668567.js",revision:null},{url:"/quasar-docs/js/281.a8a78771.js",revision:null},{url:"/quasar-docs/js/282.c850c6a3.js",revision:null},{url:"/quasar-docs/js/283.0636d16b.js",revision:null},{url:"/quasar-docs/js/284.eb489817.js",revision:null},{url:"/quasar-docs/js/285.97e555e0.js",revision:null},{url:"/quasar-docs/js/286.6048e809.js",revision:null},{url:"/quasar-docs/js/287.710538e1.js",revision:null},{url:"/quasar-docs/js/288.1ca9175b.js",revision:null},{url:"/quasar-docs/js/289.4e8b8051.js",revision:null},{url:"/quasar-docs/js/29.02bb39f6.js",revision:null},{url:"/quasar-docs/js/290.d2836960.js",revision:null},{url:"/quasar-docs/js/291.0ba3d498.js",revision:null},{url:"/quasar-docs/js/30.4e6fb758.js",revision:null},{url:"/quasar-docs/js/31.c7e572db.js",revision:null},{url:"/quasar-docs/js/32.f39acbc3.js",revision:null},{url:"/quasar-docs/js/33.9a97ef59.js",revision:null},{url:"/quasar-docs/js/34.9ffc1eee.js",revision:null},{url:"/quasar-docs/js/35.2e08bc76.js",revision:null},{url:"/quasar-docs/js/36.14e9f926.js",revision:null},{url:"/quasar-docs/js/37.8233c697.js",revision:null},{url:"/quasar-docs/js/38.be48f42c.js",revision:null},{url:"/quasar-docs/js/39.e4bc0ef3.js",revision:null},{url:"/quasar-docs/js/40.0f779e78.js",revision:null},{url:"/quasar-docs/js/41.78e2e077.js",revision:null},{url:"/quasar-docs/js/42.fc8318e4.js",revision:null},{url:"/quasar-docs/js/43.646e3cd7.js",revision:null},{url:"/quasar-docs/js/44.6892466a.js",revision:null},{url:"/quasar-docs/js/45.48374b06.js",revision:null},{url:"/quasar-docs/js/46.63ff1da9.js",revision:null},{url:"/quasar-docs/js/47.65b30101.js",revision:null},{url:"/quasar-docs/js/48.f72171eb.js",revision:null},{url:"/quasar-docs/js/49.8fa61fe0.js",revision:null},{url:"/quasar-docs/js/50.b561ea7e.js",revision:null},{url:"/quasar-docs/js/51.89a5f105.js",revision:null},{url:"/quasar-docs/js/52.0d9f317d.js",revision:null},{url:"/quasar-docs/js/53.f1dbc4fb.js",revision:null},{url:"/quasar-docs/js/54.256715cd.js",revision:null},{url:"/quasar-docs/js/55.3bb3d6a5.js",revision:null},{url:"/quasar-docs/js/56.7191dcdc.js",revision:null},{url:"/quasar-docs/js/57.80b76dda.js",revision:null},{url:"/quasar-docs/js/58.fc955ac4.js",revision:null},{url:"/quasar-docs/js/59.fb547916.js",revision:null},{url:"/quasar-docs/js/6.ddaa0614.js",revision:null},{url:"/quasar-docs/js/60.317f8c20.js",revision:null},{url:"/quasar-docs/js/61.e4e9a8b9.js",revision:null},{url:"/quasar-docs/js/62.3225fe87.js",revision:null},{url:"/quasar-docs/js/63.60945bef.js",revision:null},{url:"/quasar-docs/js/64.4d3910a4.js",revision:null},{url:"/quasar-docs/js/65.bd3f418e.js",revision:null},{url:"/quasar-docs/js/66.51f44d5f.js",revision:null},{url:"/quasar-docs/js/67.d9a9cd6a.js",revision:null},{url:"/quasar-docs/js/68.3e34de33.js",revision:null},{url:"/quasar-docs/js/69.d90a4004.js",revision:null},{url:"/quasar-docs/js/7.feaf1300.js",revision:null},{url:"/quasar-docs/js/70.823c7765.js",revision:null},{url:"/quasar-docs/js/71.02f4ba55.js",revision:null},{url:"/quasar-docs/js/72.7b62b020.js",revision:null},{url:"/quasar-docs/js/73.83e84e06.js",revision:null},{url:"/quasar-docs/js/74.54d68100.js",revision:null},{url:"/quasar-docs/js/75.f3902864.js",revision:null},{url:"/quasar-docs/js/76.8282eddd.js",revision:null},{url:"/quasar-docs/js/77.93775602.js",revision:null},{url:"/quasar-docs/js/78.994b26f4.js",revision:null},{url:"/quasar-docs/js/79.abe17293.js",revision:null},{url:"/quasar-docs/js/8.939fca29.js",revision:null},{url:"/quasar-docs/js/80.b46829de.js",revision:null},{url:"/quasar-docs/js/81.578d4462.js",revision:null},{url:"/quasar-docs/js/82.184b1160.js",revision:null},{url:"/quasar-docs/js/83.d240947b.js",revision:null},{url:"/quasar-docs/js/84.4b3974d4.js",revision:null},{url:"/quasar-docs/js/85.c5307a75.js",revision:null},{url:"/quasar-docs/js/86.04b28ffa.js",revision:null},{url:"/quasar-docs/js/87.dd3531cf.js",revision:null},{url:"/quasar-docs/js/88.7b58e77b.js",revision:null},{url:"/quasar-docs/js/89.46b6c343.js",revision:null},{url:"/quasar-docs/js/9.dddba3fc.js",revision:null},{url:"/quasar-docs/js/90.e71bcf2b.js",revision:null},{url:"/quasar-docs/js/91.53bb62e6.js",revision:null},{url:"/quasar-docs/js/92.7ad9c9b2.js",revision:null},{url:"/quasar-docs/js/93.a468427e.js",revision:null},{url:"/quasar-docs/js/94.ff6faaa4.js",revision:null},{url:"/quasar-docs/js/95.614e986e.js",revision:null},{url:"/quasar-docs/js/96.56e7a33b.js",revision:null},{url:"/quasar-docs/js/97.1590dadb.js",revision:null},{url:"/quasar-docs/js/98.e49fd35c.js",revision:null},{url:"/quasar-docs/js/99.dfce48b0.js",revision:null},{url:"/quasar-docs/js/algolia.a72af684.js",revision:null},{url:"/quasar-docs/js/app.b3310a13.js",revision:null},{url:"/quasar-docs/js/demo-source.c1f9752d.js",revision:null},{url:"/quasar-docs/js/demo.877f8bb7.js",revision:null},{url:"/quasar-docs/js/quasar-api.19e23061.js",revision:null},{url:"/quasar-docs/js/vendor.de37b618.js",revision:null},{url:"/quasar-docs/manifest.json",revision:"c204d8a4789b4bbf39245c6d39f17e25"},{url:"/quasar-docs/search_manifest.xml",revision:"300aefa0a28b0c85164adf6ad5eaabd4"}],{}),s.cleanupOutdatedCaches(),s.registerRoute(new s.NavigationRoute(s.createHandlerBoundToURL("/quasar-docs/index.html"),{denylist:[/service-worker\.js$/,/workbox-(.)*\.js$/]})),s.registerRoute(/^https:\/\/cdn/,new s.StaleWhileRevalidate,"GET")}));
