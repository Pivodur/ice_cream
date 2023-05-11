
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


const openModalButtons = document.querySelectorAll("[data-modal-target]");
const closeModalButtons = document.querySelectorAll("[data-close-button]");
const overlay = document.querySelector(".overlay");


openModalButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const modal = document.querySelector(button.dataset.modalTarget);
    openModal(modal);
  })
})

closeModalButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const modal = button.closest(".modal");
    closeModal(modal);
  })
})

overlay.addEventListener("click", () => {
  const modals = document.querySelectorAll(".modal.active");
  modals.forEach(modal => {
    closeModal(modal)
  })
})

function openModal(modal) {
  if (modal == null) return;
  modal.classList.add("active");
  overlay.classList.add("active");
}

function closeModal(modal) {
  if (modal == null) return;
  modal.classList.remove("active");
  overlay.classList.remove("active");
}

videojs(document.querySelector(".video-js"));
