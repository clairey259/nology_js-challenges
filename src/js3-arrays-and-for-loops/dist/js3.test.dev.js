"use strict";

var challenge = _interopRequireWildcard(require("./challenge"));

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

var createRecipeString = challenge.createRecipeString,
    getFirstAndLastItems = challenge.getFirstAndLastItems,
    totalScores = challenge.totalScores,
    moveFirstAndLastItems = challenge.moveFirstAndLastItems,
    totalRange = challenge.totalRange,
    removeEvenNumbers = challenge.removeEvenNumbers,
    generateHighscores = challenge.generateHighscores,
    generateAverage = challenge.generateAverage,
    reverseOrder = challenge.reverseOrder,
    encryptString = challenge.encryptString;
/**
 * REMOVE X FROM DESCRIBE FUNCTION TO STOP SKIPPING TEST BLOCKS
 */

var coaches = ["Andy", "Bex", "Calum", "Charlie", "Matt", "Ollie", "Sam"];
var items = ["Apple", "Orange", "Pear"];
var scores = [20, 40, 50, 60];
var ingredients = ["Bacon", "Lettuce", "Tomato"];
var ingredientsString = "Bacon+Lettuce+Tomato";
var itemString = "Apple+Orange+Pear";
xdescribe("Testing createRecipeString()", function () {
  it("Should be defined", function () {
    expect(createRecipeString(ingredients)).toBeDefined();
  });
  it("Should return a String", function () {
    expect(_typeof(createRecipeString(ingredients))).toBe("string");
    expect(_typeof(createRecipeString(["hat"]))).toBe("string");
  });
  it("Should handle multiple inputs", function () {
    expect(createRecipeString(ingredients)).toEqual(ingredientsString);
    expect(createRecipeString(items)).toEqual(itemString);
  });
  it("Should handle a single item", function () {
    expect(createRecipeString(["hat"])).toBe("hat");
  });
});
xdescribe("Testing getFirstAndLastItems()", function () {
  it("Should be defined", function () {
    expect(getFirstAndLastItems(coaches)).toBeDefined();
  });
  it("Should return an Array ", function () {
    expect(Array.isArray(getFirstAndLastItems(coaches))).toBeTruthy();
  });
  it("Should handle multiple inputs", function () {
    expect(getFirstAndLastItems(coaches)).toEqual(["Andy", "Sam"]);
    expect(getFirstAndLastItems(items)).toEqual(["Apple", "Pear"]);
  });
});
xdescribe("Testing totalScores()", function () {
  it("Should be defined", function () {
    expect(totalScores(scores)).toBeDefined();
  });
  it("Should return a Number", function () {
    expect(_typeof(totalScores(scores))).toBe("number");
    expect(_typeof(totalScores([2]))).toBe("number");
  });
  it("Should handle single input", function () {
    expect(totalScores([10])).toBe(10);
    expect(totalScores([1000])).toBe(1000);
    expect(totalScores([45])).toBe(45);
  });
  it("Should handle multiple inputs", function () {
    expect(totalScores(scores)).toBe(170);
    expect(totalScores(Array(50).fill(2))).toBe(100);
    expect(totalScores(Array(90).fill(4))).toBe(360);
  });
});
xdescribe("Testing totalRange()", function () {
  it("Should be defined", function () {
    expect(totalRange(10)).toBeDefined();
  });
  it("Should return a Number ", function () {
    expect(_typeof(totalRange(10))).toBe("number");
  });
  it("Should Total up the range of numbers", function () {
    expect(totalRange(5)).toBe(15);
    expect(totalRange(10)).toBe(55);
    expect(totalRange(50)).toBe(1275);
  });
  it("Should Total larger numbers", function () {
    expect(totalRange(200)).toBe(20100);
    expect(totalRange(2000)).toBe(2001000);
  });
});
xdescribe("Testing moveFirstAndLastItems()", function () {
  it("Should be defined", function () {
    expect(moveFirstAndLastItems(items)).toBeDefined();
  });
  it("Should return an Array ", function () {
    expect(Array.isArray(getFirstAndLastItems(items))).toBeTruthy();
  });
  it("Should handle multiple inputs", function () {
    expect(moveFirstAndLastItems(items)).toEqual(["Pear", "Apple", "Orange"]);
    expect(moveFirstAndLastItems(ingredients)).toEqual(["Tomato", "Bacon", "Lettuce"]);
  });
});
xdescribe("Testing removeEvenNumbers()", function () {
  it("Should be defined", function () {
    expect(removeEvenNumbers(scores)).toBeDefined();
  });
  it("Should return an Array ", function () {
    expect(Array.isArray(removeEvenNumbers(scores))).toBeTruthy();
  });
  it("Should remove even numbers from array", function () {
    expect(removeEvenNumbers([2])).toEqual([]);
    expect(removeEvenNumbers([1])).toEqual([1]);
    expect(removeEvenNumbers([123456])).toEqual([]);
  });
  it("Should remove even numbers from a small array", function () {
    expect(removeEvenNumbers(scores)).toEqual([]);
    expect(removeEvenNumbers([1, 2, 3])).toEqual([1, 3]);
    expect(removeEvenNumbers([1553445, 442, 23313])).toEqual([1553445, 23313]);
  });
  it("Should remove even numbers from a large array", function () {
    expect(removeEvenNumbers(Array(100).fill(24))).toEqual([]);
    expect(removeEvenNumbers(Array(100).fill(1)).length).toBe(100);
    expect(removeEvenNumbers(Array(5505).fill(1)).length).toBe(5505);
  });
  it("Should return a new array", function () {
    expect(removeEvenNumbers(scores)).not.toBe(scores);
  });
});
xdescribe("Testing generateAverage()", function () {
  it("Should be defined", function () {
    expect(generateAverage([10])).toBeDefined();
  });
  it("Should return a Number", function () {
    expect(_typeof(generateAverage([10]))).toBe("number");
    expect(_typeof(generateAverage([]))).toBe("number");
  });
  it("Should calculate the average of different numbers", function () {
    expect(generateAverage([1, 2, 3, 4, 5, 6])).toBe(4);
    expect(generateAverage([50, 60, 30, 70])).toBe(53);
  });
  it("Should calculate the average of same numbers", function () {
    expect(generateAverage(Array(500).fill(56))).toBe(56);
    expect(generateAverage(Array(50).fill(1))).toBe(1);
  });
  it("Should handle an empty array", function () {
    expect(generateAverage([])).toBe(0);
  });
});
describe("Testing reverseOrder()", function () {
  it("Should be defined", function () {
    expect(reverseOrder(items)).toBeDefined();
  });
  it("Should return an Array", function () {
    expect(Array.isArray(reverseOrder(items))).toBeTruthy();
  });
  it("Should not change a single item array", function () {
    expect(reverseOrder(["Pear"])).toEqual(["Pear"]);
    expect(reverseOrder(["Orange"])).toEqual(["Orange"]);
    expect(reverseOrder([45])).toEqual([45]);
  });
  it("Should return multiple item Array Reversed", function () {
    expect(reverseOrder(coaches)[0]).toBe("Sam");
    expect(reverseOrder(items)).toEqual(["Pear", "Orange", "Apple"]);
    expect(reverseOrder(["Pear", "Orange", "Apple"])).toEqual(items);
    expect(reverseOrder([1, 2, 3])).toEqual([3, 2, 1]);
  });
  it("Should return a new array", function () {
    expect(reverseOrder(items)).not.toBe(items);
    expect(reverseOrder(ingredients)).not.toBe(ingredients);
  });
});
describe("Testing generateHighscores()", function () {
  var players, playerScores, highscores;
  beforeEach(function () {
    players = ["Andy", "Bex", "Calum"];
    playerScores = [60, 99, 71];
    highscores = ["P:1 Andy scored 60", "P:2 Bex scored 99", "P:3 Calum scored 71"];
  });
  it("Should be defined", function () {
    expect(generateHighscores(players, playerScores)).toBeDefined();
  });
  it("Should return an Array with correct params", function () {
    expect(Array.isArray(generateHighscores(players, playerScores))).toBeTruthy();
  });
  it("Should return String with incorrect params", function () {
    players.pop();
    expect(_typeof(generateHighscores(players, playerScores))).toBeTruthy();
  });
  it("Should format arrays with valid parameters", function () {
    expect(generateHighscores(players, playerScores)).toEqual(highscores);
    players.pop();
    playerScores.pop();
    highscores.pop();
    expect(generateHighscores(players, playerScores)).toEqual(highscores);
  });
  it("Should not lose any players", function () {
    expect(generateHighscores(Array(10).fill("A"), Array(10).fill(1)).length).toBe(10);
  });
  it("Should catch invalid parameters.", function () {
    players.pop();
    expect(generateHighscores(players, playerScores)).toBe("invalid inputs");
    expect(generateHighscores(["dave"], [1, 2])).toBe("invalid inputs");
    expect(generateHighscores([], [])).toBe("invalid inputs");
  });
  it("Should return a new Array", function () {
    expect(generateHighscores(players, playerScores)).not.toBe(players);
    expect(generateHighscores(players, playerScores)).not.toBe(playerScores);
  });
});
describe("Testing encryptString()", function () {
  it("Should NOT return undefined", function () {
    expect(encryptString("  defined")).toBeDefined();
  });
  it("Should return a String", function () {
    expect(_typeof(encryptString("  front"))).toBe("string");
  });
  it("Should NOT encrypt three letters", function () {
    expect(encryptString("hey")).toBe("hey");
    expect(encryptString("ola")).toBe("ola");
  });
  it("Should encrypt after three plus letters", function () {
    expect(encryptString("heya")).toBe("haey");
    expect(encryptString("disco")).toBe("dcios");
    expect(encryptString("cellardoor")).toBe("cldreaolro");
  });
  it("Should encrypt large words", function () {
    expect(encryptString("antidisestablishmentarianism")).toBe("aistlhnrnmndeaimtiitisbseaas");
    expect(encryptString("hippopotomonstrosesquippedaliophobia")).toBe("hpomsosielpbiototsqpdihipponreupaooa");
  });
  it("Should keep spaces between words", function () {
    expect(encryptString("keep it secret")).toBe("kpteee  cteisr");
    expect(encryptString("keep it safe.")).toBe("kpta.e  feise");
  });
  it("Should handle empty input", function () {
    expect(encryptString("")).toBe("");
  });
});