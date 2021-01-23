const hamburger = document.querySelector(".header .navBar .navList .hamburger");
const mobileMenu = document.querySelector(".header .navBar .navList ul");
const header = document.querySelector(".header.container");

hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("active");
  mobileMenu.classList.toggle("active");
});

document.addEventListener("scroll", () => {
  var scrollPosition = window.scrollY;
  if (scrollPosition > 250) {
    header.style.backgroundColor = "#29323c";
  } else {
    header.style.backgroundColor = "transparent";
  }
});
