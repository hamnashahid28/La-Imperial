// Initialize AOS after DOM is loaded
document.addEventListener("DOMContentLoaded", () => {
  AOS.init({
    once: true,    
    mirror: false, 
  });
});

// Product page
let products = [];

// FETCH JSON
fetch("data/products.json")
  .then(res => res.json())
  .then(data => {
    products = data;
    displayProducts(products);
  })
  .catch(err => console.error("JSON fetch error:", err));

// DISPLAY PRODUCTS
function displayProducts(list) {
  const productList = document.getElementById("productList");
  productList.innerHTML = ""; // clear previous products

  list.forEach((p, index) => {
    const col = document.createElement("div");
    col.className = "col-md-4 mb-4";
    col.setAttribute("data-aos", "fade-up");
    col.setAttribute("data-aos-delay", 50);
    col.setAttribute("data-aos-duration", "800");

    col.innerHTML = `
      <div class="card h-100 shadow-sm p-2">
        <img src="${p.image}" class="card-img" style="height:180px; object-fit:contain;">
        <div class="card-body">
          <h6 style="color: #0952c0;">${p.name}</h6>
          <p class="text-muted">${p.features}</p>
          <strong>PKR ${p.price || "N/A"}</strong>
          <div class="mt-2">
            <a href="${p.specs}" class="btn btn-primary btn-sm w-100">Download Details</a>
            <button class="btn btn-primary btn-sm mt-1 w-100 addToCart">Add to Cart</button>
          </div>
          <div class="form-check d-flex align-items-center gap-2 mt-2">
            <input class="form-check-input compare-checkbox"
              type="checkbox"
              value="${p.id}"
              onchange="updateCompareButton()">
            <label class="form-check-label">Compare</label>
          </div>
        </div>
      </div>
    `;

    productList.appendChild(col);
  });

  // Add to cart alert
  document.querySelectorAll(".addToCart").forEach(btn => {
    btn.addEventListener("click", () => {
      alert("Thank you for shopping!");
    });
  });

  // Refresh AOS for dynamically added elements
  AOS.refresh();
}

// FILTERING
document.getElementById("brandFilter").addEventListener("change", filterProducts);
document.getElementById("categoryFilter").addEventListener("change", filterProducts);

function filterProducts() {
  const brand = document.getElementById("brandFilter").value;
  const category = document.getElementById("categoryFilter").value;

  const filtered = products.filter(p =>
    (brand === "all" || p.brand === brand) &&
    (category === "all" || p.category === category)
  );

  displayProducts(filtered);
}

// ENABLE / DISABLE COMPARE BUTTON
function updateCompareButton() {
  const checked = document.querySelectorAll(".compare-checkbox:checked");
  document.getElementById("compareBtn").disabled = checked.length < 2;
}

// COMPARE PRODUCTS
document.getElementById("compareBtn").addEventListener("click", () => {
  const checked = document.querySelectorAll(".compare-checkbox:checked");
  const compareResult = document.getElementById("compareResult");

  if (checked.length < 2) {
    compareResult.innerHTML = `
      <p class="text-danger">Please select at least 2 products to compare.</p>
    `;
    return;
  }

  compareResult.innerHTML = "";

  checked.forEach((cb, index) => {
    const product = products.find(p => p.id == cb.value);

    const col = document.createElement("div");
    col.className = "col-md-6 mb-3";
    col.setAttribute("data-aos", "fade-up");
    col.setAttribute("data-aos-delay", index * 100);
    col.setAttribute("data-aos-duration", "800");

    col.innerHTML = `
      <div class="card shadow-sm p-3">
        <img src="${product.image}"
             class="card-img-top p-3"
             style="height:180px; object-fit:contain;"
             onerror="this.src='ASSETS/IMG/no-image.png'">
        <div class="card-body">
          <h5 class="text-primary">${product.name}</h5>
          <p><strong>Brand:</strong> ${product.brand}</p>
          <p><strong>Category:</strong> ${product.category}</p>
          <p><strong>Price:</strong> PKR ${product.price}</p>
          <p><strong>Features:</strong> ${product.features}</p>
        </div>
      </div>
    `;

    compareResult.appendChild(col);
  });

  // Refresh AOS for comparison cards
  AOS.refresh();

  // AUTO SCROLL TO COMPARISON
  document.getElementById("compareSection").scrollIntoView({
    behavior: "smooth"
  });
});
