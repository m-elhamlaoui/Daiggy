const mainImage = document.getElementById('mainImage');
const thumbnails = document.querySelectorAll('.thumbnail');

thumbnails.forEach(thumb => {
  thumb.addEventListener('click', () => {
    mainImage.src = thumb.src;
    thumbnails.forEach(t => t.classList.remove('border-gray-300'));
    thumb.classList.add('border-gray-300');
  });
});


function changeQuantity(delta) {
  const quantityInput = document.getElementById('quantity');
  const hiddenInput = document.getElementById('quantityInput');
  let value = parseInt(quantityInput.value);
  value = Math.max(1, value + delta);
  quantityInput.value = value;
  hiddenInput.value = value;
}

document.querySelectorAll('.flex.gap-2 button').forEach(btn => {
  btn.addEventListener('click', () => {
    document.getElementById('selectedSize').value = btn.textContent.trim();
  });
});




// Movement animation every 5 seconds for Add to Cart button
const addToCartBtn = document.getElementById('addToCartBtn');
setInterval(() => {
  addToCartBtn.classList.add('translate-x-1', 'transition');
  setTimeout(() => {
    addToCartBtn.classList.remove('translate-x-1');
  }, 300);
}, 5000);


// Shopping Cart Logic
let cartItems = JSON.parse(localStorage.getItem('cartItems')) || [];

function updateCartDisplay() {
    const count = cartItems.length;
    const desktopBadge = document.getElementById("cart-count");
    const mobileBadge = document.getElementById("cart-count-mobile");
    if (desktopBadge) desktopBadge.textContent = count;
    if (mobileBadge) mobileBadge.textContent = count;
}

function addToCart(productId) {
    if (!cartItems.includes(productId)) {
        cartItems.push(productId);
        localStorage.setItem('cartItems', JSON.stringify(cartItems));
        updateCartDisplay();
    }
}

// Initialize display on page load
window.addEventListener('DOMContentLoaded', updateCartDisplay);

const cartForm = document.getElementById('cartForm');
const sizeAlertModal = document.getElementById('sizeAlertModal');
const modalOkBtn = document.getElementById('modalOkBtn');

cartForm.addEventListener('submit', function (e) {
  const selectedSize = document.getElementById('selectedSize').value;
  const quantity = document.getElementById('quantityInput').value;

  if (!selectedSize) {
    e.preventDefault();
    sizeAlertModal.classList.remove('hidden');
    return;
  }
});

modalOkBtn.addEventListener('click', () => {
  sizeAlertModal.classList.add('hidden');
});
