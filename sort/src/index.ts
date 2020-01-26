import { Sorter } from './Sorter';
import { NumbersCollection } from './NumbersCollection';
import { CharactersCollection } from './CharactersCollection';

const numbersCollection = new NumbersCollection([
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

const charactersCollection = new CharactersCollection('bbXXZsdasw');

const sorter = new Sorter(numbersCollection);
sorter.sort();
console.log(numbersCollection.data);


const sorterChars = new Sorter(charactersCollection);
sorterChars.sort();
console.log(charactersCollection.data);
