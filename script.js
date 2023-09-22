// script.js
document.addEventListener('DOMContentLoaded', function () {
    const points = document.querySelectorAll('.point');

    points.forEach(point => {
        point.addEventListener('mouseenter', () => {
            const info = point.querySelector('.info');
            info.style.display = 'block';
        });

        point.addEventListener('mouseleave', () => {
            const info = point.querySelector('.info');
            info.style.display = 'none';
        });
    });
});



