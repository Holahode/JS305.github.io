"use strict";
/* exports at end of file since exporting an object, which can only be referenced after definition */
/* eslint-disable */


function askPassword(ok, fail, password) {
    if(password =="rockstar"){
        return user.loginOk(ok);
    }else
        return user.loginFail(fail);
}
let user = {
loginOk: function (){
    return "John logged in"},
loginFail: function (){
    return "John failed to log in"}
};


function askPassword2(ok, fail, password) {
    if(password =="rockstar"){
        return user2.loginOk();
    }else
        return user2.loginFail();
}
let user2 = {
    loginOk: function (){
        return "John logged in"},
    loginFail: function (){
        return "John failed to log in"}
    };






/* You need the module.exports when testing in node.  Comment it out when you send your file to the browser 
*/
// module.exports = {askPassword, user, askPassword2, user2 }; //add all of your function names here that you need for the node mocha tests