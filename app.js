'use strict';

console.log('Hello from the console!!');
let userScore = 0;
let isReady = prompt('Would you like to play a guessing game?');

if (isReady === 'y' || isReady === 'yes') {
  alert('Great! First: respond to these questions and statements with \'y\' or \'n\'.');
} else {
  alert('Too bad, I love games!');
}

const questions = [
  'Do I like JavaScript? (y/n)',
  'Is a JS Array also an Object? (y/n)',
  'There are only 3 immutable data type in JS. (y/n)',
  'JS can run in a web browser. (y/n)',
  'Arrays can only store 1 data type. (y/n)'
];
const answers = [
  'y',
  'y',
  'n',
  'y',
  'n'
];

let response1 = prompt(questions[0]);
if (response1.toLowerCase()[0] === answers[0]) {
  alert('Correct!');
  userScore++;
} else {
  alert('Sorry thats incorrect.');
}
alert(`Current score: ${userScore}`);

let response2 = prompt(questions[1]);
if (response2.toLowerCase()[0] === answers[1]) {
  alert('Correct!');
  userScore++;
} else {
  alert('Sorry thats incorrect.');
}
alert(`Current score: ${userScore}`);

let response3 = prompt(questions[2]);
if (response3.toLowerCase()[0] === answers[2]) {
  alert('Correct!');
  userScore++;
} else {
  alert('Sorry thats incorrect.');
}
alert(`Current score: ${userScore}`);

let response4 = prompt(questions[3]);
if (response4.toLowerCase()[3] === answers[3]) {
  alert('Correct!');
  userScore++;
} else {
  alert('Sorry thats incorrect.');
}
alert(`Current score: ${userScore}`);

let response5 = prompt(questions[4]);
if (response5.toLowerCase()[0] === answers[4]) {
  alert('Correct!');
  userScore++;
} else {
  alert('Sorry thats incorrect.');
}
alert(`Current score: ${userScore}`);

let multipleGuessNumber = Math.ceil(Math.random() * 10);
let response = null;
let attempts = 6;
let isAnswerCorrect = false;

while(attempts && !isAnswerCorrect) {
  response = prompt('Guess a number between 1 and 10');
  let numberGuess = parseInt(response);
  if (numberGuess === multipleGuessNumber) {
    alert(`You are correct! it took you ${7 - attempts} attempts :)`);
    isAnswerCorrect = true;
    userScore++;
  } else {
    if (numberGuess > multipleGuessNumber) {
      alert('Sorry, your guess is too high');
    } else {
      alert('Sorry, your guess is too low');
    }
    attempts--;
  }
}

alert(`Current score: ${userScore}`);

const multipleGuessQuestion = 'What is one of my favorite foods?';
const multipleGuessAnswers = ['mac and cheese', 'fried chicken', 'ramen', 'pizza', 'gumbo'];

for (let attempts = 6; attempts > 0; attempts--) {
  let response = prompt(multipleGuessQuestion);
  if(multipleGuessAnswers.includes(response)) {
    userScore++;
    alert('Correct!');
    break;
  } else {
    alert(`Incorrect, you have ${attempts} attempts left`);
  }
}

alert(`Game over! Here's your score: ${userScore}`);
