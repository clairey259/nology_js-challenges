"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.cleanCocktailResponseData = exports.setImportantKeys = exports.getImportantKeys = exports.totalShoppingBasket = exports.settotalPrice = exports.findMostExpensiveItem = exports.getNumberOfKeys = exports.getTheManagers = exports.getEmployeeQuotes = void 0;

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/* This challenge build upon previous knowledge and introduces the concept of complex data types (arrays of objects) */

/* 
  All challenges in this repository are seperated into four levels: Foundation, Intermediate, Advanced and Expert.
  The expectation is to complete all Foundation level challenges, with Intermediate and upwards pushing your knowledge
  and may require you to google things in order to solve them. If you find an answer online somewhere, be kind and
  share it with the group!
*/

/* Foundation Challenges */

/**
 * A function which takes an array of employee objects and returns just an array of their quotes so we can later put
 * them on the website.
 *
 * @param {{name: string, quote: string, yearsEmployed: number, isManagement: boolean}[]} employeeArr - An array of employee objects
 * @returns {string[]} A list of the employees quotes for the website
 */
var getEmployeeQuotes = function getEmployeeQuotes(employeeArr) {
  var employeeQuotes = employeeArr.map(function (employee) {
    return employee.quote;
  });
  return employeeQuotes;
};
/**
 * A function which takes an array of employee objects and returns a new array only containing employees that are managers.
 *
 * @param {{name: string, quote: string, yearsEmployed: number, isManagement: boolean}[]} employeeArr - An array of employee objects
 * @returns {{name: string, quote: string, yearsEmployed: number, isManagement: boolean}[]} An array containing only managers
 */


exports.getEmployeeQuotes = getEmployeeQuotes;

var getTheManagers = function getTheManagers(employeeArr) {
  var managersArr = employeeArr.filter(function (employee) {
    employee.isManagement === true;
    return employee.isManagement;
  });
  return managersArr;
};
/**
 * A function which tells you the number of keys on the provided object.
 *
 * @param {object} object - The provided object with an assortment of keys
 * @returns {number} The number of the keys on the object
 */


exports.getTheManagers = getTheManagers;

var getNumberOfKeys = function getNumberOfKeys(object) {
  var count = 0; // loop through each key/value

  for (var key in object) {
    // increase the count
    ++count;
  }

  return count;
};
/* Intermediate Challenges */

/**
 * A function to find the most expensive item in the basket and returns it in order to offer this customer a discount
 * later on down the line.
 *
 * @param {{name: string, price: number, hasFreeShipping: boolean, quantity: number}[]} shoppingBasketArr - An array of basket items for an online shop
 * @returns {{name: string, price: number, hasFreeShipping: boolean, quantity: number}} The most expensive item in the shopping basket
 */


exports.getNumberOfKeys = getNumberOfKeys;

var findMostExpensiveItem = function findMostExpensiveItem(shoppingBasketArr) {
  var sortedArray = shoppingBasketArr.sort(function (a, b) {
    return b.price - a.price;
  });
  return sortedArray[0];
};
/**
 * A function which add a new key of totalPrice to each shopping basket item in the array where total cost is
 * the price * the quantity of items ordered i.e.
 * {
 *  name: "jeans",
 *  price: 30,
 *  hasFreeShipping: false,
 *  quantity: 2,
 *  totalPrice: 60
 * }
 * Then returns a new array of objects
 *
 * @param {{name: string, price: number, hasFreeShipping: boolean, quantity: number}[]} shoppingBasketArr - An array of basket items for an online shop
 * @returns {{name: string, price: number, hasFreeShipping: boolean, quantity: number, totalPrice: number}[]} A new array where each object has had a total price added to it
 */


exports.findMostExpensiveItem = findMostExpensiveItem;

var settotalPrice = function settotalPrice(shoppingBasketArr) {
  var shoppingBasketArrWithTotalPrice = shoppingBasketArr.map(function (item) {
    var newItem = _objectSpread({}, item);

    var totalPrice = newItem.price * newItem.quantity;
    newItem.totalPrice = totalPrice;
    return newItem;
  });
  return shoppingBasketArrWithTotalPrice;
};
/**
 * A function which sums the total cost of every item in the array and returns it as a single number.
 *
 * @param {{name: string, price: number, hasFreeShipping: boolean, quantity: number, totalPrice: number}[]} shoppingBasketArr - An array of basket items for an online shop
 * @returns {number} The total cost of the order
 */


exports.settotalPrice = settotalPrice;

var totalShoppingBasket = function totalShoppingBasket(shoppingBasketArr) {
  var totalPriceArr = [];
  shoppingBasketArr.forEach(function (element) {
    totalPriceArr.push(element.totalPrice);
  });
  var totalCost = totalPriceArr.reduce(function (accumulator, element) {
    return accumulator + element;
  }, 0);
  return totalCost;
};
/* Advanced Challenges */

/**
 * A function which takes an array of meal objects, removes unneeded keys from the objects and returns a new array of
 * meal objects.
 *
 * @param {{id: number, name: string, ingredients: string[], country: string, timeStamp: number, userCreated: string}[]} mealsArr - An array containing meal objects
 * @returns {{id: number, name: string, ingredients: string[], country: string}[]} An array of cleaned meal objects
 */


exports.totalShoppingBasket = totalShoppingBasket;

var getImportantKeys = function getImportantKeys(mealsArr) {
  var cleanedArr = mealsArr.map(function (element) {
    var newElement = _objectSpread({}, element);

    delete newElement.timeStamp;
    delete newElement.userCreated;
    return newElement;
  });
  return cleanedArr;
};
/**
 * A function which takes an array of meal objects and check if every object contains the necessary keys. If a key is
 * missing it adds a default value instead.
 * default values:
 * isVegetarian = false
 * timeToCook = 15
 *
 * @param {{id: number, name: string, ingredients: string[], country: string, isVegetarian?: boolean, timeToCook?: number}[]} mealsArr - An array containing meal objects
 * @returns {{id: number, name: string, ingredients: string[], country: string, isVegetarian: boolean, timeToCook: number}[]}
 */


exports.getImportantKeys = getImportantKeys;

var setImportantKeys = function setImportantKeys(mealsArr) {// Write code here
};
/* Expert Challenge */

/**
 * A function that takes a raw response from a cocktail API and turn each object in the response into a cleaner form
 * so that it is easier to work with.
 *
 * @param {{
 *  idDrink: number,
 *  strDrink: string,
 *  strCategory: string,
 *  strAlcoholic: string,
 *  strInstructions: string,
 *  strIngredient1: string | null,
 *  strIngredient2: string | null,
 *  strIngredient3: string | null,
 *  strIngredient4: string | null,
 *  strIngredient5: string | null,
 *  strIngredient6: string | null
 * }[]} cocktailData - The raw response from the cocktail API
 * @returns {{
 *  id: number,
 *  drink: string,
 *  category: string,
 *  alcoholic: string,
 *  instructions: string,
 *  ingredients: string[],
 * }[]} A Cleaned array of cocktail data
 */


exports.setImportantKeys = setImportantKeys;

var cleanCocktailResponseData = function cleanCocktailResponseData(cocktailData) {// Write code here
};

exports.cleanCocktailResponseData = cleanCocktailResponseData;