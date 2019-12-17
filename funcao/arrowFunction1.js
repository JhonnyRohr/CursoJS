let dobro = function(a){
    return 2*a
}

dobro = (a) => {
    return 2*a
}

dobro = a => 2*a // Na função Arrow o return é automático 
console.log(dobro(Math.PI))

let ola = function(){
    return 'Olá'
}

ola = () => 'Olá'
ola = _ => 'Olá' // possui um parametro