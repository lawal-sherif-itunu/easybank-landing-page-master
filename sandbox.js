const hamburger = document.querySelector(".mobile-nav-bar");
const close = document.querySelector(".mobile-close-bar");

const backgroundFade = document.querySelector(".background-fade");
const navLinks = document.querySelector(".mobile-nav-links");

hamburger.addEventListener("click", (e) => {
  hamburger.style.display = "none";
  close.style.display = "block";
  backgroundFade.style.display = "block";
  navLinks.style.display = "block";
});

close.addEventListener("click", (e) => {
  hamburger.style.display = "block";
  close.style.display = "none";
  backgroundFade.style.display = "none";
  navLinks.style.display = "none";
});

backgroundFade.addEventListener("click", (e) => {
  hamburger.style.display = "block";
  close.style.display = "none";
  backgroundFade.style.display = "none";
  navLinks.style.display = "none";
});
