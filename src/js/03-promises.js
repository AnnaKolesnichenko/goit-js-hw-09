import Notiflix from "notiflix";

const form = document.querySelector('.form');
const firstDelay = document.querySelector('input[name="delay"]');
const delayStep = document.querySelector('input[name="step"]');
const amountAttempt = document.querySelector('input[name="amount"]');

const createPromise = (position, delay) => {
  const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
      const shouldResolve = Math.random() > 0.3;
    if (shouldResolve) {
      // Fulfill
      resolve({position, delay});

    } else {
      // Reject
      reject({position, delay});
    }
    }, delay);
  })
  return promise;  
}

function renderPromise(e) {
  e.preventDefault();

  const setDelay = Number(firstDelay.value);
  const step = Number(delayStep.value);
  const amount = Number(amountAttempt.value);

  //if above figures are < , amount <=0 so no promise is rendered but a Notif is shown that 
  //'all' data should be more than 0

  if(setDelay < 0 || step < 0 || amount <= 0) {
    form.reset();
    Notiflix.Notify.warning('Please enter numbers amove zero');
    return;
  }

  for(let i = 1; i <= amount; i++) {
    //delay += step
      createPromise(i, setDelay + (i - 1) * step)
      .then(onSuccess)
      .catch(onFailure);
  }
}

function onSuccess({position, delay}) {
  Notiflix.Notify.success(`✅ Fulfilled promise ${position} in ${delay}ms`);
}

function onFailure({position, delay}) {
  Notiflix.Notify.failure(`❌ Rejected promise ${position} in ${delay}ms`);
}
  
form.addEventListener('submit', renderPromise);

//------------------



