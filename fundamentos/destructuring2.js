const [a] = [10] //o destructuring é diferente, quando usado com objeto utiliza-se {}, quando usado com o array é utilizado []
console.log(a)

const [n1, ,n3, ,n5, n6=0] = [10,7,9,8] //n5 já esta fora do array por isso é undefined
console.log(n1, n3, n5, n6)

const [, [, nota]] = [[, 8, 8], [9, 6, 8]]
console.log(nota)