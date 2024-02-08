// select all the stars stars > svg > path (> fill)
const stars = document.querySelectorAll(".stars svg path");
let index2;
// loop through the 'stars' NodeList
stars.forEach((star, index1) => {
  star.addEventListener("click", () => {
    stars.forEach((star, index2) => {
      index1 >= index2 ? star.classList.add("active") : star.classList.remove("active");
      console.log(index2);
    });
  });
});

stars.forEach((star, index1) => {
  star.addEventListener("mouseover", function () {
    stars.forEach((star, index2) => {
      index1 >= index2 ? star.classList.add("active") : star.classList.remove("active");
    });
  });
});

ocument.getElementById("feedbackForm").addEventListener("submit", createLastPage);

const createLastPage = (index2) => {
  const body = document.getElementsByTagName("body");
  const main = document.getElementsByTagName("main");
  if (index2.classList.contains("good")) {
    main.remove();
    body.innerHTML = `<main class="thankYou">
      <h1>Thank you for your feedback!</h1>
      <p>
        "No one in the brief history of computing has ever written a piece of perfect software. It's unlikely that
        you'll be the first."
        <strong>Andy Huntv</strong>
      </p>
    </main>
    `;
  } else {
    if (index2.classList.contains("mid")) {
      main.remove();
      body.innerHTML = `<main class="thankYou">
          <h1>Thank you for your valuable suggestions...</h1>
          <p>
            "No one in the brief history of computing has ever written a piece of perfect software. It's unlikely that
            you'll be the first."
            <strong>Andy Huntv</strong>
          </p>
        </main>
        `;
    } else {
      main.remove();
      body.innerHTML = `<main class="thankYou">
          <h1>We are sorry for your bad experience...</h1>
          <p>
            "No one in the brief history of computing has ever written a piece of perfect software. It's unlikely that
            you'll be the first."
            <strong>Andy Huntv</strong>
          </p>
        </main>
        `;
    }
  }
};
