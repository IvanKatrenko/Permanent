document.addEventListener('DOMContentLoaded', function () {
    document.getElementById('burger').addEventListener('click', function () {
        document.querySelector('header').classList.toggle('open');
    });
})

window.addEventListener('click', function (event) {
    if (!event.target.closest('header')) {
        document.querySelector('header').classList.remove('open');
    }
})