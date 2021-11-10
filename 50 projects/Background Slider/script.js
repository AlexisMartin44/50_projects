const containers = document.querySelectorAll(".containers");
const arrows = document.querySelectorAll(".arrow");

const imgs = [
  "./img/elliot-paris-_d1ezIJSbas-unsplash.jpg",
  "./img/fabrice-villard-SY6Co6A8Xu0-unsplash.jpg",
  "./img/tiberiu-potec-Tokc7PKfSGM-unsplash.jpg",
];

let indexImage = 0;

arrows.forEach((arrow, index) => {
  arrow.addEventListener("click", function () {
    if (index === 0) {
      indexImage--;
      if (indexImage < 0) indexImage = 2;
    } else {
      indexImage++;
      if (indexImage > 2) indexImage = 0;
    }

    containers.forEach(container => {
      container.style.backgroundImage = `url(${imgs[indexImage]})`;
    });
  });
});
