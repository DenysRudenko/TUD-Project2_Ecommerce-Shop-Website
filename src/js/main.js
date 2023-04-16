// Hamburger menu

const bar = document.getElementById('bar');
const close = document.getElementById('close');
const nav = document.getElementById('navbar');
let carts = document.querySelectorAll('.add-cart');
let products = [
    {
        name: 'Men`s Fashion T-Shirt',
        tag: 'fashiontshirt1',
        price: 118.19,
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

function displayCart() {
    let cartItems = localStorage.getItem("productsInCart");
    cartItems = JSON.parse(cartItems);
    
    let productContainer = document.querySelector("#cart");
    let cartCost = localStorage.getItem("totalCost");

    console.log(cartItems)
    if (cartItems && productContainer) {
        productContainer.innerHTML = '';
        Object.values(cartItems).map(item => {
            productContainer.innerHTML += `
           
            <section class="section-p1" id="cart">
                <table width="100%">
                    <thead>
                        <tr>
                            <td>Remove</td>
                            <td>Image</td>
                            <td>Product</td>
                            <td>Price</td>
                            <td>Quantity</td>
                            <td>Subtotal</td>
                        </tr>
                    </thead>
    
            <tbody class="cart-content">
                <tr class="cart-box">
                    <td><a onclick="removeCartItem(this)" href="#"><i class="fa-solid fa-trash cart-remove"></i></a></td>
                    <td><img src="../images/products/${item.tag}.jpg"></td>
                    <td>${item.name}</td>
                    <td class="price cart-price">$ ${item.price}</td>
                    <td><input class="cart-quantity csl" type="number" min="0" max="100" value="${item.inCart}"></td>
                    <td class="total">$ ${item.inCart * item.price}</td>
                </tr>
            `
        });

        productContainer.innerHTML += `
                <section id="cart-add" class="section-p1">
        <div id="coupon">
            <h3>Apply Coupon</h3>
            <div>
                <input type="text" placeholder="Enter Your Coupon">
                <button class="normal">Apply</button>
            </div>
        </div>

        <div id="subtotal">
            <h3>Cart Totals</h3>
            <table>
                <tr>
                    <td>Card Subtotal</td>
                    <td>$ ${cartCost}</td>
                </tr>

                <tr>
                    <td>Shipping</td>
                    <td>Free</td>
                </tr>

                <tr>
                    <td><strong>Total</strong></td>
                    <td><strong id="3" class="total-price">$ ${cartCost}</strong></td>
                </tr>
            </table>
            <button class="normal">Proceed to checkout</button>
        </div>
    </section>

        `
    }
}

function findall() {
  var array = document.querySelectorAll('.cls');
  var total = 0;
  for (var i = 0; i < array.length; i++) {
    if (parseInt(array[i].value))
      total += parseInt(array[i].value);
  }
  document.getElementById('3').value = total;
}

function removeCartItem(event) {
    var buttonClicked = event.parentNode.parentNode;
    buttonClicked.parentNode.removeChild(buttonClicked);
    updatetotal();
}


onLoadCartNumbers();
displayCart();
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
        