let numeroSorteado = parseInt(window.Math.random() * 11);
let tentativas = 3;

document.getElementById("tentativas").innerHTML = tentativas;

function chutar() {
  let numeroPlayer = parseInt(document.getElementById("numeroPlayer").value);
  tentativas--;

  if (numeroPlayer === numeroSorteado) {
    document.getElementById(
      "popup"
    ).innerHTML = `<dn' oniv class='window'><header><h1 class='header-title'>Alerta</h1><p class='header-btn' onclick='fechar()'>x</p></header><div class='container'><div class='title-container'><p id='mensagem-final' class='title'>PARABENS, Você acertou!!! "${numeroSorteado}" </p><p class='subtitle'>tentar novamente?</p></div><div class='popup-btn-container' ><a class='btn' href=''>Sim</a><button onClick='fechar()'>Não</button><a class='btn'target='_blank'href='https://github.com/oElmoJr/imersaodev4'>GitHub</a></div></div></div>`;
  } else if (numeroPlayer !== numeroSorteado && tentativas > 0) {
    if (numeroPlayer > numeroSorteado) {
      document.getElementById("quente-frio").innerHTML =
        "O numero sorteado é menor.";
    } else {
      document.getElementById("quente-frio").innerHTML =
        "O numero sorteado é maior.";
    }
    document.getElementById("tentativas").innerHTML = tentativas;
  } else {
    tentativas = 0;
    document.getElementById("tentativas").innerHTML = tentativas;

    document.getElementById(
      "popup"
    ).innerHTML = `<div class='window'><header><h1 class='header-title'>Alerta</h1><p class='header-btn' onclick='fechar()' >x</p></header><div class='container'><div class='title-container'><p id='mensagem-final' class='title'>Acabaram suas temtativas.</p><p class='subtitle'>tentar novamente?</p></div><div class='popup-btn-container' ><a class='btn' href=''>Sim</a><button onClick='fechar()'>Não</button><a class='btn'target='_blank'href='https://github.com/oElmoJr/imersaodev4'>GitHub</a></div></div></div>`;
  }
}

function fechar() {
  document.getElementById("popup").innerHTML = "";
}
