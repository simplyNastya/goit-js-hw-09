import flatpickr from "flatpickr";
import "flatpickr/dist/flatpickr.min.css";
import Notiflix from 'notiflix';

const dateInputEl = document.querySelector('#datetime-picker');
const startBtnEl = document.querySelector('button[data-start]');
const daysEl = document.querySelector('span[data-days]');
const hoursEl = document.querySelector('span[data-hours]');
const minutesEl = document.querySelector('span[data-minutes]');
const secondsEl = document.querySelector('span[data-seconds]');

let currentUnixTime = new Date().getTime();
let startUnixTime = null;
let deltaTime = null;
let secCounter = 0;

const options = {
    enableTime: true,
    time_24hr: true,
    defaultDate: new Date(),
    minuteIncrement: 1,
    onClose(selectedDates) {
      startUnixTime = selectedDates[0].getTime();
      
      if (startUnixTime < currentUnixTime) {
        return Notiflix.Notify.failure('Please choose a date in the future')
      } else {
        startBtnEl.disabled = false;
      }
    },
  };

  startBtnEl.setAttribute('disabled', '');
  flatpickr(dateInputEl, options);

function startTimer () {
    const timerId = setInterval(() => {
        currentUnixTime = new Date().getTime();

        deltaTime = startUnixTime - currentUnixTime;

        secCounter = deltaTime
        secCounter -= 1

        if (secCounter <= 0) {
          clearInterval(timerId)
          return
        }

        console.log(secCounter)

        console.log(deltaTime)
        const { days, hours, minutes, seconds } = convertMs(deltaTime);
        daysEl.textContent = `${days}`;
        hoursEl.textContent = `${hours}`;
        minutesEl.textContent = `${minutes}`;
        secondsEl.textContent = `${seconds}`;  
    }, 1000);

    console.log(secCounter)
   
}

startBtnEl.addEventListener('click', startTimer)

  function convertMs(ms) {
    // Number of milliseconds per unit of time
    const second = 1000;
    const minute = second * 60;
    const hour = minute * 60;
    const day = hour * 24;
  
    // Remaining days
    const days = addLeadingZero(Math.floor(ms / day));
    // Remaining hours
    const hours = addLeadingZero(Math.floor((ms % day) / hour));
    // Remaining minutes
    const minutes = addLeadingZero(Math.floor(((ms % day) % hour) / minute));
    // Remaining seconds
    const seconds = addLeadingZero(Math.floor((((ms % day) % hour) % minute) / second));
  
    return { days, hours, minutes, seconds };
  }

  function addLeadingZero(value) {
    return String(value).padStart(2, '0');
  }





