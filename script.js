// Array of quiz questions and answers
const quizData = [
    {
        question: "Quelle est la capitale de la France?",
        a: "Paris",
        b: "Londres",
        c: "Berlin",
        d: "Madrid",
        correct: "a",
    },
    {
        question: "Qui est le créateur de Linux?",
        a: "Bill Gates",
        b: "Steve Jobs",
        c: "Linus Torvalds",
        d: "Mark Zuckerberg",
        correct: "c",
    },
    {
        question: "Quelle est la plus grande planète du système solaire?",
        a: "Terre",
        b: "Mars",
        c: "Jupiter",
        d: "Saturne",
        correct: "c",
    },
    {
        question: "Combien de continents y a-t-il sur Terre?",
        a: "4",
        b: "5",
        c: "6",
        d: "7",
        correct: "d",
    },
];

// Selecting necessary elements from the DOM
const quiz = document.getElementById('quiz');
const answerEls = document.querySelectorAll('.answer');
const questionEl = document.getElementById('question');
const a_text = document.getElementById('a_text');
const b_text = document.getElementById('b_text');
const c_text = document.getElementById('c_text');
const d_text = document.getElementById('d_text');
const submitBtn = document.getElementById('submit');

let currentQuiz = 0; // Current question index
let score = 0; // User's score

// Load the first quiz question
loadQuiz();

function loadQuiz() {
    deselectAnswers(); // Deselect any selected answer

    // Get current question data
    const currentQuizData = quizData[currentQuiz];

    // Display the current question and answers
    questionEl.innerText = currentQuizData.question;
    a_text.innerText = currentQuizData.a;
    b_text.innerText = currentQuizData.b;
    c_text.innerText = currentQuizData.c;
    d_text.innerText = currentQuizData.d;
}

// Function to deselect all answers
function deselectAnswers() {
    answerEls.forEach(answerEl => answerEl.checked = false);
}

// Function to get the selected answer
function getSelected() {
    let answer;
    answerEls.forEach(answerEl => {
        if(answerEl.checked) {
            answer = answerEl.id;
        }
    });
    return answer;
}

// Event listener for the submit button
submitBtn.addEventListener('click', () => {
    const answer = getSelected(); // Get the selected answer
    if(answer) {
        // Check if the answer is correct
        if(answer === quizData[currentQuiz].correct) {
            score++;
        }

        currentQuiz++; // Move to the next question

        // If there are more questions, load the next one. Otherwise, show the result.
        if(currentQuiz < quizData.length) {
            loadQuiz();
        } else {
            // Display the final score and a reload button
            quiz.innerHTML = `
                <h2>Vous avez répondu correctement à ${score}/${quizData.length} questions.</h2>
                <button onclick="location.reload()">Recommencer</button>
            `;
        }
    }
});