
const btn = document.querySelector('.btn');
const joke = document.querySelector('.joke');

const getAJoke = async function () {

    const res = await fetch(`https://icanhazdadjoke.com/`, {
        headers: {
            'Accept': "application/json"
        }
    });
    const data = await res.json();
    joke.innerHTML = data.joke;

};

btn.addEventListener('click', getAJoke);