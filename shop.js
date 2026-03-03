const buttonOne = document.getElementById("book-one");
const buttonTwo = document.getElementById("book-two");
const buttonThree = document.getElementById("book-three");

const cartLink = document.getElementById("cart-link");
const cartPopup = document.getElementById("cart-popup");
const closeCart = document.getElementById("close-cart");
const clearCart = document.getElementById("clear-cart");

buttonOne.addEventListener("click", function (event) {
    
    let cart = JSON.parse(localStorage.getItem("cart")) || [];

    cart.push({
        id: 1,
        name: "Book-one",
        price: 50
    });

    localStorage.setItem("cart", JSON.stringify(cart));

    displayCart();

    console.log("Book-one added to cart");
});

buttonTwo.addEventListener("click", function (event) {
    
    let cart = JSON.parse(localStorage.getItem("cart")) || [];

    cart.push({
        id: 2,
        name: "Book-two",
        price: 120
    });

    localStorage.setItem("cart", JSON.stringify(cart));

    displayCart();

    console.log("Book-two added to cart");
});

buttonThree.addEventListener("click", function (event) {
      let cart = JSON.parse(localStorage.getItem("cart")) || [];

    cart.push({
        id: 3,
        name: "Book-three",
        price: 90
    });

    localStorage.setItem("cart", JSON.stringify(cart));

    displayCart();

    console.log("Book-three added to cart");
});

function displayCart() {

    const cart = JSON.parse(localStorage.getItem("cart")) || [];
    const container = document.getElementById("cart-container");
    container.innerHTML = "";   // clear before showing

    if (cart.length === 0) {
        container.innerHTML = "<p>Cart is empty</p>";
        return;
    }

    cart.forEach(item => {
        container.innerHTML += `
            <p>${item.name} - $${item.price}</p>
        `;
    });
}

displayCart();

cartLink.addEventListener("click", (e) => {
    e.preventDefault(); // prevent navigation
    cartPopup.classList.remove("hidden");
    displayCart();
});

// =======================
// Close cart popup
// =======================
// Click X
closeCart.addEventListener("click", () => {
    cartPopup.classList.add("hidden");
});

// Click outside cart content
cartPopup.addEventListener("click", (e) => {
    if (e.target === cartPopup) {
        cartPopup.classList.add("hidden");
    }
});

// =======================
// Clear cart button
// =======================
clearCart.addEventListener("click", () => {
    localStorage.removeItem("cart");
    displayCart();
});