document.addEventListener('DOMContentLoaded', function() {
    const navToggle = document.querySelector('.nav-toggle');
    const nav = document.querySelector('.nav');

    if (navToggle && nav) {
        navToggle.addEventListener('click', function() {
            nav.classList.toggle('active');
            // Update aria-expanded attribute for accessibility
            const expanded = nav.classList.contains('active');
            navToggle.setAttribute('aria-expanded', expanded);
        });
    }
});
