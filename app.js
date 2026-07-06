let count = Number(localStorage.getItem("count")) || 0;

const green = document.getElementById("green");
const red = document.getElementById("red");
const result = document.getElementById("result");

green.addEventListener("click", () => {
    count++;
    localStorage.setItem("count", count);
});

red.addEventListener("click", () => {
    result.textContent = `Green button clicked ${count} times`;
});