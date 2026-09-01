const canvas = document.getElementById("gameCanvas");
const ctx = canvas.getContext("2d");
const snake = [
    { x: 290, y: 290 },
    { x: 270, y: 290 }
];
const food = {
    x: 400,
    y: 300
};

ctx.shadowColor = "#39ff14";
ctx.shadowBlur = 10;

ctx.fillStyle = "#39ff14";

for (let i = 0; i < snake.length; i++) {

    ctx.fillRect(snake[i].x, snake[i].y, 20, 20);
}

let direction = "right";


setInterval(() => {
    
    ctx.clearRect(0, 0, 600, 600);
    ctx.fillStyle = "red";
    ctx.fillRect(food.x, food.y, 20, 20);

    ctx.fillStyle = "#39ff14";
    

    const oldHeadX = snake[0].x;
    const oldHeadY = snake[0].y;

    if (direction === "up") {

        snake[0].y -= 10;

    }

    if (direction === "down") {

        snake[0].y += 10;

    }

    if (direction === "right") {

        snake[0].x += 10;

    }

    if (direction === "left") {

        snake[0].x -= 10;

    }

    if (snake[0].x === food.x && snake[0].y === food.y) {
        food.x = Math.floor(Math.random() * 60) * 10;
        food.y = Math.floor(Math.random() * 60) * 10;
    }


    snake[1].x = oldHeadX;
    snake[1].y = oldHeadY;

    for (let i = 0; i < snake.length; i++) {

        ctx.fillRect(snake[i].x, snake[i].y, 20, 20);

    }

}, 100);

document.addEventListener("keydown", (event)=>{

     if (event.key === "ArrowUp") {
        direction = "up";
     }
     if (event.key === "ArrowDown") {
        direction = "down";
     }
     if (event.key === "ArrowRight") {
        direction = "right";
     }
     if (event.key === "ArrowLeft") {
        direction = "left";
     }

});
