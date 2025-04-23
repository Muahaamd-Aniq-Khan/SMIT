let score = 0;
let difficulty = 'hard';
let correctColor = '';
let numOptions = 6;

function generateColor() {
  const r = Math.floor(Math.random() * 256);
  const g = Math.floor(Math.random() * 256);
  const b = Math.floor(Math.random() * 256);
  return `rgb(${r}, ${g}, ${b})`;
}

function resetGame() {
  const grid = document.getElementById("colorGrid");
  grid.innerHTML = "";
  document.getElementById("message").textContent = "";

  numOptions = difficulty === 'easy' ? 3 : 6;

  const colors = Array.from({ length: numOptions }, generateColor);
  correctColor = colors[Math.floor(Math.random() * numOptions)];
  document.getElementById("targetColor").textContent = correctColor.toUpperCase();

  colors.forEach(color => {
    const box = document.createElement("div");
    box.className = "color-box";
    box.style.backgroundColor = color;
    box.onclick = () => checkAnswer(color, box);
    grid.appendChild(box);
  });
}

function checkAnswer(selectedColor, box) {
  if (selectedColor === correctColor) {
    document.getElementById("message").textContent = "🎉 Correct!";
    document.getElementById("message").style.color = "green";
    score++;
    document.getElementById("score").textContent = score;

    const boxes = document.querySelectorAll(".color-box");
    boxes.forEach(b => b.style.backgroundColor = correctColor);
  } else {
    document.getElementById("message").textContent = "❌ Try Again!";
    document.getElementById("message").style.color = "red";
    box.style.visibility = "hidden";
    score = Math.max(0, score - 1);
    document.getElementById("score").textContent = score;
  }
}

function setDifficulty(level) {
  difficulty = level;
  document.querySelectorAll(".controls button").forEach(btn => btn.classList.remove("active"));
  document.querySelector(`button[onclick="setDifficulty('${level}')"]`).classList.add("active");
  resetGame();
}

window.onload = resetGame;
