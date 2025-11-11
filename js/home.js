// JavaScript específico para la página Home

// Efecto parallax en el hero
window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const hero = document.querySelector('.hero');
    
    if (hero && scrolled < hero.offsetHeight) {
        hero.style.backgroundPositionY = `${scrolled * 0.5}px`;
    }
});

// Animación de aparición de elementos
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Aplicar animación a preview sections
document.querySelectorAll('.preview-content').forEach((section, index) => {
    section.style.opacity = '0';
    section.style.transform = 'translateY(30px)';
    section.style.transition = `all 0.8s ease ${index * 0.2}s`;
    observer.observe(section);
});

// Aplicar animación a gallery items
document.querySelectorAll('.gallery-item').forEach((item, index) => {
    item.style.opacity = '0';
    item.style.transform = 'translateY(30px)';
    item.style.transition = `all 0.6s ease ${index * 0.1}s`;
    observer.observe(item);
});

// Animación de CTA section
const ctaSection = document.querySelector('.cta-section');
if (ctaSection) {
    ctaSection.style.opacity = '0';
    ctaSection.style.transform = 'scale(0.95)';
    ctaSection.style.transition = 'all 0.8s ease';
    observer.observe(ctaSection);
}

console.log('Home page loaded! 🏠📸');
