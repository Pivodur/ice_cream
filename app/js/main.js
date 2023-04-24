const mySwiper = new Swiper('.slider', {
  slidesPerView: 1,
  spaceBetween: 30,

  pagination: {
    el: '.slider__pagination',
    clickable: true,
  }
});




const MENU_BTN = document.querySelector("#menu__btn");
const MENU_LIST = document.querySelector("#menu__list");

MENU_BTN.addEventListener("click", () => {
  MENU_BTN.classList.toggle("active");
  MENU_LIST.classList.toggle("active");
});
