import {showProductReq} from "./ajaxScript.js"

import {
    collapseContainer,
    underCategories,
    categoriesType,
    titleLinks,
    collapseSideMenu,
    offcanvas,
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

// When the user scrolls down 20px from the top of the document, show the button

let oldScrollY = window.scrollY;
const directionText = document.querySelector('.right-column');

// function for change sidebar style
const sideBarStyle = (visibility, opacity, transition) => {
    Object.assign(document.querySelector(".side-categ-icons").style, {
        visibility: visibility,
        opacity: opacity,
        transition: transition
    })
}

window.onscroll = () => {
    (document.body.scrollTop > 40 || document.documentElement.scrollTop > 40) ?
        mybutton.style.display = "block" : mybutton.style.display = "none"

    const numb = directionText.scrollHeight - window.innerHeight

    if(oldScrollY < window.scrollY){
        if (window.innerHeight < directionText.scrollHeight) {
            $(directionText).css('top', `-${numb + 10}px`)
        } else {
            $(directionText).css('top', `10px`)
        }
    } else {
        $(directionText).css('top', `10px`)
    }
    oldScrollY = window.scrollY;

    if (document.querySelector(".down-main-categories").offsetTop < (window.pageYOffset + window.innerHeight / 2.4)) {
        sideBarStyle("visible", "1", "opacity 0.2s linear")
    } else {
        sideBarStyle("hidden", "0", "visibility 0s 0.2s, opacity 0.2s linear")
    }

    if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight - 100) {
        // you're at the bottom of the page
        sideBarStyle("hidden", "0", "visibility 0s 0.2s, opacity 0.2s linear")
    }
};

// When the user clicks on the button, scroll to the top of the document
mybutton.addEventListener("click", () => {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
});

//Side canvas (mobile categories)
offcanvas.style.width = '100%'

$(document).ready(() => {
    showProductReq();
})