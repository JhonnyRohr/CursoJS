const notas = [7.7, 6.5, 5.2, 8.9, 3.6, 7.1, 9.0]

//Filtrando sem CallBack
const notasBaixas1 = []
for(let i in notas){
    if (notas[i] < 7){
        notasBaixas1.push(notas[i]) //push coloca as notas no array notasBaixas1 de acordo com a lógica"if(notas[i]<7"
    }
}

console.log(notasBaixas1)

//Filtrando com CallBack
const notasBaixas2 = notas.filter(function (nota){ //filter faz com que passe por todos o indices do array
    return nota < 7
})

console.log(notasBaixas2)

//Filtrando utilizando Função e Arrow

const notasMenorQue7 = nota => nota < 7
const notasBaixas3 = notas.filter(notasMenorQue7)
console.log(notasBaixas3)