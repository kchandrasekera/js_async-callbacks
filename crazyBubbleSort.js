var readline = require('readline');
var READER = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

var askLessThan = function (el1,el2,callback) {
	READER.question("Is " + el2 + " less than " + el1 + "?", function (response) {
		callback(response);
	});
}

var crazyBubbleSort = function (arr, sortCompletionCallback) {
	performSortPass(arr, 0, false, function(madeAnySwaps) {
		if (madeAnySwaps) {
			crazyBubbleSort(arr, sortCompletionCallback);
		}
		else {
			READER.close();
			sortCompletionCallback(arr);
		}
	})
}

var performSortPass = function (arr, i, madeAnySwaps, callback) {
	if (i < arr.length - 1) {
			askLessThan(arr[i],arr[i+1],function(response){
				if (response === "yes") {
					var temp = arr[i+1];
					arr[i+1] = arr[i];
					arr[i] = temp;
					performSortPass(arr, i+1, true , callback);
				}
				else {
					performSortPass(arr, i+1, madeAnySwaps, callback);
				}
			});
	}
	else {
		callback(madeAnySwaps);
	}
}


crazyBubbleSort([34,11, 2], function(arr) {console.log("The array is sorted... " + arr);})