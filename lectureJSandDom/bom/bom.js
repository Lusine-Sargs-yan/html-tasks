console.log("lesson BOM");
console.log(window.location);
if (window.location.pathname.includes("/bom")) {
  console.log("has BOM subPath!");
}
//console.log(window.location.pathname);
const queryString = window.location.search;
console.log(queryString);

const [questionMark, ...queryString1] = window.location.search;
const results = queryString1
  .join("")
  .split("&")
  .map((string) => string.split("="));
//console.log(questionMark, results);


const objectIntoArray = queryString
  .substr(1)
  .split("&")
  .map((string) => {
    const [key, value] = string.split('=');
    return {[key]: value};
  });
console.log(objectIntoArray);