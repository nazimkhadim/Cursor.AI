(function () {
    'use strict';

    var header = document.getElementById('header');
    var menuToggle = document.getElementById('menuToggle');
    var navMobile = document.getElementById('navMobile');

    // Create overlay for mobile menu
    var overlay = document.createElement('div');
    overlay.className = 'nav-overlay';
    overlay.setAttribute('aria-hidden', 'true');
    document.body.appendChild(overlay);

    // Toggle mobile menu open/close
    function toggleMobileMenu() {
        var isOpen = navMobile.classList.contains('open');
        navMobile.classList.toggle('open');
        menuToggle.classList.toggle('active');
        overlay.classList.toggle('visible');
        navMobile.setAttribute('aria-hidden', !isOpen);
        overlay.setAttribute('aria-hidden', isOpen);
        document.body.style.overflow = isOpen ? '' : 'hidden';
    }

    // Close mobile menu (e.g. after link click or overlay click)
    function closeMobileMenu() {
        navMobile.classList.remove('open');
        menuToggle.classList.remove('active');
        overlay.classList.remove('visible');
        navMobile.setAttribute('aria-hidden', 'true');
        overlay.setAttribute('aria-hidden', 'true');
        document.body.style.overflow = '';
    }

    // Hamburger click
    if (menuToggle) {
        menuToggle.addEventListener('click', toggleMobileMenu);
    }

    // Overlay click closes menu
    overlay.addEventListener('click', closeMobileMenu);

    // Close menu when a mobile nav link is clicked (for in-page anchors)
    var mobileLinks = document.querySelectorAll('.nav-link-mobile');
    mobileLinks.forEach(function (link) {
        link.addEventListener('click', closeMobileMenu);
    });

    // Optional: add scrolled class to header for subtle style change on scroll
    function onScroll() {
        if (window.scrollY > 20) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    }

    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
})();
