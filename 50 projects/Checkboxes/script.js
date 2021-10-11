
const inputs = document.querySelectorAll('input');

inputs.forEach((input, index, inputs) => {
    input.addEventListener('change', function () {
        if (checkInputs()) {
            if (index - 1 >= 0)
                inputs[index - 1].checked = false;
            else inputs[2].checked = false;
        }
    });
});

function checkInputs() {
    let counter = 0;
    inputs.forEach(input => {
        if (input.checked)
            counter++;
    });
    if (counter === inputs.length) return true;
    return false;
}