// TypeScript-converted inline script; DOM/UI behavior intentionally preserved.
// @ts-nocheck
function fixedExtractYT(url) { return (window.AJShared && AJShared.extractYouTubeId) ? AJShared.extractYouTubeId(url) : null; }
function loadSharedFixed() {
    var c = JSON.parse(localStorage.getItem('aj_content') || '{}');
    var ytId = c.youtubeRaw ? fixedExtractYT(c.youtubeRaw) : (c.youtube ? fixedExtractYT(c.youtube) : null);
    var embedUrl = ytId ? 'https://www.youtube.com/embed/' + ytId + '?rel=0' : (c.youtubeEmbed || c.youtube);
    if (embedUrl) {
        var el = document.getElementById('youtubeEmbed');
        if (el)
            el.src = embedUrl;
    }
    // Also handle contact info
    var mob = c.mobile || '9999055398';
    document.querySelectorAll('.contact-mobile,#footerMobile').forEach(function (e) { if (e)
        e.textContent = '+91 ' + mob; });
}
window.loadShared = loadSharedFixed;
document.addEventListener('DOMContentLoaded', loadSharedFixed);
window.addEventListener('aj:data-updated', loadSharedFixed);
