
function endGame() {
    Swal.fire({
        title: "You Lose",
        text: "Ball touched the bottom",
        confirmButtonColor: "#d64330",
        confirmButtonText: "Retry",
        allowOutsideClick: false,
        allowEscapeKey: false,
        allowEnterKey: false
    }).then((result) => {
        if (result.isConfirmed) {
            window.location.reload();
        }
    });
}