'use strict';

const hamburger = document.querySelector(".hamburger");
const spMenu = document.getElementById("spMenu");
const closeBtn = document.querySelector(".close-btn");

hamburger.addEventListener("click", () => {
  spMenu.classList.add("active");
  document.body.style.overflow = "hidden";
});

closeBtn.addEventListener("click", () => {
  spMenu.classList.remove("active");
  document.body.style.overflow = "";
});