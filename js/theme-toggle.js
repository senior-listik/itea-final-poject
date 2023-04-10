// creating variables
const dayToggle = document.querySelector('.home__toggle');
const linkTheme = document.querySelector('[title="theme"]');

let themeUrl = "./css/day-theme.css"; //path to css file with light styles

dayToggle.addEventListener('click', toggleTheme);
dayToggle.addEventListener('touchend', toggleTheme);


// the function of switching styles by connecting a css file with light styles + switching icons
function toggleTheme() {
    dayToggle.classList.toggle('icon-day');
    dayToggle.classList.toggle('icon-night');
    
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
    dayToggle.classList.toggle('icon-day');
    dayToggle.classList.toggle('icon-night');
}