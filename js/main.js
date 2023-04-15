// burger menu
const mainElement = document.querySelector('main');
const burgerIcon = document.querySelector('.header__icon');
const headerNav = document.querySelector('.header__nav');
const headerMenu = document.querySelector('.header__menu');

burgerIcon.addEventListener('click', showMenu);
headerMenu.addEventListener('click', hideMenu);

function showMenu() {
    headerNav.classList.toggle('visible');
    burgerIcon.classList.toggle('icon-close');
    burgerIcon.classList.toggle('icon-burger')
}
function hideMenu() {
    headerNav.classList.remove('visible');
    burgerIcon.classList.toggle('icon-close');
    burgerIcon.classList.toggle('icon-burger');
}


mainElement.addEventListener('click', function () {
    if (headerNav.classList.contains('visible')) {
        hideMenu();
    }
});



// show/hide accordion elements of account block (order section)

const accordion = document.querySelector('.order__account-accordion');
const loginAccordion = document.querySelector('.order__account-login');
const SignInAccordion = document.querySelector('.order__account-signin');
const accountLoginBtn = document.querySelector('.order__logBtn');
const accountSignInBtn = document.querySelector('.order__signBtn');
const accountLoginInp = document.getElementById('login');

mainElement.addEventListener('click', hideForm); // hide the form when clicking on the document
// prevent the form from closing when clicking on the form itself
accordion.addEventListener('click', (event) => { event.stopPropagation() });


accountLoginBtn.addEventListener('click', showHideLoginForm); // click on btn
accountSignInBtn.addEventListener('click', showHideSignInForm); // click on btn

// open/close forms with a delay to prevent both forms from opening at the same time
function showHideLoginForm() {
    if (SignInAccordion.classList.contains('hidden')) {
        loginAccordion.classList.toggle('hidden');
    } else {
        setTimeout(() => {loginAccordion.classList.toggle('hidden')}, 500);
        SignInAccordion.classList.add('hidden');
    }
};

function showHideSignInForm() {
     if (loginAccordion.classList.contains('hidden')) {
    SignInAccordion.classList.toggle('hidden');
     } else {
         setTimeout(() => {SignInAccordion.classList.toggle('hidden')}, 500);
     loginAccordion.classList.add('hidden');
     }
};


    // hide the form when clicking on the document
    function hideForm() {
    if (loginAccordion.classList.contains('hidden') === false) {
        loginAccordion.classList.add('hidden');
    } 
    if (SignInAccordion.classList.contains('hidden') === false) {
        SignInAccordion.classList.add('hidden');
    }
};

// Accordion
const accordionTitle = document.querySelectorAll('.accordion__item');

accordionTitle.forEach((el) => { el.addEventListener('click', showForm)});
function showForm(){
    this.nextElementSibling.classList.toggle('hidden');
    this.lastElementChild.classList.toggle('rotate');
}