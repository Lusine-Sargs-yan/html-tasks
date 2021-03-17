const buttn = document.getElementById('submit-button');
const searchInput = document.getElementById('search-input');
const list = document.getElementById('todo-list');
const btn = document.createElement('button');
const editInput = document.createElement('input');

buttn.addEventListener('click', (event) => {
  const toDo= document.createElement('div');
  //const paragraph = document.createElement('p');
  //toDo.textContent = searchInput.value;
  //btn.textContent = 'Edit';
  toDo.textContent = searchInput.value;
  // container.append(paragraph);
  // console.log(container);
  // div.append('paragraph');
  // console.log(div);
  toDo.append(btn);
  list.append(toDo);
  searchInput.value = '';
});

// list.addEventListener('click', (event) => {
//   //console.log(event.target.id);
//   //document.getElementById(event.target.id).remove();
//   console.log(event.target);
//   // editInput.value = event.target.innerText;
//   editInput.value = event.target.innerText;
//   //event.target = editInput;
//   event.target.replaceChildren(editInput);
//   console.log(event.target.firstChild);


// })