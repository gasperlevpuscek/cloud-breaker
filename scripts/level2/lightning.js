function makeItRain() {
    document.querySelector('.rain.front-row').innerHTML = "";
    document.querySelector('.rain.back-row').innerHTML = "";

    let increment = 0;
    let drops = "";
    let backDrops = "";

    while (increment < 100) {
        let randoHundo = Math.floor(Math.random() * 98) + 1;
        let randoFiver = Math.floor(Math.random() * 4) + 2;
        increment += randoFiver;

        drops += `<div class="drop" style="left:${increment}%; bottom:${(randoFiver * 2 - 1 + 100)}%; animation-delay:0.${randoHundo}s; animation-duration:0.5${randoHundo}s;">
      <div class="stem"></div>
      <div class="splat"></div>
    </div>`;

        backDrops += `<div class="drop" style="right:${increment}%; bottom:${(randoFiver * 2 - 1 + 100)}%; animation-delay:0.${randoHundo}s; animation-duration:0.5${randoHundo}s;">
      <div class="stem"></div>
      <div class="splat"></div>
    </div>`;
    }

    document.querySelector('.rain.front-row').innerHTML = drops;
    document.querySelector('.rain.back-row').innerHTML = backDrops;
}

function clearRain() {
    var frontRow = document.querySelector('.rain.front-row');
    var backRow = document.querySelector('.rain.back-row');
    frontRow.innerHTML = '';
    frontRow.style.display = 'none';
    backRow.innerHTML = '';
    backRow.style.display = 'none';

}


var lightningStrike = null;
var lightningTimeoutId = null;
var paddleStunned = false;
var paddleStunTimeoutId = null;
var lightningImg = new Image();
lightningImg.src = "../images/lightning.png";


function drawLightning() {
    if (!lightningStrike) {
        return;
    }
    ctx.drawImage(lightningImg, lightningStrike.x - 35, lightningStrike.y, 70, 1000);
}


function lightningEffect() {
    var rowheight = BRICKHEIGHT + PADDING + f / 2;
    var colwidth = BRICKWIDTH + PADDING + f / 2;
    var row = Math.floor(y / rowheight);
    var col = Math.floor(x / colwidth);

    if (row < 0 || row >= NROWS || col < 0 || col >= NCOLS) {
        return null;
    }

    var hitX = (col * (BRICKWIDTH + PADDING)) + PADDING + (BRICKWIDTH / 2);
    var hitY = (row * (BRICKHEIGHT + PADDING)) + PADDING + (BRICKHEIGHT / 2);

    lightningStrike = {
        x: hitX,
        y: hitY
    };

    if (hitX >= paddlex - 10 && hitX <= paddlex + paddlew + 10) {
        paddleStunned = true;

        if (paddleStunTimeoutId !== null) {
            clearTimeout(paddleStunTimeoutId);
        }

        paddleStunTimeoutId = setTimeout(function () {
            paddleStunned = false;
            paddleStunTimeoutId = null;
        }, 500);
    }

    if (lightningTimeoutId !== null) {
        clearTimeout(lightningTimeoutId);
    }

    lightningTimeoutId = setTimeout(function () {
        lightningStrike = null;
        lightningTimeoutId = null;
    }, 300);

    return {
        x: hitX,
        y: hitY
    };

}