var pageMod = require("sdk/page-mod");
var self = require("sdk/self");

pageMod.PageMod({
  include: "*",
  contentScriptFile: self.data.url("jquery-1.10.2.min.js"),
  contentScriptFile: self.data.url("load.js") 
});
