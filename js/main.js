// Checkers

// Global Variables
let spaces = allSpaces();
let aliens = initAliens();

requestAnimationFrame(draw)

function draw() {
    drawBoard();

    moveAliens(aliens[0]);
    for (let i = 0; i < aliens.length; i++) {
        drawAliens(aliens[i]);
    }

    requestAnimationFrame(draw)
}