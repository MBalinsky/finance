//burger-menu
const burger = document.querySelector('.menu-wrapper');
const menu = document.querySelector('header nav ul');
const headerLink = document.querySelectorAll('.nav__link');

if (burger) {
    burger.addEventListener('click', () => {
        document.querySelector('.hamburger-menu').classList.toggle('animate');
        menu.classList.toggle('menu-active');
    })
    headerLink.forEach(el => {
        el.addEventListener('click', () => {
            document.querySelector('.hamburger-menu').classList.remove('animate');
            menu.classList.remove('menu-active');
        })
    })
}

//поверка на секцию КОНТАКТЫ
const url = window.location.href;
const footerTitle = document.querySelector('.footer-mobile h3');
const footerContactsList = document.querySelector('.footer__contacts-list-mobile');
const footerIframe = document.querySelector('.footer-mobile iframe');
const titleH1 = document.querySelector('h1').getAttribute('contacts');

if (url.indexOf('contacts') != -1) {
    footerTitle.remove();
    footerContactsList.remove();
    footerIframe.remove();
}

if(titleH1 === 'Контакты'){
    footerTitle.remove();
    footerContactsList.remove();
    footerIframe.remove();
}


//modal window team
const teamItems = Array.from(document.querySelectorAll('.our-team__item'));
const modalClose = Array.from(document.querySelectorAll('.our-team__modal-content__wrapper img'));
const html = document.querySelector('html')

if (teamItems.length > 0) {
    teamItems.forEach((el) => {
        el.addEventListener('click', () => {
            el.childNodes[7].classList.add('active');
            el.childNodes[7].childNodes[1].classList.add('active');
            html.classList.add('locked');
        })
    })
    modalClose.forEach((el) => {
        el.addEventListener('click', (e) => {
            e.stopPropagation()
            teamItems.forEach((elem) => {
                elem.querySelector('.our-team__modal-back').classList.remove('active');
                elem.querySelector('.our-team__modal-content').classList.remove('active');
                html.classList.remove('locked');
            })
        })
    })
    window.addEventListener('click', (e) => {
        if(e.target.classList.contains('our-team__modal-back')){
            teamItems.forEach((elem) => {
                elem.querySelector('.our-team__modal-back').classList.remove('active');
                elem.querySelector('.our-team__modal-content').classList.remove('active');
                html.classList.remove('locked');
            })
        }
    })
}

//sliders

const slide = Array.from(document.querySelectorAll('.reviews__slider__slide'))
let swiper
const investmentsSlides = Array.from(document.querySelectorAll(".tourist-destination__item"))
let investSwiper
const advantagesSlides = Array.from(document.querySelectorAll('.advantages__item'))
let advantagesSwiper

if (slide.length > 0) {
    if (slide.length < 3) {
        swiper = new Swiper('.reviews__slider', {
            slidesPerView: 'auto',
            breakpoints: {
                1000:
                    { spaceBetween: 164, }
            },
            centeredSlides: true,
            grabCursor: true,
            longSwipes: false,
            navigation: {
                nextEl: '.review__slider__button-next',
                prevEl: '.review__slider__button-prev'
            }
        })
    }
    else if (slide.length === 3) {
        swiper = new Swiper('.reviews__slider', {
            slidesPerView: 'auto',
            breakpoints: {
                1000:
                    { spaceBetween: 164, }
            },
            centeredSlides: true,
            loop: true,
            loopedSlides: 1,
            grabCursor: true,
            longSwipes: false,
            navigation: {
                nextEl: '.review__slider__button-next',
                prevEl: '.review__slider__button-prev'
            }
        })
    }
    else if (slide.length > 3) {
        swiper = new Swiper('.reviews__slider', {
            direction: 'horizontal',
            slidesPerView: 'auto',
            breakpoints: {
                1000:
                    { spaceBetween: 164, }
            },
            centeredSlides: true,
            loop: true,
            loopedSlides: 2,
            grabCursor: true,
            longSwipes: false,
            navigation: {
                nextEl: '.review__slider__button-next',
                prevEl: '.review__slider__button-prev'
            }
        })
    }
}


if (investmentsSlides.length > 0) {
    if (investmentsSlides.length < 3) {
        investSwiper = new Swiper('.tourist-destination__slider', {
            spaceBetween: 40,
            loop: true,
            navigation: {
                prevEl: '.swiper-button-prev',
                nextEl: '.swiper-button-next'
            },
            breakpoints: {
                320:
                    { slidesPerView: 1 },
                801: { slidesPerView: 2 },
            },
        })
    }
    else if (investmentsSlides.length === 3) {
        investSwiper = new Swiper('.tourist-destination__slider', {
            spaceBetween: 40,
            loop: true,
            navigation: {
                prevEl: '.swiper-button-prev',
                nextEl: '.swiper-button-next'
            },
            breakpoints: {
                320:
                    { slidesPerView: 1 },
                801: { slidesPerView: 2 },
            },
        })
    }
    else if (investmentsSlides.length > 3) {
        investSwiper = new Swiper('.tourist-destination__slider', {
            spaceBetween: 40,
            loop: true,
            navigation: {
                prevEl: '.swiper-button-prev',
                nextEl: '.swiper-button-next'
            },
            breakpoints: {
                320:
                    { slidesPerView: 1 },
                801: { slidesPerView: 2 },
            },
        })
    }
}

if (advantagesSlides.length > 0) {
    if (advantagesSlides.length < 3) {
        advantagesSwiper = new Swiper('.advantages-slider', {
            spaceBetween: 40,
            loop: true,
            navigation: {
                prevEl: '.swiper-button-prev',
                nextEl: '.swiper-button-next'
            },
            breakpoints: {
                320:
                    { slidesPerView: 1 },
                801: { slidesPerView: 2 },
            },
        })
    }
    else if (advantagesSlides.length === 3) {
        advantagesSwiper = new Swiper('.advantages-slider', {
            spaceBetween: 40,
            loop: true,
            navigation: {
                prevEl: '.swiper-button-prev',
                nextEl: '.swiper-button-next'
            },
            breakpoints: {
                320:
                    { slidesPerView: 1 },
                801: { slidesPerView: 2 },
            },
        })
    }
    else if (advantagesSlides.length > 3) {
        advantagesSwiper = new Swiper('.advantages-slider', {
            spaceBetween: 40,
            loop: true,
            navigation: {
                prevEl: '.swiper-button-prev',
                nextEl: '.swiper-button-next'
            },
            breakpoints: {
                320:
                    { slidesPerView: 1 },
                801: { slidesPerView: 2 },
            },
        })
    }
}