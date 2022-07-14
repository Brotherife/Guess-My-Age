'use strict';

// SELECTED ELEMENT
const btnSubmit = document.querySelector('.btn-submit');
const btnPlayAgain = document.querySelector('.again-btn');
const btnCheck = document.querySelector('.btn-check');
const invalid = document.querySelector('.invalid');
const overLay = document.querySelector('.overlay');
const playerName = document.querySelector('.player-name');
const win = document.querySelector('.win');
const age = document.querySelector('.age');

// GETTING ACTUAL||SECRET AGE
const presentDate = new Date();
const presentYear = presentDate.getFullYear();
const birthYear = 1964;

// function to calculate age
const calcAge = function () {
  return presentYear - birthYear;
};
calcAge();

// actual age
const secretAge = calcAge();

// SETTING VARIABLES
let score = 20;
let highscore = 0;

// OTHER FUNCTIONS
function displayMessage(message) {
  document.querySelector('.message').textContent = message;
}
displayMessage('start guessing...');

function checkScore(scoree) {
  document.querySelector('.score').textContent = scoree;
}
checkScore(score);

// EVENT LISTENERS
btnSubmit.addEventListener('click', function () {
  let userNameInput = String(document.querySelector('.user-name-input').value);
  if (!userNameInput) {
    invalid.textContent = '*invalid input';
  } else {
    overLay.classList.add('hidden');
    playerName.textContent = userNameInput;
  }
});

btnCheck.addEventListener('click', function () {
  const guessAge = Number(document.getElementById('guess-age').value);
  if (!guessAge) {
    displayMessage('no number');
  } else if (guessAge === secretAge && score > highscore) {
    age.textContent = secretAge;
    displayMessage('correct age');
    // if (score > highscore) {
    highscore = score;
    document.querySelector('.highscore').textContent = highscore;
    document.querySelector('body').style.backgroundColor = '#60b347';
    win.classList.remove('hidden');
    // }
  } else if (guessAge !== secretAge && score > 1) {
    displayMessage(guessAge > secretAge ? 'too high' : 'too low');
    score--;
    checkScore(score);
  } else {
    displayMessage('you lost');
    checkScore(0);
  }
});

btnPlayAgain.addEventListener('click', function () {
  score = 20;
  displayMessage('start guessing...');
  checkScore(score);
  age.textContent = '?';
  document.getElementById('guess-age').value = '';
  document.querySelector('body').style.backgroundColor = '#222';
  win.classList.add('hidden');
});
