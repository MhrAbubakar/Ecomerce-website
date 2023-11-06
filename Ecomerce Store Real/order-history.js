document.addEventListener('DOMContentLoaded', function() {
    const orderHistoryList = document.getElementById('orderHistoryList');
    const orderHistory = JSON.parse(localStorage.getItem('orderHistory')) || [];
    
    function displayOrderImagesAndNames() {
        orderHistory.forEach(order => {
            const listItem = document.createElement('li');
            listItem.classList.add('order-history-item');
            listItem.innerHTML = `
                <div class="order-thumbnail">
                    <img src="${order.product.image}" alt="${order.product.name}">
                </div>
                <div class="order-name">${order.product.name}</div>
            `;
            orderHistoryList.appendChild(listItem);
            listItem.addEventListener('click', function() {
                listItem.classList.toggle('show-details');
                if (listItem.classList.contains('show-details')) {
                    listItem.innerHTML += `
                        <div class="order-details">
                            <span class="order-id">Order ID: ${order.id}</span>
                            <span class="order-date">${order.date}</span>
                            <div class="product-quantity">Quantity: ${order.quantity}</div>
                            <div class="product-price">Price: ${order.product.price}</div>
                        </div>
                    `;
                } else {
                    const detailsElement = listItem.querySelector('.order-details');
                    if (detailsElement) {
                        detailsElement.remove();
                    }
                }
            });
        });
    }

    displayOrderImagesAndNames();

    const backButton = document.getElementById('backButton');
    backButton.addEventListener('click', function() {
        window.location.href = 'product.html';
    });
});
