const button = document.querySelector(".button");
const countdown = document.querySelector(".countdown");
const title = document.querySelector(".title");

let rotate = 0;

button.addEventListener("click", function () {
  button.style.display = "none";
  title.style.display = "block";
  setTimeout(function () {
    rotateCountdown();
  }, 1000);
  setTimeout(function () {
    rotateCountdown();
  }, 2000);
  setTimeout(function () {
    rotateCountdown();
  }, 3000);
  setTimeout(function () {
    rotateCountdown();
    button.style.display = "block";
    title.style.display = "none";
  }, 4000);
});

function rotateCountdown() {
  rotate -= 90;
  countdown.style.transform = `rotate(${rotate}deg)`;
}
