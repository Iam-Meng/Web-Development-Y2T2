import React from "react";

function Statistic({ scores }) {
    if (!scores || scores.length === 0) return null;
    const values = scores.map((r) => r.score);
    const sum = values.reduce((a, b) => a + b, 0);
    const avg = sum / values.length;
    const min = Math.min(...values);
    const max = Math.max(...values);
    return (
        <div className="stats neon">
            <h2>Statistics</h2>
            <p>Average: {avg.toFixed(2)}</p>
            <p>Lowest: {min}</p>
            <p>Highest: {max}</p>
        </div>
    );
}

export default Statistic;