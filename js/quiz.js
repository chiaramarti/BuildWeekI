const quizQuestions = {
  response_code: 0,
  results: [
    {
      type: "multiple",
      difficulty: "easy",
      category: "Science: Computers",
      question: "What language does Node.js use?",
      correct_answer: "JavaScript",
      incorrect_answers: ["Java", "Java Source", "Joomla Source Code"],
    },

    {
      type: "multiple",
      difficulty: "easy",
      category: "Science: Computers",
      question: "In computing, what does MIDI stand for?",
      correct_answer: "Musical Instrument Digital Interface",
      incorrect_answers: [
        "Musical Interface of Digital Instruments",
        "Modular Interface of Digital Instruments",
        "Musical Instrument Data Interface",
      ],
    },

    {
      type: "multiple",
      difficulty: "easy",
      category: "Science: Computers",
      question:
        "The series of the Intel HD graphics generation succeeding that of the 5000 and 6000 series (Broadwell) is called:",
      correct_answer: "HD Graphics 500",
      incorrect_answers: ["HD Graphics 700 ", "HD Graphics 600", "HD Graphics 7000"],
    },

    {
      type: "multiple",
      difficulty: "easy",
      category: "Science: Computers",
      question: "How long is an IPv6 address?",
      correct_answer: "128 bits",
      incorrect_answers: ["32 bits", "64 bits", "128 bytes"],
    },

    {
      type: "multiple",
      difficulty: "easy",
      category: "Science: Computers",
      question: "Which company was established on April 1st, 1976 by Steve Jobs, Steve Wozniak and Ronald Wayne?",
      correct_answer: "Apple",
      incorrect_answers: ["Microsoft", "Atari", "Commodore"],
    },
    {
      type: "multiple",
      difficulty: "easy",
      category: "Science: Computers",
      question: "If you were to code software in this language you&#039;d only be able to type 0&#039;s and 1&#039;s.",
      correct_answer: "Binary",
      incorrect_answers: ["JavaScript", "C++", "Python"],
    },
    {
      type: "multiple",
      difficulty: "easy",
      category: "Science: Computers",
      question: "According to the International System of Units, how many bytes are in a kilobyte of RAM?",
      correct_answer: "1000",
      incorrect_answers: ["512", "1024", "500"],
    },
    {
      type: "multiple",
      difficulty: "easy",
      category: "Science: Computers",
      question: "What amount of bits commonly equals one byte?",
      correct_answer: "8",
      incorrect_answers: ["1", "2", "64"],
    },
    {
      type: "boolean",
      difficulty: "easy",
      category: "Science: Computers",
      question: "The Windows 7 operating system has six main editions.",
      correct_answer: "True",
      incorrect_answers: ["False"],
    },
    {
      type: "boolean",
      difficulty: "easy",
      category: "Science: Computers",
      question: "In most programming languages, the operator ++ is equivalent to the statement &quot;+= 1&quot;.",
      correct_answer: "True",
      incorrect_answers: ["False"],
    },
  ],
};

/* ciclare le domande */
const question = getElementById("question");
const answ1 = getElementById("answ1");
const answ2 = getElementById("answ2");
const answ3 = getElementById("answ3");
const answ4 = getElementById("answ4");

function next() {
  for (var i = 0; i < quizQuestions.length; i += 1) {
    function getQuestion() {
      var questionInner = document.getElementById("question");
      return (questionInner.innerHTML = questionArr[i].question);
    }
    getQuestion();

    function getAnswerOne() {
      var answerOneInner = document.getElementById("answerOne");
      return (answerOneInner.innerHTML = questionArr[i].answerOne);
    }
    getAnswerOne();

    function getAnswerTwo() {
      var answerTwoInner = document.getElementById("answerTwo");
      return (answerTwoInner.innerHTML = questionArr[i].answerTwo);
    }
    getAnswerTwo();

    function getAnswerThree() {
      var answerThreeInner = document.getElementById("answerThree");
      return (answerThreeInner.innerHTML = questionArr[i].answerThree);
    }
    getAnswerThree();
  }
}

/*    T  I  M  E  R   */

function startTimer() {
  const countdownElement = document.getElementById("n-16");
  let countdown = 0; // Inizia da 0
  const maxCountdown = 60;

  const circle = document.querySelector(".circle"); // Seleziona il cerchio timer

  const timerInterval = 1000; // Intervallo di aggiornamento del timer in millisecondi

  let progress = 0; // Inizializza la variabile di progresso

  let timer = setInterval(() => {
    countdown++;
    if (countdown > maxCountdown) {
      // Se il countdown supera il massimo, ripartiamo da 0
      countdown = 0;
    }
    countdownElement.textContent = countdown; // Aggiorna il valore del countdown

    // Calcola il progresso della barra di caricamento
    progress = (countdown / maxCountdown) * 100;

    // Imposta la larghezza della barra di caricamento
    circle.style.background = `conic-gradient(#00ffff ${progress}%, rgba(255, 255, 255, 0.3) ${progress}%) border-box`;
  }, timerInterval);
}

startTimer();
