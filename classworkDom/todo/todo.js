const button = document.getElementById('submitButton');
//console.log(button);

const searchInput = document.getElementById('searchInput');

const list = document.getElementById('todoList');
const btn = document.createElement('button');
const editInput = document.createElement('input');

button.addEventListener('click', (event) => {
  // //console.log(event);
  // //const div1 = document.createElement('div');
  // //console.log(div1);
  // const paragraph = document.createElement('p');
  // paragraph.textContent = searchInput.value;
  // //console.log(paragraph);
  // //div1.append(paragraph);
  // //console.log(div1);// print <p> learn js</p>
  // //list.append(div1);
  // list.append(paragraph);
  // //console.log(list);
  // searchInput.value = '';



  const todo = document.createElement('div');
  todo.textContent = searchInput.value;
  //btn.textContent = 'Edit';
  //todo.append(btn);
  list.append(todo);
  searchInput.value = '';

});


let isInEditMode = false;
list.addEventListener('click', (event) => {
  console.log(event.target);
  // console.log(event.target.id);
  // document.getElementById(event.target.id).remove();
  //event.target.remove();// when click  remove printed element
  
  // editInput.value = event.target.innerText;
  // // event.target.append(editInput);
  // //console.log(editInput);
  // event.target.replaceChildren(editInput);
  // console.log(event.target.firstChild);
  if(!isInEditMode) {
    editInput.value = event.target.innerText;
    event.target.replaceChildren(editInput);

  }

  isInEditMode = true;


  //event.target = editInput;

});