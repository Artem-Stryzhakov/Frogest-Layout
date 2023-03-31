export function slickTrack() {
    $('.products-container-show').slick({
        infinite: true,
        slidesToShow: 4,
        slidesToScroll: 1,
        draggable: false,
        prevArrow:document.querySelector(".switch-buttons #previous"),
        nextArrow: document.querySelector(".switch-buttons #next"),
        responsive:[
            {breakpoint:1420,settings:{
                    slidesToShow:3,
                }},
            {breakpoint:1075,settings:{
                    slidesToShow:2,
                }},
            {breakpoint:992,settings:{
                    slidesToShow:3,
                }},
            {breakpoint:650,settings:{
                    slidesToShow:2,
                }},
            {breakpoint: 500, settings: {
                slidesToShow: 1
                }}
        ],
    });
}
