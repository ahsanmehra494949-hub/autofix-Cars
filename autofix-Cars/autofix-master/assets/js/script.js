'use strict';



/**
 * MOBILE NAVBAR TOGGLE
 */

const navbar = document.querySelector("[data-navbar]");
const navToggler = document.querySelector("[data-nav-toggler]");

navToggler.addEventListener("click", function () {
  navbar.classList.toggle("active");
  this.classList.toggle("active");
});



/**
 * CLOSE NAVBAR WHEN CLICKING ON A LINK (Mobile)
 */

const navLinks = document.querySelectorAll(".navbar-link");

navLinks.forEach(link => {
  link.addEventListener("click", function () {
    navbar.classList.remove("active");
    navToggler.classList.remove("active");
  });
});



/**
 * CLOSE NAVBAR ON ESC KEY PRESS
 */

document.addEventListener("keydown", function (e) {
  if (e.key === "Escape") {
    if (navbar.classList.contains("active")) {
      navbar.classList.remove("active");
      navToggler.classList.remove("active");
    }
  }
});



/**
 * CLOSE NAVBAR ON WINDOW RESIZE (When screen becomes desktop size)
 */

window.addEventListener("resize", function () {
  if (window.innerWidth >= 992) {
    navbar.classList.remove("active");
    navToggler.classList.remove("active");
  }
});