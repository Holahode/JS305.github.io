"use strict";
/* eslint-disable */

/* You need the module.exports when testing in node.  Comment it out when you send your file to the browser */
// module.exports = { ucFirst, checkSpam, truncate, getMaxSubSum, camelize, extractCurrencyValue}; //add all of your function names here that you need for the node mocha tests


function ucFirst(str) {
    let firstword = str.slice(0,1).toUpperCase();
    firstword = firstword.toUpperCase();
    return firstword + str.slice(1);
  }

  function checkSpam(str) {
    return (str.includes("ViAgRA") || str.includes("xxxxx"));
  }


  function truncate(str, maxlength) {
    const ending = "…";
    if (str.length >= maxlength) {
        return str.slice(0, maxlength - 1) + ending;
    } else {
        return str.slice(0, maxlength + 1)
    }
  }


/**
 * 
 * @param {Array} arr of numbers
 * @returns {number} the total of the maximal subarray
 
 */
function getMaxSubSum(arr) {
    let maxSum = 0;
    for (let i = 0; i < arr.length; i++) {
        let sum = 0;
        for (let j = i; j < arr.length; j++) {
            sum += arr[j];
            maxSum = Math.max(maxSum, sum);
        }
    }
    return maxSum;

}

function camelize(str) {
    let words = str.split("-");
    let result = "";
    result = words[0];
    for (let i = 1; i < words.length; i++) {
        let word = words[i];
        let capitalizedWord = word.charAt(0).toUpperCase() + word.slice(1);
        result += capitalizedWord;
    }

   return result;

}
function extractCurrencyValue(str) {
    const number = str.slice(1);
    const curValue = Number(number);
    return curValue;
}