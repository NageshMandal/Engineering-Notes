const header = document.querySelector(".header");
const toggle = document.querySelector(".toggle-mode");
const body = document.querySelector("body");
const links = document.querySelectorAll(".nav-link");
const para = document.querySelectorAll("p");
const h1 = document.querySelector("h1 a");
if (localStorage.getItem("dark-mode") == "true") {
  body.classList.add("dark-mode");
  h1.classList.add("dark-mode");
  links.forEach(function (e) {
    e.classList.add("dark-mode");
  });
  para.forEach(function (e) {
    e.style.color = "#2c3333";
  });
  document.querySelector(`.sun`).style.display = "inline-block";
  document.querySelector(`.moon`).style.display = "none";
}

toggle.addEventListener("click", function (e) {
  const nextIcon = e.target.getAttribute("data-set");
  e.target.style.display = "none";
  console.log(nextIcon);
  //   document.querySelector("")
  if (nextIcon === "sun") {
    body.classList.add("dark-mode");
    h1.classList.add("dark-mode");
    links.forEach(function (e) {
      e.classList.add("dark-mode");
    });
    para.forEach(function (e) {
      e.style.color = "#2c3333";
    });
    document.querySelector(`.${nextIcon}`).style.display = "inline-block";
    localStorage.setItem("dark-mode", true);
  } else {
    body.classList.remove("dark-mode");
    h1.classList.remove("dark-mode");
    links.forEach(function (e) {
      e.classList.remove("dark-mode");
    });
    para.forEach(function (e) {
      e.style.color = "white";
    });
    document.querySelector(`.${nextIcon}`).style.display = "inline-block";
    localStorage.setItem("dark-mode", false);
  }
});
