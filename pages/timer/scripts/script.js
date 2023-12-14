let timeRemaining = 600;

function updateTimer() {
    const minutes = Math.floor(timeRemaining / 60);
    const seconds = timeRemaining % 60;

    document.getElementById('timer').innerText = `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;

    if (timeRemaining === 0) {
        alert('Time is up!');
    } else {
        timeRemaining--;
    }
}

setInterval(updateTimer, 1000);

updateTimer();