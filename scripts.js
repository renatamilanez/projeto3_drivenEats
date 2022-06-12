function selectFood (elemento) {
    const opcaoEscolhida = document.querySelector(".foods .select-option");
    if (opcaoEscolhida !== null) {
        opcaoEscolhida.classList.remove("select-option");
    } 
    elemento.classList.add("select-option");
}

function selectDrink (elemento) {
    const opcaoEscolhida = document.querySelector(".drinks .select-option");
    if (opcaoEscolhida !== null) {
        opcaoEscolhida.classList.remove("select-option");
    } 
    elemento.classList.add("select-option");
}

function selectDessert (elemento) {
    const opcaoEscolhida = document.querySelector(".desserts .select-option");
    if (opcaoEscolhida !== null) {
        opcaoEscolhida.classList.remove("select-option");
    } 
    elemento.classList.add("select-option");
}

//barra verde fechar pedido

function closeOrder () {
    let confirmOrder = document.querySelector(".close-order .close-button");
    let textOrder = document.querySelector(".close-txt");

    let CheckedFood = document.querySelector(".foods .select-option")
    let CheckedDrink = document.querySelector(".drinks .select-option")
    let CheckedDessert = document.querySelector(".desserts .select-option")

    if (CheckedFood && CheckedDrink && CheckedDessert){
        confirmOrder.classList.add("checked-close-button");
        textOrder.innerHTML("Fazer pedido");
    }
}

