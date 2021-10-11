
const button = document.querySelector('.button');
const notifications = document.querySelector('.notifications-container');

const randoms = ['Message One', 'Message Two', 'Message Three', 'Message Four'];

button.addEventListener('click', function () {
    notifications.insertAdjacentHTML('beforeend', `<div class="notification"><div class="text">${randoms[Math.floor(Math.random() * randoms.length)]}</div></div>`)
    setTimeout(function () {
        notifications.lastChild.remove();
    }, 2000);
});

