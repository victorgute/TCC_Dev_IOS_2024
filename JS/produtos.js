const products = {
    fontes: [
        { name: "AEROCOOL KCAS FULL RANGE, 700W, 80 PLUS BRONZE", category: "Aerecool", image: "/img/fontes/font1.jpg", price: 300 },
        { name: "AEROCOOL KCAS 500W BRONZE 80 PLUS", category: "Aerecool", image: "/img/fontes/font2.webp", price: 250 },
        { name: "COOLER MASTER GX 1250 GOLD", category: "Cooler Master", image: "/img/fontes/font3.webp", price: 1300 },
        { name: "CORSAIR RM750E, 750W, FULL MODULAR, 80 PLUS GOLD", category: "Corsair", image: "/img/fontes/font4.jpeg", price: 1000 },
        { name: "Fonte Corsair HX1500i, 1500W, Full Modular, 80 Plus Platinum, Preta, CP-9020261-NA", category: "Corsair", image: "/img/fontes/font6.jpg", price: 3200 },
        { name: "Fonte Corsair HX1000i, 1000W, Full Modular, 80 Plus Platinum, Preta, CP-9020259-WW", category: "Corsair", image: "/img/fontes/font7.jpg", price: 1999 },
        { name: "Fonte Corsair RM750, Full Modular, 80 Plus Gold, Branca, CP-9020231-NA", category: "Corsair", image: "/img/fontes/font8.jpg", price: 899 },
        { name: "Fonte Corsair RMx Series RM1000x, 1000W, Full Modular, 80 Plus Gold, Black, CP-9020201-WW", category: "Corsair", image: "/img/fontes/font9.jpg", price: 1699 },
        { name: "Fonte Corsair CV 750, 750W, 80 Plus Bronze, Preto, CP-9020237-BR", category: "Corsair", image: "/img/fontes/font10.jpg", price: 499 },
        { name: "Fonte Corsair RM Series RM850, 850W, Full Modular, 80 Plus Gold, White, CP-9020232-WW", category: "Corsair", image: "/img/fontes/font11.jpg", price: 989 },
        { name: "Fonte Corsair CV Series CV650 80 Plus Bronze 650W, CP-9020236-BR", category: "Corsair", image: "/img/fontes/font12.jpg", price: 379 },
        { name: "Fonte Corsair CV Series CV550 80 Plus Bronze 550W, CP-9020210-BR", category: "Corsair", image: "/img/fontes/font13.jpg", price: 279 },
        { name: "Fonte Corsair HX Series Modular HX750 750W 80 Plus Platinum, CP-9020137-WW", category: "Corsair", image: "/img/fontes/font14.jpg", price: 1399 },
    ],
    monitores: [
        { name: "MONITOR GAMER ACER NITRO KG240Y-M5\"", category: "Acer", image: "/img/monitores/moni1.jpg", price: 800 },
        { name: "MONITOR GAMER ACER VERO RL242Y-E\"", category: "Acer", image: "/img/monitores/moni2.jpg", price: 800 },
        { name: "MONITOR GAMER COOLER MASTER TEMPEST GZ2711\"", category: "Coolor Master", image: "/img/monitores/moni3.jpeg", price: 7000 },
        { name: "MONITOR GAMER LEVEL ELITE CURVE\"", category: "Level", image: "/img/monitores/moni4.jpeg", price: 1300 },
        { name: "MONITOR LEVEL ELITE FLAT\"", category: "Level", image: "/img/monitores/moni5.jpeg", price: 1400 },
        { name: "MONITOR GAMER LEVEL LITE\"", category: "Level", image: "/img/monitores/moni3.jpeg", price: 800 }, 
        { name: "MONITOR GAMER GIGABYTE GS34WQC\"", category: "Gigabyte", image: "/img/monitores/moni3.jpeg", price: 2500 },
        { name: "MONITOR GAMER GIGABYTE GS27F\"", category: "Gigabyte", image: "/img/monitores/moni3.jpeg", price: 1300 },
        { name: "MONITOR GAMER BLUECASE OPTIGAMER PRO\"", category: "BlueCase", image: "/img/monitores/moni3.jpeg", price: 700 },
        { name: "MONITOR GAMER DUEX DX270ZHK\"", category: "Duex", image: "/img/monitores/moni3.jpeg", price: 850 },
        { name: "MONITOR GAMER DUEX DX240ZG\"", category: "Duex", image: "/img/monitores/moni3.jpeg", price: 700 },
        { name: "MONITOR GAMER COOLER MASTER GA241\"", category: "Coolor Master", image: "/img/monitores/moni3.jpeg", price: 600 },
        { name: "MONITOR GAMER DUEX DX270QGP165\"", category: "Duex", image: "/img/monitores/moni3.jpeg", price: 1000 },
        { name: "MONITOR GAMER DUEX DX270QGP240\"", category: "Duex", image: "/img/monitores/moni3.jpeg", price: 1200 },
        { name: "MONITOR GAMER BENQ ZOWIE XL2546X\"", category: "Benq", image: "/img/monitores/moni3.jpeg", price: 5000 },
        { name: "MONITOR GAMER PCYES O-CREED O30\"", category: "PCYES!", image: "/img/monitores/moni3.jpeg", price: 900 },
    ],
    // Adicione mais categorias e produtos conforme necessário
};

let currentCategory = "fontes";

function generateFilter() {
    const filterElement = document.getElementById("filter");
    filterElement.innerHTML = "";
    const uniqueCategories = [...new Set(products[currentCategory].map(product => product.category))];

    uniqueCategories.forEach(category => {
        const checkbox = document.createElement("input");
        checkbox.type = "checkbox";
        checkbox.name = "category";
        checkbox.value = category;
        checkbox.checked = true; // Por padrão, todas as marcas estarão habilitadas
        checkbox.addEventListener("change", updateProductsList);

        const label = document.createElement("label");
        label.textContent = category;

        filterElement.appendChild(checkbox);
        filterElement.appendChild(label);
        filterElement.appendChild(document.createElement("br"));
    });
}

function updateProductsList() {
    const checkedCategories = Array.from(document.querySelectorAll('input[name="category"]:checked')).map(checkbox => checkbox.value);
    const searchInput = document.getElementById("searchInput").value.toLowerCase();
    const priceRange = document.getElementById("priceRange").value;

    const productsList = document.getElementById("productsList");
    productsList.innerHTML = ""; // Limpar a lista atual

    let visibleProductsCount = 0;

    products[currentCategory].forEach(product => {
        if (checkedCategories.includes(product.category) && product.name.toLowerCase().includes(searchInput) && product.price <= priceRange) {
            visibleProductsCount++;
            
            const productElement = document.createElement("div");
            productElement.classList.add("product");
            
            const productImage = document.createElement("img");
            productImage.src = product.image;
            productImage.alt = product.name;
            productElement.appendChild(productImage);

            const favoriteIcon = document.createElement("span");
            favoriteIcon.classList.add("favorite-icon");
            favoriteIcon.innerHTML = "&#9733;"; // HTML entity for star
            favoriteIcon.onclick = () => toggleFavorite(favoriteIcon);
            productElement.appendChild(favoriteIcon);

            const productName = document.createElement("div");
            productName.textContent = product.name;
            productElement.appendChild(productName);

            const productPrice = document.createElement("div");
            productPrice.classList.add("product-price");
            productPrice.textContent = `R$ ${product.price}`;
            productElement.appendChild(productPrice);

            productsList.appendChild(productElement);
        }
    });

    const productCount = document.getElementById("productCount");
    productCount.textContent = `Produtos disponíveis: ${visibleProductsCount}`;
}

function toggleFilter() {
    const filterElement = document.getElementById("filter");
    if (filterElement.style.display === "none") {
        filterElement.style.display = "block";
    } else {
        filterElement.style.display = "none";
    }
}

function sortProductsAZ() {
    products[currentCategory].sort((a, b) => a.name.localeCompare(b.name));
    updateProductsList();
}

function sortProductsZA() {
    products[currentCategory].sort((a, b) => b.name.localeCompare(a.name));
    updateProductsList();
}

function sortPriceLowToHigh() {
    products[currentCategory].sort((a, b) => a.price - b.price);
    updateProductsList();
}

function sortPriceHighToLow() {
    products[currentCategory].sort((a, b) => b.price - a.price);
    updateProductsList();
}

function searchProducts() {
    updateProductsList();
}

function toggleFavorite(icon) {
    icon.classList.toggle("favorited");
}

function updatePriceFilter(value) {
    document.getElementById("priceValue").textContent = `Até R$${value}`;
    updateProductsList();
}

function updateCategory() {
    currentCategory = document.getElementById("categorySelect").value;
    generateFilter();
    updateProductsList();
}

window.onload = function() {
    generateFilter();
    updateProductsList();
};
