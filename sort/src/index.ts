import { Sorter } from './Sorter';
import { NumbersCollection } from './NumbersCollection';

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
const sorter = new Sorter(numbersCollection);
sorter.sort();
console.log(numbersCollection.data);
