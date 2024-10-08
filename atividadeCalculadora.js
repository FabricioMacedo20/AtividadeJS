function calculadora(a, b, operacao) {
    if (operacao === "soma") {
        return a + b;
    } else if (operacao === "subtracao") {
        return a - b;
    } else if (operacao === "multiplicacao") {
        return a * b;
    } else if (operacao === "divisao") {
        if (b === 0) {
            return "Erro: divisão por zero";
        }
        return a / b;
    } else {
        return "Operação inválida";
    }
}

console.log(calculadora(10, 5, "soma"));   
console.log(calculadora(10, 5, "subtracao"));   
console.log(calculadora(10, 5, "multiplicacao"));
console.log(calculadora(10, 5, "divisao"));     
console.log(calculadora(10, 0, "divisao"));     
console.log(calculadora(10, 5, "modulo"));       
