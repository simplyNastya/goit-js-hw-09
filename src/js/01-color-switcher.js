const startBtnEl = document.querySelector('button[data-start]');
const stopBtnEl = document.querySelector('button[data-stop]');

function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
  }

const button = {
    timerId: null,
    isActive: false,

    start () {
        if (this.isActive) {
            return
        } else {
            this.isActive = true;
            this.timerId = setInterval (() => {
            document.body.style.backgroundColor = getRandomHexColor();
        }, 1000)}
    },

    stop () {
        clearInterval(this.timerId);
        this.isActive = false;
    },
}

startBtnEl.addEventListener('click', () => {button.start()});
stopBtnEl.addEventListener('click', () => {button.stop()});