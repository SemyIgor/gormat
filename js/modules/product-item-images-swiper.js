$(document).ready(function () {
    $('.product-item__images-swiper').each(function (index, value) {
        var product_item_images_swiper = new Swiper(value, {
            // Optional parameters
            direction: 'horizontal',
            slidesPerView: 1,
            slidesPerGroup: 1,
            spaceBetween: 0,
            autoplay: false,
            // mousewheel: true,
            simulateTouch: true,

            autoplay: {
                delay: 1000,
                disableOnInteraction: true,
            },

            on: {
                init() {
                    this.el.addEventListener('mouseenter', () => {
                        this.autoplay.start();
                    });

                    this.el.addEventListener('mouseleave', () => {
                        this.autoplay.stop();
                    });
                }
            },

            pagination: {
                el: '.product-item__images-swiper-pagination',
                clickable: true,
                type: 'bullets'
            }
        });

        product_item_images_swiper.autoplay.stop();
    });
})