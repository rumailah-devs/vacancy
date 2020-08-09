import {refreshStatus} from "./app.js";

const btnMarkFull = document.getElementById('full-button');
const btnMarkVacant = document.getElementById('vacant-button');

btnMarkFull.addEventListener('click', e => setFull(e));
btnMarkVacant.addEventListener('click', e => setVacant(e));

function setFull() {
    localStorage.setItem('center', JSON.stringify({isFull: true}))
    refreshStatus();
}

function setVacant() {
    localStorage.setItem('center', JSON.stringify({isFull: false}))
    refreshStatus();
}
