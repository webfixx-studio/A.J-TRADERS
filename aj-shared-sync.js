/* A.J TRADERS — shared content bridge. Preserves the existing UI and page code. */
(function(){
  'use strict';
  const CONFIG = {
    // IMPORTANT: put the real Supabase project URL here before publishing.
    // Example: https://xxxxxxxx.supabase.co
    SUPABASE_URL: 'https://bijohvnrjwcgwpypebcd.supabase.co',
    SUPABASE_ANON_KEY: 'sb_publishable_N76NNPNlwRHFsCbVgH-1dQ_31ODG9nD',
    ROW_ID: 'main'
  };
  const KEYS = ['aj_content','aj_faqs','aj_gallery','aj_stats','aj_testimonials','aj_blogs','aj_services','aj_whychoose','aj_process','aj_certificates','aj_quality','aj_leads'];
  const originalSetItem = Storage.prototype.setItem;
  const originalRemoveItem = Storage.prototype.removeItem;
  let syncing = false, timer = null;

  function getUrl(){
    return CONFIG.SUPABASE_URL;
  }
  function getKey(){
    return CONFIG.SUPABASE_ANON_KEY;
  }
  function enabled(){ return Boolean(getUrl() && getKey()); }
  function payload(){
    const out={};
    KEYS.forEach(k=>{
      const v=localStorage.getItem(k);
      if(v!==null){ try{ out[k]=JSON.parse(v); }catch{ out[k]=v; } }
    });
    return out;
  }
  function apply(data){
    if(!data) return;
    KEYS.forEach(k=>{
      if(Object.prototype.hasOwnProperty.call(data,k)){
        try{ originalSetItem.call(localStorage,k,JSON.stringify(data[k])); }catch{}
      }
    });
    try{
      if(typeof window.loadSharedContent==='function') window.loadSharedContent();
      if(typeof window.loadShared==='function') window.loadShared();
      if(typeof window.renderFaqEdit==='function' && document.getElementById('faqEditList')) window.renderFaqEdit();
      if(typeof window.renderGalleryEdit==='function' && document.getElementById('galleryEditGrid')) window.renderGalleryEdit();
      if(typeof window.loadStatsForm==='function' && document.getElementById('stat1_num')) window.loadStatsForm();
      if(typeof window.renderTestimonialEdit==='function' && document.getElementById('testimonialEditGrid')) window.renderTestimonialEdit();
      if(typeof window.renderBlogEdit==='function' && document.getElementById('blogEditList')) window.renderBlogEdit();
      if(typeof window.renderServicesEdit==='function' && document.getElementById('servicesEditGrid')) window.renderServicesEdit();
      if(typeof window.renderCertsEdit==='function' && document.getElementById('certsEditGrid')) window.renderCertsEdit();
    }catch(e){ console.warn('A.J TRADERS shared content apply warning',e); }
  }
  async function client(){
    if(!enabled() || !window.supabase) return null;
    try{return window.supabase.createClient(getUrl(),getKey());}catch(e){console.warn('Supabase init failed',e);return null;}
  }
  async function pull(){
    const sb=await client(); if(!sb) return false;
    try{
      const {data,error}=await sb.from('aj_site_data').select('payload').eq('id',CONFIG.ROW_ID).maybeSingle();
      if(error) throw error;
      if(data && data.payload) apply(data.payload);
      return true;
    }catch(e){ console.warn('A.J TRADERS shared pull failed',e); return false; }
  }
  async function push(){
    if(syncing) return false;
    const sb=await client(); if(!sb) return false;
    syncing=true;
    try{
      const {error}=await sb.from('aj_site_data').upsert({id:CONFIG.ROW_ID,payload:payload(),updated_at:new Date().toISOString()},{onConflict:'id'});
      if(error) throw error;
      return true;
    }catch(e){ console.warn('A.J TRADERS shared push failed',e); return false; }
    finally{ syncing=false; }
  }
  function queuePush(){
    if(!enabled()) return;
    clearTimeout(timer);
    timer=setTimeout(push,250);
  }
  Storage.prototype.setItem=function(k,v){
    originalSetItem.call(this,k,v);
    if(this===localStorage && KEYS.indexOf(k)!==-1) queuePush();
  };
  Storage.prototype.removeItem=function(k){
    originalRemoveItem.call(this,k);
    if(this===localStorage && KEYS.indexOf(k)!==-1) queuePush();
  };
  window.AJShared={pull,push,enabled,getConfig:()=>({url:getUrl(),key:getKey()})};

  // Apply global controls without changing the existing design.
  function applyGlobal(c){
    if(!c) return;
    const cleanMobile = String(c.mobile||'').replace(/[^0-9]/g,'');
    const wa = c.whatsappUrl || (cleanMobile ? 'https://wa.me/'+cleanMobile : '');

    // Let each existing page renderer update its own existing UI without redesigning it.
    try{
      if(typeof window.loadSharedContent==='function') window.loadSharedContent();
      if(typeof window.loadShared==='function') window.loadShared();
      if(typeof window.renderFaq==='function') window.renderFaq();
      if(typeof window.renderGallery==='function') window.renderGallery();
      if(typeof window.renderStats==='function') window.renderStats();
      if(typeof window.renderTestimonials==='function') window.renderTestimonials();
      if(typeof window.renderBlogs==='function') window.renderBlogs();
      if(typeof window.renderServices==='function') window.renderServices();
      if(typeof window.renderCertificates==='function') window.renderCertificates();
    }catch(e){ console.warn('A.J TRADERS shared render warning',e); }
    // ONE shared logo source -> every existing logo occurrence.
    if(c.logo){
      document.querySelectorAll('img').forEach(img=>{
        const alt=(img.getAttribute('alt')||'').toLowerCase();
        const src=(img.getAttribute('src')||'').toLowerCase();
        const cls=(img.className||'').toString().toLowerCase();
        if(alt.includes('a.j traders') || src.includes('aj_logo') || src.includes('aj-logo') || cls.includes('site-logo') || img.hasAttribute('data-site-logo')){
          img.src=c.logo;
        }
      });
    }

    // Global contact details.
    if(c.mobile){
      document.querySelectorAll('.contact-mobile,#footerMobile').forEach(el=>el.textContent='+91 '+cleanMobile.replace(/^91/,'').replace(/^\+91/,'').trim());
      document.querySelectorAll('a[href^="tel:"]').forEach(a=>{ if(cleanMobile) a.href='tel:+91'+cleanMobile.replace(/^91/,''); });
    }
    if(c.email) document.querySelectorAll('.contact-email,#footerEmail').forEach(el=>el.textContent=c.email);
    if(c.address) document.querySelectorAll('.contact-address,#footerAddress').forEach(el=>el.textContent=c.address);

    if(wa){
      document.querySelectorAll('a[href*="wa.me"],a.wa-link,[data-whatsapp]').forEach(a=>a.href=wa);
    }

    // Social links use the same shared configuration.
    const setHref=(selector,url)=>{ if(!url) return; document.querySelectorAll(selector).forEach(a=>a.href=url); };
    setHref('#socialInstagram',c.instagram);
    setHref('#socialYoutube',c.youtubeChannel);
    setHref('#socialFacebook',c.facebook);

    // CEO / founder shared content.
    if(c.ceoName) document.querySelectorAll('#ceoName').forEach(el=>el.textContent=c.ceoName);
    if(c.ceoBio) document.querySelectorAll('#ceoBio').forEach(el=>el.textContent=c.ceoBio);
    if(c.ceoPhoto) document.querySelectorAll('#ceoPhotoImg,.ceo-photo').forEach(img=>img.src=c.ceoPhoto);

    // Hero images.
    const heroes={'hero_home':'img_hero_home','hero_products':'img_hero_products','hero_services':'img_hero_services','hero_about':'img_hero_about','hero_certificates':'img_hero_certificates','hero_contact':'img_hero_contact','hero_faq':'img_hero_faq','hero_gallery':'img_hero_gallery','hero_blog':'img_hero_blog','hero_clients':'img_hero_clients'};
    Object.entries(heroes).forEach(([dom,store])=>{
      const h=document.getElementById(dom);
      if(h && c[store]){
        const u=String(c[store]).replace(/'/g,"\\'");
        h.style.setProperty('--hero-img',"url('"+u+"')");
        h.style.background="linear-gradient(180deg,rgba(5,11,20,0.88) 0%,rgba(11,19,37,0.95) 100%),url('"+u+"') center/cover no-repeat fixed";
      }
    });

    // Existing editable product/content images.
    ['img_prod_05','img_prod_10','img_prod_12','img_prod_15','img_prod_tape','img_about','img_ceo'].forEach(k=>{
      if(c[k]){ const el=document.getElementById(k); if(el) el.src=c[k]; }
    });

    // YouTube: accept raw URL or already-generated embed URL.
    const raw=c.youtubeRaw||c.youtube||'';
    const id=extractYT(raw);
    const videoSrc=id ? 'https://www.youtube.com/embed/'+id+'?rel=0&modestbranding=1' : c.youtube;
    if(videoSrc) document.querySelectorAll('#youtubeEmbed,#youtubeVideo').forEach(el=>el.src=videoSrc);

  }
  function extractYT(url){
    if(!url) return null;
    const m=String(url).trim().match(/(?:youtube\.com\/(?:watch\?v=|shorts\/|embed\/|live\/)|youtu\.be\/)([^&?\/\s]{11})/i);
    return m?m[1]:null;
  }
  window.addEventListener('DOMContentLoaded',async function(){
    await pull();
    setTimeout(()=>applyGlobal(JSON.parse(localStorage.getItem('aj_content')||'{}')),100);
  });
  window.addEventListener('load',()=>setTimeout(()=>applyGlobal(JSON.parse(localStorage.getItem('aj_content')||'{}')),250));
})();
