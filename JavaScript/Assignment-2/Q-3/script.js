function showMathResults() {
  let x = 16.75;

  let rounded = Math.round(x);
  let sqrt = Math.sqrt(x);
  let power = Math.pow(x, 3);
  let random = Math.floor(Math.random() * 41) + 10;

  let summary = `
    <p><strong>Given Number:</strong> ${x}</p>
    <p><strong>Rounded Value:</strong> ${rounded}</p>
    <p><strong>Square Root:</strong> ${sqrt.toFixed(3)}</p>
    <p><strong>Power (x³):</strong> ${power.toFixed(3)}</p>
    <p><strong>Random (10–50):</strong> ${random}</p>
  `;

  document.getElementById("result").innerHTML = summary;
}
