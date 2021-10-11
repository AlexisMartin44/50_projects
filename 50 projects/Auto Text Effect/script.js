const word = 'We Love Programming !';
const text = document.querySelector('.text');
let i = 1;
const speed = document.querySelector('#speed');



let interval = setInterval(function () {
    if (word[i] === " ") i++;
    text.innerHTML = word.slice(0, i);
    i++;
    if (i > word.length) i = 1;
}, 1000);

speed.addEventListener('change', function () {
    clearInterval(interval);
    interval = setInterval(function () {
        if (word[i] === " ") i++;
        text.innerHTML = word.slice(0, i);
        i++;
        if (i > word.length) i = 1;
    }, 1000 / speed.value);
});

