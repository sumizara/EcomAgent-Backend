async function loadProducts() {
    const response = await fetch('products.json');
    const products = await response.json();
    return products;
}
