// TypeScript-converted inline script; DOM/UI behavior intentionally preserved.
// @ts-nocheck
async function handleContactSubmit(e) {
    e.preventDefault();
    const lead = { id: AJShared.newLeadId(), name: document.getElementById('inqName').value, mobile: document.getElementById('inqMobile').value, email: document.getElementById('inqEmail').value, message: document.getElementById('inqMessage').value, date: new Date().toLocaleString(), source: 'contact.html' };
    try {
        await AJShared.addLead(lead);
        alert('Thank you! Your inquiry has been received. Our team will contact you soon.');
        e.target.reset();
    }
    catch (err) {
        console.error(err);
        alert('We could not submit your inquiry right now. Please try again or use WhatsApp.');
    }
}
function loadSharedContent() {
    const c = JSON.parse(localStorage.getItem('aj_content') || '{}');
    const mobile = c.mobile || '9999055398';
    const email = c.email || 'ajtraders01052026@gmail.com';
    const address = c.address || 'Plot No. 123, Industrial Area, Faridabad, Haryana - 121001';
    const insta = c.instagram || 'https://instagram.com/';
    const yt = c.youtubeChannel || 'https://youtube.com/';
    const fb = c.facebook || 'https://facebook.com/';
    document.querySelectorAll('.contact-mobile').forEach(el => el.textContent = '+91 ' + mobile);
    document.querySelectorAll('.contact-email').forEach(el => el.textContent = email);
    document.querySelectorAll('.contact-address').forEach(el => el.textContent = address);
    document.querySelectorAll('a[href^="tel:"]').forEach(a => a.href = 'tel:+91' + mobile.replace(/[^0-9]/g, ''));
    document.querySelectorAll('a[href*="wa.me"]').forEach(a => a.href = 'https://wa.me/' + mobile.replace(/[^0-9]/g, ''));
    const setSocial = (id, url) => { const el = document.getElementById(id); if (el)
        el.href = url; };
    setSocial('socialInstagram', insta);
    setSocial('socialInstagram2', insta);
    setSocial('socialYoutube', yt);
    setSocial('socialYoutube2', yt);
    setSocial('socialFacebook', fb);
    setSocial('socialFacebook2', fb);
    const y = new Date().getFullYear();
    const fy = document.getElementById('footerYear');
    if (fy)
        fy.textContent = y;
}
document.addEventListener('DOMContentLoaded', loadSharedContent);
