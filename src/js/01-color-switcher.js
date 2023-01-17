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
    this.timerId = setInterval (() => {
        document.body.style.backgroundColor = getRandomHexColor();
    }, 1000)}


function stop() {
    startBtnEl.removeAttribute('disabled');
    stopBtnEl.setAttribute('disabled', '');
    clearInterval(this.timerId);
}


// const button = {
//     timerId: null,
//     isActive: false,

//     start () {
//         if (this.isActive) {
//             return
//         } else {
//             this.isActive = true;
            
//             this.timerId = setInterval (() => {
//             document.body.style.backgroundColor = getRandomHexColor();
//         }, 1000)}
//     },

//     stop () {
//         clearInterval(this.timerId);
//         this.isActive = false;
//     },
    
// },


    



startBtnEl.addEventListener('click', () => start());
stopBtnEl.addEventListener('click', () => stop());