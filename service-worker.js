if(!self.define){let s,r={};const u=(u,l)=>(u=new URL(u+".js",l).href,r[u]||new Promise((r=>{if("document"in self){const s=document.createElement("script");s.src=u,s.onload=r,document.head.appendChild(s)}else s=u,importScripts(u),r()})).then((()=>{let s=r[u];if(!s)throw new Error(`Module ${u} didn’t register its module`);return s})));self.define=(l,a)=>{const o=s||("document"in self?document.currentScript.src:"")||location.href;if(r[o])return;let n={};const i=s=>u(s,o),j={module:{uri:o},exports:n,require:i};r[o]=Promise.all(l.map((s=>j[s]||i(s)))).then((s=>(a(...s),n)))}}define(["./workbox-596c5513"],(function(s){"use strict";s.setCacheNameDetails({prefix:"quasar.dev-pdan"}),self.skipWaiting(),s.clientsClaim(),s.precacheAndRoute([{url:"/quasar-docs/css/10.6c4f751e.css",revision:null},{url:"/quasar-docs/css/11.cd1b576e.css",revision:null},{url:"/quasar-docs/css/12.ad911322.css",revision:null},{url:"/quasar-docs/css/13.af93a411.css",revision:null},{url:"/quasar-docs/css/14.a59a2242.css",revision:null},{url:"/quasar-docs/css/15.99064edf.css",revision:null},{url:"/quasar-docs/css/16.d85941d5.css",revision:null},{url:"/quasar-docs/css/17.fd03f1f1.css",revision:null},{url:"/quasar-docs/css/18.ad0a103b.css",revision:null},{url:"/quasar-docs/css/19.70a44e54.css",revision:null},{url:"/quasar-docs/css/20.107b614a.css",revision:null},{url:"/quasar-docs/css/21.64943849.css",revision:null},{url:"/quasar-docs/css/22.fe97eed3.css",revision:null},{url:"/quasar-docs/css/23.c8e0bfc6.css",revision:null},{url:"/quasar-docs/css/5.741c5712.css",revision:null},{url:"/quasar-docs/css/6.a3edad8d.css",revision:null},{url:"/quasar-docs/css/7.d2b53414.css",revision:null},{url:"/quasar-docs/css/8.7b007ba4.css",revision:null},{url:"/quasar-docs/css/9.94695e1b.css",revision:null},{url:"/quasar-docs/css/app.d9002828.css",revision:null},{url:"/quasar-docs/css/demo.15aa28ac.css",revision:null},{url:"/quasar-docs/fonts/KFOkCnqEu92Fr1MmgVxIIzQ.68bb21d0.woff",revision:null},{url:"/quasar-docs/fonts/KFOlCnqEu92Fr1MmEU9fBBc-.48af7707.woff",revision:null},{url:"/quasar-docs/fonts/KFOlCnqEu92Fr1MmSU5fBBc-.c2f7ab22.woff",revision:null},{url:"/quasar-docs/fonts/KFOlCnqEu92Fr1MmWUlfBBc-.77ecb942.woff",revision:null},{url:"/quasar-docs/fonts/KFOlCnqEu92Fr1MmYUtfBBc-.f5677eb2.woff",revision:null},{url:"/quasar-docs/fonts/KFOmCnqEu92Fr1Mu4mxM.f1e2a767.woff",revision:null},{url:"/quasar-docs/fonts/flUhRq6tzZclQEJ-Vdg-IuiaDsNa.4d73cb90.woff",revision:null},{url:"/quasar-docs/fonts/flUhRq6tzZclQEJ-Vdg-IuiaDsNcIhQ8tQ.0383092b.woff2",revision:null},{url:"/quasar-docs/index.html",revision:"b681eace26c3ea5c46083827e596e54a"},{url:"/quasar-docs/js/10.dc3b607e.js",revision:null},{url:"/quasar-docs/js/100.73eb5d67.js",revision:null},{url:"/quasar-docs/js/101.a9468cc0.js",revision:null},{url:"/quasar-docs/js/102.ef62cb46.js",revision:null},{url:"/quasar-docs/js/103.2371fbac.js",revision:null},{url:"/quasar-docs/js/104.3be980f9.js",revision:null},{url:"/quasar-docs/js/105.b4060467.js",revision:null},{url:"/quasar-docs/js/106.4597a70e.js",revision:null},{url:"/quasar-docs/js/107.35f63c56.js",revision:null},{url:"/quasar-docs/js/108.3e9b2a09.js",revision:null},{url:"/quasar-docs/js/109.d2af45c1.js",revision:null},{url:"/quasar-docs/js/11.06b2af31.js",revision:null},{url:"/quasar-docs/js/110.157e8e88.js",revision:null},{url:"/quasar-docs/js/111.8607d766.js",revision:null},{url:"/quasar-docs/js/112.5121049e.js",revision:null},{url:"/quasar-docs/js/113.e6ebe9fa.js",revision:null},{url:"/quasar-docs/js/114.e5d6a63e.js",revision:null},{url:"/quasar-docs/js/115.7022aca9.js",revision:null},{url:"/quasar-docs/js/116.97a2de03.js",revision:null},{url:"/quasar-docs/js/117.03f3348b.js",revision:null},{url:"/quasar-docs/js/118.f33cf517.js",revision:null},{url:"/quasar-docs/js/119.15569a2a.js",revision:null},{url:"/quasar-docs/js/12.93a1b7ed.js",revision:null},{url:"/quasar-docs/js/120.2b921cf9.js",revision:null},{url:"/quasar-docs/js/121.808229c8.js",revision:null},{url:"/quasar-docs/js/122.72bb1a62.js",revision:null},{url:"/quasar-docs/js/123.35f10a29.js",revision:null},{url:"/quasar-docs/js/124.7b720e6c.js",revision:null},{url:"/quasar-docs/js/125.e01f7697.js",revision:null},{url:"/quasar-docs/js/126.50f30e8e.js",revision:null},{url:"/quasar-docs/js/127.a1fb29e8.js",revision:null},{url:"/quasar-docs/js/128.e6287786.js",revision:null},{url:"/quasar-docs/js/129.15673e36.js",revision:null},{url:"/quasar-docs/js/13.b52fcac9.js",revision:null},{url:"/quasar-docs/js/130.a679d0a9.js",revision:null},{url:"/quasar-docs/js/131.ae1d9e23.js",revision:null},{url:"/quasar-docs/js/132.d248fad7.js",revision:null},{url:"/quasar-docs/js/133.74244792.js",revision:null},{url:"/quasar-docs/js/134.decd48bb.js",revision:null},{url:"/quasar-docs/js/135.b3905c74.js",revision:null},{url:"/quasar-docs/js/136.da3f731a.js",revision:null},{url:"/quasar-docs/js/137.a77daef9.js",revision:null},{url:"/quasar-docs/js/138.24f183be.js",revision:null},{url:"/quasar-docs/js/139.30bd681e.js",revision:null},{url:"/quasar-docs/js/14.56cc9027.js",revision:null},{url:"/quasar-docs/js/140.25f6e72e.js",revision:null},{url:"/quasar-docs/js/141.1b1a0179.js",revision:null},{url:"/quasar-docs/js/142.7a49ebce.js",revision:null},{url:"/quasar-docs/js/143.02fac933.js",revision:null},{url:"/quasar-docs/js/144.0502c9ad.js",revision:null},{url:"/quasar-docs/js/145.9de850dd.js",revision:null},{url:"/quasar-docs/js/146.26b55ea6.js",revision:null},{url:"/quasar-docs/js/147.363f44a7.js",revision:null},{url:"/quasar-docs/js/148.ac7f72a2.js",revision:null},{url:"/quasar-docs/js/149.f83eab7b.js",revision:null},{url:"/quasar-docs/js/15.01929097.js",revision:null},{url:"/quasar-docs/js/150.a05f585f.js",revision:null},{url:"/quasar-docs/js/151.944a20ca.js",revision:null},{url:"/quasar-docs/js/152.b5ca2713.js",revision:null},{url:"/quasar-docs/js/153.23199ff0.js",revision:null},{url:"/quasar-docs/js/154.ead196c8.js",revision:null},{url:"/quasar-docs/js/155.9f536a12.js",revision:null},{url:"/quasar-docs/js/156.e1e48717.js",revision:null},{url:"/quasar-docs/js/157.efc614e6.js",revision:null},{url:"/quasar-docs/js/158.3fe83dd3.js",revision:null},{url:"/quasar-docs/js/159.b130a047.js",revision:null},{url:"/quasar-docs/js/16.62d72645.js",revision:null},{url:"/quasar-docs/js/160.312e9b6d.js",revision:null},{url:"/quasar-docs/js/161.9af9cfaf.js",revision:null},{url:"/quasar-docs/js/162.ad50193f.js",revision:null},{url:"/quasar-docs/js/163.7df88529.js",revision:null},{url:"/quasar-docs/js/164.25a7cb7a.js",revision:null},{url:"/quasar-docs/js/165.f0a44d85.js",revision:null},{url:"/quasar-docs/js/166.0c82d334.js",revision:null},{url:"/quasar-docs/js/167.8988a83b.js",revision:null},{url:"/quasar-docs/js/168.edd113d3.js",revision:null},{url:"/quasar-docs/js/169.aae7264d.js",revision:null},{url:"/quasar-docs/js/17.e6aec759.js",revision:null},{url:"/quasar-docs/js/170.3e830142.js",revision:null},{url:"/quasar-docs/js/171.2a6ecfb7.js",revision:null},{url:"/quasar-docs/js/172.f2779c8e.js",revision:null},{url:"/quasar-docs/js/173.34b5f3a9.js",revision:null},{url:"/quasar-docs/js/174.ff7822fc.js",revision:null},{url:"/quasar-docs/js/175.184f7a14.js",revision:null},{url:"/quasar-docs/js/176.a1851a97.js",revision:null},{url:"/quasar-docs/js/177.99f5d6c5.js",revision:null},{url:"/quasar-docs/js/178.84a7c904.js",revision:null},{url:"/quasar-docs/js/179.611ad3c3.js",revision:null},{url:"/quasar-docs/js/18.947ce4cd.js",revision:null},{url:"/quasar-docs/js/180.986691c7.js",revision:null},{url:"/quasar-docs/js/181.12783a49.js",revision:null},{url:"/quasar-docs/js/182.754d8bb3.js",revision:null},{url:"/quasar-docs/js/183.06b3d8a2.js",revision:null},{url:"/quasar-docs/js/184.f4d4fe34.js",revision:null},{url:"/quasar-docs/js/185.72f8835f.js",revision:null},{url:"/quasar-docs/js/186.bbe58497.js",revision:null},{url:"/quasar-docs/js/187.0d914d4b.js",revision:null},{url:"/quasar-docs/js/188.48302dac.js",revision:null},{url:"/quasar-docs/js/189.e271b970.js",revision:null},{url:"/quasar-docs/js/19.c30882b9.js",revision:null},{url:"/quasar-docs/js/190.5334622b.js",revision:null},{url:"/quasar-docs/js/191.b6e13895.js",revision:null},{url:"/quasar-docs/js/192.cc0530ac.js",revision:null},{url:"/quasar-docs/js/193.b875ee78.js",revision:null},{url:"/quasar-docs/js/194.ff4aab89.js",revision:null},{url:"/quasar-docs/js/195.91a5ea83.js",revision:null},{url:"/quasar-docs/js/196.80a20d0b.js",revision:null},{url:"/quasar-docs/js/197.c8629585.js",revision:null},{url:"/quasar-docs/js/198.5dfb48c9.js",revision:null},{url:"/quasar-docs/js/199.aa11064f.js",revision:null},{url:"/quasar-docs/js/20.ae4dc55a.js",revision:null},{url:"/quasar-docs/js/200.700398f8.js",revision:null},{url:"/quasar-docs/js/201.f571986c.js",revision:null},{url:"/quasar-docs/js/202.3a1ac3fb.js",revision:null},{url:"/quasar-docs/js/203.1f4fb278.js",revision:null},{url:"/quasar-docs/js/204.29eb49a2.js",revision:null},{url:"/quasar-docs/js/205.c396701f.js",revision:null},{url:"/quasar-docs/js/206.e1265d9a.js",revision:null},{url:"/quasar-docs/js/207.c954543f.js",revision:null},{url:"/quasar-docs/js/208.95752e81.js",revision:null},{url:"/quasar-docs/js/209.cffc4991.js",revision:null},{url:"/quasar-docs/js/21.91b2f513.js",revision:null},{url:"/quasar-docs/js/210.5abaea3d.js",revision:null},{url:"/quasar-docs/js/211.e1c118a8.js",revision:null},{url:"/quasar-docs/js/212.3341af26.js",revision:null},{url:"/quasar-docs/js/213.2f2a6a5b.js",revision:null},{url:"/quasar-docs/js/214.563db698.js",revision:null},{url:"/quasar-docs/js/215.801014ee.js",revision:null},{url:"/quasar-docs/js/216.141e1865.js",revision:null},{url:"/quasar-docs/js/217.5c6789c6.js",revision:null},{url:"/quasar-docs/js/218.b419d203.js",revision:null},{url:"/quasar-docs/js/219.805eef04.js",revision:null},{url:"/quasar-docs/js/22.56e7e0a1.js",revision:null},{url:"/quasar-docs/js/220.4c17e7f9.js",revision:null},{url:"/quasar-docs/js/221.7c5ed9f3.js",revision:null},{url:"/quasar-docs/js/222.77289fae.js",revision:null},{url:"/quasar-docs/js/223.0cbeb9fd.js",revision:null},{url:"/quasar-docs/js/224.8fff2d63.js",revision:null},{url:"/quasar-docs/js/225.56cd105b.js",revision:null},{url:"/quasar-docs/js/226.9086c82b.js",revision:null},{url:"/quasar-docs/js/227.729a3787.js",revision:null},{url:"/quasar-docs/js/228.8432fcf1.js",revision:null},{url:"/quasar-docs/js/229.4c58b5dc.js",revision:null},{url:"/quasar-docs/js/23.4cb68a56.js",revision:null},{url:"/quasar-docs/js/230.0407b027.js",revision:null},{url:"/quasar-docs/js/231.ac27a7d4.js",revision:null},{url:"/quasar-docs/js/232.4bb82f6f.js",revision:null},{url:"/quasar-docs/js/233.a8106bb0.js",revision:null},{url:"/quasar-docs/js/234.d0327154.js",revision:null},{url:"/quasar-docs/js/235.f3df51a2.js",revision:null},{url:"/quasar-docs/js/236.895f2231.js",revision:null},{url:"/quasar-docs/js/237.c6c18a87.js",revision:null},{url:"/quasar-docs/js/238.62c8c06c.js",revision:null},{url:"/quasar-docs/js/239.23b5b16b.js",revision:null},{url:"/quasar-docs/js/24.379e0e96.js",revision:null},{url:"/quasar-docs/js/240.e98e7ab9.js",revision:null},{url:"/quasar-docs/js/241.11899e12.js",revision:null},{url:"/quasar-docs/js/242.b0085c28.js",revision:null},{url:"/quasar-docs/js/243.11870181.js",revision:null},{url:"/quasar-docs/js/244.3286bfe7.js",revision:null},{url:"/quasar-docs/js/245.8bc1e6e1.js",revision:null},{url:"/quasar-docs/js/246.f819cb87.js",revision:null},{url:"/quasar-docs/js/247.63f61cad.js",revision:null},{url:"/quasar-docs/js/248.3e484f8b.js",revision:null},{url:"/quasar-docs/js/249.a36271d7.js",revision:null},{url:"/quasar-docs/js/25.3bab222d.js",revision:null},{url:"/quasar-docs/js/250.7610e236.js",revision:null},{url:"/quasar-docs/js/251.6b8ee25a.js",revision:null},{url:"/quasar-docs/js/252.51d6e5f6.js",revision:null},{url:"/quasar-docs/js/253.c1e560e1.js",revision:null},{url:"/quasar-docs/js/254.81597bec.js",revision:null},{url:"/quasar-docs/js/255.57766ec8.js",revision:null},{url:"/quasar-docs/js/256.244e8b2c.js",revision:null},{url:"/quasar-docs/js/257.b992f0ba.js",revision:null},{url:"/quasar-docs/js/258.e95d7937.js",revision:null},{url:"/quasar-docs/js/259.846c50bb.js",revision:null},{url:"/quasar-docs/js/26.dab858ed.js",revision:null},{url:"/quasar-docs/js/260.3ad54deb.js",revision:null},{url:"/quasar-docs/js/261.f430cfb6.js",revision:null},{url:"/quasar-docs/js/262.cc63d53b.js",revision:null},{url:"/quasar-docs/js/263.b530846b.js",revision:null},{url:"/quasar-docs/js/264.d1a42608.js",revision:null},{url:"/quasar-docs/js/265.8afb85d1.js",revision:null},{url:"/quasar-docs/js/266.4de88b9e.js",revision:null},{url:"/quasar-docs/js/267.eb234774.js",revision:null},{url:"/quasar-docs/js/268.31e639e9.js",revision:null},{url:"/quasar-docs/js/269.d36e7dc2.js",revision:null},{url:"/quasar-docs/js/27.f1fbc436.js",revision:null},{url:"/quasar-docs/js/270.c64f7635.js",revision:null},{url:"/quasar-docs/js/271.d64b91a8.js",revision:null},{url:"/quasar-docs/js/272.af10aa01.js",revision:null},{url:"/quasar-docs/js/273.18dcc3dc.js",revision:null},{url:"/quasar-docs/js/274.a7e74cdb.js",revision:null},{url:"/quasar-docs/js/275.8e2b7588.js",revision:null},{url:"/quasar-docs/js/276.5a3046bc.js",revision:null},{url:"/quasar-docs/js/277.82d0f40f.js",revision:null},{url:"/quasar-docs/js/278.683cf01d.js",revision:null},{url:"/quasar-docs/js/279.762b03ab.js",revision:null},{url:"/quasar-docs/js/28.d93a5b7a.js",revision:null},{url:"/quasar-docs/js/280.fcc25650.js",revision:null},{url:"/quasar-docs/js/281.77f3c97f.js",revision:null},{url:"/quasar-docs/js/282.74829283.js",revision:null},{url:"/quasar-docs/js/283.87162a34.js",revision:null},{url:"/quasar-docs/js/284.01e2317f.js",revision:null},{url:"/quasar-docs/js/285.c399a06c.js",revision:null},{url:"/quasar-docs/js/286.f17ea022.js",revision:null},{url:"/quasar-docs/js/287.6b4ae689.js",revision:null},{url:"/quasar-docs/js/288.dad53f49.js",revision:null},{url:"/quasar-docs/js/289.6c40a20d.js",revision:null},{url:"/quasar-docs/js/29.63ba3235.js",revision:null},{url:"/quasar-docs/js/290.d17fe761.js",revision:null},{url:"/quasar-docs/js/291.9d4c400d.js",revision:null},{url:"/quasar-docs/js/292.737e5887.js",revision:null},{url:"/quasar-docs/js/30.3bdccda1.js",revision:null},{url:"/quasar-docs/js/31.f313b3d9.js",revision:null},{url:"/quasar-docs/js/32.7423e7b1.js",revision:null},{url:"/quasar-docs/js/33.90fec35d.js",revision:null},{url:"/quasar-docs/js/34.d9cc1430.js",revision:null},{url:"/quasar-docs/js/35.0df42130.js",revision:null},{url:"/quasar-docs/js/36.15886b91.js",revision:null},{url:"/quasar-docs/js/37.792f29bf.js",revision:null},{url:"/quasar-docs/js/38.e5fe9b30.js",revision:null},{url:"/quasar-docs/js/39.a78fd583.js",revision:null},{url:"/quasar-docs/js/40.008dd2a4.js",revision:null},{url:"/quasar-docs/js/41.0a2f1e36.js",revision:null},{url:"/quasar-docs/js/42.f6d39bad.js",revision:null},{url:"/quasar-docs/js/43.2019fad5.js",revision:null},{url:"/quasar-docs/js/44.7f093f06.js",revision:null},{url:"/quasar-docs/js/45.3f6298b8.js",revision:null},{url:"/quasar-docs/js/46.4a22041a.js",revision:null},{url:"/quasar-docs/js/47.b8bf6972.js",revision:null},{url:"/quasar-docs/js/48.45415b18.js",revision:null},{url:"/quasar-docs/js/49.35f429f4.js",revision:null},{url:"/quasar-docs/js/5.7064cb11.js",revision:null},{url:"/quasar-docs/js/50.c4a1a31d.js",revision:null},{url:"/quasar-docs/js/51.5a440a71.js",revision:null},{url:"/quasar-docs/js/52.e7e097d6.js",revision:null},{url:"/quasar-docs/js/53.908605e3.js",revision:null},{url:"/quasar-docs/js/54.2c10734a.js",revision:null},{url:"/quasar-docs/js/55.1cdd8794.js",revision:null},{url:"/quasar-docs/js/56.badecae4.js",revision:null},{url:"/quasar-docs/js/57.ee1fab20.js",revision:null},{url:"/quasar-docs/js/58.c379c1c6.js",revision:null},{url:"/quasar-docs/js/59.322bdce3.js",revision:null},{url:"/quasar-docs/js/6.6242b308.js",revision:null},{url:"/quasar-docs/js/60.c8cc1ded.js",revision:null},{url:"/quasar-docs/js/61.cd3ec118.js",revision:null},{url:"/quasar-docs/js/62.ab7ac82b.js",revision:null},{url:"/quasar-docs/js/63.88426ed5.js",revision:null},{url:"/quasar-docs/js/64.eeb2912e.js",revision:null},{url:"/quasar-docs/js/65.aca22caf.js",revision:null},{url:"/quasar-docs/js/66.e79f7f89.js",revision:null},{url:"/quasar-docs/js/67.bf5c4bea.js",revision:null},{url:"/quasar-docs/js/68.af77c735.js",revision:null},{url:"/quasar-docs/js/69.c84e8c25.js",revision:null},{url:"/quasar-docs/js/7.8e67fcd1.js",revision:null},{url:"/quasar-docs/js/70.5d64c19d.js",revision:null},{url:"/quasar-docs/js/71.6e33607f.js",revision:null},{url:"/quasar-docs/js/72.1f0b9f5d.js",revision:null},{url:"/quasar-docs/js/73.b47f83a7.js",revision:null},{url:"/quasar-docs/js/74.23052e9b.js",revision:null},{url:"/quasar-docs/js/75.f039b28c.js",revision:null},{url:"/quasar-docs/js/76.121802d2.js",revision:null},{url:"/quasar-docs/js/77.2aacb972.js",revision:null},{url:"/quasar-docs/js/78.62471626.js",revision:null},{url:"/quasar-docs/js/79.5fb6944f.js",revision:null},{url:"/quasar-docs/js/8.f30e35fd.js",revision:null},{url:"/quasar-docs/js/80.efdd928b.js",revision:null},{url:"/quasar-docs/js/81.24ff0f65.js",revision:null},{url:"/quasar-docs/js/82.c89bf7be.js",revision:null},{url:"/quasar-docs/js/83.d280aabb.js",revision:null},{url:"/quasar-docs/js/84.bc4f5736.js",revision:null},{url:"/quasar-docs/js/85.79291673.js",revision:null},{url:"/quasar-docs/js/86.ff8ccef1.js",revision:null},{url:"/quasar-docs/js/87.6cff24e1.js",revision:null},{url:"/quasar-docs/js/88.fb54cd29.js",revision:null},{url:"/quasar-docs/js/89.4e8fb9d4.js",revision:null},{url:"/quasar-docs/js/9.65b8ff63.js",revision:null},{url:"/quasar-docs/js/90.cf4e249c.js",revision:null},{url:"/quasar-docs/js/91.77e66ce1.js",revision:null},{url:"/quasar-docs/js/92.a3a54c50.js",revision:null},{url:"/quasar-docs/js/93.45b77449.js",revision:null},{url:"/quasar-docs/js/94.63a22cf3.js",revision:null},{url:"/quasar-docs/js/95.8b5e8256.js",revision:null},{url:"/quasar-docs/js/96.bdbeb6da.js",revision:null},{url:"/quasar-docs/js/97.2a5608aa.js",revision:null},{url:"/quasar-docs/js/98.f0d0119b.js",revision:null},{url:"/quasar-docs/js/99.62191b17.js",revision:null},{url:"/quasar-docs/js/app.4b64276c.js",revision:null},{url:"/quasar-docs/js/demo-source.f5326517.js",revision:null},{url:"/quasar-docs/js/demo.00556dd7.js",revision:null},{url:"/quasar-docs/js/quasar-api.d4c55225.js",revision:null},{url:"/quasar-docs/js/vendor.2d8d67ca.js",revision:null},{url:"/quasar-docs/manifest.json",revision:"40ae8260585492c4e8abac407217657a"},{url:"/quasar-docs/search_manifest.xml",revision:"300aefa0a28b0c85164adf6ad5eaabd4"}],{}),s.cleanupOutdatedCaches(),s.registerRoute(new s.NavigationRoute(s.createHandlerBoundToURL("/quasar-docs/index.html"),{denylist:[/service-worker\.js$/,/workbox-(.)*\.js$/]})),s.registerRoute(/^https:\/\/cdn/,new s.StaleWhileRevalidate,"GET")}));
