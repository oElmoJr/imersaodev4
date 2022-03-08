function calcular() {
  nota1 = parseInt(document.getElementById("valor1").value);
  nota2 = parseInt(document.getElementById("valor2").value);
  nota3 = parseInt(document.getElementById("valor3").value);
  nota4 = parseInt(document.getElementById("valor4").value);

  let media = (nota1 + nota2 + nota3 + nota4) / 4;

  mediaFinal = media.toFixed(1);

  document.getElementById(
    "resultado"
  ).innerHTML = `Sua média é <span class="verde">${mediaFinal}</span>`;

  if (mediaFinal >= 6) {
    document.getElementById(
      "passou"
    ).innerHTML = `<span class="verde">Parabens!!! sua média é maior que 6, VOCÊ FOI APROVADO</span>`;
  } else {
    document.getElementById(
      "passou"
    ).innerHTML = `<span class="vermelho">Que pena :(, sua média é menor que 6, VOCÊ NÃO FOI APROVADO</span>`;
  }
}
