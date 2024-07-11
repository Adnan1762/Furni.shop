const menuBtn = document.getElementById("menu-btn");
const navLinks = document.getElementById("nav-links");
const menuBtnIcon = menuBtn.querySelector("i");

menuBtn.addEventListener("click", (e) => {
  navLinks.classList.toggle("open");

  const isOpen = navLinks.classList.contains("open");
  menuBtnIcon.setAttribute("class", isOpen ? "ri-close-line" : "ri-menu-line");
});

navLinks.addEventListener("click", (e) => {
  navLinks.classList.remove("open");
  menuBtnIcon.setAttribute("class", "ri-menu-line");
});

const navSearch = document.getElementById("nav-search");

navSearch.addEventListener("click", (e) => {
  navSearch.classList.toggle("open");
});

const scrollRevealOption = {
  distance: "50px",
  origin: "bottom",
  duration: 1000,
};

ScrollReveal().reveal(".header__image img", {
  ...scrollRevealOption,
  origin: "right",
});
ScrollReveal().reveal(".header__content div", {
  duration: 1000,
  delay: 500,
});
ScrollReveal().reveal(".header__content h1", {
  ...scrollRevealOption,
  delay: 1000,
});
ScrollReveal().reveal(".header__content p", {
  ...scrollRevealOption,
  delay: 1500,
});

ScrollReveal().reveal(".deals__card", {
  ...scrollRevealOption,
  interval: 500,
});

ScrollReveal().reveal(".about__image img", {
  ...scrollRevealOption,
  origin: "right",
});
ScrollReveal().reveal(".about__card", {
  duration: 1000,
  interval: 500,
  delay: 500,
});

const swiper = new Swiper(".swiper", {
  loop: true,
});


document.addEventListener("DOMContentLoaded", function() {
  const images = [
    "assets/unsplash1.jpg",
    "assets/unsplash5.jpg",
    "assets/header.jpg",
    "assets/unsplash6.jpg",
    "assets/unsplash7.jpg",
  ];
  let currentImageIndex = 0;
  const headerImageElement = document.getElementById("header-img");

  function changeImage() {
    currentImageIndex = (currentImageIndex + 1) % images.length;
    headerImageElement.style.opacity = 0; // Fade out
    setTimeout(function() {
      headerImageElement.src = images[currentImageIndex];
      headerImageElement.style.opacity = 1; // Fade in
    }, 700); // Delay before changing image to ensure fade out effect
  }

  setInterval(changeImage, 8000); // Change image every 3 seconds
});


