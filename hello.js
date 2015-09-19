console.log('Hello, world!');
var page = require('webpage').create();
	console.log("space");
page.open('http://www.geographycollector.com', function(status) {
	console.log("Status: " + status);
	if(status === "success") {
		console.log('success');
		page.render('./example.png');
	}
	phantom.exit();
});
page.onError = function(msg, trace){
	var msgStack = ['ERROR '+msg];

	if (trace && trace.length) {
		msgStack.push('TRACE:');
		trace.forEach(function(t) {
			msgStack.push(' -> ' + t.file + ': ' + t.line + (t.function ? ' (in function "' + t.function + '")' : ''));
});
}

console.error(msgStack.join('\n'));

};
phantom.exit();
