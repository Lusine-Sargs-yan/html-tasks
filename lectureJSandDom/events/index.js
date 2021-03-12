const buttn = document.querySelector(".btn");
console.log(buttn);
const descriptions = document.querySelector(".description");
const modalButton = document.querySelector('.modal-btn');
const modalBody = document.querySelector('.modal');


//with  declaring variable
// const changeColor = buttn.addEventListener("click", () => {
//   console.log('clicked', 'aaaa');
  
// });
// console.log(changeColor);


buttn.addEventListener("click", (target) => {
  //console.log(target, 'clicked');
  console.log('clicked', 'count');
  console.log(descriptions);
  descriptions.style.color = `rgb(${Math.random() * 100}, ${Math.random() * 100}, ${
    Math.random() * 100
  })`;//'red';
});

modalButton.addEventListener('click', (target) =>  {
  console.log(target);//target -> թե որտեղ է click եղել
  modalBody.classList.toggle('modal-active');
});