function formatTitle() {
  let product = " wireless headphones PRO ";

  product = product.trim();

  product = product.toLowerCase();

  product = product
    .split(" ")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");

  product = product.replace("Pro", "Pro Edition");

  document.getElementById("output").innerHTML = `
    <p><strong>Cleaned Title:</strong> ${product}</p>
    <p><strong>Length:</strong> ${product.length}</p>
  `;
}
