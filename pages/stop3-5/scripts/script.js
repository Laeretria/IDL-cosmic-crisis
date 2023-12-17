const canvas = document.getElementById('tetrisCanvas');
const context = canvas.getContext('2d');

const ROWS = 16;
const COLUMNS = 10;
const BLOCK_SIZE = 30;
const EMPTY = 'black';
const FILLED = 'red'; // Color for filled lines
const cheat = document.getElementById('continue');

cheat.onclick = () => {
    window.location.href = '../../pages/stop3-6/index.html';
}

let board = [];
let currentTetrimino = null;
let currentTetriminoPosition = { x: 0, y: 0 };
let currentRotation = 0;
let gameOver = false;

// Tetrimino shapes
const tetriminoShapes = [
    [[1, 1, 1, 1]],
    [[1, 1], [1, 1]],
    [[1, 1, 1], [0, 1, 0]],
    [[1, 1, 1], [1, 0, 0]],
    [[1, 1, 1], [0, 0, 1]],
];

function init() {
    // Initialize the game board
    for (let row = 0; row < ROWS; row++) {
        board[row] = [];
        for (let col = 0; col < COLUMNS; col++) {
            board[row][col] = EMPTY;
        }
    }

    // Initialize the current Tetrimino
    spawnTetrimino();
}
function drawBlock(x, y, color) {
// Draw a block on the board
context.fillStyle = color === 'cyan' ? 'red' : 'orange'; // Change the color here
context.fillRect(x * BLOCK_SIZE, y * BLOCK_SIZE, BLOCK_SIZE, BLOCK_SIZE);
context.strokeStyle = 'white';
context.strokeRect(x * BLOCK_SIZE, y * BLOCK_SIZE, BLOCK_SIZE, BLOCK_SIZE);
}
function spawnTetrimino() {
    // Randomly select a Tetrimino shape
    const randomIndex = Math.floor(Math.random() * tetriminoShapes.length);
    currentTetrimino = tetriminoShapes[randomIndex];
    currentRotation = 0;

    // Set the initial position of the Tetrimino
    currentTetriminoPosition = { x: Math.floor(COLUMNS / 2) - 1, y: 0 };

    // Check for collision at the spawn point
    if (checkCollision()) {
        gameOver = true;
    }
}

function drawBoard() {
    // Draw the game board
    for (let row = 0; row < ROWS; row++) {
        for (let col = 0; col < COLUMNS; col++) {
            drawBlock(col, row, board[row][col]);
        }
    }

    // Draw the current Tetrimino
    if (currentTetrimino) {
        for (let row = 0; row < currentTetrimino.length; row++) {
            for (let col = 0; col < currentTetrimino[row].length; col++) {
                if (currentTetrimino[row][col]) {
                    drawBlock(
                        currentTetriminoPosition.x + col,
                        currentTetriminoPosition.y + row,
                        'cyan'
                    );
                }
            }
        }
    }
}

function drawBlock(x, y, color) {
    // Draw a block on the board
    context.fillStyle = color;
    context.fillRect(x * BLOCK_SIZE, y * BLOCK_SIZE, BLOCK_SIZE, BLOCK_SIZE);
    context.strokeStyle = 'white';
    context.strokeRect(x * BLOCK_SIZE, y * BLOCK_SIZE, BLOCK_SIZE, BLOCK_SIZE);
}

function draw() {
    // Clear the canvas and draw the board
    context.clearRect(0, 0, canvas.width, canvas.height);
    drawBoard();

    if (gameOver) {
        document.querySelector('.popup').style.display = "block";
    }
}

function handleKeyPress(event) {
    // Handle keyboard input for left, right, down, and rotation movement
    if (!gameOver) {
        switch (event.key) {
            case 'ArrowLeft':
                moveTetrimino(-1, 0);
                break;
            case 'ArrowRight':
                moveTetrimino(1, 0);
                break;
            case 'ArrowDown':
                moveTetrimino(0, 1);
                break;
            case 'ArrowUp':
                rotateTetrimino();
                break;
        }
    }

    draw();
}

function moveLeft() {
    if (!gameOver) {
        moveTetrimino(-1, 0);
        draw();
    }
}

function moveRight() {
    if (!gameOver) {
        moveTetrimino(1, 0);
        draw();
    }
}

function moveDown() {
    if (!gameOver) {
        moveTetrimino(0, 1);
        draw();
    }
}

function rotate() {
    if (!gameOver) {
        rotateTetrimino();
        draw();
    }
}

function moveTetrimino(dx, dy) {
    // Move the Tetrimino left, right, or down
    currentTetriminoPosition.x += dx;
    currentTetriminoPosition.y += dy;

    // Check for collisions with the walls or other blocks
    if (checkCollision()) {
        // Undo the last move if there's a collision
        currentTetriminoPosition.x -= dx;
        currentTetriminoPosition.y -= dy;

        // If moving down and there's a collision, spawn a new Tetrimino
        if (dy === 1) {
            mergeTetrimino();
            clearLines();
            spawnTetrimino();
        }
    }
}

function rotateTetrimino() { //rotatie up arrow
    const originalTetrimino = currentTetrimino;
    currentTetrimino = rotateMatrix(currentTetrimino);
    
    // Check for collisions after rotation
    if (checkCollision()) {
        // Restore the original Tetrimino if there's a collision
        currentTetrimino = originalTetrimino;
    }
}

function rotateMatrix(matrix) {
    // Transpose and reverse each row to rotate the matrix
    return matrix[0].map((_, i) => matrix.map(row => row[i])).reverse();
}

function checkCollision() {
for (let row = 0; row < currentTetrimino.length; row++) {
for (let col = 0; col < currentTetrimino[row].length; col++) {
    if (
        currentTetrimino[row][col] &&
        (
            currentTetriminoPosition.y + row >= ROWS ||
            (board[row + currentTetriminoPosition.y] &&
                board[row + currentTetriminoPosition.y][col + currentTetriminoPosition.x]) !== EMPTY
        )
    ) {
        return true; // block word geblokkeerd door andere block of muur.
    }
}
}
return false; //block kan doorvallen
}


function mergeTetrimino() { //tetris in gameboard
    for (let row = 0; row < currentTetrimino.length; row++) {
        for (let col = 0; col < currentTetrimino[row].length; col++) {
            if (currentTetrimino[row][col]) {
                board[row + currentTetriminoPosition.y][col + currentTetriminoPosition.x] = 'cyan';
            }
        }
    }
}

function clearLines() { // gevulde lijnen worden geregistreerd
    for (let row = ROWS - 1; row >= 0; row--) {
        if (board[row].every((cell) => cell !== EMPTY)) {
            markLine(row);
        }
    }
}


function markLine(line) { // de lijn die ingevuld is krijgt een kleur
    for (let col = 0; col < COLUMNS; col++) {
        board[line][col] = FILLED;
    }
}

function gameLoop() {
    if (!gameOver) {
        moveTetrimino(0, 1);
        clearLines();
    }
    draw();
    setTimeout(gameLoop, 500); // snelheid aanpassen
}

function checkLinesAndRedirect() {
    let filledLines = 0;
    for (let row = ROWS - 1; row >= 0; row--) {
        if (board[row].every((cell) => cell !== EMPTY)) {
            filledLines++;
        }
    }

    if (filledLines >= 5) {
        // Redirect to the next page or perform any other action
        window.location.href = '../../pages/stop3-6/index.html'; // Change the URL to the next page
    }
}


function clearLines() {
    for (let row = ROWS - 1; row >= 0; row--) {
        if (board[row].every((cell) => cell !== EMPTY)) {
            markLine(row);
        }
    }
    
    checkLinesAndRedirect(); // Check lines and redirect after clearing
}

function refreshPage() {
    location.reload();
}

document.addEventListener('keydown', handleKeyPress);

init();
gameLoop();