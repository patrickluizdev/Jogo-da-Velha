//JavaScript Jogo da Velha

const celulas = document.querySelectorAll(".celula");
let checarTurno = true;

const jogadorX = "X";
const jogadorO = "O";

document.addEventListener("click", (event) => {
  if (event.target.matches(".celula")) {
    jogar(event.target.id);
  }
});

function jogar(id) {
  const celula = document.getElementById(id);
  turno = checarTurno ? jogadorX : jogadorO;
  celula.textContent = turno;
  checarTurno = !checarTurno;
}
