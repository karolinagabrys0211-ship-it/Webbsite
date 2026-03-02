const buttonOne = document.getElementById("book-one");
const buttonTwo = document.getElementById("book-two");
const buttonThree = document.getElementById("book-three");
const bodyElement = document.querySelector("body");

[
  { id: 1, name: "Book-one", price: 50 },
  { id: 2, name: "Book-two", price: 120 },
  {id: 3, name: "Book-three", price: 80}
]

buttonOne.addEventListener("click", function (event) {
    
    let cart = JSON.parse(localStorage.getItem("cart")) || [];

    cart.push({
        id: 1,
        name: "Book-one",
        price: 50
    });

    localStorage.setItem("cart", JSON.stringify(cart));

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

    console.log("Book-three added to cart");
});

