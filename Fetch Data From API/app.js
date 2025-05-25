const productList = document.getElementById("product-list");


async function fetchProducts() {
  try {
    const response = await fetch("https://dummyjson.com/products");
    const data = await response.json();
    renderProducts(data.products);
  } catch (error) {
    productList.innerHTML = "<p style='color:red;'>Failed to load products.</p>";
    console.error("Error fetching data:", error);
  }
}


function renderProducts(products) {
  products.forEach(product => {
    const card = document.createElement("div");
    card.className = "card";

    card.innerHTML = `
      <img src="${product.thumbnail}" alt="${product.title}">
      <div class="card-body">
        <h2>${product.title}</h2>
        <p>${product.description.slice(0, 80)}...</p>
        <div class="price">$${product.price}</div>
      </div>
    `;

    productList.appendChild(card);
  });
}

fetchProducts();
