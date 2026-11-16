document.addEventListener('DOMContentLoaded', () => {
// about section swiper
  if (document.querySelector('.aboutSwiper')) {
    const swiper = new Swiper('.aboutSwiper', {
      loop: true,
      centeredSlides: true,
      spaceBetween: 0,
      slidesPerView: 1,
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
      breakpoints: {
        0: {
          slidesPerView: 1,
        },
        640: {
          slidesPerView: 1,
        },
        900: {
          slidesPerView: 1,
        },
      },
    });

    window.aboutSwiper = swiper;
  }
});
