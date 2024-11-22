let startTime = 0;
let elapsedTime = 0;
let timerInterval;

// Funkcja formatująca czas do postaci MM:SS

function formatTime(ms) {
    const minutes = Math.floor((ms % 3600000) / 60000);
    const seconds = Math.floor((ms % 60000) / 1000);

    if (minutes !==0) {
        return `${minutes.toString().padStart(1, '0')}min ${seconds.toString().padStart(2, '0')}s`;
    }
    else {
        return `${seconds.toString().padStart(1, '0')}s`;
    }

}

// Aktualizacja wyświetlania czasu

function updateTimeDisplay() {
    const timeDisplay = document.getElementById('timeDisplay');
    const currentTime = Date.now() - startTime + elapsedTime;
    timeDisplay.textContent = formatTime(currentTime);
}

// Start stopera
document.getElementById('startBtn').addEventListener('click', () => {
    if (!timerInterval) {
        startTime = Date.now();
        timerInterval = setInterval(updateTimeDisplay, 10);
    }
});

// Stop stopera
document.getElementById('stopBtn').addEventListener('click', () => {
    if (timerInterval) {
        elapsedTime += Date.now() - startTime;
        clearInterval(timerInterval);
        timerInterval = null;
    }
});

// Reset stopera
document.getElementById('resetBtn').addEventListener('click', () => {
    clearInterval(timerInterval);
    timerInterval = null;
    startTime = 0;
    elapsedTime = 0;
    document.getElementById('timeDisplay').textContent = " 0s";
});
