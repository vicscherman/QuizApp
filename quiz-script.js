var currentQuestion = 0;
var score = 0;
var totQuestions = questions.length;
var timer= 60;
var interval 

var container = document.getElementById('quizContainer');
var questionEl = document.getElementById('question');
var opt1 = document.getElementById('opt1');
var opt2 = document.getElementById('opt2');
var opt3 = document.getElementById('opt3');
var opt4 = document.getElementById('opt4');
var nextButton = document.getElementById('nextButton');
var resultCont = document.getElementById('result');

alert("You have 60 seconds to complete the quiz. Every correct answer is 10 points. Every wrong answer subtracts 5 seconds from the clock. Good luck.")
function setTimerEl(){
    document.getElementById('time').innerText=timer;
}

function showFinalScore() {
    clearInterval(interval)
    container.style.display ='none';
    resultCont.style.display = '';
    var highScoreEl = document.createElement('h1');
    highScoreEl.innerText = 'Your Score: ' + score;
    document.getElementById('result').appendChild(highScoreEl);
}



setTimerEl()

var interval = setInterval(function() {
    timer--; 
    setTimerEl();
    if (timer <= 0) {
        showFinalScore();
        return;
    }
}, 1000)


function loadQuestion (questionIndex) {
     var q = questions[questionIndex];
     questionEl.textContent = (questionIndex + 1) + '.' + q.question;
     opt1.textContent = q.option1;
     opt2.textContent = q.option2;
     opt3.textContent = q.option3;
     opt4.textContent = q.option4;

};

function loadNextQuestion () {
    var selectedOption = document.querySelector('input[type=radio]:checked');
    if(!selectedOption){
         alert('You need to select an answer to continue!');
         return;
    }
    var answer = selectedOption.value;
    if(questions[currentQuestion].answer == answer){
        score += 10;
    } else {
       timer -= 5;

    }
    

    selectedOption.checked = false;
    currentQuestion++;
    if(currentQuestion == totQuestions - 1){
        nextButton.textContent = 'submit'
    }
    if(currentQuestion == totQuestions){
        showFinalScore();
        return; 

    }
    loadQuestion(currentQuestion);
}
loadQuestion(currentQuestion);