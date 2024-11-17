const cardapio = document.getElementById("cardapio");
const carrinhoBtn = document.getElementById("carrinho-btn");
const carrinhoModal = document.getElementById("carrinho-modal");
const carrinhoItemsContainer = document.getElementById("carrinho-itens");
const carrinhoTotal = document.getElementById("carrinho-total");
const checkBtn = document.getElementById("check-btn");
const fecharBtn = document.getElementById("fechar-modal-btn");
const carrinhoCont = document.getElementById("carrinho-cont");
const endereco = document.getElementById("endereco");
const enderecoErro = document.getElementById("endereco-erro");

carrinhoBtn.addEventListener("click", function(){
    carrinhoModal.style.display = "flex"
});

