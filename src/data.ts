export type question = {
  question: string;
  answers: string[];
  correctAnswer: number;
};

export type moneyValue = {
    moneyValue: string;
};


export const quizQuestions: question[] = [
  {
    question: "Who was the first presenter of the absolute hit television show Deal or No Deal?",
    answers: ["Dwayne The Rock Johnson", "Mary Berry", "Noel Edmonds", "Mr Blobby"],
    correctAnswer: 2,
  },

  {
    question: "When would you use a Call Back Function?",
  answers: ["To loop through an array", "To execute a function that has been previously defined", "To break out of a function", "To try and get back with your ex"],
  correctAnswer: 1, 
  },

  {
    question: "Why do we use Query Selectors?",
  answers: ["To access HTML elements", "To test an individual function", "To stop errors on the type", "To ask JSON when he is having a super lit party"],
  correctAnswer: 0, 
  },

  {
    question: "What does D.R.Y stand for in terms of functions?",
  answers: ["Don't Recognise Yourself", "Deliciously Roasted Yams", "Delightfully Random Yeti", "Don't Repeat Yourself"],
  correctAnswer: 3, 
  },

  {
    question: "Why do we use Event Listeners?",
  answers: ["To get notified when the new version of Node has dropped", "To get access to object values and variables", "To execute a function once an event has happened", "To spy on Winnie The Pooh organising a top secret honey raid"],
  correctAnswer: 2, 
  },

  {
    question: "Who is the greatest quiz developer this world has ever seen?",
  answers: ["Fiona", "Fi", "Fifi", "The Hockinator"],
  correctAnswer: 3, 
  },    
];


export const winnings: moneyValue[] = [
    {
        moneyValue: "£0"
    },

    {
        moneyValue: "1p"
    },

    {
        moneyValue: "£5"
    },

    {
        moneyValue: "£250"
    },

    {
        moneyValue: "£5,000"
    },

    {
        moneyValue: "£50,000"
    },

    {
        moneyValue: "£250,000"
    },
]