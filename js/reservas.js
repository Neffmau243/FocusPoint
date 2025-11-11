// JavaScript específico para la página Reservas

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

// Animar elementos del formulario
const reservasContainer = document.querySelector('.reservas-container');
if (reservasContainer) {
    reservasContainer.style.opacity = '0';
    reservasContainer.style.transform = 'translateY(30px)';
    reservasContainer.style.transition = 'all 0.8s ease';
    observer.observe(reservasContainer);
}

// Manejo del formulario
const reservationForm = document.getElementById('reservationForm');
const successMessage = document.querySelector('.success-message');

if (reservationForm) {
    reservationForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Validación básica
        const formData = new FormData(reservationForm);
        let isValid = true;
        
        // Verificar campos requeridos
        formData.forEach((value, key) => {
            if (!value && reservationForm.querySelector(`[name="${key}"]`).hasAttribute('required')) {
                isValid = false;
            }
        });
        
        if (!isValid) {
            alert('Por favor, completa todos los campos requeridos.');
            return;
        }
        
        // Deshabilitar botón y mostrar "Enviando..."
        const submitBtn = reservationForm.querySelector('.form-submit');
        const originalText = submitBtn.textContent;
        submitBtn.textContent = 'Enviando...';
        submitBtn.disabled = true;
        
        // Simular envío (en producción, aquí harías la petición al servidor)
        setTimeout(() => {
            // Ocultar formulario y mostrar mensaje de éxito
            reservationForm.style.display = 'none';
            successMessage.classList.add('show');
            
            // Scroll suave al mensaje
            successMessage.scrollIntoView({ behavior: 'smooth', block: 'center' });
            
            // Opcional: Resetear después de 5 segundos
            setTimeout(() => {
                reservationForm.reset();
                reservationForm.style.display = 'block';
                successMessage.classList.remove('show');
                submitBtn.textContent = originalText;
                submitBtn.disabled = false;
            }, 5000);
        }, 2000);
    });
}

// Sistema de FAQ accordion
const faqQuestions = document.querySelectorAll('.faq-question');

faqQuestions.forEach(question => {
    question.addEventListener('click', () => {
        const answer = question.nextElementSibling;
        const isActive = question.classList.contains('active');
        
        // Cerrar todos los FAQs
        faqQuestions.forEach(q => {
            q.classList.remove('active');
            q.nextElementSibling.classList.remove('show');
        });
        
        // Abrir el clickeado si no estaba activo
        if (!isActive) {
            question.classList.add('active');
            answer.classList.add('show');
        }
    });
});

// Validación en tiempo real
const emailInput = document.querySelector('input[type="email"]');
const phoneInput = document.querySelector('input[type="tel"]');

if (emailInput) {
    emailInput.addEventListener('blur', function() {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (this.value && !emailRegex.test(this.value)) {
            this.style.borderColor = '#e74c3c';
        } else {
            this.style.borderColor = '';
        }
    });
}

if (phoneInput) {
    phoneInput.addEventListener('input', function() {
        // Permitir solo números, espacios, guiones y paréntesis
        this.value = this.value.replace(/[^0-9\s\-\(\)\+]/g, '');
    });
}

// Fecha mínima (hoy)
const dateInput = document.querySelector('input[type="date"]');
if (dateInput) {
    const today = new Date().toISOString().split('T')[0];
    dateInput.setAttribute('min', today);
}

// Contador de caracteres para textarea
const textarea = document.querySelector('textarea');
if (textarea) {
    const charCounter = document.createElement('div');
    charCounter.style.cssText = 'text-align: right; font-size: 0.9rem; color: var(--color-contraste); margin-top: 5px;';
    textarea.parentElement.appendChild(charCounter);
    
    const maxChars = 500;
    textarea.setAttribute('maxlength', maxChars);
    
    function updateCounter() {
        const remaining = maxChars - textarea.value.length;
        charCounter.textContent = `${textarea.value.length}/${maxChars} caracteres`;
        
        if (remaining < 50) {
            charCounter.style.color = '#e74c3c';
        } else {
            charCounter.style.color = 'var(--color-contraste)';
        }
    }
    
    textarea.addEventListener('input', updateCounter);
    updateCounter();
}

// Animación de contact items
document.querySelectorAll('.contact-item').forEach((item, index) => {
    item.style.opacity = '0';
    item.style.transform = 'translateX(-30px)';
    item.style.transition = `all 0.6s ease ${index * 0.1}s`;
    observer.observe(item);
});

// Animación de FAQ items
document.querySelectorAll('.faq-item').forEach((item, index) => {
    item.style.opacity = '0';
    item.style.transform = 'translateY(20px)';
    item.style.transition = `all 0.5s ease ${index * 0.1}s`;
    observer.observe(item);
});

console.log('Reservas page loaded! 📝📸');
