const soma = function (x, y) {
    return x + y
}

const imprimirResultado = function (a, b, operacao = soma){ // quando definido a função 'operacao' utiliza a 'soma' como default
    console.log(operacao(a, b))
}

imprimirResultado(3, 4)
imprimirResultado(3, 4, soma) // não faz diferença pois o 'soma' é default
imprimirResultado(3, 4, function(x, y){
    return x - y
}) //neste caso é definido o terceiro parametro, ignorando assim o default
imprimirResultado(3, 4, (x, y) => x * y)

const pessoa = {
    falar: function() {
        console.log('Oi')
    }
}

pessoa.falar()