const createElements = () => {
  const timerDown = document.createElement('button');
  timerDown.classList.add('timerDown');
  document.body.append(timerDown);
  timerDown.style.width = '50px';
  timerDown.style.height = '50px';
  timerDown.style.background = 'yellow';

  const counter = document.createElement('p');
  counter.classList.add('counter');
  document.body.append(counter);
  counter.innerText = 0;
  counter.style.fontSize = '2rem';

  const timer = document.createElement('button');
  timer.classList.add('timer');
  document.body.append(timer);
  timer.style.width = '50px';
  timer.style.height = '50px';
  timer.style.background = 'cyan';

  document.body.style.display = 'flex';
  document.body.style.gap = '50px';
  document.body.style.justifyContent = 'center';
  document.body.style.alignItems = 'center';
  document.body.style.height = '90vh';
};
createElements();

const timerDown = document.querySelector('.timerDown');
const timer = document.querySelector('.timer');
const counter = document.querySelector('.counter');

let timerDownActive = false;
let intervalDown;
timerDown.addEventListener('click', () => {
  if (!timerDownActive) {
    intervalDown = setInterval(() => counter.innerText--, 10);
    timerDownActive = true;
  } else {
    clearInterval(intervalDown);
    timerDownActive = false;
  }
});

let timerActive = false;
let intervalUp;
timer.addEventListener('click', () => {
  if (!timerActive) {
    intervalUp = setInterval(() => counter.innerText++, 10);
    timerActive = true;
  } else {
    clearInterval(intervalUp);
    timerActive = false;
  }
});
