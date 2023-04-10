const questionElement = document.getElementById('question');
const answerForm = document.getElementById('answer-form');
const answerInputElement = document.getElementById('answer');
const resultElement = document.getElementById('result');
const nextButton = document.getElementById('next-btn');

let questions = [  {    question: 'บวกเลขอย่างไรก็ได้ โดยใช้แค่เลข 8 ให้ได้คำตอบเท่ากับ 1000',    answer: '888+88+8+8+8'  },  {    question: 'ตั้งแต่ 1-1000 จะเห็นเลขไหนบ่อยที่สุด?',    answer: '1'  },  {    question: 'ตั้งแต่ 1-1000 จะเห็นเลขไหนน้อยที่สุด',    answer: '0'  },  {    question: '1/2 ของ 2/3 ของ 3/4 ของ 4/5 ของ 5/6 ของ 6/7 ของ 7/8 ของ 8/9 ของ 9/10 ของ 1000 มีค่าเท่ากับเท่าไหร่?',    answer: '100'  },  {    question: 'ไหว้น้ำท่าอะไร ต้องใส่หมวกกันน็อค?',    answer: 'ท่าจะบ้า'  }];
let currentQuestionIndex = 0;
let score = 0;

function shuffleQuestions() {
  for (let i = questions.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [questions[i], questions[j]] = [questions[j], questions[i]];
  }
}

function setNextQuestion() {
  resetState();
  showQuestion(questions[currentQuestionIndex]);
}

function showQuestion(question) {
  questionElement.innerText = question.question;
}

function checkAnswer() {
  const answer = answerInputElement.value.trim();
  if (answer === questions[currentQuestionIndex].answer) {
    score++;
    resultElement.innerText = 'ถูกต้อง!';
  } else {
    resultElement.innerText = 'ผิด!';
  }
  answerForm.reset();
  currentQuestionIndex++;
  if (currentQuestionIndex >= questions.length) {
    endGame();
  } else {
    setNextQuestion();
  }
}

function resetState() {
  resultElement.innerText = '';
  answerInputElement.focus();
}

function startGame() {
  shuffleQuestions();
  setNextQuestion();
}

function endGame() {
  questionElement.innerText = `คุณตอบถูก ${score} จาก ${questions.length} ข้อ`;
  answerForm.style.display = 'none';
  nextButton.style.display = 'none';
}

answerForm.addEventListener('submit', e => {
  e.preventDefault();
  checkAnswer();
});

startGame();
