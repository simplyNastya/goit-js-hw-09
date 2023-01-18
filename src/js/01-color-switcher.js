const startBtnEl = document.querySelector('button[data-start]');
const stopBtnEl = document.querySelector('button[data-stop]');

let timerId = null;

function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

stopBtnEl.setAttribute('disabled', '');


function start() {
    startBtnEl.setAttribute('disabled', '');
    stopBtnEl.removeAttribute('disabled');
    timerId = setInterval (() => {
        document.body.style.backgroundColor = getRandomHexColor();
    }, 1000)}
    

function stop() {
    startBtnEl.removeAttribute('disabled');
    stopBtnEl.setAttribute('disabled', '');
    clearInterval(timerId);
}

startBtnEl.addEventListener('click', () => start());
stopBtnEl.addEventListener('click', () => stop());