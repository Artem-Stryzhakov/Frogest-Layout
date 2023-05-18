import {slickSliderTopDeals} from "./components/slick-slider.js";
import {sideBar} from './components/UI/leftSidebar.js'
import {rightColumnScroll} from "./components/UI/rightColumn.js";
import {slickSliderAnimationProduct} from "./components/animationBasket.js";
import {cardsProduct} from "./variables.js";

window.addEventListener('DOMContentLoaded', () => {
    slickSliderTopDeals()
})

window.onscroll = () => {
    sideBar()
    rightColumnScroll()
}

cardsProduct.forEach(btn => btn.addEventListener('click', (event) => {
    event.preventDefault()
    slickSliderAnimationProduct('.products-container-show', 1);
}))