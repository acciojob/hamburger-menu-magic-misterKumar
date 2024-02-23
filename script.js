//your JS code here. If required.
const drawer = document.createElement('div');
drawer.classList.add('links-drawer-container');
drawer.append(document.querySelector('.navbar-links-list').cloneNode(true));

document.querySelector('nav').appendChild(drawer);

const menuButton = document.querySelector('.menu-toggle-button');

menuButton.addEventListener('click', (event) => {
    menuButton.classList.toggle('open-menu');
    drawer.classList.toggle('slide-in');

    menuButton.classList.toggle('close-menu');
})