
function Log({ isPlayer, isDamage, text }) {
    return (
        <section id="log" className="container">
            <h2>Battle Log</h2>
            <p className={isPlayer ? "player" : "enemy"}>
                {isDamage ? "Damage: " : "Heal: "}
                {text}
            </p>
        </section>
    );
}

export default Log;
