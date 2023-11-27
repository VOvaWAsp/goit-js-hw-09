import Notiflix from 'notiflix';



const form = document.querySelector(".form");

form.addEventListener("submit", handleSubmit);

function createPromise(position, delay) {
  return new Promise((resolve, reject) => {
    const shouldResolve = Math.random() > 0.3;
    setTimeout(() => {
      if (shouldResolve) {
        resolve({position, delay});
      } else {
        reject({position, delay});
    }
    }, delay);
  })
}

function handleSubmit(event) {
  event.preventDefault();

  let firstDelay = parseInt(event.currentTarget.delay.value)
  let step = parseInt(event.currentTarget.step.value);
  let amount = parseInt(event.currentTarget.amount.value) 
  for (let i = 1; i <= amount; i++) { 
  let currentDelay = firstDelay + (i - 1) * step;
  createPromise(i,  currentDelay)
      .then(({ position, delay }) => {
        console.log(Notiflix.Notify.success(`✅ Fulfilled promise ${position} in ${delay}ms`));
      })
      .catch(({ position, delay }) => {
        console.log(Notiflix.Notify.warning(`❌ Rejected promise ${position} in ${delay}ms`));
      })
    }
}