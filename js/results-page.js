

    const number = document.getElementById("number")
    let counter = 0;

    setInterval(() => {
        // per cambiare il valore della percentuale di test superati
        // guardare nel css alla classe @@keyframes e lavorare col stroke-dashoffset: 330;
        if(counter === 67){
            clearInterval();
        } else {
            counter += 1;
            number.innerHTML = counter + "%";
        }
    }, 18)

    

