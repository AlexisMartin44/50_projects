
const passwordLengthContainer = document.querySelector('.number');
const checkboxes = document.querySelectorAll('.checkbox');
const button = document.querySelector('.button');
const textContainer = document.querySelector('.password-input');

let letters = [];
let symbols = [];
let numbers = [];

for (let i = 97; i < 123; i++) {
    letters.push(String.fromCharCode(i));
}

for (let i = 48; i < 58; i++) {
    numbers.push(String.fromCharCode(i));
}

for (let i = 33; i < 48; i++) {
    symbols.push(String.fromCharCode(i));
}

button.addEventListener('click', function () {
    const value = passwordLengthContainer.value;
    let uppercase = checkboxes[0].checked;
    let lowercase = checkboxes[1].checked;
    let numbers = checkboxes[2].checked;
    let symbols = checkboxes[3].checked;

    let password = "";
    for (let i = 0; i < value; i++) {
        password += " ";
    }
});