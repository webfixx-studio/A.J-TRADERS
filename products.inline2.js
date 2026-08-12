// TypeScript-converted inline script; DOM/UI behavior intentionally preserved.
// @ts-nocheck
document.getElementById('mBtn')?.addEventListener('click', function () { document.getElementById('mMenu').classList.toggle('hidden'); });
try {
    const canvas = document.getElementById('canvas-3d');
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer({ canvas: canvas, alpha: true, antialias: true });
    renderer.setSize(window.innerWidth, window.innerHeight);
    const geometry = new THREE.BufferGeometry();
    const particles = 150;
    const positions = new Float32Array(particles * 3);
    for (let i = 0; i < particles * 3; i++)
        positions[i] = (Math.random() - 0.5) * 15;
    geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    const material = new THREE.PointsMaterial({ size: 0.05, color: 0xD4AF37, transparent: true, opacity: 0.5 });
    const points = new THREE.Points(geometry, material);
    scene.add(points);
    camera.position.z = 5;
    function animate() { requestAnimationFrame(animate); points.rotation.x += 0.0005; points.rotation.y += 0.0008; renderer.render(scene, camera); }
    animate();
}
catch (e) { }
function loadShared() { var c = JSON.parse(localStorage.getItem('aj_content') || '{}'); var mob = c.mobile || '9999055398'; var email = c.email || 'ajtraders01052026@gmail.com'; var addr = c.address || 'Plot No. 123, Industrial Area, Faridabad, Haryana - 121001'; document.querySelectorAll('.contact-mobile,#footerMobile').forEach(function (e) { if (e)
    e.textContent = '+91 ' + mob.replace('+91', '').trim(); }); document.querySelectorAll('.contact-email,#footerEmail').forEach(function (e) { if (e)
    e.textContent = email; }); document.querySelectorAll('.contact-address,#footerAddress').forEach(function (e) { if (e)
    e.textContent = addr; }); document.querySelectorAll('a[href^="tel:"]').forEach(function (a) { a.href = 'tel:+91' + mob.replace(/[^0-9]/g, ''); }); document.querySelectorAll('a[href*="wa.me"],.wa-link').forEach(function (a) { a.href = 'https://wa.me/' + mob.replace(/[^0-9]/g, ''); }); var set = function (id, url) { var el = document.getElementById(id); if (el)
    el.href = url; }; set('socialInstagram', c.instagram || 'https://instagram.com/'); set('socialYoutube', c.youtubeChannel || 'https://youtube.com/'); set('socialFacebook', c.facebook || 'https://facebook.com/'); var heroes = { 'hero_home': 'img_hero_home', 'hero_products': 'img_hero_products', 'hero_services': 'img_hero_services', 'hero_about': 'img_hero_about', 'hero_certificates': 'img_hero_certificates', 'hero_contact': 'img_hero_contact', 'hero_faq': 'img_hero_faq', 'hero_gallery': 'img_hero_gallery', 'hero_blog': 'img_hero_blog', 'hero_clients': 'img_hero_clients' }; Object.entries(heroes).forEach(function (pair) { var dom = pair[0]; var store = pair[1]; var h = document.getElementById(dom); if (h && c[store]) {
    h.style.setProperty('--hero-img', "url('" + c[store] + "')");
    h.style.background = "linear-gradient(180deg,rgba(5,11,20,0.88) 0%,rgba(11,19,37,0.95) 100%),url('" + c[store] + "') center/cover no-repeat fixed";
} }); ['img_prod_05', 'img_prod_10', 'img_prod_12', 'img_prod_15', 'img_prod_tape', 'img_about'].forEach(function (k) { if (c[k]) {
    var el = document.getElementById(k);
    if (el) {
        el.src = c[k];
        el.classList.remove('hidden');
    }
} }); if (c.youtube) {
    var el = document.getElementById('youtubeEmbed');
    if (el)
        el.src = c.youtube;
} var y = new Date().getFullYear(); var fy = document.getElementById('footerYear'); if (fy)
    fy.textContent = y; try {
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
catch (e) { } }
document.addEventListener('DOMContentLoaded', loadShared);
