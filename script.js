var quizContainer = document.getElementById('quizQA');
var submitContainer = document.getElementById('submitBtn');
var resultsContainer = document.getElementById('results');
var quiz1 = document.createElement('h1'); //quiz question 1?????
var timeRemaning = 75; //75 seconds
var startQuiz = document.getElementById('startBtn');
console.log(startQuiz);
var div = document.createElement('div');
var answer1 = document.createElement('button');
var answer2 = document.createElement('button');
var answer3 = document.createElement('button');

function displayTime() {
	div.innerHTML = '';
	div.innerHTML = timeRemaning; //the text (innerHTML) is showing the time remaining on the screen
	quizContainer.appendChild(div);
}

function startCountdown() {
	setInterval(function () {
		timeRemaning--; //subtract 1 each second
		displayTime(); //showing remaining time after subtractions
		if (timeRemaning === 0) {
			clearInterval(timer); // stop counting down (stops at 0)
		}
	}, 1000); // countdown by 1 millisecond intervals
}

function showQuestions() {
	quiz1.textContent = 'This is my first question';
	quiz1.setAttribute = ('style', 'font-size: 200px');
	quizContainer.appendChild(quiz1); //appending it to container instead of body
	answer1.textContent = 'this is answer a';
	answer2.textContent = 'this is answer b';
	answer3.textContent = 'this is answer c';
	quizContainer.appendChild(answer1);
	quizContainer.appendChild(answer2);
	quizContainer.appendChild(answer3);
}
//

function showResults1(event) {
	console.log(event);
	if (event.target.innerHTML === 'this is answer a') {
		console.log('correct answer');
	} else {
		console.log('incorrect');
	}
}
answer1.addEventListener('click', showResults1);
answer2.addEventListener('click', showResults1);
answer3.addEventListener('click', showResults1);

//
// var myQuestions = [
// 	{
// 		question1: 'This is my first Question',
// 		answers1: {
// 			a: 'answer1',
// 			b: 'answer2',
// 			c: 'answer3',
// 		},
// 		correctAnswer: 'a',
// 	},
// 	{
// 		question2: 'This is my second question',
// 		answers2: {
// 			a: 'answer1',
// 			b: 'answer2',
// 			c: 'answer3',
// 		},
// 		correctAnswer: 'b',
// 	},
// 	{
// 		question3: 'This is my third question',
// 		answers3: {
// 			a: 'answer1',
// 			b: 'answer2',
// 			c: 'answer3',
// 		},
// 		correctAnswer: 'c',
// 	},
// ];

function clickQuiz() {
	startCountdown();
	showQuestions();
}

startQuiz.addEventListener('click', clickQuiz); //want to get it to display question continuously along with timer....?

//function btnClick(){} ????
