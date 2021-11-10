const labels = document.querySelector(".labels");
const input = document.querySelector(".input");
let labelElements = [];

input.addEventListener("keyup", event => {
  labels.innerHTML = "";
  const elements = input.value.split(",").filter(element => {
    return element.trim() !== "";
  });
  elements.forEach(element => {
    labels.insertAdjacentHTML(
      "beforeend",
      `<span class="label">${element}</span>`
    );
  });
  labelElements = document.querySelectorAll(".label");
});

input.addEventListener("keydown", event => {
  if (event.key === "Enter") {
    input.blur();
    let iteration = Math.trunc(Math.random() * 50 + 20);
    let elementCounter = 0;
    let inter = setInterval(function () {
      iteration--;
      if (iteration <= 0) {
        clearInterval(inter);
      }
      labelElements.forEach(element => {
        element.classList.remove("active");
      });
      console.log(labelElements[elementCounter]);
      labelElements[elementCounter].classList.add("active");
      elementCounter++;
      if (elementCounter > labelElements.length - 1) {
        elementCounter = 0;
      }
    }, 30);
  }
});
