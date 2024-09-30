const body = document.querySelector('body');
const navLinks = document.querySelectorAll('.nav-link');

navLinks.forEach((navLink) => {
    navLink.addEventListener('click', (e) => {
        e.preventDefault();
        alert('You clicked a nav link! Good for you!');
    
    });
});