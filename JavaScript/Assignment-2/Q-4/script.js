function analyzeScores() {
  let scores = Array.from(
    { length: 8 },
    () => Math.floor(Math.random() * 71) + 30
  );

  let highest = Math.max(...scores);
  let lowest = Math.min(...scores);

  let average = scores.reduce((sum, val) => sum + val, 0) / scores.length;

  let passed = scores.filter((score) => score >= 50).length;

  let result = `
    <p><strong>Scores:</strong> [ ${scores.join(", ")} ]</p>
    <p><strong>Highest Score:</strong> ${highest}</p>
    <p><strong>Lowest Score:</strong> ${lowest}</p>
    <p><strong>Average Score:</strong> ${average.toFixed(2)}</p>
    <p><strong>Students Passed (≥50):</strong> ${passed} / ${scores.length}</p>
  `;

  document.getElementById("output").innerHTML = result;
}
