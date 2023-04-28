const cardsProduct = document.querySelectorAll('.add-to-basket')
const icon = document.querySelectorAll('.to-basket')

// const productsContainer = document.querySelector('.products-container-show')
//
// const animationTime = Number(productsContainer.dataset.animationTime)
// const animationDelay = {
//     enterBasket: () => animationTime * 1000 - 300,
//     activateBack: () => animationTime * 1000 + 500
// }

const style = document.createElement('style')
style.type = 'text/css'

function mobileBasketAnimation() {
    return (window.innerWidth > 991) ? icon[0] : icon[1]
}

cardsProduct.forEach(btn => btn.addEventListener('click', (event) => {
    event.preventDefault()

    const node = (event.target.tagName.toLowerCase() === 'a') ?
        event.target : event.srcElement.parentElement

    node.innerHTML = `
    <i class="fa-solid fa-check"></i>
    `
    node.style.pointerEvents = 'none'

    const previousParent = node.closest('.show-product')
    const getDOMImage = previousParent.querySelector('.image-product-con')
    const productImg = getDOMImage.querySelector('.image-product-con img')

    const picture = productImg.cloneNode(true)
    picture.classList.add('product-move');

    const productImgCoor = productImg.getBoundingClientRect()

    document.querySelector('.products-container-show').insertAdjacentElement('beforebegin', picture)

    const animationCoordinatesX = mobileBasketAnimation().getBoundingClientRect().x - productImgCoor.x
    const animationCoordinatesY = mobileBasketAnimation().getBoundingClientRect().y - productImgCoor.y

    const slickPosition = document.querySelector('.products-container-show').getBoundingClientRect()

    picture.style.left = `${productImgCoor.x - slickPosition.x}px`

    style.innerHTML = `
    .product-move {
        animation: addToBasket 1s forwards
    }
    
    @keyframes addToBasket {
        60% {
            transform: translate(
                ${animationCoordinatesX + 20}px,
                ${animationCoordinatesY + 45}px);
            width: 50px;
            height: 50px;
        }
        100% {
            transform: translate(
                ${animationCoordinatesX + 20}px,
                ${animationCoordinatesY + 35}px);
            width: 0;
            height: 0;
        }
    }
    `
    document.querySelector('body').appendChild(style)

    setTimeout(() => {
        const countProduct = mobileBasketAnimation().querySelector('.count-product')
        const counterP = countProduct.textContent
        const count = parseInt(counterP) + 1

        document.querySelector('.count-product.desktop').innerHTML = count
        document.querySelector('.count-product.mobile').innerHTML = count

        style.innerHTML += `
        .basket-put {
            animation: backForward 0.4s forwards;
        }
        `
    }, 800)

    setTimeout(() => {
        node.innerHTML = `
        <i class="fa-solid fa-cart-shopping"></i>
        `
        node.style.pointerEvents = 'inherit'
        picture.remove()
    }, 1500)
}))


function moveSelectedProduct(event) {
    const mainImageContainer = document.querySelector('.main-product-image')
    const mainImage = mainImageContainer.querySelector('img')

    const productToCart = mainImage.cloneNode(true)
    productToCart.classList.add('main-image-move')

    const animationCoordinatesX = mobileBasketAnimation().getBoundingClientRect().x - mainImage.x
    const animationCoordinatesY = mobileBasketAnimation().getBoundingClientRect().y - mainImage.y

    mainImageContainer.appendChild(productToCart)

    style.innerHTML = `
    .main-image-move {
        animation: addToBasket 1s forwards
    }
    
    @keyframes addToBasket {
        70% {
            transform: translate(
                ${animationCoordinatesX + 5}px,
                ${animationCoordinatesY + 15}px);
            width: 50px;
            height: 50px;
        }
        100% {
            transform: translate(
                ${animationCoordinatesX}px,
                ${animationCoordinatesY + 5}px);
                ${animationCoordinatesY + 5}px);
            width: 0;
            height: 0;
        }
    }
    `
    document.querySelector('body').appendChild(style)

    interactionButton(event, `
        <i class="fa-solid fa-check"></i>
    `, true)

    setTimeout(() => {
        const countProduct = mobileBasketAnimation().querySelector('.count-product')
        const counterP = countProduct.textContent
        const count = parseInt(counterP) + 1

        document.querySelector('.count-product.desktop').innerHTML = count
        document.querySelector('.count-product.mobile').innerHTML = count

        style.innerHTML += `
        .basket-put {
            animation: backForward 0.4s forwards;
        }
        `
    }, 800)
    setTimeout(() => {
        interactionButton(event, `
        <i class="fa-solid fa-basket-shopping"></i>
        ADD TO CART
        `, false)
    }, 2000)
}

function interactionButton(target, DOMelement, boolean) {
    target.target.innerHTML = DOMelement
    target.target.disabled = boolean
}

export {
    moveSelectedProduct
}