// Variables for main script
const collapseContainer = document.querySelectorAll('.collapse .card .collapse-container')
const underCategories = document.querySelectorAll('.under-categories')
const categoriesType = document.querySelectorAll('.under-categories p')
const titleLinks = document.querySelectorAll('.under-categories h4 a')
const collapseSideMenu = document.querySelectorAll('.offcanvas-body .nav-categories .collapse .card-body')
const offcanvas = document.querySelector('.offcanvas-start')
const sideCategIcons = document.querySelector(".side-categ-icons")
const rightColumn = document.querySelector(".right-column")

//Get the back to top button
const mybutton = document.querySelector("#btn-back-to-top");

// Variables for ajax
const listOfSearchImg = document.querySelectorAll('.search-result .ac-odd a img')
const listOfSearchName = document.querySelectorAll('.search-result .product-name-seach')
const listOfSearchPrice = document.querySelectorAll('.search-result .price-search')

// Product Page variables
let quantityCount = document.querySelector('.pick-quantity .quantity')
const decreaseQuantity = document.querySelector('.pick-quantity .minus')
const increaseQuantity = document.querySelector('.pick-quantity .plus')
const addToCart = document.querySelector('.add-to-cart')

// Add to basket button
const cardsProduct = document.querySelectorAll('.add-to-basket')

export {
    collapseContainer, underCategories,
    categoriesType, titleLinks,
    collapseSideMenu, offcanvas,
    sideCategIcons, rightColumn,
    mybutton, listOfSearchImg,
    listOfSearchName, listOfSearchPrice,
    quantityCount, decreaseQuantity,
    increaseQuantity, addToCart, cardsProduct
}