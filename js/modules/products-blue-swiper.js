$(document).ready(function () {
    $('.product-blue-swiper__carousel').each(function (index, value) {
        var products_v2_swiper = new Swiper(value, {
            // Optional parameters
            direction: 'horizontal',
            slidesPerView: 4,
            slidesPerGroup: 1,
            spaceBetween: 30,
            autoplay: false,
            // mousewheel: true,
            simulateTouch: true,

            // Responsive breakpoints
            breakpoints: {
                // when window width is >= 320px
                320: {
                    slidesPerView: 2.2,
                    slidesPerGroup: 1,
                    spaceBetween: 10,
                    autoplay: false
                },

                // when window width is >= 480px
                480: {
                    slidesPerView: 2.5,
                    slidesPerGroup: 1,
                    spaceBetween: 20,
                    autoplay: false,
                    navigation: false
                },

                // when window width is >= 767px
                767: {
                    slidesPerView: 3.5,
                    slidesPerGroup: 1,
                    spaceBetween: 20,
                    autoplay: false
                },

                // when window width is >= 991px
                991: {
                    slidesPerView: 3.5,
                    slidesPerGroup: 1,
                    spaceBetween: 25,
                    autoplay: false
                },

                // when window width is >= 1200px
                1200: {
                    slidesPerView: 3,
                    slidesPerGroup: 1,
                    spaceBetween: 30,
                    autoplay: false
                },
            }
        });
    });
})