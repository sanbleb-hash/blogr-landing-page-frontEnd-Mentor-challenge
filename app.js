
const minModal = function (){
    const modal = document.querySelector('.open-btn')

    const modalBtn = document.querySelector('.login')
    
    const closeModal = document.querySelector('.fa-times') 
    
    modal.addEventListener('click', ()=> {
        modalBtn.style.display = 'block'
    } )
    
    closeModal.addEventListener('click', ()=> {
        modalBtn.style.display = 'none'
    })
};

minModal();


const minNavs = function (){

    const downArrow = document.querySelectorAll('.fa-chevron-down');
    const boom = document.querySelectorAll('.accodion');

    downArrow.style.display = 'block';

};
minNavs();