'use strict';

console.log('Hello from the console!!');
let userScore = 0;
let isReady = prompt('Would you like to play a guessing game?');

if (isReady === 'y' || isReady === 'yes') {
  alert('Great! First: respond to these questionsArray and statements with \'y\' or \'n\'.');
} else {
  alert('Too bad, I love games!');
}

const questionsArray = [
  'Do I like JavaScript? (y/n)',
  'Is a JS Array also an Object? (y/n)',
  'There are only 3 immutable data type in JS. (y/n)',
  'JS can run in a web browser. (y/n)',
  'Arrays can only store 1 data type. (y/n)'
];
const answersArray = [
  'y',
  'y',
  'n',
  'y',
  'n'
];

function yesOrNo(question, answer){
  let response = prompt(question);
  if (response.toLowerCase()[0] === answer) {
    alert('Correct!');
    userScore++;
  } else {
    alert('Sorry thats incorrect.');
  }
  alert(`Current score: ${userScore}`);


}
yesOrNo(questionsArray[0], answersArray[0]);
yesOrNo(questionsArray[1], answersArray[1]);
yesOrNo(questionsArray[2], answersArray[2]);
yesOrNo(questionsArray[3], answersArray[3]);
yesOrNo(questionsArray[4], answersArray[4]);

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
const multipleGuessanswersArray = ['mac and cheese', 'fried chicken', 'ramen', 'pizza', 'gumbo'];

for (let attempts = 6; attempts > 0; attempts--) {
  let response = prompt(multipleGuessQuestion);
  if(multipleGuessanswersArray.includes(response)) {
    userScore++;
    alert('Correct!');
    break;
  } else {
    alert(`Incorrect, you have ${attempts} attempts left`);
  }
}

alert(`Game over! Here's your score: ${userScore}`);
