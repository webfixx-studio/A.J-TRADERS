// TypeScript-converted inline script; DOM/UI behavior intentionally preserved.
// @ts-nocheck
function loadSharedContent() {
    const c = JSON.parse(localStorage.getItem('aj_content') || '{}');
    const mobile = c.mobile || '9999055398';
    const email = c.email || 'ajtraders01052026@gmail.com';
    const address = c.address || 'Plot No. 123, Industrial Area, Faridabad, Haryana - 121001';
    const insta = c.instagram || 'https://instagram.com/';
    const ytChannel = c.youtubeChannel || 'https://youtube.com/';
    const fb = c.facebook || 'https://facebook.com/';
    document.querySelectorAll('#footerMobile, .contact-mobile').forEach(el => { if (el)
        el.textContent = '+91 ' + mobile.replace('+91', '').trim(); });
    document.querySelectorAll('#footerEmail, .contact-email').forEach(el => { if (el)
        el.textContent = email; });
    document.querySelectorAll('#footerAddress, .contact-address').forEach(el => { if (el)
        el.textContent = address; });
    document.querySelectorAll('a[href^="tel:"]').forEach(a => a.href = 'tel:+91' + mobile.replace(/[^0-9]/g, ''));
    document.querySelectorAll('.wa-link, .contact-whatsapp, a[href*="wa.me"]').forEach(a => a.href = 'https://wa.me/' + mobile.replace(/[^0-9]/g, ''));
    const setSocial = (id, url) => { const el = document.getElementById(id); if (el)
        el.href = url; };
    setSocial('socialInstagram', insta);
    setSocial('socialInstagram2', insta);
    setSocial('socialYoutube', ytChannel);
    setSocial('socialYoutube2', ytChannel);
    setSocial('socialFacebook', fb);
    setSocial('socialFacebook2', fb);
    // CEO
    if (c.ceoName) {
        const el = document.getElementById('ceoName');
        if (el)
            el.textContent = c.ceoName;
    }
    if (c.ceoBio) {
        const el = document.getElementById('ceoBio');
        if (el)
            el.textContent = c.ceoBio;
    }
    if (c.ceoPhoto || c.img_ceo) {
        const el = document.getElementById('ceoPhotoImg');
        if (el)
            el.src = c.ceoPhoto || c.img_ceo;
    }
    // Hero Images - Each Page Has Its Own Editable Hero
    const heroMap = {
        'hero_home': 'img_hero_home',
        'hero_products': 'img_hero_products',
        'hero_about': 'img_hero_about',
        'hero_contact': 'img_hero_contact'
    };
    Object.entries(heroMap).forEach(([domId, storageKey]) => {
        const hero = document.getElementById(domId);
        if (hero && c[storageKey]) {
            hero.style.setProperty('--hero-img', `url('${c[storageKey]}')`);
        }
    });
    // Product Images
    ['img_prod_05', 'img_prod_10', 'img_prod_12', 'img_prod_15', 'img_prod_tape'].forEach(key => {
        if (c[key]) {
            const el = document.getElementById(key);
            if (el) {
                el.src = c[key];
                el.classList.remove('hidden');
                const ic = document.getElementById('icon_' + key.replace('img_', ''));
                if (ic)
                    ic.classList.add('hidden');
            }
        }
    });
    if (c.img_about) {
        const el = document.getElementById('aboutMainImg');
        if (el)
            el.src = c.img_about;
    }
    if (c.youtubeEmbed || c.youtube) {
        const el = document.getElementById('youtubeEmbed');
        if (el)
            el.src = c.youtubeEmbed || c.youtube;
    }
    const y = new Date().getFullYear();
    const fy = document.getElementById('footerYear');
    if (fy)
        fy.textContent = y;
}
document.addEventListener('DOMContentLoaded', loadSharedContent);
