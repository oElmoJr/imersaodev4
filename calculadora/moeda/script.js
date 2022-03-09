function converter() {
  let moedaInicial = document.getElementById("valor1").value;
  let url = `https://v6.exchangerate-api.com/v6/e21611f760275389ee84d845/latest/${moedaInicial}`;
  let dados = Array();
  fetch(url).then((res) => {
    res.json().then((data) => {
      dados = data.conversion_rates;

      let valor = parseFloat(document.getElementById("valor").value);
      let moedaFinal = document.getElementById("valor2").value;

      valorConvertido = valor * dados[moedaFinal];
      valorFinal = parseFloat(valorConvertido).toFixed(2);
      document.getElementById(
        "resultado"
      ).innerHTML = `A conversão de ${moedaInicial} para ${moedaFinal} é ${valorFinal}`;
    });
  });
}
