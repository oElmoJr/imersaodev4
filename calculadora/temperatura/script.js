function converter() {
  valor = document.getElementById("valor").value;
  temp1 = document.getElementById("valor1").value;
  temp2 = document.getElementById("valor2").value;
  let valorFinal;

  console.log(valor);
  console.log(temp1);
  console.log(temp2);

  if (temp1 == "Celcius") {
    if (temp2 == "Farenheit") {
      valorFinal = (parseInt(valor) * 9) / 5 + 32;
      document.getElementById(
        "resultado"
      ).innerHTML = `A temperatura convertida de ${temp1} para ${temp2} é ${valorFinal}`;
    } else if (temp2 == "Kelvin") {
      valorFinal = parseInt(valor) + 273.15;
      document.getElementById(
        "resultado"
      ).innerHTML = `A temperatura convertida de ${temp1} para ${temp2} é ${valorFinal}`;
    }
  } else if (temp1 == "Farenheit") {
    if (temp2 == "Celcius") {
      valorFinal = ((parseInt(valor) - 32) * 5) / 9;
      document.getElementById(
        "resultado"
      ).innerHTML = `A temperatura convertida de ${temp1} para ${temp2} é ${valorFinal}`;
    } else if (temp2 == "Kelvin") {
      valorFinal = (((parseInt(valor) - 32) * 5) / 9 + 273.15).toFixed(3);
      document.getElementById(
        "resultado"
      ).innerHTML = `A temperatura convertida de ${temp1} para ${temp2} é ${valorFinal}`;
    }
  } else if (temp1 == "Kelvin") {
    if (temp2 == "Celcius") {
      valorFinal = parseInt(valor) - 273.15;
      document.getElementById(
        "resultado"
      ).innerHTML = `A temperatura convertida de ${temp1} para ${temp2} é ${valorFinal}`;
    } else if (temp2 == "Farenheit") {
      valorFinal = ((parseInt(valor) - 273.15) * 9) / 5 + 32;
      document.getElementById(
        "resultado"
      ).innerHTML = `A temperatura convertida de ${temp1} para ${temp2} é ${valorFinal}`;
    }
  }
}
