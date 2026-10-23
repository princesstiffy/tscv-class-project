// nav color change on team section scroll
document.addEventListener('DOMContentLoaded', () => {
  const nav = document.querySelector('header nav');
  const teamSection = document.querySelector('#team');

  if (nav && teamSection) {
    const updateNavColor = () => {
      const teamReachedNav = teamSection.getBoundingClientRect().top <= nav.getBoundingClientRect().bottom;
      nav.classList.toggle('nav-on-team', teamReachedNav);
    };

    updateNavColor();
    window.addEventListener('scroll', updateNavColor, { passive: true });
    window.addEventListener('resize', updateNavColor);
  }

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
