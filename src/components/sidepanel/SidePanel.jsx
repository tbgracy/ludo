import Player from "./Player";
import Dice from "./Dice";

export default function SidePanel({ onDiceRoll, turn }) {
    const players = [];
    for (let i = 0; i < 4; i++) {
        let player = turn == i ? <Player key={i} isCurrentPlayer={true} /> : <Player key={i} />
        players.push(player);
    }
    return (
        <div className="side-panel">
            <div className="player-container">
                {players}
            </div>
            <Dice onClick={onDiceRoll} />
        </div>
    );
}