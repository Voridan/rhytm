'use strict'
const reviewsSwiperCheck = document.querySelector('.swiper-reviews');
if (reviewsSwiperCheck) {
    const swiper = new Swiper('.swiper-reviews', {
        loop: true,
        autoHeight: true,
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
        touchRatio: 1,   
        grabCursor: true,
    });    
}
