const cnvs = document.getElementById('game');
const ctx = cnvs.getContext('2d');

const ground = new Image();
ground.src = "img/ground.png";

const foodImg = new Image();
foodImg.src = "img/food.png";

let box = 32;
let food = {
    x: Math.floor(Math.random()*17 + 1)*box,
    y: Math.floor(Math.random()*15 + 3)*box
}

let snake = [];
snake[0] = {
    x: 9*box,
    y:10*box
}

let dir;

document.addEventListener("keydown", direction);

function direction(event) {
    if(event.keyCode == 87){ 
        dir = "up";
    } else if (event.keyCode == 83){ 
        dir = "down";
    } else if (event.keyCode == 68){ 
        dir = "right";
    } else if (event.keyCode == 65){ 
        dir = "left";
    } 
}

function drawGame() {
    ctx.drawImage(ground, 0, 0);
    ctx.drawImage(foodImg, food.x, food.y);

    for(let i = 0; i < snake.length; i++){
        ctx.fillStyle = "green";
        ctx.fillRect(snake[i].x, snake[i].y, box, box);
    }
    

    let snakeX = snake[0].x;
    let snakeY = snake[0].y;

    snake.pop();

    if (dir == "right") {
        snakeX += box;
    }
    if (dir == "left") {
        snakeX -= box;
    }
    if (dir == "up") {
        snakeY -= box;
    }
    if (dir == "down") {
        snakeY += box;
    }

    let newHead = {
        x: snakeX,
        y: snakeY
    }

    snake.unshift(newHead);
}

let game = setInterval(drawGame, 100);