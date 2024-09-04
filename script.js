document.addEventListener('DOMContentLoaded', () => {
    const quizContainer = document.getElementById('quiz');

    const questions = [
        {
            lesson: "What is the value of 5 + 3?",
            options: ["8", "7", "9"],
            answer: "8"
        },
        {
            lesson: "What is the area of a rectangle with length 4 units and width 3 units?",
            options: ["12 square units", "7 square units", "15 square units"],
            answer: "12 square units"
        },
        {
            lesson: "What is the next number in the sequence 2, 4, 6, ...?",
            options: ["8", "7", "10"],
            answer: "8"
        }
    ];

    questions.forEach((q, index) => {
        const questionDiv = document.createElement('div');
        questionDiv.classList.add('question');
        questionDiv.innerHTML = `
            <p class="question-text">${q.lesson}</p>
            ${q.options.map(option => `
                <button onclick="checkAnswer('${q.answer}', '${option}')">${option}</button>
            `).join('')}
        `;
        quizContainer.appendChild(questionDiv);
    });
});

function checkAnswer(correctAnswer, selectedAnswer) {
    if (correctAnswer === selectedAnswer) {
        alert('Correct! Well done.');
    } else {
        alert('Try again!');
    }
}
