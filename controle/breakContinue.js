const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

for (x in nums){
    if (x == 5){
        break // para o laço mais próximo dele, não funciona sobre o IF e pula para o FOR parando
    }
    console.log(`${x} = ${nums[x]}`)
}

for (y in nums){
    if (y == 5){
        continue // para o laço mais próximo dele, não funciona sobre o IF e pula para o FOR dando continuidade
    }
    console.log(`${y} = ${nums[y]}`)
}

externo: for (a in nums){
    for (b in nums){
        if(a == 2 && b == 3) break externo // ativa o BREAK no laço especifico no qual foi rotulado de EXTERNO
        console.log(`Par = ${a}, ${b}`)
    }
}

console.log('Fim!')