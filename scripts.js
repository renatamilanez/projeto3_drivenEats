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

