CHECK! 
To use to open the default browser with specific url.browser
var url = 'http://localhost';
var start = (process.platform == 'darwin' ? 'open' : process.platform == 'win32' ? 'start' : 'xdg-open');
require('child_process').exec(start + ' ' + url);