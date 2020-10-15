/**
 * webpp handler
 */
function doGet(e) {  
    if (e.parameter['settings'] != null) {    
      var html = HtmlService.createHtmlOutputFromFile('SettingsPage');
      return html.setTitle('Scheduler Google Calendar Settings');
    } else {
      return HtmlService.createHtmlOutput('');
    }
  }
  
  
  function createSettingsUrl() {
    return ScriptApp.getService().getUrl()+'?settings';
  }