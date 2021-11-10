let stepValue = 1;

const prev = document.querySelector(".btn--1");
const next = document.querySelector(".btn--2");
const steps = document.querySelectorAll(".step");
const lines = document.querySelectorAll(".line");

function actualise() {
  if (stepValue === 1) {
    prev.classList.add("unactive");
  } else {
    prev.classList.remove("unactive");
  }
  if (stepValue === 4) {
    next.classList.add("unactive");
  } else {
    next.classList.remove("unactive");
  }

  steps.forEach(function (step, i) {
    if (i + 1 <= stepValue) {
      step.classList.add("active");
      if (i > 0) lines[i - 1].classList.add("activeLine");
    } else {
      step.classList.remove("active");
      lines[i - 1].classList.remove("activeLine");
    }
  });
}

prev.addEventListener("click", function (e) {
  if (stepValue > 1) stepValue--;
  actualise();
});
next.addEventListener("click", function (e) {
  if (stepValue < 4) stepValue++;
  actualise();
});
