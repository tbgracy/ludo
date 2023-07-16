export default function Square({number, pieces, color}) {

    const className = "square " + color;

    return <div className={className}>{pieces}</div>;
}