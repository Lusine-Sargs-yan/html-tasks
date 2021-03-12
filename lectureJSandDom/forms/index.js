console.log('DOM lesson');
const userNameField = document.querySelector('.user-name');
console.log(userNameField);//<input class="user-name">

const buttn = document.querySelector('.user-submit-button');
const error = document.querySelector('.error');


//case 1
// userNameField.addEventListener('input', (event) => {
//   //console.log('input', event);
//   //console.log('input', event.target.value);
//   const username = event.target.value;
//   if(username.trim() === '') {
//     console.log('empty value');
//   } 

//   if(username.trim().length < 5) {
//     console.log('user name is short');
//     error.style.display = 'block';
//   } else {
//     error.style.display = 'none';
//   }
// });

// case2
buttn.addEventListener('click', () => {
  //console.log(userNameField.value);
  const username = userNameField.value;
  if(username.trim().length < 5) {
    console.log("username is short");
    error.style.display = "block";
  } else {
    error.style.display = "none";
  }
});