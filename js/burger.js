
const burger = document.querySelector('.burger');
const navigation = document.querySelector('.header__navigation');

burger.addEventListener('click', () => {
    burger.classList.toggle('burger__active');
    navigation.classList.toggle('header__navigation_active');
})