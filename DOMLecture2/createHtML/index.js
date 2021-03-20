console.log("hello");
const buttn = document.querySelector(".submit-btn");
const input = document.querySelector(".search-input");
//const paragraph = document.querySelector(".paragraph");
//console.log(btn);
//console.log(input);
const header = document.querySelector("h1");

buttn.addEventListener("click", (event) => {
  // console.log(event);
  // event.target.textContent = 'Search';
  //console.log(input.value);
  //header.textContent = input.value;
  //paragraph.textContent += input.value;
  //paragraph.textContent = input.value;
  const createOwnParagraph = document.createElement("p"); // we can create ftml tags using js
  // //in this way we can create any element
  createOwnParagraph.textContent = input.value;
  console.log(createOwnParagraph);
  document.querySelector('.container').append(createOwnParagraph);
  input.value = "";


  // the other method innerHTML all button disapear
  // document.querySelector('.container').innerHTML = '<p>greetings</p>';
  // input.value = "";


});
input.addEventListener("input", (event) => {
  // console.log(event);
  // console.log(event.target.value);
  //event.target.value = 'greetings';
  //console.log(event.target.value);
  //console.log(`+${event.target.value}`);
  //event.target.value = `+${event.target.value}`;
  //console.log(event.data);//ամեն անգամ տպում է նիշը կամ տառը
  //console.log(event.data === '+');
  //console.log(event.target.value.includes('+'));

  // const value = event.target.value;
  // if(event.data === '+' && value.includes('+')) {
  //   event.target.value = value.slice(0, value.length - 1);
  //   return;
  // }
  // const normalizedValue = value.replace('+', '');
  // event.target.value = `+${normalizedValue}`;

  // the other task
  const value = event.target.value;
  if (event.data === "+" && value.includes("+")) {
    event.target.value = value.slice(0, value.length - 1);
    return;
  }
  const normalizedValue = value
    .replace("+", "")
    .split("")
    .reduce((acc, elem, index) => {
      if ((index + 1) % 4 === 0 && elem !== " ") {
        return `${acc} ${elem}`;
      }

      return `${acc}${elem}`;
    }, "");
  event.target.value = `+${normalizedValue}`;
});
// 4 => +374 443 433
// 3 => +37
// input.addEventListener("input", (event) => {
//   const value = event.target.value;

//   if (event.data === "+" && value.includes("+")) {
//     event.target.value = value.slice(0, value.length - 1);
//     return;
//   }

//   const normalizedValue = value
//     .replace("+", "")
//     .split("")
//     .reduce((acc, el, index) => {
//       if ((index + 1) % 4 === 0 && el !== " ") {
//         return `${acc} ${el}`;
//       }

//       return `${acc}${el}`;
//     }, "");
//   event.target.value = `+${normalizedValue}`;
// });

// // 4 => +374 443 433
// // 3 => +37
