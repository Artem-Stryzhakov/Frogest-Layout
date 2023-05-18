import {sideBarStyle} from "../functions.js";
import {
    sideCategIcons
} from "../../variables.js";

function sideBar() {
    const checkScrollHeight = window.innerHeight + window.scrollY;
    const docHeightWithoutFooter = document.body.offsetHeight - document.querySelector('footer').offsetHeight;

// Show sidebar where is necessary
    if (document.querySelector(".down-main-categories").offsetTop < (window.pageYOffset + window.innerHeight / 2.7)) {
        sideBarStyle("visible", "1", "opacity 0.2s linear")
    } else {
        sideBarStyle("hidden", "0", "visibility 0s 0.2s, opacity 0.2s linear")
    }

// Stop sidebar before footer
    if (checkScrollHeight >= docHeightWithoutFooter + 50) {
        sideCategIcons.style.bottom = `${checkScrollHeight - docHeightWithoutFooter + 50}px`
    } else {
        sideCategIcons.style.bottom = "100px"
    }
}

export {sideBar}