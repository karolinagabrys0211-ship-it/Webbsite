const cartLink = document.getElementById("cart-link");
const cartPopup = document.getElementById("cart-popup");
const closeCart = document.getElementById("close-cart");
const clearCart = document.getElementById("clear-cart");

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