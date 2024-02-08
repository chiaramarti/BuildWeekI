let array = ["c", "a", "2", "rt", "a"];

const getResultPage = lengthArray => {
  const body = document.querySelector("body");
  const main = document.querySelector("main");
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
      <circle cx="-90" cy="194" r="157" stroke-linecap="strait" transform="rotate(-90 50 50)" />
    </svg>
  </div>
  <div class="container-results right">
    <h2>Wrong</h2>
    <h3 id="wrong"></h3>
  </div>`;
  main.setAttribute("id", "title-result");
  body.appendChild(main);

  const footer = document.querySelector("footer");
  footer.remove();
  footer.innerHTML = `<footer id="rate-us">
  <button type="button"><a href="feedback.html">RATE US</a></button>
</footer>`;
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
    let myRules = document.styleSheets[0].cssRules;
    console.log(myRules);
    let keyframes = myRules[18]; // a CSSKeyframesRule
    keyframes.appendRule(
      `100% {/* lo troviamo facendo 1000-1000x66.7 */stroke-dashoffset:${1000 - 1000 * (percentageWrong / 100)};}`
    );
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

getResultPage(array.length);
