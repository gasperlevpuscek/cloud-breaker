// Inicializacija vsega
function init_paddle() {
    paddleh = 15;
    paddlew = 150;
    paddlex = WIDTH / 2 - paddlew / 2;
    f = paddleh;
    x = paddlex + (paddlew / 2);
    y = HEIGHT - paddleh - r;
}

function initbricks() { //inicializacija opek - polnjenje v tabelo
    NROWS = 4;
    NCOLS = 5;
    destroyedClouds = 0;
    remainingClouds = NROWS * NCOLS;
    BRICKWIDTH = (WIDTH / NCOLS) - 1;
    BRICKHEIGHT = 80;
    PADDING = 1;
    bricks = new Array(NROWS);
    brickImages = new Array(NROWS);
    clouds = [];
    for (var i = 0; i < NROWS; i++) {
        bricks[i] = new Array(NCOLS);
        brickImages[i] = new Array(NCOLS);
        for (var j = 0; j < NCOLS; j++) {
            bricks[i][j] = 1;
            brickImages[i][j] = cloudOptions[Math.floor(Math.random() * cloudOptions.length)];
            clouds.push({
                row: i,
                col: j,
                x: (j * (BRICKWIDTH + PADDING)) + PADDING,
                baseY: (i * (BRICKHEIGHT + PADDING)) + PADDING,
                drawY: (i * (BRICKHEIGHT + PADDING)) + PADDING,
                bobPhase: Math.random() * Math.PI * 2
            });
        }
    }
}


function init() {
    ctx = $('#canvas')[0].getContext("2d");
    WIDTH = $("#canvas").width();
    HEIGHT = $("#canvas").height();
    intervalId = setInterval(draw, 10);
    return intervalId;
}