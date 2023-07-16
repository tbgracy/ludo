import { useState } from "react";

export default function Dice({onClick}) {
    const [activeDice, setActiveDice] = useState(1);

    function onDiceClick() {
        let number = Math.floor(Math.random() * 6) + 1;
        setActiveDice(number);
        onClick(number);
    }

    const dices = [];
    for (let i = 0; i < 6; i++) {
        dices.push(<div className={`dice dice-${i + 1} ${activeDice === i + 1 ? 'active' : ''}`} key={i}>
            {Array.from({ length: i + 1 }, (_, i) => <span className="dot" key={i}></span>)}
        </div>);
    }

    return <div className="dice-container" onClick={onDiceClick}>{dices}</div>
}