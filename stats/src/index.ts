import { MatchReader } from './MatchReader';
import { Summary } from './Summary';

const dataReader = MatchReader.fromCsv('football.csv');
const summary = Summary.winsAnalysisWithHtmlReport('Man United');

dataReader.load();
summary.buildAndPrintReport(dataReader.matches);
