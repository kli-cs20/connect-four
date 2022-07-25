// Checkers

// Global Variables
let cnv = document.getElementById("my-canvas");
let ctx = cnv.getContext("2d");

cnv.width = 700;
cnv.height = 600;

let mouseX;
let mouseY;
let player = 1;
let color;
let boardArray = 
  [ [0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0] ];
let occupiedSpaces = [];


requestAnimationFrame(draw)

function draw() {
    // Redraw Blank Canvas
    background("white");
    drawBoard();

    // Occupied Spaces
    playedSquares();

    // Player
    hoverPiece();

    // // Test for Connect 4
    // test();

    requestAnimationFrame(draw)
}

// Event Listeners & Handlers
document.addEventListener("mousemove", mousemoveHandlerLib);
document.addEventListener("keydown", keydownHandler);

function keydownHandler(e) {
    if (e.keyCode === 32) {
        playPiece();
        togglePlayer();
    }
}

function mousemoveHandlerLib(event) {
    // Get rectangle info about canvas location
    let cnvRect = cnv.getBoundingClientRect();
  
    // Calc mouse coordinates using mouse event and canvas location info
    mouseX = Math.round(event.clientX - cnvRect.left);
    mouseY = Math.round(event.clientY - cnvRect.top);
  }

