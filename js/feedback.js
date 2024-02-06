// select all the stars stars > svg > path (> fill)
const stars = document.querySelectorAll(".stars svg path");

// loop through the 'stars' NodeList
stars.forEach((star, index1) => {
    star.addEventListener("click", () => {
        stars.forEach((star, index2) => {
            index1 >= index2 ? star.classList.add("active") : star.classList.remmove("active");
        })
        })
    })

