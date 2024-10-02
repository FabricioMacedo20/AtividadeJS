let numero = prompt("Insira um número:");
numero = Number(numero);

if (numero > 0) {
    alert("Número positivo");
} else if (numero < 0) {
    alert("Número negativo");
} else {
    alert("Zero");
}