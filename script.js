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
ctx.fillRect(snake[1].x, snake[1].y, 20, 20);


for (let i = 0; i < snake.length; i++) {

    ctx.fillRect(snake[i].x, snake[i].y, 20, 20);
}

let direction = "right";
    if (direction === "right") {
        snake[0].x +=10;
}

setInterval(() => {
    if (direction === "right") {
        snake[0].x += 10;

        }
        
    }, 100);
