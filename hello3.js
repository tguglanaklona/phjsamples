console.log('Hello, world!');
var page = require('webpage').create();
page.open('http://www.geographycollector.com/', function() {
	page.render('example.png');
	console.log("Success");
});

phantom.exit();



