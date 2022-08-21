"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.encryptString = exports.generateHighscores = exports.reverseOrder = exports.generateAverage = exports.removeEvenNumbers = exports.moveFirstAndLastItems = exports.totalRange = exports.totalScores = exports.getFirstAndLastItems = exports.createRecipeString = void 0;

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

/* JS3 builds on the previous challenges and adds the use of Arrays, For Loops, Conditionals (If, else, switch)
 *  & calling your own functions.
 */

/* 
  All challenges in this repository are seperated into four levels: Foundation, Intermediate, Advanced and Expert.
  The expectation is to complete all Foundation level challenges, with Intermediate and upwards pushing your knowledge
  and may require you to google things in order to solve them. If you find an answer online somewhere, be kind and
  share it with the group!
*/

/**
 * Foundation Challenges
 */

/**
 * A function that creates a a Recipe string from a given array of Ingredients.
 * Each ingredient will be joined with a +.
 *
 * @param {string[]} ingredientsArr ["Bacon","Lettuce","Tomato"]
 * @return {string} "Bacon+Lettuce+Tomato"
 */
var createRecipeString = function createRecipeString(ingredientsArr) {
  // let recipeString = "";
  // for (let i = 0; i < ingredientsArr.length; i++) {
  //   if (i === ingredientsArr.length - 1) {
  //     recipeString += ingredientsArr[i];
  //   } else recipeString += ingredientsArr[i] + "+";
  // }
  // return recipeString;
  return ingredientsArr.join("+");
};
/**
 * A function that takes Array of Items and returns a NEW ARRAY with the first and last item in it.
 *
 * @param {string[]} itemsArr ["Tony","John","Dave"]
 * @return {string[]} ["Tony","Dave"]
 */


exports.createRecipeString = createRecipeString;

var getFirstAndLastItems = function getFirstAndLastItems(itemsArr) {
  var firstAndLastItems = [itemsArr[0], itemsArr[itemsArr.length - 1]];
  return firstAndLastItems;
};
/**
 * A function that takes an array of scores and totals the scores by looping through the array.
 *
 * @param {number[]} scoreArr [1,2,3]
 * @return {number} 6
 */


exports.getFirstAndLastItems = getFirstAndLastItems;

var totalScores = function totalScores(scoreArr) {
  var total = 0;

  for (var i = 0; i < scoreArr.length; i++) {
    total = total + scoreArr[i];
  }

  return total;
};
/**
 * Intermediate Challenges
 */

/**
 * A function that takes an number and returns the total of the range of numbers between 0 and the given number.
 * e.g. 10 => 0+1+2+3+4+5+6+7+8+9+10 = 55.
 *
 * @param {number} rangeMax 10
 * @return {number} 55
 */


exports.totalScores = totalScores;

var totalRange = function totalRange(rangeMax) {
  var total = 0;

  for (var i = 0; i < rangeMax + 1; i++) {
    total = total + i;
  }

  return total;
};
/**
 * A function that takes an array and returns a NEW ARRAY where the last item has been moved to the front of the array and removed from the back.
 *
 * @param {string[]} itemsArr ["Tony","John","Dave"]
 * @return {string[]} ["Dave","Tony","John"]
 */
//had to look at answer
// ...


exports.totalRange = totalRange;

var moveFirstAndLastItems = function moveFirstAndLastItems(itemsArr) {
  var newArr = _toConsumableArray(itemsArr);

  var lastElement = newArr.pop();
  newArr.unshift(lastElement);
  return newArr;
};
/**
 * Read this article on how to clone an array.
 * https://www.samanthaming.com/tidbits/35-es6-way-to-clone-an-array/
 *
 * From here on you should not be mutating the input array. Clone it first and then mutate / manipulate.
 */

/**
 * A function that takes an array of numbers and returns a NEW ARRAY with only the odd numbers from the given array. It should not mutate the input array.
 *
 * @param {number[]} numberArr [1,1,8,1,1,8]
 * @return {number[]} [1,1,1,1]
 */


exports.moveFirstAndLastItems = moveFirstAndLastItems;

var removeEvenNumbers = function removeEvenNumbers(numberArr) {
  var newArr = [];

  for (var i = 0; i <= numberArr.length; i++) {
    if (numberArr[i] % 2 === 1) {
      newArr.push(numberArr[i]);
    }
  }

  return newArr;
};
/**
 * Advanced Challenges
 */

/**
 * A function that takes an array of numbers. It returns the average from the given array.
 * The result should rounded up to the nearest decimal place.
 *
 * @param {number[]} numberArr [1,2,3]
 * @return {number} 2
 */


exports.removeEvenNumbers = removeEvenNumbers;

var generateAverage = function generateAverage(numberArr) {
  var lengthOfArr = numberArr.length;

  if (lengthOfArr === 0) {
    return 0;
  }

  var sumOfArr = 0;
  numberArr.forEach(function (element) {
    sumOfArr += element;
  });
  return Math.round(sumOfArr / lengthOfArr, 1);
};
/**
 * A function that uses a loop to reverse the order of an Array. It should return a NEW ARRAY and not Mutate the orginal array.
 *
 * @param {number[]} toReverseArr [1,2,3]
 * @return {number} [3,2,1]
 */


exports.generateAverage = generateAverage;

var reverseOrder = function reverseOrder(toReverseArr) {
  var newArr = [];

  var toReverseArrClone = _toConsumableArray(toReverseArr);

  for (var i = toReverseArrClone.length - 1; i >= 0; i--) {
    var lastElement = toReverseArrClone[i];
    newArr.push(lastElement);
  }

  return newArr;
};
/**
 * Expert Challenges
 */

/**
 * Given two arrays, The first being an array of players and the second being there corresponding score. Loop through them and generate a new array matching the format below.
 *
 * ["P:INDEX PLAYER scored HIGHSCORE","P:INDEX PLAYER scored HIGHSCORE","P:INDEX PLAYER scored HIGHSCORE"]
 *
 * P:INDEX will start from 1. e.g P:1 not P:0
 *
 * If the inputs are not the same size or empty return "invalid inputs"
 *
 * @param {string[]} playersArr ["Tony","John","Dave"]
 * @param {number[]} scoresArr [45,55,66]
 * @return {string[]} ["P:1 Tony scored 45","P:2 John scored 55","P:3 Dave scored 66"]
 */


exports.reverseOrder = reverseOrder;

var generateHighscores = function generateHighscores(playersArr, scoresArr) {
  var newArry = [];

  var playersArrClone = _toConsumableArray(playersArr);

  var scoresArrClone = _toConsumableArray(scoresArr);

  if (playersArr.length !== scoresArr.length || scoresArr.length == 0) {
    return "invalid inputs";
  }

  for (var i = 0; newArry.length !== playersArrClone.length; i++) {
    var player = playersArr[i];
    var score = scoresArr[i];
    var message = "P:".concat(i + 1, " ").concat(player, " scored ").concat(score);
    newArry.push(message);
  }

  return newArry;
};
/**
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
// export const encryptString = (toEncrypt) => {
//   return;
// };


exports.generateHighscores = generateHighscores;

var encryptString = function encryptString(toEncrypt) {
  var Arr1 = [];
  var Arr2 = [];
  var Arr3 = [];
  var i = 0;

  while (i < toEncrypt.length) {
    Arr1.push(toEncrypt[i]);
    i++;
    Arr2.push(toEncrypt[i]);
    i++;
    Arr3.push(toEncrypt[i]);
    i++;
  }

  var encryptedArr = [].concat(Arr1, Arr2, Arr3);
  return encryptedArr.join("");
};

exports.encryptString = encryptString;