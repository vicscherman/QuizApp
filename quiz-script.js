//our variables. They're going to let us know what question we're on, track our user score, track the total number of questions, and set the timer. 
//Our "interval" value is referenced up here for clarity, but I'll get into that one later.

var currentQuestion = 0;
var score = 0;
var totQuestions = questions.length;
var timer= 60;
var interval 
//Here we're linking all our variables to our HTML through their DOM ID. This will allow our functions below to well....function!
var container = document.getElementById('quizContainer');
var questionEl = document.getElementById('question');
var opt1 = document.getElementById('opt1');
var opt2 = document.getElementById('opt2');
var opt3 = document.getElementById('opt3');
var opt4 = document.getElementById('opt4');
var nextButton = document.getElementById('nextButton');
var resultCont = document.getElementById('result');
//Before the game starts I need to load a question into the quiz, as this command is otherwise mapped to our next question button. 
loadQuestion(currentQuestion)
//here we're alerting the user of the rules of the game. This is also going to function as our game start, as the timer counts down after this point.
alert("You have 60 seconds to complete the quiz. Every correct answer is 10 points. Every wrong answer subtracts 5 seconds from the clock. Good luck.")

//here' we're calling our set timer element as a function, and mapping it to our HTML through the appropriate DOM ID
function setTimerEl(){
    document.getElementById('time').innerText=timer;
}

//We have two game end conditions, so it's cleaner to create one function for the end of the game that brings you to the result screen,
// and reference it where it's needed. That's what i've done here.
function showFinalScore() {
    clearInterval(interval)
    container.style.display ='none';
    resultCont.style.display = '';
    var highScoreEl = document.createElement('h1');
    highScoreEl.innerText = 'Your Score: ' + score;
    document.getElementById('result').appendChild(highScoreEl);
}



//here's how we make our timer work.  We use a set interval(function) that essentially reduces the time by one unit every 1000 milliseconds (1 second). 
//We also specify that if the timer is less than or equal to 0, we run our showfinalscore function
setTimerEl()

var interval = setInterval(function() {
    timer--; 
    setTimerEl();
    if (timer <= 0) {
        showFinalScore();
        return;
    }
}, 1000)

//here we're buidling a function for loading our questions into our interface. We load a question from our (questionIndex). 
//Q is our question pulled from the question index in our questions.js file.We specify that the textcontent of our question is going to be. 
//Because our index number is 1 less than what the question will be in game, we add 1 to it. We then add a '.' so it looks nice and add the relevant question.
// The answer numbers are hard coded in our questions array, so all we need to do is call them up.
function loadQuestion (questionIndex) {
     var q = questions[questionIndex];
     questionEl.textContent = (questionIndex + 1) + '.' + q.question;
     opt1.textContent = q.option1;
     opt2.textContent = q.option2;
     opt3.textContent = q.option3;
     opt4.textContent = q.option4;

};
//Here's our load next question function. We specify a couple things here. 
//One, it's first going to check that the user has actually chosen a response by checking if our radio button has been checked.
//If it hasn't, it pulls up an alert.
// If a response is logged, it's going to create a variable called answer, which is equal to the value of the selected option. 

function loadNextQuestion () {
    var selectedOption = document.querySelector('input[type=radio]:checked');
    if(!selectedOption){
         alert('You need to select an answer to continue!');
         return;
    }
 //If the answer in the current question index matches our answer, we increas the variable score by 10 points.
//Otherwise, we subtract 5 from our time
    var answer = selectedOption.value;
    if(questions[currentQuestion].answer == answer){
        score += 10;
    } else {
       timer -= 5;

    }
    
//Now we uncheck the highlighted response, and iterate to the next question with the currentquestion++ command
    selectedOption.checked = false;
    currentQuestion++;

//two little fun bits here. The first if condition specifies that if we are one question from being finished 
//(that is, one question less than the total, our next button becomes a submit button)
    if(currentQuestion == totQuestions - 1){
        nextButton.textContent = 'submit'
    }
 //This means we've answered all our questions, and we should see our final score with that function.   
    if(currentQuestion == totQuestions){
        showFinalScore();
        return; 

    }
    // this is for all other questions during the quiz, to call up the current question from our question array.
    loadQuestion(currentQuestion);
}
