import { Sorter } from './Sorter';
import { NumbersCollection } from './NumbersCollection';
import { CharactersCollection } from './CharactersCollection';
import { LinkedList } from './LinkedList';

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
numbersCollection.sort();
console.log(numbersCollection.data);

const charactersCollection = new CharactersCollection('bbXXZsdasw');
charactersCollection.sort();
console.log(charactersCollection.data);

const linkedList = new LinkedList()

linkedList.add(90);
linkedList.add(800);
linkedList.add(1);

linkedList.sort();
linkedList.print();