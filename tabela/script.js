let playersName = [];

document.getElementById("form").addEventListener("submit", (e) => {
  e.preventDefault();
});

function calculaPontos(jogador) {
  pontos = jogador.vitorias * 3 + jogador.empates;
  return pontos;
}

var listaJogadores = [];
exibeJogadoresNaTela(listaJogadores);

function exibeJogadoresNaTela(listaJogadores) {
  var elemento = "";
  for (var i = 0; i < listaJogadores.length; i++) {
    elemento += "<tr>";
    elemento += "<td class='nome' >" + listaJogadores[i].nome + "</td>";
    elemento += "<td>" + listaJogadores[i].vitorias + "</td>";
    elemento += "<td>" + listaJogadores[i].empates + "</td>";
    elemento += "<td>" + listaJogadores[i].derrotas + "</td>";
    elemento += "<td>" + listaJogadores[i].pontos + "</td>";
    elemento +=
      "<td><button onclick='adicionarVitoria(" +
      i +
      ")'class='btn'>Vitória</a></td>";
    elemento += "</tr>";
  }

  var tabelaJogadores = document.getElementById("tabelaJogadores");
  tabelaJogadores.innerHTML = elemento;
}

function adicionarVitoria(i) {
  var jogador = listaJogadores[i];
  jogador.vitorias++;
  jogador.pontos = calculaPontos(jogador);
  exibeJogadoresNaTela(listaJogadores);

  adicionarDerrota(i);
}

function adicionarEmpate() {
  for (var i = 0; i < listaJogadores.length; i++) {
    var jogador = listaJogadores[i];
    jogador.empates++;
    jogador.pontos = calculaPontos(jogador);
  }
  exibeJogadoresNaTela(listaJogadores);
}

function adicionarDerrota(indexvitoria) {
  for (var i = 0; i < listaJogadores.length; i++) {
    var jogador = listaJogadores[i];
    jogador.derrotas++;
  }
  var jogadorvitoria = listaJogadores[indexvitoria];
  jogadorvitoria.derrotas--;

  exibeJogadoresNaTela(listaJogadores);
}

function novojogador() {
  var nome = document.getElementById("nome").value;
  var nomeplayer = nome.charAt(0).toUpperCase() + nome.slice(1);

  var msg = document.getElementById("msg");

  if (nomeplayer) {
    if (playersName.includes(nomeplayer)) {
      msg.innerHTML = "Este player já existe";
      setTimeout(() => {
        msg.innerHTML = "";
      }, 3000);
    } else {
      playersName.push(nomeplayer);
      listaJogadores.push({
        nome: nomeplayer,
        vitorias: 0,
        empates: 0,
        derrotas: 0,
        pontos: 0,
      });
      exibeJogadoresNaTela(listaJogadores);

      document.getElementById("nome").value = "";
      msg.innerHTML = "";
    }
  } else {
    window.time;
    msg.innerHTML = "Escreva um nome";
    setTimeout(() => {
      msg.innerHTML = "";
    }, 3000);
  }
}

function zerar() {
  for (var i = 0; i < listaJogadores.length; i++) {
    var jogador = listaJogadores[i];
    jogador.vitorias = 0;
    jogador.empates = 0;
    jogador.derrotas = 0;
    jogador.pontos = calculaPontos(jogador);
  }
  exibeJogadoresNaTela(listaJogadores);
}
