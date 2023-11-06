document.addEventListener('DOMContentLoaded', function() {
  const cartItemsDiv = document.getElementById('cartItems');
  const cartTotalDiv = document.getElementById('cartTotal');
  const emptyCartMessage = document.getElementById('emptyCartMessage');
  const exploreProductsButton = document.getElementById('exploreProductsButton');
  let cart = JSON.parse(localStorage.getItem('cart')) || [];


 document.addEventListener('DOMContentLoaded', function() {
  cart = JSON.parse(localStorage.getItem('cart')) || [];
  updateCartIcon(); 
  updateCartDisplay()
  function updateCartIcon() {
    const cartIcon = document.getElementById('cartIcon');
    const cartCount = cart.reduce((acc, item) => acc + item.quantity, 0);
  
    setCookie('cartCount', cartCount, 30); 
  
    const countElement = document.createElement('span');
    countElement.className = 'cart-count';
  
    if (cartCount >= 9) {
      countElement.textContent = '9+';
    } else {
      countElement.textContent = cartCount;
    }
  
    cartIcon.innerHTML = '';
    cartIcon.appendChild(countElement);
  }
  
  updateCartIcon(); 
});

  
function updateCartDisplay() {
  const cartItemsDiv = document.getElementById('cartItems');
  const cartTotalDiv = document.getElementById('cartTotal');
  cartItemsDiv.innerHTML = '';
  cartTotalDiv.innerHTML = '';

  if (cart.length === 0) {
    showEmptyCartMessage();
    return;
  }
  cart.forEach(item => {
    const itemDiv = document.createElement('div');
    itemDiv.classList.add('cartItem');

    itemDiv.innerHTML = `
      <img src="${item.image}" alt="${item.name}">
      <div class="cartItemInfo">
        <h3>${item.name}</h3>
        <p>Price: ${item.price}</p>
        <p>Quantity: 
          <button class="quantityButton" data-id="${item.id}" data-action="decrease">-</button>
          <span class="itemQuantity">${item.quantity}</span>
          <button class="quantityButton" data-id="${item.id}" data-action="increase">+</button>
        </p>
      </div>
      <div class="cartItemActions">
      <button class="removeButton" data-id="${item.id}">Remove</button>
      </div>
    `;

    cartItemsDiv.appendChild(itemDiv);
  });

  const total = cart.reduce((acc, item) => acc + (parseFloat(item.price) * item.quantity), 0);
  cartTotalDiv.innerHTML = `Total: ${total.toFixed(2)}$`;

  const removeButtons = document.querySelectorAll('.removeButton');
  removeButtons.forEach(button => {
    button.addEventListener('click', function() {
      const productId = parseInt(this.dataset.id);
      removeFromCart(productId);
    });
  });

  const quantityButtons = document.querySelectorAll('.quantityButton');
  quantityButtons.forEach(button => {
    button.addEventListener('click', function() {
      const productId = parseInt(this.dataset.id);
      const action = this.dataset.action;

      if (action === 'decrease') {
        decreaseQuantity(productId);
      } else if (action === 'increase') {
        increaseQuantity(productId);
      }
    });
  });
}
function removeFromCart(productId) {
  console.log('Cart before removal:', cart);
  cart = cart.filter(item => item.id !== productId);
  console.log('Cart after removal:', cart);
  localStorage.setItem('cart', JSON.stringify(cart));
  updateCartDisplay();
}

function decreaseQuantity(productId) {
  const item = cart.find(item => item.id === productId);
  if (item && item.quantity > 1) {
    item.quantity--;
    localStorage.setItem('cart', JSON.stringify(cart));
    updateCartDisplay();
  }
}

function increaseQuantity(productId) {
  const item = cart.find(item => item.id === productId);
  if (item) {
    item.quantity++;
    localStorage.setItem('cart', JSON.stringify(cart));
    updateCartDisplay();
  }
}

updateCartDisplay();
  document.addEventListener('DOMContentLoaded', function() {
    updateCartDisplay();
  });
  function showEmptyCartMessage() {
    cartItemsDiv.innerHTML = '';
    cartTotalDiv.innerHTML = '';
    emptyCartMessage.style.display = 'block';
  }

  function exploreProducts() {
    window.location.href = 'product.html'; 
  }
  exploreProductsButton.addEventListener('click', exploreProducts);
  
  updateCartDisplay();
});

function addToCart(productId) {
  const isLoggedIn = localStorage.getItem('username') !== null;

  if (isLoggedIn) {
   const product = products.find(item => item.id === productId);

  const existingProduct = cart.find(item => item.id === productId);

  if (existingProduct) {
    existingProduct.quantity++;
  } else {
    cart.push({ ...product, quantity: 1 });
  }

    localStorage.setItem('cart', JSON.stringify(cart)); 
    updateCartCount();
    const order = {
      id: Date.now(), 
      date: new Date().toLocaleString(), 
      product: { ...product },
      quantity: 1
    };

    let orderHistory = JSON.parse(localStorage.getItem('orderHistory')) || [];
    orderHistory.push(order);
    localStorage.setItem('orderHistory', JSON.stringify(orderHistory));
  } else {
    window.location.href = "log.html";
  }
  localStorage.setItem('cart', JSON.stringify(cart));
  updateCartIcon();
  updateCartCount();
}
function submitOrder() {
  const isLoggedIn = localStorage.getItem('username') !== null;
  if (isLoggedIn) {
    const cart = JSON.parse(localStorage.getItem('cart')) || [];

    if (cart.length === 0) {
      alert("Your cart is empty. Add items before submitting an order.");
      window.location.href = "product.html";
    } else {
      alert("Placed Sucessfully")
      localStorage.setItem('cart', JSON.stringify([])); 
      location.href = 'cart.html';
      updateCartDisplay();
    }
  } else {
    alert('Please log in to place an order.');
  }
}
function closep() {
  const popup = document.getElementById('popup'); 
  popup.classList.remove("open-popup");
  localStorage.setItem('cart', JSON.stringify([]));
  updateCartDisplay();
  location.href = 'cart.html'; 
}
document.addEventListener('DOMContentLoaded', function() {
  const closeButton = document.getElementById('popupCloseButton');
  if (closeButton) {
    closeButton.addEventListener('click', closep);
  }
});



