function doGet(request) {
  return HtmlService.createTemplateFromFile('page')
      .evaluate();
}

function include(filename) {
  return HtmlService.createHtmlOutputFromFile(filename)
      .getContent();
}