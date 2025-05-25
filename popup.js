document.addEventListener('DOMContentLoaded', function () {
  document.getElementById('updateBtn').addEventListener('click', updateCredits);
});

function updateCredits() {
  const totalCompleted = parseInt(prompt("Enter total completed credits:"), 10);
  const previousLP = parseInt(prompt("Enter previous LP credits:"), 10);
  const currentLP = parseInt(prompt("Enter current LP assigned credits:"), 10);
  const remaining = 180 - totalCompleted;

  document.getElementById("totalCompleted").textContent = isNaN(totalCompleted) ? 0 : totalCompleted;
  document.getElementById("previousLP").textContent = isNaN(previousLP) ? 0 : previousLP;
  document.getElementById("currentLP").textContent = isNaN(currentLP) ? 0 : currentLP;
  document.getElementById("remaining").textContent = isNaN(remaining) ? 180 : remaining;
}
