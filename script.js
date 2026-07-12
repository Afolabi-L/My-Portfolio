const btns = document.querySelectorAll('.btn-primary, .btn-ghost');

btns.forEach(btn => {
    btn.addEventListener('click', () => {
        btn.classList.add('btn-pressed');
        setTimeout(() => {
            btn.classList.remove('btn-pressed');
        }, 200);
    });
});
