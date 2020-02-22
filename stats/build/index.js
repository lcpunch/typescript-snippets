"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var MatchReader_1 = require("./MatchReader");
var Summary_1 = require("./Summary");
var dataReader = MatchReader_1.MatchReader.fromCsv('football.csv');
dataReader.load();
var summary = Summary_1.Summary.winsAnalysisWithHtmlReport('Man United');
summary.buildAndPrintReport(dataReader.matches);
