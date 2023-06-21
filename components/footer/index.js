const footerTemplate = document.createElement('template');
footerTemplate.innerHTML = `
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/@fortawesome/fontawesome-free@6.2.1/css/fontawesome.min.css" media="all" crossorigin="anonymous">
<link rel="stylesheet" href="https://kit-free.fontawesome.com/releases/latest/css/free.min.css" media="all" crossorigin="anonymous">
<link rel="stylesheet" href="components/footer/styles.css">
<footer>
    <section>
        <img src="images/nagesh.png" alt="Nagesh Mandal" width="80px">
        <h5>Nagesh Mandal</h5>
        <p>Full Stack Web Developer</p>
        <a href="https://www.instagram.com/nagesh_mandal7_5_/"><p>Contact</p></a>
    </section>
    <section>
        <h5>Chaibasa Engineering College</h5>
        <p>
            <a href="https://www.google.com/maps/place/Chaibasa+Engineering+College/@22.4643055,85.7886378,17z/data=!3m1!4b1!4m6!3m5!1s0x3a1e25ddde342373:0x4ac680428662b09d!8m2!3d22.4643055!4d85.7912127!16s%2Fg%2F1pp2wwhc_?entry=ttu" target="_blank">
                <i class="fa fa-location-dot"></i>Keonjhar Highway<br>
                Chaibasa Jharkhand PIN<br>
                833215, India
            </a>
        </p>
        <p>
            <a href="mailto:cordinatortigjh@gmail.com" target="_blank">
                <i class="far fa-envelope"></i>cordinatortigjh@gmail.com
            </a>
        </p>
        <p>
            <a href="tel:919062941530">
                <i class="fa fa-phone"></i>+91 - 9062941530
            </a>
        </p>
    </section>
    <section>
        <h5>Links</h5>
        <ul>
            <li><a href="index.html">Home</a></li>
            <li><a href="">Services</a></li>
            <li><a href="about.html">About us</a></li>
            <li><a href="">Features</a></li>
            <li><a href="contactus.html">Contact</a></li>
        </ul>
    </section>
    <section>
        <h3>Newsletter</h3>
        <form>
            <i class="far fa-envelope"></i>
            <input type="email" placeholder="Enter your email" required>
            <button type="submit"><i class="fas fa-arrow-right"></i></button>
        </form>
        <div>
            <a href="https://twitter.com/NageshMandal75"> <i class="fa-brands fa-twitter"></i></a>
            <a href="https://www.instagram.com/nagesh_mandal7_5_/"><i class="fa-brands fa-instagram"></i></a>
            <a href="https://github.com/NageshMandal"> <i class="fa-brands fab fa-github"></i></a>
            <a href="https://www.linkedin.com/in/nagesh-mandal-134b70237/"> <i class="fa-brands fa-linkedin"></i></a>
            <a href="https://www.youtube.com/@nageshmandal9461/featured"> <i class="fa-brands fa-youtube" aria-hidden="true"></i></a>
        </div>
    </section>
</footer>
`

class CustomFooter extends HTMLElement {
    constructor() {
        super();
        this
            .attachShadow({ mode: "open" })
            .appendChild(footerTemplate.content.cloneNode(true));
    }
}

customElements.define('custom-footer', CustomFooter);