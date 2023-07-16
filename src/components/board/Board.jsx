import BoardHome from "./BoardHome";
import SquareContainer from "./SquareContainer";
import Arrival from "./Arrival";
import Pawn from "./Pawn";

export default function Board() {
    const pawns = {
        'blue': [
            <Pawn key={1} color={'blue'} />,
            <Pawn key={2} color={'blue'} />,
            <Pawn key={3} color={'blue'} />,
            <Pawn key={4} color={'blue'} />,
        ],
        'green': [
            <Pawn key={1} color={'green'} />,
            <Pawn key={2} color={'green'} />,
            <Pawn key={3} color={'green'} />,
            <Pawn key={4} color={'green'} />,
        ],
        'red': [
            <Pawn key={1} color={'red'} />,
            <Pawn key={2} color={'red'} />,
            <Pawn key={3} color={'red'} />,
            <Pawn key={4} color={'red'} />,
        ],
        'yellow': [
            <Pawn key={1} color={'yellow'} />,
            <Pawn key={2} color={'yellow'} />,
            <Pawn key={3} color={'yellow'} />,
            <Pawn key={4} color={'yellow'} />,
        ],
    };

    return (
        <div className="board">
            <div className="row1">
                <BoardHome color={'blue'} pawns={pawns['blue']}/>
                <SquareContainer />
                <BoardHome color={'green'} pawns={pawns['green']}/>
            </div>
            <div className="row2">
                <SquareContainer />
                <Arrival />
                <SquareContainer />
            </div>
            <div className="row3">
                <BoardHome color={'red'}  pawns={pawns['red']}/>
                <SquareContainer />
                <BoardHome color={'yellow'}  pawns={pawns['yellow']}/>
            </div>
        </div>
    );
}