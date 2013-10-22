var Clock = function () {
	this.date = new Date();
}

Clock.prototype.update = function () {
	this.date = new Date( Date.parse(this.date) + 1*1000);
	this.display();
}

Clock.prototype.display = function () {
  var seconds = this.date.getSeconds();
  var minutes = this.date.getMinutes();
  var hours = this.date.getHours();
	console.log( hours + ":" + minutes + ":" + seconds);
}

clock = new Clock()

setInterval(clock.update.bind(clock), 1 * 1000);
