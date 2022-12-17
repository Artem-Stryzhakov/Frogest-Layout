/*
let instagramFooter = document.querySelector('.instagramFooter')
let contactFooter = document.querySelector('.contactFooter')
let accountFooter = document.querySelector('.accountFooter')
let companyFooter = document.querySelector('.companyFooter')
let infoFooter = document.querySelector('.infoFooter')
let logoFooter = document.querySelector('.logoFooter')
const extraInfoFooter = document.querySelector('.extraInfoFooter')
const footerContent = document.querySelector('.footer-content')


window.onresize = optimizeFooter
window.onload = optimizeFooter

function optimizeFooter() {
    optimizeLogo()
    optimizeInformation()
    optimizeCompany()
    optimizeYourAccount()
    optimizeContacts()
    optimizeInstagram()
}

const optimizeLogo = () => {
    if (window.innerWidth < 360) logoFooter.remove()
    else {
        if (footerContent.children.length === 1){
            const DOMelement = `
            <div class="logoFooter">
                <img src="images/logo.svg" alt="logo">
                <p>
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                    Lorem Ipsum has been the industry's standard dummy text ever since
                    the 1500s
                </p>
                <div class="SNlinks">
                    <a href="https://www.facebook.com/" target="_blank" class="firstEl">
                        <i class="fa fa-facebook" aria-hidden="true"></i>
                    </a>
                    <a href="https://www.linkedin.com/" target="_blank">
                        <i class="fa fa-linkedin" aria-hidden="true"></i>
                    </a>
                    <a href="https://www.twitter.com" target="_blank">
                        <i class="fa fa-twitter" aria-hidden="true"></i>
                    </a>
                    <a href="https://gmail.com" target="_blank">
                        <i class="fa fa-envelope" aria-hidden="true"></i>
                    </a>
                    <a href="https://instagram.com" target="_blank">
                        <i class="fa fa-instagram" aria-hidden="true"></i>
                    </a>
                </div>
        </div>
        `
            footerContent.insertAdjacentHTML("afterbegin", DOMelement)
            logoFooter = document.querySelector('.logoFooter')
        }
    }
}

const optimizeInformation = () => {
    if (window.innerWidth < 580) infoFooter.remove()
    else {
        if (extraInfoFooter.children.length === 0) {
            const DOMelement = `
                <div class="infoFooter">
                    <h6>INFORMATION</h6>
                    <p>Prices drop</p>
                    <p>New products</p>
                    <p>Best sales</p>
                    <p>Sitemap</p>
                    <p>Stores</p>
                </div>
            `
            extraInfoFooter.insertAdjacentHTML("beforeend", DOMelement)
            infoFooter = document.querySelector('.infoFooter')
        }
    }
}

const optimizeCompany = () => {
    if (window.innerWidth < 740) companyFooter.remove()
    else {
        if (extraInfoFooter.children.length === 1) {
            const DOMelement = `
                <div class="companyFooter">
                    <h6>OUR COMPANY</h6>
                    <p>Delivery</p>
                    <p>Legal Notice</p>
                    <p>About us</p>
                    <p>Secure payment</p>
                    <p>Contact us</p>
                </div>
            `
            extraInfoFooter.insertAdjacentHTML("beforeend", DOMelement)
            companyFooter = document.querySelector('.companyFooter')
        }
    }
}

const optimizeYourAccount = () => {
    if (window.innerWidth < 900) accountFooter.remove()
    else {
        if (extraInfoFooter.children.length === 2) {
            const DOMelement = `
                <div class="accountFooter">
                    <h6>YOUR ACCOUNT</h6>
                    <p>Personal info</p>
                    <p>Orders</p>
                    <p>Credit slips</p>
                    <p>Addresses</p>
                    <p>My wishlists</p>
                </div>
            `
            extraInfoFooter.insertAdjacentHTML("beforeend", DOMelement)
            accountFooter = document.querySelector('.accountFooter')
        }
    }
}

const optimizeContacts = () => {
    if (window.innerWidth < 1180) contactFooter.remove()
    else {
        if (extraInfoFooter.children.length === 3) {
            const DOMelement = `
                <div class="contactFooter">
                    <h6>CONTACT US</h6>
                    <p>
                        <i class="fa fa-map-marker" aria-hidden="true"></i>
                        Frogest OÜ (reg. 12661899), KMKR nr. EE101718990,
                        10138 Tallinn, Estonia, Veerenni 38 E-R 09:00 - 18:00
                    </p>
                    <p>
                        <i class="fa fa-clock-o" aria-hidden="true"></i>
                        E - R 09:00 - 18:00
                    </p>
                    <p>
                        <i class="fa fa-phone" aria-hidden="true"></i>
                        (+372) 6 111 111
                    </p>
                    <p>
                        <i class="fa fa-envelope" aria-hidden="true"></i>
                        info@frog.ee
                    </p>
                </div>
            `
            extraInfoFooter.insertAdjacentHTML("beforeend", DOMelement)
            contactFooter = document.querySelector('.contactFooter')
        }
    }
}

const optimizeInstagram = () => {
    if (window.innerWidth < 1500){
        instagramFooter.remove()
    } else {
        if (extraInfoFooter.children.length === 4) {
            const DOMelement = `
             <div class="instagramFooter">
                <h6>INSTAGRAM</h6>
                <div class="instaPictures">
                    <img src="../images/instagram/instagram1.png" alt="...">
                    <img src="../images/instagram/instagram2.png" alt="...">
                    <img src="../images/instagram/instagram3.png" alt="...">
                    <img src="../images/instagram/instagram4.png" alt="...">
                    <img src="../images/instagram/instagram5.png" alt="...">
                    <img src="../images/instagram/instagram6.png" alt="...">
                </div>
            </div>
            `
            extraInfoFooter.insertAdjacentHTML("beforeend", DOMelement)
            instagramFooter = document.querySelector('.instagramFooter')
        }
    }
}*/