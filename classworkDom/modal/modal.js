const btn = document.getElementById('open-modal');
const modal = document.getElementById('modal');
btn.addEventListener('click', () => {

  modal.classList.remove('hidden');
  btn.textContent = '';

});