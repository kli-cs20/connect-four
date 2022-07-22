// Checkers
let occupiedSpaces = [];


// Global Variables
let spaces = allSpaces();
let player = 1;
let boardArray = 
  [ [0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0] ];


requestAnimationFrame(draw)

function draw() {
    // Redraw Blank Canvas
    background("white");
    drawBoard();

    // Occupied Spaces

    // Player
    hoverPiece();

    requestAnimationFrame(draw)
}


