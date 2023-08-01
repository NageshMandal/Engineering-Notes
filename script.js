// Get the "return to top" button element
var returnToTopButton = document.getElementById('returnToTop');

// Function to scroll to the top of the page
function scrollToTop() {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
}


// Function to toggle the visibility of the "return to top" button
function toggleReturnToTopButton() {
  if (window.scrollY > 200) {
    returnToTopButton.classList.add('active');
  } else {
    returnToTopButton.classList.remove('active');
  }
}

var alanBtnInstance = alanBtn({
  key: "410d98d30ce6489164a5a62bdae65be32e956eca572e1d8b807a3e2338fdd0dc/stage",
  bottom: '50px',
   left: '50px',
  onCommand: function (commandData) {
   if (commandData && commandData.command === 'openURL') {
           if (commandData.target === '_blank'){
             window.open(commandData.url,'_newtab' + Math.floor(Math.random()*999999));
           } else {
             window.location.href = commandData.url;
           }
         }

   },

  rootEl: document.getElementById("alan-btn"),
});

// Add event listeners
window.addEventListener('scroll', toggleReturnToTopButton);
returnToTopButton.addEventListener('click', scrollToTop);

//! dark mode

const header = document.querySelector(".header");
const toggle = document.querySelector(".toggle-mode");
const body = document.querySelector("body");
const paragraph = document.querySelector("p");
const links = document.querySelectorAll(".nav-link");
const title = document.querySelectorAll("h2");
const para = document.querySelectorAll(".para");
const pcol = document.querySelector(".col-2 p");
if (localStorage.getItem("dark-mode") == "true") {
  body.classList.add("dark-mode");
  header.classList.add("header-dark-mode");
  paragraph.classList.add("header-dark-mode");
  links.forEach(function (e) {
    e.classList.add("header-dark-mode");
  });
  document.querySelector(`.sun`).style.display = "inline-block";
  document.querySelector(`.moon`).style.display = "none";
  title.forEach(function (e) {
    e.classList.add("dark-mode");
  });
}

toggle.addEventListener("click", function (e) {
  const nextIcon = e.target.getAttribute("data-set");
  e.target.style.display = "none";
  console.log(nextIcon);
  //   document.querySelector("")
  if (nextIcon === "sun") {
    body.classList.add("dark-mode");
    header.classList.add("header-dark-mode");
    paragraph.classList.add("header-dark-mode");
    pcol.style.color="white";
    links.forEach(function (e) {
      e.classList.add("header-dark-mode");
    });
    document.querySelector(`.${nextIcon}`).style.display = "inline-block";
    title.forEach(function (e) {
      e.classList.add("dark-mode");
    });
    localStorage.setItem("dark-mode", true);
  } else {
    body.classList.remove("dark-mode");
    header.classList.remove("header-dark-mode");
    paragraph.classList.remove("header-dark-mode");
    pcol.style.color="black";
    links.forEach(function (e) {
      e.classList.remove("header-dark-mode");
    });
    document.querySelector(`.${nextIcon}`).style.display = "inline-block";
    title.forEach(function (e) {
      e.classList.remove("dark-mode");
    });
    localStorage.setItem("dark-mode", false);
  }
});


// Script for to get Github contributors list
const contributors = document.getElementById("contributors");
const repo = "Engineering-Notes-Website";
const owner = "NageshMandal";
const apiURL = `https://api.github.com/repos/${owner}/${repo}/contributors`;


function displayContributors(contributorsList) {
  contributorsList.forEach((contributor) => {
    // create anchor tag and set relevant attributes
    const link = document.createElement("a");
    link.setAttribute("href", contributor.html_url);
    link.setAttribute("target", "_blank");

    // create image element and set relevant attributes
    const avatar = document.createElement("img");
    avatar.setAttribute("class", "avatar");
    avatar.setAttribute("src", contributor.avatar_url);
    avatar.setAttribute("title", contributor.login);
    avatar.setAttribute("alt", contributor.login);

    link.appendChild(avatar);
    contributors.appendChild(link);
  });
}

// get contributors list  from github API
async function getContributorsList() {
  try {
    const response = await fetch(apiURL);
    const contributors = await response.json();
    displayContributors(contributors);
  } catch (error) {
    console.log(error);
  }
}


getContributorsList();

// Search bar functionality
const searchForm = document.getElementById("search-form");
const searchInput = document.getElementById("search-input");

searchForm.addEventListener("submit", function (event) {
  event.preventDefault();
  const searchTerm = searchInput.value.toLowerCase();
  searchContributors(searchTerm);
});

function searchContributors(searchTerm) {
  const contributorLinks = contributors.getElementsByTagName("a");
  for (const link of contributorLinks) {
    const username = link.getAttribute("title").toLowerCase();
    if (username.includes(searchTerm)) {
      link.style.display = "inline-block";
    } else {
      link.style.display = "none";
    }
  }
}



