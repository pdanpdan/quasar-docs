if(!self.define){let s,r={};const u=(u,l)=>(u=new URL(u+".js",l).href,r[u]||new Promise((r=>{if("document"in self){const s=document.createElement("script");s.src=u,s.onload=r,document.head.appendChild(s)}else s=u,importScripts(u),r()})).then((()=>{let s=r[u];if(!s)throw new Error(`Module ${u} didn’t register its module`);return s})));self.define=(l,a)=>{const o=s||("document"in self?document.currentScript.src:"")||location.href;if(r[o])return;let n={};const i=s=>u(s,o),j={module:{uri:o},exports:n,require:i};r[o]=Promise.all(l.map((s=>j[s]||i(s)))).then((s=>(a(...s),n)))}}define(["./workbox-69ae0d42"],(function(s){"use strict";s.setCacheNameDetails({prefix:"quasar.dev-pdan"}),self.skipWaiting(),s.clientsClaim(),s.precacheAndRoute([{url:"/quasar-docs/css/10.6c4f751e.css",revision:null},{url:"/quasar-docs/css/11.cd1b576e.css",revision:null},{url:"/quasar-docs/css/12.ad911322.css",revision:null},{url:"/quasar-docs/css/13.a59a2242.css",revision:null},{url:"/quasar-docs/css/14.99064edf.css",revision:null},{url:"/quasar-docs/css/15.d85941d5.css",revision:null},{url:"/quasar-docs/css/16.fd03f1f1.css",revision:null},{url:"/quasar-docs/css/17.ad0a103b.css",revision:null},{url:"/quasar-docs/css/18.70a44e54.css",revision:null},{url:"/quasar-docs/css/19.107b614a.css",revision:null},{url:"/quasar-docs/css/20.64943849.css",revision:null},{url:"/quasar-docs/css/21.fe97eed3.css",revision:null},{url:"/quasar-docs/css/22.c8e0bfc6.css",revision:null},{url:"/quasar-docs/css/5.741c5712.css",revision:null},{url:"/quasar-docs/css/6.a3edad8d.css",revision:null},{url:"/quasar-docs/css/7.d2b53414.css",revision:null},{url:"/quasar-docs/css/8.8f794845.css",revision:null},{url:"/quasar-docs/css/9.94695e1b.css",revision:null},{url:"/quasar-docs/css/app.d2a8b724.css",revision:null},{url:"/quasar-docs/css/demo.895d35f3.css",revision:null},{url:"/quasar-docs/fonts/KFOkCnqEu92Fr1MmgVxIIzQ.9391e6e2.woff",revision:null},{url:"/quasar-docs/fonts/KFOlCnqEu92Fr1MmEU9fBBc-.ddd11dab.woff",revision:null},{url:"/quasar-docs/fonts/KFOlCnqEu92Fr1MmSU5fBBc-.877b9231.woff",revision:null},{url:"/quasar-docs/fonts/KFOlCnqEu92Fr1MmWUlfBBc-.0344cc3c.woff",revision:null},{url:"/quasar-docs/fonts/KFOlCnqEu92Fr1MmYUtfBBc-.b555d228.woff",revision:null},{url:"/quasar-docs/fonts/KFOmCnqEu92Fr1Mu4mxM.9b78ea3b.woff",revision:null},{url:"/quasar-docs/fonts/flUhRq6tzZclQEJ-Vdg-IuiaDsNa.824b570f.woff",revision:null},{url:"/quasar-docs/fonts/flUhRq6tzZclQEJ-Vdg-IuiaDsNcIhQ8tQ.97b9b185.woff2",revision:null},{url:"/quasar-docs/index.html",revision:"7fd0c3b1aab199b3b74b59d8ebbca830"},{url:"/quasar-docs/js/10.f7c87e0e.js",revision:null},{url:"/quasar-docs/js/100.62fb81cd.js",revision:null},{url:"/quasar-docs/js/101.7755ec58.js",revision:null},{url:"/quasar-docs/js/102.43d82414.js",revision:null},{url:"/quasar-docs/js/103.b951e8f5.js",revision:null},{url:"/quasar-docs/js/104.4a66f3f6.js",revision:null},{url:"/quasar-docs/js/105.4457ed72.js",revision:null},{url:"/quasar-docs/js/106.173e18ae.js",revision:null},{url:"/quasar-docs/js/107.3ccb5e4f.js",revision:null},{url:"/quasar-docs/js/108.19e8062d.js",revision:null},{url:"/quasar-docs/js/109.c9d8c44d.js",revision:null},{url:"/quasar-docs/js/11.a698b011.js",revision:null},{url:"/quasar-docs/js/110.667c1c79.js",revision:null},{url:"/quasar-docs/js/111.1952958b.js",revision:null},{url:"/quasar-docs/js/112.4a8a19f4.js",revision:null},{url:"/quasar-docs/js/113.4bf0561f.js",revision:null},{url:"/quasar-docs/js/114.da0a91a9.js",revision:null},{url:"/quasar-docs/js/115.4b2a7530.js",revision:null},{url:"/quasar-docs/js/116.5b330438.js",revision:null},{url:"/quasar-docs/js/117.730b80f8.js",revision:null},{url:"/quasar-docs/js/118.c6147498.js",revision:null},{url:"/quasar-docs/js/119.a9da899b.js",revision:null},{url:"/quasar-docs/js/12.89489087.js",revision:null},{url:"/quasar-docs/js/120.09c192b5.js",revision:null},{url:"/quasar-docs/js/121.85ab954f.js",revision:null},{url:"/quasar-docs/js/122.3edacdfb.js",revision:null},{url:"/quasar-docs/js/123.e522c218.js",revision:null},{url:"/quasar-docs/js/124.a23dd8c3.js",revision:null},{url:"/quasar-docs/js/125.c342c3c4.js",revision:null},{url:"/quasar-docs/js/126.fd7eddcc.js",revision:null},{url:"/quasar-docs/js/127.d97856fe.js",revision:null},{url:"/quasar-docs/js/128.79815812.js",revision:null},{url:"/quasar-docs/js/129.08feefc6.js",revision:null},{url:"/quasar-docs/js/13.1a10bb0c.js",revision:null},{url:"/quasar-docs/js/130.53e251d5.js",revision:null},{url:"/quasar-docs/js/131.25857701.js",revision:null},{url:"/quasar-docs/js/132.d67a710b.js",revision:null},{url:"/quasar-docs/js/133.c4b894d6.js",revision:null},{url:"/quasar-docs/js/134.1c956edf.js",revision:null},{url:"/quasar-docs/js/135.8759ee50.js",revision:null},{url:"/quasar-docs/js/136.d3916de9.js",revision:null},{url:"/quasar-docs/js/137.a18606ea.js",revision:null},{url:"/quasar-docs/js/138.9cf96b14.js",revision:null},{url:"/quasar-docs/js/139.da5d45d3.js",revision:null},{url:"/quasar-docs/js/14.291c1fa6.js",revision:null},{url:"/quasar-docs/js/140.46261c94.js",revision:null},{url:"/quasar-docs/js/141.21a4beef.js",revision:null},{url:"/quasar-docs/js/142.eba21f17.js",revision:null},{url:"/quasar-docs/js/143.d4a01bed.js",revision:null},{url:"/quasar-docs/js/144.b4b04910.js",revision:null},{url:"/quasar-docs/js/145.c92405a1.js",revision:null},{url:"/quasar-docs/js/146.6db93121.js",revision:null},{url:"/quasar-docs/js/147.ca5272fd.js",revision:null},{url:"/quasar-docs/js/148.1c42e4ff.js",revision:null},{url:"/quasar-docs/js/149.af36773d.js",revision:null},{url:"/quasar-docs/js/15.9e066e8c.js",revision:null},{url:"/quasar-docs/js/150.bef2ed52.js",revision:null},{url:"/quasar-docs/js/151.59ebd659.js",revision:null},{url:"/quasar-docs/js/152.9e4a4daa.js",revision:null},{url:"/quasar-docs/js/153.dce9d9bb.js",revision:null},{url:"/quasar-docs/js/154.f3ef2d36.js",revision:null},{url:"/quasar-docs/js/155.0c5448af.js",revision:null},{url:"/quasar-docs/js/156.8bfe2c35.js",revision:null},{url:"/quasar-docs/js/157.dc8f512a.js",revision:null},{url:"/quasar-docs/js/158.a768aca0.js",revision:null},{url:"/quasar-docs/js/159.3cfc640b.js",revision:null},{url:"/quasar-docs/js/16.979584fa.js",revision:null},{url:"/quasar-docs/js/160.5689f4c4.js",revision:null},{url:"/quasar-docs/js/161.1fece965.js",revision:null},{url:"/quasar-docs/js/162.8f32518a.js",revision:null},{url:"/quasar-docs/js/163.ccb3c988.js",revision:null},{url:"/quasar-docs/js/164.dcf4a043.js",revision:null},{url:"/quasar-docs/js/165.5258a840.js",revision:null},{url:"/quasar-docs/js/166.dd7bfee0.js",revision:null},{url:"/quasar-docs/js/167.5f8e0476.js",revision:null},{url:"/quasar-docs/js/168.d5749add.js",revision:null},{url:"/quasar-docs/js/169.cea02f81.js",revision:null},{url:"/quasar-docs/js/17.4a33b4c8.js",revision:null},{url:"/quasar-docs/js/170.393aab32.js",revision:null},{url:"/quasar-docs/js/171.082213f1.js",revision:null},{url:"/quasar-docs/js/172.6131a044.js",revision:null},{url:"/quasar-docs/js/173.fd4a441b.js",revision:null},{url:"/quasar-docs/js/174.9924807d.js",revision:null},{url:"/quasar-docs/js/175.8294551c.js",revision:null},{url:"/quasar-docs/js/176.5db2e508.js",revision:null},{url:"/quasar-docs/js/177.5b3a2f46.js",revision:null},{url:"/quasar-docs/js/178.aeb99860.js",revision:null},{url:"/quasar-docs/js/179.1bd23c57.js",revision:null},{url:"/quasar-docs/js/18.87b8775a.js",revision:null},{url:"/quasar-docs/js/180.9a4bc8a3.js",revision:null},{url:"/quasar-docs/js/181.947c5b15.js",revision:null},{url:"/quasar-docs/js/182.204581f8.js",revision:null},{url:"/quasar-docs/js/183.ad8a0cc6.js",revision:null},{url:"/quasar-docs/js/184.b651ea1b.js",revision:null},{url:"/quasar-docs/js/185.7481d3bf.js",revision:null},{url:"/quasar-docs/js/186.7fe18706.js",revision:null},{url:"/quasar-docs/js/187.090f0f23.js",revision:null},{url:"/quasar-docs/js/188.40af0b66.js",revision:null},{url:"/quasar-docs/js/189.c9bcd8c7.js",revision:null},{url:"/quasar-docs/js/19.51d2459f.js",revision:null},{url:"/quasar-docs/js/190.fb8862fc.js",revision:null},{url:"/quasar-docs/js/191.2f94ceb3.js",revision:null},{url:"/quasar-docs/js/192.6364a983.js",revision:null},{url:"/quasar-docs/js/193.172504c5.js",revision:null},{url:"/quasar-docs/js/194.6bf0921b.js",revision:null},{url:"/quasar-docs/js/195.3b7ea225.js",revision:null},{url:"/quasar-docs/js/196.a53c5e99.js",revision:null},{url:"/quasar-docs/js/197.e1db6d1c.js",revision:null},{url:"/quasar-docs/js/198.d5c98c6b.js",revision:null},{url:"/quasar-docs/js/199.94282c11.js",revision:null},{url:"/quasar-docs/js/20.6f82fc69.js",revision:null},{url:"/quasar-docs/js/200.51e0b4db.js",revision:null},{url:"/quasar-docs/js/201.5cd50fcb.js",revision:null},{url:"/quasar-docs/js/202.843d0fbe.js",revision:null},{url:"/quasar-docs/js/203.7eb4e490.js",revision:null},{url:"/quasar-docs/js/204.f6484bcd.js",revision:null},{url:"/quasar-docs/js/205.7ec812e8.js",revision:null},{url:"/quasar-docs/js/206.13f6bde6.js",revision:null},{url:"/quasar-docs/js/207.9d82dc78.js",revision:null},{url:"/quasar-docs/js/208.5a8c72e4.js",revision:null},{url:"/quasar-docs/js/209.8acdfe65.js",revision:null},{url:"/quasar-docs/js/21.9c375ac2.js",revision:null},{url:"/quasar-docs/js/210.df72fa08.js",revision:null},{url:"/quasar-docs/js/211.49734cc1.js",revision:null},{url:"/quasar-docs/js/212.efc4bec9.js",revision:null},{url:"/quasar-docs/js/213.7d88907b.js",revision:null},{url:"/quasar-docs/js/214.45e57bab.js",revision:null},{url:"/quasar-docs/js/215.b7881564.js",revision:null},{url:"/quasar-docs/js/216.f7aef17c.js",revision:null},{url:"/quasar-docs/js/217.3f483c7d.js",revision:null},{url:"/quasar-docs/js/218.20c17942.js",revision:null},{url:"/quasar-docs/js/219.f9c829bd.js",revision:null},{url:"/quasar-docs/js/22.2c8d6007.js",revision:null},{url:"/quasar-docs/js/220.7f0e6bc5.js",revision:null},{url:"/quasar-docs/js/221.56b1a277.js",revision:null},{url:"/quasar-docs/js/222.5abeff7f.js",revision:null},{url:"/quasar-docs/js/223.c77498de.js",revision:null},{url:"/quasar-docs/js/224.481e46b3.js",revision:null},{url:"/quasar-docs/js/225.98655786.js",revision:null},{url:"/quasar-docs/js/226.3eac9c30.js",revision:null},{url:"/quasar-docs/js/227.40bf639a.js",revision:null},{url:"/quasar-docs/js/228.5d0bd039.js",revision:null},{url:"/quasar-docs/js/229.44adf224.js",revision:null},{url:"/quasar-docs/js/23.56bbe2a5.js",revision:null},{url:"/quasar-docs/js/230.e009b56e.js",revision:null},{url:"/quasar-docs/js/231.0440fc6a.js",revision:null},{url:"/quasar-docs/js/232.e99bf470.js",revision:null},{url:"/quasar-docs/js/233.6bafe84a.js",revision:null},{url:"/quasar-docs/js/234.96ea2b9e.js",revision:null},{url:"/quasar-docs/js/235.962fd118.js",revision:null},{url:"/quasar-docs/js/236.86ddefb6.js",revision:null},{url:"/quasar-docs/js/237.d9bcee12.js",revision:null},{url:"/quasar-docs/js/238.bd1ba8cf.js",revision:null},{url:"/quasar-docs/js/239.0943cdb1.js",revision:null},{url:"/quasar-docs/js/24.48a3566b.js",revision:null},{url:"/quasar-docs/js/240.832309fb.js",revision:null},{url:"/quasar-docs/js/241.39790f4c.js",revision:null},{url:"/quasar-docs/js/242.ef29a55f.js",revision:null},{url:"/quasar-docs/js/243.804e2d3c.js",revision:null},{url:"/quasar-docs/js/244.2fabadaf.js",revision:null},{url:"/quasar-docs/js/245.e4e73602.js",revision:null},{url:"/quasar-docs/js/246.1c9f3fe9.js",revision:null},{url:"/quasar-docs/js/247.e7fba7b2.js",revision:null},{url:"/quasar-docs/js/248.fb6b23b7.js",revision:null},{url:"/quasar-docs/js/249.f2cbb3f6.js",revision:null},{url:"/quasar-docs/js/25.4acc53e2.js",revision:null},{url:"/quasar-docs/js/250.ed287661.js",revision:null},{url:"/quasar-docs/js/251.acbadb0a.js",revision:null},{url:"/quasar-docs/js/252.fe697f73.js",revision:null},{url:"/quasar-docs/js/253.e2b690e0.js",revision:null},{url:"/quasar-docs/js/254.124ef4ed.js",revision:null},{url:"/quasar-docs/js/255.cbab8202.js",revision:null},{url:"/quasar-docs/js/256.9a3be355.js",revision:null},{url:"/quasar-docs/js/257.cddd11c8.js",revision:null},{url:"/quasar-docs/js/258.8f827021.js",revision:null},{url:"/quasar-docs/js/259.dc4d84fe.js",revision:null},{url:"/quasar-docs/js/26.5121398b.js",revision:null},{url:"/quasar-docs/js/260.644b3e65.js",revision:null},{url:"/quasar-docs/js/261.fb713c02.js",revision:null},{url:"/quasar-docs/js/262.2aa96b38.js",revision:null},{url:"/quasar-docs/js/263.11f27bb4.js",revision:null},{url:"/quasar-docs/js/264.016d4c8a.js",revision:null},{url:"/quasar-docs/js/265.0c8a619f.js",revision:null},{url:"/quasar-docs/js/266.2077393c.js",revision:null},{url:"/quasar-docs/js/267.1712b7c2.js",revision:null},{url:"/quasar-docs/js/268.834ff101.js",revision:null},{url:"/quasar-docs/js/269.8dd15dfd.js",revision:null},{url:"/quasar-docs/js/27.74328de4.js",revision:null},{url:"/quasar-docs/js/270.d47d0454.js",revision:null},{url:"/quasar-docs/js/271.6fb952ca.js",revision:null},{url:"/quasar-docs/js/272.cc8c08d0.js",revision:null},{url:"/quasar-docs/js/273.5ceef4b2.js",revision:null},{url:"/quasar-docs/js/274.aae4b3a3.js",revision:null},{url:"/quasar-docs/js/275.3b1d5066.js",revision:null},{url:"/quasar-docs/js/276.50011997.js",revision:null},{url:"/quasar-docs/js/277.5ba7f5cb.js",revision:null},{url:"/quasar-docs/js/278.93d49377.js",revision:null},{url:"/quasar-docs/js/279.8e730f3a.js",revision:null},{url:"/quasar-docs/js/28.aa439853.js",revision:null},{url:"/quasar-docs/js/280.45fadb8a.js",revision:null},{url:"/quasar-docs/js/281.0a54e569.js",revision:null},{url:"/quasar-docs/js/282.f33aa9b5.js",revision:null},{url:"/quasar-docs/js/283.03e1a71d.js",revision:null},{url:"/quasar-docs/js/284.b72a2109.js",revision:null},{url:"/quasar-docs/js/285.9e94f950.js",revision:null},{url:"/quasar-docs/js/286.92ab1d07.js",revision:null},{url:"/quasar-docs/js/287.a827c33d.js",revision:null},{url:"/quasar-docs/js/288.c2b5becc.js",revision:null},{url:"/quasar-docs/js/289.e1da8b50.js",revision:null},{url:"/quasar-docs/js/29.713cf030.js",revision:null},{url:"/quasar-docs/js/290.cf1aa059.js",revision:null},{url:"/quasar-docs/js/291.2468ec73.js",revision:null},{url:"/quasar-docs/js/30.3f262daf.js",revision:null},{url:"/quasar-docs/js/31.7c80f696.js",revision:null},{url:"/quasar-docs/js/32.5bcc1ed7.js",revision:null},{url:"/quasar-docs/js/33.dac2b755.js",revision:null},{url:"/quasar-docs/js/34.fcc51a23.js",revision:null},{url:"/quasar-docs/js/35.d4ef631e.js",revision:null},{url:"/quasar-docs/js/36.fc55d40c.js",revision:null},{url:"/quasar-docs/js/37.aab09bb4.js",revision:null},{url:"/quasar-docs/js/38.25ee19f6.js",revision:null},{url:"/quasar-docs/js/39.101a712a.js",revision:null},{url:"/quasar-docs/js/40.6b3d75ce.js",revision:null},{url:"/quasar-docs/js/41.8188ba18.js",revision:null},{url:"/quasar-docs/js/42.b7894071.js",revision:null},{url:"/quasar-docs/js/43.2170c797.js",revision:null},{url:"/quasar-docs/js/44.4f93c01a.js",revision:null},{url:"/quasar-docs/js/45.bc826e5d.js",revision:null},{url:"/quasar-docs/js/46.87ef2c6f.js",revision:null},{url:"/quasar-docs/js/47.c17516f4.js",revision:null},{url:"/quasar-docs/js/48.ac04fc8a.js",revision:null},{url:"/quasar-docs/js/49.b2a651c7.js",revision:null},{url:"/quasar-docs/js/5.0d2f7bc6.js",revision:null},{url:"/quasar-docs/js/50.e330afe5.js",revision:null},{url:"/quasar-docs/js/51.81b02aeb.js",revision:null},{url:"/quasar-docs/js/52.fc961792.js",revision:null},{url:"/quasar-docs/js/53.4333c192.js",revision:null},{url:"/quasar-docs/js/54.e38d079c.js",revision:null},{url:"/quasar-docs/js/55.81706d28.js",revision:null},{url:"/quasar-docs/js/56.6f036ac7.js",revision:null},{url:"/quasar-docs/js/57.ae01e1dd.js",revision:null},{url:"/quasar-docs/js/58.44054428.js",revision:null},{url:"/quasar-docs/js/59.bbf9b77e.js",revision:null},{url:"/quasar-docs/js/6.1f1f578b.js",revision:null},{url:"/quasar-docs/js/60.c0cce1c0.js",revision:null},{url:"/quasar-docs/js/61.4e4242b0.js",revision:null},{url:"/quasar-docs/js/62.2dc39209.js",revision:null},{url:"/quasar-docs/js/63.0db6f69c.js",revision:null},{url:"/quasar-docs/js/64.e3ded685.js",revision:null},{url:"/quasar-docs/js/65.ee647d5d.js",revision:null},{url:"/quasar-docs/js/66.fbf6af1f.js",revision:null},{url:"/quasar-docs/js/67.96cf4862.js",revision:null},{url:"/quasar-docs/js/68.a40f0df6.js",revision:null},{url:"/quasar-docs/js/69.75735b8f.js",revision:null},{url:"/quasar-docs/js/7.7970ec78.js",revision:null},{url:"/quasar-docs/js/70.f486d633.js",revision:null},{url:"/quasar-docs/js/71.866e931b.js",revision:null},{url:"/quasar-docs/js/72.f75d2204.js",revision:null},{url:"/quasar-docs/js/73.8c76c133.js",revision:null},{url:"/quasar-docs/js/74.c320bc2a.js",revision:null},{url:"/quasar-docs/js/75.1deb6f9f.js",revision:null},{url:"/quasar-docs/js/76.aa0cb2ae.js",revision:null},{url:"/quasar-docs/js/77.6222131b.js",revision:null},{url:"/quasar-docs/js/78.311f8acc.js",revision:null},{url:"/quasar-docs/js/79.bb6315e4.js",revision:null},{url:"/quasar-docs/js/8.39a7fcbb.js",revision:null},{url:"/quasar-docs/js/80.2542930f.js",revision:null},{url:"/quasar-docs/js/81.c8ff9928.js",revision:null},{url:"/quasar-docs/js/82.b51b5813.js",revision:null},{url:"/quasar-docs/js/83.62d6f57f.js",revision:null},{url:"/quasar-docs/js/84.0f5448c9.js",revision:null},{url:"/quasar-docs/js/85.d020e516.js",revision:null},{url:"/quasar-docs/js/86.2d0066dd.js",revision:null},{url:"/quasar-docs/js/87.3fc325e4.js",revision:null},{url:"/quasar-docs/js/88.053b1e09.js",revision:null},{url:"/quasar-docs/js/89.3aac7b62.js",revision:null},{url:"/quasar-docs/js/9.554ec5e6.js",revision:null},{url:"/quasar-docs/js/90.bd97b882.js",revision:null},{url:"/quasar-docs/js/91.57ffc7ad.js",revision:null},{url:"/quasar-docs/js/92.da637341.js",revision:null},{url:"/quasar-docs/js/93.2ea82af4.js",revision:null},{url:"/quasar-docs/js/94.20da97ab.js",revision:null},{url:"/quasar-docs/js/95.d6ba7031.js",revision:null},{url:"/quasar-docs/js/96.d4dbf3b6.js",revision:null},{url:"/quasar-docs/js/97.17ccc2fe.js",revision:null},{url:"/quasar-docs/js/98.c7c6ef1d.js",revision:null},{url:"/quasar-docs/js/99.7b49cb59.js",revision:null},{url:"/quasar-docs/js/app.93f73a9b.js",revision:null},{url:"/quasar-docs/js/demo-source.e432fef9.js",revision:null},{url:"/quasar-docs/js/demo.b449ab55.js",revision:null},{url:"/quasar-docs/js/quasar-api.e325ce53.js",revision:null},{url:"/quasar-docs/js/vendor.ed88836d.js",revision:null},{url:"/quasar-docs/manifest.json",revision:"40ae8260585492c4e8abac407217657a"},{url:"/quasar-docs/search_manifest.xml",revision:"300aefa0a28b0c85164adf6ad5eaabd4"}],{}),s.cleanupOutdatedCaches(),s.registerRoute(new s.NavigationRoute(s.createHandlerBoundToURL("/quasar-docs/index.html"),{denylist:[/service-worker\.js$/,/workbox-(.)*\.js$/]})),s.registerRoute(/^https:\/\/cdn/,new s.StaleWhileRevalidate,"GET")}));
