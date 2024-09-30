const body = document.querySelector('body');
const navLinks = document.querySelectorAll('.nav-link');

navLinks.forEach((navLink) => {
    navLink.addEventListener('click', (e) => {
        e.preventDefault();
        console.log(e.target);
    
    });
});