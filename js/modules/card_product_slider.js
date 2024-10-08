const productSlider = new Swiper(".product-slider__swiper", {
    loop: true,

    // Navigation arrows
    navigation: {
        nextEl: ".product-slider__arrow-left",
        prevEl: ".product-slider__arrow-right",
    },
    slideToClickedSlide: true,

    // autoHeight: true,
    // slidesPerView: "auto",
    slidesPerView: 3,
    spaceBetween: 30,
    watchOverflow: true,
    breakpoints: {
        320: {
            slidesPerView: 2,
            // spaceBetween: 10,
        },
        480: {
            slidesPerView: 3,
            // spaceBetween: 15,
        },
    },
    speed: 600,
});
