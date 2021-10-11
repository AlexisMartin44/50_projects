
const imageContainer = document.querySelector('.image-container');

let position = 0;

const previous = document.querySelector('.previous');
const next = document.querySelector('.next');

previous.addEventListener('click', function () {
    position += 30;
    if (position > 0) {
        position = -60;
    }
    imageContainer.style.transform = `translateX(${position}rem )`
});

next.addEventListener('click', function () {
    position -= 30;
    if (position < -60) {
        position = 0;
    }
    imageContainer.style.transform = `translateX(${position}rem)`
});

