import {moveSelectedProduct, slickSliderAnimationProduct} from './components/animationBasket.js'
import {slickSliderSelected} from "./components/slick-slider.js";
import {
    quantityCount,
    decreaseQuantity,
    increaseQuantity,
    addToCart,
    cardsProduct
} from "./variables.js";

const style = document.createElement('style')
style.type = 'text/css'

const productImage = document.querySelectorAll('.choiceImageProduct')

const colorButtons = document.querySelectorAll('.colors .color-container')
colorButtons.forEach(button => button.style.background = button.dataset.color)

productImage.forEach(image => image.addEventListener('click', (event) => {
    const mainPictureProduct = document.querySelector('.main-product-image img')
    mainPictureProduct.src = event.target.src
}))

const quantityFunc = {
    minusQuality: function () {
        quantityCount.textContent = parseInt(quantityCount.textContent) - 1
        if (parseInt(quantityCount.textContent) < 2) {
            decreaseQuantity.disabled = true
            decreaseQuantity.style.color = 'lightGray'
        }
    },
    plusQuality: function () {
        quantityCount.textContent = parseInt(quantityCount.textContent) + 1
        if (parseInt(quantityCount.textContent) > 1) {
            decreaseQuantity.disabled = false
            decreaseQuantity.style.color = 'rgb(56, 175, 78)'
        }
    }
}

decreaseQuantity.addEventListener('click', quantityFunc.minusQuality)
increaseQuantity.addEventListener('click', quantityFunc.plusQuality)

addToCart.addEventListener('click', moveSelectedProduct)

cardsProduct.forEach(btn => btn.addEventListener('click', (event) => {
    event.preventDefault()
    slickSliderAnimationProduct('.selected-products-show');
}))

window.addEventListener("DOMContentLoaded", () => {
    slickSliderSelected()
})