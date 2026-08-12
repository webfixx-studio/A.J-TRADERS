// TypeScript-converted inline script; DOM/UI behavior intentionally preserved.
// @ts-nocheck
function loadShared() {
    var c = JSON.parse(localStorage.getItem('aj_content') || '{}');
    var mob = c.mobile || '9999055398';
    var email = c.email || 'ajtraders01052026@gmail.com';
    var addr = c.address || 'Plot No. 123, Industrial Area, Faridabad, Haryana - 121001';
    var insta = c.instagram || 'https://instagram.com/';
    var yt = c.youtubeChannel || 'https://youtube.com/';
    var fb = c.facebook || 'https://facebook.com/';
    document.querySelectorAll('.contact-mobile,#footerMobile').forEach(function (e) { if (e)
        e.textContent = '+91 ' + mob.replace('+91', '').trim(); });
    document.querySelectorAll('.contact-email,#footerEmail').forEach(function (e) { if (e)
        e.textContent = email; });
    document.querySelectorAll('.contact-address,#footerAddress').forEach(function (e) { if (e)
        e.textContent = addr; });
    document.querySelectorAll('a[href^="tel:"]').forEach(function (a) { a.href = 'tel:+91' + mob.replace(/[^0-9]/g, ''); });
    document.querySelectorAll('a[href*="wa.me"],.wa-link').forEach(function (a) { a.href = 'https://wa.me/' + mob.replace(/[^0-9]/g, ''); });
    var set = function (id, url) { var el = document.getElementById(id); if (el)
        el.href = url; };
    set('socialInstagram', insta);
    set('socialYoutube', yt);
    set('socialFacebook', fb);
    if (c.ceoName) {
        var el = document.getElementById('ceoName');
        if (el)
            el.textContent = c.ceoName;
    }
    if (c.ceoBio) {
        var el = document.getElementById('ceoBio');
        if (el)
            el.textContent = c.ceoBio;
    }
    if (c.ceoPhoto) {
        var el = document.getElementById('ceoPhotoImg');
        if (el)
            el.src = c.ceoPhoto;
    }
    var heroes = { 'hero_home': 'img_hero_home', 'hero_products': 'img_hero_products', 'hero_about': 'img_hero_about', 'hero_contact': 'img_hero_contact', 'hero_faq': 'img_hero_faq', 'hero_gallery': 'img_hero_gallery', 'hero_blog': 'img_hero_blog', 'hero_clients': 'img_hero_clients' };
    Object.entries(heroes).forEach(function (pair) { var dom = pair[0]; var store = pair[1]; var h = document.getElementById(dom); if (h && c[store]) {
        h.style.setProperty('--hero-img', "url('" + c[store] + "')");
    } });
    ['img_prod_05', 'img_prod_10', 'img_prod_12', 'img_prod_15', 'img_prod_tape', 'img_about'].forEach(function (k) { if (c[k]) {
        var el = document.getElementById(k);
        if (el) {
            el.src = c[k];
            el.classList.remove('hidden');
            var ic = document.getElementById('icon_' + k.replace('img_', ''));
            if (ic)
                ic.classList.add('hidden');
        }
    } });
    if (c.youtube) {
        var el = document.getElementById('youtubeEmbed');
        if (el)
            el.src = c.youtube;
    }
    var y = new Date().getFullYear();
    var fy = document.getElementById('footerYear');
    if (fy)
        fy.textContent = y;
    // Load stats
    var stats = JSON.parse(localStorage.getItem('aj_stats') || 'null');
    if (stats) {
        var setStat = function (numId, labelId, numVal, labelVal) { var n = document.getElementById(numId); var l = document.getElementById(labelId); if (n)
            n.textContent = numVal; if (l)
            l.textContent = labelVal; };
        setStat('stat1_num', 'stat1_label', stats.s1_num, stats.s1_label);
        setStat('stat2_num', 'stat2_label', stats.s2_num, stats.s2_label);
        setStat('stat3_num', 'stat3_label', stats.s3_num, stats.s3_label);
        setStat('stat4_num', 'stat4_label', stats.s4_num, stats.s4_label);
        setStat('stat5_num', 'stat5_label', stats.s5_num, stats.s5_label);
        setStat('stat6_num', 'stat6_label', stats.s6_num, stats.s6_label);
    }
}
document.addEventListener('DOMContentLoaded', loadShared);
