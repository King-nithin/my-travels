let searchBtn = document.querySelector('#search-btn');
let searchBar = document.querySelector('.search-bar-container');
let formBtn = document.querySelector('#login-btn');
let loginForm = document.querySelector('.login-form-container'); // Corrected variable name
let formClose = document.querySelector('#form-close'); // Corrected variable name
let menu = document.querySelector('#menu-bar');
let navbar = document.querySelector('.navbar');
let videoBtn = document.querySelectorAll('.vid-btn');

window.onscroll = () => {
    searchBtn.classList.remove('fa-times');
    searchBar.classList.remove('active');
    menu.classList.remove('fa-times');
    navbar.classList.remove('active');
    loginForm.classList.remove('active'); // Corrected variable name
}

menu.addEventListener('click', () => {
    menu.classList.toggle('fa-times');
    navbar.classList.toggle('active');
});

searchBtn.addEventListener('click', () => {
    searchBtn.classList.toggle('fa-times');
    searchBar.classList.toggle('active');
});

formBtn.addEventListener('click', () => {
    loginForm.classList.add('active'); // Corrected variable name
});

formClose.addEventListener('click', () => { // Corrected variable name
    loginForm.classList.remove('active'); // Corrected variable name
});

videoBtn.forEach(btn => {
    btn.addEventListener('click', () => {
        document.querySelector('.controls .active').classList.remove('active');
        btn.classList.add('active');
        let src = btn.getAttribute('data-src');
        document.querySelector('#video-slider').src = src;
    });
});

// Corrected Swiper initialization
var swiper = new Swiper(".mySwiper", { // Corrected class name
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
});
var swiper = new Swiper(".review-slider", {
    spaceBetween: 20,
    loop: true,
    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
    },
    breakpoints: {
        640: {
            slidesPerView: 1, // Corrected property name
        },
        768: {
            slidesPerView: 2, // Corrected property name
        },
        1024: {
            slidesPerView: 3, // Corrected property name
        },
    },
});

// var swiper = new Swiper(".brand-slider", { // Updated selector
//     spaceBetween: 20,
//     loop: true,
//     autoplay: {
//         delay: 2500,
//         disableOnInteraction: false,
//     },
//     breakpoints: {
//         450: {
//             slidesPerView: 2,
//         },
//         768: {
//             slidesPerView: 3,
//         },
//         991: {
//             slidesPerView: 4,
//         },
//         1200: {
//             slidesPerView: 5,
//         },
//     },
// });
