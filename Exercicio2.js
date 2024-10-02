function verificaParOuImpar(numero) {
    if (numero % 2 === 0) {
        return "Par";
    } else {
        return "Ímpar";
    }
}


let resultado = verificaParOuImpar(7);
console.log(resultado); // Saída: Ímpar
