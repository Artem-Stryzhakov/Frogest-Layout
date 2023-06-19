import {rightColumn} from "../variables.js";

const compareIcons = document.querySelectorAll('.compare-counter')
const wishlistIcons = document.querySelectorAll('.wishlist-counter')
const style = document.createElement('style')
style.type = 'text/css'

const sideBarStyle = (visibility, opacity, transition) => {
    return Object.assign(document.querySelector(".side-categ-icons").style, {
        visibility: visibility,
        opacity: opacity,
        transition: transition
    })
}

const rightColAnimate = (minus, direction, duration) => {
    rightColumn.animate({ transform: `translateY(${minus}${direction}px)` }, {
        duration: duration,
        fill: "forwards"
    })
}

function eventForCompare(event) {
    event.preventDefault()
    // Product name if it necessary
    //const productName = event.target.closest('.info-pr').querySelector('.product-name')
    // ============================
    compareIcons.forEach(counter => {
        if (counter.classList.contains('mobile')) {
            const splitText = counter.textContent.split("")
            splitText[1] = parseInt(splitText[1]) + 1
            counter.textContent = splitText.join("")

        } else {
            counter.textContent = parseInt(counter.textContent) + 1
            animationStyle("user-button-container", "compare");

            (window.innerWidth > 992) ? document.querySelector('body').appendChild(style) : null

            setTimeout(() => {
                (document.body.contains(style)) ? document.querySelector('body').removeChild(style) : null
            }, 400)
        }
    })
}
function eventForWishlist(event) {
    event.preventDefault()

    wishlistIcons.forEach(counter => {
        if (!counter.classList.contains('mobile')) {
            const splitText = counter.textContent.split("")
            splitText[1] = parseInt(splitText[1]) + 1
            counter.textContent = splitText.join("")

        } else {
            counter.textContent = parseInt(counter.textContent) + 1
            animationStyle("mobile-basket", "wishlist");

            (window.innerWidth < 992) ? document.querySelector('body').appendChild(style) : null

            setTimeout(() => {
                (document.body.contains(style)) ? document.querySelector('body').removeChild(style) : null
            }, 400)
        }
    })
}

function animationStyle(parentContainer, parentType) {
    style.innerHTML += `
        .${parentContainer}.${parentType} {
            animation: backForward 0.4s forwards;
        }
    `;
}

export {
    sideBarStyle, rightColAnimate,
    eventForCompare, eventForWishlist
}