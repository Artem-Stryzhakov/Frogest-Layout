import {eventForCompare, eventForWishlist} from "./functions.js";

const addToCompare = document.querySelectorAll('.show-product .compare a')
const addToWishlist = document.querySelectorAll('.show-product .wishlist a')

addToCompare.forEach(button => button.addEventListener('click', eventForCompare))
addToWishlist.forEach(button => button.addEventListener('click', eventForWishlist))