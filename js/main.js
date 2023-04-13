// burger menu
const burgerIcon = document.querySelector('.header__icon');
const headerNav = document.querySelector('.header__nav');
const headerMenu = document.querySelector('.header__menu');

burgerIcon.addEventListener('click', showMenu);
headerMenu.addEventListener('click', hideMenu);

function showMenu() {
    // burgerIcon.classList.toggle('rotate');
    headerNav.classList.toggle('visible');
    burgerIcon.classList.toggle('icon-close');
    burgerIcon.classList.toggle('icon-burger')
}
function hideMenu() {
    headerNav.classList.remove('visible');
    // burgerIcon.classList.toggle('rotate');
}


document.querySelector('main').addEventListener('click', function () {
    if (headerNav.classList.contains('visible')) {
        hideMenu();
    }
});
