export default class Pawn {
    constructor(color) {
        this.color = color;
        this.position = 0;
        this.pastSteps = 0;
        this.finished = false;
    }

    moveTo(newPosition) {
        this.currentPosition = newPosition;
    }

    hasArrived() {
        return this.currentPosition == 57;
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