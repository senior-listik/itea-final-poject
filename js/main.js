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
    burgerIcon.classList.toggle('icon-close');
    burgerIcon.classList.toggle('icon-burger');
    // burgerIcon.classList.toggle('rotate');
}


document.querySelector('main').addEventListener('click', function () {
    if (headerNav.classList.contains('visible')) {
        hideMenu();
    }
});



// hide accordion elements
const loginAccordion = document.querySelector('.order__account-login');
const accountLoginBtn = document.querySelector('.order__logBtn');
const accountLoginInp = document.getElementById('login');

accountLoginBtn.addEventListener('click', (event) => { event.stopPropagation() });
accountLoginInp.addEventListener('click', (event) => { event.stopPropagation() });
accountLoginBtn.addEventListener('click', function () {
    loginAccordion.classList.toggle('hidden');
});

document.querySelector('main').addEventListener('click', function () {
    if (loginAccordion.classList.contains('hidden') === false) {
        loginAccordion.classList.add('hidden');
    }
});