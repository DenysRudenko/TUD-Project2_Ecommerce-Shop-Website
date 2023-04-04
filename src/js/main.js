// Hamburger menu

const bar = document.getElementById('bar');
const close = document.getElementById('close');
const nav = document.getElementById('navbar');


// Adding if statement, if user click on hamburger menu 'right' pixels would change from -300px to 0px 

if (bar) {
    bar.addEventListener('click', () => {
        nav.classList.add('active');       
    })
}

//  Adding if statement for close button, from 0px to -300px when user clicks
if (close) {
    close.addEventListener('click', () => {
        nav.classList.remove('active'); 
    })
}
