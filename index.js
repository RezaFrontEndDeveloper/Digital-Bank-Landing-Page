"use stirct";

const hamburger = document.querySelector(".hamburger-menu");
const list = document.querySelector(".list");

hamburger.addEventListener("click", () => {
  list.classList.toggle("open");
});
