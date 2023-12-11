
## Browser Based Game

This project is a browser based quiz game built using HTML, CSS/SCSS and JavaScript/TypeScript. The aim of the project was to build a fully functioning game which took user inputs in the form of clicking answers to questions, keeping count of how many were clicked correctly/incorrectly, and displaying the users final score.


## Project Goals

1. **Create a Working Game** The main task is to create a Game; testing your understanding of TypeScript and how to break down a problem.
2. **Practice Using Git and GitHub Flow** This project gives the opertunity to get as much practice as possible using git, GitHub and the command line.
3. **Improve Understanding of Scoping Larger Projects** Produce a clear plan of what you're going to build and how.
4. **Application of Learning** This is a great place to apply what you have been learning on all of the course so far. Once functionality is complete, really push on the UI, use SCSS, BEM etc.


## Code Snippet:

The below code snippet is one that I am most proud of, as it took a little time to figure out, and is responsible for a key function of the game. It appeared to be an unlikely function in the beginning, and was coded totally different to start with (as seen below). It was only toward the end of my project that I decided to add the prize button to the functions. Instead of creating a new HTML element, I decided to reuse an element that was already there and link the new functionality of the button to the inner HTML to suit my requirements. 

- Before incoporating the prize button:

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

}

- After incorporating the prize button:

const handleIncrementQuestion = (event : Event) => {
  event.target as HTMLButtonElement;
  if (nextQuestionButton.innerHTML === "PRIZE") {

  questionContainer.style.display = "none"
  answerContainerOne.style.display = "none"
  answerContainerTwo.style.display = "none"
  answerContainerThree.style.display = "none"
  answerContainerFour.style.display = "none"
  nextQuestionButton.style.display = "none"
  startAgainButton.style.display = "block"

  scoreTitle.style.fontSize = "50px"
  scoreContainer.style.fontSize = "40px"

  const options : Options = {
    particleCount: 150,
    spread: 150,
    colors: ["#C81109", "#EF680A", "#F6B91E"]
  }

  confetti(options)
  
  } else {
    currentQuestion++;
  answerButtons.forEach((answerButtons) => {
    answerButtons.classList.add("default-answer")
    answerButtons.classList.replace("correct-answer", "default-answer")
    answerButtons.classList.replace("wrong-answer", "default-answer")
    answerButtons.disabled = false;
  })
  displayQuestion(currentQuestion);
  displayAnswers(currentQuestion);

  }

};


## Getting Started

To clone down and run this project locally, follow the below steps:

1. Clone the repository: git clone [https://github.com/fihockey/game-project-3.git]
2. Run " npm install "
3. Run " npm run dev ", this will open a local version of the code for you to try in your default browser.


## About Me

I am a Junior Software Engineer in training, with a background in sport and education. Wild career change, right? 
My passion lies in communication, creativity, problem-solving and constantly pushing to exceed my limits. 

I love a good chat, so if you're interested in collaborating with me, or simply connecting, feel free to reach out! We'll have a virtual cuppa! ☕
