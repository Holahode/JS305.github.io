/* eslint-disable require-jsdoc */
"use strict"

/* You need the module.exports when testing in node.  Comment it out when you send your file to the browser */
//  module.exports = { groupById, unique, filterRangeInPlace, filterRange, Calculator }; //add all of your function names here that you need for the node mocha tests


function filterRange(arr, a, b) {
    let fResult = arr.filter(item => {if (item >= 1 && item <=4) return item;});
    return fResult;
  }

 
  function filterRangeInPlace(arr, a, b) {
    let fResult = filterRange(arr, a, b);
    if(fResult){ return fResult;
    }
    return arr.splice();
  }

  function Calculator() {
    this.methods = {
      ["-"]: (a, b) => a - b,
      ["+"]: (a, b) => a + b
  };

  this.calculate = function (str) {
      let char = str.split(" ");
      let a = +char[0];
      let operator = char[1];
      let b = +char[2];

      if (!this.methods[operator]) {
          return NaN;
      }
      return this.methods[operator](a, b);
  };

  this.addMethod = function (prop, func) {
      this.methods[prop] = func;

  };
  }

  function unique(arr) {
    let newArray = arr.filter((item, index, arr) => {
      return arr.indexOf(item) === index;
  });

  return newArray;

}


  function groupById(array) {
    let gId = array.reduce((user, objUser) => {
      user[objUser.id] = objUser; return user;}, 
      {});
  return gId;
  }