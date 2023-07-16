/* eslint-disable react/prop-types */
import BoardHome from "./BoardHome";
import SquareContainer from "./SquareContainer";
import Arrival from "./Arrival";
import Pawn from "./Pawn";
import Square from "./Square";

export default function Board({ board }) {

    const track = [
        [null, null, null, null, null, null, "11", "12", "13", null, null, null, null, null, null],
        [null, null, null, null, null, null, "10", "3 - 52", "14", null, null, null, null, null, null],
        [null, null, null, null, null, null, "9", "3 - 53", "15", null, null, null, null, null, null],
        [null, null, null, null, null, null, "8", "3 - 54", "16", null, null, null, null, null, null],
        [null, null, null, null, null, null, "7", "3 - 55", "17", null, null, null, null, null, null],
        [null, null, null, null, null, null, "6", "3 - 56", "18", null, null, null, null, null, null],
        ["0", "1", "2", "3", "4", "5", null, null, null, "19", "20", "21", "22", "23", "24"],
        ["51", "1 - 52", "1 - 53", "1 - 54", "1 - 55", "1 - 56", null, null, null, "2 - 56", "2 - 55", "2 - 54", "2 - 53", "2 - 52", "25"],
        ["50", "49", "48", "47", "46", "45", null, null, null, "31", "30", "29", "28", "27", "26"],
        [null, null, null, null, null, null, "44", "4 - 56", "32", null, null, null, null, null, null],
        [null, null, null, null, null, null, "43", "4 - 55", "33", null, null, null, null, null, null],
        [null, null, null, null, null, null, "42", "4 - 54", "34", null, null, null, null, null, null],
        [null, null, null, null, null, null, "41", "4 - 53", "35", null, null, null, null, null, null],
        [null, null, null, null, null, null, "40", "4 - 52", "36", null, null, null, null, null, null],
        [null, null, null, null, null, null, "39", "38", "37", null, null, null, null, null, null]
    ];


    const squares = [];

    for (let row in track) {
        squares.push([]);
        for (let cell of track[row]) {
            if (cell !== null) {
                let color = '';
                if (cell.startsWith('1 - ')){
                    color = 'blue';
                } else if (cell.startsWith('2 - ')){
                    color = 'green';
                } else if (cell.startsWith('3 - ')){
                    color = 'red';
                } else if (cell.startsWith('4 - ')){
                    color = 'yellow';
                }
                squares[row].push(
                    <Square key={cell} number={cell} color={color}/>
                )
            }
        }
    }

    var spaces1 = squares.slice(0, 6);
    var spacesMiddle = squares.slice(6, 9);
    var spaces2 = [];
    var spaces3 = [];

    for (let row of spacesMiddle){
        spaces2.push(...row.slice(0, 6));
        spaces3.push(...row.slice(6));
    }

    var spaces4 = squares.slice(9, 15);

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
                <BoardHome color={'blue'} pawns={pawns['blue']} />
                <SquareContainer spaces={spaces1} />
                <BoardHome color={'green'} pawns={pawns['green']} />
            </div>
            <div className="row2">
                <SquareContainer spaces={spaces2} />
                <Arrival />
                <SquareContainer spaces={spaces3} />
            </div>
            <div className="row3">
                <BoardHome color={'red'} pawns={pawns['red']} />
                <SquareContainer spaces={spaces4} />
                <BoardHome color={'yellow'} pawns={pawns['yellow']} />
            </div>
        </div>
    );
}