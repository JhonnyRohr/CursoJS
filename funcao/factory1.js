const produto1 = {
    nome: '...',
    preco: 45
}

const produto2 = {
    nome: '...',
    preco: 1234
}

const produto3 = {
    nome: '...',
    preco: 0000
}

//Para que não seja copiado diversas vezes o mesmo "código"
//Podemos utilizar uma função

//Factory simples
function criarPessoa(){
    return {
        nome: 'Ana',
        sobrenome: 'Silva'
    }
}

console.log(criarPessoa())