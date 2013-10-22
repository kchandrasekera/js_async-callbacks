Function.prototype.myBind = function (newThis) {
	theFunc = this
	return function () { return theFunc.apply(newThis) };
}




var Cat  = function (name) {
	this.name = name;
}

Cat.prototype.meow = function () {
	console.log("Meow, says " + this.name);
}

gizmo = new Cat("Gizmo");

function doThreeTimes(func){
	var name = "jill";
	func();
	func();
	func();
}

name = "bob";
console.log(name);

doThreeTimes(gizmo.meow);

