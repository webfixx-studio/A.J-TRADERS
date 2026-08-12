// TypeScript-converted inline script; DOM/UI behavior intentionally preserved.
// @ts-nocheck
function getDefaultGallery() { return [{ title: "Warehouse Ready Stock", img: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=600" }, { title: "Bubble Wrap 1.0m", img: "https://images.unsplash.com/photo-1553413077-190dd305871c?w=600" }, { title: "Bulk Dispatch", img: "https://images.unsplash.com/photo-1605745341112-85968b19335b?w=600" }, { title: "B2B Supply", img: "https://images.unsplash.com/photo-1586528116493-a029325540fa?w=600" }, { title: "Godown Stock", img: "https://images.unsplash.com/photo-1590499035675-23094821f283?w=600" }, { title: "PAN India Delivery", img: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=600" }]; }
function localEsc(v) { return String(v == null ? '' : v).replace(/[&<>'"]/g, function (c) { if (c === '&')
    return '&amp;'; if (c === '<')
    return '&lt;'; if (c === '>')
    return '&gt;'; if (c === "'")
    return '&#39;'; return '&quot;'; }); }
function loadGallery() { var E = (window.AJShared && AJShared.escapeHTML) ? AJShared.escapeHTML : localEsc; var s = localStorage.getItem('aj_gallery'); var g = s ? JSON.parse(s) : getDefaultGallery(); if (!s)
    localStorage.setItem('aj_gallery', JSON.stringify(g)); var grid = document.getElementById('galleryGrid'); var empty = document.getElementById('galleryEmpty'); if (!g.length) {
    grid.classList.add('hidden');
    empty.classList.remove('hidden');
    return;
} grid.classList.remove('hidden'); empty.classList.add('hidden'); grid.innerHTML = g.map(function (it) { var img = E(it.img), title = E(it.title), rawImg = encodeURIComponent(String(it.img || '')), rawTitle = encodeURIComponent(String(it.title || '')); return '<div class="glass rounded-3xl overflow-hidden cursor-pointer group" onclick="openModal(decodeURIComponent(\'' + rawImg + '\'),decodeURIComponent(\'' + rawTitle + '\'))"><div class="h-56 bg-slate-950 overflow-hidden"><img src="' + img + '" alt="' + title + '" loading="lazy" class="w-full h-full object-cover group-hover:scale-110 transition duration-500"></div><div class="p-4"><h3 class="font-bold text-sm">' + title + '</h3><p class="text-[10px] text-slate-400 mt-1">Click to view</p></div></div>'; }).join(''); }
function openModal(img, title) { document.getElementById('modalImg').src = img; document.getElementById('modalTitle').textContent = title; document.getElementById('imageModal').classList.remove('hidden'); document.getElementById('imageModal').classList.add('flex'); }
function closeModal() { document.getElementById('imageModal').classList.add('hidden'); document.getElementById('imageModal').classList.remove('flex'); }
function loadShared() { var c = JSON.parse(localStorage.getItem('aj_content') || '{}'); var mob = c.mobile || '9999055398'; var email = c.email || 'ajtraders01052026@gmail.com'; var addr = c.address || 'Plot No. 123, Faridabad'; var insta = c.instagram || '#'; var yt = c.youtubeChannel || '#'; var fb = c.facebook || '#'; document.querySelectorAll('.contact-mobile,#footerMobile').forEach(function (e) { e.textContent = '+91 ' + mob; }); document.querySelectorAll('.contact-email,#footerEmail').forEach(function (e) { e.textContent = email; }); document.querySelectorAll('.contact-address,#footerAddress').forEach(function (e) { e.textContent = addr; }); var set = function (id, url) { var el = document.getElementById(id); if (el)
    el.href = url; }; set('socialInstagram', insta); set('socialYoutube', yt); set('socialFacebook', fb); var hero = document.getElementById('hero_gallery'); if (hero && c.img_hero_gallery)
    hero.style.setProperty('--hero-img', "url('" + c.img_hero_gallery + "')"); var y = new Date().getFullYear(); var fy = document.getElementById('footerYear'); if (fy)
    fy.textContent = y; }
document.addEventListener('DOMContentLoaded', function () { loadGallery(); loadShared(); });
window.addEventListener('aj:data-updated', function () { loadGallery(); loadShared(); });
