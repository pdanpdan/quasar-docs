if(!self.define){const s=s=>{"require"!==s&&(s+=".js");let r=Promise.resolve();return u[s]||(r=new Promise((async r=>{if("document"in self){const u=document.createElement("script");u.src=s,document.head.appendChild(u),u.onload=r}else importScripts(s),r()}))),r.then((()=>{if(!u[s])throw new Error(`Module ${s} didn’t register its module`);return u[s]}))},r=(r,u)=>{Promise.all(r.map(s)).then((s=>u(1===s.length?s[0]:s)))},u={require:Promise.resolve(r)};self.define=(r,l,a)=>{u[r]||(u[r]=Promise.resolve().then((()=>{let u={};const o={uri:location.origin+r.slice(1)};return Promise.all(l.map((r=>{switch(r){case"exports":return u;case"module":return o;default:return s(r)}}))).then((s=>{const r=a(...s);return u.default||(u.default=r),u}))})))}}define("./service-worker.js",["./workbox-999b939b"],(function(s){"use strict";s.setCacheNameDetails({prefix:"quasar.dev-pdan"}),self.skipWaiting(),s.clientsClaim(),s.precacheAndRoute([{url:"/quasar-docs/css/10.b07171aa.css",revision:null},{url:"/quasar-docs/css/11.cd1b576e.css",revision:null},{url:"/quasar-docs/css/12.c07bf27d.css",revision:null},{url:"/quasar-docs/css/13.96af82c5.css",revision:null},{url:"/quasar-docs/css/14.99064edf.css",revision:null},{url:"/quasar-docs/css/15.add5568a.css",revision:null},{url:"/quasar-docs/css/16.e41fb891.css",revision:null},{url:"/quasar-docs/css/17.40810d73.css",revision:null},{url:"/quasar-docs/css/18.64943849.css",revision:null},{url:"/quasar-docs/css/19.b04235c4.css",revision:null},{url:"/quasar-docs/css/20.c8e0bfc6.css",revision:null},{url:"/quasar-docs/css/5.b1df0b34.css",revision:null},{url:"/quasar-docs/css/6.a3edad8d.css",revision:null},{url:"/quasar-docs/css/7.d2b53414.css",revision:null},{url:"/quasar-docs/css/8.c4fa22ac.css",revision:null},{url:"/quasar-docs/css/9.94695e1b.css",revision:null},{url:"/quasar-docs/css/app.5090acc8.css",revision:null},{url:"/quasar-docs/css/demo.4aa6cc19.css",revision:null},{url:"/quasar-docs/fonts/KFOkCnqEu92Fr1MmgVxIIzQ.9391e6e2.woff",revision:null},{url:"/quasar-docs/fonts/KFOlCnqEu92Fr1MmEU9fBBc-.ddd11dab.woff",revision:null},{url:"/quasar-docs/fonts/KFOlCnqEu92Fr1MmSU5fBBc-.877b9231.woff",revision:null},{url:"/quasar-docs/fonts/KFOlCnqEu92Fr1MmWUlfBBc-.0344cc3c.woff",revision:null},{url:"/quasar-docs/fonts/KFOlCnqEu92Fr1MmYUtfBBc-.b555d228.woff",revision:null},{url:"/quasar-docs/fonts/KFOmCnqEu92Fr1Mu4mxM.9b78ea3b.woff",revision:null},{url:"/quasar-docs/fonts/flUhRq6tzZclQEJ-Vdg-IuiaDsNa.a7d6a198.woff",revision:null},{url:"/quasar-docs/fonts/flUhRq6tzZclQEJ-Vdg-IuiaDsNcIhQ8tQ.4c7c4ea2.woff2",revision:null},{url:"/quasar-docs/index.html",revision:"4fcbab49b1b57739b6eb9c035564c319"},{url:"/quasar-docs/js/10.45d7c85d.js",revision:null},{url:"/quasar-docs/js/100.23ed0f87.js",revision:null},{url:"/quasar-docs/js/101.8b14882d.js",revision:null},{url:"/quasar-docs/js/102.3c943c1f.js",revision:null},{url:"/quasar-docs/js/103.de347998.js",revision:null},{url:"/quasar-docs/js/104.fba8ea0f.js",revision:null},{url:"/quasar-docs/js/105.16c5ded7.js",revision:null},{url:"/quasar-docs/js/106.3b6d8c5e.js",revision:null},{url:"/quasar-docs/js/107.7789d801.js",revision:null},{url:"/quasar-docs/js/108.a164e418.js",revision:null},{url:"/quasar-docs/js/109.e7aca92f.js",revision:null},{url:"/quasar-docs/js/11.e5b6b888.js",revision:null},{url:"/quasar-docs/js/110.f4562d0b.js",revision:null},{url:"/quasar-docs/js/111.32e94f68.js",revision:null},{url:"/quasar-docs/js/112.f5e2cbbc.js",revision:null},{url:"/quasar-docs/js/113.e74ee9c4.js",revision:null},{url:"/quasar-docs/js/114.9dbb2de7.js",revision:null},{url:"/quasar-docs/js/115.e9547ba3.js",revision:null},{url:"/quasar-docs/js/116.22bb542d.js",revision:null},{url:"/quasar-docs/js/117.42eff35e.js",revision:null},{url:"/quasar-docs/js/118.a7b18cb2.js",revision:null},{url:"/quasar-docs/js/119.122fc458.js",revision:null},{url:"/quasar-docs/js/12.1f770ca5.js",revision:null},{url:"/quasar-docs/js/120.db7178c6.js",revision:null},{url:"/quasar-docs/js/121.e304fffd.js",revision:null},{url:"/quasar-docs/js/122.007089ba.js",revision:null},{url:"/quasar-docs/js/123.f3159a3c.js",revision:null},{url:"/quasar-docs/js/124.035b78f6.js",revision:null},{url:"/quasar-docs/js/125.8a9b3bf8.js",revision:null},{url:"/quasar-docs/js/126.4e62cc3b.js",revision:null},{url:"/quasar-docs/js/127.edcf3bf2.js",revision:null},{url:"/quasar-docs/js/128.91076092.js",revision:null},{url:"/quasar-docs/js/129.1564ebbf.js",revision:null},{url:"/quasar-docs/js/13.3b3ce158.js",revision:null},{url:"/quasar-docs/js/130.a55c6a2a.js",revision:null},{url:"/quasar-docs/js/131.32aba526.js",revision:null},{url:"/quasar-docs/js/132.cf528566.js",revision:null},{url:"/quasar-docs/js/133.6a3d2567.js",revision:null},{url:"/quasar-docs/js/134.8c99063c.js",revision:null},{url:"/quasar-docs/js/135.756669b0.js",revision:null},{url:"/quasar-docs/js/136.403340c4.js",revision:null},{url:"/quasar-docs/js/137.13f18a9a.js",revision:null},{url:"/quasar-docs/js/138.f849c177.js",revision:null},{url:"/quasar-docs/js/139.91fedaa6.js",revision:null},{url:"/quasar-docs/js/14.664d163f.js",revision:null},{url:"/quasar-docs/js/140.48049404.js",revision:null},{url:"/quasar-docs/js/141.427e0f52.js",revision:null},{url:"/quasar-docs/js/142.83df9c09.js",revision:null},{url:"/quasar-docs/js/143.85202bb1.js",revision:null},{url:"/quasar-docs/js/144.17898834.js",revision:null},{url:"/quasar-docs/js/145.0a2a2f0b.js",revision:null},{url:"/quasar-docs/js/146.45f18817.js",revision:null},{url:"/quasar-docs/js/147.78faeaec.js",revision:null},{url:"/quasar-docs/js/148.ad4b125d.js",revision:null},{url:"/quasar-docs/js/149.f51857d5.js",revision:null},{url:"/quasar-docs/js/15.c010b81b.js",revision:null},{url:"/quasar-docs/js/150.59b15c63.js",revision:null},{url:"/quasar-docs/js/151.3457354e.js",revision:null},{url:"/quasar-docs/js/152.1cca685c.js",revision:null},{url:"/quasar-docs/js/153.acc9895b.js",revision:null},{url:"/quasar-docs/js/154.85ee0db2.js",revision:null},{url:"/quasar-docs/js/155.205e235f.js",revision:null},{url:"/quasar-docs/js/156.93b8db75.js",revision:null},{url:"/quasar-docs/js/157.37294a59.js",revision:null},{url:"/quasar-docs/js/158.892be500.js",revision:null},{url:"/quasar-docs/js/159.14291e97.js",revision:null},{url:"/quasar-docs/js/16.501fa905.js",revision:null},{url:"/quasar-docs/js/160.efbdb1fd.js",revision:null},{url:"/quasar-docs/js/161.e5bc178a.js",revision:null},{url:"/quasar-docs/js/162.f2e2ab36.js",revision:null},{url:"/quasar-docs/js/163.e1b94bc4.js",revision:null},{url:"/quasar-docs/js/164.c761db2a.js",revision:null},{url:"/quasar-docs/js/165.b4927e31.js",revision:null},{url:"/quasar-docs/js/166.491dabbd.js",revision:null},{url:"/quasar-docs/js/167.3393f498.js",revision:null},{url:"/quasar-docs/js/168.74caec48.js",revision:null},{url:"/quasar-docs/js/169.e3323df9.js",revision:null},{url:"/quasar-docs/js/17.2e12fadd.js",revision:null},{url:"/quasar-docs/js/170.ffa298a5.js",revision:null},{url:"/quasar-docs/js/171.5a66795b.js",revision:null},{url:"/quasar-docs/js/172.32560764.js",revision:null},{url:"/quasar-docs/js/173.8bd7df33.js",revision:null},{url:"/quasar-docs/js/174.95309b0e.js",revision:null},{url:"/quasar-docs/js/175.4103483b.js",revision:null},{url:"/quasar-docs/js/176.9b356939.js",revision:null},{url:"/quasar-docs/js/177.097413a0.js",revision:null},{url:"/quasar-docs/js/178.8bb35598.js",revision:null},{url:"/quasar-docs/js/179.b836d183.js",revision:null},{url:"/quasar-docs/js/18.67c707bc.js",revision:null},{url:"/quasar-docs/js/180.799e318a.js",revision:null},{url:"/quasar-docs/js/181.d97e4d9d.js",revision:null},{url:"/quasar-docs/js/182.03f74cfe.js",revision:null},{url:"/quasar-docs/js/183.002233c7.js",revision:null},{url:"/quasar-docs/js/184.25e72012.js",revision:null},{url:"/quasar-docs/js/185.6053ccb8.js",revision:null},{url:"/quasar-docs/js/186.577f45cd.js",revision:null},{url:"/quasar-docs/js/187.ac25ce99.js",revision:null},{url:"/quasar-docs/js/188.64bd1234.js",revision:null},{url:"/quasar-docs/js/189.cbfdde42.js",revision:null},{url:"/quasar-docs/js/19.3aea4f85.js",revision:null},{url:"/quasar-docs/js/190.0d3b75ae.js",revision:null},{url:"/quasar-docs/js/191.78e62f06.js",revision:null},{url:"/quasar-docs/js/192.c5298158.js",revision:null},{url:"/quasar-docs/js/193.a14c9d95.js",revision:null},{url:"/quasar-docs/js/194.31500a6d.js",revision:null},{url:"/quasar-docs/js/195.57dad72c.js",revision:null},{url:"/quasar-docs/js/196.c4cc65a4.js",revision:null},{url:"/quasar-docs/js/197.8357359d.js",revision:null},{url:"/quasar-docs/js/198.d404b7a2.js",revision:null},{url:"/quasar-docs/js/199.b34a62b6.js",revision:null},{url:"/quasar-docs/js/20.a5ed4560.js",revision:null},{url:"/quasar-docs/js/200.550c8b59.js",revision:null},{url:"/quasar-docs/js/201.566bcc1e.js",revision:null},{url:"/quasar-docs/js/202.860661db.js",revision:null},{url:"/quasar-docs/js/203.9f9c2cc4.js",revision:null},{url:"/quasar-docs/js/204.04ea7c29.js",revision:null},{url:"/quasar-docs/js/205.205803bf.js",revision:null},{url:"/quasar-docs/js/206.1d7c2a90.js",revision:null},{url:"/quasar-docs/js/207.ba48f049.js",revision:null},{url:"/quasar-docs/js/208.3e32c119.js",revision:null},{url:"/quasar-docs/js/209.fdadec32.js",revision:null},{url:"/quasar-docs/js/21.feae01c7.js",revision:null},{url:"/quasar-docs/js/210.9e8e08ea.js",revision:null},{url:"/quasar-docs/js/211.038a564c.js",revision:null},{url:"/quasar-docs/js/212.c850d660.js",revision:null},{url:"/quasar-docs/js/213.3be276f3.js",revision:null},{url:"/quasar-docs/js/214.1df0000c.js",revision:null},{url:"/quasar-docs/js/215.f7b19775.js",revision:null},{url:"/quasar-docs/js/216.f8b4d848.js",revision:null},{url:"/quasar-docs/js/217.95f0554f.js",revision:null},{url:"/quasar-docs/js/218.42097a7f.js",revision:null},{url:"/quasar-docs/js/219.b7813086.js",revision:null},{url:"/quasar-docs/js/22.49214359.js",revision:null},{url:"/quasar-docs/js/220.65c1d424.js",revision:null},{url:"/quasar-docs/js/221.b2f7f4d1.js",revision:null},{url:"/quasar-docs/js/222.91f6ad64.js",revision:null},{url:"/quasar-docs/js/223.713c5abb.js",revision:null},{url:"/quasar-docs/js/224.acbd8731.js",revision:null},{url:"/quasar-docs/js/225.4394ec65.js",revision:null},{url:"/quasar-docs/js/226.ab22a970.js",revision:null},{url:"/quasar-docs/js/227.508190e4.js",revision:null},{url:"/quasar-docs/js/228.406dc61e.js",revision:null},{url:"/quasar-docs/js/229.33a91f0c.js",revision:null},{url:"/quasar-docs/js/23.b6e0fae1.js",revision:null},{url:"/quasar-docs/js/230.ccae623d.js",revision:null},{url:"/quasar-docs/js/231.45cc5557.js",revision:null},{url:"/quasar-docs/js/232.6c868759.js",revision:null},{url:"/quasar-docs/js/233.bb542c52.js",revision:null},{url:"/quasar-docs/js/234.630f940d.js",revision:null},{url:"/quasar-docs/js/235.068dc7b0.js",revision:null},{url:"/quasar-docs/js/236.f61b285d.js",revision:null},{url:"/quasar-docs/js/237.a6f83067.js",revision:null},{url:"/quasar-docs/js/238.d6a996fc.js",revision:null},{url:"/quasar-docs/js/239.07a0aa57.js",revision:null},{url:"/quasar-docs/js/24.3d4fba18.js",revision:null},{url:"/quasar-docs/js/240.81b12972.js",revision:null},{url:"/quasar-docs/js/241.96aa62ef.js",revision:null},{url:"/quasar-docs/js/242.9fbf9d83.js",revision:null},{url:"/quasar-docs/js/243.091aff1e.js",revision:null},{url:"/quasar-docs/js/244.30789766.js",revision:null},{url:"/quasar-docs/js/245.14f17dee.js",revision:null},{url:"/quasar-docs/js/246.10b7781e.js",revision:null},{url:"/quasar-docs/js/247.4f8ed593.js",revision:null},{url:"/quasar-docs/js/248.a18224a7.js",revision:null},{url:"/quasar-docs/js/249.4635082a.js",revision:null},{url:"/quasar-docs/js/25.95ab1c88.js",revision:null},{url:"/quasar-docs/js/250.4825230a.js",revision:null},{url:"/quasar-docs/js/251.ed6c6ad0.js",revision:null},{url:"/quasar-docs/js/252.96903a97.js",revision:null},{url:"/quasar-docs/js/253.acd9f289.js",revision:null},{url:"/quasar-docs/js/254.52da0425.js",revision:null},{url:"/quasar-docs/js/255.2bbdcaff.js",revision:null},{url:"/quasar-docs/js/256.2df6213b.js",revision:null},{url:"/quasar-docs/js/257.6a1b817c.js",revision:null},{url:"/quasar-docs/js/258.ad333c97.js",revision:null},{url:"/quasar-docs/js/259.105e3bfe.js",revision:null},{url:"/quasar-docs/js/26.2b05be8f.js",revision:null},{url:"/quasar-docs/js/260.6a573d06.js",revision:null},{url:"/quasar-docs/js/261.4500ebcd.js",revision:null},{url:"/quasar-docs/js/262.b0d678dc.js",revision:null},{url:"/quasar-docs/js/263.466045b5.js",revision:null},{url:"/quasar-docs/js/264.3b5866af.js",revision:null},{url:"/quasar-docs/js/265.d2fb4e2b.js",revision:null},{url:"/quasar-docs/js/266.06909a26.js",revision:null},{url:"/quasar-docs/js/267.5769bca8.js",revision:null},{url:"/quasar-docs/js/268.87da779c.js",revision:null},{url:"/quasar-docs/js/269.3efd62b3.js",revision:null},{url:"/quasar-docs/js/27.e10b1446.js",revision:null},{url:"/quasar-docs/js/270.82e84463.js",revision:null},{url:"/quasar-docs/js/271.bafe2a11.js",revision:null},{url:"/quasar-docs/js/272.d9d8d885.js",revision:null},{url:"/quasar-docs/js/273.92b33d39.js",revision:null},{url:"/quasar-docs/js/274.42b06da2.js",revision:null},{url:"/quasar-docs/js/275.650f7942.js",revision:null},{url:"/quasar-docs/js/276.c2d8c4cf.js",revision:null},{url:"/quasar-docs/js/277.c92a832a.js",revision:null},{url:"/quasar-docs/js/278.a8ddfa62.js",revision:null},{url:"/quasar-docs/js/279.68f4a29c.js",revision:null},{url:"/quasar-docs/js/28.de1a0cca.js",revision:null},{url:"/quasar-docs/js/280.3fe6aef7.js",revision:null},{url:"/quasar-docs/js/281.902a2eaf.js",revision:null},{url:"/quasar-docs/js/282.d0812bdb.js",revision:null},{url:"/quasar-docs/js/283.c2396068.js",revision:null},{url:"/quasar-docs/js/284.b2f03491.js",revision:null},{url:"/quasar-docs/js/285.743ccefe.js",revision:null},{url:"/quasar-docs/js/286.347833cc.js",revision:null},{url:"/quasar-docs/js/287.f92364c8.js",revision:null},{url:"/quasar-docs/js/288.7878992a.js",revision:null},{url:"/quasar-docs/js/289.995de3f2.js",revision:null},{url:"/quasar-docs/js/29.31756a4d.js",revision:null},{url:"/quasar-docs/js/290.d729f89d.js",revision:null},{url:"/quasar-docs/js/291.2fd6b9b2.js",revision:null},{url:"/quasar-docs/js/30.a922f449.js",revision:null},{url:"/quasar-docs/js/31.2ad2e7d8.js",revision:null},{url:"/quasar-docs/js/32.281cdd25.js",revision:null},{url:"/quasar-docs/js/33.49638f44.js",revision:null},{url:"/quasar-docs/js/34.d88ff0db.js",revision:null},{url:"/quasar-docs/js/35.bec09a45.js",revision:null},{url:"/quasar-docs/js/36.d35b5638.js",revision:null},{url:"/quasar-docs/js/37.05a6afa7.js",revision:null},{url:"/quasar-docs/js/38.c2e8dcb5.js",revision:null},{url:"/quasar-docs/js/39.dbc58442.js",revision:null},{url:"/quasar-docs/js/40.8a981476.js",revision:null},{url:"/quasar-docs/js/41.a2837910.js",revision:null},{url:"/quasar-docs/js/42.abd864a3.js",revision:null},{url:"/quasar-docs/js/43.497f6134.js",revision:null},{url:"/quasar-docs/js/44.ac99e66b.js",revision:null},{url:"/quasar-docs/js/45.7bd81b6c.js",revision:null},{url:"/quasar-docs/js/46.5d6a2f47.js",revision:null},{url:"/quasar-docs/js/47.417aa339.js",revision:null},{url:"/quasar-docs/js/48.6a98f017.js",revision:null},{url:"/quasar-docs/js/49.7a5811b5.js",revision:null},{url:"/quasar-docs/js/5.3e994330.js",revision:null},{url:"/quasar-docs/js/50.13801447.js",revision:null},{url:"/quasar-docs/js/51.1fbeee98.js",revision:null},{url:"/quasar-docs/js/52.6d7e6293.js",revision:null},{url:"/quasar-docs/js/53.006dff86.js",revision:null},{url:"/quasar-docs/js/54.2ebb9a38.js",revision:null},{url:"/quasar-docs/js/55.f2cece37.js",revision:null},{url:"/quasar-docs/js/56.8a0e2a9e.js",revision:null},{url:"/quasar-docs/js/57.02951f3a.js",revision:null},{url:"/quasar-docs/js/58.6415a7cb.js",revision:null},{url:"/quasar-docs/js/59.343f61f2.js",revision:null},{url:"/quasar-docs/js/6.b4284d40.js",revision:null},{url:"/quasar-docs/js/60.6fe02f60.js",revision:null},{url:"/quasar-docs/js/61.8040bcf7.js",revision:null},{url:"/quasar-docs/js/62.469bfe75.js",revision:null},{url:"/quasar-docs/js/63.fec00731.js",revision:null},{url:"/quasar-docs/js/64.3fee09a4.js",revision:null},{url:"/quasar-docs/js/65.724a98db.js",revision:null},{url:"/quasar-docs/js/66.50a5121a.js",revision:null},{url:"/quasar-docs/js/67.0249b9ef.js",revision:null},{url:"/quasar-docs/js/68.7cae49e3.js",revision:null},{url:"/quasar-docs/js/69.0ebe160f.js",revision:null},{url:"/quasar-docs/js/7.d547b53f.js",revision:null},{url:"/quasar-docs/js/70.1785b5c2.js",revision:null},{url:"/quasar-docs/js/71.da1ee826.js",revision:null},{url:"/quasar-docs/js/72.63c13895.js",revision:null},{url:"/quasar-docs/js/73.18efbbf1.js",revision:null},{url:"/quasar-docs/js/74.47d0a93e.js",revision:null},{url:"/quasar-docs/js/75.69156c10.js",revision:null},{url:"/quasar-docs/js/76.4f117dc1.js",revision:null},{url:"/quasar-docs/js/77.2bc2beb0.js",revision:null},{url:"/quasar-docs/js/78.626a05e4.js",revision:null},{url:"/quasar-docs/js/79.27842fe0.js",revision:null},{url:"/quasar-docs/js/8.84dcbaef.js",revision:null},{url:"/quasar-docs/js/80.c4a322cf.js",revision:null},{url:"/quasar-docs/js/81.a27ea8f4.js",revision:null},{url:"/quasar-docs/js/82.a106dd73.js",revision:null},{url:"/quasar-docs/js/83.b7640695.js",revision:null},{url:"/quasar-docs/js/84.f72a4891.js",revision:null},{url:"/quasar-docs/js/85.da7db123.js",revision:null},{url:"/quasar-docs/js/86.7b3b5ee2.js",revision:null},{url:"/quasar-docs/js/87.9e1e13f9.js",revision:null},{url:"/quasar-docs/js/88.b29ac9e1.js",revision:null},{url:"/quasar-docs/js/89.8be9a5bc.js",revision:null},{url:"/quasar-docs/js/9.77cd75d5.js",revision:null},{url:"/quasar-docs/js/90.786a9a72.js",revision:null},{url:"/quasar-docs/js/91.a3a90ced.js",revision:null},{url:"/quasar-docs/js/92.c3d12b3a.js",revision:null},{url:"/quasar-docs/js/93.820bc949.js",revision:null},{url:"/quasar-docs/js/94.4f39e055.js",revision:null},{url:"/quasar-docs/js/95.5b4398b6.js",revision:null},{url:"/quasar-docs/js/96.dd0349ca.js",revision:null},{url:"/quasar-docs/js/97.f8d54877.js",revision:null},{url:"/quasar-docs/js/98.6c83fce5.js",revision:null},{url:"/quasar-docs/js/99.1db80334.js",revision:null},{url:"/quasar-docs/js/app.7d768731.js",revision:null},{url:"/quasar-docs/js/demo-source.250fb1b6.js",revision:null},{url:"/quasar-docs/js/demo.51afb405.js",revision:null},{url:"/quasar-docs/js/quasar-api.0f5a3804.js",revision:null},{url:"/quasar-docs/js/vendor.877a6efb.js",revision:null},{url:"/quasar-docs/manifest.json",revision:"40ae8260585492c4e8abac407217657a"},{url:"/quasar-docs/search_manifest.xml",revision:"300aefa0a28b0c85164adf6ad5eaabd4"}],{}),s.cleanupOutdatedCaches(),s.registerRoute(new s.NavigationRoute(s.createHandlerBoundToURL("/quasar-docs/index.html"),{denylist:[/service-worker\.js$/,/workbox-(.)*\.js$/]})),s.registerRoute(/^https:\/\/cdn/,new s.StaleWhileRevalidate,"GET")}));
