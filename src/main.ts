import "./main.scss";
import { quizQuestions, question } from "./data.ts";

let currentQuestion = 0;
let isAnswerSelected: boolean[] = Array(quizQuestions.length).fill(false);

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
  document.querySelectorAll<HTMLButtonElement>(".answers")
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
  !nextQuestionButton ||
  !startAgainButton
) {
  throw new Error("Issue with the containers");
}

// QUESTIONS ON THE SCREEN
const displayQuestion = (currentQuestion: number) => {
  const question = quizQuestions[currentQuestion].question;
  questionContainer.innerHTML = question;
};

displayQuestion(currentQuestion);

// ANSWERS ON THE SCREEN
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


// WHEN THE ANSWER IS RIGHT THE SEGMENTS IN THE PROGRESS BAR NEED TO LIGHT UP BY ONE
// WHEN THE ANSWER IS WRONG THE SEGMENTS NEED TO STAY THE SAME
// USE IF / ELSE IF STANTEMENTS TO ORGANISE RIGHT OR WRONG ANSWERS. E.G. THIS IS

const handleCorrectAnswer = (event: Event) => {
  const button = event.target as HTMLButtonElement;

  const correctAnswer = quizQuestions[currentQuestion].correctAnswer
  const selectedAnswer = Number(button.value)
  if(selectedAnswer == correctAnswer) {
    turnButtonGreen(button);
    // EXECUTE FUNCTION THAT MOVES THE PROGRESS BAR ON
  } else {
    turnButtonRed(button);
  }
  answerButtons.forEach((answerButtons) => {
  answerButtons.disabled = true;
  })
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


// NEXT BUTTON TO GO TO THE NEXT QUESTION
//(MOVE TO THE NEXT INDEX/QUESTION EVERYTIME THE NEXT ARROW IS CLICKED)
// HAVE THIS BUTTON HAVE A COUNT TO UPDATE THE QUESTION NUMBER BY 1.
// ANSWER BUTTON COLOURS NEED TO RESET ONCE THE NEXT QUESTION BUTTON HAS BEEN PRESSED
const handleIncrementQuestion = (event: Event) => {
  event.target as HTMLButtonElement;
  currentQuestion++;
  console.log(answerButtons)
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

// BUTTON THAT TAKES YOU BACK TO THE START OF THE QUIZ

const handleStartAgain = (event: Event) => {
  event.target as HTMLButtonElement;
  window.location.reload();
};

startAgainButton.addEventListener("click", handleStartAgain);
