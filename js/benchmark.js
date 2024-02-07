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
