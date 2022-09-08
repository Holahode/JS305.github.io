"use strict";
const assert = require("assert");
/**
 * 
 * @param {boolean} returns true if the person is salaried.
 * @param {number} the amount in dollar for gross sales volume
 * @returns {number} the amount of commission in dollar
 */
function computeSalesCommission(salaried,salesAmount){
let expectedCommission = null;
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

describe("test of ComputSalesCommission", function(){
    it("tests salaried and 200 sales", function(){
    assert.strictEqual(computeSalesCommission(true, 200), 0);
    });
    it("tests not salaried and 200 sales", function(){
    assert.strictEqual(computeSalesCommission(false, 200), 0);
    });
    it("tests salaried and 300 sales", function(){
    assert.strictEqual(computeSalesCommission(true, 300), 3);
    });
    it("tests not salaried and 300 sales", function(){
    assert.strictEqual(computeSalesCommission(false, 300), 6);
    });
    it("tests salaried and 3500 sales", function(){
    assert.strictEqual(computeSalesCommission(true, 3500), 65);
    });
    it("tests not salaried and 3500 sales", function(){
    assert.strictEqual(computeSalesCommission(false, 3500), 100);
    });
   });