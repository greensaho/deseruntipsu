const input = document.querySelector("input");

input.addEventListener("keypress", logKey);

function logKey(e) {
  console.log(`Key pressed: ${e.key}`);
}
