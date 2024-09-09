document.getElementById('productName').textContent = localStorage.getItem('productName');
document.getElementById('productPrice').textContent = '$' + localStorage.getItem('productPrice');
document.getElementById('productDescription').textContent = localStorage.getItem('productDescription');
document.getElementById('productImage').src = localStorage.getItem('productImage');

function showProductDetails(name, price, description, imageUrl) {
    // Store product details in localStorage
    localStorage.setItem('productName', name);
    localStorage.setItem('productPrice', price);
    localStorage.setItem('productDescription', description);
    localStorage.setItem('productImage', imageUrl);

    // Redirect to product details page
    window.location.href = 'product-details.html';
    
}