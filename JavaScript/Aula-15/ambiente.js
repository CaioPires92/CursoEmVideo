let num = [5, 8, 2, 9, 3]

num.sort()
/*
num.push(1)

console.log(num)
console.log(`O vetor tem ${num.length} posições`)
console.log(`O primeiro valor do vetor é ${num[0]}`)

for (i = 0; i < num.length; i++) {
    console.log(`A posição ${i} tem o valor ${num[i]} do vetor.`)
}

 for (let pos in num) {
    console.log(`A posição ${pos} tem o valor ${num[pos]} do vetor.`)
}
*/

//console.log(`O numero procurado esta na posição ${num.lastIndexOf(10)} do vetor`) 

let x = num.lastIndexOf(5)
if (x == -1) {
    console.log(`O numero procurado nao foi encontrado`)
} else {
    console.log(`O numero procurado esta na posição ${x} do vetor!`)
}

