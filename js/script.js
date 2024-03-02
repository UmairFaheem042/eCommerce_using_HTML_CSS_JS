// ! Hamburger Menu

const menuBtn = document.querySelector(".header-right");
const mobileNavBar = document.querySelector("nav ul");

menuBtn.addEventListener("click", () => {
  mobileNavBar.classList.toggle("active");
});