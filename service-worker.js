if(!self.define){let s,r={};const u=(u,l)=>(u=new URL(u+".js",l).href,r[u]||new Promise((r=>{if("document"in self){const s=document.createElement("script");s.src=u,s.onload=r,document.head.appendChild(s)}else s=u,importScripts(u),r()})).then((()=>{let s=r[u];if(!s)throw new Error(`Module ${u} didn’t register its module`);return s})));self.define=(l,a)=>{const o=s||("document"in self?document.currentScript.src:"")||location.href;if(r[o])return;let n={};const i=s=>u(s,o),j={module:{uri:o},exports:n,require:i};r[o]=Promise.all(l.map((s=>j[s]||i(s)))).then((s=>(a(...s),n)))}}define(["./workbox-53634a9b"],(function(s){"use strict";s.setCacheNameDetails({prefix:"quasar.dev-pdan"}),self.skipWaiting(),s.clientsClaim(),s.precacheAndRoute([{url:"/quasar-docs/css/10.6c4f751e.css",revision:null},{url:"/quasar-docs/css/11.cd1b576e.css",revision:null},{url:"/quasar-docs/css/12.ad911322.css",revision:null},{url:"/quasar-docs/css/13.af93a411.css",revision:null},{url:"/quasar-docs/css/14.a59a2242.css",revision:null},{url:"/quasar-docs/css/15.99064edf.css",revision:null},{url:"/quasar-docs/css/16.d85941d5.css",revision:null},{url:"/quasar-docs/css/17.fd03f1f1.css",revision:null},{url:"/quasar-docs/css/18.ad0a103b.css",revision:null},{url:"/quasar-docs/css/19.70a44e54.css",revision:null},{url:"/quasar-docs/css/20.107b614a.css",revision:null},{url:"/quasar-docs/css/21.64943849.css",revision:null},{url:"/quasar-docs/css/22.fe97eed3.css",revision:null},{url:"/quasar-docs/css/23.c8e0bfc6.css",revision:null},{url:"/quasar-docs/css/5.741c5712.css",revision:null},{url:"/quasar-docs/css/6.a3edad8d.css",revision:null},{url:"/quasar-docs/css/7.d2b53414.css",revision:null},{url:"/quasar-docs/css/8.7b007ba4.css",revision:null},{url:"/quasar-docs/css/9.94695e1b.css",revision:null},{url:"/quasar-docs/css/app.257c0b89.css",revision:null},{url:"/quasar-docs/css/demo.15aa28ac.css",revision:null},{url:"/quasar-docs/fonts/KFOkCnqEu92Fr1MmgVxIIzQ.68bb21d0.woff",revision:null},{url:"/quasar-docs/fonts/KFOlCnqEu92Fr1MmEU9fBBc-.48af7707.woff",revision:null},{url:"/quasar-docs/fonts/KFOlCnqEu92Fr1MmSU5fBBc-.c2f7ab22.woff",revision:null},{url:"/quasar-docs/fonts/KFOlCnqEu92Fr1MmWUlfBBc-.77ecb942.woff",revision:null},{url:"/quasar-docs/fonts/KFOlCnqEu92Fr1MmYUtfBBc-.f5677eb2.woff",revision:null},{url:"/quasar-docs/fonts/KFOmCnqEu92Fr1Mu4mxM.f1e2a767.woff",revision:null},{url:"/quasar-docs/fonts/flUhRq6tzZclQEJ-Vdg-IuiaDsNa.4d73cb90.woff",revision:null},{url:"/quasar-docs/fonts/flUhRq6tzZclQEJ-Vdg-IuiaDsNcIhQ8tQ.0383092b.woff2",revision:null},{url:"/quasar-docs/index.html",revision:"7f36c37f02c4b634f8c0d5afa49c5e89"},{url:"/quasar-docs/js/10.ef4efbff.js",revision:null},{url:"/quasar-docs/js/100.66e138bc.js",revision:null},{url:"/quasar-docs/js/101.18da3a3b.js",revision:null},{url:"/quasar-docs/js/102.745506c2.js",revision:null},{url:"/quasar-docs/js/103.dd74e936.js",revision:null},{url:"/quasar-docs/js/104.3ea838f3.js",revision:null},{url:"/quasar-docs/js/105.5258bb92.js",revision:null},{url:"/quasar-docs/js/106.922b1522.js",revision:null},{url:"/quasar-docs/js/107.52a7aa8c.js",revision:null},{url:"/quasar-docs/js/108.a825c140.js",revision:null},{url:"/quasar-docs/js/109.d7c99071.js",revision:null},{url:"/quasar-docs/js/11.13f1c209.js",revision:null},{url:"/quasar-docs/js/110.4036f05e.js",revision:null},{url:"/quasar-docs/js/111.fe538e62.js",revision:null},{url:"/quasar-docs/js/112.533f70b5.js",revision:null},{url:"/quasar-docs/js/113.a3cd0ca0.js",revision:null},{url:"/quasar-docs/js/114.f005109e.js",revision:null},{url:"/quasar-docs/js/115.6b6f7575.js",revision:null},{url:"/quasar-docs/js/116.f8425488.js",revision:null},{url:"/quasar-docs/js/117.265e150a.js",revision:null},{url:"/quasar-docs/js/118.25c3119f.js",revision:null},{url:"/quasar-docs/js/119.9fcbf58d.js",revision:null},{url:"/quasar-docs/js/12.36e2cd72.js",revision:null},{url:"/quasar-docs/js/120.cceedff1.js",revision:null},{url:"/quasar-docs/js/121.5db4fa77.js",revision:null},{url:"/quasar-docs/js/122.3a67117e.js",revision:null},{url:"/quasar-docs/js/123.a597a422.js",revision:null},{url:"/quasar-docs/js/124.4cff0b2c.js",revision:null},{url:"/quasar-docs/js/125.f96d9229.js",revision:null},{url:"/quasar-docs/js/126.7182b0d3.js",revision:null},{url:"/quasar-docs/js/127.bf341f6a.js",revision:null},{url:"/quasar-docs/js/128.854e9f08.js",revision:null},{url:"/quasar-docs/js/129.290da097.js",revision:null},{url:"/quasar-docs/js/13.80ed11e6.js",revision:null},{url:"/quasar-docs/js/130.6d5e6278.js",revision:null},{url:"/quasar-docs/js/131.ead9fa6b.js",revision:null},{url:"/quasar-docs/js/132.069612d3.js",revision:null},{url:"/quasar-docs/js/133.1703cfc4.js",revision:null},{url:"/quasar-docs/js/134.0c911a45.js",revision:null},{url:"/quasar-docs/js/135.b590e270.js",revision:null},{url:"/quasar-docs/js/136.43dee92d.js",revision:null},{url:"/quasar-docs/js/137.4e295b67.js",revision:null},{url:"/quasar-docs/js/138.e01456c2.js",revision:null},{url:"/quasar-docs/js/139.6fe3cfa6.js",revision:null},{url:"/quasar-docs/js/14.dfacb674.js",revision:null},{url:"/quasar-docs/js/140.db550198.js",revision:null},{url:"/quasar-docs/js/141.1e33e4e4.js",revision:null},{url:"/quasar-docs/js/142.72a9a6e9.js",revision:null},{url:"/quasar-docs/js/143.34c9be4b.js",revision:null},{url:"/quasar-docs/js/144.a7b1f5e7.js",revision:null},{url:"/quasar-docs/js/145.66ce0226.js",revision:null},{url:"/quasar-docs/js/146.9c9eacd5.js",revision:null},{url:"/quasar-docs/js/147.2028c002.js",revision:null},{url:"/quasar-docs/js/148.c6e416e2.js",revision:null},{url:"/quasar-docs/js/149.b9bbc5b6.js",revision:null},{url:"/quasar-docs/js/15.727736b0.js",revision:null},{url:"/quasar-docs/js/150.01d2e9da.js",revision:null},{url:"/quasar-docs/js/151.eafa23b6.js",revision:null},{url:"/quasar-docs/js/152.0d775eae.js",revision:null},{url:"/quasar-docs/js/153.bf4e4642.js",revision:null},{url:"/quasar-docs/js/154.6c506e00.js",revision:null},{url:"/quasar-docs/js/155.555e3ab4.js",revision:null},{url:"/quasar-docs/js/156.012df15d.js",revision:null},{url:"/quasar-docs/js/157.cd92b085.js",revision:null},{url:"/quasar-docs/js/158.9f50a1c3.js",revision:null},{url:"/quasar-docs/js/159.82fdf8e6.js",revision:null},{url:"/quasar-docs/js/16.cb239b2b.js",revision:null},{url:"/quasar-docs/js/160.f6b337c0.js",revision:null},{url:"/quasar-docs/js/161.fd7d19c8.js",revision:null},{url:"/quasar-docs/js/162.17ed5c31.js",revision:null},{url:"/quasar-docs/js/163.98d1d4eb.js",revision:null},{url:"/quasar-docs/js/164.c28b2075.js",revision:null},{url:"/quasar-docs/js/165.7b2ca7d9.js",revision:null},{url:"/quasar-docs/js/166.5ad9330d.js",revision:null},{url:"/quasar-docs/js/167.5b26b0ba.js",revision:null},{url:"/quasar-docs/js/168.68d9891c.js",revision:null},{url:"/quasar-docs/js/169.59cf480d.js",revision:null},{url:"/quasar-docs/js/17.2025f8f3.js",revision:null},{url:"/quasar-docs/js/170.6481f1cd.js",revision:null},{url:"/quasar-docs/js/171.e73cc130.js",revision:null},{url:"/quasar-docs/js/172.8ab6e386.js",revision:null},{url:"/quasar-docs/js/173.961854b0.js",revision:null},{url:"/quasar-docs/js/174.761b92d1.js",revision:null},{url:"/quasar-docs/js/175.a96d8570.js",revision:null},{url:"/quasar-docs/js/176.58662e06.js",revision:null},{url:"/quasar-docs/js/177.6e3a8a02.js",revision:null},{url:"/quasar-docs/js/178.d06852a4.js",revision:null},{url:"/quasar-docs/js/179.da126f2a.js",revision:null},{url:"/quasar-docs/js/18.8a03a5db.js",revision:null},{url:"/quasar-docs/js/180.31e9638a.js",revision:null},{url:"/quasar-docs/js/181.b311c403.js",revision:null},{url:"/quasar-docs/js/182.29d0e155.js",revision:null},{url:"/quasar-docs/js/183.99c6c987.js",revision:null},{url:"/quasar-docs/js/184.95a933b2.js",revision:null},{url:"/quasar-docs/js/185.65ef70eb.js",revision:null},{url:"/quasar-docs/js/186.c476f5af.js",revision:null},{url:"/quasar-docs/js/187.85f1f74a.js",revision:null},{url:"/quasar-docs/js/188.ee528092.js",revision:null},{url:"/quasar-docs/js/189.91fc638e.js",revision:null},{url:"/quasar-docs/js/19.223eaa28.js",revision:null},{url:"/quasar-docs/js/190.59300dba.js",revision:null},{url:"/quasar-docs/js/191.6345f8cf.js",revision:null},{url:"/quasar-docs/js/192.22ef2234.js",revision:null},{url:"/quasar-docs/js/193.93599546.js",revision:null},{url:"/quasar-docs/js/194.491e6e49.js",revision:null},{url:"/quasar-docs/js/195.b92572dd.js",revision:null},{url:"/quasar-docs/js/196.644d506c.js",revision:null},{url:"/quasar-docs/js/197.6f5e770d.js",revision:null},{url:"/quasar-docs/js/198.d92273a4.js",revision:null},{url:"/quasar-docs/js/199.6f3bf951.js",revision:null},{url:"/quasar-docs/js/20.80779de8.js",revision:null},{url:"/quasar-docs/js/200.fef00671.js",revision:null},{url:"/quasar-docs/js/201.1893f028.js",revision:null},{url:"/quasar-docs/js/202.379d77a3.js",revision:null},{url:"/quasar-docs/js/203.e7a16195.js",revision:null},{url:"/quasar-docs/js/204.29d66839.js",revision:null},{url:"/quasar-docs/js/205.b5a151f2.js",revision:null},{url:"/quasar-docs/js/206.63be3981.js",revision:null},{url:"/quasar-docs/js/207.61b2b5b3.js",revision:null},{url:"/quasar-docs/js/208.979ba979.js",revision:null},{url:"/quasar-docs/js/209.ae35a41e.js",revision:null},{url:"/quasar-docs/js/21.6d447516.js",revision:null},{url:"/quasar-docs/js/210.5ee56e8a.js",revision:null},{url:"/quasar-docs/js/211.79d785c5.js",revision:null},{url:"/quasar-docs/js/212.1bef6ee0.js",revision:null},{url:"/quasar-docs/js/213.6d7e8f55.js",revision:null},{url:"/quasar-docs/js/214.3b780118.js",revision:null},{url:"/quasar-docs/js/215.2910e055.js",revision:null},{url:"/quasar-docs/js/216.fcfa4f4c.js",revision:null},{url:"/quasar-docs/js/217.323c997d.js",revision:null},{url:"/quasar-docs/js/218.0c739853.js",revision:null},{url:"/quasar-docs/js/219.f7b518fe.js",revision:null},{url:"/quasar-docs/js/22.63cc18ca.js",revision:null},{url:"/quasar-docs/js/220.f01ed324.js",revision:null},{url:"/quasar-docs/js/221.18694c5c.js",revision:null},{url:"/quasar-docs/js/222.37ebe60a.js",revision:null},{url:"/quasar-docs/js/223.c1dc3796.js",revision:null},{url:"/quasar-docs/js/224.22f6d80f.js",revision:null},{url:"/quasar-docs/js/225.fffd8c02.js",revision:null},{url:"/quasar-docs/js/226.58b4cbcb.js",revision:null},{url:"/quasar-docs/js/227.9708b23e.js",revision:null},{url:"/quasar-docs/js/228.29d6a13a.js",revision:null},{url:"/quasar-docs/js/229.94607e16.js",revision:null},{url:"/quasar-docs/js/23.eafcd62a.js",revision:null},{url:"/quasar-docs/js/230.bee04531.js",revision:null},{url:"/quasar-docs/js/231.ce8789e7.js",revision:null},{url:"/quasar-docs/js/232.7c0fd497.js",revision:null},{url:"/quasar-docs/js/233.f337da04.js",revision:null},{url:"/quasar-docs/js/234.9031ea6c.js",revision:null},{url:"/quasar-docs/js/235.75c50752.js",revision:null},{url:"/quasar-docs/js/236.a466dfa2.js",revision:null},{url:"/quasar-docs/js/237.3b469376.js",revision:null},{url:"/quasar-docs/js/238.b031607e.js",revision:null},{url:"/quasar-docs/js/239.286a61e5.js",revision:null},{url:"/quasar-docs/js/24.570724d1.js",revision:null},{url:"/quasar-docs/js/240.5aba053b.js",revision:null},{url:"/quasar-docs/js/241.cff240e9.js",revision:null},{url:"/quasar-docs/js/242.307db110.js",revision:null},{url:"/quasar-docs/js/243.e4c2f9b5.js",revision:null},{url:"/quasar-docs/js/244.133f3775.js",revision:null},{url:"/quasar-docs/js/245.3b6661d5.js",revision:null},{url:"/quasar-docs/js/246.c21de71c.js",revision:null},{url:"/quasar-docs/js/247.a75cd14f.js",revision:null},{url:"/quasar-docs/js/248.aecf29f4.js",revision:null},{url:"/quasar-docs/js/249.51b842db.js",revision:null},{url:"/quasar-docs/js/25.117324df.js",revision:null},{url:"/quasar-docs/js/250.0ee5cd60.js",revision:null},{url:"/quasar-docs/js/251.3e6921c3.js",revision:null},{url:"/quasar-docs/js/252.8a82e855.js",revision:null},{url:"/quasar-docs/js/253.424bd6ad.js",revision:null},{url:"/quasar-docs/js/254.a3531846.js",revision:null},{url:"/quasar-docs/js/255.473056ee.js",revision:null},{url:"/quasar-docs/js/256.7723e538.js",revision:null},{url:"/quasar-docs/js/257.b2db9105.js",revision:null},{url:"/quasar-docs/js/258.6b21c3e9.js",revision:null},{url:"/quasar-docs/js/259.7a6bca6f.js",revision:null},{url:"/quasar-docs/js/26.4c3cfd27.js",revision:null},{url:"/quasar-docs/js/260.56ccbf5e.js",revision:null},{url:"/quasar-docs/js/261.d58b1e55.js",revision:null},{url:"/quasar-docs/js/262.2cbb18c4.js",revision:null},{url:"/quasar-docs/js/263.e0eb9d21.js",revision:null},{url:"/quasar-docs/js/264.731ea4d1.js",revision:null},{url:"/quasar-docs/js/265.15006646.js",revision:null},{url:"/quasar-docs/js/266.1c914f0d.js",revision:null},{url:"/quasar-docs/js/267.5bcef482.js",revision:null},{url:"/quasar-docs/js/268.2913691d.js",revision:null},{url:"/quasar-docs/js/269.ecc879b3.js",revision:null},{url:"/quasar-docs/js/27.e922a686.js",revision:null},{url:"/quasar-docs/js/270.8ad70599.js",revision:null},{url:"/quasar-docs/js/271.358e8f78.js",revision:null},{url:"/quasar-docs/js/272.ad0581a0.js",revision:null},{url:"/quasar-docs/js/273.a66fafef.js",revision:null},{url:"/quasar-docs/js/274.b07fa8c8.js",revision:null},{url:"/quasar-docs/js/275.61af6390.js",revision:null},{url:"/quasar-docs/js/276.d95a0588.js",revision:null},{url:"/quasar-docs/js/277.79678d48.js",revision:null},{url:"/quasar-docs/js/278.1e90ab33.js",revision:null},{url:"/quasar-docs/js/279.c4ed56cd.js",revision:null},{url:"/quasar-docs/js/28.ef8080a3.js",revision:null},{url:"/quasar-docs/js/280.483d1c3f.js",revision:null},{url:"/quasar-docs/js/281.fdb82947.js",revision:null},{url:"/quasar-docs/js/282.4982fd08.js",revision:null},{url:"/quasar-docs/js/283.cedd5ca4.js",revision:null},{url:"/quasar-docs/js/284.2cf0727f.js",revision:null},{url:"/quasar-docs/js/285.090b433d.js",revision:null},{url:"/quasar-docs/js/286.691090ee.js",revision:null},{url:"/quasar-docs/js/287.71e4e97e.js",revision:null},{url:"/quasar-docs/js/288.a30ee66f.js",revision:null},{url:"/quasar-docs/js/289.648a842f.js",revision:null},{url:"/quasar-docs/js/29.9ee00661.js",revision:null},{url:"/quasar-docs/js/290.f5230022.js",revision:null},{url:"/quasar-docs/js/291.b30f93b0.js",revision:null},{url:"/quasar-docs/js/292.495e2691.js",revision:null},{url:"/quasar-docs/js/30.44258627.js",revision:null},{url:"/quasar-docs/js/31.e6d51423.js",revision:null},{url:"/quasar-docs/js/32.c29bbeaa.js",revision:null},{url:"/quasar-docs/js/33.0b71666f.js",revision:null},{url:"/quasar-docs/js/34.0482f14a.js",revision:null},{url:"/quasar-docs/js/35.3901433d.js",revision:null},{url:"/quasar-docs/js/36.f2fe5121.js",revision:null},{url:"/quasar-docs/js/37.775f8ba9.js",revision:null},{url:"/quasar-docs/js/38.b5a81085.js",revision:null},{url:"/quasar-docs/js/39.13ea6204.js",revision:null},{url:"/quasar-docs/js/40.19336361.js",revision:null},{url:"/quasar-docs/js/41.26a4a8a0.js",revision:null},{url:"/quasar-docs/js/42.aaf6d1c8.js",revision:null},{url:"/quasar-docs/js/43.9836cd5e.js",revision:null},{url:"/quasar-docs/js/44.7da08c3d.js",revision:null},{url:"/quasar-docs/js/45.e8c96d57.js",revision:null},{url:"/quasar-docs/js/46.7173efcd.js",revision:null},{url:"/quasar-docs/js/47.0979f14d.js",revision:null},{url:"/quasar-docs/js/48.da7da4c4.js",revision:null},{url:"/quasar-docs/js/49.a1a789f1.js",revision:null},{url:"/quasar-docs/js/5.126b7a63.js",revision:null},{url:"/quasar-docs/js/50.fbab0497.js",revision:null},{url:"/quasar-docs/js/51.2f379b67.js",revision:null},{url:"/quasar-docs/js/52.03c23e8e.js",revision:null},{url:"/quasar-docs/js/53.18748a1a.js",revision:null},{url:"/quasar-docs/js/54.c690a13c.js",revision:null},{url:"/quasar-docs/js/55.af4e1235.js",revision:null},{url:"/quasar-docs/js/56.ab3609da.js",revision:null},{url:"/quasar-docs/js/57.3c899882.js",revision:null},{url:"/quasar-docs/js/58.ed7058d4.js",revision:null},{url:"/quasar-docs/js/59.00f20d43.js",revision:null},{url:"/quasar-docs/js/6.f89106a6.js",revision:null},{url:"/quasar-docs/js/60.9eca804d.js",revision:null},{url:"/quasar-docs/js/61.8a5f6f2d.js",revision:null},{url:"/quasar-docs/js/62.09d57900.js",revision:null},{url:"/quasar-docs/js/63.52608931.js",revision:null},{url:"/quasar-docs/js/64.1e6667ef.js",revision:null},{url:"/quasar-docs/js/65.bb0f9c44.js",revision:null},{url:"/quasar-docs/js/66.4a11c5c8.js",revision:null},{url:"/quasar-docs/js/67.4c307d6d.js",revision:null},{url:"/quasar-docs/js/68.c5da4543.js",revision:null},{url:"/quasar-docs/js/69.bff425ed.js",revision:null},{url:"/quasar-docs/js/7.862b09d8.js",revision:null},{url:"/quasar-docs/js/70.93afa735.js",revision:null},{url:"/quasar-docs/js/71.8535662a.js",revision:null},{url:"/quasar-docs/js/72.b9318408.js",revision:null},{url:"/quasar-docs/js/73.d13b8499.js",revision:null},{url:"/quasar-docs/js/74.da642785.js",revision:null},{url:"/quasar-docs/js/75.e741f326.js",revision:null},{url:"/quasar-docs/js/76.fe1588d2.js",revision:null},{url:"/quasar-docs/js/77.888b8ada.js",revision:null},{url:"/quasar-docs/js/78.ff5df259.js",revision:null},{url:"/quasar-docs/js/79.7b076170.js",revision:null},{url:"/quasar-docs/js/8.ad1ee385.js",revision:null},{url:"/quasar-docs/js/80.9e500f3e.js",revision:null},{url:"/quasar-docs/js/81.318b4df5.js",revision:null},{url:"/quasar-docs/js/82.149eb31a.js",revision:null},{url:"/quasar-docs/js/83.5d503de5.js",revision:null},{url:"/quasar-docs/js/84.f4c9c468.js",revision:null},{url:"/quasar-docs/js/85.65a83baa.js",revision:null},{url:"/quasar-docs/js/86.689f831d.js",revision:null},{url:"/quasar-docs/js/87.3193065b.js",revision:null},{url:"/quasar-docs/js/88.0a89eed0.js",revision:null},{url:"/quasar-docs/js/89.0c0ac654.js",revision:null},{url:"/quasar-docs/js/9.a555c461.js",revision:null},{url:"/quasar-docs/js/90.542bb171.js",revision:null},{url:"/quasar-docs/js/91.96478df5.js",revision:null},{url:"/quasar-docs/js/92.a80b1a64.js",revision:null},{url:"/quasar-docs/js/93.14ce27fc.js",revision:null},{url:"/quasar-docs/js/94.fe9aa4d2.js",revision:null},{url:"/quasar-docs/js/95.7ee63e97.js",revision:null},{url:"/quasar-docs/js/96.52cee287.js",revision:null},{url:"/quasar-docs/js/97.aa24989b.js",revision:null},{url:"/quasar-docs/js/98.fa5c9c24.js",revision:null},{url:"/quasar-docs/js/99.f85528eb.js",revision:null},{url:"/quasar-docs/js/app.0719503d.js",revision:null},{url:"/quasar-docs/js/demo-source.ff844c2d.js",revision:null},{url:"/quasar-docs/js/demo.f0c91248.js",revision:null},{url:"/quasar-docs/js/quasar-api.d3099b3a.js",revision:null},{url:"/quasar-docs/js/vendor.fd81e61c.js",revision:null},{url:"/quasar-docs/manifest.json",revision:"40ae8260585492c4e8abac407217657a"},{url:"/quasar-docs/search_manifest.xml",revision:"300aefa0a28b0c85164adf6ad5eaabd4"}],{}),s.cleanupOutdatedCaches(),s.registerRoute(new s.NavigationRoute(s.createHandlerBoundToURL("/quasar-docs/index.html"),{denylist:[/service-worker\.js$/,/workbox-(.)*\.js$/]})),s.registerRoute(/^https:\/\/cdn/,new s.StaleWhileRevalidate,"GET")}));
