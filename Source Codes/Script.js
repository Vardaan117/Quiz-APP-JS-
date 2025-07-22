 const quizData = [   //Question Objects
    {//object 1
        question: "What is the capital of France?",
        a: "Berlin",
        b: "Madrid",
        c: "Paris",
        d: "Lisbon",
        correct: "c",
    },
    {//object 2
        question: "Who is the CEO of Tesla?",
        a: "Bill Gates",
        b: "Elon Musk",
        c: "Jeff Bezos",
        d: "Mark Zuckerberg",
        correct: "b",
},
{//object 3
question: "What is the smallest planet in our solar system?",
a: "Venus",
b: "Mars",
c: "Mercury",
d: "Earth",
correct: "c",
},
{//object 4
question: "What is the square root of 64?",
a: "6",
b: "7",
c: "8",
d: "9",
correct: "c",
},
];

const quiz = document.getElementById('quiz');  //the whole quiz div
const answerEls = document.querySelectorAll('.answer'); //all the answer class selector elements

//this the radio field list
const questionEl = document.getElementById('question');//current question

//these are labels
const a_text = document.getElementById('a_text');//option a
const b_text = document.getElementById('b_text');//option b
const c_text = document.getElementById('c_text');//option c
const d_text = document.getElementById('d_text');//option d
const submitBtn = document.getElementById('submit'); //submit button

let currentQuiz = 0; //current quiz question index
let score = 0;//score of the quiz

loadQuiz();

function loadQuiz() {
deselectAnswers();//deselect the options

const currentQuizData = quizData[currentQuiz];

questionEl.innerText = currentQuizData.question; //current question
a_text.innerText = currentQuizData.a;
b_text.innerText = currentQuizData.b;
c_text.innerText = currentQuizData.c;
d_text.innerText = currentQuizData.d;
}

function deselectAnswers() {//deselect all options by using Query Selector
answerEls.forEach(answerEl => answerEl.checked = false);
}

function getSelected() {
let answer;
answerEls.forEach(answerEl => {
if(answerEl.checked) {
answer = answerEl.id;
}
});
return answer;//return the selected options id
}

submitBtn.addEventListener('click', () => {
const answer = getSelected(); //if the answer is selected then only we can go to the next question
if(answer) {
if(answer === quizData[currentQuiz].correct) { //check if the option macthes
score++;//increase the score
}

currentQuiz++; //index++

if(currentQuiz < quizData.length) { //if we have not reached the end
loadQuiz();//then load the next question
} else {
//define the quiz div's innerHTML
quiz.innerHTML = `
<h2>You answered ${score}/${quizData.length} questions correctly</h2>
<button onclick="location.reload()">Reload</button>
`;
}
}
});
