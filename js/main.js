// burger menu
const burger = document.querySelector('.icon-burger');
const navMenu = document.querySelector('.header__nav');
const menu = document.querySelector('.header__menu');
burger.addEventListener('click', showMenu);

function showMenu() {
    burger.classList.toggle('rotate');
    navMenu.classList.toggle('visible');
}
menu.addEventListener('click', showMenu);
document.querySelector('main').addEventListener('click', function () {
    if (navMenu.classList.contains('visible')) {
        navMenu.classList.remove('visible');
        burger.classList.toggle('rotate');
    }
});
