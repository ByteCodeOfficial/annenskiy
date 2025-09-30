// Функциональность для страницы карты
document.addEventListener('DOMContentLoaded', function() {
    const mapItems = document.querySelectorAll('.map-item');
    
    // Анимация появления пунктов с задержкой
    mapItems.forEach((item, index) => {
        setTimeout(() => {
            item.style.opacity = '1';
            item.style.transform = 'translateY(0) scale(1)';
        }, index * 400 + 1000);
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
    
    // Анимация дорожки при загрузке
    const pathLine = document.querySelector('.path-line');
    const pathDecorations = document.querySelectorAll('.path-decoration');
    
    setTimeout(() => {
        pathLine.style.strokeDashoffset = '0';
    }, 500);
    
    pathDecorations.forEach((decoration, index) => {
        setTimeout(() => {
            decoration.style.strokeDashoffset = '0';
        }, index * 300 + 800);
    });
});