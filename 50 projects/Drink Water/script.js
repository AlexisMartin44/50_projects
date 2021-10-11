
const bottles = document.querySelectorAll('.bottle');
const fulls = document.querySelectorAll('.full');
const emptys = document.querySelectorAll('.empty');
const textsEmpty = document.querySelectorAll('.text-empty');
const textsFull = document.querySelectorAll('.text-full');
const bottlesTotal = document.querySelectorAll('.bottle-total');
const buttons = document.querySelectorAll('.button');
const containers = document.querySelectorAll('.container');

let specialInterval;

bottles.forEach(function (bottle, i, bottles) {
    bottle.addEventListener('click', function () {
        const firstContainer = bottle.classList.contains('firstContainer');
        const isActive = bottle.classList.contains('active');
        let nextBottle = false;
        if (i !== bottles.length - 1) {
            nextBottle = bottles[i + 1].classList.contains('active');
        }
        resetBottles();
        updateBottle(i, isActive, nextBottle, firstContainer ? 0 : 1);
    });
});

function updateBottle(index, isActive, nextBottle, whichContainer) {
    fulls[whichContainer].style.height = '0rem';
    emptys[whichContainer].style.height = '10rem'
    textsEmpty[whichContainer].innerHTML = '2L';
    textsFull[whichContainer].innerHTML = '0L';
    for (let i = whichContainer === 0 ? 0 : 8; i <= index; i++) {

        if (i === 7 || i === 15) {
            confetti.start();
            setTimeout(function () {
                confetti.stop();
            }, 5000);
        }

        bottles[i].classList.add('active');
        if (textsFull[whichContainer].innerHTML === '0L')
            textsFull[whichContainer].style.display = "none";
        else
            textsFull[whichContainer].style.display = "block";
        if (isActive && i === index && !nextBottle) {
            bottles[i].classList.remove('active');
        } else {
            fulls[whichContainer].style.height = (Number(fulls[whichContainer].style.height.replace('rem', "")) + 1.25) + 'rem';
            emptys[whichContainer].style.height = (Number(emptys[whichContainer].style.height.replace('rem', '')) - 1.25) + 'rem';
            textsEmpty[whichContainer].innerHTML = (Number(textsEmpty[whichContainer].innerHTML.replace('L', '')) - 0.25) + 'L';
            textsFull[whichContainer].innerHTML = (Number(textsFull[whichContainer].innerHTML.replace('L', '')) + 0.25) + 'L';
            if (textsEmpty[whichContainer].innerHTML === "0L")
                textsEmpty[whichContainer].innerHTML = "";
        }

    }
}

bottlesTotal.forEach((bottleTotal, i) => {
    bottleTotal.addEventListener('click', function () {
        bottleTotal.classList.add('reverse');
        setTimeout(function () {
            if (i === 1 && bottles[8].classList.contains('active'))
                specialInterval = setInterval(createBubble.bind(this, document.body, 100), 50);
            resetBottles();
            resetBottleTotal();
        }, 500);
        setTimeout(function () {
            bottleTotal.classList.remove('reverse');
        }, 1500);
        if (i === 1) {
            setTimeout(function () {
                clearInterval(specialInterval);
            }, 3000);
        }

    });
})


buttons.forEach(button => {
    button.addEventListener('click', function () {
        resetBottles();
        resetBottleTotal();
        containers[0].classList.toggle('hide');
        containers[1].classList.toggle('show');
    });
});

function resetBottles() {
    bottles.forEach(bottle => {
        bottle.classList.remove('active');
    });
}

function resetBottleTotal() {
    bottlesTotal.forEach(bottleTotal => {
        const whichContainer = bottleTotal.classList.contains('bottle-total--1') ? 0 : 1;
        fulls[whichContainer].style.height = '0rem';
        emptys[whichContainer].style.height = '10rem'
        textsEmpty[whichContainer].innerHTML = '2L';
        textsFull[whichContainer].innerHTML = '0L';
    });
}

function createBubble(parent, sizeBubble) {
    const element = document.createElement('span');
    let size = Math.random() * (sizeBubble === 100 ? 30 : 7);
    if (sizeBubble === 100)
        element.classList.add('bodyBubble');
    else
        element.classList.add('fullBubble');
    element.style.width = size + "px";
    element.style.height = size + "px";
    element.style.left = Math.random() * sizeBubble + "rem";
    parent.appendChild(element);
    setTimeout(() => {
        element.remove();
    }, 4000);
}

let interval = setInterval(createBubble.bind(this, fulls[1], 5), 50);