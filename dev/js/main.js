var swiper = new Swiper('.swiper-container', {
    slidesPerView: 1.25,
    spaceBetween: 16,

    breakpoints: {
        640: {
            slidesPerView: 2.125,
        },
        1010: {
            slidesPerView: 3.125,
        },
    },
    scrollbar: {
        el: '.swiper-scrollbar',
        hide: true,
    },
});
