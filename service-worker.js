if(!self.define){let s,r={};const u=(u,l)=>(u=new URL(u+".js",l).href,r[u]||new Promise((r=>{if("document"in self){const s=document.createElement("script");s.src=u,s.onload=r,document.head.appendChild(s)}else s=u,importScripts(u),r()})).then((()=>{let s=r[u];if(!s)throw new Error(`Module ${u} didn’t register its module`);return s})));self.define=(l,a)=>{const o=s||("document"in self?document.currentScript.src:"")||location.href;if(r[o])return;let n={};const i=s=>u(s,o),j={module:{uri:o},exports:n,require:i};r[o]=Promise.all(l.map((s=>j[s]||i(s)))).then((s=>(a(...s),n)))}}define(["./workbox-aceee4cb"],(function(s){"use strict";s.setCacheNameDetails({prefix:"quasar.dev-pdan"}),self.skipWaiting(),s.clientsClaim(),s.precacheAndRoute([{url:"/quasar-docs/css/10.6c4f751e.css",revision:null},{url:"/quasar-docs/css/11.cd1b576e.css",revision:null},{url:"/quasar-docs/css/12.ad911322.css",revision:null},{url:"/quasar-docs/css/13.add4cbf4.css",revision:null},{url:"/quasar-docs/css/14.99064edf.css",revision:null},{url:"/quasar-docs/css/15.add5568a.css",revision:null},{url:"/quasar-docs/css/16.e41fb891.css",revision:null},{url:"/quasar-docs/css/17.40810d73.css",revision:null},{url:"/quasar-docs/css/18.64943849.css",revision:null},{url:"/quasar-docs/css/19.b04235c4.css",revision:null},{url:"/quasar-docs/css/20.c8e0bfc6.css",revision:null},{url:"/quasar-docs/css/5.741c5712.css",revision:null},{url:"/quasar-docs/css/6.a3edad8d.css",revision:null},{url:"/quasar-docs/css/7.d2b53414.css",revision:null},{url:"/quasar-docs/css/8.fba8489e.css",revision:null},{url:"/quasar-docs/css/9.94695e1b.css",revision:null},{url:"/quasar-docs/css/app.6d3d88cb.css",revision:null},{url:"/quasar-docs/css/demo.3451127d.css",revision:null},{url:"/quasar-docs/fonts/KFOkCnqEu92Fr1MmgVxIIzQ.9391e6e2.woff",revision:null},{url:"/quasar-docs/fonts/KFOlCnqEu92Fr1MmEU9fBBc-.ddd11dab.woff",revision:null},{url:"/quasar-docs/fonts/KFOlCnqEu92Fr1MmSU5fBBc-.877b9231.woff",revision:null},{url:"/quasar-docs/fonts/KFOlCnqEu92Fr1MmWUlfBBc-.0344cc3c.woff",revision:null},{url:"/quasar-docs/fonts/KFOlCnqEu92Fr1MmYUtfBBc-.b555d228.woff",revision:null},{url:"/quasar-docs/fonts/KFOmCnqEu92Fr1Mu4mxM.9b78ea3b.woff",revision:null},{url:"/quasar-docs/fonts/flUhRq6tzZclQEJ-Vdg-IuiaDsNa.6b3adb7e.woff",revision:null},{url:"/quasar-docs/fonts/flUhRq6tzZclQEJ-Vdg-IuiaDsNcIhQ8tQ.b833408f.woff2",revision:null},{url:"/quasar-docs/index.html",revision:"cedd4a4458642a47df779b06d4535df2"},{url:"/quasar-docs/js/10.08613285.js",revision:null},{url:"/quasar-docs/js/100.fc338c7e.js",revision:null},{url:"/quasar-docs/js/101.01c1b727.js",revision:null},{url:"/quasar-docs/js/102.708393d2.js",revision:null},{url:"/quasar-docs/js/103.72edcdec.js",revision:null},{url:"/quasar-docs/js/104.c331d3db.js",revision:null},{url:"/quasar-docs/js/105.0a026e8b.js",revision:null},{url:"/quasar-docs/js/106.c65e9d55.js",revision:null},{url:"/quasar-docs/js/107.990fb43b.js",revision:null},{url:"/quasar-docs/js/108.dc67ed05.js",revision:null},{url:"/quasar-docs/js/109.08b767ec.js",revision:null},{url:"/quasar-docs/js/11.94b44b33.js",revision:null},{url:"/quasar-docs/js/110.867afd69.js",revision:null},{url:"/quasar-docs/js/111.ec97f961.js",revision:null},{url:"/quasar-docs/js/112.98142e46.js",revision:null},{url:"/quasar-docs/js/113.e51ad446.js",revision:null},{url:"/quasar-docs/js/114.ca1a18c6.js",revision:null},{url:"/quasar-docs/js/115.35048425.js",revision:null},{url:"/quasar-docs/js/116.89e542c5.js",revision:null},{url:"/quasar-docs/js/117.91332b94.js",revision:null},{url:"/quasar-docs/js/118.3864bfd7.js",revision:null},{url:"/quasar-docs/js/119.2b426cee.js",revision:null},{url:"/quasar-docs/js/12.ebf3065e.js",revision:null},{url:"/quasar-docs/js/120.753cbbdd.js",revision:null},{url:"/quasar-docs/js/121.123a6a43.js",revision:null},{url:"/quasar-docs/js/122.a3da071f.js",revision:null},{url:"/quasar-docs/js/123.ee2c7c12.js",revision:null},{url:"/quasar-docs/js/124.614d942a.js",revision:null},{url:"/quasar-docs/js/125.ec9cf590.js",revision:null},{url:"/quasar-docs/js/126.ec9f664b.js",revision:null},{url:"/quasar-docs/js/127.5f568848.js",revision:null},{url:"/quasar-docs/js/128.d9da055f.js",revision:null},{url:"/quasar-docs/js/129.22a2b503.js",revision:null},{url:"/quasar-docs/js/13.30003525.js",revision:null},{url:"/quasar-docs/js/130.fbdd77c9.js",revision:null},{url:"/quasar-docs/js/131.3cdb7fb5.js",revision:null},{url:"/quasar-docs/js/132.d8d16e2b.js",revision:null},{url:"/quasar-docs/js/133.d64c05fe.js",revision:null},{url:"/quasar-docs/js/134.b8fa97ba.js",revision:null},{url:"/quasar-docs/js/135.61f95040.js",revision:null},{url:"/quasar-docs/js/136.e100a9dc.js",revision:null},{url:"/quasar-docs/js/137.0693becd.js",revision:null},{url:"/quasar-docs/js/138.00d32314.js",revision:null},{url:"/quasar-docs/js/139.284494e4.js",revision:null},{url:"/quasar-docs/js/14.92b07c76.js",revision:null},{url:"/quasar-docs/js/140.aca91c84.js",revision:null},{url:"/quasar-docs/js/141.5ac7d317.js",revision:null},{url:"/quasar-docs/js/142.a6444d2b.js",revision:null},{url:"/quasar-docs/js/143.3ecd8d5f.js",revision:null},{url:"/quasar-docs/js/144.bc376fb7.js",revision:null},{url:"/quasar-docs/js/145.34530d0d.js",revision:null},{url:"/quasar-docs/js/146.c72eb2ab.js",revision:null},{url:"/quasar-docs/js/147.4e8f960a.js",revision:null},{url:"/quasar-docs/js/148.27828035.js",revision:null},{url:"/quasar-docs/js/149.62338010.js",revision:null},{url:"/quasar-docs/js/15.3b547423.js",revision:null},{url:"/quasar-docs/js/150.7108eef9.js",revision:null},{url:"/quasar-docs/js/151.79c6f607.js",revision:null},{url:"/quasar-docs/js/152.0512d31f.js",revision:null},{url:"/quasar-docs/js/153.10fbc1ce.js",revision:null},{url:"/quasar-docs/js/154.d2fdd2af.js",revision:null},{url:"/quasar-docs/js/155.6192472e.js",revision:null},{url:"/quasar-docs/js/156.bb048a56.js",revision:null},{url:"/quasar-docs/js/157.221babc0.js",revision:null},{url:"/quasar-docs/js/158.d5f998d5.js",revision:null},{url:"/quasar-docs/js/159.0ee22b6e.js",revision:null},{url:"/quasar-docs/js/16.1dd212d5.js",revision:null},{url:"/quasar-docs/js/160.84e9bcbc.js",revision:null},{url:"/quasar-docs/js/161.0e4915cd.js",revision:null},{url:"/quasar-docs/js/162.cbe4e5dd.js",revision:null},{url:"/quasar-docs/js/163.7f9ee4cc.js",revision:null},{url:"/quasar-docs/js/164.131804fb.js",revision:null},{url:"/quasar-docs/js/165.366d8fa4.js",revision:null},{url:"/quasar-docs/js/166.5958fa19.js",revision:null},{url:"/quasar-docs/js/167.c77f496e.js",revision:null},{url:"/quasar-docs/js/168.230db54e.js",revision:null},{url:"/quasar-docs/js/169.2945b9c7.js",revision:null},{url:"/quasar-docs/js/17.fd594200.js",revision:null},{url:"/quasar-docs/js/170.e98fcd02.js",revision:null},{url:"/quasar-docs/js/171.5782884b.js",revision:null},{url:"/quasar-docs/js/172.3cfd0cfe.js",revision:null},{url:"/quasar-docs/js/173.4459f682.js",revision:null},{url:"/quasar-docs/js/174.93446179.js",revision:null},{url:"/quasar-docs/js/175.66c4e482.js",revision:null},{url:"/quasar-docs/js/176.d626d584.js",revision:null},{url:"/quasar-docs/js/177.da9647af.js",revision:null},{url:"/quasar-docs/js/178.9b277d7e.js",revision:null},{url:"/quasar-docs/js/179.3ffe0b91.js",revision:null},{url:"/quasar-docs/js/18.0575d94d.js",revision:null},{url:"/quasar-docs/js/180.4ae5d01e.js",revision:null},{url:"/quasar-docs/js/181.d6d353e3.js",revision:null},{url:"/quasar-docs/js/182.4bd649f9.js",revision:null},{url:"/quasar-docs/js/183.05e674de.js",revision:null},{url:"/quasar-docs/js/184.7b578e7e.js",revision:null},{url:"/quasar-docs/js/185.db394fd8.js",revision:null},{url:"/quasar-docs/js/186.6322946e.js",revision:null},{url:"/quasar-docs/js/187.cb1223b8.js",revision:null},{url:"/quasar-docs/js/188.3175c0d3.js",revision:null},{url:"/quasar-docs/js/189.eb500287.js",revision:null},{url:"/quasar-docs/js/19.a7fe4df9.js",revision:null},{url:"/quasar-docs/js/190.412c1522.js",revision:null},{url:"/quasar-docs/js/191.a9c8ab8b.js",revision:null},{url:"/quasar-docs/js/192.713ccd9f.js",revision:null},{url:"/quasar-docs/js/193.716da77e.js",revision:null},{url:"/quasar-docs/js/194.25dabfe6.js",revision:null},{url:"/quasar-docs/js/195.87f8f088.js",revision:null},{url:"/quasar-docs/js/196.81f5f9cc.js",revision:null},{url:"/quasar-docs/js/197.c3f7ef83.js",revision:null},{url:"/quasar-docs/js/198.944261c3.js",revision:null},{url:"/quasar-docs/js/199.c91a7a0e.js",revision:null},{url:"/quasar-docs/js/20.941bbaa6.js",revision:null},{url:"/quasar-docs/js/200.a45057f6.js",revision:null},{url:"/quasar-docs/js/201.4adcad25.js",revision:null},{url:"/quasar-docs/js/202.237c0cec.js",revision:null},{url:"/quasar-docs/js/203.ca5e0378.js",revision:null},{url:"/quasar-docs/js/204.8669e088.js",revision:null},{url:"/quasar-docs/js/205.72148a83.js",revision:null},{url:"/quasar-docs/js/206.7f7c953a.js",revision:null},{url:"/quasar-docs/js/207.c82483ae.js",revision:null},{url:"/quasar-docs/js/208.ff862def.js",revision:null},{url:"/quasar-docs/js/209.3f1c1568.js",revision:null},{url:"/quasar-docs/js/21.945bf174.js",revision:null},{url:"/quasar-docs/js/210.63f65e5c.js",revision:null},{url:"/quasar-docs/js/211.022f0065.js",revision:null},{url:"/quasar-docs/js/212.2d33ce4c.js",revision:null},{url:"/quasar-docs/js/213.20011879.js",revision:null},{url:"/quasar-docs/js/214.07cc787d.js",revision:null},{url:"/quasar-docs/js/215.4a0ec14a.js",revision:null},{url:"/quasar-docs/js/216.852dcbf8.js",revision:null},{url:"/quasar-docs/js/217.f58fa3d2.js",revision:null},{url:"/quasar-docs/js/218.7c3ae110.js",revision:null},{url:"/quasar-docs/js/219.551135b2.js",revision:null},{url:"/quasar-docs/js/22.d268be3a.js",revision:null},{url:"/quasar-docs/js/220.3bf30c5e.js",revision:null},{url:"/quasar-docs/js/221.1c8c60c4.js",revision:null},{url:"/quasar-docs/js/222.216ac3c7.js",revision:null},{url:"/quasar-docs/js/223.c7fa1687.js",revision:null},{url:"/quasar-docs/js/224.c76a544c.js",revision:null},{url:"/quasar-docs/js/225.c75a0507.js",revision:null},{url:"/quasar-docs/js/226.187363df.js",revision:null},{url:"/quasar-docs/js/227.d30dbf80.js",revision:null},{url:"/quasar-docs/js/228.eb0808ac.js",revision:null},{url:"/quasar-docs/js/229.5459378f.js",revision:null},{url:"/quasar-docs/js/23.a79b2d3d.js",revision:null},{url:"/quasar-docs/js/230.d75b43c2.js",revision:null},{url:"/quasar-docs/js/231.27442346.js",revision:null},{url:"/quasar-docs/js/232.af10158f.js",revision:null},{url:"/quasar-docs/js/233.d8bfe38a.js",revision:null},{url:"/quasar-docs/js/234.b3058363.js",revision:null},{url:"/quasar-docs/js/235.55c9aa3a.js",revision:null},{url:"/quasar-docs/js/236.8dacd1c1.js",revision:null},{url:"/quasar-docs/js/237.e48496e5.js",revision:null},{url:"/quasar-docs/js/238.07c37303.js",revision:null},{url:"/quasar-docs/js/239.fee3e5a3.js",revision:null},{url:"/quasar-docs/js/24.1973c2ce.js",revision:null},{url:"/quasar-docs/js/240.32c2a486.js",revision:null},{url:"/quasar-docs/js/241.65d33bea.js",revision:null},{url:"/quasar-docs/js/242.d6504364.js",revision:null},{url:"/quasar-docs/js/243.cba7550d.js",revision:null},{url:"/quasar-docs/js/244.7092860b.js",revision:null},{url:"/quasar-docs/js/245.a3ca0d90.js",revision:null},{url:"/quasar-docs/js/246.d4caab94.js",revision:null},{url:"/quasar-docs/js/247.1619d755.js",revision:null},{url:"/quasar-docs/js/248.926ee139.js",revision:null},{url:"/quasar-docs/js/249.ead50db2.js",revision:null},{url:"/quasar-docs/js/25.44c24939.js",revision:null},{url:"/quasar-docs/js/250.c172a4f6.js",revision:null},{url:"/quasar-docs/js/251.5c756fa9.js",revision:null},{url:"/quasar-docs/js/252.ce5cc77f.js",revision:null},{url:"/quasar-docs/js/253.c6470fff.js",revision:null},{url:"/quasar-docs/js/254.ac51a3d8.js",revision:null},{url:"/quasar-docs/js/255.b5e6bd3d.js",revision:null},{url:"/quasar-docs/js/256.6b31bf8c.js",revision:null},{url:"/quasar-docs/js/257.eedac006.js",revision:null},{url:"/quasar-docs/js/258.248f7b0a.js",revision:null},{url:"/quasar-docs/js/259.3b922280.js",revision:null},{url:"/quasar-docs/js/26.7b6af4b3.js",revision:null},{url:"/quasar-docs/js/260.711d31ed.js",revision:null},{url:"/quasar-docs/js/261.b3d4b4a6.js",revision:null},{url:"/quasar-docs/js/262.2fd2d83b.js",revision:null},{url:"/quasar-docs/js/263.c2b83f9d.js",revision:null},{url:"/quasar-docs/js/264.366e6e04.js",revision:null},{url:"/quasar-docs/js/265.d9dd2be1.js",revision:null},{url:"/quasar-docs/js/266.568d9556.js",revision:null},{url:"/quasar-docs/js/267.cf2d7547.js",revision:null},{url:"/quasar-docs/js/268.b02ec718.js",revision:null},{url:"/quasar-docs/js/269.891001c6.js",revision:null},{url:"/quasar-docs/js/27.95a75f79.js",revision:null},{url:"/quasar-docs/js/270.50a5c62d.js",revision:null},{url:"/quasar-docs/js/271.9f511723.js",revision:null},{url:"/quasar-docs/js/272.10af4ab8.js",revision:null},{url:"/quasar-docs/js/273.27b825d7.js",revision:null},{url:"/quasar-docs/js/274.8a95e439.js",revision:null},{url:"/quasar-docs/js/275.ff2ed1dc.js",revision:null},{url:"/quasar-docs/js/276.678b034f.js",revision:null},{url:"/quasar-docs/js/277.cd6c59eb.js",revision:null},{url:"/quasar-docs/js/278.a36a1e5d.js",revision:null},{url:"/quasar-docs/js/279.fd90da6c.js",revision:null},{url:"/quasar-docs/js/28.5aab6021.js",revision:null},{url:"/quasar-docs/js/280.bcb77d5c.js",revision:null},{url:"/quasar-docs/js/281.5d92f30d.js",revision:null},{url:"/quasar-docs/js/282.74d80ef3.js",revision:null},{url:"/quasar-docs/js/283.2b83cc54.js",revision:null},{url:"/quasar-docs/js/284.ca1f9d09.js",revision:null},{url:"/quasar-docs/js/285.9352a553.js",revision:null},{url:"/quasar-docs/js/286.4e0a454b.js",revision:null},{url:"/quasar-docs/js/287.980debe7.js",revision:null},{url:"/quasar-docs/js/288.5cfc8f4f.js",revision:null},{url:"/quasar-docs/js/289.2424eaa6.js",revision:null},{url:"/quasar-docs/js/29.7666efe6.js",revision:null},{url:"/quasar-docs/js/290.87e85a1f.js",revision:null},{url:"/quasar-docs/js/291.8fbb8a43.js",revision:null},{url:"/quasar-docs/js/30.0cfc568b.js",revision:null},{url:"/quasar-docs/js/31.15ad2ad8.js",revision:null},{url:"/quasar-docs/js/32.8ff9a12e.js",revision:null},{url:"/quasar-docs/js/33.aa354713.js",revision:null},{url:"/quasar-docs/js/34.0bf66200.js",revision:null},{url:"/quasar-docs/js/35.bf0c0fc0.js",revision:null},{url:"/quasar-docs/js/36.1f31a96a.js",revision:null},{url:"/quasar-docs/js/37.bc433de3.js",revision:null},{url:"/quasar-docs/js/38.ba13bc9a.js",revision:null},{url:"/quasar-docs/js/39.e6885799.js",revision:null},{url:"/quasar-docs/js/40.958f2fda.js",revision:null},{url:"/quasar-docs/js/41.cd6cff55.js",revision:null},{url:"/quasar-docs/js/42.b1e2d568.js",revision:null},{url:"/quasar-docs/js/43.bd808aa6.js",revision:null},{url:"/quasar-docs/js/44.d7b6413e.js",revision:null},{url:"/quasar-docs/js/45.b4ce0ead.js",revision:null},{url:"/quasar-docs/js/46.2d1a1331.js",revision:null},{url:"/quasar-docs/js/47.d1464bff.js",revision:null},{url:"/quasar-docs/js/48.fe10f51b.js",revision:null},{url:"/quasar-docs/js/49.73495ab8.js",revision:null},{url:"/quasar-docs/js/5.1a80d955.js",revision:null},{url:"/quasar-docs/js/50.91aece78.js",revision:null},{url:"/quasar-docs/js/51.6e05b172.js",revision:null},{url:"/quasar-docs/js/52.9e522e5b.js",revision:null},{url:"/quasar-docs/js/53.4787bb30.js",revision:null},{url:"/quasar-docs/js/54.c9108a10.js",revision:null},{url:"/quasar-docs/js/55.0f69cba4.js",revision:null},{url:"/quasar-docs/js/56.8ceef7c1.js",revision:null},{url:"/quasar-docs/js/57.011af7d0.js",revision:null},{url:"/quasar-docs/js/58.cdb113f1.js",revision:null},{url:"/quasar-docs/js/59.536adf86.js",revision:null},{url:"/quasar-docs/js/6.e424a369.js",revision:null},{url:"/quasar-docs/js/60.80ed9d10.js",revision:null},{url:"/quasar-docs/js/61.89036a9e.js",revision:null},{url:"/quasar-docs/js/62.6462f7c9.js",revision:null},{url:"/quasar-docs/js/63.42927e60.js",revision:null},{url:"/quasar-docs/js/64.964aa97b.js",revision:null},{url:"/quasar-docs/js/65.ca623803.js",revision:null},{url:"/quasar-docs/js/66.825fd022.js",revision:null},{url:"/quasar-docs/js/67.cd68dc5f.js",revision:null},{url:"/quasar-docs/js/68.717c485c.js",revision:null},{url:"/quasar-docs/js/69.77f7c43a.js",revision:null},{url:"/quasar-docs/js/7.85c7396a.js",revision:null},{url:"/quasar-docs/js/70.763c5211.js",revision:null},{url:"/quasar-docs/js/71.0dc4a61b.js",revision:null},{url:"/quasar-docs/js/72.6fd61497.js",revision:null},{url:"/quasar-docs/js/73.6403ffb9.js",revision:null},{url:"/quasar-docs/js/74.2530eb94.js",revision:null},{url:"/quasar-docs/js/75.1fb5bd0a.js",revision:null},{url:"/quasar-docs/js/76.e228f4b7.js",revision:null},{url:"/quasar-docs/js/77.72c8dc2d.js",revision:null},{url:"/quasar-docs/js/78.67dd2bb2.js",revision:null},{url:"/quasar-docs/js/79.db9bea2d.js",revision:null},{url:"/quasar-docs/js/8.8afbb254.js",revision:null},{url:"/quasar-docs/js/80.1948dcd2.js",revision:null},{url:"/quasar-docs/js/81.1f118ecc.js",revision:null},{url:"/quasar-docs/js/82.21dcd334.js",revision:null},{url:"/quasar-docs/js/83.ac7842a3.js",revision:null},{url:"/quasar-docs/js/84.5ed6a30a.js",revision:null},{url:"/quasar-docs/js/85.3fc5ae99.js",revision:null},{url:"/quasar-docs/js/86.fa5918da.js",revision:null},{url:"/quasar-docs/js/87.51bede61.js",revision:null},{url:"/quasar-docs/js/88.5b98ef85.js",revision:null},{url:"/quasar-docs/js/89.3cbf0c5b.js",revision:null},{url:"/quasar-docs/js/9.5bd08233.js",revision:null},{url:"/quasar-docs/js/90.27bd6c5e.js",revision:null},{url:"/quasar-docs/js/91.616fba73.js",revision:null},{url:"/quasar-docs/js/92.46caafed.js",revision:null},{url:"/quasar-docs/js/93.8de076ba.js",revision:null},{url:"/quasar-docs/js/94.22f23e62.js",revision:null},{url:"/quasar-docs/js/95.d51faeb5.js",revision:null},{url:"/quasar-docs/js/96.afa547dc.js",revision:null},{url:"/quasar-docs/js/97.495bff6b.js",revision:null},{url:"/quasar-docs/js/98.5f467053.js",revision:null},{url:"/quasar-docs/js/99.31acdc61.js",revision:null},{url:"/quasar-docs/js/app.1de543ea.js",revision:null},{url:"/quasar-docs/js/demo-source.bb8b256b.js",revision:null},{url:"/quasar-docs/js/demo.5aed99ea.js",revision:null},{url:"/quasar-docs/js/quasar-api.fc82e745.js",revision:null},{url:"/quasar-docs/js/vendor.5cedcb25.js",revision:null},{url:"/quasar-docs/manifest.json",revision:"40ae8260585492c4e8abac407217657a"},{url:"/quasar-docs/search_manifest.xml",revision:"300aefa0a28b0c85164adf6ad5eaabd4"}],{}),s.cleanupOutdatedCaches(),s.registerRoute(new s.NavigationRoute(s.createHandlerBoundToURL("/quasar-docs/index.html"),{denylist:[/service-worker\.js$/,/workbox-(.)*\.js$/]})),s.registerRoute(/^https:\/\/cdn/,new s.StaleWhileRevalidate,"GET")}));
