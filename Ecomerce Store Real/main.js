const cartBox = document.getElementById("cart");

function toggleCart() {
    console.log(cartBox.style.transform);
    if (cartBox.style.transform === "translateX(100%)") {
        cartBox.style.transform = "translateX(0%)";
    } else {
        cartBox.style.transform = "translateX(100%)";
    }
}