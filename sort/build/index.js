"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var NumbersCollection_1 = require("./NumbersCollection");
var CharactersCollection_1 = require("./CharactersCollection");
var LinkedList_1 = require("./LinkedList");
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
numbersCollection.sort();
console.log(numbersCollection.data);
var charactersCollection = new CharactersCollection_1.CharactersCollection('bbXXZsdasw');
charactersCollection.sort();
console.log(charactersCollection.data);
var linkedList = new LinkedList_1.LinkedList();
linkedList.add(90);
linkedList.add(800);
linkedList.add(1);
linkedList.sort();
linkedList.print();
