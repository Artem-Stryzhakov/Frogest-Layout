const icon = document.querySelectorAll('.to-basket')

const style = document.createElement('style')
style.type = 'text/css'

function mobileBasketAnimation() {
    return (window.innerWidth > 991) ? icon[0] : icon[1]
}

function slickSliderAnimationProduct(mainContainer) {
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
    const slickPosition = document.querySelector(mainContainer).getBoundingClientRect()

    Object.assign(picture.style, {
        marginTop: (mainContainer === '.selected-products-show') ? '45px' : '20px',
        marginLeft: (mainContainer === '.selected-products-show') ? '10px' : '0',
        left: `${productImgCoor.x - slickPosition.x}px`
    })

    document.querySelector(mainContainer).insertAdjacentElement('beforebegin', picture)

    const animationCoordinatesX = mobileBasketAnimation().getBoundingClientRect().x - productImgCoor.x
    const animationCoordinatesY = mobileBasketAnimation().getBoundingClientRect().y - productImgCoor.y

    style.innerHTML = `
    .product-move {
        animation: addToBasket 1s forwards
    }

    @keyframes addToBasket {
        60% {
            transform: translate(
                ${animationCoordinatesX + 30}px,
                ${animationCoordinatesY + 25}px);
            width: 50px;
            height: 50px;
        }
        100% {
            transform: translate(
                ${animationCoordinatesX + 20}px,
                ${animationCoordinatesY + 10}px);
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
}
function moveSelectedProduct(event) {
    const mainImageContainer = document.querySelector('.main-product-image')
    const mainImage = mainImageContainer.querySelector('img')

    const node = (event.target.tagName.toLowerCase() === 'button') ? event.target : event.srcElement.parentElement;

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
                ${animationCoordinatesX + 25}px,
                ${animationCoordinatesY + 30}px);
            width: 50px;
            height: 50px;
        }
        100% {
            transform: translate(
                ${animationCoordinatesX + 20}px,
                ${animationCoordinatesY + 15}px);
            width: 0;
            height: 0;
        }
    }
    `
    document.querySelector('body').appendChild(style)

    interactionButton(node, `
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
        interactionButton(node, `
        <i class="fa-solid fa-basket-shopping"></i>
        ADD TO CART
        `, false)
    }, 2000)
}

function interactionButton(target, DOMelement, boolean) {
    target.innerHTML = DOMelement
    target.disabled = boolean
}

export {
    moveSelectedProduct,
    slickSliderAnimationProduct
}