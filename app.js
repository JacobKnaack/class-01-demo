'use strict';

console.log('Hello from the console!!');

let question1 = 'What is your name?';
let question2 = 'What is you age?';
let question3 = 'What is your favorite food?';

const questions = [question1, question2, question3];
const responses = [];
// const questions = [];

// questions.push(question1);
// questions.push(question2);
// questions.push(question3);

// let response1 = prompt(questions[0]);
// let response2 = prompt(questions[1]);
// let response3 = prompt(questions[2]);
// responses.push(response1);
// responses.push(response2);
// responses.push(response3);
responses.push(prompt(questions[0]));
responses.push(prompt(questions[1]));
responses.push(prompt(questions[2]));

console.log(responses);
