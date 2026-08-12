// TypeScript-converted inline script; DOM/UI behavior intentionally preserved.
// @ts-nocheck
function getDefaultCertificates() {
    return [
        { title: "GST Certificate - Registered Wholesaler", desc: "Registered GST wholesaler in Faridabad, Haryana - 100% GST invoice for all orders. GSTIN verified, proper GST invoice for your business accounting. 5000+ B2B clients trusted with GST compliance.", img: "https://images.unsplash.com/photo-1589829085413-56de8ae18c73?w=600&q=80" },
        { title: "MSME Registered - Udyam Registration", desc: "MSME registered wholesaler - Udyam Registration certificate - Trusted by government & B2B clients. MSME benefits for your business purchases. Government recognized wholesale trader in Faridabad.", img: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=600&q=80" },
        { title: "Factory Authorization Letters - Direct Factory Rates", desc: "Direct authorization letters from top bubble wrap factories - Bulk purchase at factory rates. We buy in huge bulk from factories like 10,000+ rolls at a time, so you get factory rates without factory MOQ (50-100 rolls) & waiting time.", img: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=600&q=80" },
        { title: "Quality Checking Process - GSM, Width, Bubble Verified", desc: "Strict quality checking process - GSM (40-120 GSM), width (0.5m to 1.5m), length (100m), bubble quality (small & large bubble) checking before warehousing in Faridabad godown. Only 0.5% return rate.", img: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=600&q=80" },
        { title: "Warehouse - Faridabad Godown - Huge Ready Stock", desc: "Huge ready stock in Faridabad godown - Plot No. 123, Industrial Area, Faridabad, Haryana - 0.5m to 1.5m all sizes, all GSM available in ready stock. Same day dispatch facility with proper warehousing and batch labeling.", img: "https://images.unsplash.com/photo-1553413077-190dd305871c?w=600&q=80" },
        { title: "PAN India Delivery Proof - 5000+ B2B Clients - Courier & Transport", desc: "Courier & transport delivery proof across India - 5000+ B2B clients trusted - Delivery to Delhi, Gurgaon, Noida, Mumbai, Bangalore, Hyderabad, Chennai, Pune, Kolkata. Courier 1-3 days, transport 2-5 days with tracking ID and POD.", img: "https://images.unsplash.com/photo-1605745341112-85968b19335b?w=600&q=80" }
    ];
}
function getDefaultQuality() {
    return [
        { step: 1, icon: "fa-weight-hanging", title: "GSM Weight Checking - 40 GSM to 120 GSM Verified", desc: "Each roll weighed to verify GSM as per standard. 40 GSM (light), 50 GSM (standard), 80 GSM (heavy), 120 GSM (extra heavy) all verified with weighing machine before warehousing. GSM mentioned on invoice." },
        { step: 2, icon: "fa-ruler-combined", title: "Width & Length Verification - 0.5m to 1.5m, 100m Length", desc: "0.5m (20 inch), 1.0m (39 inch), 1.2m (47 inch), 1.5m (59 inch) width checked with measuring tape. 100m length confirmed. Custom sizes also available on order - 2m width also." },
        { step: 3, icon: "fa-eye", title: "Bubble Quality Inspection - Small & Large Bubble", desc: "Small bubble (10mm) & large bubble (20mm) size, air retention, uniformity, bubble height checked visually and manually. Only best quality bubble wrap stocked - No damaged, no flat bubbles." },
        { step: 4, icon: "fa-boxes-packing", title: "Packaging & Warehousing - Batch Labeling in Faridabad Godown", desc: "After quality check, rolls properly packed with poly packing and stored in Faridabad godown with batch labeling - Size, GSM, Date, Factory name mentioned for easy identification and dispatch." },
        { step: 5, icon: "fa-truck-fast", title: "Dispatch Quality Check - Before Courier/Transport Dispatch", desc: "Before dispatch, again checked for any damage during storage, handling. Then packed properly for courier (small orders) or transport (bulk orders) with proper packing to avoid damage in transit." }
    ];
}
function localEsc(v) { return String(v == null ? '' : v).replace(/[&<>'"]/g, function (c) { if (c === '&')
    return '&amp;'; if (c === '<')
    return '&lt;'; if (c === '>')
    return '&gt;'; if (c === "'")
    return '&#39;'; return '&quot;'; }); }
function loadCertificates() {
    var E = (window.AJShared && AJShared.escapeHTML) ? AJShared.escapeHTML : localEsc;
    var c = localStorage.getItem('aj_certificates');
    var certs = c ? JSON.parse(c) : getDefaultCertificates();
    if (!c)
        localStorage.setItem('aj_certificates', JSON.stringify(certs));
    var q = localStorage.getItem('aj_quality');
    var quality = q ? JSON.parse(q) : getDefaultQuality();
    if (!q)
        localStorage.setItem('aj_quality', JSON.stringify(quality));
    document.getElementById('certificatesGrid').innerHTML = certs.map(function (it) {
        return '<div class="glass-card-3d rounded-3xl overflow-hidden cursor-pointer group" onclick="openCertModal(decodeURIComponent(\'' + encodeURIComponent(String(it.img || '')) + '\'),decodeURIComponent(\'' + encodeURIComponent(String(it.title || '')) + '\'))">' +
            '<div class="h-56 bg-slate-950 overflow-hidden"><img src="' + E(it.img) + '" alt="' + E(it.title) + '" loading="lazy" class="w-full h-full object-cover group-hover:scale-110 transition duration-500"></div>' +
            '<div class="p-5"><h3 class="font-bold text-sm font-heading leading-tight">' + E(it.title) + '</h3><p class="text-[11px] text-slate-400 mt-2 leading-relaxed">' + E(it.desc) + '</p><span class="inline-block mt-3 text-[10px] text-brand-gold font-bold border border-brand-gold/30 px-3 py-1 rounded-full group-hover:bg-brand-gold group-hover:text-brand-navy transition">View Certificate → Click to Enlarge</span></div>' +
            '</div>';
    }).join('');
    document.getElementById('qualitySteps').innerHTML = quality.map(function (it) {
        return '<div class="flex gap-4 glass p-4 rounded-2xl hover:border-brand-gold/40 transition">' +
            '<div class="w-12 h-12 rounded-full bg-brand-gold/20 flex items-center justify-center text-brand-gold shrink-0"><i class="fa-solid ' + E(it.icon) + '"></i></div>' +
            '<div><div class="flex items-center gap-2"><span class="bg-brand-gold text-brand-navy text-[10px] font-bold px-2 py-0.5 rounded-full">STEP ' + E(it.step) + '</span><span class="font-bold text-sm font-heading">' + E(it.title) + '</span></div><p class="text-[11px] text-slate-400 mt-2 leading-relaxed">' + E(it.desc) + '</p></div>' +
            '</div>';
    }).join('');
}
function openCertModal(img, title) {
    document.getElementById('modalCertImg').src = img;
    document.getElementById('modalCertTitle').textContent = title;
    document.getElementById('certModal').classList.remove('hidden');
    document.getElementById('certModal').classList.add('flex');
    document.body.style.overflow = 'hidden';
}
function closeCertModal() {
    document.getElementById('certModal').classList.add('hidden');
    document.getElementById('certModal').classList.remove('flex');
    document.body.style.overflow = 'auto';
}
document.addEventListener('DOMContentLoaded', loadCertificates);
window.addEventListener('aj:data-updated', loadCertificates);
