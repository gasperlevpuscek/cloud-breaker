const bgMusic = document.getElementById('bgMusic');
bgMusic.volume = 0.2;

function tryPlayMusic() {
    const playPromise = bgMusic.play();
    if (playPromise && typeof playPromise.catch === 'function') {
        playPromise.catch(function () {
        });
    }
}