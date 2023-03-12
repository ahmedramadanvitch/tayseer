// start pre-loader
let preLoader = document.querySelector("#pre-loader");

window.addEventListener("load" , () => {
  preLoader.style.display = "none";
})

// ******************************************************* //

// right button in window
let btn = document.querySelector(".btn-up");

// landing var
let landingSection = document.querySelector(".landing");
let landingRemote = document.querySelector(".landing-remote");

// navbar back-ground --- on scrolling
let navbar = document.querySelector(".navbar");
let navbarCenter = document.querySelector(".nav");
let header = document.querySelector("header");

window.onscroll = function () {
    // navbar back-ground --- on scrolling
    if (window.scrollY >= landingSection.offsetTop + 1) {
        navbar.style.cssText = "top: 0px !important; ";
        header.style.cssText = "display: none !important";
        navbarCenter.style.cssText = "top: 0px !important";
    } else {
        navbar.style.cssText = "top: 300px !important;"
        navbar.style.cssText = "@media (min-width: 768px) and (max-width: 989px){top: 180px !important}";
        header.style.cssText = "display: block !important";
        navbarCenter.style.cssText = "top: 110px !important"
    };

    // scroll button right of page

    if (window.scrollY >= 200) {
        btn.style.cssText = "display: block; opacity: .9;"
    } else {
        btn.style.cssText = "display: block; right: -70px"
    };
}
// ***************

// function of button up in window
btn.onclick = function(){
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    })
};

// ***** very Important Code for me -- swiper owl carousel in section- team*****

var swiper = new Swiper(".slide-content", {
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
            slidesPerView: 2,
        },
        950: {
            slidesPerView: 3,
        },
    },
  });

// ****** end ***** //
