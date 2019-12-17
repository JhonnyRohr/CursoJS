//Armazenando uma função em uma variável
const imprimirSoma = function (a,b){
    console.log(a + b)
}

imprimirSoma(2, 3)

//armazenando uma função Arrow em uma variável
const soma = (a, b) =>{
    return a + b
}

console.log(soma(4, 5))

// retorno implícito
const subtracao = (a, b) => a - b
console.log(subtracao(3, 6))

const imprimir2 = a => console.log(a)
imprimir2('Legal!!!')