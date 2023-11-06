const products = [
  {
    id: 1,
    category: "clothing",
    name: "Perfume",
    image: "/Pics/product 4.png",
    price: "76$",
    description:"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Illum iure reiciendis facere deserunt ut aliquid nam neque id excepturi minus?",
  },
  {
    id: 2,
    category: "electronics",
    name: "Watch",
    image: "/Pics/product 3.png",
    price: "28$",
    description:"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Illum iure reiciendis facere deserunt ut aliquid nam neque id excepturi minus?",
  },
  {
    id: 3,
    category: "Man",
    name: "Man Shoes",
    image: "/Pics/Untitled design (15).png",
    price: "70$",
    description:"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Illum iure reiciendis facere deserunt ut aliquid nam neque id excepturi minus?",
  },
  {
    id: 4,
    category: "Man",
    name: "Office Shoes",
    image: "/Pics/product 2.png",
    price: "87$",
    description:"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Illum iure reiciendis facere deserunt ut aliquid nam neque id excepturi minus?",
  },
  {
    id: 11,
    category: "Women",
    name: "Shoes",
    image: "/Pics/Untitled design (21).png",
    price: "100$",
    description:"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Illum iure reiciendis facere deserunt ut aliquid nam neque id excepturi minus?",
  },
  {
    id: 4,
    category: "Women",
    name: "Ladies Red Shoes",
    image: "/Pics/Untitled design (20).png",
    price: "120$",
    description:"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Illum iure reiciendis facere deserunt ut aliquid nam neque id excepturi minus?",
  },
  {
    id: 5,
    category: "Women",
    name: "Ladies Shoes",
    image: "/Pics/Untitled design (19).png",
    price: "65$",
    description:"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Illum iure reiciendis facere deserunt ut aliquid nam neque id excepturi minus?",
  },
  {
    id: 6,
    category: "Women",
    name: "Beauty Products",
    image: "/Pics/Untitled design (18).png",
    price: "25$",
    description:"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Illum iure reiciendis facere deserunt ut aliquid nam neque id excepturi minus?",
  },
  {
    id: 7,
    category: "Women",
    name: "Beauty Products",
    image: "/Pics/Untitled design (17).png",
    price: "15$",
    description:"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Illum iure reiciendis facere deserunt ut aliquid nam neque id excepturi minus?",
  },
  {
    id: 8,
    category: "Women",
    name: "Cosmetics",
    image: "/Pics/Untitled design (16).png",
    price: "40$",
    description:"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Illum iure reiciendis facere deserunt ut aliquid nam neque id excepturi minus?",
  },
  {
    id: 9,
    category: "Man",
    name: "Man Shoes",
    image: "/Pics/Untitled design (15).png",
    price: "120$",
    description:"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Illum iure reiciendis facere deserunt ut aliquid nam neque id excepturi minus?",
  },
  {
    id: 10,
    category: "Man",
    name: "Sports Shoes",
    image: "/Pics/Untitled design (14).png",
    price: "110$",
    description:"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Illum iure reiciendis facere deserunt ut aliquid nam neque id excepturi minus?",
  },
];
document.addEventListener('DOMContentLoaded', function() {
  const params = new URLSearchParams(window.location.search);
  const productId = params.get('id');
  const product = getProductById(productId);
  if (product) {
      const productNameElement = document.getElementById('productName');
      const productImageElement = document.getElementById('productImage');
      const productPriceElement = document.getElementById('productPrice');
      const productDescriptionElement = document.getElementById('productDescription'); 

      productNameElement.textContent = product.name;
      productImageElement.src = product.image;
      productImageElement.alt = product.name;
      productPriceElement.textContent = product.price;
      productDescriptionElement.textContent = product.description;
  } else {
      alert('Product not found!');
  }
  const starInputs = document.querySelectorAll('.star-input .fa');

  starInputs.forEach(star => {
      star.addEventListener('click', function() {
          const rating = this.getAttribute('data-rating');
          document.getElementById('rating').value = rating;
          starInputs.forEach(star => star.classList.remove('checked'));
          for (let i = 0; i < rating; i++) {
              starInputs[i].classList.add('checked');
          }
      });
  });
});

function getProductById(productId) {
  return products.find(product => product.id == productId);
}


function submitReview() {
  const username = document.getElementById('username').value;
  const reviewText = document.getElementById('review').value;
  const rating = document.getElementById('rating').value;

  const reviewList = document.getElementById('reviewList');

  if (username.trim() === '' || reviewText.trim() === '' || rating === '') {
    alert('Please fill out all fields.');
    return false; 
  }

  const reviewElement = document.createElement('div');
  reviewElement.classList.add('review');

  const ratingElement = document.createElement('div');
  ratingElement.classList.add('rating');

  for (let i = 0; i < rating; i++) {
    const starIcon = document.createElement('i');
    starIcon.classList.add('fa', 'fa-star');
    ratingElement.appendChild(starIcon);
  }

  const usernameElement = document.createElement('div');
  usernameElement.classList.add('username');
  usernameElement.textContent = `By: ${username}`;

  const reviewTextElement = document.createElement('div');
  reviewTextElement.classList.add('review-text');
  reviewTextElement.textContent = reviewText;

  const timestampElement = document.createElement('div');
  timestampElement.classList.add('timestamp');
  const timestamp = new Date().toLocaleString(); 
  timestampElement.textContent = `Posted on: ${timestamp}`;

  reviewElement.appendChild(ratingElement);
  reviewElement.appendChild(usernameElement);
  reviewElement.appendChild(reviewTextElement);
  reviewElement.appendChild(timestampElement);

  reviewList.appendChild(reviewElement);

  document.getElementById('username').value = '';
  document.getElementById('review').value = '';
  document.getElementById('rating').value = '5';

  return false;
}
