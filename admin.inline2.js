// TypeScript-converted inline script; DOM/UI behavior intentionally preserved.
// @ts-nocheck
window.addEventListener('DOMContentLoaded', async function () { try {
    if (await AJShared.isAuthorizedAdmin()) {
        document.getElementById('loginBox').classList.add('hidden');
        document.getElementById('dashboard').classList.remove('hidden');
        loadAll();
        await loadLeads();
    }
}
catch (e) {
    console.warn(e);
} });
