//To use to open the default browser with specific url.browser
var start =
  process.platform == "darwin"
    ? "open"
    : process.platform == "win32"
    ? "start"
    : "xdg-open";
const fs = require("fs");
let fileContent = "";

let fileDescriptor = fs.openSync("./redirects.txt", "r");
fileContent = fs.readFileSync(fileDescriptor, "utf-8");
fs.closeSync(fileDescriptor);

let obj = {};

fileContent.split(`\n`).forEach(entry => {
  const item = entry.split(" ");
  obj[item[0]] = item[1];
});

var url = obj["bb"];
require("child_process").exec(start + " " + url);
