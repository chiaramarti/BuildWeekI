const questions = {
  response_code: 0,
  results: [
    {
      type: "multiple",
      difficulty: "easy",
      category: "Science: Computers",
      question: "What does LTS stand for in the software market?",
      correct_answer: "Long Term Support",
      incorrect_answers: ["Long Taco Service", "Ludicrous Transfer Speed", "Ludicrous Turbo Speed"],
    },
    {
      type: "boolean",
      difficulty: "easy",
      category: "Science: Computers",
      question: "Ada Lovelace is often considered the first computer programmer.",
      correct_answer: "True",
      incorrect_answers: ["False"],
    },
    {
      type: "multiple",
      difficulty: "easy",
      category: "Science: Computers",
      question: "What does the MP stand for in MP3?",
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
      question: "The Python programming language gets its name from the British comedy group 'Monty Python'.",
      correct_answer: "True",
      incorrect_answers: ["False"],
    },
    {
      type: "boolean",
      difficulty: "easy",
      category: "Science: Computers",
      question: "The Windows ME operating system was released in the year 2000.",
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
      question: "When Gmail first launched, how much storage did it provide for your email?",
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
      question: "The programming language Python is based off a modified version of JavaScript.",
      correct_answer: "False",
      incorrect_answers: ["True"],
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
      question: "Which programming language shares its name with an island in Indonesia?",
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
      correct_answer: "Captures what's on the screen and copies it to your clipboard",
      incorrect_answers: [
        "Nothing",
        "Saves a .png file of what's on the screen in your screenshots folder in photos",
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
      question: "The programming language Swift was created to replace what other programming language?",
      correct_answer: "Objective-C",
      incorrect_answers: ["C#", "Ruby", "C++"],
    },
    {
      type: "multiple",
      difficulty: "easy",
      category: "Science: Computers",
      question: "The C programming language was created by this American computer scientist. ",
      correct_answer: "Dennis Ritchie",
      incorrect_answers: ["Tim Berners Lee", "al-Khw\u0101rizm\u012b", "Willis Ware"],
    },
    {
      type: "multiple",
      difficulty: "easy",
      category: "Science: Computers",
      question: "In any programming language, what is the most common way to iterate through an array?",
      correct_answer: "&#039;For&#039; loops",
      incorrect_answers: ["If Statements", "Do-while loops", "While loops"],
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
      incorrect_answers: ["Central Process Unit", "Computer Personal Unit", "Central Processor Unit"],
    },
    {
      type: "multiple",
      difficulty: "easy",
      category: "Science: Computers",
      question: "What does the computer software acronym JVM stand for?",
      correct_answer: "Java Virtual Machine",
      incorrect_answers: ["Java Vendor Machine", "Java Visual Machine", "Just Virtual Machine"],
    },
    {
      type: "multiple",
      difficulty: "easy",
      category: "Science: Computers",
      question: "In Hexadecimal, what color would be displayed from the color code? #00FF00?",
      correct_answer: "Green",
      incorrect_answers: ["Red", "Blue", "Yellow"],
    },
    {
      type: "multiple",
      difficulty: "easy",
      category: "Science: Computers",
      question:
        "In the programming language Java, which of these keywords would you put on a variable to make sure it doesn't get modified?",
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
      incorrect_answers: ["HD Graphics 700 ", "HD Graphics 600", "HD Graphics 7000"],
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
      incorrect_answers: ["Long Antenna Node", "Light Access Node", "Land Address Navigation"],
    },
    {
      type: "multiple",
      difficulty: "easy",
      category: "Science: Computers",
      question: "In web design, what does CSS stand for?",
      correct_answer: "Cascading Style Sheet",
      incorrect_answers: ["Counter Strike: Source", "Corrective Style Sheet", "Computer Style Sheet"],
    },
  ],
};

// RESULTS PAGE JS

const getResultPage = lengthArray => {
  const body = document.querySelector("body");
  const header = document.querySelector("header");
  header.remove();
  header.innerHTML = `<header>
  <img src="./assets/img/epicode_logo.png" alt="logo-epicode" />
</header>`;
  body.appendChild(header);
  const main = document.querySelector("main");
  const centralClass = document.querySelector(".central");
  main.remove();
  main.innerHTML = `
  <h1>Results</h1>
  <h4>The summary of your answer:</h4>
  <div class="container-results left">
    <h2>Correct</h2>
    <h3 id="correct"></h3>
  </div>
  <div class="container-results circlePercetage">
    <div class="pass">
      <div class="description"></div>
    </div>
    <svg xmlns="http://www.w3.org/2000/svg" version="1.1" width="350px" height="350px">
      <defs>
        <linearGradient id="GradientColor">
          <stop offset="0%" stop-color="#e91e63" />
          <stop offset="100%" stop-color="#673ab7" />
        </linearGradient>
      </defs>
      <circle cx="-90" cy="195" r="157" stroke-linecap="strait" transform="rotate(-90 50 50)" />
    </svg>
  </div>
  <div class="container-results right">
    <h2>Wrong</h2>
    <h3 id="wrong"></h3>
  </div>`;
  centralClass.classList.remove("central");
  main.setAttribute("id", "title-result");
  body.appendChild(main);

  const footer = document.querySelector("footer");
  const footerClass = document.querySelector(".final");
  console.log(footerClass);
  footer.remove();
  footer.innerHTML = `<button type="button"><a href="feedback.html">RATE US</a></button>`;
  footerClass.classList.remove("final");
  footerClass.setAttribute("id", "rate-us");
  body.appendChild(footer);

  // costanti utili per la funzione della percentuale
  const correct = document.getElementById("correct");
  const wrong = document.getElementById("wrong");

  const descriptionContainer = document.querySelector(".description");
  const description = document.createElement("h4");
  const wrongPass = document.createElement("h3");
  const sendCertificate = document.createElement("p");

  // per far incrementare il numero di percentuali in maniera dinamica
  let counter = 0.0;
  const resultQuestion = lengthArray;
  let percentage = Math.floor((resultQuestion * 100) / 30);

  // funzione percentuale
  const print = percentage => {
    if (percentage >= 60.0) {
      description.innerText = "Congratulations!";
      wrongPass.innerText = "You passed the exam.";
      sendCertificate.innerText = `We'll send you the certificate in few minutes.
            Check your mail (including promotions / spam folder)`;
      wrongPass.appendChild(sendCertificate);
      description.appendChild(wrongPass);
      descriptionContainer.appendChild(description);
    } else {
      description.innerText = "We are sorry.";
      wrongPass.innerText = "You did not pass the exam.";
      description.appendChild(wrongPass);
      descriptionContainer.appendChild(description);
      descriptionContainer.classList.add("description-wrong");
    }
  };

  // funzione percentuali dinamiche
  setInterval(
    () => {
      // per cambiare il valore della percentuale di test superati
      // guardare nel css alla classe @@keyframes e lavorare col stroke-dashoffset: 330;
      if (counter === 100 - percentage) {
        clearInterval();
      } else {
        counter += 1;
        wrong.innerHTML = counter + "%";
        correct.innerHTML = 100 - counter + "%";
      }
    },
    18,
    percentage
  );

  print(percentage);

  // funzione adattamento livello percentuale
  const strokeDashoffsetCss = percentage => {
    let percentageWrong = 100 - percentage;
    let myRules = document.styleSheets[1].cssRules;
    console.log(myRules);
    let keyframes = myRules[18]; // a CSSKeyframesRule
    keyframes.appendRule(`100% {stroke-dashoffset:${1000 - 1000 * (percentageWrong / 100)};}`);
    console.log(keyframes);
  };

  strokeDashoffsetCss(percentage);

  // Funzione result question dinamic

  const resultsCorrect = document.querySelector(".left");
  console.log(resultsCorrect);
  const resultsWrong = document.querySelector(".right");
  console.log(resultsWrong);

  const correctQues = document.createElement("p");
  const wrongQues = document.createElement("p");

  const functioneResultsQuestionCorrectAndWrong = resultQuestion => {
    if (resultQuestion > 0) {
      correctQues.innerText = `${resultQuestion}/30 questions`;
      resultsCorrect.appendChild(correctQues);
      wrongQues.innerText = `${30 - resultQuestion}/30 questions`;
      resultsWrong.appendChild(wrongQues);
    }
  };

  functioneResultsQuestionCorrectAndWrong(resultQuestion);
};

// BENCHMARL PAGE JS
let currentQuestionIndex = 0;
let correctAnswers = []; // Array per memorizzare le risposte corrette

// Funzione per visualizzare la domanda corrente e le risposte
function displayQuestion() {
  const questionElement = document.querySelector("#box-question div");
  const responseElements = document.querySelectorAll("#response .response-b");

  // Pulisce il contenuto precedente
  questionElement.innerHTML = "";
  responseElements.forEach(responseElement => {
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
  const answers = [...currentQuestion.incorrect_answers, currentQuestion.correct_answer];
  answers.sort(() => Math.random() - 0.5); // Mischia le risposte
  answers.forEach(answer => {
    const responseButton = document.createElement("button");
    responseButton.innerHTML = answer;
    responseButton.addEventListener("click", () => checkAnswer(answer === currentQuestion.correct_answer));
    const responseIndex = answers.indexOf(answer) % 2;
    responseElements[responseIndex].appendChild(responseButton);
  });
}

// Funzione per verificare la risposta selezionata dall'utente
function checkAnswer(isCorrect) {
  clearInterval(timer); // Stop the timer
  if (isCorrect) {
    alert("Correct answer!");
    correctAnswers.push(questions.results[currentQuestionIndex].correct_answer); // Aggiunge la risposta corretta all'array
  } else {
    alert("Incorrect answer. The correct answer is: " + questions.results[currentQuestionIndex].correct_answer);
  }

  currentQuestionIndex++;

  if (currentQuestionIndex < questions.results.length) {
    startTimer(); // Start a new timer
    displayQuestion();
  } else {
    console.log("Correct answers:", correctAnswers); // Stampa tutte le risposte corrette alla fine del quiz
    getResultPage(correctAnswers.length);
  }
}

// Avvia il gioco mostrando la prima domanda
displayQuestion();

// Avvia il gioco mostrando la prima domanda

//TIMER

displayQuestion();

function startTimer() {
  const countdownElement = document.getElementById("n-16");
  let countdown = 60; // Inizia da 0
  const minCountdown = -1;

  const circle = document.querySelector(".circle"); // Seleziona il cerchio timer

  const timerInterval = 1000; // Intervallo di aggiornamento del timer in millisecondi

  let progress = 0; // Inizializza la variabile di progresso

  timer = setInterval(() => {
    countdown--;
    if (countdown === minCountdown) {
      // Se il countdown supera il massimo, ripartiamo da 0
      checkAnswer();
      countdown = 59;
    }
    countdownElement.textContent = countdown; // Aggiorna il valore del countdown

    // Calcola il progresso della barra di caricamento
    progress = (countdown / 59) * 100;

    // Imposta la larghezza della barra di caricamento
    circle.style.background = `conic-gradient(#00ffff ${progress}%, rgba(255, 255, 255, 0.3) ${progress}%) border-box`;
  }, timerInterval);
}

// avvia il gioco
startTimer();
displayQuestion();
