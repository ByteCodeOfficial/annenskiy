// Функциональность для страницы карты
document.addEventListener('DOMContentLoaded', function() {
    const mapItems = document.querySelectorAll('.map-item');
    
    // Анимация появления пунктов с задержкой
    mapItems.forEach((item, index) => {
        setTimeout(() => {
            item.style.opacity = '1';
            item.style.transform = 'translateY(0)';
        }, index * 300 + 500);
    });
    
    // Добавляем интерактивность для карточек
    mapItems.forEach(item => {
        item.addEventListener('mouseenter', function() {
            this.style.zIndex = '10';
        });
        
        item.addEventListener('mouseleave', function() {
            this.style.zIndex = '2';
        });
    });
    
    // Анимация линий при загрузке
    const lines = document.querySelectorAll('.line');
    lines.forEach((line, index) => {
        setTimeout(() => {
            line.style.strokeDashoffset = '0';
        }, index * 500 + 1000);
    });
});