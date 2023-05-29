import {listOfSearchImg, listOfSearchName, listOfSearchPrice} from "../variables.js";

// SEARCH BAR VALIDATION PRODUCT //
const searchElements = {
    searchbars: [$("#navbarSupportedContent .form-control"),
        $(".searchbar-mobile .form-control")],
    searchResults: [$("#navbarSupportedContent .search-result"),
        $(".searchbar-mobile .search-result")]
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

function ajaxFunc(searchbar, results) {
    if (searchbar.val() !== "") {
        results.css('display', 'grid')
        searchbar.css('z-index', '11')
        results.css('z-index', '10')

        // make request to backend (PHP file)
        $.ajax ({
            url: "../SearchbarData.php",
            type: "GET",
            success: getData
        })
    } else {
        results.css('display', 'none')
        searchbar.css('z-index', '3')
        results.css('z-index', '0')
    }
}

function showProductReq() {
    const searchResultsCount = $('.search-result').toArray()

    $("#navbarSupportedContent .form-control").on('focus', function () {
        $("#navbarSupportedContent input[name='product']").on('keyup', function () {
            ajaxFunc($(this), $('#navbarSupportedContent .search-result'))
        })
    })

    $(".searchbar-mobile .form-control").on('focus', function () {
        $(".searchbar-mobile input[name='product']").on('keyup', function () {
            ajaxFunc($(this), $('.searchbar-mobile .search-result'))
        })
    })

    for (let i = 0; i < searchResultsCount.length; i++) {
        $(searchElements.searchbars[i]).on('blur', function () {
            $(searchElements.searchResults[i]).css('display', 'none')
        })
    }
}
// ============================ //
export default showProductReq