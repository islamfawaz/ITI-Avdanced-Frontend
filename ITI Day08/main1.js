var interval;

document.getElementById('startClockButton').addEventListener('click', function() {
    alert('Clock Started');
    startClock();
});

function startClock() {
    interval = setInterval(function() {
        const now = new Date();
        const timeString = now.toLocaleTimeString();
        document.getElementById('clock').textContent = timeString;
    }, 1000);
}

document.addEventListener('keydown', function(event) {
    if (event.altKey && event.key === 'w') {
        clearInterval(interval);
        alert('Clock Stopped');
    }
});
