// TypeScript-converted inline script; DOM/UI behavior intentionally preserved.
// @ts-nocheck
function getDefaultServices() {
    return [
        { icon: "fa-boxes-stacked", title: "Bubble Wrap Rolls Wholesale", desc: "0.5m to 1.5m small & large bubble, all GSM (40-120 GSM) in ready stock. Same day dispatch from Faridabad godown. Low MOQ from 1 roll to 1000+ rolls. Best wholesale rates PAN India with GST invoice. For e-commerce, electronics, furniture packaging.", img: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=600&q=80" },
        { icon: "fa-tape", title: "BOPP Tapes & Packaging Tapes Wholesale", desc: "All sizes BOPP tapes (1 inch to 3 inch) at wholesale rates. Strong adhesion, transparent & brown tapes for e-commerce & industrial packing. Ready stock, same day dispatch, PAN India delivery. Best rates for Amazon, Flipkart sellers.", img: "https://images.unsplash.com/photo-1605745341112-85968b19335b?w=600&q=80" },
        { icon: "fa-box-open", title: "Corrugated Boxes & Cartons Wholesale", desc: "All sizes corrugated boxes (3 ply, 5 ply) for e-commerce, Amazon, Flipkart sellers. Custom sizes available at wholesale rates. Ready stock in Faridabad, same day dispatch. Best quality at genuine wholesale prices with GST invoice.", img: "https://images.unsplash.com/photo-1553413077-190dd305871c?w=600&q=80" },
        { icon: "fa-film", title: "Stretch Film & Wrapping Film Wholesale", desc: "Stretch wrap film (15 micron to 30 micron) for pallet wrapping, industrial use. Best wholesale prices, ready stock, same day dispatch from Faridabad godown. PAN India delivery with GST invoice. For manufacturers & warehouses.", img: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=600&q=80" },
        { icon: "fa-bag-shopping", title: "Courier Bags & E-commerce Bags Wholesale", desc: "POD courier bags, tamper proof bags, e-commerce poly bags for Amazon, Flipkart sellers at wholesale rates. All sizes available (8x10 to 24x30). Ready stock, same day dispatch, best wholesale rates PAN India.", img: "https://images.unsplash.com/photo-1605733513597-a8f8341084e1?w=600&q=80" },
        { icon: "fa-truck-ramp-box", title: "Bulk Supply & PAN India Delivery Service", desc: "From 1 roll to 1000+ rolls bulk supply. Same day dispatch from Faridabad godown, 1-3 days courier delivery, 2-5 days transport delivery PAN India. GST invoice for all orders. 5000+ B2B clients trusted across Delhi, Gurgaon, Noida, Mumbai, Bangalore.", img: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=600&q=80" }
    ];
}
function getDefaultWhyChoose() {
    return [
        { icon: "fa-handshake", title: "We Are Wholesaler, Not Factory - Factory Rates Without MOQ", desc: "We buy in huge bulk from factories, so you get factory rates without factory MOQ (50-100 rolls) & waiting time (3-5 days). Our MOQ is just 1 roll, dispatch same day from Faridabad godown with GST invoice." },
        { icon: "fa-clock", title: "Same Day Dispatch - Order Before 2 PM", desc: "Ready stock in Faridabad godown - 0.5m to 1.5m all sizes, all GSM. Order before 2 PM, dispatch same day with tracking ID. Courier delivery 1-3 days, transport 2-5 days PAN India." },
        { icon: "fa-indian-rupee-sign", title: "Genuine Wholesale Rates - Low MOQ From 1 Roll", desc: "No middle man. Direct factory purchase in bulk = best wholesale rates for you. Low MOQ from 1 roll to 1000+ rolls. Best rates guaranteed for B2B clients, e-commerce sellers, Amazon, Flipkart sellers." },
        { icon: "fa-certificate", title: "Quality Checked - GSM Verified - Replacement Guarantee", desc: "Each roll checked for GSM (40-120 GSM), width (0.5m to 1.5m), bubble quality, length (100m) before warehousing. Replacement guarantee for any manufacturing defect within 7 days." },
        { icon: "fa-map-location-dot", title: "PAN India Delivery - 5000+ B2B Clients Trusted", desc: "Courier 1-3 days, Transport 2-5 days. We supply to 5000+ B2B clients across India - Delhi, Gurgaon, Noida, Faridabad, Mumbai, Bangalore, Hyderabad, Chennai, Pune, Kolkata. Same day dispatch from Faridabad." },
        { icon: "fa-file-invoice", title: "GST Invoice & 24x7 Support - Call 9999055398", desc: "Proper GST invoice for all orders for your business accounting. Call/WhatsApp support on 9999055398 - Mon-Sat 9AM to 8PM. Same day rate quotes within 30 minutes via WhatsApp." }
    ];
}
function getDefaultProcess() {
    return [
        { step: 1, title: "Send Inquiry Via Call, WhatsApp, or Contact Form", desc: "Tell us your requirement - Size (0.5m to 1.5m), GSM (40-120 GSM), Quantity (1 roll to 1000+ rolls), Delivery Location (PAN India). Call +91 9999055398 or WhatsApp or fill contact form." },
        { step: 2, title: "Get Best Wholesale Rate in 30 Minutes", desc: "We give you best wholesale rate within 30 minutes based on quantity, size, GSM, delivery location. Compare with factory rates - we give factory rates without factory MOQ." },
        { step: 3, title: "Confirm Order & Make Advance Payment", desc: "Confirm your order, make advance payment via UPI, Bank Transfer, Cash. We provide GST invoice for your business. Payment receipt shared on WhatsApp." },
        { step: 4, title: "Same Day Dispatch & Fast Delivery PAN India", desc: "We dispatch same day from Faridabad godown with tracking ID shared on WhatsApp. Courier delivery 1-3 days, transport delivery 2-5 days PAN India. Delivery confirmation with POD." }
    ];
}
function localEsc(v) { return String(v == null ? '' : v).replace(/[&<>'"]/g, function (c) { if (c === '&')
    return '&amp;'; if (c === '<')
    return '&lt;'; if (c === '>')
    return '&gt;'; if (c === "'")
    return '&#39;'; return '&quot;'; }); }
function loadServices() {
    var E = (window.AJShared && AJShared.escapeHTML) ? AJShared.escapeHTML : localEsc;
    var s = localStorage.getItem('aj_services');
    var services = s ? JSON.parse(s) : getDefaultServices();
    if (!s)
        localStorage.setItem('aj_services', JSON.stringify(services));
    var w = localStorage.getItem('aj_whychoose');
    var why = w ? JSON.parse(w) : getDefaultWhyChoose();
    if (!w)
        localStorage.setItem('aj_whychoose', JSON.stringify(why));
    var p = localStorage.getItem('aj_process');
    var process = p ? JSON.parse(p) : getDefaultProcess();
    if (!p)
        localStorage.setItem('aj_process', JSON.stringify(process));
    document.getElementById('servicesGrid').innerHTML = services.map(function (it) {
        return '<div class="glass-card-3d p-6 rounded-3xl group">' +
            '<div class="w-12 h-12 rounded-full bg-brand-gold/20 flex items-center justify-center text-brand-gold text-xl group-hover:bg-brand-gold group-hover:text-brand-navy transition"><i class="fa-solid ' + E(it.icon) + '"></i></div>' +
            '<div class="h-40 mt-4 bg-slate-950 rounded-2xl overflow-hidden"><img src="' + E(it.img) + '" alt="' + E(it.title) + '" loading="lazy" class="w-full h-full object-cover group-hover:scale-110 transition duration-500"></div>' +
            '<h3 class="font-bold text-sm mt-4 font-heading leading-tight">' + E(it.title) + '</h3>' +
            '<p class="text-[11px] text-slate-400 mt-2 leading-relaxed">' + E(it.desc) + '</p>' +
            '<div class="flex gap-2 mt-4"><a href="contact.html" class="flex-1 gold-pill-btn text-brand-navy text-center font-bold py-2 rounded-full text-[11px]">Get Rate</a><a href="products.html" class="flex-1 bg-slate-900 border border-slate-700 text-center font-bold py-2 rounded-full text-[11px] hover:border-brand-gold transition">View Stock</a></div>' +
            '</div>';
    }).join('');
    document.getElementById('whyChooseUsGrid').innerHTML = why.map(function (it) {
        return '<div class="glass p-5 rounded-2xl hover:border-brand-gold/40 transition group">' +
            '<div class="w-10 h-10 rounded-full bg-brand-gold/20 flex items-center justify-center text-brand-gold group-hover:bg-brand-gold group-hover:text-brand-navy transition"><i class="fa-solid ' + E(it.icon) + '"></i></div>' +
            '<h4 class="font-bold text-sm mt-3 font-heading">' + E(it.title) + '</h4>' +
            '<p class="text-[11px] text-slate-400 mt-2 leading-relaxed">' + E(it.desc) + '</p>' +
            '</div>';
    }).join('');
    document.getElementById('processSteps').innerHTML = process.map(function (it) {
        return '<div class="flex gap-4">' +
            '<div class="w-10 h-10 rounded-full bg-brand-gold text-brand-navy flex items-center justify-center font-bold shrink-0 text-sm">' + E(it.step) + '</div>' +
            '<div><div class="font-bold text-sm font-heading">' + E(it.title) + '</div><div class="text-[11px] text-slate-400 mt-1 leading-relaxed">' + E(it.desc) + '</div></div>' +
            '</div>';
    }).join('');
}
document.addEventListener('DOMContentLoaded', loadServices);
window.addEventListener('aj:data-updated', loadServices);
