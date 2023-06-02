import {decreaseQuantity, increaseQuantity, quantityCount} from "../../variables.js";

function productCounter() {
    const quantityFunc = {
        minusQuality: function () {
            quantityCount.textContent = parseInt(quantityCount.textContent) - 1
            if (parseInt(quantityCount.textContent) < 2) {
                decreaseQuantity.disabled = true
                decreaseQuantity.style.color = 'lightGray'
            }
        },
        plusQuality: function () {
            quantityCount.textContent = parseInt(quantityCount.textContent) + 1
            if (parseInt(quantityCount.textContent) > 1) {
                decreaseQuantity.disabled = false
                decreaseQuantity.style.color = 'rgb(56, 175, 78)'
            }
        }
    }

    decreaseQuantity.addEventListener('click', quantityFunc.minusQuality)
    increaseQuantity.addEventListener('click', quantityFunc.plusQuality)
}

export default productCounter()