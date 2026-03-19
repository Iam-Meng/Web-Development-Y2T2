import React from "react";

// ----------------------------------------------------------------------------------------------------------
// HELPER FUNCTIONS
// ----------------------------------------------------------------------------------------------------------

// Generate a random values in the range {min, max}
function getRandomValue(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}

// Create an attack log
function createLogAttack(isPlayer, damage) {
  return {
    isPlayer: isPlayer,
    isDamage: true,
    text: ` takes ${damage} damages`,
  };
}

// Create a healing log
function createLogHeal(healing) {
  return {
    isPlayer: true,
    isDamage: false,
    text: ` heal ${healing} life points`,
  };
}

function Game() {
  // ----------------------------------------------------------------------------------------------------------
  // STATES & VARIABLES
  // ----------------------------------------------------------------------------------------------------------
  const [playerHealth, setPlayerHealth] = useState(100);
  const [monsterHealth, setMonsterHealth] = useState(100);
  const [battleLog, setBattleLog] = useState([]);
  const [winner, setWinner] = useState(null);
  const [round, setRound] = useState(0);

  // ----------------------------------------------------------------------------------------------------------
  // BUTTONS EVENT FUNCTIONS
  // ----------------------------------------------------------------------------------------------------------
  function handleAttack() {
    const playerDamage = getRandomValue(5, 12);
    const monsterDamage = getRandomValue(8, 15);

    setMonsterHealth((prev) => Math.max(prev - playerDamage, 0));
    setPlayerHealth((prev) => Math.max(prev - monsterDamage, 0));
    setRound((r) => r + 1);
    setBattleLog((prev) => [
      createLogAttack(false, playerDamage),
      createLogAttack(true, monsterDamage),
      ...prev,
    ]);
  }

  function handleSpecialAttack() {
    const playerDamage = getRandomValue(10, 25);
    const monsterDamage = getRandomValue(8, 15);

    setMonsterHealth((prev) => Math.max(prev - playerDamage, 0));
    setPlayerHealth((prev) => Math.max(prev - monsterDamage, 0));
    setRound((r) => r + 1);
    setBattleLog((prev) => [
      { isPlayer: false, isDamage: true, text: ` takes ${playerDamage} damages (SPECIAL ATTACK!)` },
      createLogAttack(true, monsterDamage),
      ...prev,
    ]);
  }

  function handleHeal() {
    const healing = getRandomValue(8, 20);
    const monsterDamage = getRandomValue(8, 15);

    setPlayerHealth((prev) => Math.min(Math.max(prev - monsterDamage, 0) + healing, 100));
    setRound((r) => r + 1);
    setBattleLog((prev) => [
      createLogHeal(healing),
      createLogAttack(true, monsterDamage),
      ...prev,
    ]);
  }

  function handleSurrender() {
    setWinner("Monster");
  }

  function handleNewGame() {
    setPlayerHealth(100);
    setMonsterHealth(100);
    setBattleLog([]);
    setWinner(null);
    setRound(0);
  }

  const specialAvailable = round > 0 && round % 3 === 0;

  // ----------------------------------------------------------------------------------------------------------
  // JSX FUNCTIONS
  // ----------------------------------------------------------------------------------------------------------
  useEffect(() => {
    if (playerHealth <= 0 && monsterHealth <= 0) {
      setWinner("Draw");
    } else if (playerHealth <= 0) {
      setWinner("Monster");
    } else if (monsterHealth <= 0) {
      setWinner("Player");
    }
  }, [playerHealth, monsterHealth]);

  // ----------------------------------------------------------------------------------------------------------
  // MAIN  TEMPLATE
  // ----------------------------------------------------------------------------------------------------------
  return (
    <>
      <Entity enName="Monster Health" perHP={monsterHealth} />
      <Entity enName="Your Health" perHP={playerHealth} />

      {winner && <Gameover winner={winner} onNewGame={handleNewGame} />}

      {!winner && (
        <section id="controls">
          <button onClick={handleAttack}>ATTACK</button>
          <button onClick={handleSpecialAttack} disabled={!specialAvailable}>
            SPECIAL !
          </button>
          <button onClick={handleHeal}>HEAL</button>
          <button onClick={handleSurrender}>KILL YOURSELF</button>
        </section>
      )}

      <Log entries={battleLog} />
    </>
  );
}

export default Game;
