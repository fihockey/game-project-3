import "./main.scss";
import { quizQuestions, question } from "./data.ts";
import { winnings, moneyValue} from "./data.ts";

let currentQuestion = 0;
let score = 0;


const questionContainer =
  document.querySelector<HTMLParagraphElement>("#question");
const answerContainerOne =
  document.querySelector<HTMLButtonElement>("#answer-one");
const answerContainerTwo =
  document.querySelector<HTMLButtonElement>("#answer-two");
const answerContainerThree =
  document.querySelector<HTMLButtonElement>("#answer-three");
const answerContainerFour =
  document.querySelector<HTMLButtonElement>("#answer-four");
const answerButtons =
  document.querySelectorAll<HTMLButtonElement>(".answers");
const scoreContainer =
  document.querySelector<HTMLParagraphElement>(".score__container");
const nextQuestionButton =
  document.querySelector<HTMLButtonElement>("#next-question");
const startAgainButton = 
  document.querySelector<HTMLButtonElement>("#start-again");


if (
  !questionContainer ||
  !answerContainerOne ||
  !answerContainerTwo ||
  !answerContainerThree ||
  !answerContainerFour ||
  !answerButtons ||
  !scoreContainer ||
  !nextQuestionButton ||
  !startAgainButton 
  
) {
  throw new Error("Issue with the containers");
}


const displayQuestion = (currentQuestion: number) => {
  const question = quizQuestions[currentQuestion].question;
  questionContainer.innerHTML = question;
};

displayQuestion(currentQuestion);


const displayAnswers = (currentQuestion: number) => {
  const answerOne = quizQuestions[currentQuestion].answers[0];
  answerContainerOne.innerHTML = answerOne;
  const answerTwo = quizQuestions[currentQuestion].answers[1];
  answerContainerTwo.innerHTML = answerTwo;
  const answerThree = quizQuestions[currentQuestion].answers[2];
  answerContainerThree.innerHTML = answerThree;
  const answerFour = quizQuestions[currentQuestion].answers[3];
  answerContainerFour.innerHTML = answerFour;
};

displayAnswers(currentQuestion);


const displayScore = (score: number) => {
  const money = winnings[score].moneyValue
  scoreContainer.innerHTML = money
}

displayScore(score);


const handleCorrectAnswer = (event: Event) => {
  const button = event.target as HTMLButtonElement;

  const correctAnswer = quizQuestions[currentQuestion].correctAnswer
  const selectedAnswer = Number(button.value)
  if (selectedAnswer == correctAnswer) {
    turnButtonGreen(button);
    score++
  } else {
    turnButtonRed(button);
  }

  if (currentQuestion === 5) {
      nextQuestionButton.innerHTML = "PRIZE"
    } else {
      nextQuestionButton.innerHTML = "Next Question"
    }

  answerButtons.forEach((answerButtons) => {
  answerButtons.disabled = true;
  })

  displayScore(score)
};

const turnButtonGreen = (button: HTMLButtonElement) => {
  button.classList.add("correct-answer")
};

const turnButtonRed = (button: HTMLButtonElement) => {
  button.classList.add("wrong-answer")
};

answerButtons.forEach((button) => {
  button.addEventListener("click",handleCorrectAnswer);
});


const handleIncrementQuestion = (event : Event) => {
  event.target as HTMLButtonElement;
  currentQuestion++;
  answerButtons.forEach((answerButtons) => {
    answerButtons.classList.add("default-answer")
    answerButtons.classList.replace("correct-answer", "default-answer")
    answerButtons.classList.replace("wrong-answer", "default-answer")
    answerButtons.disabled = false;
  })
  displayQuestion(currentQuestion);
  displayAnswers(currentQuestion);
};

nextQuestionButton.addEventListener("click", handleIncrementQuestion);

// const handlePrizeButton = (event : Event) => {
//   event.target as HTMLButtonElement;
//   if (nextQuestionButton.innerHTML === "PRIZE") {
//     questionContainer &&
//   answerContainerOne &&
//   answerContainerTwo &&
//   answerContainerThree &&
//   answerContainerFour &&
//   nextQuestionButton &&
//   startAgainButton.style.display == "none"
//   } else {
//     questionContainer &&
//   answerContainerOne &&
//   answerContainerTwo &&
//   answerContainerThree &&
//   answerContainerFour &&
//   nextQuestionButton &&
//   startAgainButton.style.display == "block"
//   }
// }

// nextQuestionButton.addEventListener("click",handlePrizeButton)

const handleStartAgain = (event: Event) => {
  event.target as HTMLButtonElement;
  window.location.reload();
};

startAgainButton.addEventListener("click", handleStartAgain);


// WHEN THE PRIZE BUTTON IS PRESSED ALL OTHER ELEMENTS DISSAPEAR AND THE BOX APPEARS IN THE CENTRE OF THE SCREEN WITH CONFETTI