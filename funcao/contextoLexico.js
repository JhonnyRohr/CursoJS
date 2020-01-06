const valor = 'Global'

function minhaFuncao(){
    console.log(valor)
}

function exec(){
    const valor = 'Local'
    minhaFuncao() //A função leva dentro dela a informações de quando foi criado, sendo assim carregando o 'valor=Global'
}

exec()