import showProductReq from "./components/ajaxScript.js"
import {sideBarStyle, rightColAnimate} from "./components/functions.js";
import {moveSelectedProduct, slickSliderAnimationProduct} from "./components/animationBasket.js";

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

window.onscroll = () => {
    // When the user scrolls down 20px from the top of the document, show the button
    (document.body.scrollTop > 40 || document.documentElement.scrollTop > 40) ?
        mybutton.style.display = "block" : mybutton.style.display = "none"
}

// When the user clicks on the button, scroll to the top of the document
mybutton.addEventListener("click", () => {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
});

document.addEventListener('DOMContentLoaded', () => {
    showProductReq();
})

const cardsProduct = document.querySelectorAll('.add-to-basket')

if (document.querySelector('.add-to-basket').closest('.selected-products-show')) {

} else if (document.querySelector('.add-to-basket').closest('.products-container-show')) {
    cardsProduct.forEach(btn => btn.addEventListener('click', (event) => {
        event.preventDefault()

        slickSliderAnimationProduct('.products-container-show', 1);
    }))
}