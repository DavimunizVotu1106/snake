const canvas = document.getElementById("gameCanvas");
const ctx = canvas.getContext("2d");
const snake = [
    { x: 290, y: 290 },
    { x: 270, y: 290 }
];

ctx.shadowColor = "#39ff14";
ctx.shadowBlur = 10;

ctx.fillStyle = "#39ff14";

ctx.fillRect(snake[0].x, snake[0].y, 20, 20);