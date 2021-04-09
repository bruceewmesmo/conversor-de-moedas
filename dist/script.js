var valorEmDolar = parseFloat(prompt("Qual o valor em dolar que você quer converter?"))

var valorEmReal = (valorEmDolar * 5.50).toFixed(2)

alert("Seus U$ " + 
      valorEmDolar +
      " valem R$ " +
      valorEmReal)