import { quizQuestions, question } from "./data.ts";

let currentQuestion = 0;

const questionContainer =
  document.querySelector<HTMLParagraphElement>("#question");
const answerContainerOne =
  document.querySelector<HTMLParagraphElement>("#answer-one");
const answerContainerTwo =
  document.querySelector<HTMLParagraphElement>("#answer-two");
const answerContainerThree =
  document.querySelector<HTMLParagraphElement>("#answer-three");
const answerContainerFour =
  document.querySelector<HTMLParagraphElement>("#answer-four");
const nextQuestionButton = 
  document.querySelector<HTMLButtonElement>("#next-question");
const startAgainButton = 
  document.querySelector<HTMLBRElement>("#start-again")

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

const displayQuestion = (currentQuestion : number) => {
  const question = quizQuestions [currentQuestion].question;
  questionContainer.innerHTML = question
}

displayQuestion(currentQuestion)

// ANSWERS ON THE SCREEN
const displayAnswers = (currentQuestion : number) => {
  const answerOne = quizQuestions [currentQuestion].answers[0];
  answerContainerOne.innerHTML = answerOne;
  const answerTwo = quizQuestions [currentQuestion].answers[1];
  answerContainerTwo.innerHTML = answerTwo;
  const answerThree = quizQuestions [currentQuestion].answers[2];
  answerContainerThree.innerHTML = answerThree;
  const answerFour = quizQuestions [currentQuestion].answers[3];
  answerContainerFour.innerHTML = answerFour;
}

displayAnswers(currentQuestion)





// ANSWERS NEED TO BE CLCIKABLE AND SHOW UP RIGHT OR WRONG (turn green/red)

// WHEN THE ANSWER IS RIGHT THE SEGMENTS IN THE PROGRESS BAR NEED TO LIGHT UP BY ONE
// WHEN THE ANSWER IF WRONG THE SEGMENTS NEED TO STAY THE SAME
// USE IF / ELSE IF STANTEMENTS TO ORGANISE RIGHT OR WRONG ANSWERS. E.G. THIS IS 



// NEXT BUTTON TO GO TO THE NEXT QUESTION
//(MOVE TO THE NEXT INDEX/QUESTION EVERYTIME THE NEXT ARROW IS CLICKED)
// HAVE THIS BUTTON HAVE A COUNT TO UPDATE THE QUESTION NUMBER BY 1.

const handleIncrementQuestion = (event : Event) => {
  event.target as HTMLButtonElement;
 currentQuestion++ 
 displayQuestion(currentQuestion)
 displayAnswers(currentQuestion)
}

nextQuestionButton.addEventListener("click", handleIncrementQuestion);


// BUTTON THAT TAKES YOU BACK TO THE START OF THE QUIZ

const handleStartAgain = (event : Event) => {
  event.target as HTMLButtonElement;
  window.location.reload()
}

startAgainButton.addEventListener("click", handleStartAgain)