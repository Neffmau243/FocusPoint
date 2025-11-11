// Navegación suave
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            const offsetTop = target.offsetTop - 80;
            window.scrollTo({
                top: offsetTop,
                behavior: 'smooth'
            });
            // Cerrar menú móvil si está abierto
            navMenu.classList.remove('active');
            navToggle.classList.remove('active');
        }
    });
});

// Toggle menú móvil
const navToggle = document.getElementById('navToggle');
const navMenu = document.getElementById('navMenu');

navToggle.addEventListener('click', () => {
    navMenu.classList.toggle('active');
    navToggle.classList.toggle('active');
});

// Barra de búsqueda
const searchBtn = document.getElementById('searchBtn');
const searchBar = document.getElementById('searchBar');
const closeSearch = document.getElementById('closeSearch');
const searchInput = document.getElementById('searchInput');

searchBtn.addEventListener('click', () => {
    searchBar.classList.add('active');
    setTimeout(() => searchInput.focus(), 400);
});

closeSearch.addEventListener('click', () => {
    searchBar.classList.remove('active');
    searchInput.value = '';
});

// Cerrar búsqueda con ESC
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && searchBar.classList.contains('active')) {
        searchBar.classList.remove('active');
        searchInput.value = '';
    }
});

// Navbar con scroll
const navbar = document.querySelector('.navbar');
let lastScroll = 0;

window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;
    
    if (currentScroll > 100) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
    
    lastScroll = currentScroll;
});

// Activar link de navegación según sección visible
const sections = document.querySelectorAll('section[id]');
const navLinks = document.querySelectorAll('.nav-link');

function activateNavLink() {
    let scrollY = window.pageYOffset;
    
    sections.forEach(section => {
        const sectionHeight = section.offsetHeight;
        const sectionTop = section.offsetTop - 150;
        const sectionId = section.getAttribute('id');
        
        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
            navLinks.forEach(link => {
                link.classList.remove('active');
                if (link.getAttribute('href') === `#${sectionId}`) {
                    link.classList.add('active');
                }
            });
        }
    });
}

window.addEventListener('scroll', activateNavLink);

// Formulario de reservas
const reservationForm = document.getElementById('reservationForm');

reservationForm.addEventListener('submit', (e) => {
    e.preventDefault();
    
    // Animación de envío
    const submitBtn = reservationForm.querySelector('button[type="submit"]');
    const originalText = submitBtn.textContent;
    submitBtn.textContent = 'Enviando...';
    submitBtn.disabled = true;
    
    // Simular envío (aquí puedes agregar tu lógica de envío real)
    setTimeout(() => {
        submitBtn.textContent = '¡Enviado! ✓';
        submitBtn.style.backgroundColor = 'var(--color-acento)';
        
        // Resetear formulario
        setTimeout(() => {
            reservationForm.reset();
            submitBtn.textContent = originalText;
            submitBtn.disabled = false;
            submitBtn.style.backgroundColor = '';
            
            // Mostrar mensaje de confirmación
            alert('¡Gracias por tu reserva! Te contactaremos pronto.');
        }, 2000);
    }, 1500);
});

// Animación de aparición de elementos al hacer scroll
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

// Aplicar animación a las tarjetas de sesión
document.querySelectorAll('.session-card').forEach((card, index) => {
    card.style.opacity = '0';
    card.style.transform = 'translateY(30px)';
    card.style.transition = `all 0.6s ease ${index * 0.2}s`;
    observer.observe(card);
});

// Efecto parallax suave solo en imágenes de sesiones (sin romper layout)
window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    
    // Parallax en las imágenes de las tarjetas de sesión
    document.querySelectorAll('.session-image img').forEach(img => {
        const rect = img.getBoundingClientRect();
        const scrollPercent = (window.innerHeight - rect.top) / window.innerHeight;
        
        if (rect.top < window.innerHeight && rect.bottom > 0) {
            img.style.transform = `translateY(${scrollPercent * 20}px) scale(1.1)`;
        }
    });
    
    // Parallax suave en la imagen del About (mucho más sutil)
    const aboutImage = document.querySelector('.about-image img');
    if (aboutImage) {
        const rect = aboutImage.getBoundingClientRect();
        const scrollPercent = (window.innerHeight - rect.top) / window.innerHeight;
        
        if (rect.top < window.innerHeight && rect.bottom > 0) {
            aboutImage.style.transform = `translateY(${scrollPercent * 10}px)`;
        }
    }
    
    // Parallax en el hero background
    const hero = document.querySelector('.hero');
    if (hero && scrolled < hero.offsetHeight) {
        hero.style.backgroundPositionY = `${scrolled * 0.5}px`;
    }
});

// Búsqueda en tiempo real (simulado)
searchInput.addEventListener('input', (e) => {
    const searchTerm = e.target.value.toLowerCase();
    
    if (searchTerm.length > 2) {
        console.log(`Buscando: ${searchTerm}`);
        // Aquí puedes implementar la lógica de búsqueda real
        // Por ejemplo, filtrar contenido de la página
    }
});

// Cerrar menú móvil al hacer clic fuera
document.addEventListener('click', (e) => {
    if (navMenu.classList.contains('active')) {
        if (!navMenu.contains(e.target) && !navToggle.contains(e.target)) {
            navMenu.classList.remove('active');
            navToggle.classList.remove('active');
        }
    }
});

console.log('ChristianDjFoto - Website loaded successfully! 📸');