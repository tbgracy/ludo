import Square from "./Square";

export default function SquareContainer(){
    const squares = [];

    for (let i = 0; i < 18; i++){
        squares.push(
            <Square key={i}/>
        );
    }

    return <div className="square-container">
        {squares}
    </div>
}