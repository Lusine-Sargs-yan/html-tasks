let btn = document.getElementsById('open-modal');
let modal = document.getElementsById('modal');
btn.addEventListener('click', (target) => {
  modal.classList.remove('hidden');
})