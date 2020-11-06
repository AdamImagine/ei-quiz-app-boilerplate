/**
 * Example store structure
  new comment*/
  let score = 0;
  let currentQuestion = 0;

  
  function init() {
    console.log("Hello")
    begin();
    
  }

  $(init)

  function renderQuestions() {
    $("#questionsContainer").html("")
    
      $("#questionsContainer").append(`
      <h2>${store.questions[currentQuestion].question
      }</h2>
      <form class="questionForm">
      `)
      store.questions[currentQuestion].answers.forEach(answer=> {
        $(".questionForm").append(
        `<input type="radio" name="answers" value="${answer}">${answer}<br>`)
      })
    $("#questionsContainer").append(`</form>`)
    $("#questionsContainer").append(`
    
    <button id=submitQuiz>Submit</button>
    <button id=nextQuestion>Next Question</button>`);
    renderNextQuestion()
    currentQuestion++
  }

  function begin() {
    $("main").html(`
    <div id= "questionsContainer"></div>
    <button id=startQuiz>Start Quiz</button>`);
    startQuiz();
  }



  function startQuiz() {
    $("#startQuiz").on("click", function(){
      renderQuestions();
      /*store.questions.forEach(question=> {
        $("#questionsContainer").append(`
        <h2>${question.question}</h2>
        <form class="questionForm">
        `)
        question.answers.forEach(answer=> {
          $(".questionForm").append(
          `<input type="radio" name="answers" value="${answer}">${answer}`)
        })
      })
      $("#questionsContainer").append(`</form>`)
      $("#questionsContainer").append(`
      
      <button id=submitQuiz>Submit</button>
      <button id=nextQuestion>Next Question</button>`);*/
    });

  }

  function renderNextQuestion() {
    $("#nextQuestion").on("click", function(){
      console.log(currentQuestion)
      if(currentQuestion == store.questions.length){
alert("No more questions")
return;
}
      renderQuestions();
    });

  }



const store = {
  // 5 or more questions are required
  questions: [
    {
      question: 'How many licks does it take to get to the center of a Tootsie-Pop?',
      answers: [
        'One',
        'Two',
        'Three',
        'The world may never know'
      ],
      correctAnswer: 'The world may never know'
    },
    {
      question: 'At what RPM does the centrifugal clutch engage on the Stihl MS201T chainsaw?',
      answers: [
        '13,250',
        '1',
        '2,300',
        '3,700'
      ],
      correctAnswer: '3,700'
    },
    {
      question: 'How much voltage is needed to operate the starter on your car?'
      answers: [
        'A lot',
        '12v',
        '120v',
        'None'
      ],
    },
    {
      question: 'How many threads per inch are there on a 1/4-20 bolt?'
      answers:[
        '1',
        '4',
        '20',
        '1420'
      ]
    },
    {
      question: 'To begin the quiz you pressed a button with "start" written on it. What language was this written in?'
      answers: [
        'English',
        'Spanish',
        'Portuguese',
        'Haitian Creole'
      ]
    }
  ],
  quizStarted: false,
  questionNumber: 0,
  score: 0
};

/**
 * 
 * Technical requirements:
 * 
 * Your app should include a render() function, that regenerates the view
 * each time the store is updated. 
 * See your course material and access support for more details.
 *
 * NO additional HTML elements should be added to the index.html file.
 *
 * You may add attributes (classes, ids, etc) to the existing HTML 
 * elements, or link stylesheets or additional scripts if necessary
 *
 * SEE BELOW FOR THE CATEGORIES OF THE TYPES OF FUNCTIONS YOU 
 * WILL BE CREATING 👇
 * 
 */

/********** TEMPLATE GENERATION FUNCTIONS **********/

// These functions return HTML templates

/********** RENDER FUNCTION(S) **********/

// This function conditionally replaces the contents of the <main> tag based on the state of the store

/********** EVENT HANDLER FUNCTIONS **********/

// These functions handle events (submit, click, etc)