"use strict";
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
describe("isVowel", function () {
    it("a is vowel", function () {
    assert.equal(isVowel("a"), true);
    });
    it("e is vowel", function () {
    assert.equal(isVowel("e"), true);
    });
    it("i is vowel", function () {
    assert.equal(isVowel("i"), true);
    });
    it("o is vowel", function () {
    assert.equal(isVowel("o"), true);
    }); 
    it("u is vowel", function () {
    assert.equal(isVowel("u"), true);
    }); 
    it("z is not vowel", function () {
    assert.equal(isVowel("z"), false);
    });
    it("5 is not vowel", function () {
    assert.equal(isVowel("5"), false);
    });
   });