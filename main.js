// Open modal
const modal = document.getElementById('loginModal');
const openBtn = document.querySelector('.nav-signin');
const closeBtn = document.querySelector('.close');
const loginBtn = document.getElementById('loginBtn');

openBtn.addEventListener('click', () => {
  modal.style.display = 'block';
});

closeBtn.addEventListener('click', () => {
  modal.style.display = 'none';
});

window.addEventListener('click', (event) => {
  if (event.target === modal) {
    modal.style.display = 'none';
  }
});

loginBtn.addEventListener('click', () => {
  const name = document.getElementById('usernameInput').value;
  if (name) {
    document.querySelector('.nav-signin').innerHTML = `
      <p><span>Hello, ${name}</span></p>
      <p class="nav-second">Account & Lists</p>
    `;
    modal.style.display = 'none';
  }
});

let cartCount = 0;
const cartCounter = document.getElementById("cart-count");
const addToCartButtons = document.querySelectorAll(".add-to-cart-btn");

// Load cart from local storage if available
let cartItems = JSON.parse(localStorage.getItem("cart")) || [];
cartCount = cartItems.length;
cartCounter.textContent = cartCount;

addToCartButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const product = {
      name: button.parentElement.querySelector("h3").textContent,
      price: button.parentElement.querySelector(".price").textContent,
      image: button.parentElement.querySelector("img").src
    };

    cartItems.push(product);
    localStorage.setItem("cart", JSON.stringify(cartItems));

    cartCount++;
    cartCounter.textContent = cartCount;
    alert(`${product.name} added to cart!`);
  });
});

document.querySelectorAll(".category-card").forEach(card => {
  card.addEventListener("click", () => {
    const category = card.getAttribute("data-category");
    document.querySelectorAll(".deal-card").forEach(product => {
      if (category === "all" || product.getAttribute("data-category") === category) {
        product.style.display = "";
      } else {
        product.style.display = "none";
      }
    });
  });
});
