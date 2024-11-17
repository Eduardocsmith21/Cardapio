const cardapio = document.getElementById("cardapio");
const carrinhoBtn = document.getElementById("carrinho-btn");
const carrinhoModal = document.getElementById("carrinho-modal");
const carrinhoItemsContainer = document.getElementById("carrinho-items");
const carrinhoTotal = document.getElementById("carrinho-total");
const checkBtn = document.getElementById("check-btn");
const fecharBtn = document.getElementById("fechar-modal-btn");
const carrinhoCont = document.getElementById("carrinho-cont");
const endereco = document.getElementById("endereco");
const enderecoErro = document.getElementById("endereco-erro");

let carrinho = [];

//Abrir o modal do carrinho
carrinhoBtn.addEventListener("click", function(){
    updateCarrinhoModal();
    carrinhoModal.style.display = "flex";
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
    updateCarrinhoModal();
});

//função para adcionar no carrinho 
function addCarrinho(nome, preco, quantidade){
    const itemDuplicado = carrinho.find(item => item.nome == nome)

    if(itemDuplicado){
        //se o item já existir na lista ele vai apenas mudar a quantidade do item ao invés de adicionar um novo item
        itemDuplicado.quantidade += 1;
        return;
    }
    carrinho.push({
        nome,
        preco,
        quantidade: 1,
    })
}

//atualizar carrinho
function updateCarrinhoModal(){
    carrinhoItemsContainer.innerHTML = "";
    let total = 0;

    carrinho.forEach(item => {
        const itemElemento = document.createElement("div");
        itemElemento.classList.add("flex", "justify-between", "mb-4", "flex-col")

        itemElemento.innerHTML = `
            <div class="flex items-center justify-between">
                <div>
                    <p class="font-medium">${item.nome}</p>
                    <p>Qtd: ${item.quantidade}</p>
                    <p class="font-medium mt-2"> R$ ${item.preco.toFixed(2)}</p>
                </div>

                    <button class="text-red-600 remover-btn" data-nome="${item.nome}">
                        remover
                    </button>
            </div>
        `;
        
        total += item.preco * item.quantidade
        carrinhoItemsContainer.appendChild(itemElemento);
    });

    carrinhoTotal.textContent = total.toLocaleString("pt-br", {
        style: "currency",
        currency: "BRL"
    });

    carrinhoCont.innerHTML = carrinho.length;

} 

// Função para remover um item do carrinho
carrinhoItemsContainer.addEventListener("click", function(event) {
    // Verifica se o botão clicado tem a classe "remover-btn"
    if (event.target.classList.contains("remover-btn")) {
        const nome = event.target.getAttribute("data-nome");
        removeItemCarrinho(nome); // Chama a função para remover o item
    }
});

function removeItemCarrinho(nome) {
    // Encontra o índice do item no carrinho
    const index = carrinho.findIndex(item => item.nome === nome);

    
    if (index !== -1) {
        const item = carrinho[index];

        // Se a quantidade for maior que 1, reduz a quantidade
        if (item.quantidade > 1) {
            item.quantidade -= 1;
            updateCarrinhoModal();
            return;
        } 

        carrinho.splice(index, 1);
        updateCarrinhoModal();
        
    }
}
