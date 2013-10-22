this.LongLibraryName = {};

var LongLibraryName = (thingWereChanging.LongLibraryName || {});

LongLibraryName.func1 = function () {
  console.log("hi");// do work
}

var a = 3
var this.LongLibraryName.func2 = function () {
	console.log(a);
  func1();
  func1();
  func1();
}

(function (thingWereChanging) {

})(this);

function a (){
	console.log(root.LongLibraryName.func2())
}

a.apply(cat, args)