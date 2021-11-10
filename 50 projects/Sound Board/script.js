const buttons = document.querySelectorAll(".btn");
const audios = [];
audios.push(new Audio("./sounds/applause.mp3"));
audios.push(new Audio("./sounds/boo.mp3"));
audios.push(new Audio("./sounds/gasp.mp3"));
audios.push(new Audio("./sounds/tada.mp3"));
audios.push(new Audio("./sounds/victory.mp3"));
audios.push(new Audio("./sounds/wrong.mp3"));

buttons.forEach((button, i) => {
  button.addEventListener("click", function (e) {
    audios.forEach(audio => {
      audio.pause();
      audio.currentTime = 0;
    });
    audios[i].play();
  });
});
