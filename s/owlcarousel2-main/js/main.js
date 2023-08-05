$(document).ready(function () {
    $(".owl-carousel").owlCarousel({
        loop:true,
        margin:10,
        nav:true,
        dots:false,
        dots:false,
        // autoplay:true,
        // autoplaySpeed:1500,
        // autoplayTimeout:2000,
        // autoWidth:true,
        dotsEach:true,
        // stagePadding:100,
        // center:true,
        navText:[
            '<img src="https://cdn.icon-icons.com/icons2/1993/PNG/512/arrow_arrows_back_direction_left_navigation_right_icon_123237.png" alt="Назад">',
            ' <img src="https://cdn.icon-icons.com/icons2/1993/PNG/512/arrow_arrows_back_direction_left_navigation_right_icon_123236.png" alt="Вперед">'
        ],
        responsive:{
            0:{
                items:1,
                navText:[]
            },
            768:{
                items:2,
                dots:true,
                navText:[]
            },
            1000:{
                items:3
            }
        }
    });
});
