import Board from './Board';
import Player from './Player';

export default class Game {
    constructor() {
        this.board = new Board();
        this.players = [];
        this.currentPlayerIndex = 0;
        this.addPlayers();
    }

    addPlayers() {
        this.players.push(new Player('blue'));
        this.players.push(new Player('red'));
        this.players.push(new Player('green'));
        this.players.push(new Player('yellow'));
    }

    getCurrentPlayer() {
        return this.currentPlayerIndex;
    }

    nextTurn() {
        if (this.currentPlayerIndex == 3){
            this.currentPlayerIndex = 0;
        } else {
            this.currentPlayerIndex += 1;
        }
    }

    movePiece(pieceIndex, steps) {
        const piece = this.players[this.currentPlayerIndex].pieces[pieceIndex];
        if (!piece.isFinished()) {
            const newPosition = piece.getPosition() + steps;
            if (newPosition <= Board.NUMBER_OF_SHARED_SPACES) {
                piece.setPosition(newPosition);
                if (piece.getPosition() === Board.NUMBER_OF_SHARED_SPACES) {
                    piece.setFinished(true);
                }
                return true;
            } else {
                console.log('invalid move')
            }
        }
        return false;
    }

    isGameOver() {
        return this.players.some(player => player.hasWon());
    }
}