let num1 = 1
let num2 = 2

num1++
console.log(num1)
--num1
console.log(num1)

console.log(++num1 === num2--) //num2-- só é encrementado depois de comparado, pois tem prescedente menor que o ++num1 e ===
console.log(num1 === num2)