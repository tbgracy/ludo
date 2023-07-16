import pawnBlue from '../../assets/pawn_blue.png';
import pawnGreen from '../../assets/pawn_green.png';
import pawnYellow from '../../assets/pawn_yellow.png';
import pawnRed from '../../assets/pawn_red.png';

export default function Pawn({ color, position = 0 }) {
    const currentPosition = 0;

    const images = {
        'blue': pawnBlue,
        'green': pawnGreen,
        'red': pawnRed,
        'yellow': pawnYellow,
    };

    return (
        <img className="pawn" src={images[color]}>
        </img>
    );
}