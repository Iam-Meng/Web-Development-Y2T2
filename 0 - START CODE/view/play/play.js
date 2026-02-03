// DOMS ELEMENTS  ---------------------------------------------------------
const dom_quiz = document.querySelector("#quiz");
const dom_question = document.querySelector("#question");
const dom_choiceA = document.querySelector("#A");
const dom_choiceB = document.querySelector("#B");
const dom_choiceC = document.querySelector("#C");
const dom_choiceD = document.querySelector("#D");
const dom_score = document.querySelector("#scoreContainer");
const dom_start = document.querySelector("#start");

const progressFill = document.querySelector(".progress-fill");
const progressText = document.querySelector(".progress-text");

dom_start.addEventListener("click", onStart);

// DATA  ---------------------------------------------------------
let questions = [
  {
    title: "What does HTML stand for?",
    choiceA: "Hyper Tesla Motor Land",
    choiceB: "How To Move Left",
    choiceC: "How To Make Language",
    choiceD: "Hypertext Markup Language",
    correct: "D",
  },
  {
    title: "What does CSS stand for?",
    choiceA: "Cisco and Super Start",
    choiceB: "Chily So Sart",
    choiceC: "Cascading Style Sheets",
    choiceD: "I don't know!",
    correct: "C",
  },
  {
    title: "What does JS stand for?",
    choiceA: "Just Stop",
    choiceB: "Je Sart",
    choiceC: "Javascript",
    choiceD: "RonanBest",
    correct: "C",
  },
];
let runningQuestionIndex = 0;
let score = 0;

// FUNCTIONS ---------------------------------------------------------

// Hide a given element
function hide(element) {
  // TODO
  element.style.display = "none";
}

function show(element) {
  // TODO
  element.style.display = "block";
}

function onStart() {
  // Render the current question
  // Display the quiz view,
  hide(dom_start);
  show(dom_quiz);
  document.querySelector(".progress-wrapper").style.display = "block";
  runningQuestionIndex = 0;
  score = 0;
  renderQuestion();
  updateProgress();
}

function renderQuestion() {
  // Render the current question on the quiz view
  let q = questions[runningQuestionIndex];
  dom_question.innerHTML = "<p>" + q.title + "</p>";
  dom_choiceA.innerHTML = q.choiceA;
  dom_choiceB.innerHTML = q.choiceB;
  dom_choiceC.innerHTML = q.choiceC;
  dom_choiceD.innerHTML = q.choiceD;
}

function onPlayerSubmit(answer) {
  // Update the score, display the next question or the score view
  let q = questions[runningQuestionIndex];
  if (q.correct === answer) {
    score++;
  }
  runningQuestionIndex++;
  if (runningQuestionIndex < questions.length) {
    renderQuestion();
    updateProgress();
  } else {
    progressFill.style.width = "100%";
    progressText.textContent = `Question ${questions.length} / ${questions.length}`;
    renderSCore();
  }
}

function renderSCore() {
  // calculate the amount of question percent answered by the user
  // choose the image based on the scorePerCent
  hide(document.querySelector("#choices"));
  hide(dom_question);
  show(dom_score);
  const scorePerCent = Math.round((100 * score) / questions.length);
  document.querySelector(".progress-wrapper").style.display = "none";
  let emoji = scorePerCent >= 80 ? "😊"
    : scorePerCent >= 60 ? "🙂"
      : scorePerCent >= 40 ? "😐"
        : scorePerCent >= 20 ? "😕"
          : "😞";
  dom_score.innerHTML = `<p>${emoji}</p><p>${scorePerCent}%</p>`;
}

// FUNCTIONS ---------------------------------------------------------
show(dom_start);
hide(dom_quiz);
hide(dom_score);

// PROCESS BAR ---------------------------------------------------------
function updateProgress() {
  const total = questions.length;
  const current = runningQuestionIndex + 1;

  const percent = Math.round((current / total) * 100);

  progressFill.style.width = percent + "%";
  progressText.textContent = `Question ${current} / ${total}`;
}
