chrome.tabs.onCreated.addListener(function(tab) {
  var target = "chrome://apps/";

  if(tab.title == "New Tab") {
    chrome.pageAction.hide(tab.id);
    chrome.tabs.update(tab.id, {url:target});
  }
});
