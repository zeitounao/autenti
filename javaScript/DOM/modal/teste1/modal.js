

const buttonOpenModal = document.getElementById('openModal');
const modalWrapper = document.querySelector('.modal-wrapper');

buttonOpenModal.onclick = function() {
    modalWrapper.classList.remove('invisible');
    console.log('removeu o invisible')
}

document.addEventListener('keydown', function(event){
    const apertou_esc = event.key === 'Escape';
    console.log('entrou no evento');
    
    if (apertou_esc) {
        modalWrapper.classList.add('invisible')
        console.log('adicionou o invisible')
    }
})