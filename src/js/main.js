// Hamburger menu

const bar = document.getElementById('bar');
const nav = document.getElementById('navbar');


// Adding if statement, if user click on hamburger menu 'right' pixels would change from -300px to 0px 

if (bar) {
    bar.addEventListener('click', () => {
        nav.classList.add('active');
    })
}