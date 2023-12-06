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
const nextQuestion = 
  document.querySelector<HTMLButtonElement>("#next-question")

if (
  !questionContainer ||
  !answerContainerOne ||
  !answerContainerTwo ||
  !answerContainerThree ||
  !answerContainerFour ||
  !nextQuestion
) {
  throw new Error("Issue with the containers");
}

// QUESTIONS ON THE SCREEN
// ACCESS QUESTION THROUGH INDEX
// ADD DISPLAY FUNCTION

const displayQuestion = (index : number) => {
  const question = quizQuestions [index].question;
  questionContainer.innerHTML = question
}

displayQuestion(currentQuestion)


const displayAnswers = () => {
  const answerOne = quizQuestions [currentQuestion].answers[0];
  answerContainerOne.innerHTML = answerOne;
  const answerTwo = quizQuestions [currentQuestion].answers[1];
  answerContainerTwo.innerHTML = answerTwo;
  const answerThree = quizQuestions [currentQuestion].answers[2];
  answerContainerThree.innerHTML = answerThree;
  const answerFour = quizQuestions [currentQuestion].answers[3];
  answerContainerFour.innerHTML = answerFour;
}

displayAnswers()



// ANSWERS ON THE SCREEN

// ANSWERS NEED TO BE CLCIKABLE AND SHOW UP RIGHT OR WRONG (turn green/red)

// WHEN THE ANSWER IS RIGHT THE SEGMENTS IN THE PROGRESS BAR NEED TO LIGHT UP BY ONE
// WHEN THE ANSWER IF WRONG THE SEGMENTS NEED TO STAY THE SAME

// NEXT BUTTON TO GO TO THE NEXT QUESTION
//(MOVE TO THE NEXT INDEX/QUESTION EVERYTIME THE NEXT ARROW IS CLICKED)
// HAVE THIS BUTTON HAVE A COUNT TO UPDATE THE QUESTION NUMBER BY 1.



const handleIncrementQuestion = (event : Event) => {
  currentQuestion++ 
  console.log(currentQuestion)
}

nextQuestion.addEventListener("click", handleIncrementQuestion);
