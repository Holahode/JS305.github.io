"use strict";
 const assert = require("assert");
 const sumDig = require("../w12SumDigit.js");
 const sumDigits=sumDig.sumDigits;
 const prod = require("../w12MultDigit.js");
 const multDigits=prod.multDigits;
 const celsToFhat = require("../w12convertToFahrenheit.js");
 const convertFahrenheit=celsToFhat.convertFahrenheit;
 const dnPayt = require("../w12DownPayment.js");
 const calcDownPayment=dnPayt.calcDownPayment;
   describe("tests sumDigits", function(){
    it("sumup all the digits to get 24", function(){
    assert.strictEqual(sumDigits(1234), 10);
    });
    it("sumup all the digits to get 0", function(){
    assert.strictEqual(sumDigits(102), 3);
    });
    it("sumup all the digits to get 8", function(){
    assert.strictEqual(sumDigits(8), 8);
    });
    });
   describe("tests multDigits", function(){
    it("multiplys all the digits to get 24", function(){
    assert.strictEqual(multDigits(1234), 24);
    });
    it("multiplys all the digits to get 0", function(){
    assert.strictEqual(multDigits(102), 0);
    });
    it("multiplys all the digits to get 8", function(){
    assert.strictEqual(multDigits(8), 8);
    });
    });
   describe("tests convertFahrenheit", function () {
    it("converts 32 degree F to 0 degree C", function () {
    assert.equal(convertFahrenheit(32), 0);
    });
    it("converts 100 degree F to 37.7778 degree C", function () {
    assert.equal(convertFahrenheit(100), 37.7778);
    });
    it("converts 212 degree F to 0 100 C", function () {
    assert.equal(convertFahrenheit(212), 100);
    });
    });
   describe("tests calcDownPayment", function(){
    it("calculate the down payment to get 2000", function(){
    assert.equal(calcDownPayment(40000), 2000);
    });
    it("calculate the down payment to get 2500", function(){
    assert.equal(calcDownPayment(50000), 2500);
    });
    it("calculate the down payment to get 7500", function(){
    assert.equal(calcDownPayment(100000), 7500);
    });
    });