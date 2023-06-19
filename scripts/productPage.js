import {moveSelectedProduct, slickSliderAnimationProduct} from './components/animationBasket.js'
import {slickSliderSelected} from "./components/slick-slider.js";
import {
    addToCart,
    cardsProduct
} from "./variables.js";
import productCounter from "./components/UI/productCounter.js";
import {eventForCompare, eventForWishlist} from "./components/functions.js";

const addToCompare = document.querySelector('.quantity-menu .compare')
const addToWishlist = document.querySelector('.quantity-menu .wishlist')

const style = document.createElement('style')
style.type = 'text/css'

const productImage = document.querySelectorAll('.choiceImageProduct')

const colorButtons = document.querySelectorAll('.colors .color-container')
colorButtons.forEach(button => button.style.background = button.dataset.color)

productImage.forEach(image => image.addEventListener('click', (event) => {
    const mainPictureProduct = document.querySelector('.main-product-image img')
    mainPictureProduct.src = event.target.src
}))

productCounter;
addToCart.addEventListener('click', moveSelectedProduct)

cardsProduct.forEach(btn => btn.addEventListener('click', (event) => {
    event.preventDefault()
    slickSliderAnimationProduct('.selected-products-show');
}))

window.addEventListener("DOMContentLoaded", () => {
    slickSliderSelected()
})

addToCompare.addEventListener('click', eventForCompare)
addToWishlist.addEventListener('click', eventForWishlist)