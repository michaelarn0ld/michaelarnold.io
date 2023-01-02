const modal = document.querySelector('#modal')

const outsideClick = (e) => {
    if(e.target == modal) {
        modal.style.display = 'none'
    }
}

window.addEventListener('click', outsideClick)
