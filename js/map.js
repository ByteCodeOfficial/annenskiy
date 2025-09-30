// Функциональность для страницы карты
document.addEventListener('DOMContentLoaded', function() {
    const mapItems = document.querySelectorAll('.map-item');
    
    // Анимация появления кружочков с задержкой
    mapItems.forEach((item, index) => {
        setTimeout(() => {
            item.style.opacity = '1';
            item.style.transform = 'scale(1)';
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
    
    // Анимация стрелок при загрузке
    const arrows = document.querySelectorAll('.arrow-line');
    arrows.forEach((arrow, index) => {
        setTimeout(() => {
            arrow.style.opacity = '0.7';
        }, index * 500 + 1000);
    });
});