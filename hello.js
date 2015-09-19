console.log('Hello, world!');
var page = require('webpage').create();
console.log("h1");
page.open('http://www.babyblog.ru', function(status) {
	console.log("Status: " + status);
	if(status === "success") {
		console.log('success');
		page.render('./example.png');
	}
});
page.onError = function(msg, trace){
	console.log('error');
	var msgStack = ['ERROR '+msg];

	if (trace && trace.length) {
		msgStack.push('TRACE:');
		trace.forEach(function(t) {
			msgStack.push(' -> ' + t.file + ': ' + t.line + (t.function ? ' (in function "' + t.function + '")' : ''));
		});
	}

	console.error(msgStack.join('\n'));
	console.log(msgStack.join('\n'));
};
phantom.exit();
