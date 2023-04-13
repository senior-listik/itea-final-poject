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



// // creating variables
// const mobileToggle = document.getElementById('toggle1');
// const linkTheme = document.querySelector('[title="theme"]');
// const desktopToggle = document.getElementById('toggle2');
// let themeUrl = "./css/day-theme.css"; //path to css file with light styles

// mobileToggle.addEventListener('click', toggleTheme);
// desktopToggle.addEventListener('click', toggleTheme);


// // the function of switching styles by connecting a css file with light styles + switching icons
// function toggleTheme() {

//     if (mobileToggle) {
//         mobileToggle.classList.toggle('icon-day');
//         mobileToggle.classList.toggle('icon-night');
    
//         if (linkTheme.hasAttribute('href')) {
//             linkTheme.removeAttribute('href');
//             localStorage.removeItem('theme');
//         } else {
//             linkTheme.setAttribute('href', themeUrl);
//             localStorage.setItem('theme', 'day'); //saving light theme to local storage
//         }
//     } else if (desktopToggle) {
//         desktopToggle.classList.toggle('icon-day');
//     desktopToggle.classList.toggle('icon-night');
    
//     if (linkTheme.hasAttribute('href')) {
//         linkTheme.removeAttribute('href');
//         localStorage.removeItem('theme');
//     } else {
//         linkTheme.setAttribute('href', themeUrl);
//         localStorage.setItem('theme', 'day'); //saving light theme to local storage
//     }
//     }
    
// }

// // checking if light theme exists in local storage and enable it
// let activeTheme = localStorage.getItem('theme');

// if (activeTheme === 'day') {
//     linkTheme.setAttribute('href', themeUrl);
//     localStorage.setItem('theme', 'day');
//     mobileToggle.classList.toggle('icon-day');
//     mobileToggle.classList.toggle('icon-night');
//     desktopToggle.classList.toggle('icon-day');
//     desktopToggle.classList.toggle('icon-night');
// }





// // the function of switching styles by connecting a css file with light styles + switching icons
// function toggleTheme() {
    
    
// }

// // checking if light theme exists in local storage and enable it

// if (activeTheme === 'day') {
//     linkTheme.setAttribute('href', themeUrl);
//     localStorage.setItem('theme', 'day');
    
// }