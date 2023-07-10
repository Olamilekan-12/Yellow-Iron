const mobileNav = document.querySelectorAll(".bottom-nav");
const closeModal = document.querySelector(".close-modal");
const ModalOne = document.querySelector(".modal-one");

mobileNav.forEach((link, index) => {
  link.addEventListener("click", () => {
    mobileNav.forEach((link) => {
      link.classList.remove("active");
      ModalOne.classList.remove("close");
    });
    link.classList.add("active");
  });
});

closeModal.addEventListener("click", () => {
  ModalOne.classList.add("close");
});
