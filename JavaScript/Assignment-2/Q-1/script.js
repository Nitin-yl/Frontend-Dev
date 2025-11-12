let bonus = 5000;
document.getElementById("bonusValue").innerText = bonus;

function calculateSalary(isPermanent) {
  let salary = 40000;

  if (isPermanent) {
    salary += bonus;
  }

  document.getElementById(
    "result"
  ).innerText = `Permanent: ${isPermanent} | Total Salary: ₹${salary}`;

  console.log("Global bonus remains unaffected:", bonus);
}
