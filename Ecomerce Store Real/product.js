const products = [
    {
      id: 1,
      category: "clothing",
      name: "Perfume",
      image: "/Pics/product 4.png",
      price: "76$",
    },
    {
      id: 2,
      category: "electronics",
      name: "Watch",
      image: "/Pics/product 3.png",
      price: "28$",
    },
    {
      id: 3,
      category: "Man",
      name: "Man Shoes",
      image: "/Pics/Untitled design (15).png",
      price: "70$",
    },
    {
      id: 4,
      category: "Man",
      name: "Office Shoes",
      image: "/Pics/product 2.png",
      price: "87$",
    },
    {
      id: 11,
      category: "Women",
      name: "Shoes",
      image: "/Pics/Untitled design (21).png",
      price: "100$",
    },
    {
      id: 4,
      category: "Women",
      name: "Ladies Red Shoes",
      image: "/Pics/Untitled design (20).png",
      price: "120$",
    },
    {
      id: 5,
      category: "Women",
      name: "Ladies Shoes",
      image: "/Pics/Untitled design (19).png",
      price: "65$",
    },
    {
      id: 6,
      category: "Women",
      name: "Beauty Products",
      image: "/Pics/Untitled design (18).png",
      price: "25$",
    },
    {
      id: 7,
      category: "Women",
      name: "Beauty Products",
      image: "/Pics/Untitled design (17).png",
      price: "15$",
    },
    {
      id: 8,
      category: "Women",
      name: "Cosmetics",
      image: "/Pics/Untitled design (16).png",
      price: "40$",
    },
    {
      id: 9,
      category: "Man",
      name: "Man Shoes",
      image: "/Pics/Untitled design (15).png",
      price: "120$",
    },
    {
      id: 10,
      category: "Man",
      name: "Sports Shoes",
      image: "/Pics/Untitled design (14).png",
      price: "110$",
    },
  ];
  function setCookie(name, value, days) {
const expires = new Date();
expires.setTime(expires.getTime() + (days * 24 * 60 * 60 * 1000));
document.cookie = `${name}=${value};expires=${expires.toUTCString()};path=/`;
}

  function searchProducts() {
const searchInput = document.getElementById('searchInput').value.toLowerCase().trim();

if (searchInput !== '') {
  const filteredProducts = products.filter(product => {
    const productName = product.name.toLowerCase();
    return productName.includes(searchInput);
  });

  if (filteredProducts.length > 0) {
    updateProductGallery(filteredProducts);
    document.getElementById('itemNotFound').style.display = 'none';
  } else {
    document.getElementById('productGallery').innerHTML = '';
    document.getElementById('itemNotFound').style.display = 'block';
  }
} else {
  updateProductGallery(products);
  document.getElementById('itemNotFound').style.display = 'none';
}
}

const searchInput = document.getElementById('searchInput');
searchInput.addEventListener('input', searchProducts);

function updateProductGallery(products) {
const productGallery = document.getElementById('productGallery');
productGallery.innerHTML = '';

products.forEach(product => {
  const productCard = `
    <div class="product-card">
      <img src="${product.image}" alt="${product.name}">
      <h3>${product.name}</h3>
      <p>${product.price || 'Price not available'}</p>
      <button class="add-to-cart-button" data-product-id="${product.id}" onClick="addToCart(${product.id})">Add to Cart</button>
    </div>
  `;
  productGallery.insertAdjacentHTML('beforeend', productCard);
});

const itemNotFound = document.getElementById('itemNotFound');
if (products.length > 0) {
  itemNotFound.style.display = 'none';
} else {
  itemNotFound.style.display = 'block';
}
}

  let cart = [];

  function displayProducts() {
    const gallery = document.getElementById("productGallery");
    gallery.innerHTML = "";

    products.forEach((product) => {
        const item = document.createElement("div");
        item.className = "product-item";
        item.innerHTML = `
            <div class="card">
                <a href="product_detail.html?id=${product.id}">
                    <div class="image"><img src="${product.image}" alt=""></div>
                    <div class="content">
                        <span class="title">${product.name}</span>
                    </div>
                </a>
                <p class="desc">${product.price || "765$"}</p>
                <button class="action" onClick="addToCart(${product.id})">ADD TO CART</button>
            </div>
        `;

        gallery.appendChild(item);
    });
}
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

document.addEventListener('DOMContentLoaded', function() {
cart = JSON.parse(localStorage.getItem('cart')) || [];
updateCartIcon();
updateCartDisplay()
  const categories = document.querySelectorAll('.category');
  categories.forEach(category => {
      category.addEventListener('click', function() {
          currentCategory = this.dataset.category;
          filterProducts();
          updateCartIcon() 
      });
  });
});


function filterProducts() {
  const query = searchInput.value.toLowerCase();
  const filteredProducts = products.filter(product => {
      return product.category === currentCategory && product.name.toLowerCase().includes(query);
  });
  updateProductGallery(filteredProducts); // Assuming you have a function to update the product gallery
}


function filterProducts(category) {
currentCategory = category;
filterAndDisplayProducts();

const categoryButtons = document.querySelectorAll('.filter-button');
categoryButtons.forEach(button => {
  button.classList.remove('selected-category');
});

const selectedButton = document.querySelector(`.filter-button[data-category='${category}']`);
if (selectedButton) {
  selectedButton.classList.add('selected-category');
}
const searchInput = document.getElementById('searchInput').value.toLowerCase().trim();
function displayFilteredProducts(filteredProducts) {
const gallery = document.getElementById("productGallery");
gallery.innerHTML = "";

if (filteredProducts.length > 0) {
  filteredProducts.forEach((product) => {
    const item = document.createElement("div");
    item.className = "product-item";
    item.innerHTML = `
      <div class="card">
        <div class="image"><img src="${product.image}" alt=""></div>
        <div class="content">
          <a href="#">
            <span class="title">${product.name}</span>
          </a>
          <p class="desc">${product.price || "765$"}</p>
          <button class="action" onClick="addToCart(${product.id})">ADD TO CART</button>
        </div>
      </div>
    `;
    gallery.appendChild(item);
  });
} else {
  const itemNotFound = document.getElementById('itemNotFound');
  itemNotFound.style.display = 'block';
}
} 
const filteredProducts = products.filter(product => {
  const productName = product.name.toLowerCase();
  const categoryMatch = category === 'all' || product.category.toLowerCase() === category.toLowerCase();
  const searchMatch = productName.includes(searchInput);
  return categoryMatch && searchMatch;
});

displayFilteredProducts(filteredProducts);
}
function filterAndDisplayProducts() {
const searchInput = document.getElementById('searchInput').value.toLowerCase().trim();

const filteredProducts = products.filter(product => {
  const productName = product.name ? product.name.toLowerCase() : '';
  const categoryMatch = currentCategory === 'all' || product.category.toLowerCase() === currentCategory.toLowerCase();
  const searchMatch = productName.includes(searchInput);
  return categoryMatch && searchMatch;
});

displayFilteredProducts(filteredProducts);
}
function displayFilteredProducts(filteredProducts) {
const productGallery = document.getElementById('productGallery');
productGallery.innerHTML = '';

if (filteredProducts.length > 0) {
  filteredProducts.forEach(product => {
    const productCard = `
      <div class="product-card">
        <img src="${product.image}" alt="${product.name}">
        <h3>${product.name}</h3>
        <p>${product.price || 'Price not available'}</p>
        <button class="add-to-cart-button" data-product-id="${product.id}" onClick="addToCart(${product.id})">Add to Cart</button>
      </div>
    `;
    productGallery.insertAdjacentHTML('beforeend', productCard);
  });
} else {
  const itemNotFound = document.getElementById('itemNotFound');
  itemNotFound.style.display = 'block';
}
}
const categoryInputs = document.querySelectorAll('input[name="category"]');
categoryInputs.forEach(input => {
input.addEventListener('change', filterAndDisplayProducts);
});
searchInput.addEventListener('input', filterAndDisplayProducts);

function addToCart(productId) {
const product = products.find(item => item.id === productId);

const existingProduct = cart.find(item => item.id === productId);

if (existingProduct) {
  existingProduct.quantity++;
} else {
  cart.push({ ...product, quantity: 1 });
}

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
localStorage.setItem('cart', JSON.stringify(cart));
updateCartIcon();
}



function updateCartDisplay() {
const cartItemsDiv = document.getElementById('cartItems');
const cartTotalDiv = document.getElementById('cartTotal');
cartItemsDiv.innerHTML = '';
cartTotalDiv.innerHTML = '';

cart.forEach(item => {
  const itemDiv = document.createElement('div');
  itemDiv.classList.add('cartItem');

  itemDiv.innerHTML = `
    <img src="${item.image}" alt="${item.name}">
    <div class="cartItemInfo">
      <h3>${item.name}</h3>
      <p>Price: ${item.price}</p>
      <p>Quantity: ${item.quantity}</p>
    </div>
    <div class="cartItemActions">
      <button onclick="removeFromCart(${item.id})">Remove</button>
    </div>
  `;

  cartItemsDiv.appendChild(itemDiv);
});

const total = cart.reduce((acc, item) => acc + (item.price * item.quantity), 0);

const totalItems = cart.reduce((acc, item) => acc + item.quantity, 0);

if (totalItems >= 9) {
  cartTotalDiv.innerHTML = `Total: 9+`;
} else {
  cartTotalDiv.innerHTML = `Total: ${total}$`;
}
}


function removeFromCart(productId) {
cart = cart.filter(item => item.id !== productId);
localStorage.setItem('cart', JSON.stringify(cart));
updateCartDisplay();
updateCartIcon();
}

function updateCartCount() {
const cartIcon = document.getElementById('cartIcon');
const cartCount = JSON.parse(localStorage.getItem('cart')).reduce((acc, item) => acc + item.quantity, 0);
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
displayProducts();

  