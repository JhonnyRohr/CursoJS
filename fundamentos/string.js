const escola = "Cod3r"
console.log(escola.charAt(4)) //busca dentro da string o valor do 4° caracter
console.log(escola.charAt(5)) // não apresenta erro, e não traz o valor
console.log(escola.charCodeAt(3)) //puxa o valor do caracter na tabela ASC
console.log(escola.indexOf('r')) //informa o valor a ser pesquisado na constante escola

console.log(escola.substring(1)) //busca a informação a partir do indice 1 = od3r
console.log(escola.substring(0, 3)) //busca a indomação a partir do indice 0 e para congela no indice 3 = Cod

console.log('Escola '.concat(escola).concat("!")) //agrupando informações
console.log('Escola ' + escola + '!')
//Aula 20