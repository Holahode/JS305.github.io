"use strict";
module.exports={computeSalesCommission};
let expectedCommission = null;
function computeSalesCommission(salaried,salesAmount){
    if(salaried){
        if(salesAmount < 300){
            expectedCommission = 0;
            return expectedCommission;
        }else if(salesAmount >= 300 && salesAmount <= 500){
            expectedCommission = salesAmount * 0.01;
            return expectedCommission;
        }else
            expectedCommission = ((500 * 0.01) + ((salesAmount - 500) * 0.02));
            return expectedCommission;
    }else{
        if(salesAmount < 300){
            expectedCommission = 0;
            return expectedCommission;
        }else if(salesAmount >= 300 && salesAmount <= 500){
            expectedCommission = salesAmount * 0.02;
            return expectedCommission;
        }else{
            expectedCommission = ((500 * 0.02) + ((salesAmount - 500) * 0.03));
            return expectedCommission;
        }
    }  
}
console.log("expect   0: ", computeSalesCommission(true, 200));
console.log("expect   0: ", computeSalesCommission(false, 200));
console.log("expect   3: ", computeSalesCommission(true, 300));
console.log("expect   6: ", computeSalesCommission(false, 300));
console.log("expect  65: ", computeSalesCommission(true, 3500));
console.log("expect 100: ", computeSalesCommission(false, 3500));