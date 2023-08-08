   
(function ($) {
    "use strict";

    // Clients Carousel
    $('.owl-carousel').owlCarousel({
        loop: true,
        margin: 10,
        dots: false,
        nav: true,
        responsive: {
            0:{
                items:1
            },
            600:{
                items:4
            },
            1000:{
                items:5
            }
        }
    })

    // Projects Table
    let table = new DataTable('#projectsTable', {
        responsive: true
    });

    // Projects Table
    let cartTable = new DataTable('#cartTable', {
        responsive: true
    });

})(jQuery);