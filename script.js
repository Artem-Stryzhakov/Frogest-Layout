const nav_categories = document.querySelectorAll('.nav-categories ul li')

nav_categories.forEach(buttons => buttons.addEventListener('click', () => {
    buttons.classList.toggle('focus-color')
}))