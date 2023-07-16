import Player from "./Player";
import Dice from "./Dice";

export default function SidePanel() {
    return (
        <div className="side-panel">
            <div className="player-container">
                <Player />
                <Player isCurrentPlayer={true} />
                <Player />
                <Player />
            </div>
            <Dice />
        </div>
    );
}