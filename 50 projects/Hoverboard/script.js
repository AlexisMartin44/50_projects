const container = document.querySelector('.container');

for (let i = 0; i < 224; i++) {
    container.insertAdjacentHTML('beforeend', `<div class="square"></div>`)
}

const squares = document.querySelectorAll('.square');
squares.forEach(square => {
    square.addEventListener('mouseover', function () {
        var randomColor = "#" + ((1 << 24) * Math.random() | 0).toString(16);
        document.documentElement.style.setProperty('--main-bg-color', randomColor);
        console.log(document.documentElement);
        square.classList.add('active');
        setTimeout(function () {
            square.classList.remove('active');
        }, 1000);
    });
});