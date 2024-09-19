import Swiper from "https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.mjs";

import replaceSVGImages from "./replaceSVGImages.js";

const swiper = new Swiper(".swiper", {
  // Optional parameters
  // direction: 'vertical',
  loop: true,

  // Navigation arrows
  //   navigation: {
  //     nextEl: ".swiper-button-prev",
  //     prevEl: ".swiper-button-next",
  //   },

  slidesPerView: 3,
  //   spaceBetween: 30,
  speed: 600,
  pagination: {
    el: ".empower__pagination",
    clickable: true,
  },
});

replaceSVGImages();
