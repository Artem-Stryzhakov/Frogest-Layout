function slickSlider() {
    $('.products-container-show').slick({
        infinite: false,
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplaySpeed: 7000,
        useCSS:true,
        prevArrow:document.querySelector(".switch-buttons #previous"),
        nextArrow: document.querySelector(".switch-buttons #next"),
        responsive:[
            {breakpoint:1420,settings:{
                    slidesToShow: 3,
                }},
            {breakpoint:1075,settings:{
                    slidesToShow: 2,
                }},
            {breakpoint:992,settings:{
                    slidesToShow: 3,
                }},
            {breakpoint:650,settings:{
                    slidesToShow: 2,
                }},
            {breakpoint: 500, settings: {
                slidesToShow: 1
                }}
        ],
    });
}

export default slickSlider
