const input = document.querySelector('input');
const infoContainer = document.querySelector('.info-container');

input.addEventListener('keypress', function (event) {
    if (event.key === 'Enter') {
        if (input.value !== "") {
            fetch(`https://api.github.com/users/${input.value}`, { //potentiellement un header en fonction des API
                headers: {
                    'Accept': "application/vnd.github.v3+json"
                }
            }
            ).then(function (response) {
                return response.json();
            }).then(data => {
                infoContainer.innerHTML = `
            <div class="profile-image"></div>
        <div class="description-container">
          <h2 class="name">${data.name}</h2>
          <div class="bio">
            ${data.bio}
          </div>
          <div class="followers-container">
            <div class="followers">${data.followers} followers</div>
            <div class="following">${data.following} following</div>
            <div class="repos">${data.public_repos} repos</div>
          </div>
          <div class="descriptions">
            </div>`;

                document.querySelector('.profile-image').style.backgroundImage = `url('${data.avatar_url}')`
            });

            fetch(`https://api.github.com/users/${input.value}/repos`, {
                headers: {
                    'Accept': 'application/vnd.github.v3+json'
                }
            }).then(response => {
                return response.json();
            }).then(data => {
                const descriptions = document.querySelector('.descriptions');
                for (let i = 0; i < data.length; i++) {
                    descriptions.innerHTML += `<div class="description">${data[i].name}</div>`;
                    if (i > 6) break;
                }
            })
        } else {
            infoContainer.innerHTML = `
        <div class="description-container">
          <h2 class="name">No profile with this username</h2>
         </div>`;
        }

    }
});


