import {moveSelectedProductFilter} from "./components/animationBasket.js";
import {eventForCompare, eventForWishlist} from "./components/functions.js";

const addToBasket = document.querySelectorAll('.add-to-basket')
const inputs = document.querySelectorAll('.colors .form-check-input')

const regulatePriceDisplay1 = document.querySelector('.regulate-price-display')
const slider1 = document.querySelector('.price #slider');
const regulatePriceDisplay2 = document.querySelector('.regulate-price-display2')
const slider2 = document.querySelector('.accordion-body #slider2');


// ===== Add product to basket animation ===== //
addToBasket.forEach(button => button.addEventListener("click", moveSelectedProductFilter))

// ===== Creating range with two inputs ===== //
const sliderParameters = {
    start: [0, 100],
    connect: true,
    range: {
        'min': 0,
        'max': 100
    }
}

noUiSlider.create(slider1, {
    ...sliderParameters
});
noUiSlider.create(slider2, {
    ...sliderParameters
});

slider1.noUiSlider.on("update", (values) => {
    const price = values.map(value => `€${value}`)
    regulatePriceDisplay1.innerHTML = price.join(' - ');
})
slider2.noUiSlider.on("update", (values) => {
    const price = values.map(value => `€${value}`)
    regulatePriceDisplay2.innerHTML = price.join(' - ');
})

// ===== Change checkbox colors ===== //
inputs.forEach(input => input.style.background = input.dataset.color)

