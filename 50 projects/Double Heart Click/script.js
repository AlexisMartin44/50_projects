const imageContainer = document.querySelector('.image');
const number = document.querySelector('.number');

let counter = 0;

imageContainer.addEventListener('dblclick', function (event) {
    counter++;
    number.innerHTML = counter;
    const newElement = document.createElement('div');
    newElement.classList.add('heart');
    newElement.style.top = event.clientY - imageContainer.getBoundingClientRect().top + "px";
    newElement.style.left = event.clientX - imageContainer.getBoundingClientRect().left + "px";
    imageContainer.insertAdjacentElement('beforeend', newElement);
    setTimeout(function () {
        imageContainer.firstChild.remove();
    }, 1000);
});
