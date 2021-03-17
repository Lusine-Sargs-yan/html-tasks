console.log("DOM Bubbling && capturing");

// document.querySelector(".card").addEventListener("click", () => {
//   console.log("card:::::");//այս դեպքում card'click' անում , ապա աշխատում image և իրանից վերև գտնվող 
//   //բոլոր scope -երում գրվածները այս դեպքում կտպի  ցard
// });


// document.querySelector(".header").addEventListener("click", () => {
//   console.log("header::::");// այս դեպքում header'click' անում , ապա աշխատում image և իրանից վերև գտնվող 
//   //բոլոր scope -երում գրվածները այս դեպքում կտպի  ցard, header
// });


// document.querySelector(".img").addEventListener("click", () => {
//   console.log("image::::"); // եթե img 'click' անում , ապա աշխատում image և իրանից վերև գտնվող 
//   //բոլոր scope -երում գրվածները այս դեպքում կտպի  ցard, header, img
// });


// capturing 
document.querySelector(".card").addEventListener("click", () => {
  console.log("card:::::");//այս դեպքում card 'click' ենք անում , ապա աշխատում է image և իրանից վերև գտնվող 
  //բոլոր scope -երում գրվածները այս դեպքում կտպի  ցard
}, {capture: true});//capture: true թույլ է տալիս տպելու հերթականությունը փոխել

document.querySelector(".header").addEventListener("click", () => {
  console.log("header::::");// այս դեպքում header'click' ենք անում , ապա աշխատում  է image և իրանից վերև գտնվող 
  //բոլոր scope -երում գրվածները այս դեպքում կտպի  ցard, header
}, {capture: true});

document.querySelector(".img").addEventListener("click", () => {
  console.log("image::::"); // եթե img 'click'  ենք անում , ապա աշխատում է image և իրանից վերև գտնվող 
  //բոլոր scope -երում գրվածները այս դեպքում կտպի  ցard, header, img
});




// stopPropagation() method  a lot using method

// document.querySelector(".img").addEventListener("click", (event) => {
//   event.stopPropagation();//իրանից վերև դադարեցնում է աշխատանքը վերև scope -երի հետ և տպում է միայն img
//   console.log("image::::");
// });





