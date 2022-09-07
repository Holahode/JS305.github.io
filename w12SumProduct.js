"use strict"

// Addition
function sumDigits(number){
    let sum = 0;
while(number > 0){
    sum += number % 10;
    number = Math.floor(number/10);
}
    return sum;
}

// Multiplication
function multDigits(number){
    let product = 1;
    let mod = 0;
    while(number > 1){
        mod = number % 10;
        product = product * mod;
        number = Math.floor(number/10);
    }
        return product;
}

console.log(sumDigits(1234));
console.log(sumDigits(102));
console.log(sumDigits(8));
console.log(multDigits(1234));
console.log(multDigits(102));
console.log(multDigits(8));