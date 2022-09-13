"use strict";

var challenge = _interopRequireWildcard(require("./challenge"));

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

var getEmployeeQuotes = challenge.getEmployeeQuotes,
    getTheManagers = challenge.getTheManagers,
    getNumberOfKeys = challenge.getNumberOfKeys,
    findMostExpensiveItem = challenge.findMostExpensiveItem,
    settotalPrice = challenge.settotalPrice,
    totalShoppingBasket = challenge.totalShoppingBasket,
    getImportantKeys = challenge.getImportantKeys,
    setImportantKeys = challenge.setImportantKeys,
    cleanCocktailResponseData = challenge.cleanCocktailResponseData;
describe("Foundation level challenges", function () {
  var employeeData = [{
    name: "Edith Gibson",
    quote: "Your body is precious. It is our vehicle for awakening. Treat it with care.",
    yearsEmployed: 14,
    isManagement: true
  }, {
    name: "Adam Holmes",
    quote: "I detest life-insurance agents; they always argue that I shall some day die, which is not so.",
    yearsEmployed: 1,
    isManagement: false
  }, {
    name: "Fenton Perry",
    quote: "The Fifth Amendment is an old friend and a good friend. It is one of the great landmarks in man's struggle to be free of tyranny, to be decent and civilized.",
    yearsEmployed: 19,
    isManagement: false
  }, {
    name: "Adelaide Owens",
    quote: "Columbus found a world, and had no chart save one that Faith deciphered in the skies.",
    yearsEmployed: 9,
    isManagement: false
  }, {
    name: "Adison Crawford",
    quote: "Only learn to seize good fortune, for good fortune is always here.",
    yearsEmployed: 7,
    isManagement: true
  }];
  describe("getEmployeeQuotes() tests", function () {
    it("Should return an array of just the quote from the data provided", function () {
      expect(getEmployeeQuotes(employeeData)).toStrictEqual(["Your body is precious. It is our vehicle for awakening. Treat it with care.", "I detest life-insurance agents; they always argue that I shall some day die, which is not so.", "The Fifth Amendment is an old friend and a good friend. It is one of the great landmarks in man's struggle to be free of tyranny, to be decent and civilized.", "Columbus found a world, and had no chart save one that Faith deciphered in the skies.", "Only learn to seize good fortune, for good fortune is always here."]);
    });
  });
  describe("getTheManagers() tests", function () {
    it("Should return an array containing only employees where isManagement is true", function () {
      expect(getTheManagers(employeeData)).toStrictEqual([{
        name: "Edith Gibson",
        quote: "Your body is precious. It is our vehicle for awakening. Treat it with care.",
        yearsEmployed: 14,
        isManagement: true
      }, {
        name: "Adison Crawford",
        quote: "Only learn to seize good fortune, for good fortune is always here.",
        yearsEmployed: 7,
        isManagement: true
      }]);
    });
  });
  describe("getNumberOfKeys() tests", function () {
    var object1 = {
      a: 1,
      b: 2
    };
    var object2 = {
      a: 1,
      b: 2,
      c: 3,
      d: 4
    };
    var object3 = {
      a: 1,
      b: 2,
      c: 3,
      d: 4,
      e: 5,
      f: 6
    };
    it("Should return a number", function () {
      expect(_typeof(getNumberOfKeys(object1))).toBe("number");
    });
    it("Should accurately count the number of keys", function () {
      expect(getNumberOfKeys(object1)).toBe(2);
      expect(getNumberOfKeys(object2)).toBe(4);
      expect(getNumberOfKeys(object3)).toBe(6);
    });
  });
});
describe("Intermediate level challenges", function () {
  var shoppingBasket = [{
    name: "jeans",
    price: 30,
    hasFreeShipping: false,
    quantity: 2
  }, {
    name: "hoodie",
    price: 35,
    hasFreeShipping: false,
    quantity: 1
  }, {
    name: "pants",
    price: 5,
    hasFreeShipping: true,
    quantity: 5
  }, {
    name: "socks",
    price: 5,
    hasFreeShipping: true,
    quantity: 1
  }, {
    name: "shirt",
    price: 20,
    hasFreeShipping: false,
    quantity: 3
  }];
  var shoppingBasketWithTotals = [{
    name: "hoodie",
    price: 35,
    hasFreeShipping: false,
    quantity: 1,
    totalPrice: 35
  }, {
    name: "jeans",
    price: 30,
    hasFreeShipping: false,
    quantity: 2,
    totalPrice: 60
  }, {
    name: "shirt",
    price: 20,
    hasFreeShipping: false,
    quantity: 3,
    totalPrice: 60
  }, {
    name: "pants",
    price: 5,
    hasFreeShipping: true,
    quantity: 5,
    totalPrice: 25
  }, {
    name: "socks",
    price: 5,
    hasFreeShipping: true,
    quantity: 1,
    totalPrice: 5
  }];
  describe("findMostExpensiveItem() tests", function () {
    it("Should return a single object", function () {
      expect(findMostExpensiveItem(shoppingBasket)).toHaveProperty("name");
      expect(findMostExpensiveItem(shoppingBasket).name).toBe("hoodie");
    });
    it("Should return the most expensive item which is a hoodie", function () {
      expect(findMostExpensiveItem(shoppingBasket)).toStrictEqual({
        name: "hoodie",
        price: 35,
        hasFreeShipping: false,
        quantity: 1
      });
    });
  });
  describe("settotalPrice() tests", function () {
    it("Should return an array", function () {
      expect(Array.isArray(settotalPrice(shoppingBasket))).toBe(true);
    });
    it("Should not modify original array of objects", function () {
      expect(settotalPrice(shoppingBasket)).not.toStrictEqual(shoppingBasket);
    });
    it("Should add a totalPrice key to each object", function () {
      settotalPrice(shoppingBasket).forEach(function (item) {
        expect(item).toHaveProperty("totalPrice");
      });
    });
    it("Should accurately total each shopping item", function () {
      expect(settotalPrice(shoppingBasket).sort(function (a, b) {
        return a.price - b.price;
      })).toStrictEqual(shoppingBasketWithTotals.sort(function (a, b) {
        return a.price - b.price;
      }));
    });
  });
  describe("totalShoppingBasket() tests", function () {
    it("Should return a number", function () {
      expect(_typeof(totalShoppingBasket(shoppingBasketWithTotals))).toBe("number");
    });
    it("Should accurately total all objects", function () {
      expect(totalShoppingBasket(shoppingBasketWithTotals)).toBe(185);
    });
  });
});
describe("getImportantKeys() tests", function () {
  var mealsArr = [{
    id: 10,
    name: "Tikka Masala",
    ingredients: ["rice", "tomato", "chicken", "curry powder"],
    country: "India",
    timeStamp: 1612177931682,
    userCreated: "johnnyboiXX"
  }, {
    id: 11,
    name: "Grilled Cheese",
    ingredients: ["bread", "cheese", "butter"],
    country: "America",
    timeStamp: 1612112931682,
    userCreated: "glorfindelrox"
  }, {
    id: 12,
    name: "Gourmet Burger",
    ingredients: ["beef mince", "onion", "mustard", "salt", "pepper"],
    country: "America",
    timeStamp: 1612177917682,
    userCreated: "iAmTonyHawk"
  }];
  it("Should not modify the original array", function () {
    expect(getImportantKeys(mealsArr)).not.toStrictEqual(mealsArr);
  });
  it("Should remove unneeded keys from the objects", function () {
    expect(getImportantKeys(mealsArr)[0]).toStrictEqual({
      id: 10,
      name: "Tikka Masala",
      ingredients: ["rice", "tomato", "chicken", "curry powder"],
      country: "India"
    });
  });
  it("Should alter every item in the array", function () {
    expect(getImportantKeys(mealsArr)[0]).not.toStrictEqual([{
      id: 10,
      name: "Tikka Masala",
      ingredients: ["rice", "tomato", "chicken", "curry powder"],
      country: "India"
    }, {
      id: 11,
      name: "Grilled Cheese",
      ingredients: ["bread", "cheese", "butter"],
      country: "America"
    }, {
      id: 12,
      name: "Gourmet Burger",
      ingredients: ["beef mince", "onion", "mustard", "salt", "pepper"],
      country: "America"
    }]);
  });
});
describe("setImportantKeys() tests", function () {
  var mealsArr = [{
    id: 10,
    name: "Tikka Masala",
    ingredients: ["rice", "tomato", "chicken", "curry powder"],
    country: "India",
    timeToCook: 60
  }, {
    id: 11,
    name: "Grilled Cheese",
    ingredients: ["bread", "cheese", "butter"],
    country: "America",
    isVegetarian: true
  }, {
    id: 12,
    name: "Gourmet Burger",
    ingredients: ["beef mince", "onion", "mustard", "salt", "pepper"],
    country: "America",
    isVegetarian: false,
    timeToCook: 45
  }];
  it("Should not modify the original array", function () {
    expect(setImportantKeys(mealsArr)).not.toStrictEqual(mealsArr);
  });
  it("Should add missing keys", function () {
    expect(setImportantKeys(mealsArr)[0]).toHaveProperty("isVegetarian");
    expect(setImportantKeys(mealsArr)[1]).toHaveProperty("timeToCook");
  });
  it("should not modify existing values", function () {
    expect(setImportantKeys(mealsArr)[0].timeToCook).toBe(60);
    expect(setImportantKeys(mealsArr)[1].isVegetarian).toBe(true);
    expect(setImportantKeys(mealsArr)[2].timeToCook).toBe(45);
    expect(setImportantKeys(mealsArr)[2].isVegetarian).toBe(false);
  });
  it("Should match this exact array of objects", function () {
    expect(setImportantKeys(mealsArr)).toStrictEqual([{
      id: 10,
      name: "Tikka Masala",
      ingredients: ["rice", "tomato", "chicken", "curry powder"],
      country: "India",
      isVegetarian: false,
      timeToCook: 60
    }, {
      id: 11,
      name: "Grilled Cheese",
      ingredients: ["bread", "cheese", "butter"],
      country: "America",
      isVegetarian: true,
      timeToCook: 15
    }, {
      id: 12,
      name: "Gourmet Burger",
      ingredients: ["beef mince", "onion", "mustard", "salt", "pepper"],
      country: "America",
      isVegetarian: false,
      timeToCook: 45
    }]);
  });
});
xdescribe("cleanCocktailResponseData() tests", function () {
  var mockCocktailData = [{
    idDrink: 12768,
    strDrink: "Frappé",
    strCategory: "Coffee / Tea",
    strAlcoholic: "Non alcoholic",
    strInstructions: "Mix together. Blend at highest blender speed for about 1 minute. Pour into a glass and drink with a straw. Notes: This works best if everything is cold (if you make fresh coffee, mix it with the milk and let it sit in the fridge for 1/2 hour. If it is not frothy, add more milk, or even just some more milk powder. The froth gradually turns to liquid at the bottom of the glass, so you will find that you can sit and drink this for about 1/2 hour, with more iced coffee continually appearing at the bottom. Very refreshing.",
    strIngredient1: "Coffee",
    strIngredient2: "Milk",
    strIngredient3: "Sugar",
    strIngredient4: null,
    strIngredient5: null,
    strIngredient6: null
  }, {
    idDrink: 11422,
    strDrink: "Godchild",
    strCategory: "Ordinary Drink",
    strAlcoholic: "Alcoholic",
    strInstructions: "Shake all ingredients well with cracked ice, strain into a champagne flute, and serve.",
    strIngredient1: "Vodka",
    strIngredient2: "Amaretto",
    strIngredient3: "Heavy cream",
    strIngredient4: null,
    strIngredient5: null,
    strIngredient6: null
  }, {
    idDrink: 11288,
    strDrink: "Cuba Libre",
    strCategory: "Ordinary Drink",
    strAlcoholic: "Alcoholic",
    strInstructions: "Build all ingredients in a Collins glass filled with ice. Garnish with lime wedge.",
    strIngredient1: "Light rum",
    strIngredient2: "Lime",
    strIngredient3: "Coca-Cola",
    strIngredient4: null,
    strIngredient5: null,
    strIngredient6: null
  }, {
    idDrink: 12101,
    strDrink: "Rusty Nail",
    strCategory: "Ordinary Drink",
    strAlcoholic: "Alcoholic",
    strInstructions: "Pour the Scotch and Drambuie into an old-fashioned glass almost filled with ice cubes. Stir well. Garnish with the lemon twist.",
    strIngredient1: "Scotch",
    strIngredient2: "Drambuie",
    strIngredient3: "Lemon peel",
    strIngredient4: null,
    strIngredient5: null,
    strIngredient6: null
  }];
  it("Should not mutate the original array", function () {
    expect(cleanCocktailResponseData(mockCocktailData)).not.toStrictEqual(mockCocktailData);
  });
  it("Should remove old keys", function () {
    expect(cleanCocktailResponseData(mockCocktailData)[0]).not.toHaveProperty("idDrink");
    expect(cleanCocktailResponseData(mockCocktailData)[0]).not.toHaveProperty("strDrink");
    expect(cleanCocktailResponseData(mockCocktailData)[0]).not.toHaveProperty("strCategory");
    expect(cleanCocktailResponseData(mockCocktailData)[0]).not.toHaveProperty("strAlcholohic");
    expect(cleanCocktailResponseData(mockCocktailData)[0]).not.toHaveProperty("strInstructions");
    expect(cleanCocktailResponseData(mockCocktailData)[0]).not.toHaveProperty("strIngredients1");
    expect(cleanCocktailResponseData(mockCocktailData)[0]).not.toHaveProperty("strIngredients2");
    expect(cleanCocktailResponseData(mockCocktailData)[0]).not.toHaveProperty("strIngredients3");
    expect(cleanCocktailResponseData(mockCocktailData)[0]).not.toHaveProperty("strIngredients4");
    expect(cleanCocktailResponseData(mockCocktailData)[0]).not.toHaveProperty("strIngredients5");
    expect(cleanCocktailResponseData(mockCocktailData)[0]).not.toHaveProperty("strIngredients6");
  });
  it("Should rename keys", function () {
    expect(cleanCocktailResponseData(mockCocktailData)[0]).toHaveProperty("id");
    expect(cleanCocktailResponseData(mockCocktailData)[0]).toHaveProperty("drink");
    expect(cleanCocktailResponseData(mockCocktailData)[0]).toHaveProperty("category");
    expect(cleanCocktailResponseData(mockCocktailData)[0]).toHaveProperty("alcoholic");
    expect(cleanCocktailResponseData(mockCocktailData)[0]).toHaveProperty("instructions");
    expect(cleanCocktailResponseData(mockCocktailData)[0]).toHaveProperty("ingredients");
  });
  it("Should add an array for the ingredients", function () {
    expect(Array.isArray(cleanCocktailResponseData(mockCocktailData)[0].ingredients)).toBe(true);
  });
  it("Should match given structure", function () {
    expect(cleanCocktailResponseData(mockCocktailData)).toStrictEqual([{
      id: 12768,
      drink: "Frappé",
      category: "Coffee / Tea",
      alcoholic: "Non alcoholic",
      instructions: "Mix together. Blend at highest blender speed for about 1 minute. Pour into a glass and drink with a straw. Notes: This works best if everything is cold (if you make fresh coffee, mix it with the milk and let it sit in the fridge for 1/2 hour. If it is not frothy, add more milk, or even just some more milk powder. The froth gradually turns to liquid at the bottom of the glass, so you will find that you can sit and drink this for about 1/2 hour, with more iced coffee continually appearing at the bottom. Very refreshing.",
      ingredients: ["Coffee", "Milk", "Sugar"]
    }, {
      id: 11422,
      drink: "Godchild",
      category: "Ordinary Drink",
      alcoholic: "Alcoholic",
      instructions: "Shake all ingredients well with cracked ice, strain into a champagne flute, and serve.",
      ingredients: ["Vodka", "Amaretto", "Heavy cream"]
    }, {
      id: 11288,
      drink: "Cuba Libre",
      category: "Ordinary Drink",
      alcoholic: "Alcoholic",
      instructions: "Build all ingredients in a Collins glass filled with ice. Garnish with lime wedge.",
      ingredients: ["Light rum", "Lime", "Coca-Cola"]
    }, {
      id: 12101,
      drink: "Rusty Nail",
      category: "Ordinary Drink",
      alcoholic: "Alcoholic",
      instructions: "Pour the Scotch and Drambuie into an old-fashioned glass almost filled with ice cubes. Stir well. Garnish with the lemon twist.",
      ingredients: ["Scotch", "Drambuie", "Lemon peel"]
    }]);
  });
});