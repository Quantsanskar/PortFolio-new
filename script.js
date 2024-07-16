document.addEventListener('DOMContentLoaded', function () {
    const menuToggle = document.querySelector('.menu-toggle');
    const menuOverlay = document.querySelector('.menu-overlay');
    const closeMenu = document.querySelector('.close-menu');
    const body = document.body;
    const heroSection = document.getElementById('heroSection');
    const about = document.getElementById('about');
    const skills = document.getElementById('skills');
    const projects = document.getElementById('projects');

    menuToggle.addEventListener('click', () => {
        menuOverlay.classList.add('active');
        body.classList.add('menu-open');
        heroSection.style.opacity = '0';
        heroSection.style.visibility = 'hidden';
    });

    closeMenu.addEventListener('click', () => {
        menuOverlay.classList.remove('active');
        body.classList.remove('menu-open');
        heroSection.style.opacity = '1';
        heroSection.style.visibility = 'visible';
    });
    menuToggle.addEventListener('click', () => {
        menuOverlay.classList.add('active');
        body.classList.add('menu-open');
        about.style.opacity = '0';
        about.style.visibility = 'hidden';
    });

    closeMenu.addEventListener('click', () => {
        menuOverlay.classList.remove('active');
        body.classList.remove('menu-open');
        about.style.opacity = '1';
        about.style.visibility = 'visible';
    });
    menuToggle.addEventListener('click', () => {
        menuOverlay.classList.add('active');
        body.classList.add('menu-open');
        skills.style.opacity = '0';
        skills.style.visibility = 'hidden';
    });

    closeMenu.addEventListener('click', () => {
        menuOverlay.classList.remove('active');
        body.classList.remove('menu-open');
        skills.style.opacity = '1';
        skills.style.visibility = 'visible';
    });
    menuToggle.addEventListener('click', () => {
        menuOverlay.classList.add('active');
        body.classList.add('menu-open');
        projects.style.opacity = '0';
        projects.style.visibility = 'hidden';
    });

    closeMenu.addEventListener('click', () => {
        menuOverlay.classList.remove('active');
        body.classList.remove('menu-open');
        projects.style.opacity = '1';
        projects.style.visibility = 'visible';
    });
});