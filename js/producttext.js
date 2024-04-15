var sliderCounter = 0;
var sliderContent = [
    'perfekcyjnie,bezpiecznie',
    'znakomicie, bozienie',
    'doskonale, najlepiej',
    'zachwycająco',
    'zawsze olśniewo'
]

// var sliderContentSecond = [
//     'z makijazu permannetnego ust',
//     'z makijazu permannetnego brwi',
//     'grupowe',
//     'indywidualne',
//     'kompleksowe'
// ]

var slider = document.getElementById('product__slider');
var sliderValue = document.getElementById('sliderValue');
// var sliderValueSecond = document.getElementById('sliderValueSecond');

function slide() {
    if (sliderCounter >= sliderContent.length) {
        sliderCounter = 0;
    }

    sliderValue.innerHTML = "";

    sliderValue.classList.remove("holder-animation");
    void sliderValue.offsetWidth;
    sliderValue.classList.add("holder-animation");

    for (i = 0; i < sliderContent[sliderCounter].length; i++) {
        let letterDiv = document.createElement("div");
        letterDiv.innerHTML = sliderContent[sliderCounter][i];

        if (letterDiv.innerHTML == " ") {
            letterDiv.innerHTML = "&nbsp;";
        }
        letterDiv.classList.add("start");
        letterDiv.classList.add("animation");
        letterDiv.style.animationDelay = i / 10 + "s";
        sliderValue.appendChild(letterDiv);
    }

    sliderCounter++;
}

slide();
setInterval(slide, 4000);