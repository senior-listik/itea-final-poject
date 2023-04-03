const dayToggle = document.querySelector('.home__toggle');

dayToggle.addEventListener('click', toggleStyles);

function toggleStyles() {
    dayToggle.classList.toggle('icon-day');
    dayToggle.classList.toggle('icon-night');
    
}