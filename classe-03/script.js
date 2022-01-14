const botaoInscrever = document.querySelector(".btn");
const modal = document.querySelector(".modal");
const botoesModal = document.querySelectorAll(".modal button");
const botaoConfirmar = document.querySelector(".confirmar");

console.log(modal);

botaoInscrever.addEventListener("click", inscreverSe);

botoesModal.forEach(botao => {
    botao.addEventListener("click", function () {
        modal.classList.add("escondido");
    } );
} );

botaoConfirmar.addEventListener("click", function () {
    botaoInscrever.textContent = "INSCREVER-SE";
    botaoInscrever.classList.remove("inscrito");

    botaoInscrever.addEventListener("click", inscreverSe);
} );

function inscreverSe(event) {
    const botaoClicado = event.target;

    botaoClicado.textContent = "INSCRITO";
    botaoClicado.classList.add("inscrito");

    botaoClicado.removeEventListener("click", inscreverSe);

    botaoClicado.addEventListener("click", function () {
        modal.classList.remove("escondido");
    } );
};
