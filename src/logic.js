class LudoGame {
  constructor() {
    this.board = new LudoBoard();
    this.players = [];
    this.currentPlayerIndex = 0;
    this.dice = new Dice();
  }

  addPlayer(player) {
    this.players.push(player);
  }

  rollDice() {
    return this.dice.roll();
  }

  getCurrentPlayer() {
    return this.players[this.currentPlayerIndex];
  }

  nextTurn() {
    this.currentPlayerIndex = (this.currentPlayerIndex + 1) % this.players.length;
  }

  movePiece(player, pieceIndex, steps) {
    const piece = player.getPieces()[pieceIndex];
    if (!piece.isFinished()) {
      const newPosition = piece.getPosition() + steps;
      if (newPosition <= LudoBoard.NUMBER_OF_SPACES) {
        piece.setPosition(newPosition);
        if (piece.getPosition() === LudoBoard.NUMBER_OF_SPACES) {
          piece.setFinished(true);
        }
        return true;
      }
    }
    return false;
  }

  isGameOver() {
    return this.players.some(player => player.hasWon());
  }
}

class LudoBoard {
  static NUMBER_OF_SPACES = 52;

  constructor() {
    this.spaces = Array(LudoBoard.NUMBER_OF_SPACES).fill(null);
  }

  getSpace(position) {
    return this.spaces[position - 1];
  }

  setSpace(position, piece) {
    this.spaces[position - 1] = piece;
  }

  clearSpace(position) {
    this.spaces[position - 1] = null;
  }
}

class Player {
  constructor(name, color) {
    this.name = name;
    this.color = color;
    this.pieces = [
      new GamePiece(color),
      new GamePiece(color),
      new GamePiece(color),
      new GamePiece(color)
    ];
  }

  getName() {
    return this.name;
  }

  getColor() {
    return this.color;
  }

  getPieces() {
    return this.pieces;
  }

  hasWon() {
    return this.pieces.every(piece => piece.isFinished());
  }
}

class GamePiece {
  constructor(color) {
    this.color = color;
    this.position = 0;
    this.finished = false;
  }

  getColor() {
    return this.color;
  }

  getPosition() {
    return this.position;
  }

  setPosition(position) {
    this.position = position;
  }

  isFinished() {
    return this.finished;
  }

  setFinished(finished) {
    this.finished = finished;
  }
}

class Dice {
  roll() {
    return Math.floor(Math.random() * 6) + 1;
  }
}
