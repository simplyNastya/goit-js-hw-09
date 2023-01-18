import Notiflix from 'notiflix';

const formEl = document.querySelector('.form');

let position = 0;

function createPromise(position, delay) {
  const shouldResolve = Math.random() > 0.3;
  return new Promise((resolve, reject) => {
    const timeoutId = setTimeout(() => {
      if (shouldResolve) {
      resolve({ position, delay });
      } else {
      reject({ position, delay });
      }
    }, delay)
  })
}

function handlerSubmit(event) {
  event.preventDefault();

  let delay = +event.target.elements.delay.value;
  const step = +event.target.elements.step.value;
  const amount = +event.target.elements.amount.value;

  for (i = 0; i < amount; i += 1) {
    position += 1

    createPromise(position, delay)
      .then(({ position, delay }) => {
        Notiflix.Notify.success(`✅ Fulfilled promise ${position} in ${delay}ms`);
      })
      .catch(({ position, delay }) => {
        Notiflix.Notify.failure(`❌ Rejected promise ${position} in ${delay}ms`);
      });
    delay += step
  }
}

formEl.addEventListener('submit', handlerSubmit)