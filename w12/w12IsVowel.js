"use strict";
module.exports={isVowel};
const assert = require("assert");
/**
 * 
 * @param {Character} letter could be character of English alphabet
 * @returns {True} returns true if the letter is one of the vowels
 */
function isVowel(letter) {
    if (letter === "a" || letter === "e" || letter === "i" ||
        letter === "o" || letter === "u" ||letter === "A" || 
        letter === "E" || letter === "I" ||
        letter === "O" || letter === "U") {
        return true;
    } else {
        return false;
    }
}