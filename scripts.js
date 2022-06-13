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


    //window.open("https://api.whatsapp.com/send?phone=5527999175853&text=Ol%C3%A1%2C%20gostaria%20de%20fazer%20o%20pedido%3A%20%0A%20%20%20%20%20%20%20%20-%20Prato%3A%20Frango%20Yin%20Yang%0A%20%20%20%20%20%20%20%20-%20Bebida%3A%20Coquinha%20Gelada%0A%20%20%20%20%20%20%20%20-%20Sobremesa%3A%20Pudim%0A%20%20%20%20%20%20%20%20Total%3A%20R%24%2025%0A%20%20%20%20")
}

function getOrderText(){
    let CheckedFood = document.querySelector(".foods .select-option .title-option").innerHTML
    let CheckedDrink = document.querySelector(".drinks .select-option .title-option").innerHTML
    let CheckedDessert = document.querySelector(".desserts .select-option .title-option").innerHTML
    let PriceFood = document.querySelector(".foods .select-option .price-option").innerHTML
    let PriceDrink = document.querySelector(".drinks .select-option .price-option").innerHTML
    let PriceDessert = document.querySelector(".desserts .select-option .price-option").innerHTML

    console.log(CheckedFood)
    console.log(CheckedDrink)
    console.log(CheckedDessert)
    console.log(PriceFood)
    console.log(PriceDrink)
    console.log(PriceDessert)
    console.log(parseInt(PriceFood.replace('R$', '')))
}