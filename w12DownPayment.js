"use strict"
/*  Input: cost of the House
    Output: down payment for the loan
    Process:if cost less than 50k, down payment = cost * 0.05
            if cost is in between 50k and 100k, down payment = (1000 + (cost - 500000) * 0.1)
            if cost is in between 100k and 200k, down payment = (2000 + (cost - 100000) * 0.15)
            else down payment = (5000 + (cost - 200000) * 0.1)
*/
//let costOfHouse=null;
let downPayment = 0;
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