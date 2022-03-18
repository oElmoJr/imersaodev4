var carta1 = {
  nome: "perola",
  img: "https://i.gifer.com/6vOr.gif",
  atributos: {
    ataque: 1900,
    defesa: 700,
    magia: 1000,
  },
};

var carta2 = {
  nome: "ametista",
  img: "https://thumbs.gfycat.com/WarmAcademicCuckoo-size_restricted.gif",
  atributos: {
    ataque: 1800,
    defesa: 1000,
    magia: 1700,
  },
};

var carta3 = {
  nome: "garnet",
  img: "http://pa1.narvii.com/6149/c5f1d2e006803c4cfe254edda0c22721e3e918af_00.gif",
  atributos: {
    ataque: 2000,
    defesa: 2000,
    magia: 1000,
  },
};

var carta4 = {
  nome: "steven",
  img: "https://thumbs.gfycat.com/DistantSolidIggypops-max-1mb.gif",
  atributos: {
    ataque: 1000,
    defesa: 3000,
    magia: 3000,
  },
};

var carta5 = {
  nome: "Diamante Azul",
  img: "https://i.pinimg.com/originals/10/33/89/103389acc9a235cf9dd1cc462013afd7.gif",
  atributos: {
    ataque: 3000,
    defesa: 3000,
    magia: 5000,
  },
};

var carta6 = {
  nome: "Diamente Amarelo",
  img: "https://c.tenor.com/ahPV0wPgi8sAAAAC/yellow-diamond-angry.gif",
  atributos: {
    ataque: 4000,
    defesa: 3000,
    magia: 5000,
  },
};

var carta7 = {
  nome: "Diamente Branco",
  img: "http://pa1.narvii.com/7250/12aa531339cc2e29e920d1097440ee0ff0b38047r1-320-180_00.gif",
  atributos: {
    ataque: 5000,
    defesa: 5000,
    magia: 6000,
  },
};
var carta8 = {
  nome: "Obisidiana",
  img: "https://c.tenor.com/TQFqeTHoLcUAAAAC/steven-universe-su.gif",
  atributos: {
    ataque: 6000,
    defesa: 5000,
    magia: 4000,
  },
};
var carta9 = {
  nome: "Lapis Lazuli",
  img: "https://i.pinimg.com/originals/b0/7f/8e/b07f8e54a376d70c077220f0eee4f01d.gif",
  atributos: {
    ataque: 3000,
    defesa: 2000,
    magia: 5000,
  },
};
var carta10 = {
  nome: "Espinela",
  img: "https://64.media.tumblr.com/cdf27560f79648b0a9ecc86b3637dee7/tumblr_pxklheUlp51vnokczo1_540.gifv",
  atributos: {
    ataque: 3000,
    defesa: 3000,
    magia: 2000,
  },
};
var carta11 = {
  nome: "Peridot",
  img: "http://pa1.narvii.com/6326/b1695852c138da4a55dce6799b7b5588cc66f690_00.gif",
  atributos: {
    ataque: 1000,
    defesa: 3000,
    magia: 1000,
  },
};
var carta12 = {
  nome: "Connie",
  img: "https://media1.giphy.com/media/VJlfkjJRMFpE53aylw/giphy.gif",
  atributos: {
    ataque: 1500,
    defesa: 1000,
    magia: 0,
  },
};
var carta13 = {
  nome: "Jasper",
  img: "https://i.kym-cdn.com/photos/images/newsfeed/000/936/179/3fc.gif",
  atributos: {
    ataque: 2500,
    defesa: 3000,
    magia: 3000,
  },
};

var aud = document.getElementById("myAudio");
aud.autoplay = true;
aud.load();
aud.volume = 0.02;

var cartas = [
  carta1,
  carta2,
  carta3,
  carta4,
  carta5,
  carta6,
  carta7,
  carta8,
  carta9,
  carta10,
  carta11,
  carta12,
  carta13,
];
var selecionado = false;

var cartaMaquina;
var cartaPlayer;

function sortearCarta() {
  numeroCartaMaquina = parseInt(Math.random() * cartas.length);
  cartaMaquina = cartas[numeroCartaMaquina];

  numeroCartaPlayer = parseInt(Math.random() * cartas.length);

  while (numeroCartaMaquina == numeroCartaPlayer) {
    numeroCartaPlayer = parseInt(Math.random() * cartas.length);
  }

  cartaPlayer = cartas[numeroCartaPlayer];

  document.getElementById("middle-container").innerHTML = `
  
  <div id="resultado"></div>
  <div id="button" >
  <h2>Escolha o seu atributo</h2>
  <button
    class="button-jogar"
    type="button"
    id="btnJogar"
    onclick="jogar()"
    disabled="false"
  >
    Jogar
  </button>
  </div>`;

  document.getElementById("btnJogar").disabled = false;

  exibirCarta();
}

function obtemAtributos() {
  var radioSelecionado = document.getElementsByName("atributo");

  for (var i = 0; i < radioSelecionado.length; i++) {
    if (radioSelecionado[i].checked == true) {
      selecionado = true;
      return radioSelecionado[i].value;
    }
  }
}

function jogarNovamente(params) {
  document.getElementById("button").innerHTML = `
  <button onclick="sortearCarta()" id="btnSortear">
        Sortear carta novamente
      </button>
  `;
}

function jogar() {
  selecionado = false;

  var atributoSelecionado = obtemAtributos();
  var divResultado = document.getElementById("resultado");

  var valorCartaPlayer = cartaPlayer.atributos[atributoSelecionado];
  var valorCartaMaquina = cartaMaquina.atributos[atributoSelecionado];

  if (selecionado == true) {
    if (valorCartaPlayer > valorCartaMaquina) {
      divResultado.innerHTML =
        "<p class='resultado-final green' >Você VENCEU!!!</p>";
      document.getElementById("btnJogar").disabled = true;
      exibirCartaMaquina();
      jogarNovamente();
      exibirAtributosCartaMaquina();
    } else if (valorCartaPlayer < valorCartaMaquina) {
      divResultado.innerHTML =
        "<p class='resultado-final orange' >Você PERDEU ;-;</p>";
      document.getElementById("btnJogar").disabled = true;
      exibirCartaMaquina();
      jogarNovamente();
      exibirAtributosCartaMaquina();
    } else {
      divResultado.innerHTML = "<p class='resultado-final blue' >EMPATOU</p>";
      document.getElementById("btnJogar").disabled = true;
      exibirCartaMaquina();
      jogarNovamente();
      exibirAtributosCartaMaquina();
    }
  } else {
    divResultado.innerHTML = "<p class='msg red' >Selecione um atributo</p>";
    setTimeout(() => {
      divResultado.innerHTML = "";
    }, 900);
  }
}

function exibirCarta() {
  exibirCartaJogador();
  exibirCartaMaquina();
}

function exibirCartaJogador() {
  var divCartaPlayer = document.getElementById("carta-jogador");
  divCartaPlayer.innerHTML = "";
  divCartaPlayer.style.backgroundImage = `url(${cartaPlayer.img})`;

  var moldura =
    '<img src="https://www.alura.com.br/assets/img/imersoes/dev-2021/card-super-trunfo-transparent.png" style=" width: inherit; height: inherit; position: absolute;">';
  var nome = `<p class="carta-subtitle" >${cartaPlayer.nome}</p>`;
  var tagHTML = `<div id='opcoes' class='carta-status' >`;
  var opcoesTexto = "";
  for (var atributo in cartaPlayer.atributos) {
    opcoesTexto += `
    <div>
    <input type='radio' name='atributo' value='${atributo}'>
    ${atributo} ${cartaPlayer.atributos[atributo]}
    </div>
    `;
  }

  divCartaPlayer.innerHTML = moldura + nome + tagHTML + opcoesTexto + "</div>";
}

function exibirCartaMaquina() {
  var divCartaMaquina = document.getElementById("carta-maquina");
  divCartaMaquina.innerHTML = "";
  divCartaMaquina.style.backgroundImage = `url(${cartaMaquina.img})`;

  var moldura =
    '<img src="https://www.alura.com.br/assets/img/imersoes/dev-2021/card-super-trunfo-transparent.png" style=" width: inherit; height: inherit; position: absolute;">';

  var nome = `<p class="carta-subtitle" >${cartaMaquina.nome}</p>`;
  var tagHTML = `<div id='opcoes' class='carta-status' >`;
  var opcoesTexto = "";
  // for (var atributo in cartaMaquina.atributos) {
  //   opcoesTexto += `
  //     <p type='radio' name='atributo' value='${atributo}'>
  //     ${atributo} ${cartaMaquina.atributos[atributo]}</p>
  //   `;
  // }
  divCartaMaquina.innerHTML = moldura + nome + tagHTML + opcoesTexto + "</div>";
}

function exibirAtributosCartaMaquina() {
  var divCartaMaquina = document.getElementById("carta-maquina");
  divCartaMaquina.innerHTML = "";
  divCartaMaquina.style.backgroundImage = `url(${cartaMaquina.img})`;

  var moldura =
    '<img src="https://www.alura.com.br/assets/img/imersoes/dev-2021/card-super-trunfo-transparent.png" style=" width: inherit; height: inherit; position: absolute;">';

  var nome = `<p class="carta-subtitle" >${cartaMaquina.nome}</p>`;
  var tagHTML = `<div id='opcoes' class='carta-status' >`;
  var opcoesTexto = "";
  for (var atributo in cartaMaquina.atributos) {
    opcoesTexto += `
      <p type='radio' name='atributo' value='${atributo}'>
      ${atributo} ${cartaMaquina.atributos[atributo]}</p>
    `;
  }
  divCartaMaquina.innerHTML = moldura + nome + tagHTML + opcoesTexto + "</div>";
}
