"use strict";
/* You need the module.exports when testing in node.  Comment it out when you send your file to the browser
*/ 
module.exports = {double, times100, myMap }; //add all of your function names here that you need for the node mocha tests
/**
 * 
 * @param {number} num is an inputed number
 * @returns {number} double of the inputed number
 */
function double(num){
    return 2*num;
}
/**
 * 
 * @param {number} num is an inputed number 
 * @returns {number} 100* of the inputed number
 */
 function times100(num){
    return num * 100;
 }
/**
 * 
 * @param {Array} arr is array of numbers
 * @param {Function} func is a helper function
 * @returns {Array} array of numbers
 */
// function myMap(arr, func){
//     let newArr = [];
//     for (let each of arr){
//        let value = func(each);
//         newArr.push(value);
//     }
//     return newArr;
// }

/**
 * 
 * @param {Array} arr is array of numbers
 * @param {Function} func is a helper function
 * @returns {Array} array of numbers
 */
//  function myMap(arr, triple = function (num) {
//     return num * 3;}) {
//       let newArr = [];
//       for (let each of arr) {
//       newArr.push(triple(each));
//       }
//       return newArr;
//       }
/**
 * 
 * @param {Array} arr is array of numbers
 * @param {Function} func is a helper function
 * @returns {Array} array of numbers
 */
      function myMap(arr, triple =  (num) => {
        return num * 3;}) {
          let newArr = [];
          for (let each of arr) {
          newArr.push(triple(each));
          }
          return newArr;
          }

 const arr = [-10, 0, 10, 20];
// console.log(double(10));
// console.log(double(0));
// console.log(double(-10));

// console.log(times100(10));
// console.log(times100(0));
// console.log(times100(-10));

// console.log(myMap(arr, double));
console.log(myMap(arr));