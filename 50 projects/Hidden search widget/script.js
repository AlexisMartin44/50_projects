const btn = document.querySelector("button");
const inp = document.querySelector(".input-container");

btn.addEventListener("click", function (e) {
  inp.classList.toggle("active");
});
