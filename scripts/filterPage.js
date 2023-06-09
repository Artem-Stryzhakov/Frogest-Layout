import {moveSelectedProduct, moveSelectedProductFilter} from "./components/animationBasket.js";

const addToBasket = document.querySelectorAll('.add-to-basket')

addToBasket.forEach(button => button.addEventListener("click", moveSelectedProductFilter))