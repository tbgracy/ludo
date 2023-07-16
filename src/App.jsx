import './styles/App.scss';
import { useState } from 'react';

import Board from './components/board/Board';
import SidePanel from './components/sidepanel/SidePanel';

import Game from './models/Game';

var game = new Game();

function App() {
  const [turn, setTurn] = useState(0);
  const [board, setBoard] = useState(game.board);

  function onDiceRoll(number) {
    // déplacer une pièce
    const move = game.movePiece(0, number);
    if (move) {
      game.board.setSpace(0);
      setBoard(game.board);
    }

    // prochain tour
    game.nextTurn();
    setTurn(game.currentPlayerIndex);
    console.log(game.board.sharedSpaces);
  }



  return (
    <main>
      <Board board={board} />
      <SidePanel turn={turn} onDiceRoll={onDiceRoll} />
    </main>
  )
}

export default App
