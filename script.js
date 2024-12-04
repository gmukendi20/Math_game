// Selecting elements
const questionElement = document.getElementById('question');
const answerInput = document.getElementById('answer');
const submitButton = document.getElementById('submitAnswer');
const startButton = document.getElementById('startButton');
const feedbackElement = document.getElementById('feedback');
const scoreElement = document.getElementById('score');

let score = 0;
let correctAnswer = 0;

// Generate a random math question
function generateQuestion() {
    const num1 = Math.floor(Math.random() * 10) + 1;
    const num2 = Math.floor(Math.random() * 10) + 1;
    const operations = ['+', '-', '*'];
    const operation = operations[Math.floor(Math.random() * operations.length)];

    correctAnswer = eval(`${num1} ${operation} ${num2}`);
    questionElement.textContent = `What is ${num1} ${operation} ${num2}?`;
}

// Handle answer submission
function handleAnswerSubmission() {
    const playerAnswer = parseInt(answerInput.value, 10);

    if (isNaN(playerAnswer)) {
        feedbackElement.textContent = 'Please enter a valid number.';
        return;
    }

    if (playerAnswer === correctAnswer) {
        feedbackElement.textContent = 'Correct! 🎉';
        score++;
    } else {
        feedbackElement.textContent = `Wrong! The correct answer was ${correctAnswer}.`;
    }

    scoreElement.textContent = score;
    answerInput.value = '';
    generateQuestion();
}

// Start the game
function startGame() {
    score = 0;
    scoreElement.textContent = score;
    feedbackElement.textContent = '';
    generateQuestion();
}

// Add event listeners
submitButton.addEventListener('click', handleAnswerSubmission);
startButton.addEventListener('click', startGame);
