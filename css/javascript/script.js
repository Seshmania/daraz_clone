// Initialize variables for cart count and total
let cartCount = 0;
let cartTotal = 0;

// Get elements to display cart information
const cartCountElement = document.getElementById("cart-count");
const cartTotalElement = document.getElementById("cart-total");

// Function to update cart information
function updateCart() {
    cartCountElement.textContent = cartCount;
    cartTotalElement.textContent = cartTotal.toFixed(2);
}

// Function to handle adding products to the cart
function addToCart(event) {
    // Get the product's price from the data-price attribute
    const productElement = event.target.closest('.product');
    const productPrice = parseFloat(productElement.getAttribute('data-price'));

    // Update cart details
    cartCount++;
    cartTotal += productPrice;

    // Update cart information on the page
    updateCart();
}

// Attach event listeners to all "Add to Cart" buttons
const addToCartButtons = document.querySelectorAll('.add-to-cart-btn');
addToCartButtons.forEach(button => {
    button.addEventListener('click', addToCart);
});
