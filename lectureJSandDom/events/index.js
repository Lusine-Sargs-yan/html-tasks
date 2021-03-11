const btn = document.querySelector('.btn');
const desc = document.querySelector('.desc');
btn.addEventListener('click', () => {
  console.log(desc);
  desc.style.color = `rgb(${})`
})