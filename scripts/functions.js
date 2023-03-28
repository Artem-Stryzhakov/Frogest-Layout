import {rightColumn} from "./variables.js";

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

export {
    sideBarStyle,
    rightColAnimate
}