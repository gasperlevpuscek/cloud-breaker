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


function lightningFlash() {
    document.body.style.background = "#ffffff";
    setTimeout(() => {
        document.body.style.background = "";
    }, 10);
}