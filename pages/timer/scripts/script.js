let timeRemaining = localStorage.getItem("timeRemaining");

function updateTimer() {
    const minutes = Math.floor(timeRemaining / 60);
    const seconds = timeRemaining % 60;

    document.getElementById('timer').innerText = `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;

    if (timeRemaining === 0) {
        location.assign("/pages/timer/time-up.html");
    } else {
        timeRemaining--;
    }
}

function storeTimeRemaining() {
    localStorage.setItem("timeRemaining", timeRemaining);
}
if(localStorage.getItem("shouldStartTimer") !== null) {
    setInterval(updateTimer, 1000);
    setInterval(storeTimeRemaining, 1000);
    localStorage.setItem("shouldStartTimer", false);
}


