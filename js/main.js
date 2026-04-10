var swiper = new Swiper(".portfolio__list", {
    slidesPerView: 3,
    spaceBetween: 0,
    centeredSlides: true,
    loop: true,

    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    breakpoints: {
        0: {
            slidesPerView: 1,
            spaceBetween: 0
        },
        // When window width is >= 640px
        640: {
            slidesPerView: 3,
            spaceBetween: 0
        },

    }
});

document.addEventListener("DOMContentLoaded", function () {
   const menu_btn = document.querySelector('.btn__menu');
   const menu = document.querySelector('.menu');
   const bb = document.querySelector('body');
    menu_btn.addEventListener('click', function (){
        menu.classList.toggle('show');
        bb.classList.toggle('no-scroll')
    })
});