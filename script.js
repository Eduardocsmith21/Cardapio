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

//Abrir o modal do carrinho
carrinhoBtn.addEventListener("click", function(){
    carrinhoModal.style.display = "flex"
});

//fechar modal quando houver clik fora do modal
carrinhoModal.addEventListener("click", function(event){
    if(event.target == carrinhoModal){
        carrinhoModal.style.display = "none";
    }
});


fecharBtn.addEventListener("click", function(){
     carrinhoModal.style.display = "none";
});

cardapio.addEventListener("click", function(event){
    //console.log(event.target);

    let parentButton = event.target.closest(".add-carrinho-btn")
    if(parentButton){
        const nome = parentButton.getAttribute("data-name");
        const preco = parseFloat(parentButton.getAttribute("data-price"));
        
        //adicionar no carrinho
        addCarrinho(nome, preco);

    }
});

//função para adcionar no carrinho 
function addCarrinho(nome, preco){
    alert("O item é " + nome)
}