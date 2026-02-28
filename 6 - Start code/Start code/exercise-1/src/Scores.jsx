import * as Score from "./data.js";
import Statistic from "./Statistic";

function Scores({ courseName, courseResults }) {
    const results = courseResults || Score.JAVA_RESULTS;

    return (
        <main className="scores-container">
            <div className="scores">
                <h1>{courseName}</h1>
                <table>
                    <thead>
                        <tr>
                            <th>First name</th>
                            <th>Last name</th>
                            <th>Score</th>
                        </tr>
                    </thead>
                    <tbody>
                        {results.map((r, i) => (
                            <tr key={`${r.firstName}-${r.lastName}-${i}`}>
                                <td>{r.firstName}</td>
                                <td>{r.lastName}</td>
                                {warningScore(r.score)}
                            </tr>
                        ))}
                    </tbody>
                </table>
                {/* statistics panel inserted below table */}
                <Statistic scores={results} />
            </div>
        </main>
    );
}

function warningScore(score) {
    return score < 50 ? <td className="warning">{score}</td> : <td>{score}</td>;
}

export default Scores;