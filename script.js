const canvas = document.getElementById("gameCanvas");
const ctx = canvas.getContext("2d");
const snake = [
    { x: 290, y: 290 },
    { x: 270, y: 290 }
];

ctx.shadowColor = "#39ff14";
ctx.shadowBlur = 10;

ctx.fillStyle = "#39ff14";

for (let i = 0; i < snake.length; i++) {

    ctx.fillRect(snake[i].x, snake[i].y, 20, 20);
}

let direction = "right";


setInterval(() => {

    ctx.clearRect(0, 0, 600, 600);

    const oldHeadx = snake[0].x;



    if (direction === "right") {
        snake[0].x += 10;
        snake[1].x = oldHeadx;

    }
    for (let i = 0; i < snake.length; i++) {
        ctx.fillRect(snake[i].x, snake[i].y, 20, 20);
        }
        
    }, 100);
