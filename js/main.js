// Checkers

// Global Variables
let spaces = allSpaces();
let player = 1;

requestAnimationFrame(draw)

function draw() {
    background("white");
    drawBoard();

    hoverPiece();
    

    requestAnimationFrame(draw)
}