// ***** very Important Code for me -- swiper owl carousel in section- team*****
var swiper = new Swiper(".slide-content-new", {
    slidesPerView: 3,
    spaceBetween: 25,
    loop: true,
    centerSlide: 'true',
    fade: 'true',
    grabCursor: 'true',
    pagination: {
    el: ".swiper-pagination",
    clickable: true,
    dynamicBullets: true,
    },
    navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
    },
    breakpoints:{
        0: {
            slidesPerView: 1,
        },
        520: {
            slidesPerView: 1,
        },
        950: {
            slidesPerView: 1,
        },
    },
    autoplay: {
        delay: 2000,
    },
});

// ****** end ***** //

