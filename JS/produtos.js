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
