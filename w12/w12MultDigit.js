"use strict";
module.exports={multDigits};
/**
 * 
 * @param {number} number expected as an input 
 * @returns {number} the product of each digits of the number
 */
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
console.log(multDigits(1234));
console.log(multDigits(102));
console.log(multDigits(8));