"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Sorter_1 = require("./Sorter");
var NumbersCollection_1 = require("./NumbersCollection");
var numbersCollection = new NumbersCollection_1.NumbersCollection([
    2,
    1,
    10,
    2,
    4,
    90,
    54,
    32,
    20,
    77,
    12
]);
var sorter = new Sorter_1.Sorter(numbersCollection);
sorter.sort();
console.log(numbersCollection.data);
