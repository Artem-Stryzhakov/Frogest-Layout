import showProductReq from "./ajaxScript.js"
import {sideBarStyle, rightColAnimate} from "./functions.js";
import {moveSelectedProduct, slickSliderAnimationProduct} from "./animationBasket.js";

import {
    collapseContainer,
    underCategories,
    categoriesType,
    titleLinks,
    collapseSideMenu,
    offcanvas,
    sideCategIcons,
    rightColumn,
    mybutton
} from "./variables.js";

//Side canvas (mobile categories)
offcanvas.style.width = '100%'

collapseContainer.forEach(collapseContainer => {
    collapseContainer.style.fontSize = '10px'
    collapseContainer.style.gap = '40px'
})

categoriesType.forEach(type => {
    type.style.margin = '0px'
    type.style.padding = '0px'
})

underCategories.forEach(category => category.style.marginTop = '-5px')

titleLinks.forEach(titleLink => {
    titleLink.style.fontSize = '20px'
    titleLink.style.maxWidth = '200px'
    titleLink.style.fontWeight = 'bold'
})

collapseSideMenu.forEach(collapseItems => {
    collapseItems.style.borderRadius = '0'
    collapseItems.style.boxShadow = '1px 1px 5px #777'
})

let oldScrollY = window.scrollY

window.onscroll = () => {
    // When the user scrolls down 20px from the top of the document, show the button
    (document.body.scrollTop > 40 || document.documentElement.scrollTop > 40) ?
        mybutton.style.display = "block" : mybutton.style.display = "none"

    try {
        const numb = rightColumn.scrollHeight - window.innerHeight
        //Don't let the sidebar move over a footer
        const checkScrollHeight = window.innerHeight + window.scrollY;
        const docHeightWithoutFooter = document.body.offsetHeight - document.querySelector('footer').offsetHeight;

        // Animate Right column ===========================
        if (oldScrollY < window.scrollY){
            if (window.innerHeight < rightColumn.scrollHeight) {
                (window.scrollY > 229) ? rightColAnimate("-", numb + 10, 800) : null;
                (checkScrollHeight > docHeightWithoutFooter - 250) ? rightColAnimate("", 0, 0) : null
            }
        } else {
            (window.innerHeight < rightColumn.scrollHeight) ? rightColAnimate("", 0, 800) : null
        }
        oldScrollY = window.scrollY;

        // Show sidebar where is necessary
        if (document.querySelector(".down-main-categories").offsetTop < (window.pageYOffset + window.innerHeight / 2.7)) {
            sideBarStyle("visible", "1", "opacity 0.2s linear")
        } else {
            sideBarStyle("hidden", "0", "visibility 0s 0.2s, opacity 0.2s linear")
        }

        // Stop sidebar before footer
        if (checkScrollHeight >= docHeightWithoutFooter + 50) {
            sideCategIcons.style.bottom = `${checkScrollHeight - docHeightWithoutFooter + 50}px`
        } else {
            sideCategIcons.style.bottom = "100px"
        }
    } catch (e) {}
}

// When the user clicks on the button, scroll to the top of the document
mybutton.addEventListener("click", () => {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
});

// ================ Script for product page ==================== //


const style = document.createElement('style')
style.type = 'text/css'

const productImage = document.querySelectorAll('.choiceImageProduct')
const icon = document.querySelectorAll('.to-basket')

const colorButtons = document.querySelectorAll('.colors .color-container')
colorButtons.forEach(button => button.style.background = button.dataset.color)

let quantityCount = document.querySelector('.pick-quantity .quantity')

const decreaseQuantity = document.querySelector('.pick-quantity .minus')
const increaseQuantity = document.querySelector('.pick-quantity .plus')

const addToCart = document.querySelector('.add-to-cart')

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

try {
    decreaseQuantity.addEventListener('click', quantityFunc.minusQuality)
    increaseQuantity.addEventListener('click', quantityFunc.plusQuality)

    addToCart.addEventListener('click', moveSelectedProduct)
} catch (e) {}

// ============================================================ //

document.addEventListener('DOMContentLoaded', () => {
    showProductReq();
})

const cardsProduct = document.querySelectorAll('.add-to-basket')

if (document.querySelector('.add-to-basket').closest('.selected-products-show')) {
    cardsProduct.forEach(btn => btn.addEventListener('click', (event) => {
        event.preventDefault()
        slickSliderAnimationProduct('.selected-products-show', 2);
    }))
} else if (document.querySelector('.add-to-basket').closest('.products-container-show')) {
    cardsProduct.forEach(btn => btn.addEventListener('click', (event) => {
        event.preventDefault()

        slickSliderAnimationProduct('.products-container-show', 1);
    }))
}

const buttonsD = document.querySelectorAll('.nav-item button')

// buttonsD.forEach(btn => btn.addEventListener('click', (event) => {
//     const getParent = event.target.offsetParent
//     const verticalLine = getParent.querySelector('.vertical-line')
//     console.log(verticalLine)
// }))