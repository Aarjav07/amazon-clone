const cartSection = document.querySelector(".cart-section");
const totalItems = document.getElementById("total-items");
let cartItems = JSON.parse(localStorage.getItem("cart")) || [];

if (cartItems.length === 0) {
  cartSection.innerHTML = "<p>Your cart is empty.</p>";
} else {
  cartItems.forEach(item => {
    const div = document.createElement("div");
    div.classList.add("cart-item");
    div.innerHTML = `
      <img src="${item.image}" alt="${item.name}" width="100">
      <div>
        <h3>${item.name}</h3>
        <p>${item.price}</p>
      </div>
    `;
    cartSection.appendChild(div);
  });
}

totalItems.textContent = cartItems.length;

// Clear Cart
document.querySelector(".clear-cart-btn").addEventListener("click", () => {
  localStorage.removeItem("cart");
  alert("Cart cleared!");
  window.location.reload();
});
