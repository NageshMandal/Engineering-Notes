
const body = document.querySelector("body");
const header = document.querySelector(".header");
const toggle = document.querySelector(".toggle-mode");
const links = document.querySelectorAll(".nav-link");


toggle.addEventListener("click", function (e) {
  const nextIcon = e.target.getAttribute("data-set");
  e.target.style.display = "none";
  console.log(nextIcon);
  //   document.querySelector("")
  if (nextIcon === "sun") {
    document.querySelector(`.sun`).style.display = "inline-block";
    document.querySelector(`.moon`).style.display = "none";
    body.classList.add("dark-mode");
    header.classList.add("header-dark-mode");
    links.forEach(function (e) {
      e.classList.add("header-dark-mode");
    });
  } else {
    document.querySelector(`.moon`).style.display = "inline-block";
    document.querySelector(`.sun`).style.display = "none";
    body.classList.remove("dark-mode");
    header.classList.remove("header-dark-mode");
    links.forEach(function (e) {
      e.classList.remove("header-dark-mode");
    });
  }
});
