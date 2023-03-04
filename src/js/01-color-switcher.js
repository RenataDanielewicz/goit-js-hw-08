'use strict';

const bodySection = document.querySelector('body');
const startBtn = document.querySelector('button[data-start]');
const stopBtn = document.querySelector('button[data-stop]');

stopButton.setAttribute('disabled', '');

let timer;

startBtn.addEventListener('click', () => {
  startBtn.setAttribute('disabled', '');
  stopBtn.removeAttribute('disabled');
  timer = setInterval(updateColor, 1000);
});

stopButton.addEventListener('click', () => {
  clearInterval(timer);
  startBtn.removeAttribute('disabled');
  stopBtn.setAttribute('disabled', '');
});

function colorUpdate() {
  bodySection.style.backgroundColor = getRandomHexColor();
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
