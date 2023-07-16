export default class Board {
    static NUMBER_OF_SHARED_SPACES = 45;
  
    constructor() {
      this.sharedSpaces = Array(Board.NUMBER_OF_SHARED_SPACES).fill(null);
    }
  
    getSpace(position) {
      return this.sharedSpaces[position - 1];
    }
  
    setSpace(position, piece) {
      this.sharedSpaces[position - 1] = piece;
    }
  
    clearSpace(position) {
      this.sharedSpaces[position - 1] = null;
    }
  }