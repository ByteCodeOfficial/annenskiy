// Анимация появления элементов при загрузке главной страницы
document.addEventListener('DOMContentLoaded', function() {
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
    
    // Добавляем интерактивность для портрета
    const portrait = document.querySelector('.portrait-frame');
    if (portrait) {
        portrait.addEventListener('mouseenter', function() {
            this.style.transform = 'scale(1.05) rotate(2deg)';
        });
        
        portrait.addEventListener('mouseleave', function() {
            this.style.transform = 'scale(1) rotate(0deg)';
        });
    }
    
    // УБИРАЕМ этот обработчик, так как он блокирует переход по ссылке
    // document.getElementById('startButton').addEventListener('click', function(e) {
    //     e.preventDefault(); // Эта строка предотвращает переход по ссылке
    //     document.getElementById('mapOverlay').classList.add('active');
    // });
});