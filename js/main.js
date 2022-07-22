// Checkers

// Global Variables
let spaces = allSpaces();
let aliens = initAliens();

requestAnimationFrame(draw)

function draw() {
    background("white");
    drawBoard();

    for (let i = 0; i < aliens.length; i++) {
        drawAliens(aliens[i]);
        moveAliens(aliens[i]);
    }


    requestAnimationFrame(draw)
}