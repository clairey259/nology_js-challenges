"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.fizzBuzz = exports.formatString = exports.formatStringArray = exports.filterBooksBySearch = exports.createOddEvenArray = exports.convertStringToNumbersArray = exports.createListOfPoessessions = exports.createPercentageList = exports.removeFalseValues = void 0;

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

/* JS4 builds on the previous challenges and adds the use of Array iterators, Arrays, For Loops, Conditionals (If, else, switch)
 *  & calling your own functions.
 */

/* 
  All challenges in this repository are seperated into four levels: Foundation, Intermediate, Advanced and Expert.
  The expectation is to complete all Foundation level challenges, with Intermediate and upwards pushing your knowledge
  and may require you to google things in order to solve them. If you find an answer online somewhere, be kind and
  share it with the group!
*/
// MAP -> New array -> Function applied to each item in the array
// FILTER -> new array -> each item has to pass a condition
// FOREACH -> read only -> gives you access to each item in the array

/**
 * Foundation Challenges
 */

/**
 * A function that takes an array of Booleans and then removes the false values from the given array.
 * It should create a new array only consiting of the true values.
 *
 * @param {boolean[]} booleanArr [true, true, false, false, true]
 * @return {boolean[]} [true, true, true]
 */
var removeFalseValues = function removeFalseValues(booleanArr) {
  var newArr = [];

  for (var i = 0; i < booleanArr.length; i++) {
    if (booleanArr[i] === true) {
      newArr.push(booleanArr[i]);
    }
  }

  return newArr;
};
/**
 * A function that takes an array of numbers that are between 0 - 1.
 * The function needs to create a new array with the numbers converted into a percentage
 *
 * @param {number[]} numbersArr [1, .5, .7, .25]
 * @return {string[]} ["100%", "50%", "70%", "25%"]
 */


exports.removeFalseValues = removeFalseValues;

var createPercentageList = function createPercentageList(numbersArr) {
  var newArr = [];
  var i = 0;

  while (numbersArr.length !== newArr.length) {
    var percentage = numbersArr[i] * 100;
    var newInput = "".concat(percentage, "%");
    newArr.push(newInput);
    i += 1;
  }

  return newArr;
};
/**
 * A function that takes an array of possessions and a name.
 * The functions needs to create a new array with the name prefixed to each item.
 *
 * @param {string[]} possessionsArr ["shoes", "jacket", "belt"]
 * @param {string} name "disco"
 * @return {string[]} ["disco shoes", "disco jacket", "disco belt"]
 */


exports.createPercentageList = createPercentageList;

var createListOfPoessessions = function createListOfPoessessions(possessionsArr, name) {
  var newArr = _toConsumableArray(possessionsArr);

  for (var i = 0; i < possessionsArr.length; i++) {
    newArr[i] = "".concat(name, " ").concat(possessionsArr[i]);
  }

  return newArr;
};
/**
 * Intemediate Challenges
 */

/**
 * Have a look at the String method split()
 *
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/split
 *
 * You may need to use it below.
 */

/**
 * A function that takes a string of numbers joined with a "+" and returns an array of those numbers.
 * The strings will need to be converted into numbers.
 * e.g 1 instead of "1"
 *
 * @param {string} numberString - "1+2+3+4+5"
 * @return {number[]} [1, 2, 3, 4, 5]
 */


exports.createListOfPoessessions = createListOfPoessessions;

var convertStringToNumbersArray = function convertStringToNumbersArray(numberString) {
  var words = numberString.split("+");

  for (var i = 0; i < words.length; i++) {
    words[i] = parseFloat(words[i]);
  }

  return words;
};
/**
 * A function that takes a string of numbers joined with a "+" and creates a new array based on if the number is even or odd.
 * Every number in the string will need to checked.
 *
 * @param {string} numberString - "1+2+3+4+5"
 * @return {string[]} ['odd', 'even', 'odd', 'even', 'odd']
 */


exports.convertStringToNumbersArray = convertStringToNumbersArray;

var createOddEvenArray = function createOddEvenArray(numberString) {
  var numberArr = numberString.split("+");
  var newArr = [];

  for (var i = 0; i < numberArr.length; i++) {
    if (numberArr[i] % 2 == 0) {
      newArr.push("even");
    } else {
      newArr.push("odd");
    }
  }

  return newArr;
};
/**
 * A function that takes an array of book titles and a search term.
 * The function needs fo remove any book titles that do not include the search term.
 *
 * @param {string[]} booksArr ["JavaScript: The Definitive Guide", "JavaScript: The Good Parts", "The Google story", "React for Dummies"]
 * @param {string} - searchTerm - "Google"
 * @return {string[]} - ["The Google story"]
 */


exports.createOddEvenArray = createOddEvenArray;

var filterBooksBySearch = function filterBooksBySearch(booksArr, searchTerm) {
  var newArr = [];

  for (var i = 0; i < booksArr.length; i++) {
    if (booksArr[i].includes(searchTerm)) {
      newArr.push(booksArr[i]);
    }
  }

  return newArr;
};
/**
 * Advanced Challenges
 */

/**
 * A function that takes a list, cleans each item and joins them with a +.
 * When it "cleans" it remove's whitespace and makes sure the string is lowercase.
 *
 * This function is failing the test's can you figure out why?
 * The bug is within the function, the test's are fine.
 * Can you get it to pass the tests?
 *
 * @param {string[]} stringArr ["  dIsco", " ShOes "]
 * @return {string} "disco+shoes"
 */


exports.filterBooksBySearch = filterBooksBySearch;

var formatStringArray = function formatStringArray(stringArr) {
  var cleanedArr = stringArr.map(function (string) {
    var cleanStr = string.trim().toLowerCase();
    return cleanStr;
  }); // console.log(???)

  var joinedString = cleanedArr.join("+");
  return joinedString;
};
/**
 * A function that takes a string, cleans it and formats it based on a condition.
 *
 * It will need to remove anything that is NOT a letter from the string.
 * - e.g numbers, punctuation, whitespace.
 *
 * If the index of the letter is even the letter needs to be Uppercase.
 * If the index of the letter is odd the letter needs to be Lowercase.
 *
 * @param {string} string " 22 $$He LL--O!%^& "
 * @return {string[]} [ 'H', 'e', 'L', 'l', 'O' ]
 */


exports.formatStringArray = formatStringArray;

var formatString = function formatString(string) {
  var newArr = [];
  var stringArr = string.split(""); //console.log(stringArr);

  for (var i = 0; i < string.length; i++) {
    var code = string.charCodeAt(i);

    if (code > 64 && code < 91 || code > 96 && code < 123) {
      newArr.push(String.fromCharCode(code));
    }
  } //console.log(newArr);


  for (var j = 0; j < newArr.length; j++) {
    if (j % 2 == 0) {
      newArr[j] = newArr[j].toUpperCase();
    } else {
      newArr[j] = newArr[j].toLowerCase();
    }
  } //console.log(newArr);


  return newArr;
};
/**
 * Expert Challenge
 */

/**
 * A function that takes an array and FizzBuzzes it.
 *
 * It should remove anything from the given array that is NOT a POSITIVE number or a POSITIVE number as a STRING.
 *
 * If we were given [-1, "disco", "3", 5, "15", 2, 0]
 * We would be left with this ["3", 5, "15", 2]
 *
 * It then needs to create a NEW array from this clean array based on the conditons below:
 *
 * For multiples of three replace the number with "Fizz".
 * For multiples of five replace the number with "Buzz".
 * For numbers which are multiples of both three and five replace the number with "FizzBuzz".
 * All the other numbers need to be strings.
 *
 * @param {*[]} mixedArray [-1, "disco", "3", 5, "15", 2, 0]
 * @return {string[]} [ "Fizz", "Buzz", "FizzBuzz", "2" ]
 */


exports.formatString = formatString;

var fizzBuzz = function fizzBuzz(mixedArray) {
  var toNumber = function toNumber(input) {
    return parseFloat(input);
  };

  var isAPositiveNumber = function isAPositiveNumber(input) {
    if (input !== NaN && input > 0) {
      return true;
    } else {
      return false;
    }
  };

  var filteredMixedArray = mixedArray.map(toNumber).filter(isAPositiveNumber); //console.log(filteredMixedArray);

  var fizzBuzzArr = [];

  for (var i = 0; i < filteredMixedArray.length; i++) {
    if (filteredMixedArray[i] % 3 === 0 && filteredMixedArray[i] % 5 === 0) {
      fizzBuzzArr.push("FizzBuzz");
    } else if (filteredMixedArray[i] % 3 === 0) {
      fizzBuzzArr.push("Fizz");
    } else if (filteredMixedArray[i] % 5 === 0) {
      fizzBuzzArr.push("Buzz");
    } else {
      fizzBuzzArr.push(filteredMixedArray[i].toString());
    }
  } //console.log(fizzBuzzArr)


  return fizzBuzzArr;
};

exports.fizzBuzz = fizzBuzz;