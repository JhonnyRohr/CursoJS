const notas = [6.7,,, 7.4, 9.8, 8.1, 7.7]

for(indice in notas){
    console.log(indice, notas[indice])
}

const pessoa ={
    nome: 'Ana',
    sobrenome:'Silva',
    idade: 19,
    peso: 64
}

for(let atributo in pessoa){
    console.log(`${atributo} = ${pessoa[atributo]}`)
}