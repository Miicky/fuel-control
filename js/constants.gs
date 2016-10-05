var spreadSheetId = "1CoxJSw_5GoVkaiX7pHWPop0xiMWeyD5viPQ3ZcmeKnk";
var spreadSheet = SpreadsheetApp.openById(spreadSheetId);
var loggerSheet = spreadSheet.getSheetByName('Logger');
var currentSheet = spreadSheet.getSheetByName('Current');
