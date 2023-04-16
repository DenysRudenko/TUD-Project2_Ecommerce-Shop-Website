// Hamburger menu

const bar = document.getElementById('bar');
const close = document.getElementById('close');
const nav = document.getElementById('navbar');
let carts = document.querySelectorAll('.add-cart');
let products = [
    {
        name: 'Men`s Fashion T-Shirt',
        tag: 'fashiontshirt',
        price: 15,
        inCart: 0
    },
    {
        name: 'Womans Fashion T-Shirt',
        tag: 'womansfashiontshirt',
        price: 20,
        inCart: 0
    }
];


for (let i = 0; i < carts.length; i++) {
    carts[i].addEventListener('click', () => {
        cartNumbers(products[i]);
        totalCost(products[i]);
    });
}

// Allows to save the number of times we clicked on the item behing cart
function onLoadCartNumbers() {
    let productNumbers = localStorage.getItem('cartNumbers');

    if (productNumbers) {
        document.querySelector('#navbar span').textContent = productNumbers;
    }
}

// Allows us to count number of times we click on item that added to cart
function cartNumbers(product) {
    console.log("The product clicked is", product);
    let productNumbers = localStorage.getItem('cartNumbers');
    

    productNumbers = parseInt(productNumbers);
    
    if (productNumbers) {
        localStorage.setItem('cartNumbers', productNumbers + 1);
         document.querySelector('#navbar span').textContent = productNumbers + 1;
    } else {
        localStorage.setItem('cartNumbers', 1);
        document.querySelector('#navbar span').textContent = 1;
    }

    setItems(product);
}

function setItems(product) {
    let cartItems = localStorage.getItem('productsInCart');
    cartItems = JSON.parse(cartItems);

    if (cartItems != null) {
        if (cartItems[product.tag] == undefined) {
            cartItems = {
                ...cartItems,
                [product.tag]: product
            }
        }
        cartItems[product.tag].inCart += 1; 
    } else {
        product.inCart = 1;
        cartItems = {
            [product.tag] : product
        }    
    } 
    localStorage.setItem('productsInCart', JSON.stringify(cartItems));
}

function totalCost(product) {
    // console.log("The products price is", product.price);

    let cartCost = localStorage.getItem("totalCost");
    
    console.log("My cartCost is", cartCost);
    console.log(typeof cartCost);

    if (cartCost != null) {
        cartCost = parseInt(cartCost);
        localStorage.setItem("totalCost", cartCost + product.price)
    } else {
        localStorage.setItem("totalCost", product.price);
    }
    
}

onLoadCartNumbers();

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

// Clicking fucntion on the product page

var MainImg = document.getElementById("MainImg");
        var smallimg = document.getElementsByClassName("small-img");

        smallimg[0].onclick = function () {
            MainImg.src =  smallimg[0].src;
        }

        smallimg[1].onclick = function () {
            MainImg.src = smallimg[1].src;
        }

        smallimg[2].onclick = function () {
            MainImg.src = smallimg[2].src;
        }

        smallimg[3].onclick = function () {
            MainImg.src = smallimg[3].src;
        }
        
