function fatorial(n) {
    for (let c = n - 1; c > 1; c--) {
        n = n*c
    }
    return n
}

console.log(fatorial(5))