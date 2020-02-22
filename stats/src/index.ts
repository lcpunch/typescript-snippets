import { MatchReader } from './MatchReader';
import { MatchResult } from './MatchResult';
import { CsvFileReader } from './CsvFileReader';

// const reader = new MatchReader('football.csv');
// reader.read(); 

// let manUnitedWins = 0;

// for (let match of reader.data) {

//   if(match[1] === 'Man United' && match[5] === MatchResult.HomeWin) {
//     manUnitedWins++;
//   } else if(match[2] === 'Man United' && match[5] === MatchResult.AwayWin) {
//     manUnitedWins++;
//   }
// }

// console.log(manUnitedWins);

const dataReader = new CsvFileReader('football.csv');

const matchReader = new MatchReader(dataReader);

matchReader.load();

let manUnitedWins = 0;

for (let match of matchReader.matches) {

  if(match[1] === 'Man United' && match[5] === MatchResult.HomeWin) {
    manUnitedWins++;
  } else if(match[2] === 'Man United' && match[5] === MatchResult.AwayWin) {
    manUnitedWins++;
  }
}
  
  console.log(manUnitedWins);
  