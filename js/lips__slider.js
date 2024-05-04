let slideIndex = 1;

function moveSlide(n) {
    showSlides((slideIndex += n));
}

function showSlides(n) {
    const slides = document.getElementsByClassName('slide');
    if (n > slides.length) {
        slideIndex = 1;
    }
    if (n < 1) {
        slideIndex = slides.length;
    }
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.transform = `translateX(-${100 * (slideIndex - 1)}%)`;
    }
}
