"use strict";

/* You need the module.exports when testing in node.  Comment it out when you send your file to the browser.
*/
// module.exports = { myMap, myFilter, myReduce }; //add all of your function names here that you need for the node mocha tests
/**
 * 
 * @param {Array} array of numbers 
 * @param {Function} function 
 * @returns {Array} array of numbers
 */
function myMap(arr, func) {
//IMPLEMENTATION NEEDED

return arr.map(func);
}
/**
 * 
 * @param {Array} array of numbers 
 * @param {Function} function
 * @returns {Array} array of numbers
 */
function myFilter(arr, func) {
//IMPLEMENTATION NEEDED
return arr.filter(func);
}
/**
 * 
 * @param {Array} array of numbers 
 * @param {Function} function 
 * @param {number} initialValue 
 * @returns {number} single value
 */
function myReduce(arr, func, initialValue) {
    //IMPLEMENTATION NEEDED
    return arr.reduce(func,initialValue);
    }