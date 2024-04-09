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
        delay: 3000,
        stopOnLastSlide: false,
        reverseDirection: false,
        disableOnInteraction: false,
        pauseOnMouseEnter: false,
        pauseOnFocus: false,
        pauseOnHover: false,
        waitForTransition: false,

    },
});

document.addEventListener('DOMContentLoaded', function () {
    var nextSlideButton = document.querySelector('.swiper-button-next');

    nextSlideButton.addEventListener('click', function () {
        var xhr = new XMLHttpRequest();

        xhr.open('GET', 'php/swiper.php', true);

        xhr.onload = function () {
            if (xhr.status === 200) {
                document.getElementsByClassName('myswiper')[0].innerHTML = xhr.responseText;
            }
        };
        xhr.send();
    })

})