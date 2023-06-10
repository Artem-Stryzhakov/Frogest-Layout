import {moveSelectedProductFilter} from "./components/animationBasket.js";

const addToBasket = document.querySelectorAll('.add-to-basket')
const inputs = document.querySelectorAll('.colors .form-check-input')

const regulatePriceDisplay = document.querySelector('.regulate-price-display')
const slider = document.querySelector('.price #slider');

// ===== Add product to basket animation ===== //
addToBasket.forEach(button => button.addEventListener("click", moveSelectedProductFilter))

// ===== Creating range with two inputs ===== //
noUiSlider.create(slider, {
    start: [0, 100],
    connect: true,
    range: {
        'min': 0,
        'max': 100
    }
});

slider.noUiSlider.on("update", (values) => {
    const price = values.map(value => `€${value}`)
    regulatePriceDisplay.innerHTML = price.join(' - ');
})

// ===== Change checkbox colors ===== //
inputs.forEach(input => input.style.background = input.dataset.color)