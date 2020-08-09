const statusContainer = document.getElementById('status-container');

refreshStatus();

// Refresh the label & background of the center status in Home page
export function refreshStatus() {
    // Get the center data from Local Storage
    const center = JSON.parse(localStorage.getItem('center'));

    // If center marked as full
    if (center && center.isFull) {
        markCenterAsFull();
    } else {
        markCenterAsVacant();
    }
}

function markCenterAsFull() {
    statusContainer.className = 'full-status-container';
    statusContainer.innerText = 'Center is full';
}

function markCenterAsVacant() {
    statusContainer.className = 'default-status-container';
    statusContainer.innerText = 'Still vacant'
}
