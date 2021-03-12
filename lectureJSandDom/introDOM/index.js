// console.log("DOM lesson");
// const header = document.getElementsByTagName('h1');
// console.log(header);//[h1]
// const paragraph = document.getElementsByTagName('p');
// console.log(paragraph);//[p, p, p]

// const header = document.getElementsByClassName('title');
// console.log(header);//[h1.title]
// const paragraph = document.getElementsByClassName('text');
// console.log(paragraph);// [p.text, p.text, p.text]

// const headerID = document.getElementById('header');
// console.log(headerID);//<h1 id="header" class="title">About DOM</h1>


//querySelector ->method the most applicable for all cases
// const header = document.querySelector('h1');
// console.log(header);//<h1 id="header" class="title">About DOM</h1>
// const headerClass = document.querySelector('.title');
// console.log(headerClass);//<h1 id="header" class="title">About DOM</h1>
// const paragraph = document.querySelector('p');
// console.log(paragraph);//<p class="text">

// const paragraphClass = document.querySelector('.text');
// console.log(paragraphClass);//<p class="text">
// const headerID = document.querySelector('#header');
// console.log(headerID);//<h1 id="header" class="title">About DOM</h1>

// //querySelectorAll -> returns all tags into array
// const headerIntoArray = document.querySelectorAll('.title');
// console.log(headerIntoArray);//[h1#header.title]

// const paragraphIntoArray = document.querySelectorAll('.text');
// console.log(paragraphIntoArray);//[p.text, p.text, p.text]


// //using methods
// const headerIDIntoArray = document.querySelectorAll('#header');
// console.log(headerIDIntoArray);// [h1#header.title]

// console.log(headerID.style);//կարող ենք կպնել JS-ից css-ին  և փոփոխություններ անել
// headerID.style.color = 'red';//property should be string example'red'
// console.log(headerID.style);
// header.style.textAlign = 'center';

const paragraphs = document.querySelectorAll('.text');
//console.log(paragraphs);////[p.text, p.text, p.text]

// paragraphs.forEach((elem) => {
//   console.log(elem);
//   const red = Math.random() * 100;
//   const green = Math.random() * 100;
//   const blue= Math.random() * 100;
//   elem.style.color = `rgb ${red}, ${green}, ${blue},`;
// });// does not work
// //console.log(paragraphs, 'aaa');

// add(), remove(), toggle() -> methods
const headerID = document.querySelector('#header');
//headerID.style.color = 'rgba(0, 0, 0, 0.5)';
headerID.style.textAlign = 'center';

//headerID.classList.add('blue');
if(window.location.pathname.includes('/introDOM')) {
  headerID.classList.add('blue');
}

//headerID.classList.remove('title');
headerID.classList.toggle('title1');
