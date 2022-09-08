"use strict";
/*  Input : initial amount, annual interest rate, number of years to compund
    Output: monthly compound interest
    Process: monthly compounded Interest = (inital amount * anual interest Rate * years to compund) / 12 months
*/
function compoundInterest(initialAmount, interestRate, numberOfYears){
    const monthlyRate = (interestRate/12)/100;
    const numberOfPayments= numberOfYears * 12;
    let balance = initialAmount;

    for(let i = 1; i <= numberOfPayments; i++){
        balance = balance + (balance * monthlyRate);
    }
    return balance.toFixed(2);
}

console.log("expect 110.47    : ", compoundInterest(100,10,1) );
console.log("expected 16470.09: ", compoundInterest(10000,5,10));