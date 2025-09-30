// Анимации для страницы "Биография"
document.addEventListener('DOMContentLoaded', function() {
    // Анимация таймлайна
    const timelineItems = document.querySelectorAll('.timeline-item');
    
    const animateTimeline = () => {
        timelineItems.forEach(item => {
            const itemTop = item.getBoundingClientRect().top;
            const itemVisible = 150;
            
            if (itemTop < window.innerHeight - itemVisible) {
                item.style.opacity = '1';
                item.style.transform = 'translateX(0)';
            }
        });
    };

    // Установка начального состояния для таймлайна
    timelineItems.forEach(item => {
        item.style.opacity = '0';
        item.style.transform = 'translateX(-50px)';
        item.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    });

    // Анимация карьерных пунктов
    const careerItems = document.querySelectorAll('.career-item');
    careerItems.forEach((item, index) => {
        item.style.opacity = '0';
        item.style.transform = 'translateY(30px)';
        item.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        
        setTimeout(() => {
            item.style.opacity = '1';
            item.style.transform = 'translateY(0)';
        }, index * 200 + 500);
    });

    // Запуск анимаций
    window.addEventListener('load', animateTimeline);
    window.addEventListener('scroll', animateTimeline);
});