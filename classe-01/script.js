const inputs = document.querySelectorAll("input");
const frutas = document.querySelectorAll("li");

inputs.forEach(input => {
    input.addEventListener("keydown", function (event) {
        if (!teclouEnter(event.code)) {
            return;
        }

        filtrarLista(frutas, event.target);
    });

    input.addEventListener("keydown", function (event) {
        if (!teclouEnter(event.code)) {
            return;
        }

        limparInput(event.target);
    });
});

function teclouEnter(tecla) {
    return tecla === "Enter";
};

function filtrarLista(lista, filtro) {
    lista.forEach(item => {
        item.classList.remove("escondido");

        if (filtro.value && item.textContent !== filtro.value) {
            item.classList.add("escondido");
        }
    });
}

function limparInput(input) {
    return input.value = "";
}
