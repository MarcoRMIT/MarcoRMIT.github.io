// string variables = use quotes
let Myname = "Marco";
let myID = "s4081354";
let myNewName = "Melbourne";
let myCity = "Jakarta";

// number variables
let num = 10;
let num2 = parseInt("20");
let sum = num + num2;
console.log("total is", sum);

// + for addition as well as joining texts
// -b for subtraction
// * for multiplication
// /

const weather = "Sunny and Bright";
const msg = `<h1>Today's wether is ${weather}
<p> this is so nice to see the sun again </p>

</h1>`;
console.log(msg);

//boolean variables - true or false
let isThisEvening = false;
let isThisRMIT = true;

//object variables {}
const myStudentDetails = {
  name: "Marco",
  id: 1234,
  hometown: "Melbourne",
};

let array = [2, 4, 6, 8, 10];
let student1 = "Rohit";
let student2 = "Roger";
console.log(student1, student2);
let studentArray = ["Rohit", "Roger", "Sarah", "Julia", "Tim"];
console.log(studentArray[2]);

console.log(myStudentDetails);
console.log("my hometown is", myStudentDetails.hometown);

console.log("Hi");
console.log("How are you buddy?");

// I am declaring a variable called myName to contain my name
console.log("Hi, I am", Myname);
console.log("Hi,, my student id is", myID);
Myname = "abcd";
console.log("Hi, I am", Myname);
//let myNewName = prompt("What is your name");
console.log("Hello", myNewName);
console.log("Hello", myNewName, myCity);

// if you know the value is not going to change, define it using const
// or else use let
let a = 30;
{
  let a = 10;
  console.log("Hello", a);
}
