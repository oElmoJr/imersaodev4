function converter() {
  valor = document.getElementById("valor").value;
  dis1 = document.getElementById("valor1").value;
  dis2 = document.getElementById("valor2").value;
  let valorFinal;

  console.log(valor);
  console.log(dis1);
  console.log(dis2);

  if (dis1 == "kl") {
    if (dis2 == "al") {
      valorFinal = parseInt(valor) / 9.461e12;
      document.getElementById(
        "resultado"
      ).innerHTML = `A temperatura convertida de ${dis1} para ${dis2} é ${valorFinal}`;
    } else if (dis2 == "m") {
      valorFinal = parseInt(valor) * 1000;
      document.getElementById(
        "resultado"
      ).innerHTML = `A temperatura convertida de ${dis1} para ${dis2} é ${valorFinal}`;
    }
  } else if (dis1 == "al") {
    if (dis2 == "kl") {
      valorFinal = parseInt(valor) * 9.461e12;
      document.getElementById(
        "resultado"
      ).innerHTML = `A temperatura convertida de ${dis1} para ${dis2} é ${valorFinal}`;
    } else if (dis2 == "m") {
      valorFinal = (parseInt(valor) * 9.461e15).toFixed(3);
      document.getElementById(
        "resultado"
      ).innerHTML = `A temperatura convertida de ${dis1} para ${dis2} é ${valorFinal}`;
    }
  } else if (dis1 == "m") {
    if (dis2 == "kl") {
      valorFinal = parseInt(valor) / 1000;
      document.getElementById(
        "resultado"
      ).innerHTML = `A temperatura convertida de ${dis1} para ${dis2} é ${valorFinal}`;
    } else if (dis2 == "al") {
      valorFinal = parseInt(valor) * 9.461e15;
      document.getElementById(
        "resultado"
      ).innerHTML = `A temperatura convertida de ${dis1} para ${dis2} é ${valorFinal}`;
    }
  }
}
