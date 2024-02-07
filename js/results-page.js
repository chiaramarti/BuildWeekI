

// costanti utili per la funzione della percentuale
const correct = document.getElementById("correct")
const wrong = document.getElementById("wrong")

const descriptionContainer = document.querySelector(".description");
const description = document.createElement("h4")
const wrongPass = document.createElement("h3")
const sendCertificate = document.createElement("p")

// per far incrementare il numero di percentuali in maniera dinamica
    let counter = 0.0;
    let resultQuestion = 14;
    let percentage = Math.floor(resultQuestion * 100 / 30);

// funzione percentuale
    const print = ((percentage) =>{

        if(percentage >= 60.0){
            description.innerText = "Congratulations!"
            wrongPass.innerText = "You passed the exam."
            sendCertificate.innerText = `We'll send you the certificate in few minutes.
            Check your mail (including promotions / spam folder)`;
            wrongPass.appendChild(sendCertificate)
            description.appendChild(wrongPass)
            descriptionContainer.appendChild(description)
        } else {
            description.innerText = "We are sorry."
            wrongPass.innerText = "You did not pass the exam."
            description.appendChild(wrongPass)
            descriptionContainer.appendChild(description)
            descriptionContainer.classList.add("description-wrong")
            }
        }
    )

    // funzione percentuali dinamiche
    setInterval(       
        () => {
        // per cambiare il valore della percentuale di test superati
        // guardare nel css alla classe @@keyframes e lavorare col stroke-dashoffset: 330;
        if(counter === percentage){
            clearInterval();
        } else {
            counter += 1;
            correct.innerHTML = counter + "%";
            wrong.innerHTML = (100 - counter) + "%";
        }
        
    }, 18, percentage)

    print(percentage)


    // funzione adattamento livello percentuale 
    const strokeDashoffsetCss = ((percentage) => {
        let myRules = document.styleSheets[0].cssRules;
        console.log(myRules);
        let keyframes = myRules[18]; // a CSSKeyframesRule
        keyframes.appendRule(`100% {/* lo troviamo facendo 1000-1000x66.7 */stroke-dashoffset:${1000 - 1000 * (percentage/100)};}`);
        
        }
    )

    strokeDashoffsetCss(percentage)

    // Funzione result question dinamic

    const resultsCorrect = document.querySelector(".left")
    console.log(resultsCorrect);
    const resultsWrong = document.querySelector(".right")
    console.log(resultsWrong);

    const correctQues = document.createElement("p")
    const wrongQues = document.createElement("p")

    const functioneResultsQuestionCorrectAndWrong = (resultQuestion) => {
        if (resultQuestion > 0){
            correctQues.innerText = `${resultQuestion}/30 questions`
            resultsCorrect.appendChild(correctQues)
            wrongQues.innerText = `${30 - resultQuestion}/30 questions`
            resultsWrong.appendChild(wrongQues)
        }
    }


functioneResultsQuestionCorrectAndWrong(resultQuestion)