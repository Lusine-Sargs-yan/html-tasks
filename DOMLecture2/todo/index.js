// console.log('todo');
const input = document.querySelector('input');
//console.log(input);
const ul = document.querySelector('.todo-container');// ul -> unordered list
console.log(ul);
const buttn = document.querySelector('button');
console.log(buttn);

buttn.addEventListener('click', () => {
  if(input.value.trim() !== '') {
    const list = document.createElement('li');
    list.textContent = input.value;
    console.log(list);
    ul.appendChild(list);


    // list.addEventListener('click', (event) => {
    //   event.target.style.textDecoration = 'line-through';
    // });// ջնջելու էֆեկտ ստանալու համար


    list.addEventListener('click', (event) => {
      event.target.classList.toggle('checked');
    });
    input.value = '';
  }
});

input.addEventListener('input', (event) => {
  if(event.target.value.trim() !== '') {
    //buttn.disabled = true;
    buttn.removeAttribute('disabled');
  }
})

