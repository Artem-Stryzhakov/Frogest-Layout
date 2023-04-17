const cardsProduct = document.querySelectorAll('.add-to-basket')
const icon = document.querySelector('.to-basket')

const style = document.createElement('style')
style.type = 'text/css'

function moveToBasket() {
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
        //getDOMImage.insertAdjacentElement('beforebegin', picture)

        const animationCoordinatesX = icon.getBoundingClientRect().x - productImgCoor.x
        const animationCoordinatesY = icon.getBoundingClientRect().y - productImgCoor.y

        console.log(`X: ${picture.getBoundingClientRect().x}`)
        console.log(`Y: ${picture.getBoundingClientRect().y}`)

        const slickPosition = document.querySelector('.products-container-show').getBoundingClientRect()

        picture.style.left = `${productImgCoor.x - slickPosition.x}px`

        style.innerHTML = `
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
            const counterP = document.querySelector('.count-product').innerHTML
            const count = parseInt(counterP) + 1
            document.querySelector('.count-product').innerHTML = count
            //document.querySelector('.data-for-buttons .cart-total') +=
            style.innerHTML += `
            .basket-put {
                animation: backForward 0.4s forwards;
            }
            `
        }, 700)
        setTimeout(() => {
            node.innerHTML = `
            <i class="fa-solid fa-cart-shopping"></i>
            `
            node.style.pointerEvents = 'inherit'
            //node.style.background = '#c7c7c7'
            picture.remove()
        }, 1500)
    }))
}

export default moveToBasket