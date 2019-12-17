// Novo recurso do ES2105

const pessoa = {
    nome: 'Ana',
    idade: 5,
    endereco: {
        logadouro: 'Rua ABC',
        numero:1000
    }
}

const {nome, idade} = pessoa
console.log(nome, idade)

const {nome:n, idade:i} = pessoa
console.log(n,i)

const {sobrenome, altura = true} = pessoa //retorna undefined por que não existe o atributo no objeto
console.log(sobrenome, altura)

const {endereco:{logadouro, numero}} = pessoa //puxando atributo dentro de objeto criado em outro objeto
console.log(logadouro, numero)

const {conta:{ag, num}} = pessoa //apresenta erro pois o objeto conta não existe
console.log(ag, num)