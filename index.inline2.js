// TypeScript-converted inline script; DOM/UI behavior intentionally preserved.
// @ts-nocheck
const canvas = document.getElementById('canvas-3d');
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
const renderer = new THREE.WebGLRenderer({ canvas: canvas, alpha: true, antialias: true });
renderer.setSize(window.innerWidth, window.innerHeight);
renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
const geometry = new THREE.SphereGeometry(0.3, 16, 16);
const material = new THREE.MeshBasicMaterial({ color: 0xD4AF37, wireframe: true });
const group = new THREE.Group();
for (let i = 0; i < 25; i++) {
    const mesh = new THREE.Mesh(geometry, material);
    mesh.position.x = (Math.random() - 0.5) * 15;
    mesh.position.y = (Math.random() - 0.5) * 15;
    mesh.position.z = (Math.random() - 0.5) * 10;
    group.add(mesh);
}
scene.add(group);
camera.position.z = 6;
function animate() {
    requestAnimationFrame(animate);
    group.rotation.y += 0.0015;
    group.rotation.x += 0.001;
    renderer.render(scene, camera);
}
animate();
window.addEventListener('resize', () => {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
});
// --- EDITABLE CONTENT LOAD FROM localStorage (shared with admin.html) ---
loadSharedContent();
// --- SECRET ADMIN REDIRECT (separate file) ---
function checkSecretAdmin() {
    if (location.hash === '#aj-traders-secure-admin') {
        window.location.href = 'admin.html';
    }
}
window.addEventListener('hashchange', checkSecretAdmin);
window.addEventListener('keydown', e => { if (e.ctrlKey && e.shiftKey && e.key.toLowerCase() === 'a') {
    window.location.href = 'admin.html';
} });
checkSecretAdmin();
// Canonical lead handler is provided by aj-shared-sync.js.
window.handleInquirySubmit = window.handleFormSubmit;
