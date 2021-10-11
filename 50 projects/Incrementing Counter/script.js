
const counters = document.querySelectorAll('.counter');


counters.forEach(counter => {
    let interval = setInterval(function () {
        counter.innerHTML = String(Number(counter.innerHTML) + 10);
        if (Number(counter.getAttribute("data-target")) <= Number(counter.innerHTML))
            clearInterval(interval);
    }, 0.1);
})