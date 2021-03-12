console.log('hi');

const button = document.querySelector('.submit-btn');
const input = document.querySelector('.search-input');
const header = document.querySelector('.h1');
console.log(button);
console.log(input);

button.addEventListener('click', (event) => {
  console.log(event);
  event.target.textContent = "Search";
  const paragraph = document.createElement('p');
  paragraph.textContent = input.value;
  console.log(paragraph);
});
input.addEventListener("click", (event) => {
  const value = event.target.value;
  //event.target.value = "Hello";
  if(event.data === '+' && value.includes('+')) {
    event.target.value = value.slice(0, value.length - 1);
    console.log('here');
    return;
  }
  const normalizedValue = value.replace('+', '').split('').reduce((acc, elem, index) => {
    if((index + 1) % 4 === 0 && elem !== " ") {
      return `${acc}${elem}`
    }
  });

});


