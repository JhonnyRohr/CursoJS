{
    {
        {
            {
                var sera ='Será???' //VAR declaro fora de função, é visivel para todo o código
                console.log(sera)
            }
        }
    }
}

console.log(sera)

function teste(){
    var local = 123 //VAR é declarado dentro da função, é visivel apenas dentro do próprio bloco
    console.log(local)
}

teste()
console.log(local)