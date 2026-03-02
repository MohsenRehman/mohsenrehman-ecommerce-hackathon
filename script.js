// array of the object of the products 
const products = [
  // ❤️ Shoes (10)
  { id: 101, title: "Red Sneakers", category: "Shoes", price: 3000, image: "https://images.pexels.com/photos/2529148/pexels-photo-2529148.jpeg" },
  { id: 102, title: "Sport Running Shoes", category: "Shoes", price: 3500, image: "https://images.pexels.com/photos/2529147/pexels-photo-2529147.jpeg" },
  { id: 103, title: "Black Leather Shoes", category: "Shoes", price: 4200, image: "https://images.pexels.com/photos/298863/pexels-photo-298863.jpeg" },
  { id: 104, title: "White Sneakers", category: "Shoes", price: 2800, image: "https://images.pexels.com/photos/2529146/pexels-photo-2529146.jpeg" },
  { id: 105, title: "Blue Running Shoes", category: "Shoes", price: 3100, image: "https://images.pexels.com/photos/2529150/pexels-photo-2529150.jpeg" },

  // 👕 Clothing (10)
  { id: 201, title: "Blue T-Shirt", category: "Clothing", price: 1200, image: "https://images.pexels.com/photos/428338/pexels-photo-428338.jpeg" },
  { id: 203, title: "Summer Shorts", category: "Clothing", price: 1500, image: "https://images.pexels.com/photos/6387627/pexels-photo-6387627.jpeg" },
  { id: 204, title: "Black Jeans", category: "Clothing", price: 2200, image: "https://images.pexels.com/photos/2983464/pexels-photo-2983464.jpeg" },


  // 🕶️ Accessories (10)
  { id: 301, title: "Smart Watch", category: "Accessories", price: 4500, image: "https://images.pexels.com/photos/267394/pexels-photo-267394.jpeg" },
  { id: 302, title: "Sunglasses", category: "Accessories", price: 2200, image: "https://images.pexels.com/photos/46710/pexels-photo-46710.jpeg" },
  { id: 303, title: "Leather Wallet", category: "Accessories", price: 1800, image: "https://images.pexels.com/photos/50614/pexels-photo-50614.jpeg" },
  { id: 304, title: "Gold Bracelet", category: "Accessories", price: 5500, image: "https://images.pexels.com/photos/190819/pexels-photo-190819.jpeg" },


  // 💻 Electronics (10)
  { id: 401, title: "Laptop Ultra", category: "Electronics", price: 85000, image: "https://images.pexels.com/photos/18105/pexels-photo.jpg" },
  { id: 402, title: "Wireless Headphones", category: "Electronics", price: 7500, image: "https://images.pexels.com/photos/3394661/pexels-photo-3394661.jpeg" },
  { id: 403, title: "Bluetooth Speaker", category: "Electronics", price: 5200, image: "https://images.pexels.com/photos/63703/pexels-photo-63703.jpeg" },
  { id: 405, title: "Gaming Mouse", category: "Electronics", price: 3500, image: "https://images.pexels.com/photos/209717/pexels-photo-209717.jpeg" },
  { id: 406, title: "Keyboard Mechanical", category: "Electronics", price: 4200, image: "https://images.pexels.com/photos/392018/pexels-photo-392018.jpeg" },
];


// function to render the products in the product container
function renderProducts() {
  const productContainer = document.getElementById("productContainer");
  productContainer.innerHTML = ""; // Clear existing products
    products.forEach(product => {   
    const productCard = document.createElement("div");
    productCard.classList.add("product-card");
    productCard.innerHTML = `
        
        <img src="${product.image}" alt="${product.title}" class="product-image" />
        <h3 class="product-title">${product.title}</h3>
        <p class="product-price">₹${product.price}</p>
        <button class="add-to-cart">Add to Cart</button>
        <button class="add-to-whitelist">Add to Whitelist</button>
        

    `;
    productContainer.appendChild(productCard);
  });
}
// call the function to render the products when the page loads
window.onload = renderProducts;

// category filter function
function filterByCategory(category) {
  const productContainer = document.getElementById("productContainer");
  productContainer.innerHTML = ""; // Clear existing products   
    const filteredProducts = category === "All" ? products : products.filter(product => product.category === category);
    filteredProducts.forEach(product => {
    const productCard = document.createElement("div");
    productCard.classList.add("product-card");
    productCard.innerHTML = `
        <img src="${product.image}" alt="${product.title}" class="product-image" />
        <h3 class="product-title">${product.title}</h3>
        <p class="product-price">₹${product.price}</p>
        <button class="add-to-cart">Add to Cart</button>
        <button class="add-to-whitelist">Add to Whitelist</button>
    `;
    productContainer.appendChild(productCard);
  });
}





