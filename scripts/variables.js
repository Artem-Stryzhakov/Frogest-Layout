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

export {
    collapseContainer, underCategories,
    categoriesType, titleLinks,
    collapseSideMenu, offcanvas,
    sideCategIcons, rightColumn,
    mybutton, listOfSearchImg,
    listOfSearchName, listOfSearchPrice
}