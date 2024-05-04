document.addEventListener('DOMContentLoaded', function () {
    const carousel = document.querySelector('.carousel');
    const prevButton = document.querySelector('.prev-button');
    const nextButton = document.querySelector('.next-button');

    let currentIndex = 0;
    const totalSlides = carousel.children.length;

    prevButton.addEventListener('click', function () {
        currentIndex = (currentIndex - 1 + totalSlides) % totalSlides;
        updateCarousel();
    });

    nextButton.addEventListener('click', function () {
        currentIndex = (currentIndex + 1) % totalSlides;
        updateCarousel();
    });

    function updateCarousel() {
        const slideWidth = carousel.children[0].clientWidth;
        const offset = -currentIndex * slideWidth + 'px';
        carousel.style.transform = `translateX(${offset})`;
    }
});