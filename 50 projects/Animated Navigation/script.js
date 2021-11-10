const navToggle = document.querySelector(".toggle-div");
const container = document.querySelector(".container");

navToggle.addEventListener("click", function (e) {
  container.classList.toggle("active");
});
