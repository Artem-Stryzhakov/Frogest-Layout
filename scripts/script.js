const collapseContainer = document.querySelectorAll('.collapse .card .collapse-container')
const underCategories = document.querySelectorAll('.under-categories')
const categoriesType = document.querySelectorAll('.under-categories p')
const titleLinks = document.querySelectorAll('.under-categories h4 a')
const collapseSideMenu = document.querySelectorAll('.offcanvas-body .nav-categories .collapse .card-body')
const offcanvas = document.querySelector('.offcanvas-start')

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

let oldScrollY = window.scrollY;
const directionText = document.querySelector('.right-column');

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
};

// When the user clicks on the button, scroll to the top of the document
mybutton.addEventListener("click", () => {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
});

//Side canvas (mobile categories)
offcanvas.style.width = '100%'