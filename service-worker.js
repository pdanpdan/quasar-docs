if(!self.define){let s,r={};const u=(u,l)=>(u=new URL(u+".js",l).href,r[u]||new Promise((r=>{if("document"in self){const s=document.createElement("script");s.src=u,s.onload=r,document.head.appendChild(s)}else s=u,importScripts(u),r()})).then((()=>{let s=r[u];if(!s)throw new Error(`Module ${u} didn’t register its module`);return s})));self.define=(l,a)=>{const o=s||("document"in self?document.currentScript.src:"")||location.href;if(r[o])return;let n={};const i=s=>u(s,o),j={module:{uri:o},exports:n,require:i};r[o]=Promise.all(l.map((s=>j[s]||i(s)))).then((s=>(a(...s),n)))}}define(["./workbox-aceee4cb"],(function(s){"use strict";s.setCacheNameDetails({prefix:"quasar.dev-pdan"}),self.skipWaiting(),s.clientsClaim(),s.precacheAndRoute([{url:"/quasar-docs/css/10.6c4f751e.css",revision:null},{url:"/quasar-docs/css/11.cd1b576e.css",revision:null},{url:"/quasar-docs/css/12.ad911322.css",revision:null},{url:"/quasar-docs/css/13.a59a2242.css",revision:null},{url:"/quasar-docs/css/14.99064edf.css",revision:null},{url:"/quasar-docs/css/15.d85941d5.css",revision:null},{url:"/quasar-docs/css/16.fd03f1f1.css",revision:null},{url:"/quasar-docs/css/17.ad0a103b.css",revision:null},{url:"/quasar-docs/css/18.70a44e54.css",revision:null},{url:"/quasar-docs/css/19.107b614a.css",revision:null},{url:"/quasar-docs/css/20.64943849.css",revision:null},{url:"/quasar-docs/css/21.fe97eed3.css",revision:null},{url:"/quasar-docs/css/22.c8e0bfc6.css",revision:null},{url:"/quasar-docs/css/5.741c5712.css",revision:null},{url:"/quasar-docs/css/6.a3edad8d.css",revision:null},{url:"/quasar-docs/css/7.d2b53414.css",revision:null},{url:"/quasar-docs/css/8.fba8489e.css",revision:null},{url:"/quasar-docs/css/9.94695e1b.css",revision:null},{url:"/quasar-docs/css/app.675cca8c.css",revision:null},{url:"/quasar-docs/css/demo.3451127d.css",revision:null},{url:"/quasar-docs/fonts/KFOkCnqEu92Fr1MmgVxIIzQ.9391e6e2.woff",revision:null},{url:"/quasar-docs/fonts/KFOlCnqEu92Fr1MmEU9fBBc-.ddd11dab.woff",revision:null},{url:"/quasar-docs/fonts/KFOlCnqEu92Fr1MmSU5fBBc-.877b9231.woff",revision:null},{url:"/quasar-docs/fonts/KFOlCnqEu92Fr1MmWUlfBBc-.0344cc3c.woff",revision:null},{url:"/quasar-docs/fonts/KFOlCnqEu92Fr1MmYUtfBBc-.b555d228.woff",revision:null},{url:"/quasar-docs/fonts/KFOmCnqEu92Fr1Mu4mxM.9b78ea3b.woff",revision:null},{url:"/quasar-docs/fonts/flUhRq6tzZclQEJ-Vdg-IuiaDsNa.1dd1bb36.woff",revision:null},{url:"/quasar-docs/fonts/flUhRq6tzZclQEJ-Vdg-IuiaDsNcIhQ8tQ.f54bbe10.woff2",revision:null},{url:"/quasar-docs/index.html",revision:"9b50614811b32c99f654bccb96b807b0"},{url:"/quasar-docs/js/10.08613285.js",revision:null},{url:"/quasar-docs/js/100.fa192426.js",revision:null},{url:"/quasar-docs/js/101.21a0cc5c.js",revision:null},{url:"/quasar-docs/js/102.4a956d4e.js",revision:null},{url:"/quasar-docs/js/103.e19145eb.js",revision:null},{url:"/quasar-docs/js/104.0553a4cb.js",revision:null},{url:"/quasar-docs/js/105.532c9ef6.js",revision:null},{url:"/quasar-docs/js/106.0bb26faa.js",revision:null},{url:"/quasar-docs/js/107.8263c4fd.js",revision:null},{url:"/quasar-docs/js/108.a3d70e0a.js",revision:null},{url:"/quasar-docs/js/109.2de8cf3c.js",revision:null},{url:"/quasar-docs/js/11.94b44b33.js",revision:null},{url:"/quasar-docs/js/110.aa70520e.js",revision:null},{url:"/quasar-docs/js/111.f96fb955.js",revision:null},{url:"/quasar-docs/js/112.6f2289c5.js",revision:null},{url:"/quasar-docs/js/113.0fc1582c.js",revision:null},{url:"/quasar-docs/js/114.ea899631.js",revision:null},{url:"/quasar-docs/js/115.a07740b9.js",revision:null},{url:"/quasar-docs/js/116.018d8fe0.js",revision:null},{url:"/quasar-docs/js/117.0d775574.js",revision:null},{url:"/quasar-docs/js/118.8e76f5f7.js",revision:null},{url:"/quasar-docs/js/119.f590c1a3.js",revision:null},{url:"/quasar-docs/js/12.ebf3065e.js",revision:null},{url:"/quasar-docs/js/120.ac13ea16.js",revision:null},{url:"/quasar-docs/js/121.b60a4a14.js",revision:null},{url:"/quasar-docs/js/122.22047dd3.js",revision:null},{url:"/quasar-docs/js/123.b90153ec.js",revision:null},{url:"/quasar-docs/js/124.3b51dcf9.js",revision:null},{url:"/quasar-docs/js/125.92b9a13d.js",revision:null},{url:"/quasar-docs/js/126.b8cb1913.js",revision:null},{url:"/quasar-docs/js/127.7fe86c2c.js",revision:null},{url:"/quasar-docs/js/128.decb72e2.js",revision:null},{url:"/quasar-docs/js/129.6a443e34.js",revision:null},{url:"/quasar-docs/js/13.f859735f.js",revision:null},{url:"/quasar-docs/js/130.509c12b9.js",revision:null},{url:"/quasar-docs/js/131.da7e7a14.js",revision:null},{url:"/quasar-docs/js/132.88cb0f98.js",revision:null},{url:"/quasar-docs/js/133.c54ed081.js",revision:null},{url:"/quasar-docs/js/134.4f9b6a7f.js",revision:null},{url:"/quasar-docs/js/135.5cac8e05.js",revision:null},{url:"/quasar-docs/js/136.629a8b8c.js",revision:null},{url:"/quasar-docs/js/137.75dd1265.js",revision:null},{url:"/quasar-docs/js/138.4455fc5f.js",revision:null},{url:"/quasar-docs/js/139.21e94357.js",revision:null},{url:"/quasar-docs/js/14.92b07c76.js",revision:null},{url:"/quasar-docs/js/140.bdcaf442.js",revision:null},{url:"/quasar-docs/js/141.a51ec429.js",revision:null},{url:"/quasar-docs/js/142.3f39eea6.js",revision:null},{url:"/quasar-docs/js/143.f199e8a3.js",revision:null},{url:"/quasar-docs/js/144.3fecfff2.js",revision:null},{url:"/quasar-docs/js/145.b1b44aca.js",revision:null},{url:"/quasar-docs/js/146.e207428d.js",revision:null},{url:"/quasar-docs/js/147.aff7b06a.js",revision:null},{url:"/quasar-docs/js/148.c4d1732b.js",revision:null},{url:"/quasar-docs/js/149.d30b8011.js",revision:null},{url:"/quasar-docs/js/15.48e0dbde.js",revision:null},{url:"/quasar-docs/js/150.256cd2d2.js",revision:null},{url:"/quasar-docs/js/151.00bf0ccb.js",revision:null},{url:"/quasar-docs/js/152.47ae5e22.js",revision:null},{url:"/quasar-docs/js/153.218a4c2c.js",revision:null},{url:"/quasar-docs/js/154.6ba1a383.js",revision:null},{url:"/quasar-docs/js/155.1511c6cc.js",revision:null},{url:"/quasar-docs/js/156.94012a58.js",revision:null},{url:"/quasar-docs/js/157.dceb93ea.js",revision:null},{url:"/quasar-docs/js/158.5b02dae4.js",revision:null},{url:"/quasar-docs/js/159.9710f105.js",revision:null},{url:"/quasar-docs/js/16.c53a4a09.js",revision:null},{url:"/quasar-docs/js/160.65a8c83a.js",revision:null},{url:"/quasar-docs/js/161.1ce008b0.js",revision:null},{url:"/quasar-docs/js/162.31db1e8f.js",revision:null},{url:"/quasar-docs/js/163.647208a9.js",revision:null},{url:"/quasar-docs/js/164.a0526826.js",revision:null},{url:"/quasar-docs/js/165.b40b3970.js",revision:null},{url:"/quasar-docs/js/166.3f85aedd.js",revision:null},{url:"/quasar-docs/js/167.10671ce8.js",revision:null},{url:"/quasar-docs/js/168.177a69d5.js",revision:null},{url:"/quasar-docs/js/169.52388b06.js",revision:null},{url:"/quasar-docs/js/17.26d33d04.js",revision:null},{url:"/quasar-docs/js/170.efe04b06.js",revision:null},{url:"/quasar-docs/js/171.7bfaafd8.js",revision:null},{url:"/quasar-docs/js/172.32bead4e.js",revision:null},{url:"/quasar-docs/js/173.2765c3c3.js",revision:null},{url:"/quasar-docs/js/174.aaabd82c.js",revision:null},{url:"/quasar-docs/js/175.67aefbf3.js",revision:null},{url:"/quasar-docs/js/176.dd5ad182.js",revision:null},{url:"/quasar-docs/js/177.a41235c8.js",revision:null},{url:"/quasar-docs/js/178.7d2fddc6.js",revision:null},{url:"/quasar-docs/js/179.73d6e884.js",revision:null},{url:"/quasar-docs/js/18.1398f6df.js",revision:null},{url:"/quasar-docs/js/180.41803ce7.js",revision:null},{url:"/quasar-docs/js/181.1d7b4d08.js",revision:null},{url:"/quasar-docs/js/182.29fdf98c.js",revision:null},{url:"/quasar-docs/js/183.9fe16600.js",revision:null},{url:"/quasar-docs/js/184.08683d67.js",revision:null},{url:"/quasar-docs/js/185.f467e550.js",revision:null},{url:"/quasar-docs/js/186.e3eadac9.js",revision:null},{url:"/quasar-docs/js/187.09512f91.js",revision:null},{url:"/quasar-docs/js/188.002c78cf.js",revision:null},{url:"/quasar-docs/js/189.616a9577.js",revision:null},{url:"/quasar-docs/js/19.e4ccaed8.js",revision:null},{url:"/quasar-docs/js/190.5b106dff.js",revision:null},{url:"/quasar-docs/js/191.1b7a6dab.js",revision:null},{url:"/quasar-docs/js/192.5ca2690f.js",revision:null},{url:"/quasar-docs/js/193.a0d2ccb1.js",revision:null},{url:"/quasar-docs/js/194.21edb5bc.js",revision:null},{url:"/quasar-docs/js/195.8094a816.js",revision:null},{url:"/quasar-docs/js/196.ea37f856.js",revision:null},{url:"/quasar-docs/js/197.9e3c6461.js",revision:null},{url:"/quasar-docs/js/198.89a38dbb.js",revision:null},{url:"/quasar-docs/js/199.71526cda.js",revision:null},{url:"/quasar-docs/js/20.8c2acf1f.js",revision:null},{url:"/quasar-docs/js/200.89a5f3f7.js",revision:null},{url:"/quasar-docs/js/201.847a9cfc.js",revision:null},{url:"/quasar-docs/js/202.a078a5fe.js",revision:null},{url:"/quasar-docs/js/203.dab084ff.js",revision:null},{url:"/quasar-docs/js/204.5177b358.js",revision:null},{url:"/quasar-docs/js/205.225845b1.js",revision:null},{url:"/quasar-docs/js/206.408a2843.js",revision:null},{url:"/quasar-docs/js/207.d588ad42.js",revision:null},{url:"/quasar-docs/js/208.70f4ac56.js",revision:null},{url:"/quasar-docs/js/209.323fb593.js",revision:null},{url:"/quasar-docs/js/21.46045a95.js",revision:null},{url:"/quasar-docs/js/210.8fc2f5d6.js",revision:null},{url:"/quasar-docs/js/211.bcef7d00.js",revision:null},{url:"/quasar-docs/js/212.ee3da858.js",revision:null},{url:"/quasar-docs/js/213.b95c696d.js",revision:null},{url:"/quasar-docs/js/214.60eacfa2.js",revision:null},{url:"/quasar-docs/js/215.4d376be7.js",revision:null},{url:"/quasar-docs/js/216.ae5fa406.js",revision:null},{url:"/quasar-docs/js/217.a4bec4b3.js",revision:null},{url:"/quasar-docs/js/218.52a02566.js",revision:null},{url:"/quasar-docs/js/219.e340eb0d.js",revision:null},{url:"/quasar-docs/js/22.d4531180.js",revision:null},{url:"/quasar-docs/js/220.f033635c.js",revision:null},{url:"/quasar-docs/js/221.a89b25f4.js",revision:null},{url:"/quasar-docs/js/222.29748d25.js",revision:null},{url:"/quasar-docs/js/223.a0aa04e7.js",revision:null},{url:"/quasar-docs/js/224.abb5b75b.js",revision:null},{url:"/quasar-docs/js/225.0c9360a0.js",revision:null},{url:"/quasar-docs/js/226.cf55dabe.js",revision:null},{url:"/quasar-docs/js/227.cbbeb483.js",revision:null},{url:"/quasar-docs/js/228.cf3d3aeb.js",revision:null},{url:"/quasar-docs/js/229.b70fc872.js",revision:null},{url:"/quasar-docs/js/23.a066c10f.js",revision:null},{url:"/quasar-docs/js/230.352c8aaf.js",revision:null},{url:"/quasar-docs/js/231.21e72bc6.js",revision:null},{url:"/quasar-docs/js/232.75ed7b24.js",revision:null},{url:"/quasar-docs/js/233.2442f658.js",revision:null},{url:"/quasar-docs/js/234.895a9e57.js",revision:null},{url:"/quasar-docs/js/235.f42d8f4b.js",revision:null},{url:"/quasar-docs/js/236.12168bf0.js",revision:null},{url:"/quasar-docs/js/237.5d1886ef.js",revision:null},{url:"/quasar-docs/js/238.07d122d8.js",revision:null},{url:"/quasar-docs/js/239.b14469a4.js",revision:null},{url:"/quasar-docs/js/24.4a8bdd78.js",revision:null},{url:"/quasar-docs/js/240.9b68f290.js",revision:null},{url:"/quasar-docs/js/241.324de9f1.js",revision:null},{url:"/quasar-docs/js/242.ba1e3e05.js",revision:null},{url:"/quasar-docs/js/243.060e9cba.js",revision:null},{url:"/quasar-docs/js/244.6f518c03.js",revision:null},{url:"/quasar-docs/js/245.6d089bba.js",revision:null},{url:"/quasar-docs/js/246.219825ad.js",revision:null},{url:"/quasar-docs/js/247.9b35fe4f.js",revision:null},{url:"/quasar-docs/js/248.7f4858ec.js",revision:null},{url:"/quasar-docs/js/249.d7805bca.js",revision:null},{url:"/quasar-docs/js/25.d041e22e.js",revision:null},{url:"/quasar-docs/js/250.eb9c9141.js",revision:null},{url:"/quasar-docs/js/251.f1bc3443.js",revision:null},{url:"/quasar-docs/js/252.769ce0fe.js",revision:null},{url:"/quasar-docs/js/253.b974aae4.js",revision:null},{url:"/quasar-docs/js/254.f3efeda0.js",revision:null},{url:"/quasar-docs/js/255.a0aad8a3.js",revision:null},{url:"/quasar-docs/js/256.f9aaa81c.js",revision:null},{url:"/quasar-docs/js/257.d8a20e10.js",revision:null},{url:"/quasar-docs/js/258.d96bb0c2.js",revision:null},{url:"/quasar-docs/js/259.ea6bf7cd.js",revision:null},{url:"/quasar-docs/js/26.a40340f6.js",revision:null},{url:"/quasar-docs/js/260.38c3b33e.js",revision:null},{url:"/quasar-docs/js/261.b9c77788.js",revision:null},{url:"/quasar-docs/js/262.8586113c.js",revision:null},{url:"/quasar-docs/js/263.02d0ff39.js",revision:null},{url:"/quasar-docs/js/264.999545f0.js",revision:null},{url:"/quasar-docs/js/265.0381b1c6.js",revision:null},{url:"/quasar-docs/js/266.74c0d31a.js",revision:null},{url:"/quasar-docs/js/267.6499df87.js",revision:null},{url:"/quasar-docs/js/268.15e600fd.js",revision:null},{url:"/quasar-docs/js/269.c52c83d9.js",revision:null},{url:"/quasar-docs/js/27.3de90db8.js",revision:null},{url:"/quasar-docs/js/270.6600d660.js",revision:null},{url:"/quasar-docs/js/271.24b9b6ca.js",revision:null},{url:"/quasar-docs/js/272.62bc188b.js",revision:null},{url:"/quasar-docs/js/273.6b9fabd3.js",revision:null},{url:"/quasar-docs/js/274.7225cb53.js",revision:null},{url:"/quasar-docs/js/275.7f435504.js",revision:null},{url:"/quasar-docs/js/276.2f199373.js",revision:null},{url:"/quasar-docs/js/277.f15bb2ef.js",revision:null},{url:"/quasar-docs/js/278.f79bd9e4.js",revision:null},{url:"/quasar-docs/js/279.c64a59d1.js",revision:null},{url:"/quasar-docs/js/28.4bac6d86.js",revision:null},{url:"/quasar-docs/js/280.82686ff9.js",revision:null},{url:"/quasar-docs/js/281.1a91f165.js",revision:null},{url:"/quasar-docs/js/282.eb18be6b.js",revision:null},{url:"/quasar-docs/js/283.ff29954b.js",revision:null},{url:"/quasar-docs/js/284.c486ffd8.js",revision:null},{url:"/quasar-docs/js/285.2a2fda40.js",revision:null},{url:"/quasar-docs/js/286.aea0852a.js",revision:null},{url:"/quasar-docs/js/287.975990e1.js",revision:null},{url:"/quasar-docs/js/288.5ce4a801.js",revision:null},{url:"/quasar-docs/js/289.fc38b3b9.js",revision:null},{url:"/quasar-docs/js/29.b34e1fdb.js",revision:null},{url:"/quasar-docs/js/290.5cb50237.js",revision:null},{url:"/quasar-docs/js/291.c83afed4.js",revision:null},{url:"/quasar-docs/js/30.718bce46.js",revision:null},{url:"/quasar-docs/js/31.7ad2ae66.js",revision:null},{url:"/quasar-docs/js/32.9d51a81d.js",revision:null},{url:"/quasar-docs/js/33.602e883c.js",revision:null},{url:"/quasar-docs/js/34.5d48f144.js",revision:null},{url:"/quasar-docs/js/35.fc5faa92.js",revision:null},{url:"/quasar-docs/js/36.66696319.js",revision:null},{url:"/quasar-docs/js/37.1cec94be.js",revision:null},{url:"/quasar-docs/js/38.0693ae9d.js",revision:null},{url:"/quasar-docs/js/39.189ab155.js",revision:null},{url:"/quasar-docs/js/40.1cd3da7a.js",revision:null},{url:"/quasar-docs/js/41.610817f7.js",revision:null},{url:"/quasar-docs/js/42.59e54ef2.js",revision:null},{url:"/quasar-docs/js/43.a8302dcb.js",revision:null},{url:"/quasar-docs/js/44.2d1a9b97.js",revision:null},{url:"/quasar-docs/js/45.f154709c.js",revision:null},{url:"/quasar-docs/js/46.6dfb27dd.js",revision:null},{url:"/quasar-docs/js/47.246b27bc.js",revision:null},{url:"/quasar-docs/js/48.a99ee3dc.js",revision:null},{url:"/quasar-docs/js/49.8e52ae20.js",revision:null},{url:"/quasar-docs/js/5.1a80d955.js",revision:null},{url:"/quasar-docs/js/50.0e722f17.js",revision:null},{url:"/quasar-docs/js/51.4d95d45c.js",revision:null},{url:"/quasar-docs/js/52.e8d27a84.js",revision:null},{url:"/quasar-docs/js/53.0f9a5e90.js",revision:null},{url:"/quasar-docs/js/54.fe3e8ca9.js",revision:null},{url:"/quasar-docs/js/55.677548c0.js",revision:null},{url:"/quasar-docs/js/56.79c6c6a5.js",revision:null},{url:"/quasar-docs/js/57.39b82b33.js",revision:null},{url:"/quasar-docs/js/58.f7f7d871.js",revision:null},{url:"/quasar-docs/js/59.63272d2f.js",revision:null},{url:"/quasar-docs/js/6.e424a369.js",revision:null},{url:"/quasar-docs/js/60.578aeadc.js",revision:null},{url:"/quasar-docs/js/61.004f1d78.js",revision:null},{url:"/quasar-docs/js/62.bcbe7049.js",revision:null},{url:"/quasar-docs/js/63.b2f945e0.js",revision:null},{url:"/quasar-docs/js/64.d5b7c454.js",revision:null},{url:"/quasar-docs/js/65.36169eb2.js",revision:null},{url:"/quasar-docs/js/66.f892a828.js",revision:null},{url:"/quasar-docs/js/67.39a7f3cb.js",revision:null},{url:"/quasar-docs/js/68.9d3dba93.js",revision:null},{url:"/quasar-docs/js/69.9c8f79a6.js",revision:null},{url:"/quasar-docs/js/7.85c7396a.js",revision:null},{url:"/quasar-docs/js/70.523c211b.js",revision:null},{url:"/quasar-docs/js/71.075d3bab.js",revision:null},{url:"/quasar-docs/js/72.d9f4d930.js",revision:null},{url:"/quasar-docs/js/73.8c47a2a5.js",revision:null},{url:"/quasar-docs/js/74.91b047ee.js",revision:null},{url:"/quasar-docs/js/75.71e958ff.js",revision:null},{url:"/quasar-docs/js/76.f7502415.js",revision:null},{url:"/quasar-docs/js/77.9180df62.js",revision:null},{url:"/quasar-docs/js/78.da185563.js",revision:null},{url:"/quasar-docs/js/79.f6788ee9.js",revision:null},{url:"/quasar-docs/js/8.8afbb254.js",revision:null},{url:"/quasar-docs/js/80.1a6592be.js",revision:null},{url:"/quasar-docs/js/81.99eb196d.js",revision:null},{url:"/quasar-docs/js/82.69cd98aa.js",revision:null},{url:"/quasar-docs/js/83.5eb25b22.js",revision:null},{url:"/quasar-docs/js/84.d3331c0a.js",revision:null},{url:"/quasar-docs/js/85.d7fe2912.js",revision:null},{url:"/quasar-docs/js/86.0690b738.js",revision:null},{url:"/quasar-docs/js/87.02b80380.js",revision:null},{url:"/quasar-docs/js/88.45a317a3.js",revision:null},{url:"/quasar-docs/js/89.fcd58e9f.js",revision:null},{url:"/quasar-docs/js/9.c24d7da9.js",revision:null},{url:"/quasar-docs/js/90.72a51cf0.js",revision:null},{url:"/quasar-docs/js/91.da7099fd.js",revision:null},{url:"/quasar-docs/js/92.b7bc6fba.js",revision:null},{url:"/quasar-docs/js/93.c2e46e97.js",revision:null},{url:"/quasar-docs/js/94.bc0616fd.js",revision:null},{url:"/quasar-docs/js/95.3de2bdc4.js",revision:null},{url:"/quasar-docs/js/96.d3abe76d.js",revision:null},{url:"/quasar-docs/js/97.0fafbaf4.js",revision:null},{url:"/quasar-docs/js/98.3ae7ba27.js",revision:null},{url:"/quasar-docs/js/99.54b3ab3c.js",revision:null},{url:"/quasar-docs/js/app.2dc288df.js",revision:null},{url:"/quasar-docs/js/demo-source.df05cd48.js",revision:null},{url:"/quasar-docs/js/demo.800bd2fa.js",revision:null},{url:"/quasar-docs/js/quasar-api.aa7aab2c.js",revision:null},{url:"/quasar-docs/js/vendor.fc198b98.js",revision:null},{url:"/quasar-docs/manifest.json",revision:"40ae8260585492c4e8abac407217657a"},{url:"/quasar-docs/search_manifest.xml",revision:"300aefa0a28b0c85164adf6ad5eaabd4"}],{}),s.cleanupOutdatedCaches(),s.registerRoute(new s.NavigationRoute(s.createHandlerBoundToURL("/quasar-docs/index.html"),{denylist:[/service-worker\.js$/,/workbox-(.)*\.js$/]})),s.registerRoute(/^https:\/\/cdn/,new s.StaleWhileRevalidate,"GET")}));
