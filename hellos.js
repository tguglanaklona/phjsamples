console.log('Hello, world!');
var page = require('webpage').create();
page.open('http://www.github.com/', function() {
	page.render('examples.png');
	console.log("Success");
	phantom.exit();
});





