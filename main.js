var customModule = (function(){
	console.log('development version custom module loaded!');
	
	var self = this;

	self.sayHello = function() {
		console.log('Hello!!');
	};

	return self;
})()