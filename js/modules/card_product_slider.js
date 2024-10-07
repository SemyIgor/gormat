const productSlider = new Swiper(".product-slider__swiper", {
    loop: true,
  
    // Navigation arrows
    navigation: {
      nextEl: ".product-slider__arrow-left",
      prevEl: ".product-slider__arrow-right",
    },
  
    slidesPerView: 3,
    spaceBetween: 10,
    // breakpoints: {
    //   320: {
    //     slidesPerView: 2,
    //     spaceBetween: 10,
    //   },
    //   500: {
    //     slidesPerView: 3,
    //     spaceBetween: 15,
    //   },
    // },
    // autoHeight: true,
    speed: 600,
  });
