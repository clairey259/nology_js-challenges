"use strict";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

var challenge = _interopRequireWildcard(require("./js11"));

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

test("correct greeting", function () {
  expect(challenge.greet()).toBe("Hello, nice to meet you");
});
test("adds two numbers and returns the sum", function () {
  expect(challenge.sumTwoNumbers(1, 4)).toBe(5);
  expect(challenge.sumTwoNumbers(8, 9)).toBe(17);
  expect(challenge.sumTwoNumbers(-5, 5)).toBe(0);
  expect(challenge.sumTwoNumbers(360, 18)).toBe(378);
});
test("check if one number is larger than the other", function () {
  expect(challenge.checkLarger(5, 5)).toBe("Both numbers are equal");
  expect(challenge.checkLarger(8, 2)).toBe("8 is bigger than 2");
  expect(challenge.checkLarger(75, 598)).toBe("598 is bigger than 75");
});
describe("array contains valid names", function () {
  test("returns valid names", function () {
    expect(challenge.filterByLength(["claire", "vera", "jordan", "sadlkfjasasdf"])).toStrictEqual(["claire", "vera", "jordan"]);
    expect(challenge.filterByLength(["sadlkfjasasdf", "sadlkfjasasdf", "sadlkfjasasdf"])).toBe("Sorry, no valid names supplied");
  });
});
test("reduces numbers in array by reducer amount", function () {
  expect(challenge.reduceNumbers([8, 9, 7], 1)).toStrictEqual([7, 8, 6]);
  expect(challenge.reduceNumbers([300, 9, 60], 10)).toStrictEqual([255, 0, 50]);
});