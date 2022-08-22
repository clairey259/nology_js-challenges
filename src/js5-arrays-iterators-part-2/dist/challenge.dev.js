"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.encryptString = exports.totalNestedScoresArr = exports.checkStringPalindrome = exports.checkPrimaryColours = exports.checkItemInstock = exports.sortNumbersHighToLow = exports.sortCharactersAlphabetically = exports.reverseString = exports.totalScoresArr = void 0;

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

/* JS5 builds on the previous challenges and adds the use of MORE Array iterators, Arrays, For Loops, Conditionals (If, else, switch)
 *  & calling your own functions.
 */

/* 
  All challenges in this repository are seperated into four levels: Foundation, Intermediate, Advanced and Expert.
  The expectation is to complete all Foundation level challenges, with Intermediate and upwards pushing your knowledge
  and may require you to google things in order to solve them. If you find an answer online somewhere, be kind and
  share it with the group!
*/
// reduce join sort indexof reverse

/**
 * Foundation Challenges
 */

/**
 * A function that uses the REDUCE array iterator to total an array of scores.
 * The scores will be numbers.
 *
 * @param {number[]} numberArr [7, 7, 6, 2, 3, 2, 3]
 * @return {number} 30
 */
// export const totalScoresArr = numberArr.reduce((total, current) => {
//   total + current, 0);
// return totalScoresArr
// }
var totalScoresArr = function totalScoresArr(scoresArr) {
  var totalScore = scoresArr.reduce(function (total, current) {
    return total += current;
  }, 0);
  return totalScore;
};
/**
 * A function that turns a string into an array and uses a ARRAY ITERATOR to reverse it.
 * It will need to keep spaces between words.
 * Once reversed it will need to turn the array back into a string.
 *
 * @param {string} toReverse "reverse"
 * @return {string} "esrever"
 */


exports.totalScoresArr = totalScoresArr;

var reverseString = function reverseString(toReverse) {
  var Arr = _toConsumableArray(toReverse);

  var revArr = Arr.reverse();
  var revString = revArr.join("");
  return revString;
};
/**
 * A function that arranges an array of characters alphabetically.
 * Each character will need to be lowercase.
 * A to Z case insensitive.
 *
 * @param {string[]} charcterArr ["X", "B", "B", "b", "g", "l", "n", "x"]
 * @return {string[]} ["b", "b", "b", "g", "l", "n", "x", "x"]
 */


exports.reverseString = reverseString;

var sortCharactersAlphabetically = function sortCharactersAlphabetically(charcterArr) {
  var toLowerCase = function toLowerCase(letter) {
    return letter.toLowerCase();
  };

  var newArr = charcterArr.map(toLowerCase);
  newArr.sort();
  return newArr;
};
/**
 * Intemediate Challenges
 */

/**
 * A function that arranges an array of numbers highest to the lowest number.
 *
 * @param {number[]} numberArr [6, 9, 55, 2, 9190, .5]
 * @return {number[]} [9190, 55, 9, 6, 2, 0.5]
 */


exports.sortCharactersAlphabetically = sortCharactersAlphabetically;

var sortNumbersHighToLow = function sortNumbersHighToLow(numberArr) {
  var newArry = numberArr.sort(function (a, b) {
    return a - b;
  }).reverse();
  return newArry;
};
/**
 * A function that checks if a given item is 'instock'.
 * You have been given a 'stocklist' in the function body.
 *
 * If the item is in the stocklist you need to return its index in the following string format.
 * "ITEM is instock, it is on aisle INDEX."
 *
 * If the item is not in the stocklist you need to return the following string format.
 * "Sorry ITEM is not instock."
 *
 * @param {string} toCheck orange
 * @return {string} "orange is instock, it is on aisle 2."
 */


exports.sortNumbersHighToLow = sortNumbersHighToLow;

var checkItemInstock = function checkItemInstock(toCheck) {
  var stockList = ["apple", "banana", "orange", "coconut", "strawberry", "lime", "grapefruit", "lemon", "kumquat", "blueberry", "melon"];
  var index = stockList.findIndex(function (index) {
    return index === toCheck;
  });

  if (index >= 0) {
    return "".concat(toCheck, " is instock, it is on aisle ").concat(index, ".");
  } else {
    return "Sorry ".concat(toCheck, " is not instock.");
  }
};
/**
 * A function that takes an array of colours and checks if EVERY colour is a primary colour.
 * The primary colours are ["red", "blue", "yellow"].
 * It will return true if they are ALL primary.
 * It will return false if they are NOT ALL primary.
 *
 * @param {string[]} coloursArr ["red", "orange", "yellow", "green", "blue", "indigo", "violet"]
 * @return {boolean} false
 */


exports.checkItemInstock = checkItemInstock;

var checkPrimaryColours = function checkPrimaryColours(coloursArr) {
  function itIsPrimary(colour) {
    return colour === "red" || colour === "blue" || colour === "yellow";
  }

  return coloursArr.every(itIsPrimary);
};
/**
 * Advanced Challenges
 */

/**
 * A function that takes a strings and checks to see if it is a palindrome.
 * PALINDROME - a word, phrase, or sequence that reads the same backwards as forwards.
 * It will return true or false depending if it is a palindrome or not.
 *
 * @param {string} stringOne racecar
 * @return {boolean} true
 */


exports.checkPrimaryColours = checkPrimaryColours;

var checkStringPalindrome = function checkStringPalindrome(stringOne) {
  var stringOneMod = stringOne.replaceAll(" ", "");
  stringOneMod = stringOneMod.toLowerCase();

  function isAPallindrome(word) {
    var wordArr = word.split("");
    var wordArrRev = wordArr.reverse();
    var wordRev = wordArrRev.join("");
    return wordRev === word;
  }

  return isAPallindrome(stringOneMod);
};
/**
 * A function that totals a nested array of scores arrays.
 * It only needs to total each nested array.
 * e.g. [[1, 2], [2, 3]] = [3, 5]
 * The scores will be numbers.
 *
 * @param {number[]} numberArr [[7, 7, 6], [2, 3, 2], [3]]
 * @return {number[]} [20, 7, 3]
 */


exports.checkStringPalindrome = checkStringPalindrome;

var totalNestedScoresArr = function totalNestedScoresArr(scoresArr) {
  return;
};
/**
 * Expert Challenge
 */

/**
 * This is the same challenge as advanced JS4, can you implement it differently.
 * Can you complete this challenge using the REDUCE iterator?
 *
 * A function that takes a string and creates a simple encrypted message.
 *
 * The string will be broken into 3 lists.
 * The first three letters will go into their own list.
 * The next three letters will follow this pattern.
 * Joining the first three letters in each of their list.
 * The rest of the letter's will follow this pattern.
 * Each list will be joined together and returned as an encrypted message.
 *
 * The word "encrypted" would be broken into:
 *
 * e r t
 * n y e
 * c p d
 *
 * and joined together as ert + nye + cpd
 *
 * @param {string} toEncrypt "encrypted"
 * @return {string} "ertnyecpd"
 */


exports.totalNestedScoresArr = totalNestedScoresArr;

var encryptString = function encryptString(toEncrypt) {
  return;
};

exports.encryptString = encryptString;