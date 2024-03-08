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
    y: 10*box
}

function drawGame() {
    ctx.drawImage(ground, 0, 0);
    ctx.drawImage(foodImg, food.x, food.y);

    ctx.fillStyle = "green";
    ctx.fillRect(snake[0].x, snake[0].y, box, box);
}

let game = setInterval(drawGame, 10);