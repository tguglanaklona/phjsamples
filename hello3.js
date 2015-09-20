console.log('Hello, world!');
var page = require('webpage').create();
page.open('http://geographycollector.com/', function(){
	page.render('github.png');
	console.log('Good Bye!');
	phantom.exit();
});


