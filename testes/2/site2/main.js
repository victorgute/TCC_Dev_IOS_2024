// Array de produtos (Exemplo)
const products = [
    { name: "AEROCOOL KCAS FULL RANGE, 700W, 80 PLUS BRONZE", category: "Aerecool", image: "img/fontes/font1.jpg", price: 300 },
    { name: "AEROCOOL KCAS 500W BRONZE 80 PLUS", category: "Aerecool", image: "img/fontes/font2.webp", price: 250 },
    { name: "COOLER MASTER GX 1250 GOLD", category: "Cooler Master", image: "img/fontes/font3.webp", price: 1.300 },
    { name: "CORSAIR RM750E, 750W, FULL MODULAR, 80 PLUS GOLD", category: "Corsair", image: "img/fontes/font4.jpeg", price: 1000 },
    { name: "CORSAIR RM1200X, 1200W, FULL MODULAR, 80 PLUS GOLD", category: "Corsair", image: "img/fontes/font5.jpeg", price: 2300 },
];

// Função para gerar o filtro de marcas
function generateFilter() {
    const filterElement = document.getElementById("filter");
    const uniqueCategories = [...new Set(products.map(product => product.category))];

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

// Função para atualizar a lista de produtos com base nos filtros
function updateProductsList() {
    const checkedCategories = Array.from(document.querySelectorAll('input[name="category"]:checked')).map(checkbox => checkbox.value);
    const searchInput = document.getElementById("searchInput").value.toLowerCase();
    const priceRange = document.getElementById("priceRange").value;

    const productsList = document.getElementById("productsList");
    productsList.innerHTML = ""; // Limpar a lista atual

    let visibleProductsCount = 0;

    products.forEach(product => {
        if (checkedCategories.includes(product.category) && product.name.toLowerCase().includes(searchInput) && product.price <= priceRange) {
            visibleProductsCount++;
            
            const productElement = document.createElement("div");
            productElement.classList.add("product");
            
            // Adicionando a imagem do produto
            const productImage = document.createElement("img");
            productImage.src = product.image;
            productImage.alt = product.name;
            productElement.appendChild(productImage);

            // Adicionando o ícone de favoritar
            const favoriteIcon = document.createElement("span");
            favoriteIcon.classList.add("favorite-icon");
            favoriteIcon.innerHTML = "&#9733;"; // HTML entity for star
            favoriteIcon.onclick = () => toggleFavorite(favoriteIcon);
            productElement.appendChild(favoriteIcon);
            
            // Adicionando o nome do produto
            const productName = document.createElement("div");
            productName.textContent = product.name;
            productElement.appendChild(productName);

            // Adicionando o preço do produto
            const productPrice = document.createElement("div");
            productPrice.classList.add("product-price");
            productPrice.textContent = `R$ ${product.price}`;
            productElement.appendChild(productPrice);

            productsList.appendChild(productElement);
        }
    });

    // Atualizando a contagem de produtos visíveis
    const productCount = document.getElementById("productCount");
    productCount.textContent = `Produtos disponíveis: ${visibleProductsCount}`;
}

// Função para mostrar ou esconder o filtro
function toggleFilter() {
    const filterElement = document.getElementById("filter");
    if (filterElement.style.display === "none") {
        filterElement.style.display = "block";
    } else {
        filterElement.style.display = "none";
    }
}

// Função para ordenar os produtos de A-Z
function sortProductsAZ() {
    products.sort((a, b) => a.name.localeCompare(b.name));
    updateProductsList();
}

// Função para ordenar os produtos de Z-A
function sortProductsZA() {
    products.sort((a, b) => b.name.localeCompare(a.name));
    updateProductsList();
}

// Função para ordenar os produtos pelo menor preço
function sortPriceLowToHigh() {
    products.sort((a, b) => a.price - b.price);
    updateProductsList();
}

// Função para ordenar os produtos pelo maior preço
function sortPriceHighToLow() {
    products.sort((a, b) => b.price - a.price);
    updateProductsList();
}

// Função para pesquisa de produtos
function searchProducts() {
    updateProductsList();
}

// Função para favoritar produtos
function toggleFavorite(icon) {
    icon.classList.toggle("favorited");
}

// Função para atualizar o filtro de preço
function updatePriceFilter(value) {
    document.getElementById("priceValue").textContent = `Até R$${value}`;
    updateProductsList();
}

// Chamar a função para gerar o filtro e a lista quando a página carregar
window.onload = function() {
    generateFilter();
    updateProductsList();
};

document.addEventListener("DOMContentLoaded", () => {
    const productGrid = document.getElementById('productGrid');

    products.forEach(product => {
        const productDiv = document.createElement('div');
        productDiv.className = 'product';

        productDiv.innerHTML = `
            <img src="${product.image}" alt="${product.name}">
            <h3>${product.name}</h3>
            <p class="product-price">R$ ${product.price}</p>
        `;

        productGrid.appendChild(productDiv);
    });
});
