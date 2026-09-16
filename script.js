const canvas = document.getElementById("gameCanvas");
const ctx = canvas.getContext("2d");
const scoreElement = document.getElementById("score");
const highScoreElement = document.getElementById("highScore");
const gamerOverScreen = document.getElementById("gameOverScreen");
const finalScore = document.getElementById("finalScore");
const snake = [
    { x: 290, y: 290 },
    { x: 270, y: 290 }
];
const food = {
    x: 400,
    y: 300
};

function generateFood() {
    food.x = Math.floor(Math.random() * 60) * 10;
    food.y = Math.floor(Math.random() * 60) * 10;
    let onSnake = false;

    for (let i = 0; i < snake.length; i++) {
        if (snake[i].x === food.x && snake[i].y === food.y) {
            onSnake = true;
        }
    }

    while (onSnake) {
        food.x = Math.floor(Math.random() * 60) * 10;
        food.y = Math.floor(Math.random() * 60) * 10;

        onSnake = false;

        for (let i = 0; i < snake.length; i++) {
            if (snake[i].x === food.x && snake[i].y === food.y) {
                onSnake = true;
            }
        }
    }
}

generateFood();

ctx.shadowColor = "#39ff14";
ctx.shadowBlur = 10;

ctx.fillStyle = "#39ff14";

for (let i = 0; i < snake.length; i++) {

    ctx.fillRect(snake[i].x, snake[i].y, 20, 20);
}

let direction = "right";

let score = 0;

let gameSpeed = 100;

let highScore = 0;

highScore = localStorage.getItem("highScore") || 0;

highScoreElement.textContent = highScore;

let gameOver = false;


let gameLoop;

    function startGame() {
        gameLoop = setInterval(() => {
    
    ctx.clearRect(0, 0, 600, 600);
    ctx.shadowColor = "red";
    ctx.shadowBlur = 15;
    ctx.fillStyle = "red";
    ctx.fillRect(food.x, food.y, 20, 20);

    ctx.shadowColor = "#39ff14";
    ctx.shadowBlur = 10;
    ctx.fillStyle = "#39ff14";
    
    for (let i = snake.length - 1; i > 0; i--) {
        snake[i].x = snake[i - 1].x;
        snake[i].y = snake[i - 1].y;
    }

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
        score++;
        scoreElement.textContent = score;

    if (score % 5 === 0) {
        gameSpeed = Math.max(50, gameSpeed - 10);
        clearInterval(gameLoop);
        startGame();
    }

    
        

    if  (score > highScore) {
        highScore = score;
        highScoreElement.textContent = highScore;
        localStorage.setItem("highScore", highScore);
        }
        const tail = snake[snake.length - 1];

        snake.push({
            x: tail.x,
            y: tail.y
        });

        generateFood();
    }


    if (
        snake[0].x < 0 ||
        snake[0].x >= 600 ||
        snake[0].y < 0 ||
        snake[0].y >= 600
    ) {
        gameOver = true;
        clearInterval(gameLoop);

        gamerOverScreen.style.display = "block";
        finalScore.textContent = score;
    }

    for (let i = 1; i < snake.length; i++) {
        if (snake[0].x === snake[i].x && snake[0].y === snake[i].y) {
            gameOver = true;
            clearInterval(gameLoop);
            
            gamerOverScreen.style.display = "block";
            finalScore.textContent = score;
        }
    }

    for (let i = 0; i < snake.length; i++) {

        ctx.fillRect(snake[i].x, snake[i].y, 20, 20);

    }

}, gameSpeed);
}


document.addEventListener("keydown", (event)=>{

     if (event.key === "ArrowUp" && direction !== "down") {
        direction = "up";
     }
     if (event.key === "ArrowDown" && direction !== "up") {
        direction = "down";
     }
     if (event.key === "ArrowRight" && direction !== "left") {
        direction = "right";
     }
     if (event.key === "ArrowLeft" && direction !== "right") {
        direction = "left";
     }

});

const restartButton = document.getElementById("restartButton");
const startButton = document.getElementById("startButton");
const startScreen = document.getElementById("startScreen");

startButton.addEventListener("click", ()=>{
    startScreen.style.display = "none";
    startGame();
});

restartButton.addEventListener("click", ()=>{
    location.reload();
});