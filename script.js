"use strict";

// Selection

const menuLinks = document.querySelectorAll("#menu-links");
const openMenu = document.querySelector("#open");
const closeMenu = document.querySelector("#close");
const ulHeader = document.querySelector("#ulheader");

// hamburgur

openMenu.addEventListener("click", function () {
  ulHeader.classList.remove("hidden");
  openMenu.classList.toggle("hidden");
  closeMenu.classList.toggle("hidden");
});

closeMenu.addEventListener("click", function () {
  ulHeader.classList.add("hidden");
  closeMenu.classList.toggle("hidden");
  openMenu.classList.toggle("hidden");
});

menuLinks.forEach((link) =>
  link.addEventListener("click", function () {
    ulHeader.classList.add("hidden");
    closeMenu.classList.toggle("hidden");
    openMenu.classList.toggle("hidden");
  })
);
