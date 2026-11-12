// Gömrük sual-cavab — oflayn keş. Səhifə və ikonlar əvvəlcədən saxlanılır, internetsiz açılır.
const V='gsc-v1';
const CORE=['./','index.html','manifest.webmanifest','icons/icon-192.png','icons/icon-512.png','icons/apple-touch-icon.png'];
self.addEventListener('install',e=>{e.waitUntil(caches.open(V).then(c=>c.addAll(CORE)).then(()=>self.skipWaiting()))});
// Yalnız bu tətbiqin köhnə keşləri (və əvvəlki Atlas keşi) silinir; /gomruk/ səhifəsinin keşinə toxunulmur.
self.addEventListener('activate',e=>{e.waitUntil(caches.keys().then(ks=>Promise.all(ks.filter(k=>k!=V&&/^(gsc-|atlas-)/.test(k)).map(k=>caches.delete(k)))).then(()=>self.clients.claim()))});
self.addEventListener('fetch',e=>{
  const r=e.request;if(r.method!=='GET')return;
  const u=new URL(r.url);
  if(u.origin!==location.origin)return;
  if(u.pathname.includes('/gomruk/'))return; // Gömrük İmtahanı öz keşini idarə edir
  // Səhifənin özü: əvvəl internet (yenilik dərhal görünsün), internet yoxdursa keşdən
  if(r.mode==='navigate'){e.respondWith(fetch(r).then(res=>{const cp=res.clone();caches.open(V).then(c=>c.put('index.html',cp));return res}).catch(()=>caches.match('index.html')));return}
  e.respondWith(caches.open(V).then(async c=>{
    const hit=await c.match(r);
    const net=fetch(r).then(res=>{if(res&&res.ok)c.put(r,res.clone());return res}).catch(()=>hit);
    return hit||net;
  }));
});
