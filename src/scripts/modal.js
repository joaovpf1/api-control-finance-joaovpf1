/* Desenvolva sua lógica aqui */

function showModal() {
    const modalOpenBttn = document.querySelector('.modal-bttn');
    const modalDialog = document.querySelector('dialog');

    modalOpenBttn.addEventListener('click', () => {
        modalDialog.showModal();
    })
}

showModal();

function openModal() {
    const modalOpenBttn = document.querySelector('.null-container');
    const modalDialog = document.querySelector('dialog');

    modalOpenBttn.addEventListener('click', () => {
        modalDialog.showModal();
    })
}

openModal();

function closeModal() {
    const modalCloseBttn = document.querySelector('.close-bttn');
    const modalDialog = document.querySelector('dialog');

    modalCloseBttn.addEventListener('click', () => {
        modalDialog.close();
    })
}

closeModal();

function cancelModal() {
    const modalCloseBttn = document.querySelector('.bttn-cancel');
    const modalDialog = document.querySelector('dialog');

    modalCloseBttn.addEventListener('click', () => {
        modalDialog.close();
    })
}

cancelModal();

function sendModal() {
    const modalCloseBttn = document.querySelector('.bttn-send');
    const modalDialog = document.querySelector('dialog');

    modalCloseBttn.addEventListener('click', () => {
        modalDialog.close();
    })
}

sendModal();

function captureType() {
    const bttn = document.querySelector('.bttn-send')

    bttn.addEventListener('click', (event) => {
        event.preventDefault();

        const inputRadio = document.querySelector(".input-dialog[type='radio']:checked");
        return inputRadio;

    })


}

