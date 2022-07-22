// Function Library

function drawBoard() {
    for (let x = 100; x < 700; x += 100) {
        line(x, 0, x, 600);
    }
    for (let y = 100; y < 600; y += 100) {
        line(0, y, 700, y);
    }
}

function allSpaces() {
    let temp = [];
    for (let y = 50; y <= 750; y += 100) {
        for (let x = 50; x <= 750; x += 100) {
            temp.push({x: x, y: y});
        
        }
    }
    return temp;
}

function trackCursor() {
    for (let i = 100; i <= 700; i += 100) {
        if (mouseX < i && mouseX > i - 100) {
            return i / 100;
        }
    }
}

function hoverPiece() {
    let col = trackCursor();
    let x = col * 100 - 50;
    if (player === 1) {
        fill("rgb(255, 0, 0, 0.5");
    }
    circle(x, 550, 40, "fill");
}

function findEmptySpace() {

}