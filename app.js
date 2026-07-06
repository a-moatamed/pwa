let count = Number(localStorage.getItem("count")) || 0;

document.getElementById("green").addEventListener("click", () => {
    count++;
    localStorage.setItem("count", count);
});

document.getElementById("red").addEventListener("click", () => {
    document.getElementById("result").textContent =
        `Green button clicked ${count} times`;
});