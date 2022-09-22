"use strict";

/* You need the module.exports when testing in node.  Comment it out when you send your file to the browser 
*/
// module.exports = {findTotalScores, findTotalPlayerPoints }; //add all of your function names here that you need for the node mocha tests

/*Be sure to use meaningful variable names and write JSdoc comments for findTotalScores and any helper functions such as findTotalPlayerPoints.
Try to use map and reduce in your functions as appropriate. */
/**
 * 
 * @param {Array} teamStatisticsArr array of objects 
 * @returns {Array} myArr array of objects
 */
function findTotalScores(teamStatisticsArr) {
    const myArr = [];
    for(let each of teamStatisticsArr){
        let obj = {};
        obj.jersey=each.jersey;
        obj.total=findTotalPlayerPoints(each);
       myArr.push(obj);
    }
    return myArr;
} 
/**
 * 
 * @param {Object} player is an object 
 * @returns {number} sum of numbeers
 */
function findTotalPlayerPoints(player) {
    // let sum = 0;
    // for(let each of player.stats){
    //     sum = sum + each.points;
    // }
    // return sum;
    return player.stats.reduce((sum,current)=>sum+current.points,0);
}