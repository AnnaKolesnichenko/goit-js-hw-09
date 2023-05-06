import Notiflix from "notiflix";

const firstDelay = document.querySelector('input[name="delay"]');
const delayStep = document.querySelector('input[name="step"]');
const amount = document.querySelector('input[name="amount"]');

let delay = 1000;
const step = 500;

function createPromise(position, delay) {
  const shouldResolve = Math.random() > 0.3;
  if (shouldResolve) {
    // Fulfill
    fulfilled(firstDelay, delayStep);

  } else {
    // Reject
    failed();
  }
}

function fulfilled(position, delay) {
  let i = position;
  for(let i = 0; i < amount.value; i ++) {
    setInterval(() => {
      createPromise(i, delay + i * step);
    }, delay);
  }
  Notiflix.Notify.success(`Fulfilled promise ${i} in ${delay}`);
}

function failed(position, delay) {
  Notiflix.Notify.failure(`Rejected promise ${position} in ${delay}`);
}
