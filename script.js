const burger = document.querySelector('.burger');
const navbar = document.querySelector('.navbar');
const navLinksWrapper = document.querySelector('.nav-links');
const navLinks = document.querySelectorAll('.nav-links li');

function navSlide() {
    //Toggle nav
    navLinksWrapper.classList.toggle('nav-active');
    navbar.classList.toggle('nav-active');

    //Animate links
    navLinks.forEach((link, index) => {
        if (link.style.animation) {
            link.style.animation = '';
        } else {
            link.style.animation = 'navLinkFade 0.5s ease forwards ' + (index / 10 + 0.15) + 's';
        }
    });

    burger.classList.toggle('burger-toggle');
}