"use strict";

/* You need the module.exports when testing in node.  Comment it out when you send your file to the browser */
// module.exports = { Accumulator, Calculator }; //add all of your function names here that you need for the node mocha tests

/**
 * 
 * @returns {Accumulator} constructor function
 */
function Accumulator(initialValue, increment){
   this.currentValue = initialValue;
   this.increment = increment;

   this.accumulate = function(){
       this.currentValue = this.currentValue + this.increment;
       return this.currentValue;
   },

   this.report = function(){
       return this.currentValue;
   }
}

/**
 * @returns {Calculator} this is a constructor function
 */
 function Calculator() {
   this.setValues = function(val1,val2){
      this.val1 = val1;
      this.val2 = val2;
   },

  this.sum = function(){
      return this.val1 + this.val2;    
  },

  this.subtract = function(){
   return this.val1 - this.val2;    
},

  this.multiply = function(){
      return this.val1 * this.val2;
  };
   }