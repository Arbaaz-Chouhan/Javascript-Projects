// Selectors
const modalBtn = document.querySelector('.modal-btn');
const modalOverlay = document.querySelector('.modal-overlay');
const closeBtn = document.querySelector('.close-btn');

// Event Listeners
modalBtn.addEventListener('click', () => {
    modalOverlay.classList.add('open-modal');
});

closeBtn.addEventListener('click', () => {
    modalOverlay.classList.remove('open-modal');
});
