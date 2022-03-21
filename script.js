let aluraflix = {
  nome: "Aluraflix",
  img: "assets/img/aluraflix img.png",
  descricao: "Usando uma API para listar os filmes.",
  githublink: "https://github.com/oElmoJr/imersaodev4/tree/main/aluraflix",
  gitpagelink: "https://oelmojr.github.io/imersaodev4/aluraflix/",
};

let mentalista = {
  nome: "Mentalista",
  img: "assets/img/mentalista img.png",
  descricao: "Jogo de adivinhação de número entre 0 a 10.",
  githublink: "https://github.com/oElmoJr/imersaodev4/tree/main/mentalista",
  gitpagelink: "https://oelmojr.github.io/imersaodev4/mentalista/",
};

let calculadora = {
  nome: "Calculadora",
  img: "assets/img/Calculadora img.png",
  descricao: "Calculadora de média, temperatura, moeda e distância.",
  githublink: "https://github.com/oElmoJr/imersaodev4/tree/main/calculadora",
  gitpagelink: "https://oelmojr.github.io/imersaodev4/calculadora/",
};

let supertrunfo = {
  nome: "Super Trunfo",
  img: "assets/img/SUPER TRUNFO img.png",
  descricao: "Jogo de cartas, baseado em steven universe.",
  githublink: "https://github.com/oElmoJr/imersaodev4/tree/main/super-trunfo",
  gitpagelink: "https://oelmojr.github.io/imersaodev4/super-trunfo/",
};

let tabela = {
  nome: "Tabela de Classificação",
  img: "assets/img/tabela img.png",
  descricao: "Uma tabela de pontuação.",
  githublink: "https://github.com/oElmoJr/imersaodev4/tree/main/tabela",
  gitpagelink: "https://oelmojr.github.io/imersaodev4/tabela/",
};

let projects = [calculadora, mentalista, aluraflix, tabela, supertrunfo];

function exibeprojetos() {
  let main = document.getElementById("main");

  let projetos = "";

  projects.forEach((e) => {
    projetos += `
    <div class="project">
      <img class="project-img" src="${e.img}" alt="" />
      <div class="project-description">
        <h2>${e.nome}</h2>
        <p>${e.descricao}</p>
          <div class="links">
            <a target="_blank" href="${e.gitpagelink}">Pagina</a>
            <a target="_blank" href="${e.githublink}">Github</a>
          </div>
      </div>
    </div>
    `;
  });

  main.innerHTML = projetos;
  console.log(projetos);
}

exibeprojetos();
