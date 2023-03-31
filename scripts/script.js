import showProductReq from "./ajaxScript.js"
import {sideBarStyle, rightColAnimate} from "./functions.js";
import slickSlider from './slick-slider.js'

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
    const numb = rightColumn.scrollHeight - window.innerHeight
    //Don't let the sidebar move over a footer
    const checkScrollHeight = window.innerHeight + window.scrollY;
    const docHeightWithoutFooter = document.body.offsetHeight - document.querySelector('footer').offsetHeight;

    // When the user scrolls down 20px from the top of the document, show the button
    (document.body.scrollTop > 40 || document.documentElement.scrollTop > 40) ?
        mybutton.style.display = "block" : mybutton.style.display = "none"

    // Animate Right column ===========================
    if (oldScrollY < window.scrollY){
        if (window.innerHeight < rightColumn.scrollHeight) {
            (window.scrollY > 229) ? rightColAnimate("-", numb + 10, 500) : null;
            (checkScrollHeight > docHeightWithoutFooter - 250) ? rightColAnimate("", 0, 0) : null
        }
    } else {
        (window.innerHeight < rightColumn.scrollHeight) ? rightColAnimate("", 0, 500) : null
    }
    oldScrollY = window.scrollY;

    // Show sidebar where is necessary
    if (document.querySelector(".down-main-categories").offsetTop < (window.pageYOffset + window.innerHeight / 2.4)) {
        sideBarStyle("visible", "1", "opacity 0.2s linear")
    } else {
        sideBarStyle("hidden", "0", "visibility 0s 0.2s, opacity 0.2s linear")
    }

    // Stop sidebar before footer
    if (checkScrollHeight >= docHeightWithoutFooter) {
        sideCategIcons.style.bottom = `${checkScrollHeight - docHeightWithoutFooter + 50}px`
    } else {
        sideCategIcons.style.bottom = "50px"
    }
}

// When the user clicks on the button, scroll to the top of the document
mybutton.addEventListener("click", () => {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
});

//Side canvas (mobile categories)
offcanvas.style.width = '100%'

$(document).ready(() => {
    showProductReq();
    slickSlider()
})