// SEARCH BAR VALIDATION PRODUCT //
const listOfSearchImg = document.querySelectorAll('.search-result .ac-odd a img')
const listOfSearchName = document.querySelectorAll('.search-result .product-name-seach')
const listOfSearchPrice = document.querySelectorAll('.search-result .price-search')

const searchElements = {
    searchbars: [$("#navbarSupportedContent .form-control"),
        $("#searchbar .form-control")],
    searchResults: [$("#navbarSupportedContent .search-result"),
        $("#searchbar .search-result")]
}

const getData = (data) => {
    const get_data = JSON.parse(data)
    const productLength = get_data['productName'].length

    for (let i = 0; i < productLength * 2; i++) {
        if (i < productLength) {
            listOfSearchImg[i].src = get_data['pictures'][i]
            listOfSearchName[i].innerHTML = get_data['productName'][i]
            listOfSearchPrice[i].innerHTML = `${get_data['price'][i]} €`
        } else {
            listOfSearchImg[i].src = get_data['pictures'][i - productLength]
            listOfSearchName[i].innerHTML = get_data['productName'][i - productLength]
            listOfSearchPrice[i].innerHTML = `${get_data['price'][i - productLength]} €`
        }
    }
}

function ajaxFunc(element, results) {
    if (element.val() !== "") {
        results.css('display', 'grid')
        element.css('z-index', '4')
        results.css('z-index', '3')
        $.ajax ({
            url: "SearchbarData.php",
            type: "GET",
            success: getData
        })
    } else {
        results.css('display', 'none')
        element.css('z-index', '3')
        results.css('z-index', '0')
    }
}

export function showProductReq() {
    $(document).ready(() => {
        const searchResultsCount = $('.search-result').toArray()

        $("#navbarSupportedContent .form-control").on('focus', function () {
            $("#navbarSupportedContent input[name='product']").on('keyup', function () {
                ajaxFunc($(this), $('#navbarSupportedContent .search-result'))
            })
        })

        $("#searchbar .form-control").on('focus', function () {
            $("#searchbar input[name='product']").on('keyup', function () {
                ajaxFunc($(this), $('#searchbar .search-result'))
            })
        })

        for (let i = 0; i < searchResultsCount.length; i++) {
            $(searchElements.searchbars[i]).on('blur', function () {
                $(searchElements.searchResults[i]).css('display', 'none')
            })
        }
    })
}

// ============================ //