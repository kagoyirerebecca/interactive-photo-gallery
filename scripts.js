const overlays = document.querySelectorAll('.overlay');

overlays.forEach(overlay => {
    overlay.addEventListener('click', () => {
        overlay.classList.toggle('active');
        const text = overlay.querySelector('.text');
        text.style.display = text.style.display === 'block' ? 'none' : 'block';
    });
});
