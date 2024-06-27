function adicionarAoCarrinho(nome, preco, imagem) {
    console.log("Adicionando ao carrinho:", { nome, preco, imagem }); // Mensagem de depuração

    let carrinho = JSON.parse(localStorage.getItem('carrinho')) || [];

    let itemExistente = carrinho.find(item => item.nome === nome);
    if (itemExistente) {
        itemExistente.quantidade += 1;
    } else {
        carrinho.push({ nome, preco, imagem, quantidade: 1 });
    }

    localStorage.setItem('carrinho', JSON.stringify(carrinho));
    window.location.href = 'carrinho.html';
}


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
