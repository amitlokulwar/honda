jQuery(document).ready(function($){
    $('.banner .banner-inner').slick({
        autoplay: true,
        autoplaySpeed: 2500,
        dots: false,
        infinite: true,
        prevArrow: $('.prev-btn'),
        nextArrow: $('.next-btn'),
    });

});