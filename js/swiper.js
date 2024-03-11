let swiper = new Swiper(".myswiper", {
    cssMode: true,
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    pagination: {
        el: ".swiper-pagination",
    },
    mousewheel: true,
    keyboard: true,
    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
    },
});