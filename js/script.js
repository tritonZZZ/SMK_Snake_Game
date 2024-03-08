const cnvs = document.getElementById('game');
const ctx = cnvs.getContext('2d');

const ground = new Image();
ground.src = "img/ground.png";

function drawGame() {
    ctx.drawImage(ground, 0, 0);
}

let game = setInterval(drawGame, 10);