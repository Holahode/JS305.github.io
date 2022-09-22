"use strict";

/* You need the module.exports when testing in node.  Comment it out when you send your file to the browser 
*/
//module.exports = {copyArray, concat, findMin, combineObjs }; //add all of your function names here that you need for the node mocha tests



function copyArray(arr){
    const clone = [...arr];
    return clone;
}

function concat(arr1, arr2){
    const newArr = arr1.concat(arr2);
    return newArr;
}

function findMin(...arr) {
    let arr3 = Math.min(...arr);
    return arr3;
}

function combineObjs(obj1, obj2){
    let obj3 = {...obj1, ...obj2
    };
    return obj3;
}