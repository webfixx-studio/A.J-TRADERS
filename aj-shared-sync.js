/* A.J TRADERS — global shared content bridge. UI/UX untouched. */
(function(){
  'use strict';
  const CONFIG={
    SUPABASE_URL:'https://bijohvnrjwcgwpypebcd.supabase.co',
    SUPABASE_ANON_KEY:'sb_publishable_N76NNPNlwRHFsCbVgH-1dQ_31ODG9nD',
    ROW_ID:'main'
  };
  const KEYS=['aj_content','aj_faqs','aj_gallery','aj_stats','aj_testimonials','aj_blogs','aj_services','aj_whychoose','aj_process','aj_certificates','aj_quality','aj_products','aj_leads'];
  const originalSetItem=Storage.prototype.setItem, originalRemoveItem=Storage.prototype.removeItem;
  let syncing=false, pulling=false, timer=null, clientInstance=null, dirty=false, pullStarted=false;

  function enabled(){return !!(CONFIG.SUPABASE_URL&&CONFIG.SUPABASE_ANON_KEY&&window.supabase);}
  async function client(){
    if(!enabled()) return null;
    if(clientInstance) return clientInstance;
    try{
      clientInstance=window.supabase.createClient(CONFIG.SUPABASE_URL,CONFIG.SUPABASE_ANON_KEY);
      window.supabaseClient=clientInstance;
      window.supabaseEnabled=true;
      return clientInstance;
    }catch(e){console.warn('A.J TRADERS Supabase init failed',e);return null;}
  }
  function payload(){
    const out={};
    KEYS.forEach(k=>{
      const v=localStorage.getItem(k);
      if(v!==null){try{out[k]=JSON.parse(v)}catch{out[k]=v}}
    });
    return out;
  }
  function safeLoad(){
    try{
      if(typeof window.loadSharedContent==='function') window.loadSharedContent();
      if(typeof window.loadShared==='function') window.loadShared();
      if(typeof window.renderFaqEdit==='function'&&document.getElementById('faqEditList')) window.renderFaqEdit();
      if(typeof window.renderGalleryEdit==='function'&&document.getElementById('galleryEditGrid')) window.renderGalleryEdit();
      if(typeof window.loadStatsForm==='function'&&document.getElementById('stat1_num')) window.loadStatsForm();
      if(typeof window.renderTestimonialEdit==='function'&&document.getElementById('testimonialEditGrid')) window.renderTestimonialEdit();
      if(typeof window.renderBlogEdit==='function'&&document.getElementById('blogEditList')) window.renderBlogEdit();
      if(typeof window.renderServicesEdit==='function'&&document.getElementById('servicesEditGrid')) window.renderServicesEdit();
      if(typeof window.renderCertsEdit==='function'&&document.getElementById('certsEditGrid')) window.renderCertsEdit();
      applyGlobal(JSON.parse(localStorage.getItem('aj_content')||'{}'));
    }catch(e){console.warn('A.J TRADERS content render warning',e)}
  }
  function apply(data){
    if(!data)return;
    KEYS.forEach(k=>{
      if(Object.prototype.hasOwnProperty.call(data,k)){
        try{originalSetItem.call(localStorage,k,JSON.stringify(data[k]))}catch{}
      }
    });
    safeLoad();
  }
  async function pull(){
    if(pullStarted)return false;
    pullStarted=true; pulling=true;
    const sb=await client();
    if(!sb){pulling=false;return false;}
    try{
      const r=await sb.from('aj_site_data').select('payload,updated_at').eq('id',CONFIG.ROW_ID).maybeSingle();
      if(r.error)throw r.error;
      // Never overwrite a change made locally while the initial pull is running.
      if(r.data&&r.data.payload&&!dirty){apply(r.data.payload);}
      // If admin/user changed anything while pull was running, persist that change now.
      if(dirty){dirty=false;await pushNow();}
      return !!r.data;
    }catch(e){console.warn('A.J TRADERS shared pull failed',e);return false}
    finally{pulling=false;}
  }
  async function pushNow(){
    const sb=await client();
    if(!sb)return false;
    syncing=true;
    try{
      const body={id:CONFIG.ROW_ID,payload:payload(),updated_at:new Date().toISOString()};
      const r=await sb.from('aj_site_data').upsert(body,{onConflict:'id'});
      if(r.error)throw r.error;
      dirty=false;
      return true;
    }catch(e){console.warn('A.J TRADERS shared push failed',e);return false}
    finally{syncing=false;}
  }
  async function push(){
    dirty=true;
    clearTimeout(timer);
    // If the initial pull is still running, it will flush this change when finished.
    if(pulling)return false;
    clearTimeout(timer);
    timer=setTimeout(()=>pushNow(),350);
    return true;
  }
  function queuePush(){dirty=true;clearTimeout(timer);timer=setTimeout(()=>{if(!pulling)pushNow()},350);}

  Storage.prototype.setItem=function(k,v){
    originalSetItem.call(this,k,v);
    if(this===localStorage&&KEYS.includes(k)&&!syncing)queuePush();
  };
  Storage.prototype.removeItem=function(k){
    originalRemoveItem.call(this,k);
    if(this===localStorage&&KEYS.includes(k)&&!syncing)queuePush();
  };

  window.AJShared={pull,push:push,enabled,getConfig:()=>({url:CONFIG.SUPABASE_URL})};
  window.addEventListener('DOMContentLoaded',()=>{client();pull();setTimeout(safeLoad,250);});
  window.addEventListener('load',()=>setTimeout(safeLoad,350));
})();
