//Closure é o espoco criado quando uma função é declarada
//Esse escopo permite a função a acessar e manipular variáveis externas à função

//Contexto léxico como exemplo

const x = 'Global'

function fora(){
    const x = 'Local'
    function dentro(){
        return x
    }
    return dentro
}

const minhaFuncao = fora()
console.log(minhaFuncao())