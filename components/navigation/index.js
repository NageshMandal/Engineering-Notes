const navigationTemplate = document.createElement('template');
navigationTemplate.innerHTML = `
<link rel="stylesheet" href="https://kit-free.fontawesome.com/releases/latest/css/free.min.css" media="all" crossorigin="anonymous">
<link rel="stylesheet" href="components/navigation/styles.css">
<header>
    <div class="nav-logo">
        <a href="https://code-engineering.netlify.app/">
            <img src="images/logo1.png" alt="Chaibasa Engineering College" width="200px">
        </a>
    </div>
    <nav>
        <menu>
            <li>
                <a class="nav-link" href="Gallary-section/index.html">
                    Gallery
                </a>
            </li>
            <li>
                <a class="nav-link" href="projects.html">
                    Projects
                </a>
            </li>
            <li>
                <a class="nav-link" href="library.html">
                    Library
                </a>
            </li>
            <li>
                <a class="nav-link" href="placement.html">
                    Placements
                </a>
            </li>
            <li>
                <a class="nav-link" href="contactus.html">
                    Contact
                </a>
            </li>
            <div class="nav-search">
                <form id="search-form" action="#" method="GET">
                    <i class="fa fa-search"></i>
                    <input id="search-input" type="text" placeholder="Search">
                    <button type="button">
                        <i class="fa fa-microphone"></i>
                    </button>
                </form>
            </div>
        </menu>
    </nav>
    <div class="nav-dark-mode">
        <button data-non-selected="true" class="btn-mode moon">
            <img src="images/moon.png" alt="dark-mode">
        </button>
        <button class="btn-mode sun">
            <img src="images/sun.png"  alt="light-mode">
        </button>
    </div>
</header>
`
class HomeNavigation extends HTMLElement {
    constructor() {
        super();
        this
            .attachShadow({ mode: "open" })
            .appendChild(navigationTemplate.content.cloneNode(true));
    }

    
    connectedCallback() {
        const darkModeToggle = this.shadowRoot.querySelector('.nav-dark-mode');
        const initiallyDarkMode = localStorage.getItem("dark-mode") === 'true';
        
        if (initiallyDarkMode) {
            const modes = this.shadowRoot.querySelectorAll('.btn-mode');
            modes[0].removeAttribute('data-non-selected'); // moon button
            modes[1].setAttribute('data-non-selected', 'true'); //sun button

            const header = this.shadowRoot.querySelector('header');
            header.setAttribute('data-dark-mode', 'true');
        }
        
        darkModeToggle.addEventListener('click', () => {
            const darkModeEvent = new CustomEvent('darkModeEvent');
            window.dispatchEvent(darkModeEvent);
            localStorage.setItem(
                "dark-mode",
                !(localStorage.getItem("dark-mode") === 'true')
            );

            const modes = this.shadowRoot.querySelectorAll('.btn-mode');
            modes.forEach(
                element => {
                    if (element.getAttribute('data-non-selected'))
                        element.removeAttribute('data-non-selected');
                    else element.setAttribute('data-non-selected', 'true');
                }
            )
            const header = this.shadowRoot.querySelector('header');
            if (header.getAttribute('data-dark-mode'))
                header.removeAttribute('data-dark-mode');
            else header.setAttribute('data-dark-mode', 'true');
        })
    }
    disconnectedCallback() {
        const darkModeToggle = this.shadowRoot.querySelector('.nav-dark-mode');
        darkModeToggle.removeEventListener('click');
    }
}

customElements.define('home-navigation', HomeNavigation);