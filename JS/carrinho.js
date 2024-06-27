function carregarCarrinho() {
  let carrinho = JSON.parse(localStorage.getItem("carrinho")) || [];
  console.log("Itens do carrinho:", carrinho); // Mensagem de depuração

  let itensCarrinho = document.getElementById("itensCarrinho");
  let totalCarrinho = document.getElementById("totalCarrinho");
  let total = 0;

  itensCarrinho.innerHTML = "";
  carrinho.forEach((item, index) => {
    let itemTotal = item.preco * item.quantidade;
    total += itemTotal;

    itensCarrinho.innerHTML += `
            <div class="item-carrinho d-flex align-items-center mb-3">
                <img src="${item.imagem}" alt="${
      item.nome
    }" width="100px" class="me-3">
                <div>
                    <h3>${item.nome}</h3>
                    <p>Preço: R$ ${item.preco.toFixed(2)}</p>
                    <p>Quantidade: 
                        <button class="btn btn-secondary btn-sm" onclick="diminuirQuantidade(${index})">-</button>
                        ${item.quantidade}
                        <button class="btn btn-secondary btn-sm" onclick="aumentarQuantidade(${index})">+</button>
                    </p>
                    <p>Total: R$ ${itemTotal.toFixed(2)}</p>
                </div>
            </div>
        `;
  });

  totalCarrinho.innerHTML = `<h2>Total: R$ ${total.toFixed(2)}</h2>`;
}

function aumentarQuantidade(index) {
  let carrinho = JSON.parse(localStorage.getItem("carrinho")) || [];
  carrinho[index].quantidade += 1;
  localStorage.setItem("carrinho", JSON.stringify(carrinho));
  carregarCarrinho();
}

function diminuirQuantidade(index) {
  let carrinho = JSON.parse(localStorage.getItem("carrinho")) || [];
  if (carrinho[index].quantidade > 1) {
    carrinho[index].quantidade -= 1;
  } else {
    carrinho.splice(index, 1);
  }
  localStorage.setItem("carrinho", JSON.stringify(carrinho));
  carregarCarrinho();
}

function voltarAsCompras() {
  window.location.href = "produtos.html";
}

function finalizarCompras() {
  alert("Compra finalizada com sucesso!");
  localStorage.removeItem("carrinho");
  window.location.href = "index.html";
}

window.onload = carregarCarrinho;
