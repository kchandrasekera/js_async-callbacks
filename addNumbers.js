var readline = require('readline');
var READER = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

var addNumbers = function(sum, numsLeft, completionCallback) {
	if (numsLeft > 0) {
		READER.question("Type a number", function (num) {
			sum += parseInt(num);
			console.log("Sum: " + sum);
			addNumbers(sum, numsLeft - 1, completionCallback);
		})
	}
	else {
		completionCallback(sum);
		READER.close();
	}
}

addNumbers(0, 3, function(sum) {console.log("We are done. The sum is " + sum);});

