//função com valor padão de parametro
function exponencial(base, exponencial = 2) {
    const exp = base ** expoente;
    return console.log(exp);
}

//inovar as funções
saudacao();
soma(10,5);
multiplicar();
exponencial(3);
exponencial(3,3);

console.log(dividir(10,2));

//funcao de callback
function inicializarAplicacao() {
    saudacao();
    soma(10,5);
    multiplicar();
    exponencial(3);
    exponencial(3,3);
}

inicializarAplicacao();