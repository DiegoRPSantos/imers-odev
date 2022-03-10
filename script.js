function Converter() {
  var valorElemento = document.getElementById("valor");
  var valor = valorElemento.value;
  var valorEmDolarNumerico = parseFloat(valor);
  var valorEmReal = valorEmDolarNumerico * 5;
  console.log(valorEmReal);
  var valorElementoConvertido = document.getElementById("valorConvertido");
  var valorConvertido = "O valor em real é R$" + valorEmReal;
  valorElementoConvertido.innerHTML = valorConvertido;
}
