// //document.getElementById("count").innerText = 5;

// //Var with count number
// let count = 5;

// //Count + 1
// count = count + 1; //5 + 1 = 6

// //Send to console (log) "count" size
// console.log(count);

//----------\\

//Initialize the count as 0
//listen for clicks on the increment button
//increment the count variable when the button is clicked
//change the "count" in the HTML to reflect the new count

//camelCase
let countEl = document.getElementById("count-el");
let saveEl = document.getElementById("save-el");
console.log(countEl);

let count = 0;

//This function increment size of count and post this to H2 (in HTML (text in id ("count-el")))
function increment() {
  count += 1;
  countEl.textContent = count;
}

function save() {
  let dash = count + " - ";
  saveEl.textContent += dash;
  countEl.textContent = 0;
  count = 0;
  console.log(count);
}
