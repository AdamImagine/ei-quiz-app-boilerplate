let score = 0; 
let point = 1; 
let currentQuestion = 0;
let selectAnswer = 0;

let questions = [
  {
    question: 'At what RPM does the centrifugal clutch engage on the Stihl MS201T chainsaw?',
    answers: [
      '13,250',
      '1',
      '2,300',
      '3,700'
    ],
    correctAnswer: '3'
  },{
    question: 'How many licks does it take to get to the center of a Tootsie-Pop?',
    answers: [
      'One',
      'Two',
      'Three',
      'The world may never know'
    ],
    correctAnswer: '3'
  },
  {
    question: 'How much voltage is needed to operate the starter on your car?',
    answers: [
      'A lot',
      '12',
      '120',
      'None'
    ],
    correctAnswer: '1'
  },
  {
    question: 'How many threads per inch are there on a 1/4-20 bolt?',
    answers: [
      '1',
      '4',
      '20',
      '1,420'
    ],
    correctAnswer: '2'
  },
  {
    question: 'To begin the quiz you pressed a button with "start" written on it. What language was start written in?',
    answers: [
      'English',
      'French',
      'Portuguese',
      'Haitian Creole'
    ],
    correctAnswer: '3'
  },
]

function renderCurrentQuestionAndAnswers(index)
{
  console.log(currentQuestion);
   $(".questionNumber").html(currentQuestion+1);
  //We're clearing the main element 
  $("main").html("");
  //Render the question on the main element
 $("main").append(`
 	<section class="questionScreen">
		<form class="questionForm">
			<fieldset class="radio">
		<legend>${questions[index].question}</legend>`);
   
for (let i = 0; i < questions[index].answers.length; i++)
 {
   $(".radio").append(`
   <input type="radio" name="answers" value="${i}" required>${questions[index].answers[i]}<br>`);
 }
 //Then we close <ul>
  $("main").append(`
	</fieldset>
	</form>
        </section>`);
  
}

function startQuiz()
{
  console.log("currentQuestion: "+ currentQuestion);
  $('.submit').hide();
  $('.continue').hide();
  //class .start and with the "on" we're invoking an event function with click event handler
  $(".start").on("click", function(){
    renderCurrentQuestionAndAnswers(currentQuestion);
    currentQuestion++;
    $('.start').hide();
    $(".start").prop('disabled', true);
     $('.submit').show();
      
  });
     
}
   
function submitQuiz()
{   
    $(".submit").on("click", function(){
     let currentQuestionIndex = currentQuestion - 1; // start from 0
     let correctAnswerIndex = questions[currentQuestion - 1].correctAnswer;
     let selectedAnswer = $("input[name=answers]:checked").val();
     if(!selectedAnswer)
     {
       alert("Please select an option");
       return;
     }
     $('.continue').show();
     if(correctAnswerIndex == selectedAnswer) 
     {
       score++;
       $("#result").html("<br>Correct answer!");
       $(".score").html(score);
       $(".submit").prop('disabled', true);
     }
     else
     { 
       
       let correctanswer= questions[currentQuestionIndex].answers[correctAnswerIndex];
        $("#result").html("<br>Wrong answer! Correct answer is: "+ correctanswer);
       
     }
     

   $(".nextQuestion").hide();
  });
}

function nextQuestion()
{
  $(".continue").on("click", function(){
     $(".submit").prop('disabled', false);
    let selectedAnswer = $("input[name=answers]:checked").val();
     if(!selectedAnswer)
   {
alert("Please select an answer")
return;
}
      $("#result").html("");
      if(currentQuestion == questions.length)
      {
        currentQuestion = 0;
         $(".start").hide();
         $(".submit").hide();
         $(".continue").hide();
         $("main").hide();
            $(".nextQuestion").hide();

        //alert("No more questions \n score is " + score);
      
        $("#result").html(`<br><h3>Thanks for taking the Quiz</h3><h3><font color="blue">You score: ${score}</h3>
         <button class="restart">Restart Quiz Question</button>
        `);
        restartQuiz();
      }
    renderCurrentQuestionAndAnswers(currentQuestion);
    currentQuestion++;
    
  });
}

function restartQuiz()
{
  $(".restart").on("click", function(){
    $(".start").prop('disabled', false);
    $(".restart").hide();
    $(".start").show();
    $(".submit").show();
    $(".continue").show();
    $("main").show();
    $("#result").html("");
    init();
  })
 
}
function init()
{
  //default function to run all functions listed
  startQuiz();
  submitQuiz();
  nextQuestion();
}
//Invoke default function
$(init);