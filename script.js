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
});

//função para adcionar no carrinho 
function addCarrinho(nome, preco, quandidade){
    const itemDuplicado = carrinho.find(item => item.nome == nome)

    if(itemDuplicado){
        //se o item já existir na lista ele vai apenas mudar a quandidade do item ao invés de adicionar um novo item
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

                <div>
                    <button class="text-red-600">
                        remover
                    </button>
                </div>
            </div>
        `;
        
        total += item.preco * item.quandidade
        carrinhoItemsContainer.appendChild(itemElemento);
    });

    carrinhoTotal.textContent = total.toLocaleString("pt-br", {
        style: "currency",
        currency: "BRL"
    });

    carrinhoCont.innerHTML = carrinho.length;

} 

//função para remover um item do carrinho 