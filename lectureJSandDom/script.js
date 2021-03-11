// const header = document.getElementsByName("h1");
// console.log(header);
//const pharagraph
const header = document.querySelector("#header");
const pharagraphs = document.querySelector(".text");
header.style.color = "red";
header.style.textAlign = "center";
console.log(header.style);
pharagraphs.forEach(element => {
  const hue = Math.random() * 100;
  const sat = Math.random() * 100;
  const lightness = Math.random() * 100;
  element.style.color = `hsl${hue} ${sat} ${lightness}`;
});

if(window.location.pathname.includes('/lectureJSandDom')) {
  header.classList.add("blue");
}
header.classList.toggle('title')