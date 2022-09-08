"use strict";
module.exports={sumDigits};
/**
 * 
 * @param {number} number expected as an input
 * @returns {number} the summation of each digits of the number
 */
function sumDigits(number){
    let sum = 0;
while(number > 0){
    sum += number % 10;
    number = Math.floor(number/10);
}
    return sum;
}
console.log(sumDigits(1234));
console.log(sumDigits(102));
console.log(sumDigits(8));