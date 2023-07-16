import { useState } from "react";

export default function Dice() {
    const [activeDice, setActiveDice] = useState(1);
    
    function onDiceClick() {
        setTimeout(() => {
            let newDice = Math.floor(Math.random() * 6) + 1;
            setActiveDice(newDice);
        }, 100);
    }

    const dices = [];
    for (let i = 0; i < 6; i++) {
        dices.push(<div className={`dice dice-${i + 1} ${activeDice === i + 1 ? 'active' : ''}`} key={i}>
            {Array.from({ length: i + 1 }, (_, i) => <span className="dot" key={i}></span>)}
        </div>);
    }

    return <div className="dice-container" onClick={onDiceClick}>{dices}</div>
}