const categories_children = document.querySelector('.categories').children
const categoriesList = document.querySelector('.list-of-categories')
const categoriesList_links = document.querySelectorAll('.list-of-categories li a')

const showDropdown = () => categoriesList.style.display = 'inherit'
const hideDropdown = () => categoriesList.style.display = 'none'

for (const categoriesChild of categories_children) {
    categoriesChild.addEventListener('mouseenter', showDropdown)
    categoriesChild.addEventListener('mouseout', hideDropdown)
}

categoriesList.addEventListener('mouseenter', showDropdown)

for (const categoriesListElement of categoriesList.children) {
    categoriesListElement.addEventListener('mouseenter', showDropdown)
    categoriesListElement.addEventListener('mouseout', hideDropdown)
}

categoriesList_links.forEach((links) => {
    links.addEventListener('mouseenter', showDropdown)
    links.addEventListener('mouseout', hideDropdown)
})