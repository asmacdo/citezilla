var tabs = require("sdk/tabs");
var self = require("sdk/self");

// Waits for page to finish loading and calls the script to load citelet
tabs.on('ready', function(tab) {
  worker = tab.attach({
    contentScriptFile: self.data.url("load.js")
  });
});
