
//creating HTML elements
const body = document.body;
const headerEl = document.createElement("header");
headerEl.className = "header";
body.append(headerEl);

const pageTitleEl = document.createElement("h1");
pageTitleEl.className = "page-title"
pageTitleEl.textContent = "Coding Quiz Challenge";
headerEl.append(pageTitleEl);

//subheaders for scores and timer
const scoreHeaderEl = document.createElement("h3");
scoreHeaderEl.className = "view-high-score";
scoreHeaderEl.textContent = "View high scores";
headerEl.append(scoreHeaderEl);

const timerHeaderEl = document.createElement("h3");
timerHeaderEl.className = "timer-header";
timerHeaderEl.textContent = "Time: 0";
headerEl.append(timerHeaderEl);

const introParaEl = document.createElement("p");
introParaEl.className = "intro-paragraph";
introParaEl.textContent = "Try to answer the following code-related questions within the time limit. Keep in mind that incorrect answers will penalize your score/time by ten seconds!";
pageTitleEl.appendChild(introParaEl);

//start button to start quiz
const startButtonDivEl = document.createElement("div");
startButtonDivEl.className = "start-btn-container";
headerEl.append(startButtonDivEl);

const startButton = document.createElement("button");
startButton.className = "start-button";
startButton.textContent = "Start Quiz";
startButtonDivEl.append(startButton);

const mainEl = document.createElement("main");
mainEl.id = "main-container";
body.appendChild(mainEl);

//function to create question area for quiz


const questionDivEl = document.createElement("div");
questionDivEl.className = "question-area";
mainEl.appendChild(questionDivEl);

const questionEl = document.createElement("h2");
questionEl.className = "question-header";
questionEl.textContent = "Question 1";
questionDivEl.appendChild(questionEl);

var answerListEl = document.createElement("ol");
answerListEl.className = "answer-list"
questionDivEl.appendChild(answerListEl);

const li1 = document.createElement("li");
li1.textContent = "Answer 1";
answerListEl.appendChild(li1)
const li2 = document.createElement("li");
li2.textContent = "Answer 2";
answerListEl.appendChild(li2)

const li3 = document.createElement("li");
li3.textContent = "Answer 3";
answerListEl.appendChild(li3);
const li4 = document.createElement("li");
li4.textContent = "Answer 4";
answerListEl.appendChild(li4);



const answerArr = [];

// //function for correct answers
// var quizAnswers = function() {
//     "question 1": {
//         correct: "value1",
//         incorrect: ["value2", "value3", "value4"]
//     },

//     }

// };