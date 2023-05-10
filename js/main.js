//burger-menu
const burger = document.querySelector('.menu-wrapper');
const menu = document.querySelector('header nav ul')

if(burger){
    burger.addEventListener('click', () => {
        document.querySelector('.hamburger-menu').classList.toggle('animate');
        menu.classList.toggle('menu-active');
    })
}

const url = window.location.href;
const footerTitle = document.querySelector('.footer-mobile h3');
const footerContactsList = document.querySelector('.footer__contacts-list-mobile');
const footerIframe = document.querySelector('.footer-mobile iframe');

if(url.indexOf('contacts') != -1){
    footerTitle.remove();
    footerContactsList.remove();
    footerIframe.remove();
}






















const slide = Array.from(document.querySelectorAll('.swiper-slide'))
let swiper

if(slide.length < 3){
    swiper = new Swiper('.swiper', {
        slidesPerView: 'auto',
        breakpoints:{
            1000:
            {spaceBetween: 164,}
        },
        centeredSlides: true,
        grabCursor: true,
        longSwipes: false,
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev'
        }
    })
}
else if(slide.length === 3){
    swiper = new Swiper('.swiper', {
        slidesPerView: 'auto',
        breakpoints:{
            1000:
            {spaceBetween: 164,}
        },
        centeredSlides: true,
        loop: true, 
        loopedSlides: 1,
        grabCursor: true,
        longSwipes: false,
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev'
        }
    })
}
else if (slide.length > 3){
    swiper = new Swiper('.swiper', {
        direction: 'horizontal',
        slidesPerView: 'auto',
        breakpoints:{
            1000:
            {spaceBetween: 164,}
        },
        centeredSlides: true,
        loop: true, 
        loopedSlides: 2,
        grabCursor: true,
        longSwipes: false,
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        }
    })
}