const triangles = document.querySelectorAll(".triangle");
console.log(triangles);

let transform0 = 90;
let transform1 = 0;

let interval = setInterval(function () {
  triangles[0].style.transform = `rotate(${transform0 + 180}deg)`;
  transform0 += 180;
  triangles[1].style.transform = `rotate(${transform1 + 180}deg)`;
  transform1 += 180;
}, 2000);
