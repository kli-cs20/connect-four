// Function Library

// 7 x 6 Board
function drawBoard() {
    for (let x = 100; x < 700; x += 100) {
        line(x, 0, x, 600);
    }
    for (let y = 100; y < 600; y += 100) {
        line(0, y, 700, y);
    }
}

function playedSquares() {
    for (let i = 0; i < occupiedSpaces.length; i++) {
        let space = occupiedSpaces[i];
        fill(space.c);
        circle(space.x, space.y, 40, "fill");
    }
}

// Convert mouseX to col #
function trackCursor() {
    for (let i = 100; i <= 700; i += 100) {
        if (mouseX < i && mouseX > i - 100) {
            return i / 100;
        }
    }
}

function hoverPiece() {
    let col = trackCursor();
    let row = findEmptySpace(col - 1);
    let x = col * 100 - 50;  // Convert col # to x-coordinate
    let y = row * 100 - 50;  // Convert row # to y-coordinate
    hoverFillColor();
    circle(x, y, 40, "fill");
}

function findEmptySpace(col) {
    for (let row = 5; row >= 0; row--) {
        if (boardArray[row][col] === 0) {
            return row + 1
        } 
    }
}

function playPiece() {
    let col = trackCursor();
    let row = findEmptySpace(col - 1);
    let x = col * 100 - 50;
    let y = row * 100 - 50;  
    if (player === 1) {
        color = "red";
    } else {
        color = "blue";
    }

    occupiedSpaces.push({x: x, y: y, c: color});
    boardArray[row - 1][col - 1] = 1; 
}

// Helper Functions
function hoverFillColor() {
    if (player === 1) {
        fill("rgb(255, 0, 0, 0.5");
    } else {
        fill("rgb(0, 0, 255, 0.5");
    }
}

function playFillColor() {
    if (player === 1) {
        fill("rgb(255, 0, 0");
    } else {
        fill("rgb(0, 0, 255");
    }
}

function togglePlayer() {
    if (player === 1) {
        player = 2;
    } else {
        player = 1;
    }
}