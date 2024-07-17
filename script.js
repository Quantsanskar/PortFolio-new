document.addEventListener('DOMContentLoaded', function () {
    const menuToggle = document.querySelector('.menu-toggle');
    const menuOverlay = document.querySelector('.menu-overlay');
    const closeMenu = document.querySelector('.close-menu');
    const body = document.body;
    const sections = ['heroSection', 'about', 'skills', 'projects', 'contact'];

    menuToggle.addEventListener('click', () => {
        menuOverlay.classList.add('active');
        body.classList.add('menu-open');
        sections.forEach(section => {
            document.getElementById(section).style.opacity = '0';
            document.getElementById(section).style.visibility = 'hidden';
        });
    });

    closeMenu.addEventListener('click', () => {
        menuOverlay.classList.remove('active');
        body.classList.remove('menu-open');
        sections.forEach(section => {
            document.getElementById(section).style.opacity = '1';
            document.getElementById(section).style.visibility = 'visible';
        });
    });

    // Smooth scroll
    document.querySelectorAll('.menu a').forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const targetId = link.getAttribute('href').substring(1);
            document.getElementById(targetId).scrollIntoView({
                behavior: 'smooth'
            });
            menuOverlay.classList.remove('active');
            body.classList.remove('menu-open');
            sections.forEach(section => {
                document.getElementById(section).style.opacity = '1';
                document.getElementById(section).style.visibility = 'visible';
            });
        });
    });
});
