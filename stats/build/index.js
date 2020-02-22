"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var MatchReader_1 = require("./MatchReader");
var MatchResult_1 = require("./MatchResult");
var CsvFileReader_1 = require("./CsvFileReader");
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
var dataReader = new CsvFileReader_1.CsvFileReader('football.csv');
var matchReader = new MatchReader_1.MatchReader(dataReader);
matchReader.load();
var manUnitedWins = 0;
for (var _i = 0, _a = matchReader.matches; _i < _a.length; _i++) {
    var match = _a[_i];
    if (match[1] === 'Man United' && match[5] === MatchResult_1.MatchResult.HomeWin) {
        manUnitedWins++;
    }
    else if (match[2] === 'Man United' && match[5] === MatchResult_1.MatchResult.AwayWin) {
        manUnitedWins++;
    }
}
console.log(manUnitedWins);
