const navigationCircle = document.querySelector(".navigation-circle");
const navigationTitles = document.querySelector(".navigation-titles");

navigationCircle.addEventListener("click", function (e) {
  navigationCircle.classList.toggle("active");
  navigationTitles.classList.toggle("active");
});
