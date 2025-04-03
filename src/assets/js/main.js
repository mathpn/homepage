// Add smooth scrolling to anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Add mobile menu toggle
const nav = document.querySelector('.main-nav');
const navLinks = document.querySelector('.nav-links');

if (nav && navLinks) {
    const menuButton = document.createElement('button');
    menuButton.className = 'menu-toggle';
    menuButton.setAttribute('aria-label', 'Toggle menu');
    menuButton.innerHTML = `
        <span class="menu-icon"></span>
        <span class="menu-icon"></span>
        <span class="menu-icon"></span>
    `;

    nav.insertBefore(menuButton, navLinks);

    menuButton.addEventListener('click', () => {
        navLinks.classList.toggle('show');
        menuButton.classList.toggle('active');
    });
}

// Add lazy loading for images
document.addEventListener('DOMContentLoaded', () => {
    const images = document.querySelectorAll('img[loading="lazy"]');

    if ('loading' in HTMLImageElement.prototype) {
        // Browser supports native lazy loading
        images.forEach(img => {
            img.src = img.dataset.src;
        });
    } else {
        // Fallback for browsers that don't support lazy loading
        const imageObserver = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const img = entry.target;
                    img.src = img.dataset.src;
                    observer.unobserve(img);
                }
            });
        });

        images.forEach(img => imageObserver.observe(img));
    }
}); 