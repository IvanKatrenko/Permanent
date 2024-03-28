const headerElem = document.getElementById('header');

window.addEventListener('scroll', function () {
    const scrollPosition = window.scrollY;

    if (scrollPosition > 100) {
        headerElem.classList.add('header__scrolled');
    } else {
        headerElem.classList.remove('header__scrolled');
    }
})