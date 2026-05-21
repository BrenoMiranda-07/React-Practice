export default function DoubleDice() {
    const num1 = Math.floor(Math.random() * 3) + 1;
    const num2 = Math.floor(Math.random() * 3) + 1;
    const IsWinner = num1 === num2;
    const result = IsWinner ? "You Win!" : "You Lose!";
    const styles = { color: IsWinner ? "green" : "red" };
    return (
        <div className="DoubleDice" style={styles}>
            <p>Match The Dice!</p>
            <p>{result}</p>
            <p>Dice 1: {num1}</p>
            <p>Dice 2: {num2}</p>
        </div>
    )
}