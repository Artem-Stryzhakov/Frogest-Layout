import {rightColumn} from "../../variables.js";
import {rightColAnimate} from "../functions.js";

let oldScrollY = window.scrollY
const center = document.querySelector('.center-column')

function rightColumnScroll() {
    const numb = rightColumn.scrollHeight - window.innerHeight
    // Don't let the sidebar move over a footer
    const checkScrollHeight = window.innerHeight + window.scrollY;
    const docHeightWithoutFooter = document.body.offsetHeight - document.querySelector('footer').offsetHeight;

    const navHeight = document.querySelector('.navbar').scrollHeight

    // Animate Right column ===========================
    if (oldScrollY < window.scrollY){
        if (window.innerHeight < rightColumn.scrollHeight) {
            (window.scrollY > 229) ? rightColAnimate("-", numb + 10, 800) : null;
            (checkScrollHeight > docHeightWithoutFooter - 250) ? rightColAnimate("", 0, 0) : null
        }
    } else {
        if (!(checkScrollHeight >= docHeightWithoutFooter - 100)) {
            (window.innerHeight < rightColumn.scrollHeight) ? rightColAnimate("", navHeight + 10, 800) : null;
            (window.scrollY < center.getBoundingClientRect().y + 200) ? rightColAnimate("", 0, 0) : null;
        }
    }
    oldScrollY = window.scrollY;
}

export {rightColumnScroll}