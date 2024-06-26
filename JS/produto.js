// produtos.js
// Função para filtrar produtos por marca
function filtrarPorMarca(marca) {
    let produtos = document.querySelectorAll('.produto');
    
    produtos.forEach(produto => {
        if (marca === 'todos' || produto.getAttribute('data-marca') === marca) {
            produto.style.display = 'block';
        } else {
            produto.style.display = 'none';
        }
    });
}

// Função para filtrar produtos por faixa de preço
function filtrarPorPreco(min, max) {
    let produtos = document.querySelectorAll('.produto');
    
    produtos.forEach(produto => {
        let preco = parseInt(produto.getAttribute('data-preco'));
        
        if ((min === 0 && max === 0) || (preco >= min && preco <= max)) {
            produto.style.display = 'block';
        } else {
            produto.style.display = 'none';
        }
    });
}
