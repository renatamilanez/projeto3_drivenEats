function selectFood (elemento) {
    const opcaoEscolhida = document.querySelector(".foods .select-option");
    if (opcaoEscolhida !== null) {
        opcaoEscolhida.classList.remove("select-option");
    } 
    elemento.classList.add("select-option");

    closeOrder();
}

function selectDrink (elemento) {
    const opcaoEscolhida = document.querySelector(".drinks .select-option");
    if (opcaoEscolhida !== null) {
        opcaoEscolhida.classList.remove("select-option");
    } 
    elemento.classList.add("select-option");
    
    closeOrder();
}

function selectDessert (elemento) {
    const opcaoEscolhida = document.querySelector(".desserts .select-option");
    if (opcaoEscolhida !== null) {
        opcaoEscolhida.classList.remove("select-option");
    } 
    elemento.classList.add("select-option");

    closeOrder();
}

//barra verde fechar pedido

function closeOrder () {
    let confirmOrder = document.querySelector(".close-order .close-button");
    let button = document.querySelector(".close-button");

    let CheckedFood = document.querySelector(".foods .select-option")
    let CheckedDrink = document.querySelector(".drinks .select-option")
    let CheckedDessert = document.querySelector(".desserts .select-option")

    if (CheckedFood && CheckedDrink && CheckedDessert){
        confirmOrder.classList.add("check-close");
        button.innerHTML = "Fazer pedido";
        button.disabled = false;
    }
}

function sendOrder() {
    const text = getOrderText()


    window.open(`https://api.whatsapp.com/send?phone=5527999175853&text=${text}`)
}

function getOrderText(){
    let checkedFood = document.querySelector(".foods .select-option .title-option").innerHTML
    let checkedDrink = document.querySelector(".drinks .select-option .title-option").innerHTML
    let checkedDessert = document.querySelector(".desserts .select-option .title-option").innerHTML
    let priceFood = document.querySelector(".foods .select-option .price-option").innerHTML
    let priceDrink = document.querySelector(".drinks .select-option .price-option").innerHTML
    let priceDessert = document.querySelector(".desserts .select-option .price-option").innerHTML
    let priceFoodConverted = priceFood.replace('R$', '').replace(',', '.');
    let priceDrinkConverted = priceDrink.replace('R$', '').replace(',', '.');
    let priceDessertConverted = priceDessert.replace('R$', '').replace(',', '.');
    let finalPrice = (Number(priceFoodConverted) + Number(priceDrinkConverted) + Number(priceDessertConverted)).toFixed(2);

    return encodeURIComponent(`Olá, gostaria de fazer o pedido:
    - Prato: ${checkedFood}
    - Bebida: ${checkedDrink}
    - Sobremesa: ${checkedDessert}
    Total: R$ ${finalPrice}`)
}