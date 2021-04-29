/* function parimp(num) {
    if (num % 2 == 0) {
        return console.log(`O numero ${num} é par!`)
    } else {
        return console.log(`O numero ${num} é impar!`)
    }
}

parimp(11) */


function parimp(num) {
    if (num % 2 == 0) {
        return 'par'
    } else {
        return 'impar'
    }
}

console.log(parimp(10))