const input = document.getElementById("input");
const count = document.getElementById("count");

input.addEventListener("input", () => {
  count.textContent = input.value.length;
});
