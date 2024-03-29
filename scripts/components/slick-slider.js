const objectElements = {
    infinite: false,
    slidesToScroll: 1,
    autoplaySpeed: 7000,
    prevArrow: document.querySelector(".switch-buttons #previous"),
    nextArrow: document.querySelector(".switch-buttons #next")
}

function slickSliderTopDeals() {
    $('.products-container-show').slick({
        slidesToShow: 4,
        ...objectElements,
        responsive:[
            {breakpoint:1530,settings:{
                    slidesToShow: 3,
                }},
            {breakpoint:1270,settings:{
                    slidesToShow: 2,
                }},
            {breakpoint: 1050, settings: {
                slidesToShow: 1
                }},
            {breakpoint:992,settings:{
                    slidesToShow: 3,
                }},
            {breakpoint:700,settings:{
                    slidesToShow: 2,
                }},
            {breakpoint:500, settings: {
                    slidesToShow: 1
                }}
        ]
    })
}
function slickSliderSelected() {
    $('.selected-products-show').slick({
        slidesToShow: 5,
        ...objectElements,
        responsive:[
            {breakpoint:1420,settings:{
                    slidesToShow: 4,
                }},
            {breakpoint:1075,settings:{
                    slidesToShow: 3,
                }},
            {breakpoint:992,settings:{
                    slidesToShow: 3,
                }},
            {breakpoint:810,settings:{
                    slidesToShow: 2,
                }},
            {breakpoint: 560, settings: {
                    slidesToShow: 1
                }}
        ]
    })
}

export {
    slickSliderTopDeals,
    slickSliderSelected
}