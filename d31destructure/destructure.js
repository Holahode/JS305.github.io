//"use strict";
/* eslint-disable */
/* You need the module.exports when testing in node.  Comment it out when you send your file to the browser */
//module.exports = { topSalary }; //add all of your function names here that you need for the node mocha tests


function topSalary(salaries) {
    let max = 0;
  let topName= null;
  
  for (let [name, salary] of Object.entries(salaries)) {

    if (salaries === {}) {
      return null;
    } else
      if (max < salary) {
        max = salary;
        topName= name;
      }
  }
  return topName;
}

ccc = 10;
console.log(alpha);