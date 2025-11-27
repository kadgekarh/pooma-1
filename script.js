// PRODUCT DATA (Dynamic)
const products = [
  {
    id: 1,
    name: "POOMA Sports Shoes",
    price: 3499,
    img: "https://i.imgur.com/Vvb8msD.jpeg",
    category: "Shoes",
    description: "Premium lightweight running shoes with air cushioning."
  },
  {
    id: 2,
    name: "Winter Jacket",
    price: 2199,
    img: "https://i.imgur.com/g49NYh6.jpeg",
    category: "Jackets",
    description: "Super warm insulated jacket for winter."
  },
  {
    id: 3,
    name: "POOMA Hoodie",
    price: 1999,
    img: "https://i.imgur.com/FdcSml8.jpeg",
    category: "Apparel",
    description: "Soft cotton hoodie with premium POOMA print."
  },
  {
    id: 4,
    name: "POOMA Cap",
    price: 499,
    img: "https://i.imgur.com/bHqvKyu.jpeg",
    category: "Accessories",
    description: "Trendy adjustable cap for all seasons."
  }
];

// LOAD PRODUCTS ON HOME PAGE
function loadProducts() {
  const container = document.getElementById("product-list");
  if (!container) return;

  products.forEach(p => {
    container.innerHTML += `
      <div class="product">
        <img src="${p.img}">
        <h3>${p.name}</h3>
        <p>₹${p.price}</p>
        <button onclick="viewProduct(${p.id})">View Product</button>
      </div>
    `;
  });
}

// OPEN PRODUCT PAGE
function viewProduct(id) {
  localStorage.setItem("productID", id);
  window.location.href = "product.html";
}

// LOAD PRODUCT DETAILS ON PRODUCT PAGE
function loadProductDetails() {
  const pId = localStorage.getItem("productID");
  const p = products.find(x => x.id == pId);

  if (!p) return;

  document.getElementById("productDetails").innerHTML = `
    <img src="${p.img}">
    <h2>${p.name}</h2>
    <p>${p.description}</p>
    <h3>Price: ₹${p.price}</h3>
    <button onclick="buyNow()">Buy Now</button>
  `;
}

// BUY NOW → PAYMENT PAGE
function buyNow() {
  window.location.href = "payment.html";
}
