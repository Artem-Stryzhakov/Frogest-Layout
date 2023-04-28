// import {rightColumn, sideCategIcons} from "../variables.js";
// import {rightColAnimate, sideBarStyle} from "../functions.js";
//
// let oldScrollY = window.scrollY
//
// window.onscroll = () => {
//     const numb = rightColumn.scrollHeight - window.innerHeight
//
//     //Don't let the sidebar move over a footer
//     const checkScrollHeight = window.innerHeight + window.scrollY;
//     const docHeightWithoutFooter = document.body.offsetHeight - document.querySelector('footer').offsetHeight;
//
//     // Animate Right column ===========================
//     if (oldScrollY < window.scrollY){
//         if (window.innerHeight < rightColumn.scrollHeight) {
//             (window.scrollY > 229) ? rightColAnimate("-", numb + 10, 800) : null;
//             (checkScrollHeight > docHeightWithoutFooter - 250) ? rightColAnimate("", 0, 0) : null
//         }
//     } else {
//         (window.innerHeight < rightColumn.scrollHeight) ? rightColAnimate("", 0, 800) : null
//     }
//     oldScrollY = window.scrollY;
// }
