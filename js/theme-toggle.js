
// // creating variables
// const mobileToggle = document.getElementById('toggle1');
// const desktopToggle = document.getElementById('toggle2');
// let dayToggle;
// const linkTheme = document.querySelector('[title="theme"]');

// let themeUrl = "./css/day-theme.css"; //path to css file with light styles
// changeToggle();
// window.onresize = changeToggle;
// function changeToggle() {
//     if (window.innerWidth > 992) {
//         desktopToggle.classList.remove('hide');
//         mobileToggle.classList.add('hide');
//         dayToggle = desktopToggle;
//     } else {
//         mobileToggle.classList.remove('hide');
//         desktopToggle.classList.add('hide');
//         dayToggle = mobileToggle;
//     }
// }

// dayToggle.addEventListener('click', toggleTheme);


// // the function of switching styles by connecting a css file with light styles + switching icons
// function toggleTheme() {
//     console.log(dayToggle);
//     dayToggle.classList.toggle('icon-day');
//     dayToggle.classList.toggle('icon-night');
    
//     if (linkTheme.hasAttribute('href')) {
//         linkTheme.removeAttribute('href');
//         localStorage.removeItem('theme');
//     } else {
//         linkTheme.setAttribute('href', themeUrl);
//         localStorage.setItem('theme', 'day'); //saving light theme to local storage
//     }
    
// }

// // checking if light theme exists in local storage and enable it
// let activeTheme = localStorage.getItem('theme');

// if (activeTheme === 'day') {
//     linkTheme.setAttribute('href', themeUrl);
//     localStorage.setItem('theme', 'day');
//     dayToggle.classList.toggle('icon-day');
//     dayToggle.classList.toggle('icon-night');
// }





// creating variables
const mobileToggle = document.getElementById('toggle1');
const desktopToggle = document.getElementById('toggle2');
const linkTheme = document.querySelector('[title="theme"]');

let themeUrl = "./css/day-theme.css"; //path to css file with light styles
changeToggle();
window.onresize = changeToggle;
function changeToggle() {
    if (window.innerWidth > 992) {
        desktopToggle.classList.remove('hide');
        mobileToggle.classList.add('hide');
    } else {
        mobileToggle.classList.remove('hide');
        desktopToggle.classList.add('hide');
    }
}

mobileToggle.addEventListener('click', toggleThemeMob);
desktopToggle.addEventListener('click', toggleThemeDesktop);

// the function of switching styles by connecting a css file with light styles + switching icons
function toggleThemeMob() {
    mobileToggle.classList.toggle('icon-day');
    mobileToggle.classList.toggle('icon-night');
    
    if (linkTheme.hasAttribute('href')) {
        linkTheme.removeAttribute('href');
        localStorage.removeItem('theme');
    } else {
        linkTheme.setAttribute('href', themeUrl);
        localStorage.setItem('theme', 'day'); //saving light theme to local storage
    }
    
}

function toggleThemeDesktop() {
    desktopToggle.classList.toggle('icon-day');
    desktopToggle.classList.toggle('icon-night');
    
    if (linkTheme.hasAttribute('href')) {
        linkTheme.removeAttribute('href');
        localStorage.removeItem('theme');
    } else {
        linkTheme.setAttribute('href', themeUrl);
        localStorage.setItem('theme', 'day'); //saving light theme to local storage
    }
    
}

// checking if light theme exists in local storage and enable it
let activeTheme = localStorage.getItem('theme');

if (activeTheme === 'day') {
    linkTheme.setAttribute('href', themeUrl);
    localStorage.setItem('theme', 'day');
    mobileToggle.classList.toggle('icon-day');
    mobileToggle.classList.toggle('icon-night');
    desktopToggle.classList.toggle('icon-day');
    desktopToggle.classList.toggle('icon-night');
}




