let contadorCliques = 0;

function abrirCarta() {
  contadorCliques++;

  if (contadorCliques >= 5) {
    document.getElementById('carta').style.display = 'none';
    document.getElementById('mensagem').removeAttribute('hidden');
  }
}

function responderSim(){
  alert("Diz que não pra tu ver! Também te amo!")
}

function responderNao(){
  alert("Vai querer sim, não tem escolha!")
}