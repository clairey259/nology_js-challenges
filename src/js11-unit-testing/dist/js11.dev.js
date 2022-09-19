"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.reduceNumbers = exports.filterByLength = exports.checkLarger = exports.sumTwoNumbers = exports.greet = void 0;

/* Unit testing - In this chalenge you will be provided with some functions that don't have any corrosponding tests */

/* The aim of this challenge is to achieve 100% code coverage, you can check this by running the command below */

/****** npm run test-coverage ******/

/**
 * A function which returns a greeting
 * @returns {string} "Hello, nice to meet you"
 */
var greet = function greet() {
  return "Hello, nice to meet you";
};
/**
 * A function that adds two numbers together and returns the sum
 * @param {number} firstNumber
 * @param {number} secondNumber
 * @returns {number}
 */


exports.greet = greet;

var sumTwoNumbers = function sumTwoNumbers(firstNumber, secondNumber) {
  return firstNumber + secondNumber;
};
/**
 * A function that checks if one number is larger than the other and returns a customised string depending on the outcome
 * @param {number} firstNumber
 * @param {number} secondNumber
 * @returns {string}
 */


exports.sumTwoNumbers = sumTwoNumbers;

var checkLarger = function checkLarger(firstNumber, secondNumber) {
  if (firstNumber === secondNumber) {
    return "Both numbers are equal";
  } else if (firstNumber > secondNumber) {
    return "".concat(firstNumber, " is bigger than ").concat(secondNumber);
  } else {
    return "".concat(secondNumber, " is bigger than ").concat(firstNumber);
  }
};
/**
 * A function that takes and array, filters through it and returns a new array
 * @param {array} names
 * @returns {array | string} array of valid names or a string "Sorry, no valid names supplied"
 */


exports.checkLarger = checkLarger;

var filterByLength = function filterByLength(names) {
  var validNames = names.filter(function (name) {
    return name.length <= 6;
  });

  if (validNames[0]) {
    return validNames;
  } else {
    return "Sorry, no valid names supplied";
  }
};
/**
 * A function which takes 2 arguments, an array of number and a reducer value.
 * Return a new array which has reduced the value of each number in the array by the reducer amount,
 * while also making sure the values in the array are between 0 and 255
 * @param {array} numbers an array of 3 numbers
 * @param {number} reducer an amount to reduce each value in the array by
 * @returns {array} of values between 0 - 255
 */


exports.filterByLength = filterByLength;

var reduceNumbers = function reduceNumbers(numbers, reducer) {
  return numbers.map(function (number) {
    if (number - reducer <= 0) {
      return 0;
    } else if (number - reducer >= 255) {
      return 255;
    } else {
      return number - reducer;
    }
  });
};

exports.reduceNumbers = reduceNumbers;