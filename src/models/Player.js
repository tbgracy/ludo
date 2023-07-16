import Pawn from "./Pawn";

export default class Player {
    constructor(color) {
        this.color = color;
        this.pieces = [];
        this.money = 20000;
        for (let i = 0; i < 4; i++){
            let pawn = new Pawn(this.color);
            this.pieces.push(pawn);
        }
    }

    hasWon(){
        this.pieces.every(pawn => pawn.hasArrived);
    }
}