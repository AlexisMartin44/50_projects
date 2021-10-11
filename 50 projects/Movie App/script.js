const container = document.querySelector('.container');
const searchBar = document.querySelector('.searchInput');
let films = [];


function requestDB() {
    const request = fetch(`https://api.themoviedb.org/3/trending/tv/week?api_key=5732b22732845a371b0a418fe65ae97b`).then(function (response) {
        return response.json();
    }).then(function (result) {
        const filmInformation = result.results;
        console.log(filmInformation);
        filmInformation.forEach(film => {
            container.insertAdjacentHTML('beforeend',
                `<div class="film">
<img class="film-img" src="https://image.tmdb.org/t/p/original/${film.poster_path}" alt="">
<div class="film-title"><span class="title">${film.title}</span><span class="rate ${Number(film.vote_average) < 5 ? "red" : ""} ${Number(film.vote_average) > 8 ? "green" : ""}">${film.vote_average}</span></div>
<div class="film-overview"><p class="film-overview-title">Overview</p><p class="film-overview-description">${film.overview}</p></div>
</div>`)
        });
        films = document.querySelectorAll('.film');
    });
}

requestDB();

searchBar.addEventListener('change', () => {
    container.innerHTML = "";
    if (searchBar.value !== "") {
        const request2 = fetch(`https://api.themoviedb.org/3/search/tv?api_key=5732b22732845a371b0a418fe65ae97b&query=${searchBar.value}`).then(function (response) {
            return response.json();
        }).then(function (result) {
            const filmInformation = result.results;
            console.log(filmInformation);
            filmInformation.forEach(film => {
                console.log(film);
                container.insertAdjacentHTML('beforeend',
                    `<div class="film">
    <img class="film-img" src="https://image.tmdb.org/t/p/original/${film.poster_path}" alt="">
    <div class="film-title"><span class="title">${film.title}</span><span class="rate ${Number(film.vote_average) < 5 ? "red" : ""} ${Number(film.vote_average) > 8 ? "green" : ""}">${film.vote_average}</span></div>
    <div class="film-overview"><div class="film-overview-title">Overview</div><div class="film-overview-description">${film.overview}</div></div>
    </div>`)
            });
            films = document.querySelectorAll('.film');
        });
    } else
        requestDB();

});
