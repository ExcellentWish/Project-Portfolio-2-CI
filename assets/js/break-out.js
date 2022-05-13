const scoreDisplay = document.querySelector('#score');
let score = 0;
const grid = document.querySelector('.break-out-grid');
const blockWidth = 100;
const blockHeight = 20;

const ballDiameter = 20;
const ballStart = [270, 40]
let ballCurrentPostion = ballStart;

const userStart = [230, 10];
let currentPostion = userStart;

class Block {
    constructor(xAxis, yAxis) {
        this.bottomLeft = [xAxis, yAxis];
        this.bottomRight = [xAxis + blockWidth, yAxis]
        this.topLeft = [xAxis, yAxis + blockHeight]
        this.topRight = [xAxis + blockWidth, yAxis + blockHeight]
    }
}
const blocks = [
    new Block(10, 270),
    new Block(120, 270),
    new Block(230, 270),
    new Block(340, 270),
    new Block(450, 270),

    new Block(10, 240),
    new Block(120, 240),
    new Block(230, 240),
    new Block(340, 240),
    new Block(450, 240),

    new Block(10, 210),
    new Block(120, 210),
    new Block(230, 210),
    new Block(340, 210),
    new Block(450, 210),

]

function addBlocks() {
    for (let i = 0; i < blocks.length; i++) {

        const block = document.createElement('div');
        block.classList.add('block');
        block.style.left = blocks[i].bottomLeft[0] + 'px';
        block.style.bottom = blocks[i].bottomLeft[1] + 'px';
        grid.appendChild(block);
    }
}
addBlocks();
//for user
const user = document.createElement('div');
user.classList.add('user');
drawUser();
grid.appendChild(user);

// draw the User
function drawUser() {
    user.style.left = currentPostion[0] + 'px';
    user.style.bottom = currentPostion[1] + 'px';
}

// move user
function moveUser(event) {
    switch (event.key) {
        case 'ArrowLeft':
            if (currentPostion[0] > 0) {
                currentPostion[0] -= 10;
                drawUser();
            }
            break;
    }
    switch (event.key) {
        case 'ArrowRight':
            if (currentPostion[0] < 470) {
                currentPostion[0] += 10;
                drawUser();
            }
            break;
    }
    switch (event.key) {
        case 'ArrowUp':
            currentPostion[1] += 1;
            drawUser();
            break;
    }
    switch (event.key) {
        case 'ArrowDown':
            currentPostion[1] -= 1;
            drawUser();
            break;
    }
}

document.addEventListener('keydown', moveUser);

function drawBall() {
    ball.style.left = ballCurrentPostion[0] + 'px';
    ball.style.bottom = ballCurrentPostion[1] + 'px'
}

const ball = document.createElement('div');
ball.classList.add('ball');
drawBall();
grid.appendChild(ball);