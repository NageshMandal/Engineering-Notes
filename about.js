// Sticky Navbar Function
window.addEventListener("scroll", function() {
    var navbar = document.querySelector('.navbar');
    navbar.classList.toggle("sticky" , this.scrollY > 0);
  });
  