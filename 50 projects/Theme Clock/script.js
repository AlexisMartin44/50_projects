let hour = new Date();
const days = [
  "SUNDAY",
  "MONDAY",
  "TUESDAY",
  "WEDNESDAY",
  "THURSDAY",
  "FRIDAY",
  "SATURDAY",
];
const aiguilles = document.querySelectorAll(".aiguille");
const textClock = document.querySelector(".text-clock-hours");
const textClockDay = document.querySelector(".text-clock-day");
const button = document.querySelector(".button-mode");
const container = document.querySelector(".container");

let interval = setInterval(function () {
  hour = new Date();
  if (hour.getSeconds() === 0) {
    aiguilles[0].style.display = "none";
  }
  aiguilles[0].style.transform = `rotate(${hour.getSeconds() * 6 - 90}deg)`;
  aiguilles[0].style.display = "block";
  aiguilles[1].style.transform = `rotate(${
    hour.getMinutes() * 6 - 90 + (hour.getSeconds() * 6) / 60
  }deg)`;
  aiguilles[2].style.transform = `rotate(${
    hour.getHours() * 30 - 90 + (hour.getMinutes() * 30) / 60
  }deg)`;

  textClockDay.innerHTML = `${days[hour.getDay()]}, ${hour
    .toGMTString()
    .slice(8, 11)
    .toUpperCase()} ${hour.getDate()}`;
  textClock.innerHTML = `${hour.getHours()}:${
    hour.getMinutes() < 10 ? "0" + hour.getMinutes() : hour.getMinutes()
  } PM`;
}, 1000);

button.addEventListener("click", function () {
  button.classList.toggle("active");
  container.classList.toggle("active");

  if (button.classList.contains("active")) {
    button.innerHTML = "Light mode";
  } else {
    button.innerHTML = "Dark mode";
  }
});
