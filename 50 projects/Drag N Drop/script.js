let dragged;

document.addEventListener("drag", function (event) {}, false);
document.addEventListener(
  "dragstart",
  function (event) {
    dragged = event.target;
    event.target.style.opacity = 0.5;
    setTimeout(() => (event.target.style.opacity = 0));
  },
  false
);
document.addEventListener(
  "dragend",
  function (event) {
    event.target.style.opacity = "";
  },
  false
);
document.addEventListener(
  "dragover",
  function (event) {
    event.preventDefault();
  },
  false
);
document.addEventListener(
  "dragenter",
  function (event) {
    if (event.target.className == "square") {
      event.target.style.backgroundColor = "black";
      event.target.style.border = "4px dashed grey";
    }
  },
  false
);
document.addEventListener(
  "dragleave",
  function (event) {
    if (event.target.className == "square") {
      event.target.style.backgroundColor = "white";
      event.target.style.border = "4px solid black";
    }
  },
  false
);
document.addEventListener(
  "drop",
  function (event) {
    event.preventDefault();
    if (event.target.className == "square") {
      event.target.style.backgroundColor = "white";
      event.target.style.border = "4px solid black";
      dragged.parentNode.removeChild(dragged);
      event.target.appendChild(dragged);
    }
  },
  false
);
