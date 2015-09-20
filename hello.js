console.log('Hello, world!');
var page = require('webpage').create();
page.open('http://www.geographycollector.com/', function() {
	page.render('example.png');
	console.log("Success");
});

page.onError = function(msg, trace){
	/*var msgStack = ['ERROR '+msg];
	if (trace && trace.length) {
		msgStack.push('TRACE:');
		trace.forEach(function(t) {
			msgStack.push(' -> ' + t.file + ': ' + t.line + (t.function ? ' (in function "' + t.function + '")' : ''));
		});
	}
	console.error(msgStack.join('\n'));
	console.log(msgStack.join('\n'));*/

	console.log(msg);
};

phantom.exit();
