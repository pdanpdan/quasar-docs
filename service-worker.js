if(!self.define){let s,r={};const u=(u,l)=>(u=new URL(u+".js",l).href,r[u]||new Promise((r=>{if("document"in self){const s=document.createElement("script");s.src=u,s.onload=r,document.head.appendChild(s)}else s=u,importScripts(u),r()})).then((()=>{let s=r[u];if(!s)throw new Error(`Module ${u} didn’t register its module`);return s})));self.define=(l,a)=>{const o=s||("document"in self?document.currentScript.src:"")||location.href;if(r[o])return;let n={};const i=s=>u(s,o),j={module:{uri:o},exports:n,require:i};r[o]=Promise.all(l.map((s=>j[s]||i(s)))).then((s=>(a(...s),n)))}}define(["./workbox-cbe72a63"],(function(s){"use strict";s.setCacheNameDetails({prefix:"quasar.dev-pdan"}),self.skipWaiting(),s.clientsClaim(),s.precacheAndRoute([{url:"/quasar-docs/css/10.b07171aa.css",revision:null},{url:"/quasar-docs/css/11.cd1b576e.css",revision:null},{url:"/quasar-docs/css/12.c07bf27d.css",revision:null},{url:"/quasar-docs/css/13.96af82c5.css",revision:null},{url:"/quasar-docs/css/14.99064edf.css",revision:null},{url:"/quasar-docs/css/15.add5568a.css",revision:null},{url:"/quasar-docs/css/16.e41fb891.css",revision:null},{url:"/quasar-docs/css/17.40810d73.css",revision:null},{url:"/quasar-docs/css/18.64943849.css",revision:null},{url:"/quasar-docs/css/19.b04235c4.css",revision:null},{url:"/quasar-docs/css/20.c8e0bfc6.css",revision:null},{url:"/quasar-docs/css/5.b1df0b34.css",revision:null},{url:"/quasar-docs/css/6.a3edad8d.css",revision:null},{url:"/quasar-docs/css/7.d2b53414.css",revision:null},{url:"/quasar-docs/css/8.c4fa22ac.css",revision:null},{url:"/quasar-docs/css/9.94695e1b.css",revision:null},{url:"/quasar-docs/css/app.1b64739a.css",revision:null},{url:"/quasar-docs/css/demo.6b70117a.css",revision:null},{url:"/quasar-docs/fonts/KFOkCnqEu92Fr1MmgVxIIzQ.9391e6e2.woff",revision:null},{url:"/quasar-docs/fonts/KFOlCnqEu92Fr1MmEU9fBBc-.ddd11dab.woff",revision:null},{url:"/quasar-docs/fonts/KFOlCnqEu92Fr1MmSU5fBBc-.877b9231.woff",revision:null},{url:"/quasar-docs/fonts/KFOlCnqEu92Fr1MmWUlfBBc-.0344cc3c.woff",revision:null},{url:"/quasar-docs/fonts/KFOlCnqEu92Fr1MmYUtfBBc-.b555d228.woff",revision:null},{url:"/quasar-docs/fonts/KFOmCnqEu92Fr1Mu4mxM.9b78ea3b.woff",revision:null},{url:"/quasar-docs/fonts/flUhRq6tzZclQEJ-Vdg-IuiaDsNa.40fa1be9.woff",revision:null},{url:"/quasar-docs/fonts/flUhRq6tzZclQEJ-Vdg-IuiaDsNcIhQ8tQ.cf9862e8.woff2",revision:null},{url:"/quasar-docs/index.html",revision:"fb896f61c95470fcf43c67ec97bd076a"},{url:"/quasar-docs/js/10.648f2ca6.js",revision:null},{url:"/quasar-docs/js/100.fc338c7e.js",revision:null},{url:"/quasar-docs/js/101.01c1b727.js",revision:null},{url:"/quasar-docs/js/102.a2af53e7.js",revision:null},{url:"/quasar-docs/js/103.302d1051.js",revision:null},{url:"/quasar-docs/js/104.5e5e84e7.js",revision:null},{url:"/quasar-docs/js/105.71bdea16.js",revision:null},{url:"/quasar-docs/js/106.c65e9d55.js",revision:null},{url:"/quasar-docs/js/107.521501eb.js",revision:null},{url:"/quasar-docs/js/108.dc67ed05.js",revision:null},{url:"/quasar-docs/js/109.08b767ec.js",revision:null},{url:"/quasar-docs/js/11.94b44b33.js",revision:null},{url:"/quasar-docs/js/110.82d413bb.js",revision:null},{url:"/quasar-docs/js/111.f1c36cd8.js",revision:null},{url:"/quasar-docs/js/112.bbb0826a.js",revision:null},{url:"/quasar-docs/js/113.7412a5c2.js",revision:null},{url:"/quasar-docs/js/114.ca1a18c6.js",revision:null},{url:"/quasar-docs/js/115.1889a0d1.js",revision:null},{url:"/quasar-docs/js/116.89e542c5.js",revision:null},{url:"/quasar-docs/js/117.91332b94.js",revision:null},{url:"/quasar-docs/js/118.6de8a891.js",revision:null},{url:"/quasar-docs/js/119.2b426cee.js",revision:null},{url:"/quasar-docs/js/12.63b125f5.js",revision:null},{url:"/quasar-docs/js/120.8bc2fc4c.js",revision:null},{url:"/quasar-docs/js/121.123a6a43.js",revision:null},{url:"/quasar-docs/js/122.15bd2c92.js",revision:null},{url:"/quasar-docs/js/123.ee2c7c12.js",revision:null},{url:"/quasar-docs/js/124.9ba701b3.js",revision:null},{url:"/quasar-docs/js/125.ec9cf590.js",revision:null},{url:"/quasar-docs/js/126.a519147c.js",revision:null},{url:"/quasar-docs/js/127.26c73b3c.js",revision:null},{url:"/quasar-docs/js/128.d9da055f.js",revision:null},{url:"/quasar-docs/js/129.22a2b503.js",revision:null},{url:"/quasar-docs/js/13.cf3b87c9.js",revision:null},{url:"/quasar-docs/js/130.fbdd77c9.js",revision:null},{url:"/quasar-docs/js/131.9ae5dc00.js",revision:null},{url:"/quasar-docs/js/132.d8d16e2b.js",revision:null},{url:"/quasar-docs/js/133.004760bb.js",revision:null},{url:"/quasar-docs/js/134.b8fa97ba.js",revision:null},{url:"/quasar-docs/js/135.9fe7de94.js",revision:null},{url:"/quasar-docs/js/136.e100a9dc.js",revision:null},{url:"/quasar-docs/js/137.0693becd.js",revision:null},{url:"/quasar-docs/js/138.e9ac9989.js",revision:null},{url:"/quasar-docs/js/139.df5ee380.js",revision:null},{url:"/quasar-docs/js/14.92b07c76.js",revision:null},{url:"/quasar-docs/js/140.00ae696d.js",revision:null},{url:"/quasar-docs/js/141.5ac7d317.js",revision:null},{url:"/quasar-docs/js/142.a6444d2b.js",revision:null},{url:"/quasar-docs/js/143.3ecd8d5f.js",revision:null},{url:"/quasar-docs/js/144.bc376fb7.js",revision:null},{url:"/quasar-docs/js/145.7bac2e80.js",revision:null},{url:"/quasar-docs/js/146.83b9cd74.js",revision:null},{url:"/quasar-docs/js/147.4e8f960a.js",revision:null},{url:"/quasar-docs/js/148.224d8063.js",revision:null},{url:"/quasar-docs/js/149.61621032.js",revision:null},{url:"/quasar-docs/js/15.a3921ff1.js",revision:null},{url:"/quasar-docs/js/150.e04f54dd.js",revision:null},{url:"/quasar-docs/js/151.fd24106a.js",revision:null},{url:"/quasar-docs/js/152.46f74bec.js",revision:null},{url:"/quasar-docs/js/153.5c5932f0.js",revision:null},{url:"/quasar-docs/js/154.d2fdd2af.js",revision:null},{url:"/quasar-docs/js/155.366fa26c.js",revision:null},{url:"/quasar-docs/js/156.7f3bced9.js",revision:null},{url:"/quasar-docs/js/157.1a7e04e0.js",revision:null},{url:"/quasar-docs/js/158.d9ae7994.js",revision:null},{url:"/quasar-docs/js/159.2e1f17f7.js",revision:null},{url:"/quasar-docs/js/16.fd05b11f.js",revision:null},{url:"/quasar-docs/js/160.8f5731ca.js",revision:null},{url:"/quasar-docs/js/161.ec5b3815.js",revision:null},{url:"/quasar-docs/js/162.0d0e04b2.js",revision:null},{url:"/quasar-docs/js/163.e569d571.js",revision:null},{url:"/quasar-docs/js/164.131804fb.js",revision:null},{url:"/quasar-docs/js/165.d2b0f6c0.js",revision:null},{url:"/quasar-docs/js/166.777dfd42.js",revision:null},{url:"/quasar-docs/js/167.a62b9526.js",revision:null},{url:"/quasar-docs/js/168.1202a8ff.js",revision:null},{url:"/quasar-docs/js/169.8522a123.js",revision:null},{url:"/quasar-docs/js/17.fd594200.js",revision:null},{url:"/quasar-docs/js/170.dafa35f9.js",revision:null},{url:"/quasar-docs/js/171.63094d78.js",revision:null},{url:"/quasar-docs/js/172.3cfd0cfe.js",revision:null},{url:"/quasar-docs/js/173.4459f682.js",revision:null},{url:"/quasar-docs/js/174.587793f0.js",revision:null},{url:"/quasar-docs/js/175.65234424.js",revision:null},{url:"/quasar-docs/js/176.d626d584.js",revision:null},{url:"/quasar-docs/js/177.eba4ac16.js",revision:null},{url:"/quasar-docs/js/178.f63fe164.js",revision:null},{url:"/quasar-docs/js/179.3ffe0b91.js",revision:null},{url:"/quasar-docs/js/18.0575d94d.js",revision:null},{url:"/quasar-docs/js/180.4ae5d01e.js",revision:null},{url:"/quasar-docs/js/181.d6d353e3.js",revision:null},{url:"/quasar-docs/js/182.4bd649f9.js",revision:null},{url:"/quasar-docs/js/183.fd6eaaa1.js",revision:null},{url:"/quasar-docs/js/184.7b578e7e.js",revision:null},{url:"/quasar-docs/js/185.db394fd8.js",revision:null},{url:"/quasar-docs/js/186.6322946e.js",revision:null},{url:"/quasar-docs/js/187.72398cf1.js",revision:null},{url:"/quasar-docs/js/188.40fa5f46.js",revision:null},{url:"/quasar-docs/js/189.0d177f60.js",revision:null},{url:"/quasar-docs/js/19.43503056.js",revision:null},{url:"/quasar-docs/js/190.398b2c0b.js",revision:null},{url:"/quasar-docs/js/191.a9c8ab8b.js",revision:null},{url:"/quasar-docs/js/192.713ccd9f.js",revision:null},{url:"/quasar-docs/js/193.e846bd23.js",revision:null},{url:"/quasar-docs/js/194.25dabfe6.js",revision:null},{url:"/quasar-docs/js/195.87f8f088.js",revision:null},{url:"/quasar-docs/js/196.81f5f9cc.js",revision:null},{url:"/quasar-docs/js/197.c3f7ef83.js",revision:null},{url:"/quasar-docs/js/198.944261c3.js",revision:null},{url:"/quasar-docs/js/199.c91a7a0e.js",revision:null},{url:"/quasar-docs/js/20.941bbaa6.js",revision:null},{url:"/quasar-docs/js/200.a45057f6.js",revision:null},{url:"/quasar-docs/js/201.efaeea1a.js",revision:null},{url:"/quasar-docs/js/202.375f282a.js",revision:null},{url:"/quasar-docs/js/203.13e808a3.js",revision:null},{url:"/quasar-docs/js/204.8669e088.js",revision:null},{url:"/quasar-docs/js/205.72148a83.js",revision:null},{url:"/quasar-docs/js/206.7f7c953a.js",revision:null},{url:"/quasar-docs/js/207.c82483ae.js",revision:null},{url:"/quasar-docs/js/208.ff862def.js",revision:null},{url:"/quasar-docs/js/209.3f1c1568.js",revision:null},{url:"/quasar-docs/js/21.945bf174.js",revision:null},{url:"/quasar-docs/js/210.63f65e5c.js",revision:null},{url:"/quasar-docs/js/211.022f0065.js",revision:null},{url:"/quasar-docs/js/212.2d33ce4c.js",revision:null},{url:"/quasar-docs/js/213.12cda803.js",revision:null},{url:"/quasar-docs/js/214.07cc787d.js",revision:null},{url:"/quasar-docs/js/215.4a0ec14a.js",revision:null},{url:"/quasar-docs/js/216.852dcbf8.js",revision:null},{url:"/quasar-docs/js/217.f58fa3d2.js",revision:null},{url:"/quasar-docs/js/218.7c3ae110.js",revision:null},{url:"/quasar-docs/js/219.551135b2.js",revision:null},{url:"/quasar-docs/js/22.8bdd6ff3.js",revision:null},{url:"/quasar-docs/js/220.3bf30c5e.js",revision:null},{url:"/quasar-docs/js/221.d50df919.js",revision:null},{url:"/quasar-docs/js/222.c5e8222c.js",revision:null},{url:"/quasar-docs/js/223.c7fa1687.js",revision:null},{url:"/quasar-docs/js/224.c76a544c.js",revision:null},{url:"/quasar-docs/js/225.c75a0507.js",revision:null},{url:"/quasar-docs/js/226.187363df.js",revision:null},{url:"/quasar-docs/js/227.2e9f6a52.js",revision:null},{url:"/quasar-docs/js/228.b7a5a244.js",revision:null},{url:"/quasar-docs/js/229.5e9f4c2b.js",revision:null},{url:"/quasar-docs/js/23.a79b2d3d.js",revision:null},{url:"/quasar-docs/js/230.d75b43c2.js",revision:null},{url:"/quasar-docs/js/231.27442346.js",revision:null},{url:"/quasar-docs/js/232.71246f68.js",revision:null},{url:"/quasar-docs/js/233.e5bc0626.js",revision:null},{url:"/quasar-docs/js/234.b3058363.js",revision:null},{url:"/quasar-docs/js/235.55c9aa3a.js",revision:null},{url:"/quasar-docs/js/236.8dacd1c1.js",revision:null},{url:"/quasar-docs/js/237.e48496e5.js",revision:null},{url:"/quasar-docs/js/238.07c37303.js",revision:null},{url:"/quasar-docs/js/239.fee3e5a3.js",revision:null},{url:"/quasar-docs/js/24.cf4799fd.js",revision:null},{url:"/quasar-docs/js/240.32c2a486.js",revision:null},{url:"/quasar-docs/js/241.3b857c8b.js",revision:null},{url:"/quasar-docs/js/242.d6504364.js",revision:null},{url:"/quasar-docs/js/243.cba7550d.js",revision:null},{url:"/quasar-docs/js/244.bb0f7a66.js",revision:null},{url:"/quasar-docs/js/245.a3ca0d90.js",revision:null},{url:"/quasar-docs/js/246.d4caab94.js",revision:null},{url:"/quasar-docs/js/247.1619d755.js",revision:null},{url:"/quasar-docs/js/248.c75cb522.js",revision:null},{url:"/quasar-docs/js/249.ead50db2.js",revision:null},{url:"/quasar-docs/js/25.9e69758d.js",revision:null},{url:"/quasar-docs/js/250.c172a4f6.js",revision:null},{url:"/quasar-docs/js/251.5c756fa9.js",revision:null},{url:"/quasar-docs/js/252.568e4062.js",revision:null},{url:"/quasar-docs/js/253.c6470fff.js",revision:null},{url:"/quasar-docs/js/254.ac51a3d8.js",revision:null},{url:"/quasar-docs/js/255.b5e6bd3d.js",revision:null},{url:"/quasar-docs/js/256.6b31bf8c.js",revision:null},{url:"/quasar-docs/js/257.eedac006.js",revision:null},{url:"/quasar-docs/js/258.248f7b0a.js",revision:null},{url:"/quasar-docs/js/259.c3ea0984.js",revision:null},{url:"/quasar-docs/js/26.defb5fa0.js",revision:null},{url:"/quasar-docs/js/260.711d31ed.js",revision:null},{url:"/quasar-docs/js/261.b3d4b4a6.js",revision:null},{url:"/quasar-docs/js/262.2fd2d83b.js",revision:null},{url:"/quasar-docs/js/263.c2b83f9d.js",revision:null},{url:"/quasar-docs/js/264.366e6e04.js",revision:null},{url:"/quasar-docs/js/265.851773e3.js",revision:null},{url:"/quasar-docs/js/266.61b6da94.js",revision:null},{url:"/quasar-docs/js/267.cf2d7547.js",revision:null},{url:"/quasar-docs/js/268.b02ec718.js",revision:null},{url:"/quasar-docs/js/269.891001c6.js",revision:null},{url:"/quasar-docs/js/27.95a75f79.js",revision:null},{url:"/quasar-docs/js/270.50a5c62d.js",revision:null},{url:"/quasar-docs/js/271.9f511723.js",revision:null},{url:"/quasar-docs/js/272.3b34817e.js",revision:null},{url:"/quasar-docs/js/273.2f07c74a.js",revision:null},{url:"/quasar-docs/js/274.8a95e439.js",revision:null},{url:"/quasar-docs/js/275.ff2ed1dc.js",revision:null},{url:"/quasar-docs/js/276.678b034f.js",revision:null},{url:"/quasar-docs/js/277.7dd2142d.js",revision:null},{url:"/quasar-docs/js/278.49ee34cb.js",revision:null},{url:"/quasar-docs/js/279.fd90da6c.js",revision:null},{url:"/quasar-docs/js/28.1473035b.js",revision:null},{url:"/quasar-docs/js/280.bcb77d5c.js",revision:null},{url:"/quasar-docs/js/281.5d92f30d.js",revision:null},{url:"/quasar-docs/js/282.74d80ef3.js",revision:null},{url:"/quasar-docs/js/283.2b83cc54.js",revision:null},{url:"/quasar-docs/js/284.93910bca.js",revision:null},{url:"/quasar-docs/js/285.9352a553.js",revision:null},{url:"/quasar-docs/js/286.4e0a454b.js",revision:null},{url:"/quasar-docs/js/287.980debe7.js",revision:null},{url:"/quasar-docs/js/288.5cfc8f4f.js",revision:null},{url:"/quasar-docs/js/289.63e44b4b.js",revision:null},{url:"/quasar-docs/js/29.7666efe6.js",revision:null},{url:"/quasar-docs/js/290.bb629013.js",revision:null},{url:"/quasar-docs/js/291.da22d1ae.js",revision:null},{url:"/quasar-docs/js/30.5be85479.js",revision:null},{url:"/quasar-docs/js/31.15ad2ad8.js",revision:null},{url:"/quasar-docs/js/32.8ff9a12e.js",revision:null},{url:"/quasar-docs/js/33.aa354713.js",revision:null},{url:"/quasar-docs/js/34.0bf66200.js",revision:null},{url:"/quasar-docs/js/35.bf0c0fc0.js",revision:null},{url:"/quasar-docs/js/36.ba1b7f9a.js",revision:null},{url:"/quasar-docs/js/37.6e7e35fe.js",revision:null},{url:"/quasar-docs/js/38.ba13bc9a.js",revision:null},{url:"/quasar-docs/js/39.e6885799.js",revision:null},{url:"/quasar-docs/js/40.958f2fda.js",revision:null},{url:"/quasar-docs/js/41.cd6cff55.js",revision:null},{url:"/quasar-docs/js/42.b1e2d568.js",revision:null},{url:"/quasar-docs/js/43.bd808aa6.js",revision:null},{url:"/quasar-docs/js/44.d7b6413e.js",revision:null},{url:"/quasar-docs/js/45.b4ce0ead.js",revision:null},{url:"/quasar-docs/js/46.2d1a1331.js",revision:null},{url:"/quasar-docs/js/47.46c93e4d.js",revision:null},{url:"/quasar-docs/js/48.8afafde5.js",revision:null},{url:"/quasar-docs/js/49.73495ab8.js",revision:null},{url:"/quasar-docs/js/5.3345c89b.js",revision:null},{url:"/quasar-docs/js/50.91aece78.js",revision:null},{url:"/quasar-docs/js/51.6e05b172.js",revision:null},{url:"/quasar-docs/js/52.9e522e5b.js",revision:null},{url:"/quasar-docs/js/53.4787bb30.js",revision:null},{url:"/quasar-docs/js/54.604fb6e7.js",revision:null},{url:"/quasar-docs/js/55.b56a093c.js",revision:null},{url:"/quasar-docs/js/56.8ceef7c1.js",revision:null},{url:"/quasar-docs/js/57.011af7d0.js",revision:null},{url:"/quasar-docs/js/58.b9bdfcf2.js",revision:null},{url:"/quasar-docs/js/59.21203cdc.js",revision:null},{url:"/quasar-docs/js/6.8ca65fc5.js",revision:null},{url:"/quasar-docs/js/60.a866ca4f.js",revision:null},{url:"/quasar-docs/js/61.89036a9e.js",revision:null},{url:"/quasar-docs/js/62.c8aebd2d.js",revision:null},{url:"/quasar-docs/js/63.c2b6fc5a.js",revision:null},{url:"/quasar-docs/js/64.bf81fdea.js",revision:null},{url:"/quasar-docs/js/65.a8a8fb31.js",revision:null},{url:"/quasar-docs/js/66.c5b0543c.js",revision:null},{url:"/quasar-docs/js/67.4335262a.js",revision:null},{url:"/quasar-docs/js/68.b251c53d.js",revision:null},{url:"/quasar-docs/js/69.0f548dcf.js",revision:null},{url:"/quasar-docs/js/7.7cd4347c.js",revision:null},{url:"/quasar-docs/js/70.778ce138.js",revision:null},{url:"/quasar-docs/js/71.0dc4a61b.js",revision:null},{url:"/quasar-docs/js/72.6fd61497.js",revision:null},{url:"/quasar-docs/js/73.fe392e3f.js",revision:null},{url:"/quasar-docs/js/74.ac834fea.js",revision:null},{url:"/quasar-docs/js/75.a69bf32d.js",revision:null},{url:"/quasar-docs/js/76.678bcf67.js",revision:null},{url:"/quasar-docs/js/77.d6e0e24f.js",revision:null},{url:"/quasar-docs/js/78.9eb24577.js",revision:null},{url:"/quasar-docs/js/79.db9bea2d.js",revision:null},{url:"/quasar-docs/js/8.aed604f9.js",revision:null},{url:"/quasar-docs/js/80.9ef821c8.js",revision:null},{url:"/quasar-docs/js/81.1f118ecc.js",revision:null},{url:"/quasar-docs/js/82.a23807ad.js",revision:null},{url:"/quasar-docs/js/83.877eb4c3.js",revision:null},{url:"/quasar-docs/js/84.97343925.js",revision:null},{url:"/quasar-docs/js/85.3fc5ae99.js",revision:null},{url:"/quasar-docs/js/86.fa5918da.js",revision:null},{url:"/quasar-docs/js/87.2b4adfe9.js",revision:null},{url:"/quasar-docs/js/88.3d1211d6.js",revision:null},{url:"/quasar-docs/js/89.3cbf0c5b.js",revision:null},{url:"/quasar-docs/js/9.d07134e5.js",revision:null},{url:"/quasar-docs/js/90.27bd6c5e.js",revision:null},{url:"/quasar-docs/js/91.d1742192.js",revision:null},{url:"/quasar-docs/js/92.8460f7d3.js",revision:null},{url:"/quasar-docs/js/93.8de076ba.js",revision:null},{url:"/quasar-docs/js/94.f544ec4e.js",revision:null},{url:"/quasar-docs/js/95.c55e77ec.js",revision:null},{url:"/quasar-docs/js/96.b6bde0a4.js",revision:null},{url:"/quasar-docs/js/97.495bff6b.js",revision:null},{url:"/quasar-docs/js/98.8bb2eb76.js",revision:null},{url:"/quasar-docs/js/99.31acdc61.js",revision:null},{url:"/quasar-docs/js/app.81b9b28b.js",revision:null},{url:"/quasar-docs/js/demo-source.72853169.js",revision:null},{url:"/quasar-docs/js/demo.fd8992e5.js",revision:null},{url:"/quasar-docs/js/quasar-api.65fbce9b.js",revision:null},{url:"/quasar-docs/js/vendor.eb9b5920.js",revision:null},{url:"/quasar-docs/manifest.json",revision:"40ae8260585492c4e8abac407217657a"},{url:"/quasar-docs/search_manifest.xml",revision:"300aefa0a28b0c85164adf6ad5eaabd4"}],{}),s.cleanupOutdatedCaches(),s.registerRoute(new s.NavigationRoute(s.createHandlerBoundToURL("/quasar-docs/index.html"),{denylist:[/service-worker\.js$/,/workbox-(.)*\.js$/]})),s.registerRoute(/^https:\/\/cdn/,new s.StaleWhileRevalidate,"GET")}));
