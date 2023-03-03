document.addEventListener("DOMContentLoaded", () => {
  // window.addEventListener("resize", () => {
  //   InitSwiper();
  // });

  const slidesCaptions = document.querySelectorAll(".caption");
  // const thimbSlides = document.querySelectorAll(".thimb-slide");
  const thimbSliderWrapper = document.querySelector(
    ".thimb-slider .swiper-wrapper"
  );

  const thimbSlider = new Swiper(".thimb-slider", {
    // loop: true,
    spaceBetween: 25,
    slidesPerView: 8,
    freeMode: true,
    watchSlidesProgress: true,
  });

  slidesCaptions?.forEach(function (title, i) {
    thimbSliderWrapper.insertAdjacentHTML(
      "beforeend",
      `<div class="swiper-slide thimb-slide">
        ${title.innerHTML}
                </div>`
    );
  });

  const collectionsSlider = new Swiper(".collections-slider", {
    observer: true,
    observeParents: true,
    grabCursor: true,
    slidesPerView: "auto",
    preloadImages: true,
    lazy: true,
    spaceBetween: 20,
    speed: 1800,
    parallax: true,
    pagination: {
      el: ".swiper-pagination",
      type: "fraction",
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    thumbs: {
      swiper: thimbSlider,
    },
  });
});
