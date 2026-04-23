
function endGame() {
    saveBestScore();
    Swal.fire({
        title: "YOU LOST",
        html: `
            <div class="lose-content">
                <p class="lose-message">The ball slipped past your paddle.</p>
                <div class="lose-stats">
                    Score: <span>${score}</span><br>
                    Time: <span>${document.getElementById("timerText")?.textContent || "00:00"}</span>
                </div>
            </div>
        `,
        confirmButtonText: "Retry",
        confirmButtonColor: "#4aa3ff",
        showDenyButton: true,
        denyButtonText: "Main Menu",
        reverseButtons: true,
        allowOutsideClick: false,
        allowEscapeKey: false,
        backdrop: false,
        customClass: {
            popup: 'lose-swal',
            title: 'lose-title',
            confirmButton: 'retry-btn',
            denyButton: 'menu-btn'
        }
    }).then((result) => {
        if (result.isConfirmed) {
            window.location.reload();
        } else if (result.isDenied) {
            window.location.href = "../index.html";
        }
    });
}



function winGame() {
    saveBestScore();
    Swal.fire({
        html: `
            <div class="win-content">
                <h2 class="win-title">YOU WIN</h2>
                <p class="win-message">
                    You cleared all the clouds in ${getFormattedElapsedTime()}
                </p>
                <div class="win-score">
                    Score: <span>${score}</span>
                </div>
            </div>
        `,
        showConfirmButton: true,
        confirmButtonText: "Retry",
        showDenyButton: true,
        denyButtonText: "Menu",
        showCancelButton: true,
        cancelButtonText: "Next Level",
        allowOutsideClick: false,
        allowEscapeKey: false,
        allowEnterKey: false,
        backdrop: false,
        customClass: {
            popup: 'my-swal-popup win-swal',
            confirmButton: 'retry-btn',
            denyButton: 'next-btn',
            cancelButton: 'menu-btn',
            actions: 'win-actions'
        }
    }).then((result) => {
        if (result.isConfirmed) {
            window.location.reload();
        } else if (result.isDismissed) {
            window.location.href = "level1.html";
        } else if (result.isDenied) {
            window.location.href = "../index.html";
        }
    });
}



function updateLivesDisplay() {
    var heartDiv = document.getElementById('heartDiv');
    if (heartDiv) {
        heartDiv.innerHTML = '';
        for (var i = 0; i < lives; i++) {
            heartDiv.innerHTML += '<img src="../images/heart.png" alt="Heart" class="heartIcon">';
        }
    }
}


var helpButtonIcon = {
    path: '../images/question.png',
    alt: 'Help'
};

var helpBtn = document.getElementById('helpBtn');
if (helpBtn) {
    setHelpButtonIcon();
    helpBtn.addEventListener('click', showHelpAlertLevel2);
}

var retryBtn = document.getElementById('retryBtn');
if (retryBtn) {
    retryBtn.addEventListener('click', function () {
        window.location.reload();
    });
}

var pauseButtonIcons = {
    paused: {
        path: '../images/play.png',
        alt: 'Play'
    },
    running: {
        path: '../images/pause.png',
        alt: 'Pause'
    }
};

function setHelpButtonIcon() {
    if (!helpBtn) {
        return;
    }

    helpBtn.innerHTML = '<img src="' + helpButtonIcon.path + '" alt="' + helpButtonIcon.alt + '" class="helpIcon">';
    helpBtn.setAttribute('aria-label', helpButtonIcon.alt);
}

function setPauseButtonIcon(isGamePaused) {
    if (!pauseBtn) {
        return;
    }

    var currentIcon = isGamePaused ? pauseButtonIcons.paused : pauseButtonIcons.running;
    pauseBtn.innerHTML = '<img src="' + currentIcon.path + '" alt="' + currentIcon.alt + '" class="pauseIcon">';
    pauseBtn.setAttribute('aria-label', currentIcon.alt);
}

var pauseBtn = document.getElementById('pauseBtn');
if (pauseBtn) {
    var initialPauseState = (typeof isPaused !== 'undefined') ? isPaused : false;
    setPauseButtonIcon(initialPauseState);

    pauseBtn.addEventListener('click', function () {
        isPaused = !isPaused;
        setPauseButtonIcon(isPaused);
    });
}

function showHelpAlertLevel2() {
    Swal.fire({
        title: "How To Play",
        html: `
            <div style="text-align:left; font-size:15px; line-height:1.6;">
                <p><b>Move:</b> Left / Right arrow keys</p>
                <p><b>Launch:</b> Press Space</p>
                <p><b>Objective:</b> Destroy all clouds</p>
                <hr style="border:0; border-top:1px solid #8fc6f0; margin:10px 0;">
                <p><b>Lives:</b> You have 3 lives</p>
                <p>You lose a life when the ball hits the bottom</p>
                <p><b>Dark clouds:</b> Hitting a dark cloud can spawn lightning</p>
                <p><b>Lightning:</b> If it hits your paddle, you get stunned for a short time</p>
            </div>
        `,
        confirmButtonText: "Ok",
        confirmButtonColor: "#4fa0dd",
        background: "#eaf4ff",
        color: "#1b2a41",
        backdrop: "rgba(0, 0, 0, 0.5)",
        customClass: {
            popup: "game-alert-bright"
        },
        showClass: {
            popup: "animate__animated animate__fadeInDown"
        },
        hideClass: {
            popup: "animate__animated animate__fadeOutUp"
        }
    });
}