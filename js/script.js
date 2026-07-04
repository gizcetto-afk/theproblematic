(function(){
  "use strict";
  var reduce = window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  /* settle · reveal content into place */
  var items = [].slice.call(document.querySelectorAll(".settle:not(.in)"));
  if("IntersectionObserver" in window && !reduce){
    var ro = new IntersectionObserver(function(es){
      es.forEach(function(e){ if(e.isIntersecting){ e.target.classList.add("in"); ro.unobserve(e.target); } });
    }, { rootMargin:"0px 0px -8% 0px", threshold:0.05 });
    items.forEach(function(el){ ro.observe(el); });
  } else { items.forEach(function(el){ el.classList.add("in"); }); }
  /* apparatus index tick */
  var idx = {};
  document.querySelectorAll(".apparatus__idx a[data-idx]").forEach(function(a){ idx[a.getAttribute("href").slice(1)] = a; });
  var works = ["work-1","work-2","work-3","work-4"];
  if("IntersectionObserver" in window){
    var io = new IntersectionObserver(function(es){
      es.forEach(function(e){ if(e.isIntersecting){ works.forEach(function(id){ if(idx[id]) idx[id].classList.toggle("on", id===e.target.id); }); } });
    }, { threshold:0.5 });
    works.forEach(function(id){ var s=document.getElementById(id); if(s) io.observe(s); });
  }
})();

(function(){
  "use strict";
  var reduce = window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  var layers=[].slice.call(document.querySelectorAll("#work-1 .layer"));
  var labels=[].slice.call(document.querySelectorAll("#work-1 .plab"));
  var reads=[].slice.call(document.querySelectorAll("#work-1 .read"));
  var voice=document.getElementById("melo-voice");
  function playVoice(on){ if(!voice) return; try{ if(on){ voice.currentTime=0; var p=voice.play(); if(p&&p.catch) p.catch(function(){}); } else { voice.pause(); voice.currentTime=0; } }catch(e){} }
  function setLayer(key){
    playVoice(key==="experience");
    layers.forEach(function(l){ var on=l.getAttribute("data-layer")===key; var open=on && key!=="positioning" && key!=="ecosystem"; l.classList.toggle("is-cur", on); l.classList.toggle("is-open", open); var b=l.querySelector(".layer__tab"); if(b) b.setAttribute("aria-expanded", open?"true":"false"); });
    labels.forEach(function(l){ l.classList.toggle("is-active", l.getAttribute("data-label")===key); });
    reads.forEach(function(r){ var on=r.getAttribute("data-read")===key; r.classList.toggle("is-active", on); if(on && !reduce){ r.classList.remove("anim"); void r.offsetWidth; r.classList.add("anim"); } });
  }
  layers.forEach(function(l){ var b=l.querySelector(".layer__tab"); if(b) b.addEventListener("click", function(){ setLayer(l.getAttribute("data-layer")); }); });
  var _gal=document.querySelector("#work-1 .commgal--rnc");
  var _raf=null;
  function _stopAuto(){ if(_raf){ cancelAnimationFrame(_raf); _raf=null; } }
  function _autoScroll(){
    if(!_gal) return; _stopAuto();
    var max=_gal.scrollWidth-_gal.clientWidth; if(max<=2) return;
    _gal.scrollLeft=0; var t0=null, dur=2600;
    function step(ts){ if(t0===null)t0=ts; var t=Math.min(1,(ts-t0)/dur); var e=t<0.5?2*t*t:1-Math.pow(-2*t+2,2)/2; _gal.scrollLeft=max*e; _raf=(t<1)?requestAnimationFrame(step):null; }
    _raf=requestAnimationFrame(step);
  }
  if(_gal){ ["pointerdown","wheel","touchstart"].forEach(function(ev){ _gal.addEventListener(ev,_stopAuto,{passive:true}); }); }
  var _ct=document.querySelector('#work-1 .layer[data-layer="communication"] .layer__tab');
  if(_ct){ _ct.addEventListener("click", function(){ if(!reduce) setTimeout(_autoScroll,200); }); }


  var _sec=document.getElementById("work-1");
  var _def=(layers.filter(function(l){return l.classList.contains("is-cur");})[0]||layers[0]).getAttribute("data-layer");
  if(_sec && "IntersectionObserver" in window){ new IntersectionObserver(function(es){ es.forEach(function(e){ if(!e.isIntersecting) setLayer(_def); }); }, {threshold:0, rootMargin:"0px"}).observe(_sec); }
})();

(function(){
  "use strict";
  var reduce = window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  var layers=[].slice.call(document.querySelectorAll("#work-2 .layer"));
  var reads=[].slice.call(document.querySelectorAll("#work-2 .read"));
  var noFold={"fl-vision":1,"fl-growth":1};
  function setLayer(key){
    layers.forEach(function(l){ var on=l.getAttribute("data-layer")===key; var open=on && !noFold[key]; l.classList.toggle("is-cur", on); l.classList.toggle("is-open", open); var b=l.querySelector(".layer__tab"); if(b) b.setAttribute("aria-expanded", open?"true":"false"); });
    reads.forEach(function(r){ var on=r.getAttribute("data-read")===key; r.classList.toggle("is-active", on); if(on && !reduce){ r.classList.remove("anim"); void r.offsetWidth; r.classList.add("anim"); } });
  }
  layers.forEach(function(l){ var b=l.querySelector(".layer__tab"); if(b) b.addEventListener("click", function(){ setLayer(l.getAttribute("data-layer")); }); });

  var _sec=document.getElementById("work-2");
  var _def=(layers.filter(function(l){return l.classList.contains("is-cur");})[0]||layers[0]).getAttribute("data-layer");
  if(_sec && "IntersectionObserver" in window){ new IntersectionObserver(function(es){ es.forEach(function(e){ if(!e.isIntersecting) setLayer(_def); }); }, {threshold:0, rootMargin:"0px"}).observe(_sec); }
})();

(function(){
  "use strict";
  var reduce = window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  var layers=[].slice.call(document.querySelectorAll("#work-3 .layer"));
  var reads=[].slice.call(document.querySelectorAll("#work-3 .read"));
  var noFold={"rnc-argument":1,"rnc-exp":1};
  function setLayer(key){
    layers.forEach(function(l){ var on=l.getAttribute("data-layer")===key; var open=on && !noFold[key]; l.classList.toggle("is-cur", on); l.classList.toggle("is-open", open); var b=l.querySelector(".layer__tab"); if(b) b.setAttribute("aria-expanded", open?"true":"false"); });
    reads.forEach(function(r){ var on=r.getAttribute("data-read")===key; r.classList.toggle("is-active", on); if(on && !reduce){ r.classList.remove("anim"); void r.offsetWidth; r.classList.add("anim"); } });
  }
  layers.forEach(function(l){ var b=l.querySelector(".layer__tab"); if(b) b.addEventListener("click", function(){ setLayer(l.getAttribute("data-layer")); }); });
  var _gal=document.querySelector("#work-3 .commgal--rnc");
  var _raf=null;
  function _stopAuto(){ if(_raf){ cancelAnimationFrame(_raf); _raf=null; } }
  function _autoScroll(){
    if(!_gal) return; _stopAuto();
    var max=_gal.scrollWidth-_gal.clientWidth; if(max<=2) return;
    _gal.scrollLeft=0; var t0=null, dur=2600;
    function step(ts){ if(t0===null)t0=ts; var t=Math.min(1,(ts-t0)/dur); var e=t<0.5?2*t*t:1-Math.pow(-2*t+2,2)/2; _gal.scrollLeft=max*e; _raf=(t<1)?requestAnimationFrame(step):null; }
    _raf=requestAnimationFrame(step);
  }
  if(_gal){ ["pointerdown","wheel","touchstart"].forEach(function(ev){ _gal.addEventListener(ev,_stopAuto,{passive:true}); }); }
  var _ct=document.querySelector('#work-3 .layer[data-layer="rnc-comm"] .layer__tab');
  if(_ct){ _ct.addEventListener("click", function(){ if(!reduce) setTimeout(_autoScroll,200); }); }


  var _sec=document.getElementById("work-3");
  var _def=(layers.filter(function(l){return l.classList.contains("is-cur");})[0]||layers[0]).getAttribute("data-layer");
  if(_sec && "IntersectionObserver" in window){ new IntersectionObserver(function(es){ es.forEach(function(e){ if(!e.isIntersecting) setLayer(_def); }); }, {threshold:0, rootMargin:"0px"}).observe(_sec); }
})();

(function(){
  "use strict";
  var reduce = window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  var layers=[].slice.call(document.querySelectorAll("#work-4 .layer"));
  var reads=[].slice.call(document.querySelectorAll("#work-4 .read"));
  var noFold={"st-argument":1};
  function setLayer(key){
    layers.forEach(function(l){ var on=l.getAttribute("data-layer")===key; var open=on && !noFold[key]; l.classList.toggle("is-cur", on); l.classList.toggle("is-open", open); var b=l.querySelector(".layer__tab"); if(b) b.setAttribute("aria-expanded", open?"true":"false"); });
    reads.forEach(function(r){ var on=r.getAttribute("data-read")===key; r.classList.toggle("is-active", on); if(on && !reduce){ r.classList.remove("anim"); void r.offsetWidth; r.classList.add("anim"); } });
  }
  layers.forEach(function(l){ var b=l.querySelector(".layer__tab"); if(b) b.addEventListener("click", function(){ setLayer(l.getAttribute("data-layer")); }); });
  var _gal=document.querySelector("#work-4 .commgal--rnc");
  var _raf=null;
  function _stopAuto(){ if(_raf){ cancelAnimationFrame(_raf); _raf=null; } }
  function _autoScroll(){
    if(!_gal) return; _stopAuto();
    var max=_gal.scrollWidth-_gal.clientWidth; if(max<=2) return;
    _gal.scrollLeft=0; var t0=null, dur=2800;
    function step(ts){ if(t0===null)t0=ts; var t=Math.min(1,(ts-t0)/dur); var e=t<0.5?2*t*t:1-Math.pow(-2*t+2,2)/2; _gal.scrollLeft=max*e; _raf=(t<1)?requestAnimationFrame(step):null; }
    _raf=requestAnimationFrame(step);
  }
  if(_gal){ ["pointerdown","wheel","touchstart"].forEach(function(ev){ _gal.addEventListener(ev,_stopAuto,{passive:true}); }); }
  var _ct=document.querySelector('#work-4 .layer[data-layer="st-exp"] .layer__tab');
  if(_ct){ _ct.addEventListener("click", function(){ if(!reduce) setTimeout(_autoScroll,200); }); }

  var _sec=document.getElementById("work-4");
  var _def=(layers.filter(function(l){return l.classList.contains("is-cur");})[0]||layers[0]).getAttribute("data-layer");
  if(_sec && "IntersectionObserver" in window){ new IntersectionObserver(function(es){ es.forEach(function(e){ if(!e.isIntersecting) setLayer(_def); }); }, {threshold:0, rootMargin:"0px"}).observe(_sec); }
})();

/* landing (index) */
(function(){var ov=document.getElementById("unlearn");if(!ov)return;
var reduce=window.matchMedia&&window.matchMedia("(prefers-reduced-motion: reduce)").matches;
var reel=ov.querySelector(".lab__reel");
if(reel){var down=false,moved=false,sx=0,sl=0,paused=false;
reel.addEventListener("pointerdown",function(e){down=true;moved=false;paused=true;sx=e.clientX;sl=reel.scrollLeft;});
reel.addEventListener("pointermove",function(e){if(!down)return;var dx=e.clientX-sx;if(Math.abs(dx)>5)moved=true;reel.scrollLeft=sl-dx;});
window.addEventListener("pointerup",function(){if(down){down=false;setTimeout(function(){paused=false;},1600);}});
reel.addEventListener("pointerenter",function(){paused=true;});reel.addEventListener("pointerleave",function(){if(!down)paused=false;});
[].slice.call(reel.querySelectorAll("img")).forEach(function(im){im.addEventListener("click",function(e){if(moved){e.preventDefault();return;}location.href="works.html#"+(im.getAttribute("data-work")||"work-1");});});
if(!reduce){var dir=1;(function loop(){var max=reel.scrollWidth-reel.clientWidth;if(!paused&&max>2){reel.scrollLeft+=dir*0.3;if(reel.scrollLeft>=max-0.5)dir=-1;else if(reel.scrollLeft<=0.5)dir=1;}requestAnimationFrame(loop);})();}}
var vd=document.getElementById("voc-def"),terms=[].slice.call(ov.querySelectorAll(".voc__t"));
terms.forEach(function(b){b.addEventListener("click",function(){terms.forEach(function(x){x.classList.remove("on");});b.classList.add("on");if(vd)vd.textContent=b.getAttribute("data-d");});});
})();

/* practice diagram */
(function(){
  var svg=document.getElementById("pdiag"); if(!svg) return;
  var reduce=window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  var cx=240, cy=150;
  var N=[{x:240,y:58,ax:7,ay:9,px:0.6,py:1.2,sp:0.5},{x:382,y:128,ax:9,ay:7,px:2.1,py:0.4,sp:0.42},{x:322,y:258,ax:8,ay:8,px:4.0,py:2.6,sp:0.47},{x:158,y:258,ax:8,ay:8,px:1.3,py:3.3,sp:0.44},{x:98,y:128,ax:9,ay:7,px:3.0,py:1.0,sp:0.5}];
  function place(x,y,i){
    var nd=document.getElementById("nd"+i),tx=document.getElementById("tx"+i),ln=document.getElementById("ln"+i);
    nd.setAttribute("cx",x.toFixed(1)); nd.setAttribute("cy",y.toFixed(1));
    var ly=(N[i].y<180)?y-13:y+18; tx.setAttribute("x",x.toFixed(1)); tx.setAttribute("y",ly.toFixed(1));
    var dx=cx-x,dy=cy-y,d=Math.sqrt(dx*dx+dy*dy)||1;
    ln.setAttribute("x1",(x+dx/d*7).toFixed(1)); ln.setAttribute("y1",(y+dy/d*7).toFixed(1));
    ln.setAttribute("x2",(cx-dx/d*46).toFixed(1)); ln.setAttribute("y2",(cy-dy/d*46).toFixed(1));
  }
  if(reduce){ for(var i=0;i<N.length;i++) place(N[i].x,N[i].y,i); return; }
  var t0=null;
  function frame(ts){ if(t0===null)t0=ts; var t=(ts-t0)/1000;
    for(var i=0;i<N.length;i++){ var n=N[i]; place(n.x+n.ax*Math.sin(t*n.sp+n.px), n.y+n.ay*Math.cos(t*n.sp*0.85+n.py), i); }
    requestAnimationFrame(frame);
  }
  requestAnimationFrame(frame);
})();
