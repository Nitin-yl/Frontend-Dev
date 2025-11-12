function oddEvenAnalyzer() {
  let numbers = [];
  let results = [];

  for (let i = 1; i <= 30; i++) {
    numbers.push(i);

    if (i % 3 === 0 && i % 5 === 0) {
      results.push("FizzBuzz");
    } else if (i % 2 === 0) {
      results.push("Even");
    } else {
      results.push("Odd");
    }
  }

  document.getElementById("output").innerHTML = `
    <p><strong>Numbers:</strong> [ ${numbers.join(", ")} ]</p>
    <p><strong>Results:</strong> [ ${results.join(", ")} ]</p>
  `;
}
