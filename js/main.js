// Обработчик открытия карты
document.getElementById('startButton').addEventListener('click', function(e) {
    e.preventDefault();
    document.getElementById('mapOverlay').classList.add('active');
});

// Обработчик закрытия карты
document.getElementById('mapClose').addEventListener('click', function() {
    document.getElementById('mapOverlay').classList.remove('active');
});

// Закрытие карты по клику вне её области
document.getElementById('mapOverlay').addEventListener('click', function(e) {
    if (e.target === this) {
        this.classList.remove('active');
    }
});

// Дополнительная функциональность - плавная прокрутка для будущих разделов
document.addEventListener('DOMContentLoaded', function() {
    // Добавляем плавную прокрутку для всех внутренних ссылок
    const internalLinks = document.querySelectorAll('a[href^="#"]');
    internalLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            if (targetId !== '#') {
                const targetElement = document.querySelector(targetId);
                if (targetElement) {
                    targetElement.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                }
            }
        });
    });
    
    // Анимация появления элементов при загрузке
    const heroElements = document.querySelectorAll('.hero-section .author-name, .hero-section .subtitle, .hero-section .lead, .portrait-container, .cta-button');
    heroElements.forEach((element, index) => {
        element.style.opacity = '0';
        element.style.transform = 'translateY(20px)';
        
        setTimeout(() => {
            element.style.transition = 'opacity 0.8s ease, transform 0.8s ease';
            element.style.opacity = '1';
            element.style.transform = 'translateY(0)';
        }, index * 200);
    });
});