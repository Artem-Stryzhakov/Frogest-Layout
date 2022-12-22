const categories_children = document.querySelector('.categories').children
const categoriesList = document.querySelector('.list-of-categories')
const categoriesList_links = document.querySelectorAll('.list-of-categories li a')

const showDropdown = () => categoriesList.style.display = 'inherit'
const hideDropdown = () => categoriesList.style.display = 'none'

const addEventListeners = (element) => {
    element.addEventListener('mouseenter', showDropdown)
    element.addEventListener('mouseout', hideDropdown)
}

for (const categoriesChild of categories_children) addEventListeners(categoriesChild)
for (const element of categoriesList.children) addEventListeners(element)

categoriesList_links.forEach(links => addEventListeners(links))