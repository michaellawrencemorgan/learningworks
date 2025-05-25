function updateCredits() {
  const totalCompleted = parseInt(prompt("Enter total completed credits:"), 10);
  const previousLP = parseInt(prompt("Enter previous LP credits:"), 10);
  const currentLP = parseInt(prompt("Enter current LP assigned credits:"), 10);
  const remaining = 180 - totalCompleted;

  document.getElementById("totalCompleted").textContent = totalCompleted;
  document.getElementById("previousLP").textContent = previousLP;
  document.getElementById("currentLP").textContent = currentLP;
  document.getElementById("remaining").textContent = remaining;
}
