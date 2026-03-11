const buttonOne = document.getElementById("book-one");
const buttonTwo = document.getElementById("book-two");
const buttonThree = document.getElementById("book-three");

const cartLink = document.getElementById("cart-link");
const cartPopup = document.getElementById("cart-popup");
const closeCart = document.getElementById("close-cart");
const clearCart = document.getElementById("clear-cart");

//The next 12 lines of code was adapted from https://www.youtube.com/watch?v=PoTGs38DR9E accessed 2026-02-26

function addToCart(id, name, price) {
    let cart = JSON.parse(localStorage.getItem("cart")) || [];

    cart.push({
        id: id,
        name: name,
        price: price
    });

    localStorage.setItem("cart", JSON.stringify(cart));
    displayCart();
}

buttonOne.addEventListener("click", function () {
    addToCart(1, "Book-one", 50);
});

buttonTwo.addEventListener("click", function () {
    addToCart(2, "Book-two", 120);
});

buttonThree.addEventListener("click", function () {
    addToCart(3, "Book-three", 90);
});

//The next 18 lines of code was adapted from https://www.youtube.com/watch?v=IY5UN82FZ2Q accessed 2026-03-02

function displayCart() {

    const cart = JSON.parse(localStorage.getItem("cart")) || [];
    const container = document.getElementById("cart-container");
    container.innerHTML = "";

    if (cart.length === 0) {
        container.innerHTML = "<p>Cart is empty</p>";
        return;
    }

    cart.forEach(function(item) {
        container.innerHTML +=
            "<p class='cart-item'>" +
            item.name + " - " + item.price + "kr" +
            "</p>";
    });
}

displayCart();

cartLink.addEventListener("click", (e) => {
    e.preventDefault();
    cartPopup.classList.remove("hidden");
    displayCart();
});


// Close cart popup
closeCart.addEventListener("click", () => {
    cartPopup.classList.add("hidden");
});

// Click outside cart content
cartPopup.addEventListener("click", (e) => {
    if (e.target === cartPopup) {
        cartPopup.classList.add("hidden");
    }
});


// Clear cart button
clearCart.addEventListener("click", () => {
    localStorage.removeItem("cart");
    displayCart();
});

