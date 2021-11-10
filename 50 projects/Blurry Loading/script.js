const bg = document.querySelector(".bg");
const percentText = document.querySelector(".loading-text");
let percent = 0;

let inter = setInterval(blurring, 15);

function blurring() {
  percent++;
  percentText.innerText = percent + "%";
  bg.style.filter = `blur(${100 - percent}px)`;
  percentText.style.opacity = `${(100 - percent) / 100}`;
  if (percent >= 100) {
    clearInterval(inter);
    percentText.style.display = "none";
  }
}
