var timeRemaning = 75; //75 seconds
var startQuiz = document.getElementById('startBtn');

function displayTime() {
	var div = document.createElement('div');
	document.body.innerHTML = ''; // clear line each time
	document.body.appendChild(div); //putting on the page
	div.innerHTML = timeRemaning; //the text (innerHTML) is showing the time remaining on the screen
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

startQuiz.addEventListener('click', function () {
	startCountdown();
});

var quiz1 = document.createElement('h1');
function showQuestions() {
	quiz1.textContent = 'This is my first question';
	quiz1.setAttribute = ('style', 'font-size: 200px');
	document.body.appendChild(quiz1);
}
startQuiz.addEventListener('click', showQuestions);
