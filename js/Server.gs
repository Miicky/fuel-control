function doGet(e) {
  if(typeof e !== 'undefined') {
    var template = HtmlService.createTemplateFromFile('index');
    return template.evaluate()
                   .setTitle('Fuel Control')
                   .addMetaTag('viewport', 'width=device-width, height=1300, initial-scale=1, user-scalable=no,')
                   .setFaviconUrl('https://miicky.github.io/fuel-control/img/favicon.ico');
  }
}

function include(filename) {
  return HtmlService.createHtmlOutputFromFile(filename)
      .getContent();
}


function doPost(e) {
  if(typeof e !== 'undefined')
    return ContentService.createTextOutput(JSON.stringify(e.parameter));
}

function submitForm(params){
  var options = QueryStringToHash(params);
  currentSheet.appendRow([new Date(), options.warningLights, options.race, options.gasStation, options.pricePerLiter, options.amount, options.amount/options.pricePerLiter]);
}
