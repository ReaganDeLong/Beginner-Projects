const button = document.querySelector('.button');
const close = document.querySelector('.close');
const modal = document.querySelector('.modal-container');
const modalContent = document.querySelector('.modal-content');

button.addEventListener('click', openModal);
close.addEventListener('click', closeModal);

function openModal() {
    modal.style.display = "block";
}

function closeModal() {
    modalContent.classList.add('slide-up');
    setTimeout(() => {
        modal.style.display = "none";
        modalContent.classList.remove('slide-up');
    }, 800);
}