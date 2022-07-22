// Function Library

function drawBoard() {
    for (let x = 100; x < 800; x += 100) {
        line(x, 0, x, 800);
    }
    for (let y = 100; y < 800; y += 100) {
        line(0, y, 800, y);
    }
}

function allSpaces() {
    let temp = [];
    for (let x = 50; x <= 750; x += 100) {
        for (let y = 50; y <= 750; y += 100) {
            temp.push({x: x, y: y});
        }
    }
    return temp;
}