import playerImg from '../../assets/players/man1.png';

export default function Player({isCurrentPlayer}){
    if (isCurrentPlayer == true){
        return <div className="player current">
    </div>
    } else {
        return <div className="player"></div>
    }
}