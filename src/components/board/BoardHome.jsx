import homeBlue from "/src/assets/home_blue.png";
import homeGreen from "../../assets/home_green.png";
import homeRed from "../../assets/home_red.png";
import homeYellow from "../../assets/home_yellow.png";


export default function BoardHome({ color, pawns }) {
    const images = {
        'blue': homeBlue,
        'green': homeGreen,
        'red': homeRed,
        'yellow': homeYellow,
    };

    return (
        <div className="home">
            {pawns}
        </div>
    );
}