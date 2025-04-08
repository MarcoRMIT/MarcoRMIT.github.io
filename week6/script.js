const myButton = document.querySelector("#my-button");
console.log(myButton);

myButton.addEventListener("click", handleClick);
let course = "OART1013";

const myCat = document.querySelector("#my-cat");
console.log(myCat);

myCat.addEventListener("mouseenter", addMe);
myCat.addEventListener("mouseleave", removeMe);

function addMe() {
  myCat.classList.add("round");
}

function removeMe() {
  myCat.classList.remove("round");
}
function handleClick() {
  console.log("did you just click me");
  myCat.classList.toggle("round");
  // header.innerHTML = `<h1> this is OART1013 </h1>`;
}

// const header = document.querySelector("header");
// console.log(header);
// console.log(header.innerHTML);
console.log(header.innerHTML);

header.innerHTML += `<h1> this is ${course} </h1>`;
// console.log(header.innerHTML);

const topHeading = document.querySelector("h1");
topHeading.style.color = "red";

const allParas = document.querySelectorAll("p");

for (let i = 0; i < allParas.length; i++) {
  allParas[i].style.border = "1px solid blue";
  allParas[i].style.backgroundColor = "beige";
}

const sh1 = document.querySelector("#first-subheading");

const blue1 = document.querySelector(".blue-color");

const allSubHeadings = document.querySelectorAll("h2");
