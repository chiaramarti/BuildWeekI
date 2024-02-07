const questions = {
  response_code: 0,
  results: [
    {
      type: "multiple",
      difficulty: "easy",
      category: "Science: Computers",
      question: "What does LTS stand for in the software market?",
      correct_answer: "Long Term Support",
      incorrect_answers: [
        "Long Taco Service",
        "Ludicrous Transfer Speed",
        "Ludicrous Turbo Speed",
      ],
    },
    {
      type: "boolean",
      difficulty: "easy",
      category: "Science: Computers",
      question:
        "Ada Lovelace is often considered the first computer programmer.",
      correct_answer: "True",
      incorrect_answers: ["False"],
    },
    {
      type: "multiple",
      difficulty: "easy",
      category: "Science: Computers",
      question: "What does the &quot;MP&quot; stand for in MP3?",
      correct_answer: "Moving Picture",
      incorrect_answers: ["Music Player", "Multi Pass", "Micro Point"],
    },
    {
      type: "multiple",
      difficulty: "easy",
      category: "Science: Computers",
      question: "What is the domain name for the country Tuvalu?",
      correct_answer: ".tv",
      incorrect_answers: [".tu", ".tt", ".tl"],
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
      question:
        "The Python programming language gets its name from the British comedy group &quot;Monty Python.&quot;",
      correct_answer: "True",
      incorrect_answers: ["False"],
    },
    {
      type: "boolean",
      difficulty: "easy",
      category: "Science: Computers",
      question:
        "The Windows ME operating system was released in the year 2000.",
      correct_answer: "True",
      incorrect_answers: ["False"],
    },
    {
      type: "boolean",
      difficulty: "easy",
      category: "Science: Computers",
      question: "Time on Computers is measured via the EPOX System.",
      correct_answer: "False",
      incorrect_answers: ["True"],
    },
    {
      type: "multiple",
      difficulty: "easy",
      category: "Science: Computers",
      question:
        "When Gmail first launched, how much storage did it provide for your email?",
      correct_answer: "1GB",
      incorrect_answers: ["512MB", "5GB", "Unlimited"],
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
      question: "In computing, what does MIDI stand for?",
      correct_answer: "Musical Instrument Digital Interface",
      incorrect_answers: [
        "Musical Interface of Digital Instruments",
        "Modular Interface of Digital Instruments",
        "Musical Instrument Data Interface",
      ],
    },
    {
      type: "boolean",
      difficulty: "easy",
      category: "Science: Computers",
      question:
        "The programming language &quot;Python&quot; is based off a modified version of &quot;JavaScript&quot;.",
      correct_answer: "False",
      incorrect_answers: ["True"],
    },
    {
      type: "multiple",
      difficulty: "easy",
      category: "Science: Computers",
      question:
        "Which company was established on April 1st, 1976 by Steve Jobs, Steve Wozniak and Ronald Wayne?",
      correct_answer: "Apple",
      incorrect_answers: ["Microsoft", "Atari", "Commodore"],
    },
    {
      type: "multiple",
      difficulty: "easy",
      category: "Science: Computers",
      question:
        "Which programming language shares its name with an island in Indonesia?",
      correct_answer: "Java",
      incorrect_answers: ["Python", "C", "Jakarta"],
    },
    {
      type: "boolean",
      difficulty: "easy",
      category: "Science: Computers",
      question: "&quot;HTML&quot; stands for Hypertext Markup Language.",
      correct_answer: "True",
      incorrect_answers: ["False"],
    },
    {
      type: "multiple",
      difficulty: "easy",
      category: "Science: Computers",
      question: "What does the Prt Sc button do?",
      correct_answer:
        "Captures what&#039;s on the screen and copies it to your clipboard",
      incorrect_answers: [
        "Nothing",
        "Saves a .png file of what&#039;s on the screen in your screenshots folder in photos",
        "Closes all windows",
      ],
    },
    {
      type: "multiple",
      difficulty: "easy",
      category: "Science: Computers",
      question: "What does GHz stand for?",
      correct_answer: "Gigahertz",
      incorrect_answers: ["Gigahotz", "Gigahetz", "Gigahatz"],
    },
    {
      type: "multiple",
      difficulty: "easy",
      category: "Science: Computers",
      question:
        "The programming language &#039;Swift&#039; was created to replace what other programming language?",
      correct_answer: "Objective-C",
      incorrect_answers: ["C#", "Ruby", "C++"],
    },
    {
      type: "multiple",
      difficulty: "easy",
      category: "Science: Computers",
      question:
        "The C programming language was created by this American computer scientist. ",
      correct_answer: "Dennis Ritchie",
      incorrect_answers: [
        "Tim Berners Lee",
        "al-Khw\u0101rizm\u012b",
        "Willis Ware",
      ],
    },
    {
      type: "multiple",
      difficulty: "easy",
      category: "Science: Computers",
      question:
        "In any programming language, what is the most common way to iterate through an array?",
      correct_answer: "&#039;For&#039; loops",
      incorrect_answers: [
        "&#039;If&#039; Statements",
        "&#039;Do-while&#039; loops",
        "&#039;While&#039; loops",
      ],
    },
    {
      type: "boolean",
      difficulty: "easy",
      category: "Science: Computers",
      question: "Linus Torvalds created Linux and Git.",
      correct_answer: "True",
      incorrect_answers: ["False"],
    },
    {
      type: "multiple",
      difficulty: "easy",
      category: "Science: Computers",
      question: "What does CPU stand for?",
      correct_answer: "Central Processing Unit",
      incorrect_answers: [
        "Central Process Unit",
        "Computer Personal Unit",
        "Central Processor Unit",
      ],
    },
    {
      type: "multiple",
      difficulty: "easy",
      category: "Science: Computers",
      question: "What does the computer software acronym JVM stand for?",
      correct_answer: "Java Virtual Machine",
      incorrect_answers: [
        "Java Vendor Machine",
        "Java Visual Machine",
        "Just Virtual Machine",
      ],
    },
    {
      type: "multiple",
      difficulty: "easy",
      category: "Science: Computers",
      question:
        "In &quot;Hexadecimal&quot;, what color would be displayed from the color code? &quot;#00FF00&quot;?",
      correct_answer: "Green",
      incorrect_answers: ["Red", "Blue", "Yellow"],
    },
    {
      type: "multiple",
      difficulty: "easy",
      category: "Science: Computers",
      question:
        "In the programming language Java, which of these keywords would you put on a variable to make sure it doesn&#039;t get modified?",
      correct_answer: "Final",
      incorrect_answers: ["Static", "Private", "Public"],
    },
    {
      type: "multiple",
      difficulty: "easy",
      category: "Science: Computers",
      question: "How many kilobytes in one gigabyte (in decimal)?",
      correct_answer: "1000000",
      incorrect_answers: ["1024", "1000", "1048576"],
    },
    {
      type: "multiple",
      difficulty: "easy",
      category: "Science: Computers",
      question:
        "The series of the Intel HD graphics generation succeeding that of the 5000 and 6000 series (Broadwell) is called:",
      correct_answer: "HD Graphics 500",
      incorrect_answers: [
        "HD Graphics 700 ",
        "HD Graphics 600",
        "HD Graphics 7000",
      ],
    },
    {
      type: "boolean",
      difficulty: "easy",
      category: "Science: Computers",
      question: "RAM stands for Random Access Memory.",
      correct_answer: "True",
      incorrect_answers: ["False"],
    },
    {
      type: "multiple",
      difficulty: "easy",
      category: "Science: Computers",
      question: "In computing, what does LAN stand for?",
      correct_answer: "Local Area Network",
      incorrect_answers: [
        "Long Antenna Node",
        "Light Access Node",
        "Land Address Navigation",
      ],
    },
    {
      type: "multiple",
      difficulty: "easy",
      category: "Science: Computers",
      question: "In web design, what does CSS stand for?",
      correct_answer: "Cascading Style Sheet",
      incorrect_answers: [
        "Counter Strike: Source",
        "Corrective Style Sheet",
        "Computer Style Sheet",
      ],
    },
  ],
};

let currentQuestionIndex = 0;
let correctAnswers = []; // Array per memorizzare le risposte corrette

// Funzione per visualizzare la domanda corrente e le risposte
function displayQuestion() {
  const questionElement = document.querySelector("#box-question div");
  const responseElements = document.querySelectorAll("#response .response-b");

  // Pulisce il contenuto precedente
  questionElement.innerHTML = "";
  responseElements.forEach((responseElement) => {
    responseElement.innerHTML = "";
  });

  // Estrae la domanda corrente dall'array results
  const currentQuestion = questions.results[currentQuestionIndex];

  //numero domanda corrente
  //const questionNum = currentQuestionIndex + 1;
  const questionNum = document.querySelector("#questionNum");
  questionNum.innerHTML = `QUESTION ` + (currentQuestionIndex + 1);
  // Aggiunge la domanda corrente
  const questionText = document.createElement("strong");
  questionText.textContent = currentQuestion.question;
  questionElement.appendChild(questionText);

  // Aggiunge le risposte correnti
  const answers = [
    ...currentQuestion.incorrect_answers,
    currentQuestion.correct_answer,
  ];
  answers.sort(() => Math.random() - 0.5); // Mischia le risposte
  answers.forEach((answer) => {
    const responseButton = document.createElement("button");
    responseButton.innerHTML = answer;
    responseButton.addEventListener("click", () =>
      checkAnswer(answer === currentQuestion.correct_answer)
    );
    const responseIndex = answers.indexOf(answer) % 2;
    responseElements[responseIndex].appendChild(responseButton);
  });
}

// Funzione per verificare la risposta selezionata dall'utente
function checkAnswer(isCorrect) {
  if (isCorrect) {
    alert("Correct answer!");
    correctAnswers.push(questions.results[currentQuestionIndex].correct_answer); // Aggiunge la risposta corretta all'array
  } else {
    alert(
      "Incorrect answer. The correct answer is: " +
        questions.results[currentQuestionIndex].correct_answer
    );
  }

  currentQuestionIndex++;

  if (currentQuestionIndex < questions.results.length) {
    displayQuestion();
  } else {
    alert("End of questions!");
    console.log("Correct answers:", correctAnswers); // Stampa tutte le risposte corrette alla fine del quiz
    return correctAnswers.length;
  }
}

// Avvia il gioco mostrando la prima domanda
displayQuestion();

// Avvia il gioco mostrando la prima domanda

//TIMER

displayQuestion();

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
