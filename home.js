import {refreshStatus} from "./app.js";

// Call updateCountDown function every 1 second
setInterval(updateCountDown, 1000);

// Start of count down code
const seconds = 10;
let timer = seconds;
function updateCountDown() {
    const countDown = document.getElementById('countDown');
    countDown.innerText = `Time to check: ${timer.toString()}`;
    timer--;

    if (timer === 0) {
        refreshStatus();
        timer = seconds;
    }
}
// End of count down code
