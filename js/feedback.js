// select all the stars stars > svg > path (> fill)
const stars = document.querySelectorAll(".stars svg path");
// loop through the 'stars' NodeList
stars.forEach((star, index1) => {
  star.addEventListener("click", () => {
    stars.forEach((star, index2) => {
      index1 >= index2 ? star.classList.add("active") : star.classList.remove("active");
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

// all' onclick prendo il valore
var rate = 0;

function rateExperience(x) {
  rate += x;
}

console.log(rate);
// creo l'ultima pagina
function createLastPage(rate) {
  console.log(rate); // Debugging statement

  let message = "";
  const main = document.querySelector("main");

  switch (rate) {
    case 0:
      message = `<h1>We are sorry for your bad experience...</h1>`;
      break;
    case 1:
      message = `<h1>Thank you for your valuable suggestions...</h1>`;
      break;
    case 2:
      message = `<h1>Thank you for your feedback!</h1>`;
      break;
    default:
      message = `<h1>Thank you for your feedback!</h1>`;
  }

  main.innerHTML =
    message +
    `
    <p>
        "No one in the brief history of computing has ever written a piece of perfect software. It's unlikely that
        you'll be the first."
        <strong>Andy Hunt</strong>
    </p>`;
}

// document.getElementById("feedbackForm").addEventListener("submit", createLastPage);

// function createLastPage(index2) {
//   const body = document.getElementsByTagName("body");
//   const main = document.getElementsByTagName("main");
//   if (index2.classList.contains("good")) {
//     main.remove();
//     body.innerHTML = `<main class="thankYou">
//       <h1>Thank you for your feedback!</h1>
//       <p>
//         "No one in the brief history of computing has ever written a piece of perfect software. It's unlikely that
//         you'll be the first."
//         <strong>Andy Huntv</strong>
//       </p>
//     </main>
//     `;
//   } else {
//     if (index2.classList.contains("mid")) {
//       main.remove();
//       body.innerHTML = `<main class="thankYou">
//           <h1>Thank you for your valuable suggestions...</h1>
//           <p>
//             "No one in the brief history of computing has ever written a piece of perfect software. It's unlikely that
//             you'll be the first."
//             <strong>Andy Huntv</strong>
//           </p>
//         </main>
//         `;
//     } else {
//       main.remove();
//       body.innerHTML = `<main class="thankYou">
//           <h1>We are sorry for your bad experience...</h1>
//           <p>
//             "No one in the brief history of computing has ever written a piece of perfect software. It's unlikely that
//             you'll be the first."
//             <strong>Andy Huntv</strong>
//           </p>
//         </main>
//         `;
//     }
//   }
// }

// Select all the stars
// const stars = document.querySelectorAll(".stars svg path");

// Loop through the stars NodeList
// stars.forEach((star, index1) => {
//   // On mouseover, change the color of stars based on their position
//   star.addEventListener("mouseover", () => {
//     stars.forEach((star, index2) => {
//       index1 >= index2 ? star.classList.add("active") : star.classList.remove("active");
//     });
//   });

//   // On click, change the color of stars and extract the className of the clicked star
//   star.addEventListener("click", () => {
//     let clickedClassName = ""; // Initialize clicked class name
//     stars.forEach((star, index2) => {
//       if (index1 >= index2) {
//         star.classList.add("active");
//         // Check if the clicked star has a class name of 'bad', 'mid', or 'good'
//         if (star.classList.contains("bad") || star.classList.contains("mid") || star.classList.contains("good")) {
//           clickedClassName = star.classList[0]; // Extract the class name of the clicked star
//         }
//       } else {
//         star.classList.remove("active");
//       }
//     });

//     // Show different messages based on the class name of the clicked star
//     showMessage(clickedClassName);
//   });
// });

// // Function to show different messages based on class name
// function showMessage(className) {
//   console.log("Message class name:", className); // Debugging statement

//   const main = document.querySelector("main");
//   let message = "";

//   switch (className) {
//     case "bad":
//       message = `<h1>We are sorry for your bad experience...</h1>`;
//       break;
//     case "mid":
//       message = `<h1>Thank you for your valuable suggestions...</h1>`;
//       break;
//     case "good":
//       message = `<h1>Thank you for your feedback!</h1>`;
//       break;
//     default:
//       message = `<h1>Thank you for your feedback!</h1>`;
//   }

//   console.log("Message:", message); // Debugging statement

//   // Replace the main content with the message
//   main.innerHTML =
//     message +
//     `
//   <p>
//       "No one in the brief history of computing has ever written a piece of perfect software. It's unlikely that
//       you'll be the first."
//       <strong>Andy Hunt</strong>
//   </p>`;
// }

// // Form submission event listener
// document.getElementById("feedbackForm").addEventListener("submit", function (event) {
//   event.preventDefault(); // Prevent default form submission
//   console.log("Form submitted"); // Log statement to check if form submission event is triggered

//   // Clear the input value
//   const input = document.querySelector("#feedbackForm input[type='text']");
//   input.value = "";
// });

// function rateExperience(value) {
//   const stars = document.querySelectorAll(".stars svg path");
//   stars.forEach((star, index) => {
//     if (index <= value) {
//       star.classList.add("active");
//     } else {
//       star.classList.remove("active");
//     }
//   });
// }

// // Form submission event listener
// document.getElementById("feedbackForm").addEventListener("submit",  {

//   console.log("Form submitted"); // Log statement to check if form submission event is triggered

//   let className = ""; // Initialize the class name variable

//   // Get the selected star class name
//   const selectedStar = document.querySelector(".stars svg path.active");
//   if (selectedStar) {
//     className = selectedStar.closest(".stars").classList[1]; // Get the class name of the parent element
//     console.log("Selected star class name:", className);
//   } else {
//     console.error("No star selected!");
//   }

//   // Clear the input value
//   const input = document.querySelector("#feedbackForm input[type='text']");
//   if (input) {
//     input.value = "";
//   } else {
//     console.error("Input element not found!");
//   }

//   // Show different messages based on the class name of the selected star
//   showMessage(className);
// });

// Function to show different messages based on class name
// function showMessage(className) {
//   console.log("Message class name:", className); // Debugging statement

//   const main = document.querySelector("main");
//   let message = "";

//   switch (className) {
//     case "bad":
//       message = `<h1>We are sorry for your bad experience...</h1>`;
//       break;
//     case "mid":
//       message = `<h1>Thank you for your valuable suggestions...</h1>`;
//       break;
//     case "good":
//       message = `<h1>Thank you for your feedback!</h1>`;
//       break;
//     default:
//       message = `<h1>Thank you for your feedback!</h1>`;
//   }

//   console.log("Message:", message); // Debugging statement

//   // Replace the main content with the message
//   main.innerHTML =
//     message +
//     `
//   <p>
//       "No one in the brief history of computing has ever written a piece of perfect software. It's unlikely that
//       you'll be the first."
//       <strong>Andy Hunt</strong>
//   </p>`;
// }
