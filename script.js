document.addEventListener("DOMContentLoaded", () => {
    const initiallyDarkMode = localStorage.getItem("dark-mode") === 'true';
    const initBody = document.querySelector('body');

    if (initiallyDarkMode) initBody.setAttribute('class', 'dark-mode');
    else initBody.removeAttribute('class');

    window.addEventListener('darkModeEvent', () => {
        const body = document.querySelector('body')
        const isDarkMode = body.getAttribute('class');

        if (initiallyDarkMode || isDarkMode) body.removeAttribute('class');
        else body.setAttribute('class', 'dark-mode');
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

    // Get the "return to top" button element
    const returnToTopButton = document.getElementById('returnToTop');
    const content = document.getElementById('content');

    // Function to scroll to the top of the page
    function scrollToTop() {
        content.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    }

    // Function to toggle the visibility of the "return to top" button
    function toggleReturnToTopButton() {
        if (content.scrollTop > 200) returnToTopButton.classList.add('active');
        else returnToTopButton.classList.remove('active');
    }
  
    // Add event listeners
    content.addEventListener('scroll', toggleReturnToTopButton);
    returnToTopButton.addEventListener('click', scrollToTop);
});
