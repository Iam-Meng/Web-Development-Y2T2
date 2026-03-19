
function Gameover({ winner }) {
    return (<>
        <section className="container">
            <h2>Game Over!</h2>
            <h3>{winner} has won !</h3>
            <button onClick={onNewGame}>New Game</button>
        </section>
    </>);
}

export default Gameover;
