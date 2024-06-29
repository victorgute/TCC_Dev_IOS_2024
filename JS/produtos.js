// Função para adicionar item ao carrinho
function adicionarAoCarrinho(nome, preco, imagem) {
    console.log("Adicionando ao carrinho:", { nome, preco, imagem });

    let carrinho = JSON.parse(localStorage.getItem('carrinho')) || [];

    let itemExistente = carrinho.find(item => item.nome === nome);
    if (itemExistente) {
        itemExistente.quantidade += 1;
    } else {
        carrinho.push({ nome, preco, imagem, quantidade: 1 });
    }

    localStorage.setItem('carrinho', JSON.stringify(carrinho));
    atualizarCarrinhoQuantidade();
}

// Função para atualizar o contador de itens no carrinho
function atualizarCarrinhoQuantidade() {
    let carrinho = JSON.parse(localStorage.getItem('carrinho')) || [];
    const carrinhoQuantidade = document.getElementById('carrinho-quantidade');
    let totalItens = carrinho.reduce((total, item) => total + item.quantidade, 0);
    carrinhoQuantidade.textContent = totalItens;
}

// Função para carregar a quantidade de itens no carrinho ao carregar a página
function carregarQuantidadeCarrinho() {
    atualizarCarrinhoQuantidade();
}

// Chamar a função ao carregar a página
document.addEventListener('DOMContentLoaded', carregarQuantidadeCarrinho);

// Função para filtrar por marca
function filtrarPorMarca(marca) {
    const produtos = document.querySelectorAll('.produto');
    produtos.forEach(produto => {
        const marcaProduto = produto.getAttribute('data-marca');
        if (marca === 'todos' || marcaProduto === marca) {
            produto.style.display = 'block';
        } else {
            produto.style.display = 'none';
        }
    });
}

// Função para filtrar por faixa de preço
function filtrarPorPreco(min, max) {
    const produtos = document.querySelectorAll('.produto');
    produtos.forEach(produto => {
        const precoProduto = parseInt(produto.getAttribute('data-preco'), 10);
        if (precoProduto >= min && precoProduto <= max) {
            produto.style.display = 'block';
        } else {
            produto.style.display = 'none';
        }
    });
}

// Função para atualizar valor de faixa de preço exibido dinamicamente
function updatePriceFilter(value) {
    document.getElementById('priceValue').textContent = `Até R$${value}`;
}

// Função para filtrar por nome
function filtrarPorNome() {
    const input = document.getElementById('searchInput').value.toLowerCase();
    const produtos = document.querySelectorAll('.produto');
    produtos.forEach(produto => {
        const nomeProduto = produto.querySelector('.produto-nome').textContent.toLowerCase();
        if (nomeProduto.includes(input)) {
            produto.style.display = 'block';
        } else {
            produto.style.display = 'none';
        }
    });
}

// Função para abrir/fechar o dropdown
function toggleDropdown() {
    document.getElementById("dropdownMenu").classList.toggle("show");
}

// Função para filtrar por marca
function filtrarPorMarca(marca) {
    const produtos = document.querySelectorAll('.produto');
    produtos.forEach(produto => {
        if (marca === 'todos' || produto.getAttribute('data-marca') === marca) {
            produto.style.display = 'block';
        } else {
            produto.style.display = 'none';
        }
    });
    // Fechar o dropdown após selecionar uma categoria
    toggleDropdown();
}

// Função para filtrar por nome
function filtrarPorNome() {
    const input = document.getElementById('searchInput').value.toLowerCase();
    const produtos = document.querySelectorAll('.produto');
    produtos.forEach(produto => {
        const nome = produto.querySelector('.produto-nome').textContent.toLowerCase();
        if (nome.includes(input)) {
            produto.style.display = 'block';
        } else {
            produto.style.display = 'none';
        }
    });
}

// Função para atualizar o filtro de preço
function updatePriceFilter(value) {
    document.getElementById('priceValue').textContent = `Até R$${value}`;
}

// Função para filtrar por preço
function filtrarPorPreco(min, max) {
    const produtos = document.querySelectorAll('.produto');
    produtos.forEach(produto => {
        const preco = parseFloat(produto.getAttribute('data-preco'));
        if (preco >= min && preco <= max) {
            produto.style.display = 'block';
        } else {
            produto.style.display = 'none';
        }
    });
}
