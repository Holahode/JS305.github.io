"use strict";
module.exports={calcDownPayment};
let downPayment = 0;
/**
 * @param {number} total cost of the house in dollar
 * @returns {number} the amount in dollar for the dawnpaiment
 */
function calcDownPayment(costOfHouse){
    if(costOfHouse > 0 && costOfHouse <= 50000){
    downPayment=costOfHouse*0.05;
    }
    else if( costOfHouse>50000 && costOfHouse<=100000){
    downPayment= (2500 + ((costOfHouse - 50000)*0.1));
    }
    else if( costOfHouse>100000 && costOfHouse<=200000){
    downPayment= (7500 + ((costOfHouse - 100000)*0.15));
    }
    else{
    downPayment= (20000 + ((costOfHouse - 200000)*0.1));
    }
    return downPayment;
}
console.log("expect 2000: ", calcDownPayment(40000));
console.log("expect 2500: ", calcDownPayment(50000));
console.log("expect 7500: ", calcDownPayment(100000));
console.log("expect 25000: ", calcDownPayment(250000));