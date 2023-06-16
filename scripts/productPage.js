import {moveSelectedProduct, slickSliderAnimationProduct} from './components/animationBasket.js'
import {slickSliderSelected} from "./components/slick-slider.js";
import {
    addToCart,
    cardsProduct
} from "./variables.js";
import productCounter from "./components/UI/productCounter.js";
import {animationStyle} from './components/addCompareProducts.js'

const compareIcons = document.querySelectorAll('.compare-counter')
const wishlistIcons = document.querySelectorAll('.wishlist-counter')

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

addToCompare.addEventListener('click', () => {
    //const productName = event.target.closest('.info-pr').querySelector('.product-name')
    // ============================
    compareIcons.forEach(counter => {
        if (counter.classList.contains('mobile')) {
            const splitText = counter.textContent.split("")
            splitText[1] = parseInt(splitText[1]) + 1
            counter.textContent = splitText.join("")

        } else {
            counter.textContent = parseInt(counter.textContent) + 1
            style.innerHTML += `
                .user-button-container.compare {
                    animation: backForward 0.4s forwards;
                }
            `;

            (window.innerWidth > 992) ? document.querySelector('body').appendChild(style) : null

            setTimeout(() => {
                (document.body.contains(style)) ? document.querySelector('body').removeChild(style) : null
            }, 400)
        }
    })
})

addToWishlist.addEventListener('click', () => {
    wishlistIcons.forEach(counter => {
        if (!counter.classList.contains('mobile')) {
            const splitText = counter.textContent.split("")
            splitText[1] = parseInt(splitText[1]) + 1
            counter.textContent = splitText.join("")

        } else {
            counter.textContent = parseInt(counter.textContent) + 1
            style.innerHTML += `
                .mobile-basket.wishlist {
                    animation: backForward 0.4s forwards;
                }
            `;

            (window.innerWidth < 992) ? document.querySelector('body').appendChild(style) : null

            setTimeout(() => {
                (document.body.contains(style)) ? document.querySelector('body').removeChild(style) : null
            }, 400)
        }
    })
})