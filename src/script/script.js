const btnsOpenModal = document.querySelectorAll('.btn__open');
function openModal(){
  document.querySelector('.overlay').classList.add('active');
  document.body.classList.add('no-scroll');
}
function closeModal(){
  document.querySelector('.overlay').classList.remove('active');
  document.body.classList.remove('no-scroll');
}
btnsOpenModal.forEach(btn=>{
  btn.addEventListener('click',openModal);
})

document.querySelector('.modal__close').addEventListener('click', closeModal);
window.addEventListener('click',e=>{
  if(e.target.classList.contains('modal')|| e.target.classList.contains('overlay')){
    closeModal();
  }
})
document.querySelector('.modal__btn').addEventListener('click', closeModal);
