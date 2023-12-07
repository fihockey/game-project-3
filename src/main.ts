import "./main.scss";
import { quizQuestions, question } from "./data.ts";

let currentQuestion = 0;

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
  document.querySelectorAll<HTMLButtonElement>(".answer-buttons")
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
// ACCESS QUESTION THROUGH INDEX
// ADD DISPLAY FUNCTION

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

// ANSWERS NEED TO BE CLCIKABLE AND SHOW UP RIGHT OR WRONG (turn green/red)

const handleCorrectAnswer = (event: Event, question: question) => {
  const button = event.target as HTMLButtonElement;
  let correctAnswer = question.answers[question.correctAnswer];
  if (button.innerText === correctAnswer) {
    turnButtonGreen(button);
    // EXECUTE FUNCTION THAT MOVES THE PROGRESS BAR ON
  } else {
    turnButtonRed(button);
  }
};

const turnButtonGreen = (button: HTMLButtonElement) => {
  button.style.backgroundColor = "green";
};

const turnButtonRed = (button: HTMLButtonElement) => {
  button.style.backgroundColor = "red";
};


answerButtons.forEach((button) => {
  button.addEventListener("click", (event) => handleCorrectAnswer(event, quizQuestions[currentQuestion]));
});


// answerButtons.forEach((button) => {
//   button.addEventListener("click", handleCorrectAnswer);
// });

// WHEN THE ANSWER IS RIGHT THE SEGMENTS IN THE PROGRESS BAR NEED TO LIGHT UP BY ONE
// WHEN THE ANSWER IF WRONG THE SEGMENTS NEED TO STAY THE SAME
// USE IF / ELSE IF STANTEMENTS TO ORGANISE RIGHT OR WRONG ANSWERS. E.G. THIS IS

// NEXT BUTTON TO GO TO THE NEXT QUESTION
//(MOVE TO THE NEXT INDEX/QUESTION EVERYTIME THE NEXT ARROW IS CLICKED)
// HAVE THIS BUTTON HAVE A COUNT TO UPDATE THE QUESTION NUMBER BY 1.

const handleIncrementQuestion = (event: Event) => {
  event.target as HTMLButtonElement;
  currentQuestion++;
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
