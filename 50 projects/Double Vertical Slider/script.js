const descriptions = document.querySelectorAll(".description");
console.log(descriptions);
const images = document.querySelectorAll(".image");
const buttons = document.querySelectorAll(".button");

let indexImage = 0;
let indexDesc = 0;

buttons[0].addEventListener("click", function () {
  initDescriptions();
  indexImage++;
  if (indexImage > 3) indexImage = 0;
  indexDesc--;
  if (indexDesc < 0) indexDesc = 3;
  descriptions[getTwoPreviousIndex(indexDesc)].style.opacity = 0;
  images[getNextIndex(indexImage)].style.opacity = 0;
  refreshElements();
});

buttons[1].addEventListener("click", function () {
  initDescriptions();
  indexImage--;
  if (indexImage < 0) indexImage = 3;
  indexDesc++;
  if (indexDesc > 3) indexDesc = 0;
  descriptions[getNextIndex(indexDesc)].style.opacity = 0;
  images[getTwoPreviousIndex(indexImage)].style.opacity = 0;
  refreshElements();
});

function getTwoPreviousIndex(index) {
  if (index - 2 < 0) return 4 + index - 2;
  return index - 2;
}

function getPreviousIndex(index) {
  if (index - 1 < 0) return 3;
  return index - 1;
}

function getNextIndex(index) {
  if (index + 1 > 3) return 0;
  return index + 1;
}

function getTwoNextIndex(index) {
  if (index + 2 > 3) return index + 2 - 4;
  return index + 2;
}

function initDescriptions() {
  descriptions.forEach(description => {
    description.style.transform = "translateY(0)";
    description.style.opacity = 1;
  });

  images.forEach(image => {
    image.style.transform = "translateY(0)";
    image.style.opacity = 1;
  });
}

function refreshElements() {
  descriptions[getTwoPreviousIndex(indexDesc)].style.transform =
    "translateY(-200vh)";
  descriptions[getPreviousIndex(indexDesc)].style.transform =
    "translateY(-100vh)";
  descriptions[getNextIndex(indexDesc)].style.transform = "translateY(100vh)";

  images[getTwoPreviousIndex(indexImage)].style.transform =
    "translateY(-200vh)";
  images[getPreviousIndex(indexImage)].style.transform = "translateY(-100vh)";
  images[getNextIndex(indexImage)].style.transform = "translateY(100vh)";
}
