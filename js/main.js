function digits(n){
    return n.toString().split('').reverse().map(n => Number(n));
}

console.log(digits(1234))