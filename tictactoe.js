(function (root) {
	var TicTacToe = root.TicTacToe = (root.TicTacToe || {});

	var Game = TicTacToe.Game = function() {
		this.board = new Board();
	}

	var Board = TicTacToe.Board = function () {
		this.grid = [["_","_","_"],["_","_","_"],["_","_","_"]];
	}

	Game.prototype.loop = function (turn) {
		this.board.show();
		console.log("Player " + turn + "'s turn.");
		var that = this;
		this.promptMove(function (location) {
			if (that.board.empty(location)) {
				that.board.makeMove(location, turn);
				if (that.board.over()) {
					READER.close();
					that.board.show();
					console.log("Player " + turn + " Wins");
				}
				else {
					that.loop((turn === "X" ? "O" : "X"));
				}
			}
			else {
				console.log("Invalid Move!");
				that.loop(turn);
			}
		});
	}

	Game.prototype.promptMove = function(callback) {
		READER.question("Choose the square for your move.", function(response) {
			var arr = response.split(",");
			arr[0] = parseInt(arr[0]);
			arr[1] = parseInt(arr[1]);
			callback(arr);
		});
	}

	Board.prototype.show = function () {
		console.log("************");
		this.grid.forEach(function(row) {
			console.log(row);
		});
		console.log("************");
	}

	Board.prototype.empty = function(location) {
		var row = location[0];
		var col = location[1];
		return (this.grid[row][col] === "_");
	}

	Board.prototype.makeMove = function(location, turn) {
		var row = location[0];
		var col = location[1];
		this.grid[row][col] = turn;
	}

	Board.prototype.over = function() {
		return (this.rowWin() || this.colWin() || this.diagWin());
	}

	Board.prototype.checkTriples = function(triples) {
		var winningTriple = false;
		triples.forEach(function(triple) {
			if ((triple[0] === triple[1]) && (triple[1] === triple[2]) && (triple[0] !== "_")) {
				winningTriple = true;
			}
		});
		return winningTriple;
	}

	Board.prototype.rowWin = function () {
		return this.checkTriples(this.rowz());
	}

	Board.prototype.colWin = function () {
		return this.checkTriples(this.columns());
	}

	Board.prototype.diagWin = function () {
		return this.checkTriples(this.diagonals());
	}

	Board.prototype.columns = function() {
		var columns = new Array(this.grid.length);

		for (var fill = 0; fill < this.grid.length; fill++) {
			columns[fill] = new Array;
		}

		for (var i = 0; i < this.grid.length; i++) {
			for (var j = 0; j < this.grid.length; j++) {
				columns[i][j] = this.grid[j][i];
			}
		}
		return columns;
	}

	Board.prototype.rowz = function() {
		return this.grid;
	}

	Board.prototype.diagonals = function(){
		var g = this.grid;
		return [[g[0][0], g[1][1],g[2][2]],[g[2][0],g[1][1],g[0][2]]];
	}

})(this);





var readline = require('readline');
var READER = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

game = new this.TicTacToe.Game();
game.loop("x");
