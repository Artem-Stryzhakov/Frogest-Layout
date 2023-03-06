const collapseContainer = document.querySelectorAll('.collapse .card .collapse-container')
const underCategories = document.querySelectorAll('.under-categories')
const categoriesType = document.querySelectorAll('.under-categories p')
const titleLinks = document.querySelectorAll('.under-categories h4 a')
const collapseSideMenu = document.querySelectorAll('.offcanvas-body .nav-categories .collapse .card-body')
const offcanvas = document.querySelector('.offcanvas-start')

// SEARCH BAR VALIDATION PRODUCT //
const listOfSearchImg = document.querySelectorAll('.search-result .ac-odd a img')
const listOfSearchName = document.querySelectorAll('.search-result .product-name-seach')
const listOfSearchPrice = document.querySelectorAll('.search-result .price-search')

const searchElements = {
    searchbars: [$("#navbarSupportedContent .form-control"),
        $("#searchbar .form-control")],
    searchResults: [$("#navbarSupportedContent .search-result"),
        $("#searchbar .search-result")]
}

const getData = (data) => {
    const get_data = JSON.parse(data)
    const productLength = get_data['productName'].length

    for (let i = 0; i < productLength * 2; i++) {
        if (i < productLength) {
            listOfSearchImg[i].src = get_data['pictures'][i]
            listOfSearchName[i].innerHTML = get_data['productName'][i]
            listOfSearchPrice[i].innerHTML = `${get_data['price'][i]} €`
        } else {
            listOfSearchImg[i].src = get_data['pictures'][i - productLength]
            listOfSearchName[i].innerHTML = get_data['productName'][i - productLength]
            listOfSearchPrice[i].innerHTML = `${get_data['price'][i - productLength]} €`
        }
    }
}

function ajaxFunc(element, results) {
    if (element.val() !== "") {
        results.css('display', 'grid')
        element.css('z-index', '4')
        results.css('z-index', '3')
        $.ajax ({
            url: "SearchbarData.php",
            type: "GET",
            success: getData
        })
    } else {
        results.css('display', 'none')
        element.css('z-index', '3')
        results.css('z-index', '0')
    }
}

$(document).ready(() => {
    const searchResultsCount = $('.search-result').toArray()

    $("#navbarSupportedContent .form-control").on('focus', function () {
        $("#navbarSupportedContent input[name='product']").on('keyup', function () {
            ajaxFunc($(this), $('#navbarSupportedContent .search-result'))
        })
    })

    $("#searchbar .form-control").on('focus', function () {
        $("#searchbar input[name='product']").on('keyup', function () {
            ajaxFunc($(this), $('#searchbar .search-result'))
        })
    })

    for (let i = 0; i < searchResultsCount.length; i++) {
        $(searchElements.searchbars[i]).on('blur', function () {
            $(searchElements.searchResults[i]).css('display', 'none')
        })
    }
})

// ============================ //

//Get the button
const mybutton = document.getElementById("btn-back-to-top");

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
window.onscroll = () => {
    (document.body.scrollTop > 40 || document.documentElement.scrollTop > 40) ?
        mybutton.style.display = "block" : mybutton.style.display = "none"
};

// When the user clicks on the button, scroll to the top of the document
mybutton.addEventListener("click", () => {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
});

offcanvas.style.width = '100%'