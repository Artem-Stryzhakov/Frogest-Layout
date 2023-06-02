import showProductReq from "./components/ajaxScript.js"

import {
    collapseContainer,
    underCategories,
    categoriesType,
    titleLinks,
    collapseSideMenu,
    offcanvas,
    mybutton
} from "./variables.js";

window.addEventListener('scroll', () => {
    (document.body.scrollTop > 40 || document.documentElement.scrollTop > 40) ?
        mybutton.style.display = "block" : mybutton.style.display = "none"
})

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

// When the user clicks on the button, scroll to the top of the document
mybutton.addEventListener("click", () => {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
});

document.addEventListener('DOMContentLoaded', () => {
    showProductReq();
})

const lists = document.querySelectorAll('.list-of-categories .product-category a')

lists.forEach(product => product.addEventListener('mouseover', (event) => {

    if (document.querySelector('.list-of-categories').scrollHeight > window.innerHeight) {
        const list = event.target.parentElement.querySelector('.underlist-product')

        list.style.top = `-${document.querySelector('.list-of-categories').scrollHeight - window.innerHeight + 107}px`
    }
}))