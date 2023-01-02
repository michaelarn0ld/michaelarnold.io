const modal = document.querySelector('#modal')
const closeBtn = document.querySelector('.modal-close')

const closeModal = () => {
    modal.style.display = 'none'
}

const outsideClick = (e) => {
    if(e.target == modal) {
        modal.style.display = 'none'
    }
}

closeBtn.addEventListener('click', closeModal)
window.addEventListener('click', outsideClick)
