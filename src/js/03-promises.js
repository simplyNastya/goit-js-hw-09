import Notiflix from 'notiflix';

const formEl = document.querySelector('.form');

let position = 1;

function createPromise(position, delay) {
  const shouldResolve = Math.random() > 0.3;
  
  return new Promise((resolve, reject) => {
    if (shouldResolve) {
      console.log(shouldResolve)
      resolve({position, delay})
    } else {
      reject({position, delay})
    }
  })
}

function handlerSubmitBtn(event) {
  event.preventDefault();

  let delay = +event.target.elements.delay.value;
  const step = +event.target.elements.step.value;
  const amount = +event.target.elements.amount.value;

  let counter = 0;
  const intervalId = setInterval(() => {
    createPromise(position, delay)
      .then(({ position, delay }) => {
        Notiflix.Notify.success(`✅ Fulfilled promise ${position} in ${delay}ms`);
      })
      .catch(({ position, delay }) => {
        Notiflix.Notify.failure(`❌ Rejected promise ${position} in ${delay}ms`);
      });
    
    position += 1;
    delay += step;
    counter += 1;

    if (counter === amount) {
      clearInterval(intervalId);
    }
  }, delay)
}  

formEl.addEventListener('submit', handlerSubmitBtn)