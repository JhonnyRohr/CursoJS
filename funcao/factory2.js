/*
Exercício
criar uma factory chamada criarProduto com os atributos 'nome' vazio, 'preco' também vazio
e o parametro 'desconto' com um valor fixo.
*/

function criarProduto(nome, preco){
    return {
        nome,
        preco,
        desconto: 0.15
    }
}

console.log(criarProduto('Caneta', 2))
console.log(criarProduto('Lapiseira', 3))