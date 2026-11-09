const WA='923177954335',wa=t=>'https://wa.me/'+WA+'?text='+encodeURIComponent(t),$=s=>document.querySelector(s);
const FORM_URL=''; // paste your Formspree form link here to get every message by email, e.g. https://formspree.io/f/xxxxxxxx
const GA=''; // paste your Google Analytics ID here, e.g. G-XXXXXXXXXX
const lib=s=>new Promise(r=>{const e=document.createElement('script');e.src=s;e.onload=e.onerror=r;document.head.appendChild(e)});
const lite=(navigator.deviceMemory&&navigator.deviceMemory<=2)||(navigator.hardwareConcurrency&&navigator.hardwareConcurrency<=2)||(navigator.connection&&navigator.connection.saveData);
const still=matchMedia('(prefers-reduced-motion:reduce)').matches;
const store={get:k=>{try{return localStorage.getItem(k)}catch(e){return null}},set:(k,v)=>{try{localStorage.setItem(k,v)}catch(e){}}};
const pages=[['index.html','Home'],['work.html','Work'],['services.html','Services'],['why-us.html','Why us'],['about.html','About'],['contact.html','Contact']];
const here=location.pathname.split('/').pop()||'index.html';
const icon='<svg viewBox="0 0 32 32" fill="none" stroke="#0cfca3" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"><rect x="7" y="5" width="18" height="13" rx="2.5"/><path d="M6 21l-3 5h26l-3-5"/></svg>';
{const mb=$('#mb'),lk=$('#links'),cm=()=>{lk.classList.remove('open');mb.setAttribute('aria-expanded','false')};mb.setAttribute('aria-expanded','false');
 mb.onclick=e=>{e.stopPropagation();const o=lk.classList.toggle('open');mb.setAttribute('aria-expanded',o)};
 lk.addEventListener('click',e=>{if(e.target.closest('a'))cm()});document.addEventListener('click',e=>{if(!e.target.closest('#nav'))cm()});document.addEventListener('keydown',e=>{if(e.key==='Escape')cm()})}
document.querySelectorAll('[data-wa]').forEach(a=>{a.href=wa(a.dataset.wa);a.target='_blank';a.rel='noopener'});
{const wb=$('#wa');if(wb){const sw=()=>wb.classList.toggle('show',scrollY>320);addEventListener('scroll',sw,{passive:true});sw()}}
if(GA){lib('https://www.googletagmanager.com/gtag/js?id='+GA);window.dataLayer=[];window.gtag=function(){dataLayer.push(arguments)};gtag('js',new Date());gtag('config',GA)}
// reveal on scroll (fast, with above-the-fold shown at once)
const io=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting){e.target.classList.add('in');io.unobserve(e.target)}}),{rootMargin:'0px 0px 15% 0px'});
document.querySelectorAll('.rv').forEach(e=>{e.getBoundingClientRect().top<innerHeight?e.classList.add('in'):io.observe(e)});
if(matchMedia('(hover:hover)').matches&&!lite)document.querySelectorAll('.card').forEach(el=>{el.addEventListener('mousemove',e=>{const r=el.getBoundingClientRect(),x=(e.clientX-r.left)/r.width-.5,y=(e.clientY-r.top)/r.height-.5;el.style.transform='perspective(800px) rotateY('+x*8+'deg) rotateX('+-y*8+'deg)'});el.addEventListener('mouseleave',()=>el.style.transform='')});
// lead form: sent to Formspree (if FORM_URL is set), then opens WhatsApp with the same details
const cf=$('#cf');if(cf)cf.addEventListener('submit',e=>{e.preventDefault();const f=new FormData(cf),g=k=>f.get(k)||'-';
 if(FORM_URL)fetch(FORM_URL,{method:'POST',headers:{'Accept':'application/json'},body:f}).catch(()=>{});
 open(wa('Hello Cloudvora,\nName: '+g('n')+'\nBusiness: '+g('b')+'\nService: '+g('s')+'\nPreferred call: '+g('d')+' '+g('t')+'\nProject: '+g('m')+'\n\nPlease share a roadmap and recommended plan.'),'_blank')});
// language switch (English / Urdu)
const orig=new WeakMap(),key=t=>t.length+t.slice(0,8);
function tr(l){if(l==='ur'&&!window.UR)return;
 const w=document.createTreeWalker(document.body,NodeFilter.SHOW_TEXT,{acceptNode:n=>/^(SCRIPT|STYLE|NOSCRIPT)$/.test(n.parentNode.nodeName)||!n.nodeValue.trim()?NodeFilter.FILTER_REJECT:NodeFilter.FILTER_ACCEPT});let n;
 while(n=w.nextNode()){const t=n.nodeValue.trim();if(l==='ur'){if(orig.has(n))continue;const u=UR[key(t)];if(u){orig.set(n,n.nodeValue);n.nodeValue=n.nodeValue.replace(t,u)}}else if(orig.has(n)){n.nodeValue=orig.get(n);orig.delete(n)}}
 document.querySelectorAll('[placeholder]').forEach(e=>{if(!e.dataset.en)e.dataset.en=e.placeholder;e.placeholder=(l==='ur'&&UR[key(e.dataset.en)])||e.dataset.en})}
window.applyLang=()=>tr(document.documentElement.lang);
function setLang(l){store.set('cv_lang',l);const h=document.documentElement;h.lang=l;h.dir=l==='ur'?'rtl':'ltr';$('#lg').textContent=l==='ur'?'EN':'اردو';
 if(l==='ur'&&!window.UR){if(!$('#uf'))document.head.insertAdjacentHTML('beforeend','<link id="uf" rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Noto+Nastaliq+Urdu:wght@400;600&display=swap">');lib('lang.js').then(()=>tr(l))}else tr(l)}
$('#lg').onclick=()=>setLang(document.documentElement.lang==='ur'?'en':'ur');
if(store.get('cv_lang')==='ur')setLang('ur');else $('#lg').textContent='اردو';
// Hero 3D: a light wireframe shows instantly; the original full 3D scene loads in the background and fades in
const THREE_SRC='https://cdnjs.cloudflare.com/ajax/libs/three.js/r128/three.min.js';
(function(){const sh=document.body.dataset.shape,box=$('.vis');
 const bgc=document.createElement('canvas');bgc.id='bgs';bgc.setAttribute('aria-hidden','true');document.body.prepend(bgc);
 const stars=()=>{bgc.width=innerWidth;bgc.height=innerHeight;const g=bgc.getContext('2d');for(let i=0;i<(innerWidth<700?50:110);i++){g.fillStyle='rgba(12,252,163,'+(.12+Math.random()*.45)+')';g.fillRect(Math.random()*innerWidth,Math.random()*innerHeight,1.5,1.5)}};
 stars();let rt=0;addEventListener('resize',()=>{clearTimeout(rt);rt=setTimeout(stars,250)});
 if(!sh||!box)return;
 const c=document.createElement('canvas');c.setAttribute('aria-hidden','true');c.style.cssText='position:absolute;inset:0;width:100%;height:100%';box.appendChild(c);
 const x=c.getContext('2d'),dpr=Math.min(devicePixelRatio,lite?1:1.5),V=[],E=[];let W=1,H=1,mx=0,my=0,raf=0,vis=true,ok3=0;const want=!lite&&!still&&!!window.WebGLRenderingContext;let use2d=!want;
 const P=(a,b,c)=>V.push([a,b,c])-1,L=(i,j)=>E.push([i,j]);
 const loop=(pts,close)=>{const s=V.length;pts.forEach(p=>P(p[0],p[1],p[2]));for(let i=0;i<pts.length-1;i++)L(s+i,s+i+1);if(close)L(s+pts.length-1,s)};
 function boxw(cx,cy,cz,w,h,d,rx){const ix=[];for(const sx of[-1,1])for(const sy of[-1,1])for(const sz of[-1,1]){let y=sy*h/2,z=sz*d/2;if(rx){const co=Math.cos(rx),si=Math.sin(rx),t=y*co-z*si;z=y*si+z*co;y=t}ix.push(P(cx+sx*w/2,cy+y,cz+z))}
  [[0,1],[2,3],[4,5],[6,7],[0,2],[1,3],[4,6],[5,7],[0,4],[1,5],[2,6],[3,7]].forEach(e=>L(ix[e[0]],ix[e[1]]))}
 let OY=0;
 if(sh==='laptop'){OY=-1;boxw(0,.05,0,3.8,.1,2.4);boxw(0,1.15,-1.1,3.4,2.1,.08,-.2);
  const co=Math.cos(-.2),si=Math.sin(-.2),t=(px,py)=>[px,1.15+py*co-.045*si,-1.1+py*si+.045*co],R=(x0,y0,x1,y1)=>loop([t(x0,y0),t(x1,y0),t(x1,y1),t(x0,y1)],1);
  loop([t(-1.5,.85),t(1.5,.85)]);R(-1.5,.5,-.1,-.9);R(.1,.5,1.5,-.1);R(.1,-.3,1.5,-.9);loop([t(-1.5,-.98),t(-.6,-.98)]);
  loop([[-.5,.11,.6],[.5,.11,.6],[.5,.11,.95],[-.5,.11,.95]],1)}
 else if(sh==='ico'){const t=(1+Math.sqrt(5))/2,vs=[[-1,t,0],[1,t,0],[-1,-t,0],[1,-t,0],[0,-1,t],[0,1,t],[0,-1,-t],[0,1,-t],[t,0,-1],[t,0,1],[-t,0,-1],[-t,0,1]],ix=vs.map(v=>P(v[0],v[1],v[2]));
  for(let i=0;i<12;i++)for(let j=i+1;j<12;j++){const a=vs[i],b=vs[j];if(Math.abs(Math.hypot(a[0]-b[0],a[1]-b[1],a[2]-b[2])-2)<.01)L(ix[i],ix[j])}}
 else if(sh==='cube'){boxw(0,0,0,2.6,2.6,2.6);boxw(0,0,0,1.3,1.3,1.3)}
 else if(sh==='globe'){const r=2,ring=f=>{const p=[];for(let k=0;k<40;k++)p.push(f(k/40*Math.PI*2));loop(p,1)};
  [-60,-30,0,30,60].forEach(la=>{const a=la*Math.PI/180;ring(t=>[r*Math.cos(a)*Math.cos(t),r*Math.sin(a),r*Math.cos(a)*Math.sin(t)])});
  for(let m=0;m<6;m++){const f=m*Math.PI/6;ring(t=>[r*Math.cos(t)*Math.cos(f),r*Math.sin(t),r*Math.cos(t)*Math.sin(f)])}}
 else{const p=[];for(let k=0;k<240;k++){const t=k/240*Math.PI*2,r=Math.cos(3*t)+2;p.push([.62*r*Math.cos(2*t),.62*r*Math.sin(2*t),-.95*Math.sin(3*t)])}loop(p,1)}
 const X=new Float32Array(V.length),Y=new Float32Array(V.length);
 function size(){const r=box.getBoundingClientRect();W=Math.max(1,r.width);H=Math.max(1,r.height);c.width=W*dpr;c.height=H*dpr}
 function draw(t){x.setTransform(dpr,0,0,dpr,0,0);x.clearRect(0,0,W,H);
  const ry=still?.5:Math.sin(t*.0005)*.5+mx*.6,rx=sh==='laptop'?.14+my*.2:(still?.3:t*.0002)+my*.3,
   cy=Math.cos(ry),sy=Math.sin(ry),cx=Math.cos(rx),sx=Math.sin(rx),s=Math.min(W,H)/(sh==='laptop'?4.8:5.4);
  for(let i=0;i<V.length;i++){const v=V[i],y0=v[1]+OY,x1=v[0]*cy+v[2]*sy,z1=-v[0]*sy+v[2]*cy,y2=y0*cx-z1*sx,z2=y0*sx+z1*cx,k=9/(9+z2);X[i]=W/2+x1*s*k;Y[i]=H/2-y2*s*k}
  x.lineCap='round';x.lineJoin='round';
  for(let pass=0;pass<2;pass++){x.beginPath();for(let e=0;e<E.length;e++){x.moveTo(X[E[e][0]],Y[E[e][0]]);x.lineTo(X[E[e][1]],Y[E[e][1]])}
   x.lineWidth=pass?1.5:5;x.strokeStyle=pass?'rgba(12,252,163,.9)':'rgba(12,252,163,.1)';x.stroke()}}
 const tick=t=>{raf=requestAnimationFrame(tick);draw(t)};
 const up=()=>{const w=use2d&&vis&&!still;if(w&&!raf)raf=requestAnimationFrame(tick);if(!w&&raf){cancelAnimationFrame(raf);raf=0}};
 size();if(use2d)draw(0);else c.style.display='none';   // when the full 3D scene is expected, show nothing until it is ready
 addEventListener('resize',()=>{size();if(use2d)draw(0)});
 if(!still){addEventListener('mousemove',e=>{mx=e.clientX/innerWidth-.5;my=e.clientY/innerHeight-.5},{passive:true});
  new IntersectionObserver(es=>{vis=es[0].isIntersecting;up()}).observe(box);up()}
 const fb=()=>{use2d=true;c.style.display='';c.style.opacity=1;size();draw(0);up()};   // light version only if 3D can't run
 // ---- original full 3D scene (loads after the page, fades in, falls back to the light version if the device struggles) ----
 function gl3d(){const T=THREE,mob=innerWidth<860;let pr=Math.min(devicePixelRatio,mob?1:1.5);
  const sc=new T.Scene(),cam=new T.PerspectiveCamera(50,innerWidth/innerHeight,.1,100);cam.position.z=8;
  const r=new T.WebGLRenderer({antialias:!mob,alpha:true,powerPreference:'high-performance'});r.setPixelRatio(pr);r.setSize(innerWidth,innerHeight);
  const cv=r.domElement;cv.id='bg';cv.style.opacity=0;cv.style.transition='opacity .7s';document.body.prepend(cv);
  const mint=0x0cfca3,lm=new T.LineBasicMaterial({color:mint}),Q=[];
  for(let i=0;i<(mob?450:1000);i++)Q.push((Math.random()-.5)*40,(Math.random()-.5)*26,-Math.random()*30);
  const g=new T.BufferGeometry();g.setAttribute('position',new T.Float32BufferAttribute(Q,3));
  const st=new T.Points(g,new T.PointsMaterial({color:mint,size:.05,transparent:true,opacity:.6}));sc.add(st);
  const gr=new T.GridHelper(60,60,0x0a6b4a,0x06221a);gr.position.y=-4;gr.material.transparent=true;gr.material.opacity=.5;sc.add(gr);
  const grp=new T.Group(),dark=new T.MeshBasicMaterial({color:0x04140f}),edge=m=>new T.LineSegments(new T.EdgesGeometry(m.geometry),lm);
  if(sh==='laptop'){
   const cc=document.createElement('canvas');cc.width=640;cc.height=400;const q=cc.getContext('2d');
   q.fillStyle='#04140f';q.fillRect(0,0,640,400);q.fillStyle='#0cfca3';q.font='700 56px Sora,sans-serif';q.fillText('Cloudvora.pk',40,110);
   q.fillStyle='#8fb3a6';q.font='28px Manrope,sans-serif';q.fillText('Digital Solutions',44,160);
   q.fillStyle='#0b2a20';[[40,210,250,130],[310,210,290,60],[310,280,290,60]].forEach(a=>q.fillRect(a[0],a[1],a[2],a[3]));q.fillStyle='#0cfca3';q.fillRect(40,360,120,12);
   const scr=new T.Mesh(new T.BoxGeometry(3.4,2.1,.08),[dark,dark,dark,dark,new T.MeshBasicMaterial({map:new T.CanvasTexture(cc)}),dark]);
   scr.add(edge(scr));scr.position.set(0,1.15,-1.1);scr.rotation.x=-.2;
   const b=new T.Mesh(new T.BoxGeometry(3.8,.1,2.4),dark);b.add(edge(b));grp.add(scr,b);grp.position.y=-.8;
  }else{
   const geo={ico:new T.IcosahedronGeometry(2,1),torus:new T.TorusKnotGeometry(1.4,.45,100,12),cube:new T.BoxGeometry(2.4,2.4,2.4),globe:new T.SphereGeometry(2.1,16,12)}[sh];
   grp.add(new T.Mesh(geo,dark),new T.Mesh(geo,new T.MeshBasicMaterial({color:mint,wireframe:true,transparent:true,opacity:.5})));
  }
  sc.add(grp);let bx=0,by=0,last=0,slow=0,bad=0,sd=1,first=1,id=0;
  const place=()=>{const a=innerWidth/innerHeight;bx=mob?0:Math.min(3.7,1+a*1.2);by=mob?1.5:.2;grp.scale.setScalar(mob?.6:1)};place();
  const sdf=()=>sd=1,rs=()=>{cam.aspect=innerWidth/innerHeight;cam.updateProjectionMatrix();r.setSize(innerWidth,innerHeight);place();sd=1};
  addEventListener('scroll',sdf,{passive:true});addEventListener('resize',rs);
  const dead=()=>{cancelAnimationFrame(id);removeEventListener('scroll',sdf);removeEventListener('resize',rs);cv.remove();r.dispose();document.body.prepend(bgc);use2d=true;c.style.display='';c.style.opacity=1;up()};
  (function lp(t){id=requestAnimationFrame(lp);if(document.hidden)return;const dt=t-last;last=t;
   if(dt>40){if(++slow>40&&pr>1){pr=1;r.setPixelRatio(1);r.setSize(innerWidth,innerHeight)}if(++bad>150)return dead()}else if(bad>0)bad-=.5;
   if(scrollY>innerHeight*1.4&&!sd)return;sd=0;
   const s=scrollY,dir=document.documentElement.dir==='rtl'?-1:1;
   grp.rotation.y=Math.sin(t*.0005)*.5+mx*.6+s*.0012;grp.rotation.x=sh==='laptop'?.14+my*.2:t*.0002+my*.3;
   grp.position.set(bx*dir,by+Math.sin(t*.0012)*.12+s*.004,0);grp.visible=s<innerHeight*1.4;
   st.position.y=s*.003;cam.position.z=8+Math.min(s,2500)*.0012;r.render(sc,cam);
   if(first){first=0;ok3=1;cv.style.opacity=1;use2d=false;up();c.style.display='none';setTimeout(()=>bgc.remove(),700)}
  })(0)}
 if(want){lib(THREE_SRC).then(()=>{if(window.THREE)try{gl3d()}catch(e){fb()}else fb()});setTimeout(()=>{if(!ok3&&!use2d)fb()},9000)}
})();
(function(){const sp=document.createElement('div');sp.id='sp';document.body.appendChild(sp);let tk=0;
const u=()=>{const m=document.documentElement.scrollHeight-innerHeight;sp.style.transform='scaleX('+(m>0?scrollY/m:0)+')';tk=0};
addEventListener('scroll',()=>{if(!tk)tk=requestAnimationFrame(u)},{passive:true});u();
if(matchMedia('(hover:hover)').matches&&!lite)document.querySelectorAll('.card').forEach(el=>el.addEventListener('mousemove',e=>{const r=el.getBoundingClientRect();el.style.setProperty('--mx',e.clientX-r.left+'px');el.style.setProperty('--my',e.clientY-r.top+'px')},{passive:true}))})();

// pull-cord lamp: drag the cord down (or tap / press Enter) to switch the light on and reveal the call to action
(function(){const cd=$('#cord'),room=$('#room');if(!cd)return;let y0=0,dy=0,drag=0,skip=0,lit=0;
 new IntersectionObserver(e=>room.classList.toggle('inview',e[0].isIntersecting)).observe(room);
 const tog=()=>{lit=!lit;room.classList.toggle('on',!!lit);if(lit)room.classList.add('seen');cd.setAttribute('aria-pressed',!!lit)};
 const pull=v=>cd.style.setProperty('--pull',v+'px');
 cd.addEventListener('pointerdown',e=>{drag=1;y0=e.clientY;dy=0;cd.classList.add('drag');try{cd.setPointerCapture(e.pointerId)}catch(_){}});
 cd.addEventListener('pointermove',e=>{if(!drag)return;dy=Math.max(0,Math.min(44,e.clientY-y0));pull(dy)});
 const end=()=>{if(!drag)return;drag=0;cd.classList.remove('drag');pull(0);if(dy>22){tog();skip=1;setTimeout(()=>skip=0,60)}};
 cd.addEventListener('pointerup',end);cd.addEventListener('pointercancel',end);
 cd.addEventListener('click',()=>{if(skip)return;pull(34);setTimeout(()=>pull(0),140);tog()});
 if(still)tog();
})();
