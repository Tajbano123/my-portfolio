let cart = [];

document.querySelectorAll('.add-to-cart').forEach(button => {
  button.addEventListener('click', function() {
    const card = this.parentElement;
    const id = card.dataset.id;
    const name = card.dataset.name;
    const price = parseFloat(card.dataset.price);

    const existing = cart.find(item => item.id === id);
    if (existing) {
      existing.quantity += 1;
    } else {
      cart.push({ id, name, price, quantity: 1 });
    }

    updateCartUI();
  });
});

function updateCartUI() {
  const cartItems = document.getElementById('cart-items');
  const cartCount = document.getElementById('cart-count');
  const totalDisplay = document.getElementById('total');

  cartItems.innerHTML = '';
  let total = 0;
  let count = 0;

  cart.forEach(item => {
    const li = document.createElement('li');
    li.textContent = `${item.name} x${item.quantity} - $${(item.price * item.quantity).toFixed(2)}`;
    cartItems.appendChild(li);
    total += item.price * item.quantity;
    count += item.quantity;
  });

  cartCount.textContent = count;
  totalDisplay.textContent = total.toFixed(2);
}
