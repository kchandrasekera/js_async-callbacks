(function(root) {
	var Hanoi = root.Hanoi = (root.Hanoi || {});

	var Game = Hanoi.Game = function () {
		this.board = new Board();
	}

	Game.prototype.loop = function () {
		this.board.show();
		var that = this;
		this.promptMove(function (response) {
			that.board.move(response[0],response[1]);
			if (that.board.won()) {
				READER.close();
				console.log("You won!");
			}
			else {
				that.loop();
			}
		});
	}

	Game.prototype.promptMove = function (callback) {
		READER.question("What is your move?", function (response) {
			var arr = response.split(",");
			arr[0] = parseInt(arr[0]);
			arr[1] = parseInt(arr[1]);
			callback(arr);
		});
	}


	var Board = Hanoi.Board = function() {
		this.piles = [[4,3,2,1],[],[]];
	}

	Board.prototype.won = function () {
		return (this.piles[1].length === 4) || (this.piles[2].length === 4);
	}

	Board.prototype.show = function() {
		console.log("*********");
		console.log(this.piles);
		console.log("*********");
	}


	Board.prototype.move = function(pileA, pileB) {
		console.log(this);
		if (this.piles[pileA].length === 0) {
			console.log("Empty Pile");
		}
		else if (this.piles[pileA].slice(-1)[0] > this.piles[pileB].slice(-1)[0]){
			console.log("Illegal Move");
		} else {
			this.piles[pileB].push(this.piles[pileA].pop());
		}
	}


})(this);


var readline = require('readline');
var READER = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

game = new this.Hanoi.Game();
game.loop();